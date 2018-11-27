var utils = require('./utilities.js');

module.exports = [
    {
        title: 'Getting Started',
        collapsable: true,
        children: utils.prefix('guide', [
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
        children: utils.prefix('menus', [
            ['#creating-a-menu', 'Creating a menu'],
            ['#using-a-menu', 'Using a menu'],
            ['#creating-menu-items', 'Creating menu items'],
        ]),
    },
    {
        title: 'Pages',
        collapsable: true,
        children: utils.prefix('pages', [
            ['#work-with-pages', 'Work with pages'],
            ['#adding-a-new-pages', 'Adding a new page'],
        ]),
    },
    {
        title: 'Modules',
        collapsable: true,
        children: utils.prefix('modules', [
            ['#creating-modules', 'Creating modules'],
            ['#customizing-modules', 'Customizating modules'],
            ['#using-modules', 'Using modules'],
        ]),
    },
    {
        title: 'Pagesets',
        collapsable: true,
        children: utils.prefix('pagesets', [
            ['#creating-pagesets', 'Creating pagesets'],
            ['#customizing-pagesets', 'Customizating pagesets'],
            ['#using-pagesets', 'Using pagesets'],
        ]),
    },
    {
        title: 'Fields',
        collapsable: true,
        children: utils.prefix('fields', [
            ['#fields', 'fields'],
        ]),
    },
]