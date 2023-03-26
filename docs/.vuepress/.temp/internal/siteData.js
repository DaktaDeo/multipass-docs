export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"home\",\"href\":\"https://docs.multipass.rocks\"}],[\"link\",{\"rel\":\"app\",\"href\":\"https://beta.multipass.rocks/app\"}],[\"link\",{\"rel\":\"apple-touch-icon\",\"sizes\":\"180x180\",\"href\":\"https://beta.multipass.rocks/apple-touch-icon.png\"}],[\"link\",{\"rel\":\"icon\",\"sizes\":\"16x16\",\"type\":\"image/png\",\"href\":\"https://beta.multipass.rocks/favicon-16x16.png\"}],[\"link\",{\"rel\":\"icon\",\"sizes\":\"32x32\",\"type\":\"image/png\",\"href\":\"https://beta.multipass.rocks/favicon-32x32.png\"}],[\"link\",{\"rel\":\"mask-icon\",\"href\":\"https://beta.multipass.rocks/safari-pinned-tab.svg\"}],[\"link\",{\"rel\":\"shortcut icon\",\"href\":\"https://beta.multipass.rocks/favicon.ico\"}],[\"meta\",{\"name\":\"msapplication-TileColor\",\"content\":\"#A01829\"}],[\"meta\",{\"name\":\"msapplication-TileImage\",\"content\":\"https://beta.multipass.rocks/mstile-144x144.png\"}],[\"meta\",{\"name\":\"theme-color\",\"content\":\"#A01829\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://cdn.multipass.rocks/multipass/card.png\"}],[\"meta\",{\"property\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"property\":\"twitter:image\",\"content\":\"https://cdn.multipass.rocks/multipass/card.png\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Multipass\",\"description\":\"\"},\"/zh/\":{\"lang\":\"nl-BE\",\"title\":\"Multipass\",\"description\":\"\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
