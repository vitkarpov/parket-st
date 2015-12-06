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
            block: 'aside-menu-item',
            content: text,
            popup: brands.map(function(item) {
                return {
                    elem: 'link',
                    content: item
                }
            })
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
                elem: 'menu',
                content: cats.map(getItem)
            }
        },
        {
            elem: 'item',
            attrs: {
                'data-id': 'brands'
            },
            content: {
                elem: 'menu',
                content: brands.map(getItem)
            }
        },
        {
            elem: 'teaser',
            content: {
                block: 'aside-teaser'
            }
        }
    ]
})
