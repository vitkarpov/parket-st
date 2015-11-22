block('cart-list')(
    js()(true)
)

block('cart-list').elem('item')(
    js()(true),

    content()(function() {
        return [
            {
                elem: 'content',
                content: applyNext()
            },
            {
                elem: 'remove',
                attrs: {
                    title: 'Удалить из Корзины'
                },
                js: true,
                content: {
                    block: 'icon',
                    mods: {type: 'close'}
                }
            }
        ];
    })
)
