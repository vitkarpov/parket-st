block('crumbs')(
    content()(function() {
        var items = this.ctx.items.map(function(item) {
            return {
                elem: 'item',
                content: {
                    elem: 'link',
                    content: item
                }
            };
        });
        return [
            {
                elem: 'root',
                content: {
                    block: 'icon',
                    mods: {type: 'crumbs'}
                }
            },
            items
        ];
    }),

    elem('item')(
        tag()('span')
    ),

    elem('link')(
        tag()('a'),

        attrs()({
            href: "#"
        })
    ),

    elem('root')(
        tag()('a'),

        attrs()({
            href: 'home.html'
        })
    )
)
