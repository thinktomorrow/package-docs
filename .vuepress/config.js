module.exports = {
    base: '/package-docs/',
    title: 'Docs',
    description: 'Think Tomorrow documentation and guidelines',
    serviceWorker: {
        updatePopup: true,
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh" 
        }
    },
    dest: './docs',
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guidelines', link: '/src/guidelines/index' },
            { 
                text: 'Projects', 
                items: [
                    { text: 'Chief', link: '/src/chief/first_steps' },
                    { text: 'Assetlibrary', link: '/src/assetlibrary/guide/installation' },
                ]
            },
            { text: 'Github', link: 'https://github.com/thinktomorrow/chief' },
        ],
        sidebar:
        {
            '/src/chief/': require('./chief-nav.js'),
            '/src/assetlibrary/': require('./assetlibrary-nav.js'),
            '/src/guidelines/': require('./guidelines-nav.js')
        }
    }
}
