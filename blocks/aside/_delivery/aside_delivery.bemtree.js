block('aside').mod('delivery', true).content()(function() {
    return ([
        'Доставка и оплата',
        'Сертификаты',
        'О паркете'
    ])
    .map(function(item, n) {
        return {
            block: 'aside-menu-item',
            mods: {
                active: n === 0
            },
            js: false,
            content: item
        }
    });
});
