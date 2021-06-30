module.exports = {
    base: '/package-docs/',
    title: 'Think Tomorrow Documentation',
    description: 'Think Tomorrow documentation and guidelines',
    serviceWorker: true,
    dest: './docs',
    ga: 'UA-19842383-16',
    themeConfig: {
        serviceWorker: {
            updatePopup: true,
        },
        displayAllHeaders: false,
        lastUpdated: 'Last Updated',
        editLinks: true,
        editLinkText: 'Edit and improve this page.',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guidelines', link: '/src/guidelines/index' },
            {
                text: 'Projects',
                items: [
                    { text: 'Chief 0.6', link: '/src/chief/latest/installation' },
                    { text: 'Chief 0.5', link: '/src/chief/0.5/installation' },
                    { text: 'Assetlibrary', link: '/src/assetlibrary/0.6/installation' },
                    { text: 'Squanto', link: '/src/squanto/' },
                    { text: 'Locale', link: '/src/locale/' },
                ]
            },
            { text: 'Chief Github', link: 'https://github.com/thinktomorrow/chief' },
            { text: 'Docs Github', link: 'https://github.com/thinktomorrow/package-docs' },
        ],
        sidebar:
        {
            '/src/chief/latest/': require('./chief-nav-latest.js'),
            '/src/chief/0.5/': require('./chief-nav-0.5.js'),
            '/src/assetlibrary/': require('./assetlibrary-nav.js'),
            '/src/squanto/': require('./squanto-nav.js'),
            '/src/locale/': require('./locale-nav.js'),
            '/src/guidelines/': require('./guidelines-nav.js')
        }
    }
}
