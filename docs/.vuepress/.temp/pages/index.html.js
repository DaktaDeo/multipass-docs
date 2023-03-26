export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/logo.svg\",\"heroText\":\"Documentation\",\"tagline\":null,\"actions\":[{\"text\":\"Get Started\",\"link\":\"/guide/getting-started.md\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"/guide/\",\"type\":\"secondary\"}],\"footer\":\"Copyright © 2011-present Veerle Deschepper @ DaktaDeo\"},\"headers\":[],\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
