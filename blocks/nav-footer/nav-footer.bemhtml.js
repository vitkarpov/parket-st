block('nav-footer')(
    js()(true),

    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
