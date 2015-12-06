block('cart-summary')(
    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('info').content()(function() {
        return {
            elem: 'info-i',
            content: applyNext()
        }
    })
)
