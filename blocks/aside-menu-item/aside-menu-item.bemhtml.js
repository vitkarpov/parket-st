block('aside-menu-item')(
    js()(true),

    content()(function() {
        var popup;

        if (this.ctx.popup) {
            popup = {
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
            };
        }

        return [
            {
                elem: 'link',
                content: applyNext()
            },
            popup
        ]
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
