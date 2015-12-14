block('cart-table')(
    content()(function() {
        return {
            tag: 'table',
            content: [
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
        };
    })
)
