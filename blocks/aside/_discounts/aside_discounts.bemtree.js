block('aside').mod('discounts', true).content()(function() {
    return {
        block: 'filter',
        content: [
            {
                elem: 'item',
                content: ([
                    'Все товары',
                    'Ламинат',
                    'Массивная доска',
                    'Паркетная доска',
                    'Теплый пол',
                    'Стеновые панели',
                    'Двухслойный паркет',
                    'Инженерная доска',
                    'Модульный паркет',
                    'Кожаные полы',
                    'Кварц-Виниловые полы'
                ])
                .map(function(item, n) {
                    return {
                        block: 'aside-menu-item',
                        mods: {
                            active: n === 0
                        },
                        url: 'catalog.html',
                        js: false,
                        content: item
                    }
                })
            },
            {
                elem: 'item',
                id: 'filter-price',
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
                id: 'filter-colors',
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
                id: 'filter-thickness',
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
            },
            {
                elem: 'item',
                content: {
                    block: 'filter-clear',
                    js: {
                        target: 'filter'
                    },
                    content: 'Сбросить фильтр'
                }
            }
        ]
    };
});
