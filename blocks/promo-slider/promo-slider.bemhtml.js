block('promo-slider')(
    js()(true),

    content()(function() {
        return [
            {
                elem: 'content',
                content: applyNext()
            },
            {
                elem: 'spin',
                content: {
                    block : 'spin',
                    mods : {theme : 'islands', size : 'l', visible : true}
                }
            }
        ]
    }),

    elem('item')(
        attrs()(function() {
            return {style: 'background-image: url(' + this.ctx.bg + ');'}
        }),

        content()(function() {
            return {
                elem: 'item-inner',
                content: applyNext()
            }
        })
    )
)
