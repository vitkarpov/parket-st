block('catalog-list').content()(function() {
    return ([
        {
            caption: "Модульный паркет Panaget Французский дуб Сатин/Satine Новая коллекция",
            props: [
                'Финляндия',
                '2266x188x14 мм',
                'Бамбук'
            ],
            prices: {
                old: '6850',
                current: '6490'
            },
            label: 'day'
        },
        {
            caption: "Паркетная доска Polarwood Дуб Ливинг",
            props: [
                'Финляндия',
                '2266x188x14 мм',
                'Бамбук'
            ],
            prices: {
                old: '6850',
                current: '6490'
            },
            label: 'price'
        },
        {
            caption: "Массивная доска PARKETOFF Кофе/горизонт",
            prices: {
                current: "1200"
            }
        },
        {
            caption: "Ламинат Кастамону Дуб Колорадо",
            prices: {
                current: "335"
            }
        },
        {
            caption: "Массивная доска PARKETOFF Кофе/горизонт",
            prices: {
                current: "335"
            }
        },
        {
            caption: "Инженерная доска Kjopmann Дуб Антик Блэк",
            prices: {
                old: '2200',
                current: '2024'
            }
        }
    ])
    .map(function(item) {
        var mods = {
            'home': true
        };

        if (item.prices.old) {
            mods['old-price'] = true;
        }

        return {
            block: 'catalog-item',
            mix: {
                block: 'catalog-list',
                elem: 'item'
            },
            mods: mods,
            content: item
        };
    })
})
