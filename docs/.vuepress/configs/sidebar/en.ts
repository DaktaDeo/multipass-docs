import type {SidebarConfig} from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/README.md',
                '/guide/getting-started.md',
            ],
        },
    ],
    '/reference': [
        {
            text: 'Reference',
            children: [
                '/reference.md',
            ],
        },
    ],
    '/apps/contacts/': [
        {
            text: 'Contacts',
            children: [
                '/apps/contacts/README.md',
                {
                    text: 'Models',
                    children: [
                        '/apps/contacts/models/contact.md',
                        '/apps/contacts/models/person.md',
                    ],
                },
            ],
        },
    ],
    '/apps/humans/': [
        {
            text: 'Humans',
            children: [
                '/apps/humans/README.md',
                {
                    text: 'Models',
                    children: [
                        '/apps/humans/models/human.md',
                    ],
                },
            ],
        },
    ],
    '/reference/': [
        {
            text: 'Reference',
            children: [
                '/reference/terms-and-definitions.md',
                '/reference/models.md',
                '/reference/settings.md',
            ],
        },
    ],
}
