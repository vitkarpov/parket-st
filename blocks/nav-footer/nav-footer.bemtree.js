block('nav-footer').content()(function() {
    return ([
        {caption: 'Доставка и оплата'},
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
        {caption: 'Вопросы и ответы'},
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
        {caption: 'Контакты'},
        {
            caption: 'Блочный паркет',
            items: ['Coswick']
        },
        {caption: 'Информация'},
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
        {caption: 'О компании'},
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
                    content: item
                };
            })
        });

        return {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: item.caption
                },
                items
            ]
        };
    });
})
