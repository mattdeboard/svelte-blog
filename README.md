# What is this?

This is the source code for my static blog which is currently hosted at <https://svelte-blog.mattdeboard.workers.dev>.

## Notes for myself

### How does it work?

1. I write a blog post in markdown
2. I save it under `src/posts/<year>/<month>/<day>/<title>.md`
3. `npm run build`
4. `wrangler publish`

### Is `npm run build` idempotent?

Yes, and it should stay that way. This is mostly down to keeping [the build script](./scripts/build.sh) idempotent.