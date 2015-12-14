block('order-sum')(
    js()(true),

    elem('control')(
        tag()('input'),

        attrs()(function() {
            return {
                type: 'hidden',
                name: 'sum',
                value: this.ctx.value
            }
        })
    )
)
