block('order-label-group')(
    js()(true),

    content()(function() {
        return [
            {
                elem: 'label',
                attrs: {
                    for: this.ctx.for
                },
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
