block('cart-list').content()(function() {
    return ([
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            price: '80 661',
            src: '../all/dummy/cart-preview-1.jpg',
            list: [
                '15',
                '34,02',
                '2 760'
            ]
        },
        {
            caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
            price: '54 432',
            src: '../all/dummy/cart-preview-2.jpg',
            list: [
                '8',
                '18,14',
                '3 000'
            ]
        },
        {
            caption: 'Массивная доска Green Line Дуб Венеция',
            price: '68 856',
            src: '../all/dummy/cart-preview-3.jpg',
            list: [
                '11',
                '24,95',
                '2 760'
            ]
        }
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: [
                {
                    elem: 'preview',
                    content: {
                        tag: 'img',
                        attrs: {src: item.src}
                    }
                },
                {
                    elem: 'caption',
                    content: item.caption
                },
                {
                    elem: 'price',
                    content: [
                        item.price,
                        ' ',
                        { block: 'rub' }
                    ]
                },
                {
                    block: 'props',
                    mix: {
                        block: 'cart-list', elem: 'props'
                    },
                    content: item.list.map(function(item, i) {
                        var unit;

                        if (i === 0) {
                            unit = 'упаковок';
                        } else if (i === 1) {
                            unit = {block: 'm2'};
                        } else if (i === 2) {
                            unit = [
                                {block: 'rub'},
                                '/',
                                {block: 'm2'}
                            ];
                        }

                        return {
                            elem: 'item',
                            content: [item, ' ', unit]
                        };
                    })
                }
            ]
        }
    })
})
