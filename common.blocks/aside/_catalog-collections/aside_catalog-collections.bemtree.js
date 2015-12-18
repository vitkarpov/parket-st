block('aside').mod('catalog-collections', true).content()(function() {
    var items = ([
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
            url: 'catalog-collections.html',
            js: false,
            content: item
        }
    });

    return [
        {
            elem: 'brand',
            content: {
                tag: 'img',
                attrs: {
                    width: 124,
                    height: 63,
                    src: 'dummy/brand.jpg'
                }
            }
        },
        items
    ]
});
