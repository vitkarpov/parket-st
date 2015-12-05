({
    shouldDeps: [
        'header',
        'nav-main',
        {
            block: 'main-content',
            mods: (function() {
                var mods = {};

                ([
                    "home",
                    "catalog-all",
                    "catalog",
                    "about",
                    "order-done"
                ])
                .forEach(function(page) {
                    mods[page] = true;
                });

                return mods;
            }())
        },
        'nav-footer',
        'footer',
        'font'
    ]
})
