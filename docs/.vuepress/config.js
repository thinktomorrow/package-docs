module.exports = {
    title: 'Chief',
    description: 'standardized project development and site control',
    serviceworker: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/installation' },
            { text: 'Github', link: 'https://github.com/thinktomorrow/chief' },
        ],
        sidebar: {
            '/guide/' : [
                'installation',
                'getting-started',
                'upgrade-guide',
                'contribution-guide',
            ]
        }
    }
}