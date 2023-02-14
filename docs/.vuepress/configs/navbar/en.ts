import type {NavbarConfig} from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {text: 'GoTo App', link: 'https://beta.multipass.rocks/app', target: '_blank'},
    {
        text: 'Guide',
        link: '/guide/',
    },
    {
        text: 'Apps',
        children: [
            {
                text: 'Contacts',
                link: '/apps/contacts/README.md',
            },
            {
                text: 'Humans',
                link: '/apps/humans/README.md',
            },
        ],
    },
    {
        text: 'Reference',
        children: [
            {
                text: 'Terms & Definitions',
                link: '/reference/terms-and-definitions.md',
            },
            {
                text: 'Models',
                link: '/reference/models.md',
            },
            {
                text: 'Team Settings',
                link: '/reference/settings.md',
            },
        ],
    },
]
