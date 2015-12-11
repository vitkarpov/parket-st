block('suggest').elem('content').content()(function() {
    return ([
        [
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '3 000'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '1 280'
                }
            },
            {
                caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
                prices: {
                    current: '3 000'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Венеция',
                prices: {
                    current: '1 280'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '18 290'
                }
            }
        ],
        [
            {
                caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
                prices: {
                    current: '3 000'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Венеция',
                prices: {
                    current: '1 280'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '18 290'
                }
            },
            {
                caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
                prices: {
                    current: '3 000'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Венеция',
                prices: {
                    current: '1 280'
                }
            }
        ],
        [
            {
                caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
                prices: {
                    current: '3 000'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Венеция',
                prices: {
                    current: '1 280'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Венеция',
                prices: {
                    current: '1 280'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '18 290'
                }
            },
            {
                caption: 'Массивная доска Green Line Дуб Кьянти',
                prices: {
                    current: '18 290'
                }
            }
        ]
    ])
    .map(function(items, n) {
        return {
            elem: 'items',
            mods: {
                n: n
            },
            content: items.map(function(item) {
                return {
                    block: 'catalog-item',
                    mix: {
                        block: 'suggest',
                        elem: 'item'
                    },
                    content: item
                }
            })
        }
    })
})
