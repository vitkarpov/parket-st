block('header')(
    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('icon')(
        tag()('span')
    ),

    elem('cart')(
        tag()('span')
    )
)
