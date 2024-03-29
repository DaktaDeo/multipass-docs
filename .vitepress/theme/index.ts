import './styles/index.css'
import './styles/tailwind.postcss'

import { h, App } from 'vue'
import { VPTheme } from '@daktadeo/theme'
// import PreferenceSwitch from './components/PreferenceSwitch.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
// import SponsorsAside from './components/SponsorsAside.vue'
// import Banner from './components/Banner.vue'
import Blog from './components/Blog.vue'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      // 'sidebar-top': () => h(PreferenceSwitch),
      // 'aside-mid': () => h(SponsorsAside)
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.component('Blog', Blog)
  }
})
