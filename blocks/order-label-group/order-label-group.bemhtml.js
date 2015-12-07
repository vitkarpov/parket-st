block('order-label-group')(
    content()(function() {
        return [
            {
                elem: 'label',
                attrs: this.ctx.attrs,
                content: this.ctx.label
            },
            {
                elem: 'item',
                mods: {
                    type: this.ctx.type
                },
                content: applyNext()
            }
        ]
    }),

    elem('label')(
        tag()('label')
    )
)
