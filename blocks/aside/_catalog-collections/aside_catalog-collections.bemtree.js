block('aside').mod('catalog-collections', true).content()(function() {
    return ([
        'Все коллекции',
        'Классическая коллекция из дуба',
        'Радиальная коллекция',
        'Вековые традиции',
        'Бражированная коллекция',
        'Смарт паркет из массива дуба',
        'Смарт паркет из массива ясеня',
        'Классическая коллекция из ясеня'
    ])
    .map(function(item, n) {
        return {
            block: 'aside-menu-item',
            mods: {
                active: n === 1
            },
            js: false,
            content: item
        }
    });
});
