block('aside').mod('delivery', true).content()(function() {
    return ([
        ['Доставка и оплата', 'delivery.html'],
        ['Сертификаты', 'certs.html'],
        ['О паркете', '#']
    ])
    .map(function(item, n) {
        return {
            block: 'aside-menu-item',
            mods: {
                active: n === 0
            },
            url: item[1],
            js: false,
            content: item[0]
        }
    });
});
