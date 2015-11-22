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
        'blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    // Предоставляем BEMDECL-файлы из бандлов (2)
    config.nodes('pages/*', function (nodeConfig) {
        var node = path.basename(nodeConfig.getPath());

        if (node === 'all') return;

        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // bemtree
            [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, { sourceSuffixes: ['bemhtml', 'bemhtml.js'] }],

            // html
            [techs.bemtreeToHtml]
        ]);

        nodeConfig.addTargets(['?.html']);
    });

    config.nodes('pages/all', function(nodeConfig) {
        var dir = path.dirname(nodeConfig.getPath()),
            bundles = fs.readdirSync(dir),
            bemdeclFiles = [];

        // Копируем BEMDECL-файлы в merged-бандл (3)
        bundles.forEach(function (bundle) {
            if (bundle === 'all') return;

            var node = path.join(dir, bundle),
                target = bundle + '.bemdecl.js';

            nodeConfig.addTech([enbBemTechs.provideBemdecl, {
                node: node,
                target: target
            }]);

            bemdeclFiles.push(target);
        });

        // Объединяем скопированные BEMDECL-файлы (4)
        nodeConfig.addTech([enbBemTechs.mergeBemdecl, { sources: bemdeclFiles }]);

        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.stylus, {
                target: '?.css',
                sourcemap: !isProd,
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', tech: 'cleancss', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.min.css', '?.min.js']);
    });
};
