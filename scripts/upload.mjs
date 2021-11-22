#!/usr/bin/env node
import { Writable } from "stream";
import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs";
import kv from "cloudflare-workers-kv";
import readline from "readline";
import util from "util";

/** Command-line script to parse & upload blog posts.
 *
 * @example
 * find src -name "*.md" | node_modules/.bin/node scripts/upload.mjs
 *
 */
function main() {
  // Set up WorkersKV & load variables from <PROJECT_ROOT>/.env into
  // memory.
  init();

  // Set up readline to read from stdin
  const rl = readline.createInterface({
    input: process.stdin,
    output: new Writable(),
    terminal: false,
  });
  rl.on("line", (line) => {
    slurpArticle(line);
  });
}

async function init() {
  dotenv.config();
  global.fetch = fetch;
  global.TextEncoder = util.TextEncoder;
  global.TextDecoder = util.TextDecoder;
  kv.init({
    variableBinding: process.env.KV_BINDING,
    namespaceId: process.env.NAMESPACE_ID,
    accountId: process.env.ACCOUNT_ID,
    email: process.env.EMAIL_ADDR,
    apiKey: process.env.WORKERS_KV_API_TOKEN,
  });
}

// Create a read stream from the article content
async function slurpArticle(pathToBlogPost) {
  const blogStream = fs.createReadStream(pathToBlogPost);
  const datePattern = /20\d{2}\/\d{2}\/\d{2}/g;
  blogStream.on("data", (chunk) =>
    parseAndPutPayload(chunk, pathToBlogPost.match(datePattern)?.[0])
  );
}

// Parse the blog post to separate the metadata from the blog post, then
// upload the post + metadata to WorkersKV
async function parseAndPutPayload(chunk, key) {
  const ptn =
    /(public: (?<public>yes|no)\n)?(tags: \[(?<tags>.*)\]\n)?(summary: (?<summary>.*))?/;
  const str = chunk.toString();
  const body = str.substr(str.indexOf("\n\n"));
  const groups = str.match(ptn)?.groups;
  const payload = {
    ...groups,
    body: body.trim(),
  };
  return kv.put(key, JSON.stringify(payload));
}

main();
