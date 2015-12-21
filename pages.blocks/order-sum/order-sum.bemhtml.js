block('order-sum')(
    js()({
        delivery: false
    }),

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
