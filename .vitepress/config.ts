import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@daktadeo/theme'
import baseConfig from '@daktadeo/theme/config'
import { headerPlugin } from './headerMdPlugin'
const isProd = process.env.NODE_ENV === 'production'

const nav: ThemeConfig['nav'] = [
  {
    text: 'Docs',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Quick Start', link: '/guide/quick-start' },
    ]
  },
  // {
  //   text: 'API',
  //   activeMatch: `^/api/`,
  //   link: '/api/'
  // },
  {
    text: 'Reference',
    activeMatch: `^/reference/`,
    items: [
      { text: 'Dictionary', link: '/reference/dictionary' },
      { text: 'Models', link: '/reference/models' },
      { text: 'Settings', link: '/reference/settings' },
    ],
  },
  {
    text: 'Ecosystem',
    activeMatch: `^/ecosystem/`,
    items: [
      // {
      //   text: 'Resources',
      //   items: [
      //     { text: 'Partners', link: '/partners/' },
      //     { text: 'Themes', link: '/ecosystem/themes' },
      //     // { text: 'Jobs', link: 'https://vuejobs.com/?ref=vuejs' },
      //     // { text: 'T-Shirt Shop', link: 'https://vue.threadless.com/' }
      //   ]
      // },
      // {
      //   text: 'Official Libraries',
      //   items: [
      //     { text: 'Vue Router', link: 'https://router.vuejs.org/' },
      //     { text: 'Pinia', link: 'https://pinia.vuejs.org/' },
      //     { text: 'Tooling Guide', link: '/guide/scaling-up/tooling.html' }
      //   ]
      // },
      // {
      //   text: 'Video Courses',
      //   items: [
      //     {
      //       text: 'Vue Mastery',
      //       link: 'https://www.vuemastery.com/courses/'
      //     },
      //     {
      //       text: 'Vue School',
      //       link: 'https://vueschool.io/?friend=vuejs&utm_source=Vuejs.org&utm_medium=Link&utm_content=Navbar%20Dropdown'
      //     }
      //   ]
      // },
      {
        text: 'Help',
        items: [
          // {
          //   text: 'Discord Chat',
          //   link: 'https://discord.com/invite/HBherRA'
          // },
          {
            text: 'GitHub Discussions',
            link: 'https://github.com/daktadeo/multipass/discussions'
          },
          // { text: 'DEV Community', link: 'https://dev.to/t/vue' }
        ]
      },
      // {
      //   text: 'News',
      //   items: [
      //     { text: 'Blog', link: 'https://blog.vuejs.org/' },
      //     { text: 'Twitter', link: 'https://twitter.com/vuejs' },
      //     { text: 'Events', link: 'https://events.vuejs.org/' },
      //     { text: 'Newsletters', link: '/ecosystem/newsletters' }
      //   ]
      // },
    ]
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Releases', link: '/about/releases' },
      // {
      //   text: 'Community Guide',
      //   link: '/about/community-guide'
      // },
      { text: 'Code of Conduct', link: '/about/coc' },
      { text: 'Open Source', link: '/about/opensource' },
    ]
  },
  // {
  //   text: 'Partners',
  //   link: '/partners/',
  //   activeMatch: `^/partners/`
  // },
  {
    text: 'Legal',
    items: [
      { text: 'Sales Terms (NL)', link: 'https://daktadeo.be/files/DaktaDeo%20Algemene%20leveringsvoorwaarden%20v2018-09.pdf' },
      { text: 'Privacy Policy', link: 'https://daktadeo.be/privacy' },
      { text: 'Terms (NL)', link: 'https://beta.multipass.rocks/terms-of-service' },
    ]
  }
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/guide/introduction' },
        {
          text: 'Quick Start',
          link: '/guide/quick-start'
        }
      ]
    },
    {
      text: 'Essentials',
      items: [
        // {
        //   text: 'Creating an Application',
        //   link: '/guide/essentials/application'
        // },
        // {
        //   text: 'App Basics',
        //   link: '/guide/essentials/component-basics'
        // }
      ]
    },
    {
      text: 'Apps In-Depth',
      items: [
        {
          text: 'Contacts',
          link: '/guide/app/contacts'
        },
        {
          text: 'Humans',
          link: '/guide/app/humans'
        },
        {
          text: 'Sales',
          link: '/guide/app/sales'
        },
      ]
    },
    // {
    //   text: 'Best Practices',
    //   items: [
    //     // {
    //     //   text: 'Production Deployment',
    //     //   link: '/guide/best-practices/production-deployment'
    //     // },
    //     // {
    //     //   text: 'Performance',
    //     //   link: '/guide/best-practices/performance'
    //     // },
    //     // {
    //     //   text: 'Accessibility',
    //     //   link: '/guide/best-practices/accessibility'
    //     // },
    //     // {
    //     //   text: 'Security',
    //     //   link: '/guide/best-practices/security'
    //     // }
    //   ]
    // },
    // {
    //   text: 'Extra Topics',
    //   items: [
    //   ]
    // }
  ],
}

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'Multipass',
  description: 'Multipass - \n' +
    'Multifunctional App | No installation | Small Organizations & Businesses | Contacts, Tasks, Projects, Products, ...',
  srcDir: 'src',

  head: [
    ['meta', { name: 'theme-color', content: '#A01829' }],
    ['meta', { name: 'twitter:site', content: '@daktadeo' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://cdn.multipass.rocks/multipass/card.png'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    // localeLinks: [
    //   {
    //     link: 'https://cn.vuejs.org',
    //     text: '简体中文',
    //     repo: 'https://github.com/vuejs-translations/docs-zh-cn'
    //   },
    //   {
    //     link: 'https://ja.vuejs.org',
    //     text: '日本語',
    //     repo: 'https://github.com/vuejs-translations/docs-ja'
    //   },
    //   {
    //     link: 'https://ua.vuejs.org',
    //     text: 'Українська',
    //     repo: 'https://github.com/vuejs-translations/docs-uk'
    //   },
    //   {
    //     link: '/translations/',
    //     text: 'Help Us Translate!',
    //     isTranslationsDesc: true
    //   }
    // ],

    // algolia: {
    //   indexName: 'vuejs',
    //   appId: 'ML0LEBN7FQ',
    //   apiKey: 'f49cbd92a74532cc55cfbffa5e5a7d01',
    //   searchParameters: {
    //     facetFilters: ['version:v3']
    //   }
    // },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/daktadeo/' },
      { icon: 'twitter', link: 'https://twitter.com/intent/follow?screen_name=DaktaDeo' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/daktadeo' }
    ],

    editLink: {
      repo: 'daktadeo/multipass-docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: `Copyright © 2014-${new Date().getFullYear()} DaktaDeo`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
