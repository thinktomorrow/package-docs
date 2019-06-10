module.exports = {
    base: '/package-docs/',
    title: 'Think Tomorrow Documentation',
    description: 'Think Tomorrow documentation and guidelines',
    serviceWorker: true,
    dest: './docs',
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
                    { text: 'Chief', link: '/src/chief/initial_setup' },
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
            '/src/chief/': require('./chief-nav.js'),
            '/src/assetlibrary/': require('./assetlibrary-nav.js'),
            '/src/squanto/': require('./squanto-nav.js'),
            '/src/locale/': require('./locale-nav.js'),
            '/src/guidelines/': require('./guidelines-nav.js')
        }
    }
}
