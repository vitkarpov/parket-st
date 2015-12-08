block('order')(
    tag()('form'),

    js()({
        'delivery-price': 1800
    }),

    attrs({
        action: "order-done.html"
    })
)
