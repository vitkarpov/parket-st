block('suggest')(
    js()(true),

    elem('toggler').replace()(function() {
        return {
            block: 'link',
            mix: {
                block: 'suggest',
                elem: 'toggler'
            },
            mods: {
                type: 'pseudo',
                current: this.ctx.current
            },
            attrs: {
                'data-id': this.ctx.id
            },
            content: this.ctx.content
        }
    }),

    elem('content').content()(function() {
        var current = this.ctx.current;

        return applyNext().map(function(items, n) {
            if (n === current) {
                items.mods.current = true;
            }
            return items;
        });
    })
)
