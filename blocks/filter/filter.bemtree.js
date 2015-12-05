block('filter').content()(function() {
    return [
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: [
                        'Цена за ',
                        {
                            block: 'm2'
                        }
                    ]
                },
                {
                    block: 'price-slider'
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'caption',
                    content: 'Оттенок'
                },
                {
                    block: 'colors'
                }
            ]
        }
    ];
})
