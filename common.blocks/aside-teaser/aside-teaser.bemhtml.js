block('aside-teaser')(
    elem('items').tag()('nav'),

    elem('item').replace()(function() {
        return this.extend(this.ctx.content, {
            mix: {
                block: this.block,
                elem: 'item'
            }
        })
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
