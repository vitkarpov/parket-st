block('cart-summary').content()(function() {
    return [
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: 'Доставка по Москве'
                },
                {
                    elem: 'text',
                    content: 'Для доставки по Москве и Московской области мы используем свой автотранспорт и гарантируем бережную перевозку напольных покрытий от двери до двери'
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'info',
                    content: [
                        {
                            elem: 'info-caption',
                            content: 'Метраж покупки'
                        },
                        '77,11 ',
                        {
                            block: 'm2'
                        }
                    ]
                },
                {
                    elem: 'info',
                    mods: {
                        price: true
                    },
                    content: [
                        {
                            elem: 'info-caption',
                            content: 'Стоимость покупки'
                        },
                        '203 949 ',
                        {
                            block: 'rub'
                        }
                    ]
                }
            ]
        }
    ];
})
