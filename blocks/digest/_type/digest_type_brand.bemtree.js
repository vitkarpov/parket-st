block('digest').mod('type', 'brand').content()(function() {
    var items = [
        {
            caption: 'Ламинат',
            price: 4200
        },
        {
            caption: 'Массивная доска',
            price: 3300
        },
        {
            caption: 'Паркетная доска',
            price: 5935
        },
        {
            caption: 'Двухслойная паркетная доска',
            price: 3330
        },
        {
            caption: 'Паркет',
            price: 1200
        }
    ];

    return [
        {
            elem: 'caption',
            content: 'Продукция производителя'
        },
        {
            elem: 'items',
            content: items.map(function(item, n) {
                return {
                    block: 'digest-item',
                    mods: {
                        type: n
                    },
                    caption: item.caption,
                    price: item.price
                }
            })
        }
    ]
})
