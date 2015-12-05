block('cart').content()(function() {
    return [
        {
            elem: 'row',
            content: [
                {
                    block: 'cart-item',
                    mods: {
                        size: 'big'
                    },
                    caption: 'Массивная доска Green Line Дуб Милан',
                    price: '80 661',
                    src: 'http://lorempixel.com/100/100/?' + Math.random(),
                    list: [
                        '15',
                        '34,02',
                        '2 760'
                    ]
                },
                '15',
                '20'
            ]
        }
    ];
})
