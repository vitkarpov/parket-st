({
    shouldDeps: [
        'header',
        'nav-main',
        'form-search',
        {
            block: 'main-content',
            mods: (function() {
                var mods = {};

                ([
                    "home",
                    "catalog-all",
                    "catalog",
                    "about",
                    "order-done",
                    "cart",
                    "cart-empty",
                    "contacts",
                    "delivery",
                    "search",
                    "order",
                    "discounts",
                    "card",
                    "faq",
                    "certs",
                    "catalog-collections",
                    "collections",
                    "brand"
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
