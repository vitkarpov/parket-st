block('cart-list')(
    js()(true)
)

block('cart-list').elem('item')(
    attrs()(function() {
        return {'data-id': this.generateId()}
    }),

    js()(),

    content()(function() {
        return [
            {
                elem: 'content',
                content: applyNext()
            },
            {
                elem: 'remove',
                attrs: {
                    title: 'Удалить из Корзины',
                    'data-id': this.generateId()
                },
                content: {
                    block: 'icon',
                    mods: {type: 'close'}
                }
            }
        ];
    })
)
