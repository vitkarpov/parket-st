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
                    mods: this.ctx.mods,
                    content: this.ctx.popup
                }
            };
        }

        return [
            {
                elem: 'link',
                url: this.ctx.url,
                content: applyNext()
            },
            popup
        ]
    }),

    elem('link')(
        tag()('a'),

        attrs()(function() {
            return {
                href: this.ctx.url
            };
        })
    )
)

block('aside-menu-item').mod('active', true).elem('link')(
    tag()('span'),

    attrs()({})
)
