block('cart').content()(function() {
    return ([
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            price: '2 245',
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 15,
            list: [
                '15',
                '34,02',
                '2 760'
            ]
        },
        {
            caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
            price: '3 000',
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 8,
            list: [
                '10',
                '34,02',
                '2 760'
            ]
        },
        {
            caption: 'Массивная доска Green Line Дуб Венеция',
            price: '2 760',
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 11,
            list: [
                '10',
                '34,02',
                '2 760'
            ]
        }
    ])
    .map(function(item) {
        var price = item.price.replace(' ', '').valueOf();
        var count = item.count;
        var square = item.list[1].replace(',', '.').valueOf();

        return {
            block: 'cart-row',
            content: [
                {
                    block: 'cart-item',
                    mods: {
                        size: 'big'
                    },
                    caption: item.caption,
                    price: item.price,
                    src: item.src,
                    list: item.list
                },
                {
                    block: 'counter',
                    js: {
                        unit: square
                    },
                    unit: {
                        block: 'm2'
                    },
                    name: 'counts[]',
                    value: count
                },
                {
                    block: 'price',
                    js: {
                        unit: price
                    },
                    name: 'prices[]',
                    value: price * count
                }
            ]
        }
    })
})
