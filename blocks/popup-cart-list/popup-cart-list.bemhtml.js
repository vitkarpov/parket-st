block('popup-cart-list')(
    js()(true),

    elem('item')(
        attrs()(function() {
            return {
                'data-id': this.generateId()
            };
        }),

        content()(function() {
            return [
                applyNext(),
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
)
