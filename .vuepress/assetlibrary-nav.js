var utils = require('./utilities.js');

module.exports = [
    {
        title: 'Current',
        collapsable: true,
        children: utils.prefix('0.6', [
            'installation',
            'docs'
        ]),
    },
    {
        title: '0.5',
        collapsable: true,
        children: utils.prefix('0.5', [
            'installation',
            'docs'
        ]),
    },
]
