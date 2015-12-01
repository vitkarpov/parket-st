block('price-slider')(
    js()({
        from: 1000,
        to: 10000,
        step: 500
    }),

    content()(function() {
        return {
            elem: 'range'
        }
    }),

    elem('range')(
        tag()('input'),
        attrs()({
            type: 'hidden', value: '1000,4500'
        })
    )
)
