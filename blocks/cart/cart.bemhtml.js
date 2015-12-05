block('cart')(
    tag()('table'),

    content()(function() {
        return [
            {
                tag: 'thead',
                content: {
                    tag: 'tr',
                    content: [
                        {
                            tag: 'th',
                            content: 'Товар'
                        },
                        {
                            tag: 'th',
                            content: 'Количество'
                        },
                        {
                            tag: 'th',
                            content: 'Стоимость'
                        }
                    ]
                }
            },
            {
                tag: 'tbody',
                content: applyNext()
            }
        ]
    })
)

block('cart').elem('row')(
    tag()('tr'),

    content()(function() {
        return applyNext().map(function(cell) {
            return {
                tag: 'td',
                content: cell
            }
        });
    })
)
