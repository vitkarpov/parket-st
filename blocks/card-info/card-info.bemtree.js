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
            block: 'card-calc'
        },
        {
            elem: 'add-cover',
            content: [
                {
                    block: 'checkbox',
                    mods: {
                        theme: 'parket',
                        checked: true
                    },
                    name: 'add-cover',
                    val: 1,
                    text: 'Добавить 5% под урезку'
                },
                {
                    block: 'link',
                    mods: {
                        type: 'pseudo'
                    },
                    content: 'Как правильно расчитать количество покрытия'
                }
            ]
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
                }
            ]
        }
    ];
})
