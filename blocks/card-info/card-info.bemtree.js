block('card-info').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Массивная доска Amigo Дуб Натур Элеганс'
        },
        {
            elem: 'prices',
            content: [
                {
                    elem: 'current-price',
                    content: [
                        '4 660',
                        '&nbsp;',
                        {block: 'rub'},
                        '/',
                        {block: 'm2'}
                    ]
                },
                {
                    elem: 'old-price',
                    content: [
                        '6 140',
                        {block: 'rub'}
                    ]
                }
            ]
        },
        {
            block: 'card-calc',
            square: 2.304,
            count: 16,
            price: 4660
        },
        {
            block : 'checkbox-group',
            mods : { theme : 'parket' },
            name : 'add-cover',
            options : [
                { val : 1, text : 'Добавить 5% под урезку' },
            ]
        },
        {
            elem: 'calc-link',
            content: {
                block: 'link',
                mods: {
                    type: 'pseudo'
                },
                content: 'Как правильно расчитать количество покрытия'
            }
        },
        {
            elem: 'sum',
            content: [
                {
                    elem: 'submit',
                    content: {
                        block: 'button',
                        mods: {
                            theme: 'parket',
                            type: 'submit',
                            view: 'plain'
                        },
                        text: 'В корзину'
                    }
                },
                {
                    block: 'card-sum',
                    val: 79220
                }
            ]
        }
    ];
})
