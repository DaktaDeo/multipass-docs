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
        ],
    },
    {
        text: 'Reference',
        link: '/reference/'
    },
]
