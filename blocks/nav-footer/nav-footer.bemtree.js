block('nav-footer').content()(function() {
    var main = ([
        'Доставка и оплата',
        'Вопросы и ответы',
        'Информация',
        'О компании',
        'Контакты'
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                elem: 'caption',
                content: {
                    block: 'link',
                    url: '#',
                    content: item
                }
            }
        };
    });

    var sub = ([
        {caption: 'Скидки и акции'},
        {
            caption: 'Ламинат',
            items: [
                'Balterio',
                'Ecoflooring',
                'Kronotex',
                'Witex'
            ]
        },
        {
            caption: 'Теплый пол',
            items: [
                'NanoThermal',
                'Devi'
            ]
        },
        {
            caption: 'Увлажнители',
            items: ['Venta']
        },
        {
            caption: 'Массивная доска',
            items: [
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
            ]
        },
        {
            caption: 'Блочный паркет',
            items: ['Coswick']
        },
        {
            caption: 'Паркетная доска',
            items: [
                'Barlinek',
                'Parquet Prime',
                'Tarkett',
                'Coswick',
                'Karelia',
                'UPOFLOOR'
            ]
        },
        {
            caption: 'Двухслойная паркетная доска',
            items: ['Coswick']
        },
        {
            caption: 'Модульный паркет',
            items: [
                'Coswick',
                'Leonardo'
            ]
        },
        {
            caption: 'Террасная доска',
            items: [
                'Ideck',
                'Ribadao',
                'Vetedy',
                'КОРОНА Exotic'
            ]
        },
        {
            caption: 'Стеновые панели',
            items: [
                'Granorte',
                'Coswick'
            ]
        },
        {
            caption: 'Кварц-виниловые полы',
            items: [
                'ECOCLICK',
                'WINEO (WITEX)',
                'HARO'
            ]
        },
        {
            caption: 'Инженерная доска',
            items: [
                'Topwood (Хорватия)',
                'Topwood (Россия)'
            ]
        },
        {
            caption: 'Коммерческие полы',
            items: ['Amigo']
        },
        {
            caption: 'Пробковые покрытия',
            items: [
                'Corksribas',
                'MJO',
                'Granorte'
            ]
        },
        {
            caption: 'Кожаные полы',
            items: ['Granorte']
        }
    ])
    .map(function(item) {
        var items = item.items && ({
            elem: 'brands',
            content: item.items.map(function(item) {
                return {
                    elem: 'brand',
                    content: {
                        block: 'link',
                        url: '#',
                        content: item
                    }
                };
            })
        });

        return {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: {
                        block: 'link',
                        url: '#',
                        content: item.caption
                    }
                },
                items
            ]
        };
    });

    return [
        {
            elem: 'main',
            content: main
        },
        {
            elem: 'sub',
            content: sub
        },
        {
            elem: 'arrow',
            content: {
                block: 'icon',
                mods: {type: 'arrow-down'}
            }
        }
    ];
})
