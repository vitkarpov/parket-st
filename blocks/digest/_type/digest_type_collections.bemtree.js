block('digest').mod('type', 'collections').content()(function() {
    var items = [
        {
            caption: 'Кантри коллекция',
            price: 3330
        },
        {
            caption: 'Вековые традиции',
            price: 4200
        },
        {
            caption: 'Радиальная коллекция',
            price: 5935
        },
        {
            caption: 'Авторская коллекция из ясеня с очень длинным названием, которое слом...',
            title: 'Авторская коллекция из ясеня с очень длинным названием, которое сломает всю верстку',
            price: 3330
        },
        {
            caption: 'Классическая коллекция из дуба',
            price: 3330
        }
    ];

    return [
        {
            elem: 'caption',
            content: 'Коллекции'
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
                    price: item.price,
                    title: item.title || item.caption
                }
            })
        }
    ]
})
