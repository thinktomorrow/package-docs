module.exports = {
    base: '/package-docs/',
    title: 'Chief',
    description: 'standardized project development and site control',
    serviceworker: true,
    dest: './docs',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
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
            '/src/assetlibrary/': require('./assetlibrary-nav.js')
        }
    }
}
