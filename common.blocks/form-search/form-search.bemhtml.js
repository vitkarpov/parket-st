block('form-search')(
    js()(true),

    tag()('form'),

    attrs()({
        action: 'search.html'
    }),

    elem('clear')(
        tag()('button'),

        attrs()({
            type: 'reset'
        })
    )
)
