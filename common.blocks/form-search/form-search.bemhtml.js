block('form-search')(
    js()(true),

    tag()('form'),

    elem('clear')(
        tag()('button'),

        attrs()({
            type: 'reset'
        })
    )
)
