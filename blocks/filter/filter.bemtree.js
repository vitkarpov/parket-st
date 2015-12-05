block('filter').content()(function() {
    return [
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: [
                        'Цена за ',
                        {
                            block: 'm2'
                        }
                    ]
                },
                {
                    block: 'range-slider',
                    name: 'price',
                    range: {
                        from: 1000,
                        to: 10000,
                        step: 500
                    },
                    value: '1000,4500',
                    mods: {
                        unit: 'rub'
                    }
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: 'Оттенок'
                },
                {
                    block: 'filter-colors'
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: 'Класс нагрузки'
                },
                {
                    block: 'filter-class'
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: 'Толщина'
                },
                {
                    block: 'range-slider',
                    name: 'thickness',
                    range: {
                        from: 2,
                        to: 10,
                        step: 0.5
                    },
                    value: '3,5.5',
                    mods: {
                        unit: 'mm'
                    }
                }
            ]
        }
    ];
})
