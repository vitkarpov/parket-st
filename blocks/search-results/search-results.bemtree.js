block('search-results').content()(function() {
    var extend = this.extend;

    return ([
        {
            caption: 'Ламиант Quick Step',
            range: '535',
            preview: 'http://lorempixel.com/220/100/?' + Math.random(),
            type: 'category'
        },
        {
            caption: 'Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой',
            props: 'Ширина:&nbsp;19,05&nbsp;мм, Длина:&nbsp;107,95&nbsp;мм, Толщина:&nbsp;18&nbsp;мм',
            preview: 'http://lorempixel.com/80/80/?' + Math.random(),
            type: 'product',
            price: '3 000'
        },
        {
            caption: 'Что такое ламинат?',
            text: 'Ламинат – напольное покрытие XXI века. Его популярность объясняется тем, что его очень  просто укладывать, он легок и долговечен. Производят ламинат из высококачественных экологичных материалов. Нередко поверхность ламината первосходно имитирует паркетную',
            type: 'article'
        },
        {
            caption: 'Массивная доска Green Line Дуб Палермо',
            props: 'Ширина:&nbsp;19,05&nbsp;мм, Длина:&nbsp;107,95&nbsp;мм, Толщина:&nbsp;18&nbsp;мм',
            preview: 'http://lorempixel.com/80/80/?' + Math.random(),
            type: 'product',
            price: '2 890'
        }
    ])
    .map(function(item) {
        var mods = {};

        mods[item.type] = true;

        return extend(item, {
            tag: 'a',
            attrs: {
                href: '#'
            },
            block: 'search-results-item',
            mix: {
                block: 'search-results',
                elem: 'item'
            },
            mods: mods
        });
    });
});
