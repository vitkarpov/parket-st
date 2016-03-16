block('filter')(
    tag()('form'),

    js()({
        url: 'http://localhost:8000'
    }),

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
