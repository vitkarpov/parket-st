block('cart-preview')(
    js()(true),

    tag()('a'),

    attrs()({
        href: 'cart-empty.html'
    }),

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
