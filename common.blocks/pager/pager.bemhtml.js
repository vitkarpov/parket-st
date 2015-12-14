block('pager')(
    content()(function() {
        var cur = this.ctx.current;

        return ['1', '2', '3', '4', '5'].map(function(n) {
            return {
                elem: 'item',
                mods: {
                    current: n === cur
                },
                content: n
            }
        })
    }),

    elem('item')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
