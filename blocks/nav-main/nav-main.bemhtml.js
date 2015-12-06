block('nav-main')(
    tag()('nav'),

    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: "#"
        })
    )
)
