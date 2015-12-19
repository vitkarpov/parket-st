block('catalog-list').content()(function() {
    var items = ([
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
    ]);

    return shuffle(items).map(function(item) {
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
    });

    function shuffle(arr) {
        var i = arr.length;
        var j;
        var t;

        while(i) {
            j = Math.floor((i--) * Math.random());
            t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
        return arr;
    };
})
