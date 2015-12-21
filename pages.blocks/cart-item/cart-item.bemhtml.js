block('cart-item')(
    tag()('a'),

    attrs()({
        href: 'card.html'
    }),

    content()(function() {
        var ctx = this.ctx;

        return {
            elem: 'content',
            content: [
                {
                    elem: 'preview',
                    content: {
                        tag: 'img',
                        attrs: {src: ctx.src}
                    }
                },
                {
                    elem: 'caption',
                    content: ctx.caption
                },
                {
                    elem: 'price',
                    content: [
                        ctx.price,
                        ' ',
                        { block: 'rub' },
                        '/',
                        { block: 'm2' }
                    ]
                },
                applyNext()
            ]
        }
    })
)
