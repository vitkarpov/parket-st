block('order-sum').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Итого:'
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'term',
                    content: 'Стоимость покупки'
                },
                {
                    elem: 'price',
                    content: [
                        '203 949',
                        {block: 'rub'}
                    ]
                }
            ]
        },
        {
            elem: 'item',
            mods: {
                delivery: true
            },
            content: [
                {
                    elem: 'term',
                    content: 'Доставка'
                },
                {
                    elem: 'price',
                    content: [
                        '1 800',
                        {block: 'rub'}
                    ]
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'term',
                    content: 'К оплате'
                },
                {
                    elem: 'price',
                    mods: {
                        sum: true
                    },
                    content: [
                        {
                            tag: 'span',
                            elem: 'sum',
                            content: '205 749'
                        },
                        {block: 'rub'}
                    ]
                },
                {
                    elem: 'control',
                    value: 205749
                }
            ]
        }
    ]
})
