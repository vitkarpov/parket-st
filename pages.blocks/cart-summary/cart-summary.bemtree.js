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
                    mods: {
                        type: 'square'
                    },
                    caption: 'Метраж покупки',
                    val: 22.15
                },
                {
                    elem: 'info',
                    mods: {
                        type: 'price'
                    },
                    caption: 'Стоимость покупки',
                    val: 82645,
                    displayVal: '82&nbsp;645'
                }
            ]
        }
    ];
})
