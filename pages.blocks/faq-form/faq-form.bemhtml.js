block('faq-form')(
    tag()('form'),

    attrs()({
        action: 'faq.html',
        method: 'POST'
    }),

    js()(true),

    elem('item').content()(function() {
        var ctx = this.ctx;

        return {
            block: 'order-label-group',
            label: ctx.label,
            type: ctx.type,
            for: this.generateId(),
            content: [
                {
                    block: (ctx.type === 'textarea') ? 'textarea' : 'input',
                    mods: {
                        theme: 'parket',
                        type: ctx.type
                    },
                    id: this.generateId(),
                    name: ctx.name,
                    type: ctx.type,
                    val: ctx.val,
                    required: true
                }
            ]
        }
    })
)
