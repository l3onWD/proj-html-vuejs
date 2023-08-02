export default [
    {
        url: '#',
        text: 'Home',
        isActive: true
    },
    {
        url: '#',
        text: 'Shop',
        isActive: false
    },
    {
        url: '#',
        text: 'Blog',
        isActive: false,
        submenu: [
            {
                url: '#',
                text: 'Sub 01'
            },
            {
                url: '#',
                text: 'Sub 02'
            },
            {
                url: '#',
                text: 'Sub 03'
            }
        ],
        submenuType: 'left'
    },
    {
        url: '#',
        text: 'Media',
        isActive: false
    },
    {
        url: '#',
        text: 'ShortCode',
        isActive: false
    },
    {
        url: '#',
        text: 'Features',
        isActive: false,
        submenu: [
            {
                url: '#',
                text: 'Sub 01'
            },
            {
                url: '#',
                text: 'Sub 02'
            },
            {
                url: '#',
                text: 'Sub 03'
            }
        ],
        submenuType: 'right'
    }
]