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
        'blocks'
    ];

var fs = require('fs');
var path = require('path');
var pathToDist = path.resolve('dist');

var PAGES = [
    'index',
    'catalog-all',
    'catalog'
];

fs.existsSync(pathToDist) || fs.mkdirSync(pathToDist);

PAGES.forEach(function(page) {
    var bemdecl = path.join(pathToDist, page + '.bemdecl.js');
    var rootDecl = 'exports.blocks = [{name: "root"}];';

    fs.existsSync(bemdecl) || fs.writeFileSync(bemdecl, rootDecl);
});

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('dist', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
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
                    sourceSuffixes: ['bemtree.js'],
                    target: page + '.bemtree.tmp.js',
                    filesTarget: page + '.tmp.files'
                }],

                // bemhtml
                [techs.bemhtml, {
                    sourceSuffixes: ['bemhtml.js'],
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
    });

    // config.nodes('pages/all', function(nodeConfig) {
    //     var dir = path.dirname(nodeConfig.getPath()),
    //         bundles = fs.readdirSync(dir),
    //         bemdeclFiles = [];

    //     // Копируем BEMDECL-файлы в merged-бандл (3)
    //     bundles.forEach(function (bundle) {
    //         if (bundle === 'all') return;

    //         var node = path.join(dir, bundle),
    //             target = bundle + '.bemdecl.js';

    //         nodeConfig.addTech([enbBemTechs.provideBemdecl, {
    //             node: node,
    //             target: target
    //         }]);

    //         bemdeclFiles.push(target);
    //     });

    //     // Объединяем скопированные BEMDECL-файлы (4)
    //     nodeConfig.addTech([enbBemTechs.mergeBemdecl, { sources: bemdeclFiles }]);

    //     nodeConfig.addTechs([
    //         // essential
    //         [enbBemTechs.levels, { levels: levels }],
    //         [enbBemTechs.deps],
    //         [enbBemTechs.files],

    //         // css
    //         [techs.stylus, {
    //             target: '?.css',
    //             sourcemap: !isProd,
    //             autoprefixer: {
    //                 browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
    //             }
    //         }],

    //         // js
    //         [techs.browserJs, { includeYM: true }],
    //         [techs.fileMerge, {
    //             target: '?.js',
    //             sources: ['?.browser.js']
    //         }],

    //         // borschik
    //         [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
    //         [techs.borschik, { source: '?.css', target: '?.min.css', tech: 'cleancss', minify: isProd }]
    //     ]);

    //     nodeConfig.addTargets(['?.min.css', '?.min.js']);
    // });
};
