(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key2 of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key2) && key2 !== "default")
          __defProp(target, key2, { get: () => module[key2], enumerable: !(desc = __getOwnPropDesc(module, key2)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // .svelte-kit/output/server/chunks/__layout-1c0d4c41.js
  var layout_1c0d4c41_exports = {};
  __export(layout_1c0d4c41_exports, {
    default: () => _layout
  });
  var _layout;
  var init_layout_1c0d4c41 = __esm({
    ".svelte-kit/output/server/chunks/__layout-1c0d4c41.js"() {
      init_app_e7e9dddf();
      _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<div class="${"container"}"><div class="${"span-24 last"}" id="${"header"}"><a href="${"http://mattdeboard.net"}">Matt DeBoard</a></div>

  <div class="${"span-24"}" id="${"menu"}"><a href="${"http://mattdeboard.net/projects/"}">projects</a>
    <a href="${"http://twitter.com/#%21/matt_deboard"}" target="${"_blank"}">twitter</a>
    <a href="${"https://github.com/mattdeboard"}" target="${"_blank"}">github</a>
    <a href="${"http://mattdeboard.tumblr.com"}" target="${"_blank"}">tumblr archives</a>
    <a href="${"http://mattdeboard.net/feed.atom"}" target="${"_blank"}">rss feed</a></div>

  <div class="${"span-14"}" id="${"content"}">${slots.default ? slots.default({}) : ``}</div>

  <div class="${"span-24 last"}" id="${"footer"}"></div>
  <div class="${"span-24 last"}" id="${"disqus_thread"}"></div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/error-3ce47af2.js
  var error_3ce47af2_exports = {};
  __export(error_3ce47af2_exports, {
    default: () => Error2,
    load: () => load
  });
  function load({ error: error2, status }) {
    return { props: { error: error2, status } };
  }
  var Error2;
  var init_error_3ce47af2 = __esm({
    ".svelte-kit/output/server/chunks/error-3ce47af2.js"() {
      init_app_e7e9dddf();
      Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { status } = $$props;
        let { error: error2 } = $$props;
        if ($$props.status === void 0 && $$bindings.status && status !== void 0)
          $$bindings.status(status);
        if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
          $$bindings.error(error2);
        return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-5442bbd0.js
  var index_5442bbd0_exports = {};
  __export(index_5442bbd0_exports, {
    default: () => Routes
  });
  var ArticleSummary, Routes;
  var init_index_5442bbd0 = __esm({
    ".svelte-kit/output/server/chunks/index-5442bbd0.js"() {
      init_app_e7e9dddf();
      ArticleSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { date: date18, summary, title } = $$props;
        if ($$props.date === void 0 && $$bindings.date && date18 !== void 0)
          $$bindings.date(date18);
        if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
          $$bindings.summary(summary);
        if ($$props.title === void 0 && $$bindings.title && title !== void 0)
          $$bindings.title(title);
        return `<div class="${"entry-overview"}"><div class="${"date"}">${escape(date18)}</div>
  <div class="${"detail"}"><a${add_attribute("href", `/${date18}`, 0)}>${escape(title)}</a>

    <div class="${"summary"}"><p>${escape(summary)}</p></div></div></div>
<hr>`;
      });
      Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let articles = [
          {
            summary: "Use git & Python to auto-generate changelogs.",
            title: "Using git & Python to autogen changelogs",
            date: "2014/01/14"
          },
          {
            summary: "mono-service + supervisor",
            title: "How to Run a Windows Service As A Linux Daemon",
            date: "2012/10/19"
          },
          {
            summary: "Is programming an 'elite' career?",
            title: "Larry the Software Guy",
            date: "2012/10/05"
          },
          {
            summary: "A drop-in Haystack resource class for django-tastypie APIs.",
            title: "REST API for search results",
            date: "2012/02/07"
          },
          {
            summary: "",
            title: "Displacing MySQL with...Solr?,",
            date: "2011/12/29"
          },
          {
            summary: "",
            title: "How I Became a Programmer,",
            date: "2011/11/23"
          },
          {
            summary: "Help with hitting eject from Facebook",
            title: "Export ALL Your Facebook Photos Easily",
            date: "2011/07/01"
          },
          {
            summary: "In which hard work pays off.",
            title: "Changing Careers at 31",
            date: "2011/06/17"
          },
          {
            summary: "Generate LaTeX-formatted string representation of a Chebyshev polynomial of nth degree.",
            title: "Chebyshev polynomials in LaTeX",
            date: "2011/05/13"
          },
          {
            summary: "A setback is just a setup for a-- oh dear I frew up.",
            title: "Python-Powered Smash'n'Grab",
            date: "2011/05/12"
          },
          {
            summary: "Config & maintenance of Armin Ronacher's rstblog",
            title: "My guide to rstblog",
            date: "2011/05/09"
          },
          {
            summary: "Haystack/Whoosh auto-update script for Django",
            title: "Haystack index update script + cronjob",
            date: "2011/05/08"
          },
          {
            summary: "Be lazy.",
            title: "Python code deployment with Fabric",
            date: "2011/05/06"
          },
          {
            summary: "Derek died.",
            title: "No Regrets,",
            date: "2011/05/04"
          },
          {
            summary: "My latest projects",
            title: "Latest work",
            date: "2011/02/14"
          },
          {
            summary: "New blog",
            title: "No More Tumblr",
            date: "2011/01/27"
          },
          {
            summary: "A recap of my work with Trunk.ly.",
            title: "Initiative and Assistance",
            date: "2010/12/27"
          }
        ];
        return `${each(articles, (article) => `${validate_component(ArticleSummary, "ArticleSummary").$$render($$result, Object.assign(article), {}, {})}`)}`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/SvelteMarkdown-475bb881.js
  function getDefaults$1() {
    return {
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }
  function changeDefaults$1(newDefaults) {
    defaults$5.exports.defaults = newDefaults;
  }
  function escape$3(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  function unescape$1(html) {
    return html.replace(unescapeTest, (_, n) => {
      n = n.toLowerCase();
      if (n === "colon")
        return ":";
      if (n.charAt(0) === "#") {
        return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return "";
    });
  }
  function edit$1(regex, opt) {
    regex = regex.source || regex;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        val = val.source || val;
        val = val.replace(caret, "$1");
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: () => {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  function cleanUrl$1(sanitize, base2, href) {
    if (sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
        return null;
      }
    }
    if (base2 && !originIndependentUrl.test(href)) {
      href = resolveUrl(base2, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return href;
  }
  function resolveUrl(base2, href) {
    if (!baseUrls[" " + base2]) {
      if (justDomain.test(base2)) {
        baseUrls[" " + base2] = base2 + "/";
      } else {
        baseUrls[" " + base2] = rtrim$1(base2, "/", true);
      }
    }
    base2 = baseUrls[" " + base2];
    const relativeBase = base2.indexOf(":") === -1;
    if (href.substring(0, 2) === "//") {
      if (relativeBase) {
        return href;
      }
      return base2.replace(protocol, "$1") + href;
    } else if (href.charAt(0) === "/") {
      if (relativeBase) {
        return href;
      }
      return base2.replace(domain, "$1") + href;
    } else {
      return base2 + href;
    }
  }
  function merge$2(obj) {
    let i = 1, target, key2;
    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key2 in target) {
        if (Object.prototype.hasOwnProperty.call(target, key2)) {
          obj[key2] = target[key2];
        }
      }
    }
    return obj;
  }
  function splitCells$1(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped2 = false, curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped2 = !escaped2;
      if (escaped2) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i = 0;
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim$1(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.substr(0, l - suffLen);
  }
  function findClosingBracket$1(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    const l = str.length;
    let level = 0, i = 0;
    for (; i < l; i++) {
      if (str[i] === "\\") {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation$1(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
  }
  function repeatString$1(pattern, count) {
    if (count < 1) {
      return "";
    }
    let result = "";
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }
  function outputLink(cap, link, raw) {
    const href = link.href;
    const title = link.title ? escape$2(link.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      return {
        type: "link",
        raw,
        href,
        title,
        text
      };
    } else {
      return {
        type: "image",
        raw,
        href,
        title,
        text: escape$2(text)
      };
    }
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  function smartypants(text) {
    return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
  }
  function mangle(text) {
    let out = "", i, ch;
    const l = text.length;
    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  }
  function marked(src, opt, callback) {
    if (typeof src === "undefined" || src === null) {
      throw new Error("marked(): input parameter is undefined or null");
    }
    if (typeof src !== "string") {
      throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
    }
    if (typeof opt === "function") {
      callback = opt;
      opt = null;
    }
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    if (callback) {
      const highlight = opt.highlight;
      let tokens;
      try {
        tokens = Lexer$1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }
      const done = function(err) {
        let out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = Parser2.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }
        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length)
        return done();
      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        if (token.type === "code") {
          pending++;
          setTimeout(() => {
            highlight(token.text, token.lang, function(err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    try {
      const tokens = Lexer$1.lex(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      return Parser2.parse(tokens, opt);
    } catch (e) {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (opt.silent) {
        return "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
      }
      throw e;
    }
  }
  var Parser$1, defaults$5, escapeTest, escapeReplace, escapeTestNoEncode, escapeReplaceNoEncode, escapeReplacements, getEscapeReplacement, unescapeTest, caret, nonWordAndColonTest, originIndependentUrl, baseUrls, justDomain, protocol, domain, noopTest$1, helpers, defaults$4, rtrim, splitCells, escape$2, findClosingBracket, Tokenizer_1, noopTest2, edit, merge$1, block$1, inline$1, rules, Tokenizer$1, defaults$3, block, inline, repeatString, Lexer_1, defaults$2, cleanUrl, escape$1, Renderer_1, TextRenderer_1, Slugger_1, Renderer$1, TextRenderer$1, Slugger$1, defaults$1, unescape, Parser_1, Lexer$1, Parser2, Tokenizer2, Renderer2, TextRenderer2, Slugger$2, merge, checkSanitizeDeprecation, escape2, getDefaults, changeDefaults, defaults, marked_1, key, Heading, Paragraph, Text, Image, Link, Em, Del, Codespan, Strong, Table, TableHead, TableBody, TableRow, TableCell, List, ListItem, Hr, Html, Blockquote, Code, Br, defaultRenderers, defaultOptions, Lexer2, Slugger2, SvelteMarkdown;
  var init_SvelteMarkdown_475bb881 = __esm({
    ".svelte-kit/output/server/chunks/SvelteMarkdown-475bb881.js"() {
      init_app_e7e9dddf();
      Parser$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let $$restProps = compute_rest_props($$props, ["type", "tokens", "ordered", "renderers"]);
        let { type = void 0 } = $$props;
        let { tokens = void 0 } = $$props;
        let { ordered = false } = $$props;
        let { renderers } = $$props;
        if ($$props.type === void 0 && $$bindings.type && type !== void 0)
          $$bindings.type(type);
        if ($$props.tokens === void 0 && $$bindings.tokens && tokens !== void 0)
          $$bindings.tokens(tokens);
        if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
          $$bindings.ordered(ordered);
        if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
          $$bindings.renderers(renderers);
        return `${!type ? `${each(tokens, (token) => `${validate_component(Parser$1, "svelte:self").$$render($$result, Object.assign(token, { renderers }), {}, {})}`)}` : `${renderers[type] ? `${type === "table" ? `${validate_component(renderers.table || missing_component, "svelte:component").$$render($$result, {}, {}, {
          default: () => `${validate_component(renderers.tablehead || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => `${each(tokens.header, (cells, i) => `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render($$result, {
                header: true,
                align: $$restProps.align[i] || "center"
              }, {}, {
                default: () => `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: cells, renderers }, {}, {})}
              `
              })}`)}`
            })}`
          })}
        ${validate_component(renderers.tablebody || missing_component, "svelte:component").$$render($$result, {}, {}, {
            default: () => `${each(tokens.cells, (row) => `${validate_component(renderers.tablerow || missing_component, "svelte:component").$$render($$result, {}, {}, {
              default: () => `${each(row, (cells, i) => `${validate_component(renderers.tablecell || missing_component, "svelte:component").$$render($$result, {
                header: false,
                align: $$restProps.align[i] || "center"
              }, {}, {
                default: () => `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: cells, renderers }, {}, {})}
                `
              })}`)}
            `
            })}`)}`
          })}`
        })}` : `${type === "list" ? `${ordered ? `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
          default: () => `${each($$restProps.items, (item) => `${validate_component(renderers.orderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
            default: () => `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `
          })}`)}`
        })}` : `${validate_component(renderers.list || missing_component, "svelte:component").$$render($$result, Object.assign({ ordered }, $$restProps), {}, {
          default: () => `${each($$restProps.items, (item) => `${validate_component(renderers.unorderedlistitem || renderers.listitem || missing_component, "svelte:component").$$render($$result, Object.assign(item), {}, {
            default: () => `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens: item.tokens, renderers }, {}, {})}
            `
          })}`)}`
        })}`}` : `${validate_component(renderers[type] || missing_component, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {
          default: () => `${tokens ? `${validate_component(Parser$1, "svelte:self").$$render($$result, { tokens, renderers }, {}, {})}` : `${escape($$restProps.raw)}`}`
        })}`}`}` : ``}`}`;
      });
      defaults$5 = { exports: {} };
      defaults$5.exports = {
        defaults: getDefaults$1(),
        getDefaults: getDefaults$1,
        changeDefaults: changeDefaults$1
      };
      escapeTest = /[&<>"']/;
      escapeReplace = /[&<>"']/g;
      escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
      escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
      escapeReplacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      getEscapeReplacement = (ch) => escapeReplacements[ch];
      unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
      caret = /(^|[^\[])\^/g;
      nonWordAndColonTest = /[^\w:]/g;
      originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
      baseUrls = {};
      justDomain = /^[^:]+:\/*[^/]*$/;
      protocol = /^([^:]+:)[\s\S]*$/;
      domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
      noopTest$1 = { exec: function noopTest() {
      } };
      helpers = {
        escape: escape$3,
        unescape: unescape$1,
        edit: edit$1,
        cleanUrl: cleanUrl$1,
        resolveUrl,
        noopTest: noopTest$1,
        merge: merge$2,
        splitCells: splitCells$1,
        rtrim: rtrim$1,
        findClosingBracket: findClosingBracket$1,
        checkSanitizeDeprecation: checkSanitizeDeprecation$1,
        repeatString: repeatString$1
      };
      ({ defaults: defaults$4 } = defaults$5.exports);
      ({
        rtrim,
        splitCells,
        escape: escape$2,
        findClosingBracket
      } = helpers);
      Tokenizer_1 = class Tokenizer {
        constructor(options2) {
          this.options = options2 || defaults$4;
        }
        space(src) {
          const cap = this.rules.block.newline.exec(src);
          if (cap) {
            if (cap[0].length > 1) {
              return {
                type: "space",
                raw: cap[0]
              };
            }
            return { raw: "\n" };
          }
        }
        code(src) {
          const cap = this.rules.block.code.exec(src);
          if (cap) {
            const text = cap[0].replace(/^ {1,4}/gm, "");
            return {
              type: "code",
              raw: cap[0],
              codeBlockStyle: "indented",
              text: !this.options.pedantic ? rtrim(text, "\n") : text
            };
          }
        }
        fences(src) {
          const cap = this.rules.block.fences.exec(src);
          if (cap) {
            const raw = cap[0];
            const text = indentCodeCompensation(raw, cap[3] || "");
            return {
              type: "code",
              raw,
              lang: cap[2] ? cap[2].trim() : cap[2],
              text
            };
          }
        }
        heading(src) {
          const cap = this.rules.block.heading.exec(src);
          if (cap) {
            let text = cap[2].trim();
            if (/#$/.test(text)) {
              const trimmed = rtrim(text, "#");
              if (this.options.pedantic) {
                text = trimmed.trim();
              } else if (!trimmed || / $/.test(trimmed)) {
                text = trimmed.trim();
              }
            }
            return {
              type: "heading",
              raw: cap[0],
              depth: cap[1].length,
              text
            };
          }
        }
        nptable(src) {
          const cap = this.rules.block.nptable.exec(src);
          if (cap) {
            const item = {
              type: "table",
              header: splitCells(cap[1].replace(/^ *| *\| *$/g, "")),
              align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: cap[3] ? cap[3].replace(/\n$/, "").split("\n") : [],
              raw: cap[0]
            };
            if (item.header.length === item.align.length) {
              let l = item.align.length;
              let i;
              for (i = 0; i < l; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = "right";
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = "center";
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = "left";
                } else {
                  item.align[i] = null;
                }
              }
              l = item.cells.length;
              for (i = 0; i < l; i++) {
                item.cells[i] = splitCells(item.cells[i], item.header.length);
              }
              return item;
            }
          }
        }
        hr(src) {
          const cap = this.rules.block.hr.exec(src);
          if (cap) {
            return {
              type: "hr",
              raw: cap[0]
            };
          }
        }
        blockquote(src) {
          const cap = this.rules.block.blockquote.exec(src);
          if (cap) {
            const text = cap[0].replace(/^ *> ?/gm, "");
            return {
              type: "blockquote",
              raw: cap[0],
              text
            };
          }
        }
        list(src) {
          const cap = this.rules.block.list.exec(src);
          if (cap) {
            let raw = cap[0];
            const bull = cap[2];
            const isordered = bull.length > 1;
            const list = {
              type: "list",
              raw,
              ordered: isordered,
              start: isordered ? +bull.slice(0, -1) : "",
              loose: false,
              items: []
            };
            const itemMatch = cap[0].match(this.rules.block.item);
            let next = false, item, space, bcurr, bnext, addBack, loose, istask, ischecked, endMatch;
            let l = itemMatch.length;
            bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);
            for (let i = 0; i < l; i++) {
              item = itemMatch[i];
              raw = item;
              if (!this.options.pedantic) {
                endMatch = item.match(new RegExp("\\n\\s*\\n {0," + (bcurr[0].length - 1) + "}\\S"));
                if (endMatch) {
                  addBack = item.length - endMatch.index + itemMatch.slice(i + 1).join("\n").length;
                  list.raw = list.raw.substring(0, list.raw.length - addBack);
                  item = item.substring(0, endMatch.index);
                  raw = item;
                  l = i + 1;
                }
              }
              if (i !== l - 1) {
                bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);
                if (!this.options.pedantic ? bnext[1].length >= bcurr[0].length || bnext[1].length > 3 : bnext[1].length > bcurr[1].length) {
                  itemMatch.splice(i, 2, itemMatch[i] + (!this.options.pedantic && bnext[1].length < bcurr[0].length && !itemMatch[i].match(/\n$/) ? "" : "\n") + itemMatch[i + 1]);
                  i--;
                  l--;
                  continue;
                } else if (!this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
                  addBack = itemMatch.slice(i + 1).join("\n").length;
                  list.raw = list.raw.substring(0, list.raw.length - addBack);
                  i = l - 1;
                }
                bcurr = bnext;
              }
              space = item.length;
              item = item.replace(/^ *([*+-]|\d+[.)]) ?/, "");
              if (~item.indexOf("\n ")) {
                space -= item.length;
                item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "");
              }
              item = rtrim(item, "\n");
              if (i !== l - 1) {
                raw = raw + "\n";
              }
              loose = next || /\n\n(?!\s*$)/.test(raw);
              if (i !== l - 1) {
                next = raw.slice(-2) === "\n\n";
                if (!loose)
                  loose = next;
              }
              if (loose) {
                list.loose = true;
              }
              if (this.options.gfm) {
                istask = /^\[[ xX]\] /.test(item);
                ischecked = void 0;
                if (istask) {
                  ischecked = item[1] !== " ";
                  item = item.replace(/^\[[ xX]\] +/, "");
                }
              }
              list.items.push({
                type: "list_item",
                raw,
                task: istask,
                checked: ischecked,
                loose,
                text: item
              });
            }
            return list;
          }
        }
        html(src) {
          const cap = this.rules.block.html.exec(src);
          if (cap) {
            return {
              type: this.options.sanitize ? "paragraph" : "html",
              raw: cap[0],
              pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0]
            };
          }
        }
        def(src) {
          const cap = this.rules.block.def.exec(src);
          if (cap) {
            if (cap[3])
              cap[3] = cap[3].substring(1, cap[3].length - 1);
            const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
            return {
              type: "def",
              tag,
              raw: cap[0],
              href: cap[2],
              title: cap[3]
            };
          }
        }
        table(src) {
          const cap = this.rules.block.table.exec(src);
          if (cap) {
            const item = {
              type: "table",
              header: splitCells(cap[1].replace(/^ *| *\| *$/g, "")),
              align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
              cells: cap[3] ? cap[3].replace(/\n$/, "").split("\n") : []
            };
            if (item.header.length === item.align.length) {
              item.raw = cap[0];
              let l = item.align.length;
              let i;
              for (i = 0; i < l; i++) {
                if (/^ *-+: *$/.test(item.align[i])) {
                  item.align[i] = "right";
                } else if (/^ *:-+: *$/.test(item.align[i])) {
                  item.align[i] = "center";
                } else if (/^ *:-+ *$/.test(item.align[i])) {
                  item.align[i] = "left";
                } else {
                  item.align[i] = null;
                }
              }
              l = item.cells.length;
              for (i = 0; i < l; i++) {
                item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ""), item.header.length);
              }
              return item;
            }
          }
        }
        lheading(src) {
          const cap = this.rules.block.lheading.exec(src);
          if (cap) {
            return {
              type: "heading",
              raw: cap[0],
              depth: cap[2].charAt(0) === "=" ? 1 : 2,
              text: cap[1]
            };
          }
        }
        paragraph(src) {
          const cap = this.rules.block.paragraph.exec(src);
          if (cap) {
            return {
              type: "paragraph",
              raw: cap[0],
              text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
            };
          }
        }
        text(src) {
          const cap = this.rules.block.text.exec(src);
          if (cap) {
            return {
              type: "text",
              raw: cap[0],
              text: cap[0]
            };
          }
        }
        escape(src) {
          const cap = this.rules.inline.escape.exec(src);
          if (cap) {
            return {
              type: "escape",
              raw: cap[0],
              text: escape$2(cap[1])
            };
          }
        }
        tag(src, inLink, inRawBlock) {
          const cap = this.rules.inline.tag.exec(src);
          if (cap) {
            if (!inLink && /^<a /i.test(cap[0])) {
              inLink = true;
            } else if (inLink && /^<\/a>/i.test(cap[0])) {
              inLink = false;
            }
            if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              inRawBlock = true;
            } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
              inRawBlock = false;
            }
            return {
              type: this.options.sanitize ? "text" : "html",
              raw: cap[0],
              inLink,
              inRawBlock,
              text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0]
            };
          }
        }
        link(src) {
          const cap = this.rules.inline.link.exec(src);
          if (cap) {
            const trimmedUrl = cap[2].trim();
            if (!this.options.pedantic && /^</.test(trimmedUrl)) {
              if (!/>$/.test(trimmedUrl)) {
                return;
              }
              const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
              if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
                return;
              }
            } else {
              const lastParenIndex = findClosingBracket(cap[2], "()");
              if (lastParenIndex > -1) {
                const start = cap[0].indexOf("!") === 0 ? 5 : 4;
                const linkLen = start + cap[1].length + lastParenIndex;
                cap[2] = cap[2].substring(0, lastParenIndex);
                cap[0] = cap[0].substring(0, linkLen).trim();
                cap[3] = "";
              }
            }
            let href = cap[2];
            let title = "";
            if (this.options.pedantic) {
              const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
              if (link) {
                href = link[1];
                title = link[3];
              }
            } else {
              title = cap[3] ? cap[3].slice(1, -1) : "";
            }
            href = href.trim();
            if (/^</.test(href)) {
              if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
                href = href.slice(1);
              } else {
                href = href.slice(1, -1);
              }
            }
            return outputLink(cap, {
              href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
              title: title ? title.replace(this.rules.inline._escapes, "$1") : title
            }, cap[0]);
          }
        }
        reflink(src, links) {
          let cap;
          if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
            let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
            link = links[link.toLowerCase()];
            if (!link || !link.href) {
              const text = cap[0].charAt(0);
              return {
                type: "text",
                raw: text,
                text
              };
            }
            return outputLink(cap, link, cap[0]);
          }
        }
        emStrong(src, maskedSrc, prevChar = "") {
          let match = this.rules.inline.emStrong.lDelim.exec(src);
          if (!match)
            return;
          if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
            return;
          const nextChar = match[1] || match[2] || "";
          if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
            const lLength = match[0].length - 1;
            let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
            const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            endReg.lastIndex = 0;
            maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
            while ((match = endReg.exec(maskedSrc)) != null) {
              rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
              if (!rDelim)
                continue;
              rLength = rDelim.length;
              if (match[3] || match[4]) {
                delimTotal += rLength;
                continue;
              } else if (match[5] || match[6]) {
                if (lLength % 3 && !((lLength + rLength) % 3)) {
                  midDelimTotal += rLength;
                  continue;
                }
              }
              delimTotal -= rLength;
              if (delimTotal > 0)
                continue;
              rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
              if (Math.min(lLength, rLength) % 2) {
                return {
                  type: "em",
                  raw: src.slice(0, lLength + match.index + rLength + 1),
                  text: src.slice(1, lLength + match.index + rLength)
                };
              }
              return {
                type: "strong",
                raw: src.slice(0, lLength + match.index + rLength + 1),
                text: src.slice(2, lLength + match.index + rLength - 1)
              };
            }
          }
        }
        codespan(src) {
          const cap = this.rules.inline.code.exec(src);
          if (cap) {
            let text = cap[2].replace(/\n/g, " ");
            const hasNonSpaceChars = /[^ ]/.test(text);
            const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
            if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
              text = text.substring(1, text.length - 1);
            }
            text = escape$2(text, true);
            return {
              type: "codespan",
              raw: cap[0],
              text
            };
          }
        }
        br(src) {
          const cap = this.rules.inline.br.exec(src);
          if (cap) {
            return {
              type: "br",
              raw: cap[0]
            };
          }
        }
        del(src) {
          const cap = this.rules.inline.del.exec(src);
          if (cap) {
            return {
              type: "del",
              raw: cap[0],
              text: cap[2]
            };
          }
        }
        autolink(src, mangle2) {
          const cap = this.rules.inline.autolink.exec(src);
          if (cap) {
            let text, href;
            if (cap[2] === "@") {
              text = escape$2(this.options.mangle ? mangle2(cap[1]) : cap[1]);
              href = "mailto:" + text;
            } else {
              text = escape$2(cap[1]);
              href = text;
            }
            return {
              type: "link",
              raw: cap[0],
              text,
              href,
              tokens: [
                {
                  type: "text",
                  raw: text,
                  text
                }
              ]
            };
          }
        }
        url(src, mangle2) {
          let cap;
          if (cap = this.rules.inline.url.exec(src)) {
            let text, href;
            if (cap[2] === "@") {
              text = escape$2(this.options.mangle ? mangle2(cap[0]) : cap[0]);
              href = "mailto:" + text;
            } else {
              let prevCapZero;
              do {
                prevCapZero = cap[0];
                cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
              } while (prevCapZero !== cap[0]);
              text = escape$2(cap[0]);
              if (cap[1] === "www.") {
                href = "http://" + text;
              } else {
                href = text;
              }
            }
            return {
              type: "link",
              raw: cap[0],
              text,
              href,
              tokens: [
                {
                  type: "text",
                  raw: text,
                  text
                }
              ]
            };
          }
        }
        inlineText(src, inRawBlock, smartypants2) {
          const cap = this.rules.inline.text.exec(src);
          if (cap) {
            let text;
            if (inRawBlock) {
              text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$2(cap[0]) : cap[0];
            } else {
              text = escape$2(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
            }
            return {
              type: "text",
              raw: cap[0],
              text
            };
          }
        }
      };
      ({
        noopTest: noopTest2,
        edit,
        merge: merge$1
      } = helpers);
      block$1 = {
        newline: /^(?: *(?:\n|$))+/,
        code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
        fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: noopTest2,
        table: noopTest2,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
        text: /^[^\n]+/
      };
      block$1._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
      block$1._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
      block$1.def = edit(block$1.def).replace("label", block$1._label).replace("title", block$1._title).getRegex();
      block$1.bullet = /(?:[*+-]|\d{1,9}[.)])/;
      block$1.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
      block$1.item = edit(block$1.item, "gm").replace(/bull/g, block$1.bullet).getRegex();
      block$1.listItemStart = edit(/^( *)(bull) */).replace("bull", block$1.bullet).getRegex();
      block$1.list = edit(block$1.list).replace(/bull/g, block$1.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block$1.def.source + ")").getRegex();
      block$1._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
      block$1._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
      block$1.html = edit(block$1.html, "i").replace("comment", block$1._comment).replace("tag", block$1._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
      block$1.paragraph = edit(block$1._paragraph).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
      block$1.blockquote = edit(block$1.blockquote).replace("paragraph", block$1.paragraph).getRegex();
      block$1.normal = merge$1({}, block$1);
      block$1.gfm = merge$1({}, block$1.normal, {
        nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
        table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
      });
      block$1.gfm.nptable = edit(block$1.gfm.nptable).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
      block$1.gfm.table = edit(block$1.gfm.table).replace("hr", block$1.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block$1._tag).getRegex();
      block$1.pedantic = merge$1({}, block$1.normal, {
        html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block$1._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^(#{1,6})(.*)(?:\n+|$)/,
        fences: noopTest2,
        paragraph: edit(block$1.normal._paragraph).replace("hr", block$1.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block$1.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
      });
      inline$1 = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: noopTest2,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        reflinkSearch: "reflink|nolink(?!\\()",
        emStrong: {
          lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
          rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
          rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
        },
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: noopTest2,
        text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
        punctuation: /^([\spunctuation])/
      };
      inline$1._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
      inline$1.punctuation = edit(inline$1.punctuation).replace(/punctuation/g, inline$1._punctuation).getRegex();
      inline$1.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
      inline$1.escapedEmSt = /\\\*|\\_/g;
      inline$1._comment = edit(block$1._comment).replace("(?:-->|$)", "-->").getRegex();
      inline$1.emStrong.lDelim = edit(inline$1.emStrong.lDelim).replace(/punct/g, inline$1._punctuation).getRegex();
      inline$1.emStrong.rDelimAst = edit(inline$1.emStrong.rDelimAst, "g").replace(/punct/g, inline$1._punctuation).getRegex();
      inline$1.emStrong.rDelimUnd = edit(inline$1.emStrong.rDelimUnd, "g").replace(/punct/g, inline$1._punctuation).getRegex();
      inline$1._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
      inline$1._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
      inline$1._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
      inline$1.autolink = edit(inline$1.autolink).replace("scheme", inline$1._scheme).replace("email", inline$1._email).getRegex();
      inline$1._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
      inline$1.tag = edit(inline$1.tag).replace("comment", inline$1._comment).replace("attribute", inline$1._attribute).getRegex();
      inline$1._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
      inline$1._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
      inline$1._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
      inline$1.link = edit(inline$1.link).replace("label", inline$1._label).replace("href", inline$1._href).replace("title", inline$1._title).getRegex();
      inline$1.reflink = edit(inline$1.reflink).replace("label", inline$1._label).getRegex();
      inline$1.reflinkSearch = edit(inline$1.reflinkSearch, "g").replace("reflink", inline$1.reflink).replace("nolink", inline$1.nolink).getRegex();
      inline$1.normal = merge$1({}, inline$1);
      inline$1.pedantic = merge$1({}, inline$1.normal, {
        strong: {
          start: /^__|\*\*/,
          middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
          endAst: /\*\*(?!\*)/g,
          endUnd: /__(?!_)/g
        },
        em: {
          start: /^_|\*/,
          middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
          endAst: /\*(?!\*)/g,
          endUnd: /_(?!_)/g
        },
        link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline$1._label).getRegex(),
        reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline$1._label).getRegex()
      });
      inline$1.gfm = merge$1({}, inline$1.normal, {
        escape: edit(inline$1.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
        text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
      });
      inline$1.gfm.url = edit(inline$1.gfm.url, "i").replace("email", inline$1.gfm._extended_email).getRegex();
      inline$1.breaks = merge$1({}, inline$1.gfm, {
        br: edit(inline$1.br).replace("{2,}", "*").getRegex(),
        text: edit(inline$1.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
      });
      rules = {
        block: block$1,
        inline: inline$1
      };
      Tokenizer$1 = Tokenizer_1;
      ({ defaults: defaults$3 } = defaults$5.exports);
      ({ block, inline } = rules);
      ({ repeatString } = helpers);
      Lexer_1 = class Lexer {
        constructor(options2) {
          this.tokens = [];
          this.tokens.links = Object.create(null);
          this.options = options2 || defaults$3;
          this.options.tokenizer = this.options.tokenizer || new Tokenizer$1();
          this.tokenizer = this.options.tokenizer;
          this.tokenizer.options = this.options;
          const rules2 = {
            block: block.normal,
            inline: inline.normal
          };
          if (this.options.pedantic) {
            rules2.block = block.pedantic;
            rules2.inline = inline.pedantic;
          } else if (this.options.gfm) {
            rules2.block = block.gfm;
            if (this.options.breaks) {
              rules2.inline = inline.breaks;
            } else {
              rules2.inline = inline.gfm;
            }
          }
          this.tokenizer.rules = rules2;
        }
        static get rules() {
          return {
            block,
            inline
          };
        }
        static lex(src, options2) {
          const lexer = new Lexer(options2);
          return lexer.lex(src);
        }
        static lexInline(src, options2) {
          const lexer = new Lexer(options2);
          return lexer.inlineTokens(src);
        }
        lex(src) {
          src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ");
          this.blockTokens(src, this.tokens, true);
          this.inline(this.tokens);
          return this.tokens;
        }
        blockTokens(src, tokens = [], top = true) {
          if (this.options.pedantic) {
            src = src.replace(/^ +$/gm, "");
          }
          let token, i, l, lastToken, cutSrc, lastParagraphClipped;
          while (src) {
            if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
              if (token = extTokenizer.call(this, src, tokens)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                return true;
              }
              return false;
            })) {
              continue;
            }
            if (token = this.tokenizer.space(src)) {
              src = src.substring(token.raw.length);
              if (token.type) {
                tokens.push(token);
              }
              continue;
            }
            if (token = this.tokenizer.code(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && lastToken.type === "paragraph") {
                lastToken.raw += "\n" + token.raw;
                lastToken.text += "\n" + token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (token = this.tokenizer.fences(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.heading(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.nptable(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.hr(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.blockquote(src)) {
              src = src.substring(token.raw.length);
              token.tokens = this.blockTokens(token.text, [], top);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.list(src)) {
              src = src.substring(token.raw.length);
              l = token.items.length;
              for (i = 0; i < l; i++) {
                token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
              }
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.html(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (top && (token = this.tokenizer.def(src))) {
              src = src.substring(token.raw.length);
              if (!this.tokens.links[token.tag]) {
                this.tokens.links[token.tag] = {
                  href: token.href,
                  title: token.title
                };
              }
              continue;
            }
            if (token = this.tokenizer.table(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.lheading(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startBlock) {
              let startIndex = Infinity;
              const tempSrc = src.slice(1);
              let tempStart;
              this.options.extensions.startBlock.forEach(function(getStartIndex) {
                tempStart = getStartIndex.call(this, tempSrc);
                if (typeof tempStart === "number" && tempStart >= 0) {
                  startIndex = Math.min(startIndex, tempStart);
                }
              });
              if (startIndex < Infinity && startIndex >= 0) {
                cutSrc = src.substring(0, startIndex + 1);
              }
            }
            if (top && (token = this.tokenizer.paragraph(cutSrc))) {
              lastToken = tokens[tokens.length - 1];
              if (lastParagraphClipped && lastToken.type === "paragraph") {
                lastToken.raw += "\n" + token.raw;
                lastToken.text += "\n" + token.text;
              } else {
                tokens.push(token);
              }
              lastParagraphClipped = cutSrc.length !== src.length;
              src = src.substring(token.raw.length);
              continue;
            }
            if (token = this.tokenizer.text(src)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (lastToken && lastToken.type === "text") {
                lastToken.raw += "\n" + token.raw;
                lastToken.text += "\n" + token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (src) {
              const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
              if (this.options.silent) {
                console.error(errMsg);
                break;
              } else {
                throw new Error(errMsg);
              }
            }
          }
          return tokens;
        }
        inline(tokens) {
          let i, j, k, l2, row, token;
          const l = tokens.length;
          for (i = 0; i < l; i++) {
            token = tokens[i];
            switch (token.type) {
              case "paragraph":
              case "text":
              case "heading": {
                token.tokens = [];
                this.inlineTokens(token.text, token.tokens);
                break;
              }
              case "table": {
                token.tokens = {
                  header: [],
                  cells: []
                };
                l2 = token.header.length;
                for (j = 0; j < l2; j++) {
                  token.tokens.header[j] = [];
                  this.inlineTokens(token.header[j], token.tokens.header[j]);
                }
                l2 = token.cells.length;
                for (j = 0; j < l2; j++) {
                  row = token.cells[j];
                  token.tokens.cells[j] = [];
                  for (k = 0; k < row.length; k++) {
                    token.tokens.cells[j][k] = [];
                    this.inlineTokens(row[k], token.tokens.cells[j][k]);
                  }
                }
                break;
              }
              case "blockquote": {
                this.inline(token.tokens);
                break;
              }
              case "list": {
                l2 = token.items.length;
                for (j = 0; j < l2; j++) {
                  this.inline(token.items[j].tokens);
                }
                break;
              }
            }
          }
          return tokens;
        }
        inlineTokens(src, tokens = [], inLink = false, inRawBlock = false) {
          let token, lastToken, cutSrc;
          let maskedSrc = src;
          let match;
          let keepPrevChar, prevChar;
          if (this.tokens.links) {
            const links = Object.keys(this.tokens.links);
            if (links.length > 0) {
              while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
                if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
                  maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
                }
              }
            }
          }
          while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
          }
          while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
            maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
          }
          while (src) {
            if (!keepPrevChar) {
              prevChar = "";
            }
            keepPrevChar = false;
            if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
              if (token = extTokenizer.call(this, src, tokens)) {
                src = src.substring(token.raw.length);
                tokens.push(token);
                return true;
              }
              return false;
            })) {
              continue;
            }
            if (token = this.tokenizer.escape(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
              src = src.substring(token.raw.length);
              inLink = token.inLink;
              inRawBlock = token.inRawBlock;
              lastToken = tokens[tokens.length - 1];
              if (lastToken && token.type === "text" && lastToken.type === "text") {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (token = this.tokenizer.link(src)) {
              src = src.substring(token.raw.length);
              if (token.type === "link") {
                token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
              }
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.reflink(src, this.tokens.links)) {
              src = src.substring(token.raw.length);
              lastToken = tokens[tokens.length - 1];
              if (token.type === "link") {
                token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
                tokens.push(token);
              } else if (lastToken && token.type === "text" && lastToken.type === "text") {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
              src = src.substring(token.raw.length);
              token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.codespan(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.br(src)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.del(src)) {
              src = src.substring(token.raw.length);
              token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
              tokens.push(token);
              continue;
            }
            if (token = this.tokenizer.autolink(src, mangle)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            if (!inLink && (token = this.tokenizer.url(src, mangle))) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              continue;
            }
            cutSrc = src;
            if (this.options.extensions && this.options.extensions.startInline) {
              let startIndex = Infinity;
              const tempSrc = src.slice(1);
              let tempStart;
              this.options.extensions.startInline.forEach(function(getStartIndex) {
                tempStart = getStartIndex.call(this, tempSrc);
                if (typeof tempStart === "number" && tempStart >= 0) {
                  startIndex = Math.min(startIndex, tempStart);
                }
              });
              if (startIndex < Infinity && startIndex >= 0) {
                cutSrc = src.substring(0, startIndex + 1);
              }
            }
            if (token = this.tokenizer.inlineText(cutSrc, inRawBlock, smartypants)) {
              src = src.substring(token.raw.length);
              if (token.raw.slice(-1) !== "_") {
                prevChar = token.raw.slice(-1);
              }
              keepPrevChar = true;
              lastToken = tokens[tokens.length - 1];
              if (lastToken && lastToken.type === "text") {
                lastToken.raw += token.raw;
                lastToken.text += token.text;
              } else {
                tokens.push(token);
              }
              continue;
            }
            if (src) {
              const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
              if (this.options.silent) {
                console.error(errMsg);
                break;
              } else {
                throw new Error(errMsg);
              }
            }
          }
          return tokens;
        }
      };
      ({ defaults: defaults$2 } = defaults$5.exports);
      ({
        cleanUrl,
        escape: escape$1
      } = helpers);
      Renderer_1 = class Renderer {
        constructor(options2) {
          this.options = options2 || defaults$2;
        }
        code(code, infostring, escaped2) {
          const lang = (infostring || "").match(/\S*/)[0];
          if (this.options.highlight) {
            const out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
              escaped2 = true;
              code = out;
            }
          }
          code = code.replace(/\n$/, "") + "\n";
          if (!lang) {
            return "<pre><code>" + (escaped2 ? code : escape$1(code, true)) + "</code></pre>\n";
          }
          return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped2 ? code : escape$1(code, true)) + "</code></pre>\n";
        }
        blockquote(quote) {
          return "<blockquote>\n" + quote + "</blockquote>\n";
        }
        html(html) {
          return html;
        }
        heading(text, level, raw, slugger) {
          if (this.options.headerIds) {
            return "<h" + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + "</h" + level + ">\n";
          }
          return "<h" + level + ">" + text + "</h" + level + ">\n";
        }
        hr() {
          return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
        }
        list(body, ordered, start) {
          const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
          return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
        }
        listitem(text) {
          return "<li>" + text + "</li>\n";
        }
        checkbox(checked) {
          return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
        }
        paragraph(text) {
          return "<p>" + text + "</p>\n";
        }
        table(header, body) {
          if (body)
            body = "<tbody>" + body + "</tbody>";
          return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
        }
        tablerow(content) {
          return "<tr>\n" + content + "</tr>\n";
        }
        tablecell(content, flags) {
          const type = flags.header ? "th" : "td";
          const tag = flags.align ? "<" + type + ' align="' + flags.align + '">' : "<" + type + ">";
          return tag + content + "</" + type + ">\n";
        }
        strong(text) {
          return "<strong>" + text + "</strong>";
        }
        em(text) {
          return "<em>" + text + "</em>";
        }
        codespan(text) {
          return "<code>" + text + "</code>";
        }
        br() {
          return this.options.xhtml ? "<br/>" : "<br>";
        }
        del(text) {
          return "<del>" + text + "</del>";
        }
        link(href, title, text) {
          href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
          if (href === null) {
            return text;
          }
          let out = '<a href="' + escape$1(href) + '"';
          if (title) {
            out += ' title="' + title + '"';
          }
          out += ">" + text + "</a>";
          return out;
        }
        image(href, title, text) {
          href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
          if (href === null) {
            return text;
          }
          let out = '<img src="' + href + '" alt="' + text + '"';
          if (title) {
            out += ' title="' + title + '"';
          }
          out += this.options.xhtml ? "/>" : ">";
          return out;
        }
        text(text) {
          return text;
        }
      };
      TextRenderer_1 = class TextRenderer {
        strong(text) {
          return text;
        }
        em(text) {
          return text;
        }
        codespan(text) {
          return text;
        }
        del(text) {
          return text;
        }
        html(text) {
          return text;
        }
        text(text) {
          return text;
        }
        link(href, title, text) {
          return "" + text;
        }
        image(href, title, text) {
          return "" + text;
        }
        br() {
          return "";
        }
      };
      Slugger_1 = class Slugger {
        constructor() {
          this.seen = {};
        }
        serialize(value) {
          return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
        }
        getNextSafeSlug(originalSlug, isDryRun) {
          let slug = originalSlug;
          let occurenceAccumulator = 0;
          if (this.seen.hasOwnProperty(slug)) {
            occurenceAccumulator = this.seen[originalSlug];
            do {
              occurenceAccumulator++;
              slug = originalSlug + "-" + occurenceAccumulator;
            } while (this.seen.hasOwnProperty(slug));
          }
          if (!isDryRun) {
            this.seen[originalSlug] = occurenceAccumulator;
            this.seen[slug] = 0;
          }
          return slug;
        }
        slug(value, options2 = {}) {
          const slug = this.serialize(value);
          return this.getNextSafeSlug(slug, options2.dryrun);
        }
      };
      Renderer$1 = Renderer_1;
      TextRenderer$1 = TextRenderer_1;
      Slugger$1 = Slugger_1;
      ({ defaults: defaults$1 } = defaults$5.exports);
      ({
        unescape
      } = helpers);
      Parser_1 = class Parser {
        constructor(options2) {
          this.options = options2 || defaults$1;
          this.options.renderer = this.options.renderer || new Renderer$1();
          this.renderer = this.options.renderer;
          this.renderer.options = this.options;
          this.textRenderer = new TextRenderer$1();
          this.slugger = new Slugger$1();
        }
        static parse(tokens, options2) {
          const parser = new Parser(options2);
          return parser.parse(tokens);
        }
        static parseInline(tokens, options2) {
          const parser = new Parser(options2);
          return parser.parseInline(tokens);
        }
        parse(tokens, top = true) {
          let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
          const l = tokens.length;
          for (i = 0; i < l; i++) {
            token = tokens[i];
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
              ret = this.options.extensions.renderers[token.type].call(this, token);
              if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
                out += ret || "";
                continue;
              }
            }
            switch (token.type) {
              case "space": {
                continue;
              }
              case "hr": {
                out += this.renderer.hr();
                continue;
              }
              case "heading": {
                out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                continue;
              }
              case "code": {
                out += this.renderer.code(token.text, token.lang, token.escaped);
                continue;
              }
              case "table": {
                header = "";
                cell = "";
                l2 = token.header.length;
                for (j = 0; j < l2; j++) {
                  cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), { header: true, align: token.align[j] });
                }
                header += this.renderer.tablerow(cell);
                body = "";
                l2 = token.cells.length;
                for (j = 0; j < l2; j++) {
                  row = token.tokens.cells[j];
                  cell = "";
                  l3 = row.length;
                  for (k = 0; k < l3; k++) {
                    cell += this.renderer.tablecell(this.parseInline(row[k]), { header: false, align: token.align[k] });
                  }
                  body += this.renderer.tablerow(cell);
                }
                out += this.renderer.table(header, body);
                continue;
              }
              case "blockquote": {
                body = this.parse(token.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }
              case "list": {
                ordered = token.ordered;
                start = token.start;
                loose = token.loose;
                l2 = token.items.length;
                body = "";
                for (j = 0; j < l2; j++) {
                  item = token.items[j];
                  checked = item.checked;
                  task = item.task;
                  itemBody = "";
                  if (item.task) {
                    checkbox = this.renderer.checkbox(checked);
                    if (loose) {
                      if (item.tokens.length > 0 && item.tokens[0].type === "text") {
                        item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                          item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                        }
                      } else {
                        item.tokens.unshift({
                          type: "text",
                          text: checkbox
                        });
                      }
                    } else {
                      itemBody += checkbox;
                    }
                  }
                  itemBody += this.parse(item.tokens, loose);
                  body += this.renderer.listitem(itemBody, task, checked);
                }
                out += this.renderer.list(body, ordered, start);
                continue;
              }
              case "html": {
                out += this.renderer.html(token.text);
                continue;
              }
              case "paragraph": {
                out += this.renderer.paragraph(this.parseInline(token.tokens));
                continue;
              }
              case "text": {
                body = token.tokens ? this.parseInline(token.tokens) : token.text;
                while (i + 1 < l && tokens[i + 1].type === "text") {
                  token = tokens[++i];
                  body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
                }
                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }
              default: {
                const errMsg = 'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
            }
          }
          return out;
        }
        parseInline(tokens, renderer) {
          renderer = renderer || this.renderer;
          let out = "", i, token, ret;
          const l = tokens.length;
          for (i = 0; i < l; i++) {
            token = tokens[i];
            if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
              ret = this.options.extensions.renderers[token.type].call(this, token);
              if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
                out += ret || "";
                continue;
              }
            }
            switch (token.type) {
              case "escape": {
                out += renderer.text(token.text);
                break;
              }
              case "html": {
                out += renderer.html(token.text);
                break;
              }
              case "link": {
                out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                break;
              }
              case "image": {
                out += renderer.image(token.href, token.title, token.text);
                break;
              }
              case "strong": {
                out += renderer.strong(this.parseInline(token.tokens, renderer));
                break;
              }
              case "em": {
                out += renderer.em(this.parseInline(token.tokens, renderer));
                break;
              }
              case "codespan": {
                out += renderer.codespan(token.text);
                break;
              }
              case "br": {
                out += renderer.br();
                break;
              }
              case "del": {
                out += renderer.del(this.parseInline(token.tokens, renderer));
                break;
              }
              case "text": {
                out += renderer.text(token.text);
                break;
              }
              default: {
                const errMsg = 'Token with "' + token.type + '" type was not found.';
                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
            }
          }
          return out;
        }
      };
      Lexer$1 = Lexer_1;
      Parser2 = Parser_1;
      Tokenizer2 = Tokenizer_1;
      Renderer2 = Renderer_1;
      TextRenderer2 = TextRenderer_1;
      Slugger$2 = Slugger_1;
      ({
        merge,
        checkSanitizeDeprecation,
        escape: escape2
      } = helpers);
      ({
        getDefaults,
        changeDefaults,
        defaults
      } = defaults$5.exports);
      marked.options = marked.setOptions = function(opt) {
        merge(marked.defaults, opt);
        changeDefaults(marked.defaults);
        return marked;
      };
      marked.getDefaults = getDefaults;
      marked.defaults = defaults;
      marked.use = function(...args) {
        const opts = merge({}, ...args);
        const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
        let hasExtensions;
        args.forEach((pack) => {
          if (pack.extensions) {
            hasExtensions = true;
            pack.extensions.forEach((ext) => {
              if (!ext.name) {
                throw new Error("extension name required");
              }
              if (ext.renderer) {
                const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
                if (prevRenderer) {
                  extensions.renderers[ext.name] = function(...args2) {
                    let ret = ext.renderer.apply(this, args2);
                    if (ret === false) {
                      ret = prevRenderer.apply(this, args2);
                    }
                    return ret;
                  };
                } else {
                  extensions.renderers[ext.name] = ext.renderer;
                }
              }
              if (ext.tokenizer) {
                if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
                  throw new Error("extension level must be 'block' or 'inline'");
                }
                if (extensions[ext.level]) {
                  extensions[ext.level].unshift(ext.tokenizer);
                } else {
                  extensions[ext.level] = [ext.tokenizer];
                }
                if (ext.start) {
                  if (ext.level === "block") {
                    if (extensions.startBlock) {
                      extensions.startBlock.push(ext.start);
                    } else {
                      extensions.startBlock = [ext.start];
                    }
                  } else if (ext.level === "inline") {
                    if (extensions.startInline) {
                      extensions.startInline.push(ext.start);
                    } else {
                      extensions.startInline = [ext.start];
                    }
                  }
                }
              }
              if (ext.childTokens) {
                extensions.childTokens[ext.name] = ext.childTokens;
              }
            });
          }
          if (pack.renderer) {
            const renderer = marked.defaults.renderer || new Renderer2();
            for (const prop in pack.renderer) {
              const prevRenderer = renderer[prop];
              renderer[prop] = (...args2) => {
                let ret = pack.renderer[prop].apply(renderer, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(renderer, args2);
                }
                return ret;
              };
            }
            opts.renderer = renderer;
          }
          if (pack.tokenizer) {
            const tokenizer = marked.defaults.tokenizer || new Tokenizer2();
            for (const prop in pack.tokenizer) {
              const prevTokenizer = tokenizer[prop];
              tokenizer[prop] = (...args2) => {
                let ret = pack.tokenizer[prop].apply(tokenizer, args2);
                if (ret === false) {
                  ret = prevTokenizer.apply(tokenizer, args2);
                }
                return ret;
              };
            }
            opts.tokenizer = tokenizer;
          }
          if (pack.walkTokens) {
            const walkTokens = marked.defaults.walkTokens;
            opts.walkTokens = (token) => {
              pack.walkTokens.call(this, token);
              if (walkTokens) {
                walkTokens(token);
              }
            };
          }
          if (hasExtensions) {
            opts.extensions = extensions;
          }
          marked.setOptions(opts);
        });
      };
      marked.walkTokens = function(tokens, callback) {
        for (const token of tokens) {
          callback(token);
          switch (token.type) {
            case "table": {
              for (const cell of token.tokens.header) {
                marked.walkTokens(cell, callback);
              }
              for (const row of token.tokens.cells) {
                for (const cell of row) {
                  marked.walkTokens(cell, callback);
                }
              }
              break;
            }
            case "list": {
              marked.walkTokens(token.items, callback);
              break;
            }
            default: {
              if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
                marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
                  marked.walkTokens(token[childTokens], callback);
                });
              } else if (token.tokens) {
                marked.walkTokens(token.tokens, callback);
              }
            }
          }
        }
      };
      marked.parseInline = function(src, opt) {
        if (typeof src === "undefined" || src === null) {
          throw new Error("marked.parseInline(): input parameter is undefined or null");
        }
        if (typeof src !== "string") {
          throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
        }
        opt = merge({}, marked.defaults, opt || {});
        checkSanitizeDeprecation(opt);
        try {
          const tokens = Lexer$1.lexInline(src, opt);
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          return Parser2.parseInline(tokens, opt);
        } catch (e) {
          e.message += "\nPlease report this to https://github.com/markedjs/marked.";
          if (opt.silent) {
            return "<p>An error occurred:</p><pre>" + escape2(e.message + "", true) + "</pre>";
          }
          throw e;
        }
      };
      marked.Parser = Parser2;
      marked.parser = Parser2.parse;
      marked.Renderer = Renderer2;
      marked.TextRenderer = TextRenderer2;
      marked.Lexer = Lexer$1;
      marked.lexer = Lexer$1.lex;
      marked.Tokenizer = Tokenizer2;
      marked.Slugger = Slugger$2;
      marked.parse = marked;
      marked_1 = marked;
      key = {};
      Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let id;
        let { depth } = $$props;
        let { raw } = $$props;
        let { text } = $$props;
        const { slug, getOptions } = getContext(key);
        const options2 = getOptions();
        if ($$props.depth === void 0 && $$bindings.depth && depth !== void 0)
          $$bindings.depth(depth);
        if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
          $$bindings.raw(raw);
        if ($$props.text === void 0 && $$bindings.text && text !== void 0)
          $$bindings.text(text);
        id = options2.headerIds ? options2.headerPrefix + slug(text) : void 0;
        return `${depth === 1 ? `<h1${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${depth === 2 ? `<h2${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${depth === 3 ? `<h3${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${depth === 4 ? `<h4${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${depth === 5 ? `<h5${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${depth === 6 ? `<h6${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${escape(raw)}`}`}`}`}`}`}`;
      });
      Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<p>${slots.default ? slots.default({}) : ``}</p>`;
      });
      Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { text } = $$props;
        let { raw } = $$props;
        if ($$props.text === void 0 && $$bindings.text && text !== void 0)
          $$bindings.text(text);
        if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
          $$bindings.raw(raw);
        return `${slots.default ? slots.default({}) : ``}`;
      });
      Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { href = "" } = $$props;
        let { title = void 0 } = $$props;
        let { text = "" } = $$props;
        if ($$props.href === void 0 && $$bindings.href && href !== void 0)
          $$bindings.href(href);
        if ($$props.title === void 0 && $$bindings.title && title !== void 0)
          $$bindings.title(title);
        if ($$props.text === void 0 && $$bindings.text && text !== void 0)
          $$bindings.text(text);
        return `<img${add_attribute("src", href, 0)}${add_attribute("title", title, 0)}${add_attribute("alt", text, 0)}>`;
      });
      Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { href = "" } = $$props;
        let { title = void 0 } = $$props;
        if ($$props.href === void 0 && $$bindings.href && href !== void 0)
          $$bindings.href(href);
        if ($$props.title === void 0 && $$bindings.title && title !== void 0)
          $$bindings.title(title);
        return `<a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
      });
      Em = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<em>${slots.default ? slots.default({}) : ``}</em>`;
      });
      Del = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<del>${slots.default ? slots.default({}) : ``}</del>`;
      });
      Codespan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { raw } = $$props;
        if ($$props.raw === void 0 && $$bindings.raw && raw !== void 0)
          $$bindings.raw(raw);
        return `<code>${escape(raw.replace(/`/g, ""))}</code>`;
      });
      Strong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<strong>${slots.default ? slots.default({}) : ``}</strong>`;
      });
      Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<table>${slots.default ? slots.default({}) : ``}</table>`;
      });
      TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<thead>${slots.default ? slots.default({}) : ``}</thead>`;
      });
      TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<tbody>${slots.default ? slots.default({}) : ``}</tbody>`;
      });
      TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<tr>${slots.default ? slots.default({}) : ``}</tr>`;
      });
      TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { header } = $$props;
        let { align } = $$props;
        if ($$props.header === void 0 && $$bindings.header && header !== void 0)
          $$bindings.header(header);
        if ($$props.align === void 0 && $$bindings.align && align !== void 0)
          $$bindings.align(align);
        return `${header ? `<th${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</th>` : `<td${add_attribute("align", align, 0)}>${slots.default ? slots.default({}) : ``}</td>`}`;
      });
      List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { ordered } = $$props;
        let { start } = $$props;
        if ($$props.ordered === void 0 && $$bindings.ordered && ordered !== void 0)
          $$bindings.ordered(ordered);
        if ($$props.start === void 0 && $$bindings.start && start !== void 0)
          $$bindings.start(start);
        return `${ordered ? `<ol${add_attribute("start", start, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `<ul>${slots.default ? slots.default({}) : ``}</ul>`}`;
      });
      ListItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<li>${slots.default ? slots.default({}) : ``}</li>`;
      });
      Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<hr>`;
      });
      Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { text } = $$props;
        if ($$props.text === void 0 && $$bindings.text && text !== void 0)
          $$bindings.text(text);
        return `<!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->`;
      });
      Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<blockquote>${slots.default ? slots.default({}) : ``}</blockquote>`;
      });
      Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { lang } = $$props;
        let { text } = $$props;
        if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
          $$bindings.lang(lang);
        if ($$props.text === void 0 && $$bindings.text && text !== void 0)
          $$bindings.text(text);
        return `<pre${add_attribute("class", lang, 0)}><code>${escape(text)}</code></pre>`;
      });
      Br = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        return `<br>${slots.default ? slots.default({}) : ``}`;
      });
      defaultRenderers = {
        heading: Heading,
        paragraph: Paragraph,
        text: Text,
        image: Image,
        link: Link,
        em: Em,
        strong: Strong,
        codespan: Codespan,
        del: Del,
        table: Table,
        tablehead: TableHead,
        tablebody: TableBody,
        tablerow: TableRow,
        tablecell: TableCell,
        list: List,
        orderedlistitem: null,
        unorderedlistitem: null,
        listitem: ListItem,
        hr: Hr,
        html: Html,
        blockquote: Blockquote,
        code: Code,
        br: Br
      };
      defaultOptions = {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: "",
        highlight: null,
        langPrefix: "language-",
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        xhtml: false
      };
      Lexer2 = marked_1.Lexer;
      Slugger2 = marked_1.Slugger;
      SvelteMarkdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let slugger;
        let combinedOptions;
        let combinedRenderers;
        let { source = "" } = $$props;
        let { renderers = {} } = $$props;
        let { options: options2 = {} } = $$props;
        let { isInline = false } = $$props;
        const dispatch = createEventDispatcher();
        let tokens;
        let lexer;
        setContext(key, {
          slug: (val) => slugger ? slugger.slug(val) : "",
          getOptions: () => combinedOptions
        });
        if ($$props.source === void 0 && $$bindings.source && source !== void 0)
          $$bindings.source(source);
        if ($$props.renderers === void 0 && $$bindings.renderers && renderers !== void 0)
          $$bindings.renderers(renderers);
        if ($$props.options === void 0 && $$bindings.options && options2 !== void 0)
          $$bindings.options(options2);
        if ($$props.isInline === void 0 && $$bindings.isInline && isInline !== void 0)
          $$bindings.isInline(isInline);
        slugger = source ? new Slugger2() : void 0;
        combinedOptions = { ...defaultOptions, ...options2 };
        {
          {
            lexer = new Lexer2(combinedOptions);
            tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
            dispatch("parsed", { tokens });
          }
        }
        combinedRenderers = { ...defaultRenderers, ...renderers };
        return `${validate_component(Parser$1, "Parser").$$render($$result, { tokens, renderers: combinedRenderers }, {}, {})}`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-0001c964.js
  var index_0001c964_exports = {};
  __export(index_0001c964_exports, {
    default: () => _27
  });
  var date, _27;
  var init_index_0001c964 = __esm({
    ".svelte-kit/output/server/chunks/index-0001c964.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date = "2010/12/27";
      _27 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Initiative and Assistance

I have kept a bookmark to Joel Spolsky's [article](http://www.joelonsoftware.com/articles/Unicode.html) on Unicode and character sets on my work computer for ages. So last week, with all the buzz about the demise of del.icio.us, I finally decided it was a good time to find a link manager service to have a persistent place for such things. That brought me to Trunk.ly, a link aggregation service that pulls in links from Twitter, Facebook, etc., and started using it immediately.

After reading their first blog post (discussing their not-quite-when-we-planned-to-launch launch), I could kind of tell they were feeling the heat to ramp up development to handle their influx of traffic. Not only that but with their growing userbase they were also dealing with requests for new features and bugfixes.

Just on a lark, looking for a new project to work on, I sent them a message using their "Contact Us" form that simply asked, "Is there any way to contribute help to Trunk.ly?"

I was surprised when they wrote back, and even more surprised when they gave me a small and straightforward feature (RSS feed importing) to implement. It has been fulfilling, educational and entertaining writing code for something that a lot of people use, not to mention actually helping a couple of real developers out by giving them my time. I am sure they will have to revise it, given that I'm not exactly the world's most experienced developer of production-quality code. That being said, I'm pretty proud of the little bit I've done. Added bonus: I'm not embarrassed about my github repos anymore, since I've got something actually useful in there now.

I guess the lesson here is that to find a project to work on in order to hone your skills, ask the people who make the things you have a use for if you can help. I'm much more optimistic the answer will be "yes" in the future (and infinitely more confident that I'll actually be able to pull off executing the task I've been given!).
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-cafa1bd0.js
  var index_cafa1bd0_exports = {};
  __export(index_cafa1bd0_exports, {
    default: () => _272
  });
  var date2, _272;
  var init_index_cafa1bd0 = __esm({
    ".svelte-kit/output/server/chunks/index-cafa1bd0.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date2 = "2011/01/27";
      _272 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# No More Tumblr

A week or two ago I decided to stop using Tumblr and "roll my own" blog. Since I've been using [flask](http://flask.pocoo.org) to put [some projects](http://mattdeboard.net/projects) on the web, I decided to give [rstblog](https://github.com/mitsuhiko/rstblog) a go. (Both written by the [same guy](http://lucumr.pocoo.org).)

rstblog is very much a very "small" blog app, with only very minimal documentation. Thankfully [Morten Siebuhr](http://sbhr.dk/2010/11/30/using_rstblog/) put together a nice beginner's course on how to implement it. I referenced it heavily, though there were still some bumps on the road. Mostly, it took me awhile to realize you have to rm -r _build/ everytime you run-rstblog build. I was wondering why all of my links weren't updating; it was because when you do "run-rstblog build", it only seems to create templates that already exist. I don't have a great explanation. But if you're looking for rstblog tips, here's mine: rm -r _build/ every time you run-rstblog build.

I have also added a link to select projects in the header and generally cleaned and centralized everything.

Getting my blog in a somewhat finalized form also marks the end of the beginning of my movement toward setting up my own web server to function as a place to host my own projects, including the blog. I realize for most people who will read this running a webserver isn't that big a deal, and maybe even something you were doing in high school or before. But for me, this has been a new thing and a tremendous learning experience. Much thanks to Brett Hoerner for his [post on configuring Apache2 and nginx](http://bretthoerner.com/2008/10/9/configs-for-nginx-and-apache-mod-wsgi) for mod_wsgi. They've been a great reference source as I fumble with those two services.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date2)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-5260c83f.js
  var index_5260c83f_exports = {};
  __export(index_5260c83f_exports, {
    default: () => _14
  });
  var date3, _14;
  var init_index_5260c83f = __esm({
    ".svelte-kit/output/server/chunks/index-5260c83f.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date3 = "2011/02/14";
      _14 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Latest work

I have put my latest project live. I started [Yuk](http://yuk.mattdeboard.net) ([source](https://github.com/mattdeboard/Yuk)) a couple of weeks ago as an exercise in developing an understanding of an MVC web framework, instead of using [flask](http://flask.pocoo.org) for everything. flask is great, but not knowing Django (and more importantly, Django's underlying principles) is a huge knowledge gap I wanted to address.

So, Yuk. The least important point first: The name is stupid. Since Yuk is a bookmarking service, I thought it would be cute to play off "delicious" with ... well, you get it. Dumb idea. "Rebranding" isn't really a priority though.

Though the name was a play off "del.icio.us", I have actually written the site using [pinboard.in](http://pinboard.in) as a model, at least in terms of features and design. Pinboard is a really fast, dead simple bookmark service with a lot of great features that don't overshadow/obscure the site's core functionality. Having a model to base my work on has been very helpful.

My first task was to set about getting Yuk's own core functionality -- saving user-defined URLs to a database -- working. For the framework I chose Django, and for the database I chose sqlite3, for simplicity. An additional point to this project was to gain familiarity with databases, especially how to design them so that model relations not only work, but make sense. I've still got a long, long way to go on this point. Be that as it may, as I said I chose sqlite3 for simplicity (simplicity being a codeword for what the Django docs recommended for a small project). It is fine for my uses and has been a great hands-on exercise.

One side effect of this project was finally getting a handle on Python classes. Since I'd never undertaken a project that called for them, I'd never really understood what they were for/why they would be used. That is, I could implement a class by regurgitating I'd read -- the 'self' concept, the __init__ function, and so forth -- but I wouldn't actually understand. However, because of some of the details of implementing a bookmarking service, I have had the opportunity to define classes, subclasses, overwrite functions, and so forth within Django's MVC structure. If I learned absolutely nothing else, the time I've spent on this project would have been worth it simply for having a reason to implement classes.

After nailing down storing bookmarks to the database, then came user registration/accounts. I don't have much to say about this since Django core and the [django-registration](http://code.google.com/p/django-registration/) app make it ridiculously simple. I still need to customize the URL config for the registration/login/logout views, but since it works so well right out of the box, it has been a low priority.

Since then, I've put in a few additional features, such as timestamps, tagging, RSS importing (a chance to reuse [some code](https://github.com/mattdeboard/trunkly-rss) I'd written for another self-learning [project](http://mattdeboard.net/2010/12/27/Taking-initiative-and-offering-assistance)), editing and deleting. Thanks to that last item, I finally wrote some JavaScript, thanks to the JQuery library. It's not impressive code but it works, and enhances the UI (though in kind of a hacky fashion).

Yuk isn't done. It's really ugly, and there are some features on my back-of-a-napkin roadmap I'll be implementing this week. That being said I think I can start tightening my code up without it being "premature optimization."
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date3)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-cbe55ae5.js
  var index_cbe55ae5_exports = {};
  __export(index_cbe55ae5_exports, {
    default: () => _04
  });
  var date4, _04;
  var init_index_cbe55ae5 = __esm({
    ".svelte-kit/output/server/chunks/index-cbe55ae5.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date4 = "2011/05/04";
      _04 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `
# No Regrets

I was inspired by the farewell post of a man I've never heard of, published the day of his death. Well, maybe less "inspired" and more "filled with relief and gratitude." You can read his letter [here](http://www.penmachine.com/2011/05/the-last-post). At the time of this writing, however, that link is being hammered by, I'm sure, an overwhelming surge of traffic as word of this post makes its way around the web. Here is Google's [cache](http://webcache.googleusercontent.com/search?q=cache:http://www.penmachine.com/2011/05/the-last-post), and here is a [pastebin](http://pastebin.ca/2053916) copy. It's worth a read, but be forewarned: It is pretty wrenching.

Derek's post-mortem post made me glad I'm living the life I'm living now. I'm 31 years old -- 32 in a month -- and while my daughter Emma is at school, I spend the day programming, running errands, reading, and otherwise pursuing my own personal interests. When she gets home, I make sure she does her homework, I make dinner, I sleep.

Every morning I get to wake up next to a beautiful, brilliant, driven woman who's several years my junior but has a firmer grasp of what matters in life than I think I could have ever hoped to in my 20s. I have never felt better about another person in my life.

I have no bills and I maintain a modest lifestyle. I am attending university for a degree in a subject about which I'm passionate, and which will make me some extra money down the road when I need it.

I set my own schedule every day, fitted around picking up & dropping off my daughter at school. Beyond the normal stresses of being a single parent, my life is astoundingly, remarkably, wonderfully, joyously stress-free. For the first time in my life, I think, I don't have anything to complain about.

Reading Derek's post has affirmed the decisions I've made to put me in this position. I regret nothing, and just about every day is awesome. If you've read this far, please don't take this as shameless bragging. It is a sincere expression of gratitude to Derek, and a grinning shout of relief at the sky that I have let so many unnecessary, trivial things fall away from my life over the past few years.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date4)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-a4688c4c.js
  var index_a4688c4c_exports = {};
  __export(index_a4688c4c_exports, {
    default: () => _06
  });
  var date5, _06;
  var init_index_a4688c4c = __esm({
    ".svelte-kit/output/server/chunks/index-a4688c4c.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date5 = "2011/05/06";
      _06 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Python code deployment with Fabric

So last night at the [IndyPy](http://www.meetup.com/python-182/) meetup I gave a very impromptu talk on [Fabric](http://www.meetup.com/python-182/). It lasted maybe five minutes and afterward I really felt like I just did not do this great tool justice. In order to make up for that, I thought I'd dive in a little deeper to Fabric.

## Why I am an idiot

First and foremost, I love Fabric because **it lets me be lazy**. For far too long while I was developing [Yukmarks](http://yukmarks.com), I was manually typing things like:

\`\`\`bash
# On local:
ssh my-ip-address.com

# On remote:
git pull && sudo /etc/init.d/apache2 restart && ./manage.py dump_data && pg_dump >> foo.txt
\`\`\`

That's right:

> 1.  ssh to my "production" server
> 2.  pull the latest revisions
> 3.  use django's built-in data dump to back up my database
> 4.  _also_ use the postgres dump
> 5.  not pictured: updating the [Haystack](http://haystacksearch.org/) search index for [Whoosh](https://bitbucket.org/mchaput/whoosh/wiki/Home)

You get the picture. It was ugly, and stupid, and time consuming, and I literally cannot believe that I spent all those calories typing those commands in over... and over... and over again.

## Why I love Fabric

So then [someone](http://bretthoerner.com) introduced me to Fabric. I now use Fabric to automate code deployment. (See my full fabfile [here](https://github.com/mattdeboard/Yuk/blob/master/fabfile.py).)

(In no way do I claim to use Fabric to its full potential, nor do I claim to be an expert, nor do I claim that my fabfile is _fabulous_. If you've got tips or corrections, please leave them in the comments.)

To make Fabric work, you just import the API and you're off:

\`\`\`python

from fabric.api import *
from hosts import hosts, secret

# I keep my hosts and auth data in a local file called hosts.py
env.password = secret
env.hosts = hosts

def git_pull():

    run("cd %s; . bin/activate; cd %s; git pull; ./manage.py schemamigration"

    :   " --auto yuk; ./manage.py migrate yuk;cp %s* %s;sudo /etc/init.d/apache2"
        " force-reload" % (domain_dir, appdir, css_dir, static_file_dir))
\`\`\`

The above code is exactly what it looks like: a number of semicolon-separated shell commands. It's probably the most idiot-proof, time-saving thing I've ever used. Please see the below:

![Curiously, coding in Java while flying an airplane moves both dots toward the center.](/static/GRAPH.png)

Stop typing so much. Fabric makes things ridiculously easy.

**Edit 5/8/11**: I actually reduced the complexity of my update_index() fabfile function quite a bit. I was doing a lot of really stupid chowning back and forth, which I've now fixed. Old:

\`\`\`python

def update_search():

:   run("cd %s; . bin/activate; cd %s; sudo chown matt:matt %s; sudo chown matt"
    ":matt %s*; ./manage.py update_index; sudo chown www-<data:www-data> %s; "
    "sudo chown www-<data:www-data> %s*; sudo /etc/init.d/apache2 force-reloa"
    "d" % (domain_dir, appdir, whoosh_dir,
    whoosh_dir, whoosh_dir, whoosh_dir))
\`\`\`

New:

\`\`\`python

def update_search():

:

    run("sudo -u www-data /a/mattdeboard.net/bin/python %smanage.py update_inde"

    :   "x; sudo /etc/init.d/apache2 force-reload" % appdir)
\`\`\`

**p.s.** In addition to Fabric, you'll definitely want to incorporate cron & creative use of your Makefile to make your life easier. Consult [the github repo](https://github.com/mattdeboard/Yuk) for Yukmarks.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date5)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-bd256a4b.js
  var index_bd256a4b_exports = {};
  __export(index_bd256a4b_exports, {
    default: () => _08
  });
  var date6, _08;
  var init_index_bd256a4b = __esm({
    ".svelte-kit/output/server/chunks/index-bd256a4b.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date6 = "2011/05/08";
      _08 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Haystack index update script + cronjob

[Yukmarks](http://yukmarks.com) doesn't really have any users except for me and my girlfriend, so updating the search index manually has never been very difficult. Just punch up my [fabfile](http://mattdeboard.net/2011/05/06/if-you-dont-use-fabric-do/) and run update_search(). Trivial.

However, I am seriously, profoundly lazy, so all those keystrokes were getting annoying. Plus, manually updating search is just stupid & inefficient. I could use the same amount -- or less -- of keystrokes to just Ctrl-F on my Yukmarks [profile page](http://yukmarks.com/u:matt). So I wrote a script to automatically update my [Haystack](http://haystacksearch.org/) search. A cron job runs it every 15 minutes.

## The code

\`\`\`python

import subprocess
import sys
import logging

domain_dir = "/a/mattdeboard.net/"
appdir = domain_dir + "src/yukproj/"
whoosh_dir = appdir + "yuk/whoosh/"

def update():
    logging.basicConfig(
      filename='/a/mattdeboard.net/src/index.log',
      level=logging.INFO,
      format='%(asctime)s %(levelname)s:%(message)s',
      datefmt='%m/%d/%Y %H:%M:%S'
    )

    logging.info('Starting index update.')
    update_index = subprocess.Popen(['sudo', '-u', 'www-data',
      domain_dir+'bin/python',
      appdir+'manage.py', 'update_index'],
      stdout=subprocess.PIPE,
      stderr=subprocess.STDOUT)
    update_index.wait()
    apachereload = subprocess.Popen(['sudo',
      '/etc/init.d/apache2',
      'force-reload'],
      stdout=subprocess.PIPE,
      stderr=subprocess.STDOUT)
    apachereload.wait()

    if not any((update_index.returncode, apachereload.returncode)):
      logging.info('Index successfully updated.')
    else:
      subs = [update_index, apachereload]
      logging.error('**INDEX UPDATE FAILED**')
      logging.error('The following exit codes were returned:')
      logging.error('- update_index: %s' % update_index.returncode)
      logging.error('- apachereload: %s' % apachereload.returncode)

    for sub in subs:
      if sub.returncode:
        logging.error('Error information:')
        logging.error('stdout: %s' % sub.communicate()[0])
        logging.error('stderr: %s' % sub.communicate()[1])

if __name__ == '__main__':
  update()
\`\`\`

The (root) cron job:

\`\`\`bash

0,15,30,45 * * * * /a/mattdeboard.net/bin/python /a/mattdeboard.net/src/yukproj/
srchupdate.py -c|mail -s "Search Update Complete" matt
\`\`\`

(I have it all on one line in crontab, but broken up into two here for ease of reading.)

## What do

So basically every 15 minutes, the server runs [srchupdate.py](https://github.com/mattdeboard/Yuk/srchupdate.py), and logs the results to a log file outside the project directory. If the update fails, it logs the exit status values, stderr and stdout data (using the communicate() method and returnvalue attribute of Python's excellent \`subprocess.Popen\`). This captures traceback info and has made debugging much easier.

The biggest source of friction is [Whoosh](https://bitbucket.org/mchaput/whoosh/wiki/Home), which powers my Haystack install. Whoosh is pure Python, and very easy to install. However, it is _extremely_ slow. I'd probably even say ponderous. For ~350 bookmark entries on Yuk, it takes about 10 seconds to update. From what I understand, Solr is much faster, but has a much steeper learning curve. For Yukmarks, I think Whoosh is fine, but I doubt going forward I'd use it for any serious projects where speed is important.

If you got here after Googling for a Haystack auto-update solution, I hope this helps.

_Edit: Removed a paragraph about incremental indexing. Haystack does this by default._
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date6)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-8e92a404.js
  var index_8e92a404_exports = {};
  __export(index_8e92a404_exports, {
    default: () => _09
  });
  var date7, _09;
  var init_index_8e92a404 = __esm({
    ".svelte-kit/output/server/chunks/index-8e92a404.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date7 = "2011/05/09";
      _09 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# My guide to rstblog

For about six months now I've been using [Armin Ronacher's](http://lucumr.pocoo.org/) minimalist blog "platform", [rstblog](https://github.com/mitsuhiko/rstblog). For static blogs like this one, it's great. However, it is definitely not a plug-and-play blog solution. It has definitely had a learning curve, but nothing too intimidating. This post will describe some of my experiences with rstblog over the past six months, and some of the optimizations I've made to the publishing process.

Before I go any further, I want to thank [Morten Siebuhr](http://sbhr.dk), whose excellent [blog post on rstblog](http://sbhr.dk/2010/11/30/using_rstblog/) helped me both configure and maintain my blog. He illuminated some of the general points of rstblog, and before you go any further, please read it.

## Some background

First, rstblog is so called because it is powered by [reStructuredText](http://docutils.sourceforge.net/rst.html), a very powerful, easy-to-grok markup syntax. (It's right up there with [Fabric](http://fabfile.org/) on my ["Idiot-Proof/Time-Saving" graph](http://mattdeboard.net/static/GRAPH.png).) I never realized how pervasive rst is, until I decided to move to rstblog from [Tumblr](http://tumblr.com). Using Armin's blog platform (which he calls a ["Not-invented-here](http://en.wikipedia.org/wiki/Not_Invented_Here) site generator") has paid dividends just in terms of the knowledge of rst I've been forced to acquire.

Some other concepts & tech with which I've had to get familiar in support of rstblog:

: 1. [YAML](http://www.yaml.org/spec/1.2/spec.html) - Specifically, getting a grip on how finicky it can be about whitespace. 2. [Makefiles](http://linuxdevcenter.com/pub/a/linux/2002/01/31/make_intro.html) - I knew \`make\` is how Linux compiles or otherwise builds software. But I was not aware of how to put Makefiles into play to control this behavior. (I'm really getting sick of mentioning this guy here, but Brett Hoerner has a simple Makefile [here](https://github.com/bretthoerner/bretthoerner.com/blob/master/Makefile) that I incorporated into my own workflow.) 3. [virtualenv](http://pypi.python.org/pypi/virtualenv) - Though virtualenv is now so pervasive in my dev work that I don't really remember a time when I _wasn't_ using it, I know I first used it for my blog. I consider [this](http://www.clemesha.org/blog/modern-python-hacker-tools-virtualenv-fabric-pip) to be a canonical explanation of why virtualenv is great. (Not that I'm a keeper of canon or anything.) 4. [RVM](https://rvm.beginrescueend.com/) - I use [Blueprint](http://blueprintcss.org) to manage CSS files for each of my websites. Blueprint requires Ruby. I'm an idiot, so I need Ruby Version Manager to help me be not stupid.

## Workflow

The big, tough nut to crack for rstblog, from my perspective, has been workflow. Nowadays, mine looks like this:

> 1.  Fire up emacs on my local machine and create blog post.
> 2.  Tab over to terminal, cd to my blog's root directory (still on local machine).
> 3.  \`$ make clean\`
> 4.  \`$ make build\`
> 5.  \`$ make upload\`
> 6.  ???
> 7.  Publish

Pretty fast. It's nearly instant. However, there were some confusing spots when I first started.

### Stay local

First, note that **I did no work on the server hosting my blog**, excepting the initial directory creation. Everything was created locally, and my Makefile took care of pushing data to my live server, courtesy of [scp](http://linux.die.net/man/1/scp). Don't make the mistake I did last December/January in doing all the work on the remote end. Make a single /blog/ directory on your local machine and use that as your staging area.

### Beware extraneous files

The second thing to be aware of is that the build process for rstblog is a big vacuum. It does not discern between .rst, .rst~, #foo.rst#, overmyhead.jpg, asco.png, etc., files. It will create a blog entry for every file that is in either a \`<yyyy>/<mm>/<dd>/\` format directory or in the blog's root directory (mine is \`/a/mattdeboard.net/blog\` on my local machine). Before you \`make build\`, ensure that there's nothing but entry.rst in that day's directory.

For example, if use vim and you're working on an entry titled "Matt's birthday" for June 3, 2011, you'll do:

\`\`\`bash
<matt@Ubuntu>:/a/mattdeboard.net/blog$ mkdir -p 2011/06/03
<matt@Ubuntu>:/a/mattdeboard.net/blog$ vim 2011/06/03/matts-birthday.rst
\`\`\`

If vim does an auto-save/backup of your file mid-edit, you may wind up with a matts-birthday.rst~ file in the directory along with matts-birthday.rst. rstblog's build process will create a blog entry for each. So make sure you somehow curate your directories and remove extraneous files. (For emacs, I added the following to my .emacs file:

\`\`\`clj
(setq backup-directory-alist '(("." . "~/.emacs_backups")))
\`\`\`

If you use anything else, [you're on your own](http://google.com)).

### index.html wonkiness

I found that when I accidentally created unwanted blog entries as described above, they were really persistent about sticking around my root index.html file. Finally I figured out that I had to **delete the remote blog/index.html file** and re-\`make upload\`. That fixes it.

### CSS & syntax highlighting

As you may be able to tell, I'm as excited as a puppy who just found his penis about syntax highlighting in my blog posts. That's because I recently figured out how to get it working using [Pygments](http://pygments.org/docs/quickstart/) and CSS.

A word about CSS: Use [Blueprint](http://blueprintcss.org) for organizing and maintaining your CSS files. It makes things a million times easier once you get the hang of it. The finer points of Blueprint are beyond the scope of this post, but here is my bash alias I use to roll any CSS changes into my build:

\`\`\`bash

alias er="cd /a/mattdeboard.net; . bin/activate; cd /home/matt/blueprint/lib/; ruby compress.rb -p blog; cd /a/mattdeboard.net/blog; make clean; make build"
\`\`\`

I am 100% sure I'm doing it wrong with Pygments. I have the styles hard-coded in my stylesheet, which I don't think I need to do. rstblog has support for Pygments, so it doesn't make sense that I'd need to put them in my stylesheet. However, it's done, it works, it looks how I want, so fixing it is an extremely low priority. If you've got insight on how this actually works, I'm all ears!

## Conclusion

I like having this much control over the under-the-hood components of my blog. If you don't see the need, it's probably not worth the time investment. However, if you're a relative newcomer to Linux and/or Python, and you have the desire to learn more about both while simultaneously wanting to stab yourself in the face occasionally, I strongly recommend checking out rstblog. It is a great vehicle for self-education.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date7)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-22e5c481.js
  var index_22e5c481_exports = {};
  __export(index_22e5c481_exports, {
    default: () => _12
  });
  var date8, _12;
  var init_index_22e5c481 = __esm({
    ".svelte-kit/output/server/chunks/index-22e5c481.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date8 = "2011/05/12";
      _12 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Python-Powered Smash'n'Grab

After watching and listening my girlfriend wrestling with her course schedule for the fall semester, I got a "big idea" for another project. It's not ready to see the light of day, but suffice it to say it involves a better way of scheduling classes.

To start down the road of iterating on my project, I needed data. Specifically, I needed the schedule of every course offered by [IUPUI](http://iupui.edu) in the fall: what days of the week each class was held, and at what times.

I assumed it would be as easy as sending a data request to the university helpdesk. I also assumed it would take 1-3 weeks for them to respond with the data. After all, they do make the schedule available [as a PDF](http://registrar.iupui.edu/enrollment/4118/4118_standard.pdf). That's clearly autogenerated, so they must have raw data sitting in a database somewhere, right?

The response I got was indecisive and confusing:

> "Hi Matt,
>
> I'm sorry but **we currently don't have a way for students to obtain this type of information**. Contact your instructor or department to see if they can provide a dataset for you.
>
> Also, the IUPUI Registrar's website might help build your own dataset <http://registrar.iupui.edu/schedule.html>.
> Thanks,
>
> SIS Help Desk"

_(Emphasis added)_

I sent a follow-up email asking what the bolded text actually means, but got nothing back. So instead of waiting, I decided to just make my own.

I used Python's [lxml library](http://lxml.de/) to power a script that scrapes IUPUI's [Schedule of Classes](http://registrar.iupui.edu/enrollment/4118/) sub-site. Then the script builds a JSON document populated with the data from the course relevant to my project. The structure of the sub-site, thankfully, is RESTful, which made writing the logic much easier.

I won't bore you with the nitty-gritty whys and wherefores of the problems I ran into here (plus, my code is commented). scrapeDepts() initializes the JSON file and populates it with department names:

\`\`\`python
import string
import json
import time
import sys
import os
import re
import lxml.html as lh

jsonSched = "sched.json"


def scrapeDepts():
    """Scrape the departments and export to json."""
    divMain = parse("<http://registrar.iupui.edu/enrollment/4118/index.html>")
    depts = [link.text for link in divMain.findall(".//a")]
    deptDict = {}

    for dept in depts:
        d = parse(
            "[http://registrar.iupui.edu/enrollment/4118/classes/%s/inde](http://registrar.iupui.edu/enrollment/4118/classes/%s/inde)"
            "x.html" % dept
        )
        crs = [
            {a.text.replace(" ", ""): {}}
            for a in d.findall(".//a")
            if a.text.startswith(dept)
        ]
        deptDict[dept] = crs

    with open(os.path.abspath(jsonSched), "w+") as f:
        json.dump(deptDict, f)

    return
\`\`\`

\`scrapeCourses()\` is heavily commented for my own sanity. I've got probably more list comprehensions than I need, but they're more readable this way. Plus, it works, and the part of the process the list comprehensions handle aren't going to impact total run time in any appreciable way on a dataset this small.

\`\`\`python
def scrapeCourses():
    """Scrape the courses for each department."""
    item_counter = 0
    with open(os.path.abspath("sched.json"), "r+") as f:
        deptDict = json.load(f)

    for key in deptDict.keys():
        # item_counter keeps a running tally of all the department and
        # course pages the parser touches. It increments once for a dept.
        # page, and once for each course page on the department.
        item_counter += 1
        for d in deptDict[key]:
            item_counter += 1
            try:
                # Some courses did not parse properly in scrapeDepts() so
                # I had to include this try/except loop to handle
                # IOErrors.
                f = parse(
                    "http://registrar.iupui.edu/enrollment/4118/class"
                    "es/%s/%s.html" % (key, d.keys()[0])
                )
            except:
                continue

            # This is lxml syntax to find all <pre></pre> tags. \`.//foo\`
            # finds all <foo></foo> tags.
            pre = f.findall(".//pre")[0]

            # The text content for the <pre> tag on a given dept/course
            # web page comes through as an unformatted block of text. \`t\`
            # is a list comprehension that splits this block of text into
            # separate lines, including each separate line iff. it has at
            # least one character. This conditional is necessary because
            # splitlines() will include empty strings as lines. e.g.:
            #
            #    ['hello world', '', 'my name is matt', '', 'how are you']
            t = [
                l.strip() for l in pre.text_content().splitlines() if len(l.strip()) > 0
            ]

            # \`lines\` is a list comprehension to gather all the lines
            # from \`t\` that began with a digit. This is a heuristic
            # particular to registrar.iupui.edu.
            lines = [line for line in t if line[0] in string.digits]

            for line in lines:
                sid = "session%d" % lines.index(line)
                d[d.keys()[0]][sid] = {"time": "", "days": ""}
                try:
                    # This regex matches string segments like:
                    #    '03:30P-04:45P     MWF'
                    # Exceptions are caused when a course is closed,
                    # or when the times of the class are TBD.
                    reg = re.search(
                        r"(?P<time>d+:d+[AP]-d+:d+[AP]W+[MTWRF" "]{1,5})", line
                    )
                    dt = reg.group("time").split()
                    time = dt[0]
                    days = dt[1]
                    d[d.keys()[0]][sid]["time"] = time
                    d[d.keys()[0]][sid]["days"] = days
                except AttributeError:
                    d[d.keys()[0]][sid]["time"] = "UNK"
                    d[d.keys()[0]][sid]["days"] = "UNK"
                    continue
                except IndexError:
                    d[d.keys()[0]][sid]["time"] = "CLOSED"
                    d[d.keys()[0]][sid]["days"] = "CLOSED"
                    continue

    with open(os.path.abspath("sched.json"), "w") as f:
        json.dump(deptDict, f)

    return item_counter
\`\`\`

\`parse()\` is a helper function for \`scrapeDepts()\` and \`scrapeCourses()\`.

\`\`\`python
def parse(link):
  print >> sys.stderr, "Parsing %s" % link[-15:]
  ind = lh.parse(link)
  print >> sys.stderr, "Parsing complete. Fetching div#main"
  main = [div for div in ind.findall(".//div") if div.get("id") == "main"]
  print >> sys.stderr, "Fetch complete. Returning to main process."
  return main[0]
\`\`\`

\`maketime()\` is basically the function I had been wanting to write in the first place, if I had been provided with some legit raw data. It takes the machine-readable data and turns it into a much more manageable data structure. In this case, it's a list. Then using the [time library](http://docs.python.org/library/time.html) it transforms the string describing the course start and end times, first into a list of [time.struct_time](http://docs.python.org/library/time.html#time.struct_time) objects. Finally, I use \`struct_time\`'s attributes to transform that list into a list of integers.

\`\`\`python
def maketime():
    with open("sched.json", "r") as f:
        sched = json.load(f)
    courses = []

    for k in sched.iterkeys():
        for i in sched[k]:
            for j in i.iterkeys():
                for h in i[j]:
                    courses.append([j, h, i[j][h]["time"], i[j][h]["days"]])

    # Strip out all 'UNK' and 'CLOSED' courses.
    courses = [course for course in courses if isinstance(course[2][0], int)]

    for course in courses:
        timeSplit = course[2].split("-")
        for t in timeSplit:
            y = time.strptime(t, "%I:%M%p")

            if y.tm_min == 0:
                minute = "00"
            else:
                minute = str(y.tm_min)

            hour = str(y.tm_hour)
            y = int(hour + minute)
            timeSplit[timeSplit.index(t)] = y
        course[2] = timeSplit

    return courses


if __name__ == "__main__":
    scrapeDepts()
    ic = scrapeCourses()
    print(ic)
\`\`\`

Turned out I was scraping about 2,850 individual pages to compile the data. Running this script took about an hour each time I ran it. At least now I'm past that and can move on with the rest of the project, which I _hope_ to start this weekend.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date8)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-c38bd788.js
  var index_c38bd788_exports = {};
  __export(index_c38bd788_exports, {
    default: () => _13
  });
  var date9, _13;
  var init_index_c38bd788 = __esm({
    ".svelte-kit/output/server/chunks/index-c38bd788.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date9 = "2011/05/13";
      _13 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Chebyshev polynomials in LaTeX

I'm recovering from an obsession with [Chebyshev polynomials](http://mathworld.wolfram.com/ChebyshevPolynomialoftheFirstKind.html). Despite the fancy title and somewhat-intimidating definition, Chebyshev polynomials are actually a fantastic shortcut -- relative to what we're taught from the book -- to factoring out trigonometric double-angle problems like \`cos(6x)\`.

I was originally going to write a script that calculated the Chebyshev polynomials, but when I learned Python's [SciPy](http://www.scipy.org/) library already has a function, I "pivoted." Instead I wanted to write the below script, which calculates the polynomial using scipy.special.orthogonal.chebyt(), then creates a [LaTeX](http://www.latex-project.org/) -formatted string representation of the equation. For example, the output for the ninth-degree Chebyshev polynomial is rendered thusly:

![image](http://mathbin.net/equations/62360_0.png)

Here's the code, it should be pretty straightforward:

\`\`\`python
import sys
import math
from scipy.special import orthogonal as orth


def chebyTex(n):
    """Returns a LaTeX-formatted string for a Chebyshev polynomial of
    order n."""
    c = orth.chebyt(n)
    coeffs = []
    for i in c:
        if i >= 1 or i <= -1:
            coeffs.append(int(round(i)))
        else:
            pass

    pows = [coeffs.index(i) * 2 for i in coeffs]
    pows.sort(reverse=True)

    # The only "magic" in this function is some string manipulation to
    # handle the LaTeX formatting for super- and subscript characters.
    arrays = zip(coeffs, pows)
    latex_string = "[T](){%s}(x) = " % n
    for array in arrays:
        z = n - arrays.index(array) * 2
        if arrays[-1] != array:
            latex_string += r"%sx" % array[0]
            latex_string += r"^{%s} + " % z
        else:
            if not n % 2:
                latex_string += "%s" % array[0]
            else:
                latex_string += "%sx" % array[0]

    return latex_string


if __name__ == "__main__":
    s = chebyTex(int(sys.argv[1]))
    print(s)
\`\`\`

It would be trivial to connect to something like [MathBin](http://mathbin.net) pull down and store the resulting image, but was beyond the scope of this little script.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date9)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-91ab52fc.js
  var index_91ab52fc_exports = {};
  __export(index_91ab52fc_exports, {
    default: () => _17
  });
  var date10, _17;
  var init_index_91ab52fc = __esm({
    ".svelte-kit/output/server/chunks/index-91ab52fc.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date10 = "2011/06/17";
      _17 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Changing Careers at 31

I won't bury the lead: About a month ago, I got my first job as a programmer after years of working in PR and marketing.

As I noted [here](http://mattdeboard.net/2011/05/04/no-regrets), I spent this spring a "stay-at-home dad," and spent practically every waking moment becoming a better programmer, with the intent of joining the ranks of professional hackers and getting an awesome job making awesome things. Well, a few days after [my last blog post](http://mattdeboard.net/2011/05/13/chebyshev-polynomials-in-latex), an acquaintance I'd through a local Python meetup [tweeted a job opening](http://twitter.com/#!/wehrlock/status/68811203329261568). I responded, interviewed, and amazingly enough, got the job.

I should point out that I live in Indiana. Development jobs using Python are _extremely_ rare, and one using Django is rarer still. In fact, as far as I know, I may very well have snagged the only job _in Indiana_ that offered the opportunity to work with both Python and Django.

I consider myself very fortunate. It is a great place to work, with smart people, and every day I do interesting things. Every day I learn something new. Working with geeks is _very_ different than working with marketers. My boss's bookshelf is filled with books like, [*Leading Geeks*](http://www.amazon.com/Leading-Geeks-Manage-Deliver-Technology/dp/0787961485/ref=sr_1_1?ie=UTF8&qid=1308409661&sr=8-1). When I talk about something I read on [HN](http://news.ycombinator.com), there's a conversation, not a bunch of blank stares.

Though I get up at 5:30am to get Emma off to day camp and drop my girlfriend off downtown for her classes at [IUPUI](http://iupui.edu), I practically bounce out of bed. I love going to work. I'm a little disappointed when I have to go home for the night. Putting in those long hours reading and hacking have paid off. Best decision ever.

If you're curious, at work I'm working on deployment automation. It's not super sexy objectively speaking, but I feel like I've achieved a moderate level of expertise with [Fabric](http://fabfile.org). Plus, it has been a great way to learn the ins and outs of the various systems we use at work. Eventually I hope to roll it up into the Django admin panel and make provisioning and deployment as easy as clicking a few radio buttons.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date10)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-7d5d5c43.js
  var index_7d5d5c43_exports = {};
  __export(index_7d5d5c43_exports, {
    default: () => _01
  });
  var date11, _01;
  var init_index_7d5d5c43 = __esm({
    ".svelte-kit/output/server/chunks/index-7d5d5c43.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date11 = "2011/07/01";
      _01 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Export ALL Your Facebook Photos Easily

It's no secret that [Google+](http://plus.google.com) is gaining new users as fast as the acceptance pipeline will let invitees click "Make me an account."

I love G+, and am thrilled that someone has finally, IMO, smashed Facebook's reign as top dog. There's been a poverty of choice for years when it comes to the social stuff. Google has hit it out of the park. If you are undecided about trying out G+, do it. It's well worth it.

At any rate, on to why I'm writing. If there's a way to download all your Facebook photos at one fell swoop, I don't know what it is. Of course, I don't use Facebook apps or anything, so I'm sure there's something there. It's just easier for me to write it myself.

It will download all of your pictures from your Facebook account, and store them in whatever directory you specify (default is your current working directory). Additionally, this script will create a subdirectory for each album, and tuck each photo into the appropriate subdir. This way, when you go to upload them to [Picasa](http://picasaweb.google.com), you can just create whatever Picasa folder, and just "select all" in a particular album subdirectory for easy uploadin'.

I guess I could plug this in to the Picasa API, and may do so this weekend.

\`\`\`python
import optparse
import os
import re
import subprocess
import sys
import urllib2

import facepy

from mytoken import token, username


def get_photos(dl_dir):
    dest = os.path.abspath(dl_dir)
    p = re.compile(r"[,!' /]")
    fb_photos = find_photos()
    for album in fb_photos:
        albname = p.sub("_", album).lower()
        mk_album_dirs(dest, albname)
        folder = albname
        for img_url in fb_photos[album]["images"]:
            img_name = img_url.split("/")[-1]
            url = urllib2.urlopen(img_url)

            with open("%s/%s/%s" % (dest, folder, img_name), "w") as f:
                meta = url.info()
                filesize = int(meta.getheaders("Content-Length")[0])
                # print "Downloading: %s Bytes: %s" % (img_name, filesize)
                filesize_dl = 0
                blocksize = 8192
                while True:
                    buff = url.read(blocksize)
                    if not buff:
                        break

                    filesize_dl += blocksize
                    f.write(buff)
                    status = r"%10d [%3.2f%%]" % (
                        filesize_dl,
                        filesize_dl * 100.0 / filesize,
                    )
                    status = status + chr(8) * (len(status) + 1)
                    # print status,


def find_photos():
    """
    Creates a dictionary, with album id as key and a list of images
    in the album as the value.
    """
    albums = {}
    graph = facepy.GraphAPI(token)
    my_albums = graph.get("%s/albums" % username)
    for album in my_albums:
        albums[album["name"]] = {}
        albums[album["name"]]["id"] = album["id"]
        my_pics = graph.get("%s/photos?limit=100" % album["id"])
        albums[album["name"]]["images"] = [pic["source"] for pic in my_pics]
    return albums


def mk_album_dirs(dest, album):
    """
    Create a subfolder for each facebook album.
    """
    if not os.path.exists("%s/%s" % (dest, album)):
        os.mkdir("%s/%s" % (dest, album))
    return


if __name__ == "__main__":
    d = os.getcwd()
    parser = optparse.OptionParser()
    parser.add_option(
        "-d",
        "--dest",
        action="store",
        type="string",
        dest="dest_dir",
        default=os.getcwd(),
        help=(
            "Specify the directory where you want your photos t"
            "o be downloaded. Photos will be downloaded to cur"
            "rent working dir by default."
        ),
    )
    args = sys.argv[1:]
    (options, args) = parser.parse_args(args)
    get_photos(options.dest_dir)
\`\`\`
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date11)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-7a369215.js
  var index_7a369215_exports = {};
  __export(index_7a369215_exports, {
    default: () => _23
  });
  var date12, _23;
  var init_index_7a369215 = __esm({
    ".svelte-kit/output/server/chunks/index-7a369215.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date12 = "2011/11/23";
      _23 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `
# How I Became a Programmer

I posted a [very brief response](http://news.ycombinator.com/item?id=3268469) to a post on HackerNews yesterday challenging the notion that 8 weeks of guided tutelage on [Ruby on Rails](http://rubyonrails.org/) is not going to produce someone who you might consider a "junior RoR developer." It did not garner many upvotes so I figured that like most conversation on the Internet it faded into the general ambient chatter. Imagine my surprise when I woke up to couple handfuls' worth of emails from around the world asking me what I did, how I did it, and how I got a job. I'm assuming, judging by the relatively small amount of mail I got from a random aside on HN*, that there must be a lot of people who are trying to figure out how to pursue a career in programming.

## First, A Disclaimer or Two

Please note that this blog post is entitled, "How **I** Became a Programmer", not, "How **You** Can Become a Programmer." I'm not a self-help guru or wise or even a particularly good programmer. I did, however, decide at an inflection point in my life to pursue something vigorously and it paid off. Any insights gleaned from my experience are yours to make on your own; I doubt I'll have much insight for your personal situation.

Also, after consulting with my girlfriend, my total time of dedicated effort to becoming a paid programmer was actually about 12 weeks, not ~10 as I stated in the post I linked to above. So, there you go.

## My Story: tl;dr

In brief: I left the Marine Corps after more than a decade in July 2010. I got a job at the state lottery as a PR flak in August of that year, and lost it in mid-February. In mid-May I got hired as a part-time "junior User Experience engineer" at [DirectEmployers Association](http://directemployers.org). By late August I was a full-time, regular old "User Experience engineer."

When I lost my job I decided that I was done doing PR; I wanted to be a programmer. I took my tax return and stretched it out on a ramen and water diet. My family (dad, mostly...) was nervous as hell. In that February to May span I spent basically every waking moment learning to program, learning about Linux, and learning about computer science. I taught myself Python, I taught myself Django, I learned some functional and imperative programming, and got semi-decent at the Linux command line.

Voila. Without further ado, I'm going to write about what I didn't do, then dive into the questions I got via email.

## What I Didn't Do

One of the things that was asked in almost every email was, "How did you learn Django in 11 weeks?"

I want to make it clear that I didn't set out to learn Django per se. Django is just a very nice toolkit of abstractions that makes creating web applications easy using Python. As far as I'm concerned learning Django was incidental to learning to program. I did not -- and still don't -- want to be considered a "Django developer." I'm not even sure I want to refer to myself as "a Python programmer."

In other words, I do not feel that I would be as modestly competent as I am today if I had spent an inordinate time becoming an expert at the abstraction layer of Django, instead of learning the concepts that make Django work.

## Questions From Email

**Did you begin with web or book resources?**

Yes I did. :) [Django](http://djangoproject.com) has excellent documentation, but [StackOverflow](http://stackoverflow.com) is a much more comprehensive help source. On more general topics, I believe that MIT's OpenCourseware [Introduction to Computer Science](http://www.youtube.com/watch?v=k6U-i4gXkLM) video lecture series was one of the first real computer science resources I consumed. I watched through lecture 13 or something.

**What kind of hours were you putting in on a daily and weekly basis?**

A lot. Sometimes 8, sometimes 12, sometimes 16. I was a willfully unemployed single parent, so I not only had a passion for programming, I was also hungry (figuratively speaking) and desperate. I put myself in a position where I had no room to be lazy or complacent. I think above all else that made me work 10x harder. I didn't play video games, I didn't watch TV, I didn't sleep all day. All I did all day every day was code, hack, program and develop.

**Did you have a mentor of any kind?**

I did indeed. A very smart guy was and is my mentor still, though I've learned enough that I don't rely on him as much for guidance as I used to. He mentored my metamorphosis into a programmer in nearly every way. Some specific ways he provided leadership: Practical programming knowledge (especially Python & Django); command-line expertise; got me up-and-running with emacs & vim; career advice. It helps that he is a very successful & well-respected guy who has a reputation for informed skepticism.

**Was there anything from your previous background and experience that you feel was a particular asset in your self-guided studies?**

Not really. I was a computer geek from way back, had a few BBSes in the late 80s (yes, I'm a child of the 80s & 90s), learned QBasic & VisualBasic back in the day, and tinkered with Python for a few years off and on... mostly off. Other than that, nope.

**How did you come to choose Django to study?**

The [guy](http://bretthoerner.com) whose career I was trying to emulate had made a very successful career for himself with Django. Pretty straightforward from there.

**Would you mind sharing your learning process?**

I want to restate that I am not a self-help guru or particularly special in any way. I just worked hard because I was hungry and in a self-made corner where I had no choice but to succeed. I consumed everything I could that would get me to a place where I could make money doing something I love. That was my learning process. Seriously.

**I would appreciate it if you can show me how you learned Django and give me any tips/tricks sites/books to look at to learn Django or even HTML/CSS, JavaScript (Front-end Engineering stuff)**

I don't have any tips or tricks to learning except just doing it. I spent a lot of long (but enjoyable) hours learning stuff.

As I said above, I did not and do not consider it fruitful to "learn Django," "learn Ruby on Rails," or "learn [Noir](http://webnoir.org)." I think a contributor to my success was learning the languages and the concepts behind them, then using a web framework to better learn that language. I learned the framework incidentally to my education in the language.

Go read the Django docs, join #django on irc.freenode.net and ask questions constantly. That's what I did and it worked ok for me. But honestly I didn't just sit down and read stuff most of the time. Usually I was making things in order to learn concepts better, then reading in support of my goals. I'm a hands-on learner. Some people aren't, but I am so it worked for me. Decide on your own if that's good for you.

As far as HTML & CSS there is just so much information out there, and they're such straightforward concepts. I learned as much HTML & CSS as I needed to do what I needed to do. I did not memorize much about how HTML & CSS work, i.e. syntax & semantics. I don't know right off the top of my head how to create a gradient, but I do know right off the top of my head how to find out. I think that's the important thing.

**How did you show the company your skills? Did you show them the projects you've made?**

[Github, Github, Github](http://github.com/mattdeboard). I can't emphasize it enough. Make stuff, put it on github, show people you're passionate and smart and curious.

Also, network. Attend meetups. Meet people. Tweet. Blog. Interact with the community around your language(s). Get to know people. Demonstrate to the world that you really love programming. The week before I saw the job posting for my first programming job I delivered a lightning talk on [Fabric](http://fabfile.org), Python's Capistrano analog. That got me on a few people's radar.

## Conclusion

If I had to summarize the big overview of how I did what I did, I'd say:

1.  Ask questions, be curious, be passionate
2.  Learn a language, not a web framework for god's sake.
3.  Work hard
4.  Network, attend meetups, tweet, blog, be social and show people you'd be fun to work with, and a credit to team.
5.  (Optional) Put yourself in a position of desperation, so there is no choice but to succeed

My final point really is that I got lucky. I'm not an amazing developer. At the end of the day I'm a newb and I still have a lot to learn. My career is just beginning but I am proud of the effort I put into changing my life. I hope my experiences can help some other folks.

* _I should note that I was already of a mind to blog about this since my cousin Jeff has also taken up programming after leaving the environmental consultancy business._
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date12)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-a1366740.js
  var index_a1366740_exports = {};
  __export(index_a1366740_exports, {
    default: () => _29
  });
  var date13, _29;
  var init_index_a1366740 = __esm({
    ".svelte-kit/output/server/chunks/index-a1366740.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date13 = "2011/12/29";
      _29 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `
# Displacing MySQL with...Solr?

We recently completed a big refactor at [work](http://directemployers.org), the intent for which was implementing search for one of our products, a Django-based web CMS called DirectSEO. It did not take long, however, to realize that by choosing Solr as our search backend, we had the opportunity to make some much-needed optimizations. Now, after analyzing three weeks' worth of data related to the refactor, I can say the time investment has yielded real, measurable gains. They came mainly from removing some very expensive database calls from our views, then fetching the same data via calls to the [Solr](http://lucene.apache.org/solr/) index. This resulted in a simplified code base and decreased page-load times. This post is intended to explain a bit about our approach to leveraging Solr's feature set.

(This is my first truly technical post so I'm sure I'm leaving things out, or explaining poorly. Please contact me or leave comments if I didn't cover something in enough detail or if you've got any questions.)

## Some Background

As part of their membership in DirectEmployers, member organizations are provided with a job board on a domain of their choosing to present their job listings in an SEO-friendly way. These sites often live on the [.jobs TLD](http://en.wikipedia.org/wiki/.jobs); however, members can -- and often do -- use subdomains of their own site for their job board. An example of each: [Lockheed-Martin](http://lockheedmartin.jobs) (.jobs); [Arrow Electronics](http://jobsearch.arrow.com) (other).

### How It Works

The job boards are generated dynamically. Members give us some basic information -- header images, brand colors, and so forth -- which we use to create a site configuration. This configuration is then referenced to lookup all the jobs associated with a particular member organization. Sometimes, a member organization may have multiple job sites catering to specific job categories: [IBM Brazil](http://ibm-brazil.jobs) or [Lockheed-Martin InfoSec](http://lockheedmartin-infosec.jobs), for example. In these cases, the corpus of jobs for that member organization are then refined to only include jobs which fall into that category.

From here, users can drill down into the jobs using standard navigation links which we generated based on facets for title, location and custom facets we call [Saved Search](https://github.com/DirectEmployers/saved-search) (not to be confused with [saved-searches](https://github.com/toastdriven/saved_searches)).

## Implementation Details

Simply put, we use Django to deal with MySQL, and we use [Django-Haystack](http://haystacksearch.org) to deal with Solr. We run our [own fork](https://github.com/DirectEmployers/django-haystack) of Haystack, which capitalizes on some hacks in my own [fork of pysolr](https://github.com/mattdeboard/pysolr).

Our saved-search app gives our members a way to create and maintain persistent, user-defined queries. In practice we use these to create sites like the aforementioned [Lockheed-Martin InfoSec](http://lockheedmartin-infosec.jobs). They also give our members the ability to create custom job verticals. [Hilton](http://hiltonworldwide.jobs) has saved searches built around departments; [Unilever](http://unilevercareers.jobs) has a saved search for "hot jobs" they want to fill quickly.

### Architectural Aside

A problem arises, however, when a site has a lot of saved searches. But to understand the problem, I should explain a little bit about how our data is stored in the database and how it gets indexed.

Each job listing is a row on our \`joblisting\` table. This is currently the only table Solr indexes. Haystack uses a module called [search_indexes.py](http://p.mattdeboard.net/search_indexes.py.html) to set the parameters in \`schema.xml\`. In it, we specify model fields to index directly, plus several fields Haystack calls "prepared fields," which contain denormalized or calculated data. Native model fields like \`title\`, \`state\`, \`country\`, etc., can be used to create [facets](http://www.lucidimagination.com/devzone/technical-articles/faceted-search-solr). Facets are what you see under "Filter by (TitleState|Country)" [here](http://arinc.jobs/). Something like the below snippet will return all the values for those fields along with counts of each (which is what faceting is):

\`\`\`python

sqs = SearchQuerySet().facet('title_slab').facet('city_slab') .facet('state_slab').facet('country_slab')
facet_counts = sqs.facet_counts()['fields']
\`\`\`

("slabs" are calculated fields such that the \`city_slab\` field would have a format like:

    "/manassas/virginia/usa/jobs/::Manassas, VA"

We use these to precalculate URL segments in the index so we can keep string manipulation to a minimum in the application. We split on "::" and handle those substrings as needed.)

However, since saved searches are ad-hoc filters that can be composed of any permutation of index fields, they cannot be properly faceted. This means that to get counts of job listings for each saved search, we'd normally have to perform a single HTTP request for each.

To circumvent this costly routine, I hacked up pysolr to implement support for Solr's [field collapsing/group query functionality](http://wiki.apache.org/solr/FieldCollapsing), then wrote [a backend](https://github.com/DirectEmployers/saved-search/blob/master/saved_search/groupsearch.py) to support it. The effect is that for \`n\` saved searches configured for a particular site, only one query is required; the saved search concept would otherwise involve far too many HTTP requests to be practical.

### Haystack & Solr Setup

On the Python side, we use Haystack's [RealTimeSearchIndex](http://docs.haystacksearch.org/dev/searchindex_api.html#realtimesearchindex) class as the basis for our index. In short, it's the exact same as the SearchIndex class, but with post-save/delete listeners for the jobListing table. It gets us as close as we really need to get to ElasticSearch-style real-time search. While Solr 4.0 is going to have "near real-time" search, it's just not a feature we have a need for now. If that changes in the future, we'll re-evaluate.

For Solr, we run two servers in a master-slave configuration. The master handles the real-time updates. The (read-only) slave handles all the queries, and is set to do replication checks every 60 seconds. The side effect of this is that when the master is handling a large volume of updates, average query response time by the slave slows by 50-75ms. For comparison, it normally takes around 200ms for our application to calculate and return an HTTP response.

The one caveat for using Solr in this way is that unlike some other document databases, there is absolutely no notion of relations whatsoever. Plus, obviously, it wouldn't be responsible to use Solr as a primary datastore (A good read on why can be found in [this](http://stackoverflow.com/questions/4960952/when-to-consider-solr/4961973#4961973) response on SO).

## Performance & Reliability

Performance has improved measurably, especially on [pages with a lot of jobs, a lot of facets and a lot of saved searches](http://lockheedmartin.jobs). Some very costly SQL queries have been eliminated. By utilizing Solr's query-tuning tools like \`facet.mincount\`, \`start\` and \`offset\`, we've kept the amount of data transfered per request is low. Using Solr to power saved searches eliminates a lot of complexity from our code base.

Getting data reliability right has taken longer, involving some diligent bug-hunting. I've spent the past four months learning about how Solr works, how to intelligently leverage Haystack's API, and implementing some features of Solr in Haystack that aren't included out-of-the-box. It is important to keep in mind that a Solr match is not necessarily binary. A thing might match, it might not, but more likely it will "kinda" match. Tightening up queries as needed is vital if you want exact results _only_. One of my big hurdles in getting this working right was making sure matches were fuzzy where they should be fuzzy, and exact where they should be exact.

Finally, I think that as we add more features to our application, we'll have to start putting standard RDBMS queries back into play in some areas. For the past 3 months I've been rewiring a Django application, cutting out the old relational stuff and replacing it with simpler, faster methods. It is a dramatic shift. As time goes on we'll be building out more features that will require relational information.

## Conclusion

Utilizing Solr in this way is both ordinary and novel. It's novel because when people think of Solr, they think a search box with a button that says "Search". You click on the button and get results. It's ordinary because Solr is, after all, a document database. It stores documents in a flat structure, and you compose queries to retrieve them. Not exotic, unusual or special in any way. In a use case such as ours, however, where the need for relations is minimal and practically all of our content is generated based on text searching, Solr is great.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date13)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-0c1e49ca.js
  var index_0c1e49ca_exports = {};
  __export(index_0c1e49ca_exports, {
    default: () => _07
  });
  var date14, _07;
  var init_index_0c1e49ca = __esm({
    ".svelte-kit/output/server/chunks/index-0c1e49ca.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date14 = "2012/02/07";
      _07 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# REST API for search results

**Updated:** _So after talking with the author of Tastypie I added the_ \`SearchDeclarativeMetaclass\` _and_ \`SearchOptions\` _to handle inheritance of the metaclass attributes on_ \`SearchResource\`. _I almost entirely copied his_ \`ModelDeclarativeMetaclass\` _and it works well. In-house, we further subclass_ \`SearchResource\` _to model our job postings data in our search index, and it works great._

So, first things first: [django-tastypie](https://github.com/toastdriven/django-tastypie) is pretty great. If you're running a Django web application and want to expose your data via a REST API, tastypie will do it. I got everything up-and-running in just a few hours (95% reading, 5% writing).

Tastypie -- written by [Daniel Lindsley](https://twitter.com/#!/daniellindsley), the guy behind [django-haystack](http://haystacksearch.org) -- uses a \`Resource\` class to handle all the API hairiness; it comes with a \`ModelResource\` subclass out of the box to provide an interface to a Django model & the ORM. If you want a better explanation, or want to know more, go [read the docs](http://django-tastypie.readthedocs.org/en/latest/index.html).

Speaking of the documentation, there is an example \`Resource\` subclass in the docs' [cookbook](http://readthedocs.org/docs/django-tastypie/en/latest/cookbook.html#adding-search-functionality), though that was more about adding search to an existing resource. We want to serve resources -- i.e. Solr documents -- exclusively from Lucene. Our resource is literally a document from the search engine, so we needed a class to model that behavior. (You can read more about how we use Solr [here](http://mattdeboard.net/2011/12/29/displacing-mysql-with-solr/).) To accomplish this, I put together [this](https://github.com/mattdeboard/mattdeboard.net/blob/master/2012/02/07/resources.py) \`SearchResource\` subclass which others may find useful.

If you use Haystack, you know that it goes to great lengths to emulate the API of Django's ORM to provide a familiar interface to the search index. In that vein, \`SearchResource\` emulates the \`ModelResource\` class.

One issue we have in-house is that there are in some cases discrepancies between the semantics we want to expose as part of our API and the fields we're going to be leveraging to look up resources. To address that, I created a map of querystring parameters to the actual fields in the search index in which their values would be sought:

\`\`\`python
class JobSearchResource(SearchResource):
    field_aliases = {
        "city": "city_exact__exact",
        "state": "state_exact__exact",
        "country": "country_exact__exact",
        "company": "company_exact__exact",
        "title": None,
        "date_new": None,
        "uid": None,
    }

    def __init__(self, **kwargs):
        super(JobSearchResource, self).__init__(**kwargs)
        self._meta.index_fields = self.field_aliases.keys()
\`\`\`

We use \`field_aliases.keys()\` to populate \`index_fields\`, so now we need to add in logic to look up those keys and replace them in the query logic with the fields we actually want to search against. In this case, we want to search against \`(country|state|city|company)_exact\`, which, if you're familiar with Lucene, are stored, unanalyzed fields. We use Haystack's \`__exact\` lookup which has the effect of turning the term query into a phrase by wrapping it in quotes, e.g. \`q=country_exact:"United States"\`. We don't want tokenized field lookup because we don't want to match, say, "United Kingdom" when we are looking for "United States" due to the match on "United." (There are a million ways to do this of course, but this is how we chose to do it.)

Now we need to override \`SearchResource.build_filters\`:

\`\`\`python
def build_filters(self, filters=None):
    terms = []

    if filters is None:
        filters = {}

    for param_alias, value in filters.items():

        if param_alias not in self._meta.index_fields:
            continue

        param = self.field_aliases.get(param_alias, param_alias)  # <---
        tokens = value.split(self._meta.lookup_sep)
        field_queries = []

        for token in tokens:

            if token:
                field_queries.append(self._meta.query_object((param, token)))

        terms.append(reduce(operator.or_, filter(lambda x: x, field_queries)))

    if terms:
        return reduce(operator.and_, filter(lambda x: x, terms))
    else:
        return terms
\`\`\`

Note the line with the commented \`<---\`: This is where the alias->index field translation takes place. If you find yourself with a need to alias search fields this may be a solution for you.

Finally, I made the decision to force some additional configuration overhead -- about 5 attributes on the metaclass -- in order to completely preserve the amazing extensibility of Haystack. I know that [in-house](http://directemployersfoundation.org) we subclass just about everything from Haystack, including the \`SearchQuerySet\`; I assume there are others out there doing the same, and more, so you are not forced to use Haystack's built-in \`SQ\` object to compose query trees if you've created your own. (If you have I'd be curious to see it.)

Let me know in the comments if you have any problems, spot bugs or think I'm an idiot.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date14)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-318335b9.js
  var index_318335b9_exports = {};
  __export(index_318335b9_exports, {
    default: () => _05
  });
  var date15, _05;
  var init_index_318335b9 = __esm({
    ".svelte-kit/output/server/chunks/index-318335b9.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date15 = "2012/10/05";
      _05 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Larry the Software Guy

Anil Dash published [a blog post](http://dashes.com/anil/2012/10/the-blue-collar-coder.html) today I think is a victim of a bad title: "The Blue Collar Coder." I normally skim over the "Is programming an art, craft or science?" discussions but there were a couple of very smart programmers discussing it on Twitter, and I joined in. During the conversation, I vacillated between agreeing with Anil's proposition and agreeing with [Alex Feinberg](https://twitter.com/strlen/status/254369312884805632).

I think the title is poor because programming will never be "blue collar." Anil knows that; he more or less admits it was basically caste-baiting in the first sentence of the final paragraph. Unfortunately, I think people reacted to the notion of a programmer being considered "blue collar" more than the _real_ points I think he was trying to make. The tl;dr of Anil's blog post seems to be:

1.  A CS degree is overkill for most job openings
2.  The "tech community" (??) should be focused on creating lots of jobs, not entrepreneurship
3.  Huge amounts of good for people & business can be done by creating a vocational training program for software development

I don't even want to touch (1) because people seem to have such ridiculously strong feelings one way or the other (and possession of a CS degree seems to be no indicator of which way those feelings will go). I don't have a CS degree, and I am enjoying my career. I recognize though that in a few years maybe I'll be bored of the nature of problems I'm working on and maybe getting that degree would have been a smart move after all. In other words, I don't have an opinion on this because I don't know what I don't know.

The second point is eyeroll-worthy, in my opinion, because I think the impression the "tech community" is hyper-focused on producing "the next Zuckerburg" is the result of Hacker News's own "reality distortion field" about startups. Hacker News is the modern equivalent of a sweaty, manic Steve Ballmer trying to pump up a room full of nerds, but instead of "Developers! Developers! Developers!", HN is chanting, "Startups! Startups! Startups!" But what're you gonna do? HN exists for a very specific reason: startup news. Point being that it's not good or bad that this reality distortion effect exists, but you have to seek other perspectives.

I agree with the third point. Full stop. My [SWAG](http://en.wikipedia.org/wiki/Scientific_Wild-Ass_Guess) (pretty light on the "S") is higher ed could serve more people with lower per-person costs, deliver employees to the job market with high skills, while maintaining/building a reputation as a high-quality institution by offering associates degree & certification programs in software development compared to the current BS/BA in CS.

This is where I think Anil's points get lost because of the title, illustrated by something Alex F. wrote:

> There will be demand for "non-programmers who code" for sure, but these positions will still require analytical thinking.

Maybe I'm misreading it, but the implication seems to be that "blue collar" implies work where analytical thinking is optional. There's no less analytical thinking in e.g. managing inventory, [building windmills](http://jacquesmattheij.com/how-to-build-a-windmill-ii), etc. My opinion, based on my military experience, is that there are many smart and savvy people out there with great analytical abilities, who couldn't get into or complete a CS degree. For these people an associates of applied science or 1-year certificate in software development would be FAR more accessible. Not only that, I'd wager the distribution of skill among graduates would look pretty close to that of most CS programs. What I'm saying is, in my short time doing this I've met some dumb/bad/lazy programmers with CS degrees from universities with respected programs.

Now obviously I don't do much manual labor anymore, but I'm proud of and enjoy the maintenance work I do. Most programming IMO boils down to the equivalent of "blue collar" work: refactoring code you or someone else wrote; patching over and smoothing out ugly spots; squashing bugs that have been around so long they're just considered part of the product. This isn't something I'm claiming I discovered by the way; this is a conclusion other people have drawn that is supported by my own anecdotes.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date15)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-c49b0178.js
  var index_c49b0178_exports = {};
  __export(index_c49b0178_exports, {
    default: () => _19
  });
  var date16, _19;
  var init_index_c49b0178 = __esm({
    ".svelte-kit/output/server/chunks/index-c49b0178.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date16 = "2012/10/19";
      _19 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# How to Run a Windows Service As A Linux Daemon

**Premise:** You've got a Windows service that you want to run on a Linux server

**Problem:** Your code is written using the .NET framework and some language that targets the CLR (C#, VB, Clojure-CLR, etc.)

**Solution:** [Mono](http://www.mono-project.com/Main_Page) is an open-source implementation of the .NET framework. By installing mono you gain access to a ton of useful stuff, but the relevant item here is the \`mono-service\` executable. (Installing mono is out of the scope of this blog post, but odds are pretty good mono is available from your distro's package management system.)

Once installed, you can run your compiled code like so:

    mono-service SomeExecutable.exe

By default, this creates a lockfile in \`/tmp\`. You can change this by using the \`-l:<lockfile>\` option. This is great, because now your service is running in the background! However, this is really flimsy; what if the process dies? What if the server needs rebooted? To solve this I'm using [supervisor](http://supervisord.org/).

## Get It Running In 4 Steps

Once you've got supervisor and mono installed, follow these steps:

1.  Create a supervisor file in \`/etc/supervisor/conf.d/\` with a descriptive name. We'll use \`mysvc.conf\`.
2.  Edit \`mysvc.conf\` so it looks similar to this^1,2^:

        [program:mysvc]
        command=mono-service MyWindowsService.exe --no-daemon
        directory=/path/to/executable
        user=someuser
        stdout_logfile=/home/someuser/mysvc/out.log
        redirect_stderr=true

3.  \`sudo service supervisor update\`. This will reload the config file you edited above.
4.  To confirm that your process started, run \`ps aux|grep mono\`. You should see it in the process list.

## Conclusion

Hope this helps. Supervisor has a ton of different options for configuring how a process runs, it's worth it to RTFM.

### Footnotes

**1.** The directory specified in your \`stdout_logfile\` parameter must already exist. If you try to start the \`mysvc\` process without creating it, supervisor will throw an error. Also, the \`user\` parameter should be set to a user that has permissions to write to the directory where you're keeping the \`stdout_logfile\`. Please consult the relevant [supervisor docs](http://supervisord.org/configuration.html#program-x-section-values) for more about users & processes.

**2**. You must use the \`--no-daemon\` flag to avoid creation of the lockfile which indirectly allows supervisor to capture/redirect stdout/stderr to a logfile.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date16)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/index-725f079b.js
  var index_725f079b_exports = {};
  __export(index_725f079b_exports, {
    default: () => _142
  });
  var date17, _142;
  var init_index_725f079b = __esm({
    ".svelte-kit/output/server/chunks/index-725f079b.js"() {
      init_app_e7e9dddf();
      init_SvelteMarkdown_475bb881();
      date17 = "2014/01/14";
      _142 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let source = `

# Using git & Python to autogen changelogs

## Background

As part of the communication process at work, devs maintain changelogs for some of our projects. What these consist of is a single \`RELEASE NOTES.md\` file in the project root, where each each line is a Markdown hyperlink to the pull request that introduced the change. These pull request links are then grouped together by date of release. The changelog looks like:

\`\`\`
    ## v1.7 2013/03/17
    * [#100](https://github.com/courseload/project/pull/100) - Finalized previously preliminary stuff
    * [#99](https://github.com/courseload/project/pull/99) - Did some preliminary stuff

    ## v1.6.4 2013/03/14
    * [#98](https://github.com/courseload/project/pull/98) - Made dongles brighter.
    * [#97](https://github.com/courseload/project/pull/97) - Improved widget performance by 3.8x
\`\`\`

At first, these were created by having devs also update \`RELEASE NOTES.md\` with each pull request. This distributed the workload, but it also made having multiple pull requests a big pain in the ass since the same file, usually the same line in the same file, was being modified by multiple pull requests. So we stopped that practice and instead moved to a hand-made \`RELEASE NOTES.md\` file, maintained by these de facto primaries. Obviously this kind of work is sub-optimal and ripe for automation. For months though, streamlining the process fell far down on the priority list until I just couldn't take it anymore.

## git log

When I am automating a repetitive task like this, my goal is to write as little code as possible. In thise case, that means massaging the output of [git log to get me as close to the desired final format of the changelog lines as possible. In other words, I only want to output merge commits. We can do that with:

\`\`\`sh
    git log --merges
\`\`\`

This is good, but it shows a lot of extra information I'd have to parse out. If you'll notice in my example above, the lines in \`RELEASE NOTES.md\` are formatted like \`[#<pull request number>](https://github.com/courseload/project/pull/<pull request number>) - <pull request description>\`. So we notice right away we need two things from \`git log\`:

1.  The commit message of the merge. Think of this as the subject line of an email. We want this because this has the number of the pull request.
2.  The pull request description, which works out to be, for the sake of this blog post, the equivalent of the first line of the body of the aforementioned email.

This git command gets us this info without a bunch of cruft:

\`\`\`sh
    git log --pretty=format:'%s%n%b' --merges
\`\`\`

But let's get really close now to the desired final output:

\`\`\`sh
    git log --pretty=format:'%s%n* [#{pr_num}](https://github.com/courseload/project/pull/{pr_num}) - %b)'
\`\`\`

Now, every merge commit appears as a two-line entry. The first is the merge commit message. The second is the pull request description. For bonus points ,the second line looks almost exactly like the changelog lines, except using Python string interpolation variables embedded in place of the PR number.

## Python

It's great that we have just the info we want, but I know we're also going to need to do two things:

1.  Parse out the pull request number from the [git log output, and
2.  Use the PR number to create the changelog entry

By running the above [git log command via [subprocess.check_output I can automate all this with [this script](https://gist.github.com/mattdeboard/68f7009e847e36e6c107):

\`\`\`python
#!/usr/bin/env python
"""This script generates release notes for each merged pull request from
git merge-commit messages.
Usage:
 \`python release.py <start_commit> <end_commit> [--output {file,stdout}]\`
For example, if you wanted to find the diff between version 1.0 and 1.2,
and write the output to the release notes file, you would type the
following:
 \`python release.py 1.0 1.2 -f CHANGELOG.md\`
"""
import os.path as op
import re
import subprocess
from collections import deque

PROJECT_URI = "https://github.com/foo/bar"


def commit_msgs(start_commit, end_commit):
    """Run the git command that outputs the merge commits (both subject
    and body) to stdout, and return the output.
    """
    fmt_string = "'%s%n* [#{pr_num}]" "(" + PROJECT_URI + "/{pr_num}) - %b'"
    return subprocess.check_output(
        [
            "git",
            "log",
            "--pretty=format:%s" % fmt_string,
            "--merges",
            "%s..%s" % (start_commit, end_commit),
        ]
    )


def release_note_lines(msgs):
    """Parse the lines from git output and format the strings using the
    pull request number.
    """
    ptn = r"Merge pull request #(d+).*
([^
]*)'$"
    pairs = re.findall(ptn, msgs, re.MULTILINE)
    return deque(body.format(pr_num=pr_num) for pr_num, body in pairs)


def release_header_line(version, release_date=None):
    release_date = release_date or datetime.date.today().strftime("%Y/%m/%d")
    return "## %s - %s" % (version, release_date)


def prepend(filename, lines, release_header=False):
    """Write \`lines\` (i.e. release notes) to file \`filename\`."""
    if op.exists(filename):
        with open(filename, "r+") as f:
            first_line = f.read()
            f.seek(0, 0)
            f.write("

".join([lines, first_line]))
    else:
        with open(filename, "w") as f:
            f.write(lines)
            f.write("
")


if __name__ == "__main__":
    import argparse
    import datetime

    parser = argparse.ArgumentParser()
    parser.add_argument("start_commit", metavar="START_COMMIT_OR_TAG")
    parser.add_argument("end_commit", metavar="END_COMMIT_OR_TAG")
    parser.add_argument("--filepath", "-f", help="Absolute path to output file.")
    parser.add_argument("--tag", "-t", metavar="NEW_TAG")
    parser.add_argument(
        "--date",
        "-d",
        metavar="RELEASE_DATE",
        help="Date of release for listed patch notes. Use yyyy/mm/dd format.",
    )
    args = parser.parse_args()
    start, end = args.start_commit, args.end_commit
    lines = release_note_lines(commit_msgs(start, end))

    if args.tag:
        lines.appendleft(release_header_line(args.tag, args.date))

    lines = "
".join(lines)

    if args.filepath:
        filename = op.abspath(args.filepath)
        prepend(filename, lines)
    else:
        print(lines)
\`\`\`

To view the output in stdout, at the command line type:

\`\`\`
$ ./release.py 1.7 HEAD
\`\`\`

Or, specify an output file:

\`\`\`
$ ./release 1.7 HEAD ./RELEASE NOTES.md
\`\`\`

## Conclusion

One additional step I took is to create a git alias for the git log command, but prettied up a bit, for when I want to just scan through the differences from one version to the next. If you'd like to do the same, add the following to the [alias] section of \`~/.gitconfig\`:

\`\`\`shell
    lm = log --pretty=format:'%Cred%h%Creset %C(bold blue)<%an>%Creset       -%C(yellow)%d%Creset %C(bold cyan)%s %Cgreen(%cr)%n%Creset%n - %b%n'       --abbrev-commit --date=relative --merges
\`\`\`

You can also achieve the same effect by entering the following at the CLI:

\`\`\`shell
    git config --global alias.lm "log --pretty=format:'%Cred%h%Creset       %C(bold blue)<%an>%Creset -%C(yellow)%d%Creset %C(bold cyan)%s       %Cgreen(%cr)%n%Creset%n - %b%n' --abbrev-commit --date=relative --merges"
\`\`\`

(The escaped newlines aren't necessary, only including them to keep the line length down on the page.)

Please leave a comment if you have questions or spot an error. Thanks.
`;
        return `<div>
  <p class="${"date"}">written on ${escape(date17)}</p>
  <div class="${"content"}">
    ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source }, {}, {})}</div></div>`;
      });
    }
  });

  // .svelte-kit/output/server/chunks/app-e7e9dddf.js
  function get_single_valued_header(headers, key2) {
    const value = headers[key2];
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return void 0;
      }
      if (value.length > 1) {
        throw new Error(`Multiple headers provided for ${key2}. Multiple may be provided only for set-cookie`);
      }
      return value[0];
    }
    return value;
  }
  function coalesce_to_error(err) {
    return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
  }
  function lowercase_keys(obj) {
    const clone = {};
    for (const key2 in obj) {
      clone[key2.toLowerCase()] = obj[key2];
    }
    return clone;
  }
  function error(body) {
    return {
      status: 500,
      body,
      headers: {}
    };
  }
  function is_string(s2) {
    return typeof s2 === "string" || s2 instanceof String;
  }
  function is_content_type_textual(content_type) {
    if (!content_type)
      return true;
    const [type] = content_type.split(";");
    return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
  }
  async function render_endpoint(request, route, match) {
    const mod = await route.load();
    const handler = mod[request.method.toLowerCase().replace("delete", "del")];
    if (!handler) {
      return;
    }
    const params = route.params(match);
    const response = await handler({ ...request, params });
    const preface = `Invalid response from route ${request.path}`;
    if (!response) {
      return;
    }
    if (typeof response !== "object") {
      return error(`${preface}: expected an object, got ${typeof response}`);
    }
    let { status = 200, body, headers = {} } = response;
    headers = lowercase_keys(headers);
    const type = get_single_valued_header(headers, "content-type");
    const is_type_textual = is_content_type_textual(type);
    if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
      return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
    }
    let normalized_body;
    if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
      headers = { ...headers, "content-type": "application/json; charset=utf-8" };
      normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
    } else {
      normalized_body = body;
    }
    return { status, body: normalized_body, headers };
  }
  function devalue(value) {
    var counts = new Map();
    function walk(thing) {
      if (typeof thing === "function") {
        throw new Error("Cannot stringify a function");
      }
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (!isPrimitive(thing)) {
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
          case "Date":
          case "RegExp":
            return;
          case "Array":
            thing.forEach(walk);
            break;
          case "Set":
          case "Map":
            Array.from(thing).forEach(walk);
            break;
          default:
            var proto = Object.getPrototypeOf(thing);
            if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
              throw new Error("Cannot stringify arbitrary non-POJOs");
            }
            if (Object.getOwnPropertySymbols(thing).length > 0) {
              throw new Error("Cannot stringify POJOs with symbolic keys");
            }
            Object.keys(thing).forEach(function(key2) {
              return walk(thing[key2]);
            });
        }
      }
    }
    walk(value);
    var names = new Map();
    Array.from(counts).filter(function(entry) {
      return entry[1] > 1;
    }).sort(function(a, b) {
      return b[1] - a[1];
    }).forEach(function(entry, i) {
      names.set(entry[0], getName(i));
    });
    function stringify(thing) {
      if (names.has(thing)) {
        return names.get(thing);
      }
      if (isPrimitive(thing)) {
        return stringifyPrimitive(thing);
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          return "Object(" + stringify(thing.valueOf()) + ")";
        case "RegExp":
          return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
        case "Date":
          return "new Date(" + thing.getTime() + ")";
        case "Array":
          var members = thing.map(function(v, i) {
            return i in thing ? stringify(v) : "";
          });
          var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
          return "[" + members.join(",") + tail + "]";
        case "Set":
        case "Map":
          return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
        default:
          var obj = "{" + Object.keys(thing).map(function(key2) {
            return safeKey(key2) + ":" + stringify(thing[key2]);
          }).join(",") + "}";
          var proto = Object.getPrototypeOf(thing);
          if (proto === null) {
            return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
          }
          return obj;
      }
    }
    var str = stringify(value);
    if (names.size) {
      var params_1 = [];
      var statements_1 = [];
      var values_1 = [];
      names.forEach(function(name, thing) {
        params_1.push(name);
        if (isPrimitive(thing)) {
          values_1.push(stringifyPrimitive(thing));
          return;
        }
        var type = getType(thing);
        switch (type) {
          case "Number":
          case "String":
          case "Boolean":
            values_1.push("Object(" + stringify(thing.valueOf()) + ")");
            break;
          case "RegExp":
            values_1.push(thing.toString());
            break;
          case "Date":
            values_1.push("new Date(" + thing.getTime() + ")");
            break;
          case "Array":
            values_1.push("Array(" + thing.length + ")");
            thing.forEach(function(v, i) {
              statements_1.push(name + "[" + i + "]=" + stringify(v));
            });
            break;
          case "Set":
            values_1.push("new Set");
            statements_1.push(name + "." + Array.from(thing).map(function(v) {
              return "add(" + stringify(v) + ")";
            }).join("."));
            break;
          case "Map":
            values_1.push("new Map");
            statements_1.push(name + "." + Array.from(thing).map(function(_a) {
              var k = _a[0], v = _a[1];
              return "set(" + stringify(k) + ", " + stringify(v) + ")";
            }).join("."));
            break;
          default:
            values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
            Object.keys(thing).forEach(function(key2) {
              statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
            });
        }
      });
      statements_1.push("return " + str);
      return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
    } else {
      return str;
    }
  }
  function getName(num) {
    var name = "";
    do {
      name = chars[num % chars.length] + name;
      num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
  }
  function isPrimitive(thing) {
    return Object(thing) !== thing;
  }
  function stringifyPrimitive(thing) {
    if (typeof thing === "string")
      return stringifyString(thing);
    if (thing === void 0)
      return "void 0";
    if (thing === 0 && 1 / thing < 0)
      return "-0";
    var str = String(thing);
    if (typeof thing === "number")
      return str.replace(/^(-)?0\./, "$1.");
    return str;
  }
  function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
  }
  function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
  }
  function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
  }
  function safeKey(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
  }
  function safeProp(key2) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
  }
  function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
      var char = str.charAt(i);
      var code = char.charCodeAt(0);
      if (char === '"') {
        result += '\\"';
      } else if (char in escaped$1) {
        result += escaped$1[char];
      } else if (code >= 55296 && code <= 57343) {
        var next = str.charCodeAt(i + 1);
        if (code <= 56319 && (next >= 56320 && next <= 57343)) {
          result += char + str[++i];
        } else {
          result += "\\u" + code.toString(16).toUpperCase();
        }
      } else {
        result += char;
      }
    }
    result += '"';
    return result;
  }
  function noop() {
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update(fn) {
      set(fn(value));
    }
    function subscribe(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update, subscribe };
  }
  function hash(value) {
    let hash2 = 5381;
    let i = value.length;
    if (typeof value === "string") {
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else {
      while (i)
        hash2 = hash2 * 33 ^ value[--i];
    }
    return (hash2 >>> 0).toString(36);
  }
  function escape_json_string_in_html(str) {
    return escape$12(str, escape_json_string_in_html_dict, (code) => `\\u${code.toString(16).toUpperCase()}`);
  }
  function escape_html_attr(str) {
    return '"' + escape$12(str, escape_html_attr_dict, (code) => `&#${code};`) + '"';
  }
  function escape$12(str, dict, unicode_encoder) {
    let result = "";
    for (let i = 0; i < str.length; i += 1) {
      const char = str.charAt(i);
      const code = char.charCodeAt(0);
      if (char in dict) {
        result += dict[char];
      } else if (code >= 55296 && code <= 57343) {
        const next = str.charCodeAt(i + 1);
        if (code <= 56319 && next >= 56320 && next <= 57343) {
          result += char + str[++i];
        } else {
          result += unicode_encoder(code);
        }
      } else {
        result += char;
      }
    }
    return result;
  }
  async function render_response({
    branch,
    options: options2,
    $session,
    page_config,
    status,
    error: error2,
    page
  }) {
    const css2 = new Set(options2.entry.css);
    const js = new Set(options2.entry.js);
    const styles = new Set();
    const serialized_data = [];
    let rendered;
    let is_private = false;
    let maxage;
    if (error2) {
      error2.stack = options2.get_stack(error2);
    }
    if (page_config.ssr) {
      branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
        if (node.css)
          node.css.forEach((url) => css2.add(url));
        if (node.js)
          node.js.forEach((url) => js.add(url));
        if (node.styles)
          node.styles.forEach((content) => styles.add(content));
        if (fetched && page_config.hydrate)
          serialized_data.push(...fetched);
        if (uses_credentials)
          is_private = true;
        maxage = loaded.maxage;
      });
      const session = writable($session);
      const props = {
        stores: {
          page: writable(null),
          navigating: writable(null),
          session
        },
        page,
        components: branch.map(({ node }) => node.module.default)
      };
      for (let i = 0; i < branch.length; i += 1) {
        props[`props_${i}`] = await branch[i].loaded.props;
      }
      let session_tracking_active = false;
      const unsubscribe = session.subscribe(() => {
        if (session_tracking_active)
          is_private = true;
      });
      session_tracking_active = true;
      try {
        rendered = options2.root.render(props);
      } finally {
        unsubscribe();
      }
    } else {
      rendered = { head: "", html: "", css: { code: "", map: null } };
    }
    const include_js = page_config.router || page_config.hydrate;
    if (!include_js)
      js.clear();
    const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
      ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
      ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
    ].join("\n		");
    let init2 = "";
    if (options2.amp) {
      init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
    } else if (include_js) {
      init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
        throw new Error(`Failed to serialize session data: ${error3.message}`);
      })},
				host: ${page && page.host ? s$1(page.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page && page.host ? s$1(page.host) : "location.host"}, // TODO this is redundant
						path: ${page && page.path ? try_serialize(page.path, (error3) => {
        throw new Error(`Failed to serialize page.path: ${error3.message}`);
      }) : null},
						query: new URLSearchParams(${page && page.query ? s$1(page.query.toString()) : ""}),
						params: ${page && page.params ? try_serialize(page.params, (error3) => {
        throw new Error(`Failed to serialize page.params: ${error3.message}`);
      }) : null}
					}
				}` : "null"}
			});
		<\/script>`;
    }
    if (options2.service_worker) {
      init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
    }
    const head = [
      rendered.head,
      styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
      links,
      init2
    ].join("\n\n		");
    const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
      let attributes = `type="application/json" data-type="svelte-data" data-url=${escape_html_attr(url)}`;
      if (body2)
        attributes += ` data-body="${hash(body2)}"`;
      return `<script ${attributes}>${json}<\/script>`;
    }).join("\n\n	")}
		`;
    const headers = {
      "content-type": "text/html"
    };
    if (maxage) {
      headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
    }
    if (!options2.floc) {
      headers["permissions-policy"] = "interest-cohort=()";
    }
    return {
      status,
      headers,
      body: options2.template({ head, body })
    };
  }
  function try_serialize(data, fail) {
    try {
      return devalue(data);
    } catch (err) {
      if (fail)
        fail(coalesce_to_error(err));
      return null;
    }
  }
  function serialize_error(error2) {
    if (!error2)
      return null;
    let serialized = try_serialize(error2);
    if (!serialized) {
      const { name, message, stack } = error2;
      serialized = try_serialize({ ...error2, name, message, stack });
    }
    if (!serialized) {
      serialized = "{}";
    }
    return serialized;
  }
  function normalize(loaded) {
    const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
    if (loaded.error || has_error_status) {
      const status = loaded.status;
      if (!loaded.error && has_error_status) {
        return {
          status: status || 500,
          error: new Error()
        };
      }
      const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
      if (!(error2 instanceof Error)) {
        return {
          status: 500,
          error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
        };
      }
      if (!status || status < 400 || status > 599) {
        console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
        return { status: 500, error: error2 };
      }
      return { status, error: error2 };
    }
    if (loaded.redirect) {
      if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
        };
      }
      if (typeof loaded.redirect !== "string") {
        return {
          status: 500,
          error: new Error('"redirect" property returned from load() must be a string')
        };
      }
    }
    if (loaded.context) {
      throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
    }
    return loaded;
  }
  async function load_node({
    request,
    options: options2,
    state,
    route,
    page,
    node,
    $session,
    stuff,
    prerender_enabled,
    is_leaf,
    is_error,
    status,
    error: error2
  }) {
    const { module } = node;
    let uses_credentials = false;
    const fetched = [];
    let set_cookie_headers = [];
    let loaded;
    const page_proxy = new Proxy(page, {
      get: (target, prop, receiver) => {
        if (prop === "query" && prerender_enabled) {
          throw new Error("Cannot access query on a page with prerendering enabled");
        }
        return Reflect.get(target, prop, receiver);
      }
    });
    if (module.load) {
      const load_input = {
        page: page_proxy,
        get session() {
          uses_credentials = true;
          return $session;
        },
        fetch: async (resource, opts = {}) => {
          let url;
          if (typeof resource === "string") {
            url = resource;
          } else {
            url = resource.url;
            opts = {
              method: resource.method,
              headers: resource.headers,
              body: resource.body,
              mode: resource.mode,
              credentials: resource.credentials,
              cache: resource.cache,
              redirect: resource.redirect,
              referrer: resource.referrer,
              integrity: resource.integrity,
              ...opts
            };
          }
          const resolved = resolve(request.path, url.split("?")[0]);
          let response;
          const prefix = options2.paths.assets || options2.paths.base;
          const filename = (resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved).slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d) => d.file === filename || d.file === filename_html);
          if (asset) {
            response = options2.read ? new Response(options2.read(asset.file), {
              headers: asset.type ? { "content-type": asset.type } : {}
            }) : await fetch(`http://${page.host}/${asset.file}`, opts);
          } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
            const relative = resolved;
            const headers = {
              ...opts.headers
            };
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            if (opts.body && typeof opts.body !== "string") {
              throw new Error("Request body must be a string");
            }
            const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: relative,
              rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(relative, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          } else {
            if (resolved.startsWith("//")) {
              throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
            }
            if (typeof request.host !== "undefined") {
              const { hostname: fetch_hostname } = new URL(url);
              const [server_hostname] = request.host.split(":");
              if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
                uses_credentials = true;
                opts.headers = {
                  ...opts.headers,
                  cookie: request.headers.cookie
                };
              }
            }
            const external_request = new Request(url, opts);
            response = await options2.hooks.externalFetch.call(null, external_request);
          }
          if (response) {
            const proxy = new Proxy(response, {
              get(response2, key2, _receiver) {
                async function text() {
                  const body = await response2.text();
                  const headers = {};
                  for (const [key22, value] of response2.headers) {
                    if (key22 === "set-cookie") {
                      set_cookie_headers = set_cookie_headers.concat(value);
                    } else if (key22 !== "etag") {
                      headers[key22] = value;
                    }
                  }
                  if (!opts.body || typeof opts.body === "string") {
                    fetched.push({
                      url,
                      body: opts.body,
                      json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":"${escape_json_string_in_html(body)}"}`
                    });
                  }
                  return body;
                }
                if (key2 === "text") {
                  return text;
                }
                if (key2 === "json") {
                  return async () => {
                    return JSON.parse(await text());
                  };
                }
                return Reflect.get(response2, key2, response2);
              }
            });
            return proxy;
          }
          return response || new Response("Not found", {
            status: 404
          });
        },
        stuff: { ...stuff }
      };
      if (is_error) {
        load_input.status = status;
        load_input.error = error2;
      }
      loaded = await module.load.call(null, load_input);
    } else {
      loaded = {};
    }
    if (!loaded && is_leaf && !is_error)
      return;
    if (!loaded) {
      throw new Error(`${node.entry} - load must return a value except for page fall through`);
    }
    return {
      node,
      loaded: normalize(loaded),
      stuff: loaded.stuff || stuff,
      fetched,
      set_cookie_headers,
      uses_credentials
    };
  }
  function resolve(base2, path) {
    const base_match = absolute.exec(base2);
    const path_match = absolute.exec(path);
    if (!base_match) {
      throw new Error(`bad base path: "${base2}"`);
    }
    const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
    const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
    baseparts.pop();
    for (let i = 0; i < pathparts.length; i += 1) {
      const part = pathparts[i];
      if (part === ".")
        continue;
      else if (part === "..")
        baseparts.pop();
      else
        baseparts.push(part);
    }
    const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
    return `${prefix}${baseparts.join("/")}`;
  }
  async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
    const default_layout = await options2.load_component(options2.manifest.layout);
    const default_error = await options2.load_component(options2.manifest.error);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params: {}
    };
    const loaded = await load_node({
      request,
      options: options2,
      state,
      route: null,
      page,
      node: default_layout,
      $session,
      stuff: {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: false
    });
    const branch = [
      loaded,
      await load_node({
        request,
        options: options2,
        state,
        route: null,
        page,
        node: default_error,
        $session,
        stuff: loaded ? loaded.stuff : {},
        prerender_enabled: is_prerender_enabled(options2, default_error, state),
        is_leaf: false,
        is_error: true,
        status,
        error: error2
      })
    ];
    try {
      return await render_response({
        options: options2,
        $session,
        page_config: {
          hydrate: options2.hydrate,
          router: options2.router,
          ssr: options2.ssr
        },
        status,
        error: error2,
        branch,
        page
      });
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return {
        status: 500,
        headers: {},
        body: error3.stack
      };
    }
  }
  function is_prerender_enabled(options2, node, state) {
    return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
  }
  async function respond$1(opts) {
    const { request, options: options2, state, $session, route } = opts;
    let nodes;
    try {
      nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return await respond_with_error({
        request,
        options: options2,
        state,
        $session,
        status: 500,
        error: error3
      });
    }
    const leaf = nodes[nodes.length - 1].module;
    let page_config = get_page_config(leaf, options2);
    if (!leaf.prerender && state.prerender && !state.prerender.all) {
      return {
        status: 204,
        headers: {}
      };
    }
    let branch = [];
    let status = 200;
    let error2;
    let set_cookie_headers = [];
    ssr:
      if (page_config.ssr) {
        let stuff = {};
        for (let i = 0; i < nodes.length; i += 1) {
          const node = nodes[i];
          let loaded;
          if (node) {
            try {
              loaded = await load_node({
                ...opts,
                node,
                stuff,
                prerender_enabled: is_prerender_enabled(options2, node, state),
                is_leaf: i === nodes.length - 1,
                is_error: false
              });
              if (!loaded)
                return;
              set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
              if (loaded.loaded.redirect) {
                return with_cookies({
                  status: loaded.loaded.status,
                  headers: {
                    location: encodeURI(loaded.loaded.redirect)
                  }
                }, set_cookie_headers);
              }
              if (loaded.loaded.error) {
                ({ status, error: error2 } = loaded.loaded);
              }
            } catch (err) {
              const e = coalesce_to_error(err);
              options2.handle_error(e, request);
              status = 500;
              error2 = e;
            }
            if (loaded && !error2) {
              branch.push(loaded);
            }
            if (error2) {
              while (i--) {
                if (route.b[i]) {
                  const error_node = await options2.load_component(route.b[i]);
                  let node_loaded;
                  let j = i;
                  while (!(node_loaded = branch[j])) {
                    j -= 1;
                  }
                  try {
                    const error_loaded = await load_node({
                      ...opts,
                      node: error_node,
                      stuff: node_loaded.stuff,
                      prerender_enabled: is_prerender_enabled(options2, error_node, state),
                      is_leaf: false,
                      is_error: true,
                      status,
                      error: error2
                    });
                    if (error_loaded.loaded.error) {
                      continue;
                    }
                    page_config = get_page_config(error_node.module, options2);
                    branch = branch.slice(0, j + 1).concat(error_loaded);
                    break ssr;
                  } catch (err) {
                    const e = coalesce_to_error(err);
                    options2.handle_error(e, request);
                    continue;
                  }
                }
              }
              return with_cookies(await respond_with_error({
                request,
                options: options2,
                state,
                $session,
                status,
                error: error2
              }), set_cookie_headers);
            }
          }
          if (loaded && loaded.loaded.stuff) {
            stuff = {
              ...stuff,
              ...loaded.loaded.stuff
            };
          }
        }
      }
    try {
      return with_cookies(await render_response({
        ...opts,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }), set_cookie_headers);
    } catch (err) {
      const error3 = coalesce_to_error(err);
      options2.handle_error(error3, request);
      return with_cookies(await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }), set_cookie_headers);
    }
  }
  function get_page_config(leaf, options2) {
    return {
      ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
      router: "router" in leaf ? !!leaf.router : options2.router,
      hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
    };
  }
  function with_cookies(response, set_cookie_headers) {
    if (set_cookie_headers.length) {
      response.headers["set-cookie"] = set_cookie_headers;
    }
    return response;
  }
  async function render_page(request, route, match, options2, state) {
    if (state.initiator === route) {
      return {
        status: 404,
        headers: {},
        body: `Not found: ${request.path}`
      };
    }
    const params = route.params(match);
    const page = {
      host: request.host,
      path: request.path,
      query: request.query,
      params
    };
    const $session = await options2.hooks.getSession(request);
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route,
      page
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  }
  function read_only_form_data() {
    const map = new Map();
    return {
      append(key2, value) {
        if (map.has(key2)) {
          (map.get(key2) || []).push(value);
        } else {
          map.set(key2, [value]);
        }
      },
      data: new ReadOnlyFormData(map)
    };
  }
  function parse_body(raw, headers) {
    if (!raw)
      return raw;
    const content_type = headers["content-type"];
    const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
    const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
    switch (type) {
      case "text/plain":
        return text();
      case "application/json":
        return JSON.parse(text());
      case "application/x-www-form-urlencoded":
        return get_urlencoded(text());
      case "multipart/form-data": {
        const boundary = directives.find((directive) => directive.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(text(), boundary.slice("boundary=".length));
      }
      default:
        return raw;
    }
  }
  function get_urlencoded(text) {
    const { data, append } = read_only_form_data();
    text.replace(/\+/g, " ").split("&").forEach((str) => {
      const [key2, value] = str.split("=");
      append(decodeURIComponent(key2), decodeURIComponent(value));
    });
    return data;
  }
  function get_multipart(text, boundary) {
    const parts = text.split(`--${boundary}`);
    if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
      throw new Error("Malformed form data");
    }
    const { data, append } = read_only_form_data();
    parts.slice(1, -1).forEach((part) => {
      const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
      if (!match) {
        throw new Error("Malformed form data");
      }
      const raw_headers = match[1];
      const body = match[2].trim();
      let key2;
      const headers = {};
      raw_headers.split("\r\n").forEach((str) => {
        const [raw_header, ...raw_directives] = str.split("; ");
        let [name, value] = raw_header.split(": ");
        name = name.toLowerCase();
        headers[name] = value;
        const directives = {};
        raw_directives.forEach((raw_directive) => {
          const [name2, value2] = raw_directive.split("=");
          directives[name2] = JSON.parse(value2);
        });
        if (name === "content-disposition") {
          if (value !== "form-data")
            throw new Error("Malformed form data");
          if (directives.filename) {
            throw new Error("File upload is not yet implemented");
          }
          if (directives.name) {
            key2 = directives.name;
          }
        }
      });
      if (!key2)
        throw new Error("Malformed form data");
      append(key2, body);
    });
    return data;
  }
  async function respond(incoming, options2, state = {}) {
    if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
      const has_trailing_slash = incoming.path.endsWith("/");
      if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
        const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
        const q = incoming.query.toString();
        return {
          status: 301,
          headers: {
            location: options2.paths.base + path + (q ? `?${q}` : "")
          }
        };
      }
    }
    const headers = lowercase_keys(incoming.headers);
    const request = {
      ...incoming,
      headers,
      body: parse_body(incoming.rawBody, headers),
      params: {},
      locals: {}
    };
    try {
      return await options2.hooks.handle({
        request,
        resolve: async (request2) => {
          if (state.prerender && state.prerender.fallback) {
            return await render_response({
              options: options2,
              $session: await options2.hooks.getSession(request2),
              page_config: { ssr: false, router: true, hydrate: true },
              status: 200,
              branch: []
            });
          }
          const decoded = decodeURI(request2.path);
          for (const route of options2.manifest.routes) {
            const match = route.pattern.exec(decoded);
            if (!match)
              continue;
            const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
            if (response) {
              if (response.status === 200) {
                const cache_control = get_single_valued_header(response.headers, "cache-control");
                if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                  const etag = `"${hash(response.body || "")}"`;
                  if (request2.headers["if-none-match"] === etag) {
                    return {
                      status: 304,
                      headers: {}
                    };
                  }
                  response.headers["etag"] = etag;
                }
              }
              return response;
            }
          }
          const $session = await options2.hooks.getSession(request2);
          return await respond_with_error({
            request: request2,
            options: options2,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${request2.path}`)
          });
        }
      });
    } catch (err) {
      const e = coalesce_to_error(err);
      options2.handle_error(e, request);
      return {
        status: 500,
        headers: {},
        body: options2.dev ? e.stack : e.message
      };
    }
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
      if (!keys.has(k) && k[0] !== "$")
        rest[k] = props[k];
    return rest;
  }
  function custom_event(type, detail, bubbles = false) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, false, detail);
    return e;
  }
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
      const callbacks = component.$$.callbacks[type];
      if (callbacks) {
        const event = custom_event(type, detail);
        callbacks.slice().forEach((fn) => {
          fn.call(component, event);
        });
      }
    };
  }
  function setContext(key2, context) {
    get_current_component().$$.context.set(key2, context);
  }
  function getContext(key2) {
    return get_current_component().$$.context.get(key2);
  }
  function escape(html) {
    return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
  }
  function each(items, fn) {
    let str = "";
    for (let i = 0; i < items.length; i += 1) {
      str += fn(items[i], i);
    }
    return str;
  }
  function validate_component(component, name) {
    if (!component || !component.$$render) {
      if (name === "svelte:component")
        name += " this={...}";
      throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
  }
  function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
      const parent_component = current_component;
      const $$ = {
        on_destroy,
        context: new Map(context || (parent_component ? parent_component.$$.context : [])),
        on_mount: [],
        before_update: [],
        after_update: [],
        callbacks: blank_object()
      };
      set_current_component({ $$ });
      const html = fn(result, props, bindings, slots);
      set_current_component(parent_component);
      return html;
    }
    return {
      render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
        on_destroy = [];
        const result = { title: "", head: "", css: new Set() };
        const html = $$render(result, props, {}, $$slots, context);
        run_all(on_destroy);
        return {
          html,
          css: {
            code: Array.from(result.css).map((css2) => css2.code).join("\n"),
            map: null
          },
          head: result.title + result.head
        };
      },
      $$render
    };
  }
  function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value)
      return "";
    return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
  }
  function afterUpdate() {
  }
  function set_paths(paths) {
    base = paths.base;
    assets = paths.assets || base;
  }
  function set_prerendering(value) {
  }
  function init(settings = default_settings) {
    set_paths(settings.paths);
    set_prerendering(settings.prerendering || false);
    const hooks = get_hooks(user_hooks);
    options = {
      amp: false,
      dev: false,
      entry: {
        file: assets + "/_app/start-48b23320.js",
        css: [assets + "/_app/assets/start-61d1577b.css"],
        js: [assets + "/_app/start-48b23320.js", assets + "/_app/chunks/vendor-feb08219.js"]
      },
      fetched: void 0,
      floc: false,
      get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
      get_stack: (error2) => String(error2),
      handle_error: (error2, request) => {
        hooks.handleError({ error: error2, request });
        error2.stack = options.get_stack(error2);
      },
      hooks,
      hydrate: true,
      initiator: void 0,
      load_component,
      manifest,
      paths: settings.paths,
      prerender: true,
      read: settings.read,
      root: Root,
      service_worker: null,
      router: true,
      ssr: true,
      target: "#svelte",
      template,
      trailing_slash: "never"
    };
  }
  async function load_component(file) {
    const { entry, css: css2, js, styles } = metadata_lookup[file];
    return {
      module: await module_lookup[file](),
      entry: assets + "/_app/" + entry,
      css: css2.map((dep) => assets + "/_app/" + dep),
      js: js.map((dep) => assets + "/_app/" + dep),
      styles
    };
  }
  function render(request, {
    prerender
  } = {}) {
    const host = request.headers["host"];
    return respond({ ...request, host }, options, { prerender });
  }
  var __accessCheck, __privateGet, __privateAdd, __privateSet, _map, chars, unsafeChars, reserved, escaped$1, objectProtoOwnPropertyNames, subscriber_queue, escape_json_string_in_html_dict, escape_html_attr_dict, s$1, s, absolute, ReadOnlyFormData, current_component, escaped, missing_component, on_destroy, css, Root, base, assets, user_hooks, template, options, default_settings, empty, manifest, get_hooks, module_lookup, metadata_lookup;
  var init_app_e7e9dddf = __esm({
    ".svelte-kit/output/server/chunks/app-e7e9dddf.js"() {
      __accessCheck = (obj, member, msg) => {
        if (!member.has(obj))
          throw TypeError("Cannot " + msg);
      };
      __privateGet = (obj, member, getter) => {
        __accessCheck(obj, member, "read from private field");
        return getter ? getter.call(obj) : member.get(obj);
      };
      __privateAdd = (obj, member, value) => {
        if (member.has(obj))
          throw TypeError("Cannot add the same private member more than once");
        member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
      };
      __privateSet = (obj, member, value, setter) => {
        __accessCheck(obj, member, "write to private field");
        setter ? setter.call(obj, value) : member.set(obj, value);
        return value;
      };
      chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
      unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
      reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
      escaped$1 = {
        "<": "\\u003C",
        ">": "\\u003E",
        "/": "\\u002F",
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
      Promise.resolve();
      subscriber_queue = [];
      escape_json_string_in_html_dict = {
        '"': '\\"',
        "<": "\\u003C",
        ">": "\\u003E",
        "/": "\\u002F",
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      escape_html_attr_dict = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
      };
      s$1 = JSON.stringify;
      s = JSON.stringify;
      absolute = /^([a-z]+:)?\/?\//;
      ReadOnlyFormData = class {
        constructor(map) {
          __privateAdd(this, _map, void 0);
          __privateSet(this, _map, map);
        }
        get(key2) {
          const value = __privateGet(this, _map).get(key2);
          return value && value[0];
        }
        getAll(key2) {
          return __privateGet(this, _map).get(key2);
        }
        has(key2) {
          return __privateGet(this, _map).has(key2);
        }
        *[Symbol.iterator]() {
          for (const [key2, value] of __privateGet(this, _map)) {
            for (let i = 0; i < value.length; i += 1) {
              yield [key2, value[i]];
            }
          }
        }
        *entries() {
          for (const [key2, value] of __privateGet(this, _map)) {
            for (let i = 0; i < value.length; i += 1) {
              yield [key2, value[i]];
            }
          }
        }
        *keys() {
          for (const [key2] of __privateGet(this, _map))
            yield key2;
        }
        *values() {
          for (const [, value] of __privateGet(this, _map)) {
            for (let i = 0; i < value.length; i += 1) {
              yield value[i];
            }
          }
        }
      };
      _map = new WeakMap();
      Promise.resolve();
      escaped = {
        '"': "&quot;",
        "'": "&#39;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
      };
      missing_component = {
        $$render: () => ""
      };
      css = {
        code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
        map: null
      };
      Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
        let { stores } = $$props;
        let { page } = $$props;
        let { components } = $$props;
        let { props_0 = null } = $$props;
        let { props_1 = null } = $$props;
        let { props_2 = null } = $$props;
        setContext("__svelte__", stores);
        afterUpdate(stores.page.notify);
        if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
          $$bindings.stores(stores);
        if ($$props.page === void 0 && $$bindings.page && page !== void 0)
          $$bindings.page(page);
        if ($$props.components === void 0 && $$bindings.components && components !== void 0)
          $$bindings.components(components);
        if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
          $$bindings.props_0(props_0);
        if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
          $$bindings.props_1(props_1);
        if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
          $$bindings.props_2(props_2);
        $$result.css.add(css);
        {
          stores.page.set(page);
        }
        return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
          default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
            default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
          })}` : ``}`
        })}

${``}`;
      });
      base = "";
      assets = "";
      user_hooks = /* @__PURE__ */ Object.freeze({
        __proto__: null,
        [Symbol.toStringTag]: "Module"
      });
      template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="/favicon.png" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    ' + head + '\n  </head>\n  <body>\n    <div id="svelte">' + body + "</div>\n  </body>\n</html>\n";
      options = null;
      default_settings = { paths: { "base": "", "assets": "" } };
      empty = () => ({});
      manifest = {
        assets: [],
        layout: "src/routes/__layout.svelte",
        error: ".svelte-kit/build/components/error.svelte",
        routes: [
          {
            type: "page",
            pattern: /^\/$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2010\/12\/27\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2010/12/27/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/01\/27\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/01/27/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/02\/14\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/02/14/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/04\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/04/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/06\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/06/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/08\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/08/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/09\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/09/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/12\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/12/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/05\/13\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/05/13/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/06\/17\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/06/17/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/07\/01\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/07/01/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/11\/23\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/11/23/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2011\/12\/29\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2011/12/29/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2012\/02\/07\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2012/02/07/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2012\/10\/05\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2012/10/05/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2012\/10\/19\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2012/10/19/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          },
          {
            type: "page",
            pattern: /^\/2014\/01\/14\/?$/,
            params: empty,
            a: ["src/routes/__layout.svelte", "src/routes/2014/01/14/index.svelte"],
            b: [".svelte-kit/build/components/error.svelte"]
          }
        ]
      };
      get_hooks = (hooks) => ({
        getSession: hooks.getSession || (() => ({})),
        handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
        handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: hooks.externalFetch || fetch
      });
      module_lookup = {
        "src/routes/__layout.svelte": () => Promise.resolve().then(() => (init_layout_1c0d4c41(), layout_1c0d4c41_exports)),
        ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(() => (init_error_3ce47af2(), error_3ce47af2_exports)),
        "src/routes/index.svelte": () => Promise.resolve().then(() => (init_index_5442bbd0(), index_5442bbd0_exports)),
        "src/routes/2010/12/27/index.svelte": () => Promise.resolve().then(() => (init_index_0001c964(), index_0001c964_exports)),
        "src/routes/2011/01/27/index.svelte": () => Promise.resolve().then(() => (init_index_cafa1bd0(), index_cafa1bd0_exports)),
        "src/routes/2011/02/14/index.svelte": () => Promise.resolve().then(() => (init_index_5260c83f(), index_5260c83f_exports)),
        "src/routes/2011/05/04/index.svelte": () => Promise.resolve().then(() => (init_index_cbe55ae5(), index_cbe55ae5_exports)),
        "src/routes/2011/05/06/index.svelte": () => Promise.resolve().then(() => (init_index_a4688c4c(), index_a4688c4c_exports)),
        "src/routes/2011/05/08/index.svelte": () => Promise.resolve().then(() => (init_index_bd256a4b(), index_bd256a4b_exports)),
        "src/routes/2011/05/09/index.svelte": () => Promise.resolve().then(() => (init_index_8e92a404(), index_8e92a404_exports)),
        "src/routes/2011/05/12/index.svelte": () => Promise.resolve().then(() => (init_index_22e5c481(), index_22e5c481_exports)),
        "src/routes/2011/05/13/index.svelte": () => Promise.resolve().then(() => (init_index_c38bd788(), index_c38bd788_exports)),
        "src/routes/2011/06/17/index.svelte": () => Promise.resolve().then(() => (init_index_91ab52fc(), index_91ab52fc_exports)),
        "src/routes/2011/07/01/index.svelte": () => Promise.resolve().then(() => (init_index_7d5d5c43(), index_7d5d5c43_exports)),
        "src/routes/2011/11/23/index.svelte": () => Promise.resolve().then(() => (init_index_7a369215(), index_7a369215_exports)),
        "src/routes/2011/12/29/index.svelte": () => Promise.resolve().then(() => (init_index_a1366740(), index_a1366740_exports)),
        "src/routes/2012/02/07/index.svelte": () => Promise.resolve().then(() => (init_index_0c1e49ca(), index_0c1e49ca_exports)),
        "src/routes/2012/10/05/index.svelte": () => Promise.resolve().then(() => (init_index_318335b9(), index_318335b9_exports)),
        "src/routes/2012/10/19/index.svelte": () => Promise.resolve().then(() => (init_index_c49b0178(), index_c49b0178_exports)),
        "src/routes/2014/01/14/index.svelte": () => Promise.resolve().then(() => (init_index_725f079b(), index_725f079b_exports))
      };
      metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-feb19916.js", "css": [], "js": ["pages/__layout.svelte-feb19916.js", "chunks/vendor-feb08219.js"], "styles": [] }, ".svelte-kit/build/components/error.svelte": { "entry": "error.svelte-9cc943df.js", "css": [], "js": ["error.svelte-9cc943df.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-fe723d86.js", "css": [], "js": ["pages/index.svelte-fe723d86.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2010/12/27/index.svelte": { "entry": "pages/2010/12/27/index.svelte-71cf4507.js", "css": [], "js": ["pages/2010/12/27/index.svelte-71cf4507.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/01/27/index.svelte": { "entry": "pages/2011/01/27/index.svelte-e4d8bd2b.js", "css": [], "js": ["pages/2011/01/27/index.svelte-e4d8bd2b.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/02/14/index.svelte": { "entry": "pages/2011/02/14/index.svelte-1ff2f290.js", "css": [], "js": ["pages/2011/02/14/index.svelte-1ff2f290.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/04/index.svelte": { "entry": "pages/2011/05/04/index.svelte-765e234a.js", "css": [], "js": ["pages/2011/05/04/index.svelte-765e234a.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/06/index.svelte": { "entry": "pages/2011/05/06/index.svelte-c022b1a5.js", "css": [], "js": ["pages/2011/05/06/index.svelte-c022b1a5.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/08/index.svelte": { "entry": "pages/2011/05/08/index.svelte-a7f2dced.js", "css": [], "js": ["pages/2011/05/08/index.svelte-a7f2dced.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/09/index.svelte": { "entry": "pages/2011/05/09/index.svelte-9b8fcb7f.js", "css": [], "js": ["pages/2011/05/09/index.svelte-9b8fcb7f.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/12/index.svelte": { "entry": "pages/2011/05/12/index.svelte-83e3a4d9.js", "css": [], "js": ["pages/2011/05/12/index.svelte-83e3a4d9.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/05/13/index.svelte": { "entry": "pages/2011/05/13/index.svelte-7d2c934c.js", "css": [], "js": ["pages/2011/05/13/index.svelte-7d2c934c.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/06/17/index.svelte": { "entry": "pages/2011/06/17/index.svelte-534a9d74.js", "css": [], "js": ["pages/2011/06/17/index.svelte-534a9d74.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/07/01/index.svelte": { "entry": "pages/2011/07/01/index.svelte-efda5319.js", "css": [], "js": ["pages/2011/07/01/index.svelte-efda5319.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/11/23/index.svelte": { "entry": "pages/2011/11/23/index.svelte-9a0ab73f.js", "css": [], "js": ["pages/2011/11/23/index.svelte-9a0ab73f.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2011/12/29/index.svelte": { "entry": "pages/2011/12/29/index.svelte-4fb9dab2.js", "css": [], "js": ["pages/2011/12/29/index.svelte-4fb9dab2.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2012/02/07/index.svelte": { "entry": "pages/2012/02/07/index.svelte-1d99d5d9.js", "css": [], "js": ["pages/2012/02/07/index.svelte-1d99d5d9.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2012/10/05/index.svelte": { "entry": "pages/2012/10/05/index.svelte-412f5be3.js", "css": [], "js": ["pages/2012/10/05/index.svelte-412f5be3.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2012/10/19/index.svelte": { "entry": "pages/2012/10/19/index.svelte-dda75825.js", "css": [], "js": ["pages/2012/10/19/index.svelte-dda75825.js", "chunks/vendor-feb08219.js"], "styles": [] }, "src/routes/2014/01/14/index.svelte": { "entry": "pages/2014/01/14/index.svelte-4cbc6b32.js", "css": [], "js": ["pages/2014/01/14/index.svelte-4cbc6b32.js", "chunks/vendor-feb08219.js"], "styles": [] } };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime() {
        this._types = Object.create(null);
        this._extensions = Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions.length; i++) {
            const ext = extensions[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/types/other.js
  var require_other = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/mime/index.js
  var require_mime = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime = require_Mime();
      module.exports = new Mime(require_standard(), require_other());
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js
  var require_types = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.KVError = void 0;
      var KVError = class extends Error {
        constructor(message, status = 500) {
          super(message);
          Object.setPrototypeOf(this, new.target.prototype);
          this.name = KVError.name;
          this.status = status;
        }
      };
      exports.KVError = KVError;
      var MethodNotAllowedError = class extends KVError {
        constructor(message = `Not a valid request method`, status = 405) {
          super(message, status);
        }
      };
      exports.MethodNotAllowedError = MethodNotAllowedError;
      var NotFoundError2 = class extends KVError {
        constructor(message = `Not Found`, status = 404) {
          super(message, status);
        }
      };
      exports.NotFoundError = NotFoundError2;
      var InternalError = class extends KVError {
        constructor(message = `Internal Error in KV Asset Handler`, status = 500) {
          super(message, status);
        }
      };
      exports.InternalError = InternalError;
    }
  });

  // .svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js
  var require_dist = __commonJS({
    ".svelte-kit/cloudflare-workers/node_modules/@cloudflare/kv-asset-handler/dist/index.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve2) {
            resolve2(value);
          });
        }
        return new (P || (P = Promise))(function(resolve2, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InternalError = exports.NotFoundError = exports.MethodNotAllowedError = exports.serveSinglePageApp = exports.mapRequestToAsset = exports.getAssetFromKV = void 0;
      var mime = require_mime();
      var types_1 = require_types();
      Object.defineProperty(exports, "MethodNotAllowedError", { enumerable: true, get: function() {
        return types_1.MethodNotAllowedError;
      } });
      Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
        return types_1.NotFoundError;
      } });
      Object.defineProperty(exports, "InternalError", { enumerable: true, get: function() {
        return types_1.InternalError;
      } });
      var defaultCacheControl = {
        browserTTL: null,
        edgeTTL: 2 * 60 * 60 * 24,
        bypassCache: false
      };
      var parseStringAsObject = (maybeString) => typeof maybeString === "string" ? JSON.parse(maybeString) : maybeString;
      var getAssetFromKVDefaultOptions = {
        ASSET_NAMESPACE: typeof __STATIC_CONTENT !== "undefined" ? __STATIC_CONTENT : void 0,
        ASSET_MANIFEST: typeof __STATIC_CONTENT_MANIFEST !== "undefined" ? parseStringAsObject(__STATIC_CONTENT_MANIFEST) : void 0,
        cacheControl: defaultCacheControl,
        defaultMimeType: "text/plain",
        defaultDocument: "index.html"
      };
      function assignOptions(options2) {
        return Object.assign({}, getAssetFromKVDefaultOptions, options2);
      }
      var mapRequestToAsset = (request, options2) => {
        options2 = assignOptions(options2);
        const parsedUrl = new URL(request.url);
        let pathname = parsedUrl.pathname;
        if (pathname.endsWith("/")) {
          pathname = pathname.concat(options2.defaultDocument);
        } else if (!mime.getType(pathname)) {
          pathname = pathname.concat("/" + options2.defaultDocument);
        }
        parsedUrl.pathname = pathname;
        return new Request(parsedUrl.toString(), request);
      };
      exports.mapRequestToAsset = mapRequestToAsset;
      function serveSinglePageApp(request, options2) {
        options2 = assignOptions(options2);
        request = mapRequestToAsset(request, options2);
        const parsedUrl = new URL(request.url);
        if (parsedUrl.pathname.endsWith(".html")) {
          return new Request(`${parsedUrl.origin}/${options2.defaultDocument}`, request);
        } else {
          return request;
        }
      }
      exports.serveSinglePageApp = serveSinglePageApp;
      var getAssetFromKV2 = (event, options2) => __awaiter(void 0, void 0, void 0, function* () {
        options2 = assignOptions(options2);
        const request = event.request;
        const ASSET_NAMESPACE = options2.ASSET_NAMESPACE;
        const ASSET_MANIFEST = parseStringAsObject(options2.ASSET_MANIFEST);
        if (typeof ASSET_NAMESPACE === "undefined") {
          throw new types_1.InternalError(`there is no KV namespace bound to the script`);
        }
        const rawPathKey = new URL(request.url).pathname.replace(/^\/+/, "");
        let pathIsEncoded = false;
        let requestKey;
        if (options2.mapRequestToAsset) {
          requestKey = options2.mapRequestToAsset(request);
        } else if (ASSET_MANIFEST[rawPathKey]) {
          requestKey = request;
        } else if (ASSET_MANIFEST[decodeURIComponent(rawPathKey)]) {
          pathIsEncoded = true;
          requestKey = request;
        } else {
          const mappedRequest = mapRequestToAsset(request);
          const mappedRawPathKey = new URL(mappedRequest.url).pathname.replace(/^\/+/, "");
          if (ASSET_MANIFEST[decodeURIComponent(mappedRawPathKey)]) {
            pathIsEncoded = true;
            requestKey = mappedRequest;
          } else {
            requestKey = mapRequestToAsset(request, options2);
          }
        }
        const SUPPORTED_METHODS = ["GET", "HEAD"];
        if (!SUPPORTED_METHODS.includes(requestKey.method)) {
          throw new types_1.MethodNotAllowedError(`${requestKey.method} is not a valid request method`);
        }
        const parsedUrl = new URL(requestKey.url);
        const pathname = pathIsEncoded ? decodeURIComponent(parsedUrl.pathname) : parsedUrl.pathname;
        let pathKey = pathname.replace(/^\/+/, "");
        const cache = caches.default;
        let mimeType = mime.getType(pathKey) || options2.defaultMimeType;
        if (mimeType.startsWith("text") || mimeType === "application/javascript") {
          mimeType += "; charset=utf-8";
        }
        let shouldEdgeCache = false;
        if (typeof ASSET_MANIFEST !== "undefined") {
          if (ASSET_MANIFEST[pathKey]) {
            pathKey = ASSET_MANIFEST[pathKey];
            shouldEdgeCache = true;
          }
        }
        let cacheKey = new Request(`${parsedUrl.origin}/${pathKey}`, request);
        const evalCacheOpts = (() => {
          switch (typeof options2.cacheControl) {
            case "function":
              return options2.cacheControl(request);
            case "object":
              return options2.cacheControl;
            default:
              return defaultCacheControl;
          }
        })();
        const formatETag = (entityId = pathKey, validatorType = "strong") => {
          if (!entityId) {
            return "";
          }
          switch (validatorType) {
            case "weak":
              if (!entityId.startsWith("W/")) {
                return `W/${entityId}`;
              }
              return entityId;
            case "strong":
              if (entityId.startsWith(`W/"`)) {
                entityId = entityId.replace("W/", "");
              }
              if (!entityId.endsWith(`"`)) {
                entityId = `"${entityId}"`;
              }
              return entityId;
            default:
              return "";
          }
        };
        options2.cacheControl = Object.assign({}, defaultCacheControl, evalCacheOpts);
        if (options2.cacheControl.bypassCache || options2.cacheControl.edgeTTL === null || request.method == "HEAD") {
          shouldEdgeCache = false;
        }
        const shouldSetBrowserCache = typeof options2.cacheControl.browserTTL === "number";
        let response = null;
        if (shouldEdgeCache) {
          response = yield cache.match(cacheKey);
        }
        if (response) {
          if (response.status > 300 && response.status < 400) {
            if (response.body && "cancel" in Object.getPrototypeOf(response.body)) {
              response.body.cancel();
              console.log("Body exists and environment supports readable streams. Body cancelled");
            } else {
              console.log("Environment doesnt support readable streams");
            }
            response = new Response(null, response);
          } else {
            let opts = {
              headers: new Headers(response.headers),
              status: 0,
              statusText: ""
            };
            opts.headers.set("cf-cache-status", "HIT");
            if (response.status) {
              opts.status = response.status;
              opts.statusText = response.statusText;
            } else if (opts.headers.has("Content-Range")) {
              opts.status = 206;
              opts.statusText = "Partial Content";
            } else {
              opts.status = 200;
              opts.statusText = "OK";
            }
            response = new Response(response.body, opts);
          }
        } else {
          const body = yield ASSET_NAMESPACE.get(pathKey, "arrayBuffer");
          if (body === null) {
            throw new types_1.NotFoundError(`could not find ${pathKey} in your content namespace`);
          }
          response = new Response(body);
          if (shouldEdgeCache) {
            response.headers.set("Accept-Ranges", "bytes");
            response.headers.set("Content-Length", body.length);
            if (!response.headers.has("etag")) {
              response.headers.set("etag", formatETag(pathKey, "strong"));
            }
            response.headers.set("Cache-Control", `max-age=${options2.cacheControl.edgeTTL}`);
            event.waitUntil(cache.put(cacheKey, response.clone()));
            response.headers.set("CF-Cache-Status", "MISS");
          }
        }
        response.headers.set("Content-Type", mimeType);
        if (response.status === 304) {
          let etag = formatETag(response.headers.get("etag"), "strong");
          let ifNoneMatch = cacheKey.headers.get("if-none-match");
          let proxyCacheStatus = response.headers.get("CF-Cache-Status");
          if (etag) {
            if (ifNoneMatch && ifNoneMatch === etag && proxyCacheStatus === "MISS") {
              response.headers.set("CF-Cache-Status", "EXPIRED");
            } else {
              response.headers.set("CF-Cache-Status", "REVALIDATED");
            }
            response.headers.set("etag", formatETag(etag, "weak"));
          }
        }
        if (shouldSetBrowserCache) {
          response.headers.set("Cache-Control", `max-age=${options2.cacheControl.browserTTL}`);
        } else {
          response.headers.delete("Cache-Control");
        }
        return response;
      });
      exports.getAssetFromKV = getAssetFromKV2;
    }
  });

  // .svelte-kit/output/server/app.js
  init_app_e7e9dddf();

  // .svelte-kit/cloudflare-workers/entry.js
  var import_kv_asset_handler = __toModule(require_dist());
  init();
  addEventListener("fetch", (event) => {
    event.respondWith(handle(event));
  });
  async function handle(event) {
    if (event.request.method == "GET") {
      try {
        return await (0, import_kv_asset_handler.getAssetFromKV)(event);
      } catch (e) {
        if (!(e instanceof import_kv_asset_handler.NotFoundError)) {
          return new Response("Error loading static asset:" + (e.message || e.toString()), {
            status: 500
          });
        }
      }
    }
    const request = event.request;
    const request_url = new URL(request.url);
    try {
      const rendered = await render({
        host: request_url.host,
        path: request_url.pathname,
        query: request_url.searchParams,
        rawBody: await read(request),
        headers: Object.fromEntries(request.headers),
        method: request.method
      });
      if (rendered) {
        return new Response(rendered.body, {
          status: rendered.status,
          headers: makeHeaders(rendered.headers)
        });
      }
    } catch (e) {
      return new Response("Error rendering route:" + (e.message || e.toString()), { status: 500 });
    }
    return new Response({
      status: 404,
      statusText: "Not Found"
    });
  }
  async function read(request) {
    return new Uint8Array(await request.arrayBuffer());
  }
  function makeHeaders(headers) {
    const result = new Headers();
    for (const header in headers) {
      const value = headers[header];
      if (typeof value === "string") {
        result.set(header, value);
        continue;
      }
      for (const sub of value) {
        result.append(header, sub);
      }
    }
    return result;
  }
})();
