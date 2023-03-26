# Multipass Documentation 

## Contributing

This site is built with [VitePress](https://github.com/vuejs/vitepress) and depends on our clone of [@vue/theme](https://github.com/vuejs/vue-theme), [@daktadeo/multipass](https://github.com/daktadeo/multipass). Site content is written in Markdown format located in `src`. For simple edits, you can directly edit the file on GitHub and generate a Pull Request.

Each locale has his own repo.

For local development, [pnpm](https://pnpm.io/) is preferred as package manager:

```bash
pnpm i
pnpm run dev
```

This project requires Node.js to be `v14.0.0` or higher, because we use new JavaScript features in our code, such as optional chaining.


## Working on the content

- See VitePress docs on supported [Markdown Extensions](https://vitepress.vuejs.org/guide/markdown) and the ability to [use Vue syntax inside markdown](https://vitepress.vuejs.org/guide/using-vue).

- See the [Writing Guide](https://github.com/vuejs/docs/blob/main/.github/contributing/writing-guide.md) for our rules and recommendations on writing and maintaining documentation content.

## Working on the theme

If changes need to made for the theme, check out the [instructions for developing the theme alongside the docs](https://github.com/vuejs/vue-theme#developing-with-real-content).


## Credits
Many thanks to the awesome [VuePress](https://vuepress.vuejs.org/) team for the inspiration and the [VuePress Theme](https://github.com/vuejs/vue-theme) for the base theme.
 
