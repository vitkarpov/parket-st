block('cart-row')(
    js()(true),

    tag()('tr'),

    content()(function() {
        return applyNext().map(function(cell) {
            return {
                tag: 'td',
                content: cell
            }
        });
    })
)
