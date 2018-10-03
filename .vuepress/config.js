module.exports = {
    base: '/package-docs/',
    title: 'Docs',
    description: 'Think Tomorrow documentation and guidelines',
    serviceworker: true,
    dest: './docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guidelines', link: '/src/guidelines/index' },
            { 
                text: 'Projects', 
                items: [
                    { text: 'Chief', link: '/src/chief/guide/installation' },
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
