block('cart-table').content()(function() {
    return ([
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            price: 2245,
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 15,
            square: 0.5,
            props: [
                'Ширина: 19,05&nbsp;мм, ',
                'Длина: 107,95&nbsp;мм, ',
                'Толщина: 18&nbsp;мм'
            ]
        },
        {
            caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
            price: 3000,
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 8,
            square: 0.8,
            props: [
                'Ширина: 19,05&nbsp;мм, ',
                'Длина: 107,95&nbsp;мм, ',
                'Толщина: 18&nbsp;мм'
            ]
        },
        {
            caption: 'Массивная доска Green Line Дуб Венеция',
            price: 2270,
            src: 'http://lorempixel.com/100/100/?' + Math.random(),
            count: 11,
            square: 0.75,
            props: [
                'Ширина: 19,05&nbsp;мм, ',
                'Длина: 107,95&nbsp;мм, ',
                'Толщина: 18&nbsp;мм'
            ]
        }
    ])
    .map(function(item) {
        var textPrice = (function() {
            var price = String(item.price);
            var first = price[0];
            var last = price.slice(1, price.length);

            return first + ' ' + last;
        }());

        return {
            block: 'cart-row',
            content: [
                {
                    block: 'cart-item',
                    mods: {
                        size: 'big'
                    },
                    mix: {
                        block: 'cart-row',
                        elem: 'item'
                    },
                    caption: item.caption,
                    price: textPrice,
                    src: item.src,
                    content: {
                        elem: 'props',
                        content: item.props
                    }
                },
                {
                    block: 'counter',
                    js: {
                        factor: item.square
                    },
                    unit: {
                        block: 'm2'
                    },
                    name: 'counts[]',
                    value: item.count
                },
                {
                    block: 'price',
                    js: {
                        price: item.price
                    },
                    name: 'prices[]',
                    value: item.price * item.count
                }
            ]
        }
    });
})
