block('filter')(
    tag()('form'),

    js()(true),

    attrs()({
        action: '#',
        'data-id': 'filter'
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
