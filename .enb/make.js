var fs = require('fs');
var path = require('path');

var techs = {
        // essential
        fileProvider: require('enb/techs/file-provider'),
        fileMerge: require('enb/techs/file-merge'),

        // optimization
        borschik: require('enb-borschik/techs/borschik'),

        // css
        stylus: require('enb-stylus/techs/stylus'),

        // js
        browserJs: require('enb-js/techs/browser-js'),

        // bemtree
        bemtree: require('enb-bemxjst/techs/bemtree'),

        // bemhtml
        bemhtml: require('enb-bemxjst/techs/bemhtml'),
        bemtreeToHtml: require('./techs/bemtree-to-html')
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'pages.blocks'
    ];

var PROJECT = 'parket';
var PAGES = JSON.parse(fs.readFileSync('pages.json', 'utf8'));

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('dist', function (nodeConfig) {
        nodeConfig.addTechs([
            [enbBemTechs.levels, { levels: levels }]
        ]);

        PAGES.forEach(function(page) {
            nodeConfig.addTechs([
                [techs.fileProvider, { target: page + '.bemdecl.js' }],
                [enbBemTechs.deps, {
                    bemdeclFile: page + '.bemdecl.js',
                    target: page + '.deps.tmp.js'
                }],
                [enbBemTechs.files, {
                    depsFile: page + '.deps.tmp.js',
                    filesTarget: page + '.tmp.files',
                    dirsTarget: page + '.tmp.dirs'
                }],

                // bemtree
                [techs.bemtree, {
                    sourceSuffixes: ['bemtree', 'bemtree.js'],
                    target: page + '.bemtree.tmp.js',
                    filesTarget: page + '.tmp.files'
                }],

                // bemhtml
                [techs.bemhtml, {
                    sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                    target: page + '.bemhtml.tmp.js',
                    filesTarget: page + '.tmp.files'
                }],

                // html
                [techs.bemtreeToHtml, {
                    bemhtmlTarget: page + '.bemhtml.tmp.js',
                    bemtreeTarget: page + '.bemtree.tmp.js',
                    destTarget: page + '.html'
                }]
            ]);

            nodeConfig.addTargets([page + '.html']);
        });

        nodeConfig.addTechs([
            // css
            [techs.stylus, {
                filesTarget: PAGES[0] + '.tmp.files',
                target: PROJECT + '.css',
                sourcemap: !isProd,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            // js
            [techs.browserJs, {
                filesTarget: PAGES[0] + '.tmp.files',
                target: PROJECT + '.js',
                includeYM: true
            }],

            // borschik
            [techs.borschik, { source: PROJECT + '.js', target: PROJECT + '.min.js', minify: isProd }],
            [techs.borschik, { source: PROJECT + '.css', target: PROJECT + '.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets([PROJECT + '.min.css', PROJECT + '.min.js']);
    });
};
