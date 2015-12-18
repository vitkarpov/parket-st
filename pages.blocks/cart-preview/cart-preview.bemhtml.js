block('cart-preview')(
    js()(true),

    elem('price')(
        tag()('span'),

        content()(function() {
            return {
                elem: 'price-i',
                tag: 'span',
                content: applyNext()
            };
        })
    )
)
