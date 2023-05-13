# sveltekit-mittwald-spaceserver-demo

The official SvelteKit demo application, ready to be deployed via rsync/SSH to [mittwald SpaceServer](https://www.mittwald.de/space-server).

- https://kit.svelte.dev/
- https://kit.svelte.dev/docs/adapter-node
- Deployment via rsync/SSH to https://www.mittwald.de/space-server

Status: 🚧 Work in progress / Broken 🚧 

- [ ] Currently rsync runs into timeouts because the many files of `node_modules`? See TODOs below for optimizing this, `adapter-node` needs these files. Alternative would be to use `git pull` on the server and run `npm i && npm run build` there. This is entirely a GitHub challenge, NOT a problem of Mittwald SpaceServer.

## Setup

1. Fork this repository
2. Edit SSH host and path in `.github/workflows/rsync-deploy.yaml`
3. Add `SSH_USER` and `SSH_KEY` (private) as Action Secret in settings

## How was this created?

```bash
# https://kit.svelte.dev/
npm create svelte@latest .    
# Selected: SvelteKit demo app, JSDoc, eslint + 

# https://kit.svelte.dev/docs/adapter-node
npm i -D @sveltejs/adapter-node
```

- Switched `adapter-auto` to `adapter-node` in `svelte.config.js`
- Modified `routes/+layout.svelte` as suggested in https://github.com/sveltejs/kit/issues/9089
- Added better detection for modified /newly deployed files ([commit](https://github.com/mandrasch/sveltekit-mittwald-spaceserver-demo/commit/637215e403704d473fa4ab0f7736303521f5bee5))

- Created `.github/workflows/rsync-deploy.yaml`

## TODOs


- [x] Open issue for "not found" error for _app/xxx/-files? https://github.com/sveltejs/kit/issues/9089, integrated here: https://github.com/mandrasch/sveltekit-mittwald-spaceserver-demo/commit/637215e403704d473fa4ab0f7736303521f5bee5
- [ ] Use optimized node_modules/-folder, as described here https://kit.svelte.dev/docs/adapter-node
- [ ] Is `ORIGIN=https://p-ni13ir.project.space node build` supported by Mittwald? https://kit.svelte.dev/docs/adapter-node#environment-variables-origin-protocol-header-and-host-header
- [ ] SSH restart command not working with multiple commands?