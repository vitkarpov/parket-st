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
                block: 'icon',
                mix: {
                    block: this.block,
                    elem: 'root'
                },
                mods: {type: 'crumbs'}
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
    )
)
