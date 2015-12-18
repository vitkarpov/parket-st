block('filter')(
    tag()('form'),

    js()(true),

    attrs()({
        action: '#'
    })
)

block('filter').elem('item')(
    tag()('fieldset'),

    attrs()(function() {
        return {
            'data-id': this.ctx.id
        };
    })
)
