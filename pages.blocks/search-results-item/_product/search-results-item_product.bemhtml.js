block('search-results-item').mod('product', true)(
    content()(function() {
        return [
            {
                elem: 'preview',
                content: {
                    tag: 'img',
                    attrs: {
                        src: this.ctx.preview
                    }
                }
            },
            {
                elem: 'caption',
                content: {
                    block: 'link',
                    content: this.ctx.caption
                }
            },
            {
                elem: 'props',
                content: this.ctx.props
            },
            {
                elem: 'price',
                content: [
                    this.ctx.price,
                    '&nbsp;',
                    {
                        block: 'rub'
                    }
                ]
            }
        ];
    })
)
