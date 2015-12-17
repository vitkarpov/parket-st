block('cart')(
    js()(true),

    elem('form')(
        tag()('form'),

        attrs()({
            action: 'order-done.html'
        })
    )
)
