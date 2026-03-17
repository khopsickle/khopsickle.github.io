# khopsickle.github.io

A personal site built in Astro on GitHub Pages.

---

## Requirements

- **node** ≥ 24.14
- **npm** ≥ 11

> _Optional_: **ESLint** + **Prettier** extensions

---

## Local Development

1.  clone the repo

    ```bash
    git clone https://github.com/khopsickle/khopsickle.github.io.git
    cd khopsickle.github.io
    ```

1.  create `.env` file in the root dir with `GH_USERNAME`

    ```
    GH_USERNAME=khopsickle
    ```

1.  install dependencies

    ```bash
    npm ci
    ```

1.  create a `.gitignore`

    <details>

    <summary>sample .gitignore</summary>

    <code>

        # build output
        dist/

        # generated types
        .astro/

        # dependencies
        node_modules/

        # logs
        npm-debug.log*
        yarn-debug.log*
        yarn-error.log*
        pnpm-debug.log*

        # environment variables
        .env
        .env.production

        # macOS-specific files
        .DS_Store

        # jetbrains setting folder
        .idea/

        # output of Medium fetch script
        src/data/

        .vscode

    </code>
    </details>

1.  run article fetch script

    ```bash
    node scripts/fetch-medium.js
    ```

1.  run dev server
    ```bash
    npm run dev
    ```

---

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
.
├─ public/
│
├─ scripts/
│  └─ fetch-medium.js
│
├─ src/
│  ├─ data/                 # ignored
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ 404.astro
│  ├─ styles/
│  │  └─ global.css
│
├─ package.json
├─ tsconfig.json
├─ tailwind.config.cjs
│
├─ .env                     # ignored
└─ .github/workflows/
   └─ deploy.yml
```

<br />

| Directory     | Description                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `public/`     | Any static assets,<br>like images, can be placed in this directory.                                      |
| `scripts/`    | Node utilities<br>and other build-time code.                                                             |
| `src/data/`   | Generated or stored data files<br>that the site consumes at build time.                                  |
| `src/pages/`  | Astro looks for `.astro` or `.md` files here.<br>Each page is exposed as a route based on its file name. |
| `src/styles/` | Global styles and Tailwind CSS configuration/imports.                                                    |
