block('catalog-all').content()(function() {
    return ([
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
        return {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: {
                        elem: 'link',
                        content: item.caption
                    }
                },
                (item.items || []).map(function(item) {
                    return {
                        elem: 'brand',
                        content: {
                            elem: 'link',
                            content: item
                        }
                    };
                })
            ]
        };
    });
})
