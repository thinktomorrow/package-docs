var utils = require('./utilities.js');

module.exports = [
    {
        title: 'Getting Started',
        collapsable: true,
        children: utils.prefix('guide', [
            'installation',
            'docs'
        ]),
    },
]