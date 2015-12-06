block('cart-item')(
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
                        { block: 'rub' }
                    ]
                },
                applyNext()
            ]
        }
    })
)
