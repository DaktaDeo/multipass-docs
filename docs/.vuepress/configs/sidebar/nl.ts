import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarNl: SidebarConfig = {
    '/handleiding/': [
        {
            text: 'Handleiding',
            children: [
                '/handleiding/README.md',
                '/handleiding/aan-de-slag.md',
            ],
        },
    ],
}
