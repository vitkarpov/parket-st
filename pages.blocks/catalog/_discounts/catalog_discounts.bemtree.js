block('catalog').mod('discounts', true).content()(function() {
    return ([
        {
            caption: 'Массивная доска PARKETOFF Натур/горизонт',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Мурано',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 024',
                old: '5 720'
            }
        },
        {
            caption: 'Массивная доска PARKETOFF Натур/горизонт',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 371',
                old: '8 650'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '100 000'
            }
        },
        {
            caption: 'Массивная доска с очень длинным названием, кот...',
            title: 'Массивная доска с очень длинным названием, которое не влезет и сломает всю верстку',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Мурано',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Милан',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 760',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Мурано',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 024',
                old: '3 220'
            }
        },
        {
            caption: 'Массивная доска PARKETOFF Натур/горизонт',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2 371',
                old: '8 650'
            }
        }
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                block: 'catalog-item',
                mods: {
                    discounts: true
                },
                content: item
            }
        };
    })
})
