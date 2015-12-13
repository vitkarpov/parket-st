block('card-info-suggest').content()(function() {
    return [
        {
            elem: 'caption',
            content: [
                'Из коллекции «',
                {
                    block: 'link',
                    url: 'collections.html',
                    content: 'Дубы'
                },
                '»'
            ]
        },
        {
            elem: 'list',
            content: ([
                {
                    caption: 'Массивная доска Green Line Дуб Кьянти',
                    prices: {
                        current: '3 000'
                    }
                },
                {
                    caption: 'Массивная доска Green Line Дуб Кьянти',
                    prices: {
                        current: '1 280'
                    }
                },
                {
                    caption: 'Массивная доска Green Line Дуб Кьянти',
                    prices: {
                        current: '18 290'
                    }
                }
            ])
            .map(function(item) {
                return {
                    block: 'catalog-item',
                    mix: {
                        block: 'card-info-suggest',
                        elem: 'item'
                    },
                    content: item
                };
            })
        }
    ];
})
