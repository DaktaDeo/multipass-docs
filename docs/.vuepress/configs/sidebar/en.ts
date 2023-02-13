import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/introduction.md',
                // '/guide/getting-started.md',
            ],
        },
    ],
    '/reference/': [
        {
            text: 'Reference',
            children: [
                '/reference/terms-and-definitions.md',
            ],
        },
    ],
}
