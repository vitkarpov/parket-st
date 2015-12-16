block('cart-summary')(
    js()(true),

    content()(function() {
        return {
            elem: 'content',
            content: applyNext()
        }
    }),

    elem('info').content()(function() {
        var ctx = this.ctx;
        var unit = (ctx.mods.type === 'price') ? {block: 'rub'} : {block: 'm2'};

        return {
            elem: 'info-i',
            content: [
                {
                    elem: 'info-caption',
                    content: ctx.caption
                },
                {
                    elem: 'val',
                    tag: 'span',
                    mods: ctx.mods,
                    content: ctx.val || ctx.displayVal
                },
                '&nbsp',
                unit,
                {
                    elem: 'control',
                    mods: ctx.mods,
                    tag: 'input',
                    attrs: {
                        type: 'hidden',
                        name: ctx.mods.type,
                        value: ctx.val
                    }
                }
            ]
        }
    })
)
