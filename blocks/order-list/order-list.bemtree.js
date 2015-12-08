block('order-list').content()(function() {
    return ([
        ['15 х Массивная доска Green Line Дуб Палермо', '14 432'],
        ['8 х Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой', '54 432'],
        ['11 х Массивная доска Green Line Дуб Венеция', '8 120']
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: item[0]
                },
                {
                    elem: 'price',
                    content: [
                        item[1],
                        '&nbsp;',
                        {block: 'rub'}
                    ]
                }
            ]
        };
    });
})
