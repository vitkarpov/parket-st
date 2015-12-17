block('cart-row')(
    js()(true),

    tag()('tr'),

    content()(function() {
        var items = applyNext();
        var l = items.length;

        return applyNext().map(function(cell, i) {
            var content = cell;
            if (i === l - 1) {
                content = [
                    cell,
                    {
                        block: 'icon',
                        mods: { type: 'close' },
                        mix: {
                            block: 'cart-row',
                            elem: 'remove'
                        }
                    }
                ]
            };
            return {
                tag: 'td',
                content: content
            }
        });
    })
)
