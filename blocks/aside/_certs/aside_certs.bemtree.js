block('aside').mod('certs', true).content()(function() {
    return ([
        ['Доставка и оплата', 'delivery.html'],
        ['Сертификаты', 'certs.html'],
        ['О паркете', '#']
    ])
    .map(function(item, n) {
        return {
            block: 'aside-menu-item',
            mods: {
                active: n === 1
            },
            url: item[1],
            js: false,
            content: item[0]
        }
    });
});
