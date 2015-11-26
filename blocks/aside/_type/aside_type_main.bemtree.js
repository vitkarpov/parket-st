block('aside').mod('type', 'main').content()(function() {
    var brands = [
        'Amigo',
        'Antique',
        'Coswick',
        'Dream Castle',
        'Sherwood Parquet',
        'Topwood (Хорватия)',
        'Topwood (Чебоксары)',
        'Triumph',
        'Barlinek',
        '«Корона Экзотик»'
    ];
    var cats = [
        'Ламинат',
        'Массивная доска',
        'Паркетная доска',
        'Террасная доска',
        'Блочный паркет',
        'Увлажнители',
        'Теплый пол',
        'Стеновые панели',
        'Двухслойный паркет',
        'Инженерная доска',
        'Модульный паркет',
        'Коммерческие полы',
        'Пробковые покрытия',
        'Кожаные полы',
        'Кварц-Виниловые полы',
    ];

    var getItem = function(text) {
        return {
            block: 'link',
            mix: {
                block: 'aside-menu',
                elem: 'item'
            },
            url: '#',
            content: text
        };
    }

    return [
        {
            block: 'radio-group',
            mix: {block: 'aside', elem: 'radio'},
            mods: {type : 'button'},
            val: 'categories',
            options: [
                {val: 'categories', text: 'Категории'},
                {val: 'brands', text: 'Бренды'}
            ]
        },
        {
            elem: 'item',
            attrs: {
                'data-id': 'categories'
            },
            content: {
                block: 'aside-menu',
                content: cats.map(getItem)
            }
        },
        {
            elem: 'item',
            attrs: {
                'data-id': 'brands'
            },
            content: {
                block: 'aside-menu',
                content: brands.map(getItem)
            }
        }
    ]
})
