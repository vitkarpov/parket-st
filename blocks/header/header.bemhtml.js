block('header')(
    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('price')(
        tag()('span')
    )
)
