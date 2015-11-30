block('catalog').content()(function() {
    return ([
        {
            caption: 'Массивная доска PARKETOFF Натур/горизонт',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2760'
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
                current: '2760'
            }
        },
        {
            caption: 'Одна строка',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            label: 'discount',
            prices: {
                current: '2024'
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
                current: '2371'
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
                current: '2760'
            }
        },
        {
            caption: 'Массивная доска с очень длинным наз...',
            title: 'Массивная доска с очень длинным названием, которое не влезет и сломает всю верстку',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            prices: {
                current: '2760'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Мурано',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            big: true,
            label: 'price',
            prices: {
                current: '2760',
                old: '3220'
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
                current: '2760'
            }
        },
        {
            caption: 'Массивная доска Green Line Дуб Мурано',
            props: [
                'Длина: 920 мм',
                'Ширина: 125 мм',
                'Толщина: 12 мм'
            ],
            label: 'day',
            prices: {
                current: '2024'
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
                current: '2371'
            }
        }
    ])
    .map(function(item) {
        var modsBlock = {};
        var modsElem = {};

        if (item.prices.old) {
            modsBlock['old-price'] = true;
        }

        if (item.big) {
            modsElem.big = true;
            modsBlock.big = true;
        }

        return {
            elem: 'item',
            mods: modsElem,
            content: {
                block: 'catalog-item',
                mods: modsBlock,
                content: item
            }
        };
    })
})
