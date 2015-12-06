block('aside-menu-item')(
    js()(true),

    content()(function() {
        return [
            {
                elem: 'link',
                content: applyNext()
            },
            {
                block: 'popup',
                mods: {
                    target: 'anchor',
                    theme: 'islands'
                },
                directions: ['right-top'],
                content: {
                    block: this.block,
                    elem: 'popup',
                    content: this.ctx.popup
                }
            }
        ]
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
