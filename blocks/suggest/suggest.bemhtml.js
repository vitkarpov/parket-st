block('suggest')(
    js()({
        start: 0
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
