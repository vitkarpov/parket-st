block('cart')(
    tag()('form'),

    attrs()({
        action: 'order-done.html'
    }),

    content()(function() {
        var extend = this.extend;

        return applyNext().map(function(item) {
            return extend(item, {
                tag: 'fieldset'
            });
        });
    })
)
