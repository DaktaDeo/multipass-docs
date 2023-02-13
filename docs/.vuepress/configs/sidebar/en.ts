import type {SidebarConfig} from '@vuepress/theme-default'

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
    '/apps/contacts/': [
        {
            text: 'Contacts',
            children: [
                '/apps/contacts/README.md',
                '/apps/contacts/models.md',
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
