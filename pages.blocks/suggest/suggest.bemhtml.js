block('suggest')(
    js()({
        start: 0,

        url: '/api/fetch-new-suggest'
    }),

    content()(function() {
        return [
            applyNext(),
            {
                elem: 'refresh',
                content: [
                    {
                        block: 'icon',
                        mods: {type: 'refresh'}
                    },
                    'Еще'
                ]
            }
        ]
    }),

    elem('toggler')(
        tag()('span'),

        content()(function() {
            return {
                block: 'link',
                mods: {
                    type: 'pseudo'
                },
                content: applyNext()
            }
        })
    )
)
