block('popup-cart-list').content()(function() {
    var extend = this.extend;

    return ([
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            price: '80 661',
            src: 'dummy/cart-preview-1.jpg',
            list: [
                '15',
                '34,02',
                '2 760'
            ]
        },
        {
            caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
            price: '54 432',
            src: 'dummy/cart-preview-2.jpg',
            list: [
                '8',
                '18,14',
                '3 000'
            ]
        },
        {
            caption: 'Массивная доска Green Line Дуб Венеция',
            price: '68 856',
            src: 'dummy/cart-preview-3.jpg',
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
            content: extend(item,
                {
                    block: 'cart-item'
                }
            )
        }
    })
})
