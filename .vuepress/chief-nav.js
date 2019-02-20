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

            /**
             * Inhoudstafel idee:
             * - First steps
             *      - What is Chief
             *      - installation
             *      - upgrading
             *      - Contributing
             * - Model management
             *      - Models and Managers
             *      - Fields
             *
             * - Pages & Modules
             *      - What is a page?
             *      - Your first page setup
             *      - Adding some content
             *      - Adding a module
             *      -
             * - Advanced Model management
             *      - Localization
             *      - Tweaking the admin form
             *      - custom routes (e.g. publish / archive)
             * - Advanced Page management
             *      - Using query sets on a page
             *      - Using a snippet on a page
             *
             * - Site Management
             *      - static text
             *      -
             * - Advanced Site management
             *      - audit log
             * - Users
             *      - Invite an user
             *      - Blocking an user
             *      - Roles & Permissions
             *      -
             */
        ]),
    },
    {
        title: 'Model Management',
        collapsable: true,
        children: utils.prefix('basics', [
            'basics',
            'fields',
            'your-first-manager'
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