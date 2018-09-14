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
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: true,
                children: prefix('guide', [
                    'installation',
                    'getting-started',
                    'upgrade-guide',
                    'local-dev',
                    'faq',
                ]),
            },
            {
                title: 'Menus',
                collapsable: true,
                children: prefix('menus', [
                  ['#creating-a-menu', 'Creating a menu'],
                  ['#using-a-menu', 'Using a menu'],
                  ['#creating-menu-items', 'Creating menu items'],
                ]),
            },
            {
                title: 'Pages',
                collapsable: true,
                children: prefix('pages', [
                    ['#work-with-pages', 'Work with pages'],
                    ['#adding-a-new-pages', 'Adding a new page'],
                ]),
            },
            {
                title: 'Modules',
                collapsable: true,
                children: prefix('modules', [
                    ['#creating-modules', 'Creating modules'],
                    ['#customizing-modules', 'Customizating modules'],
                    ['#using-modules', 'Using modules'],
                ]),
            },
            {
                title: 'Pagesets',
                collapsable: true,
                children: prefix('pagesets', [
                    ['#creating-pagesets', 'Creating pagesets'],
                    ['#customizing-pagesets', 'Customizating pagesets'],
                    ['#using-pagesets', 'Using pagesets'],
                ]),
            },
        ]
    }
}

function prefix(prefix, children) {
    return children.map(function(child){
        if(child.constructor == Array){
            return [ `${prefix}/${child[0]}`,  child[1]];
        }else{
            return `${prefix}/${child}`;
        }
    });
  }