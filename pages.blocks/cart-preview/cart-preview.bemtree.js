block('cart-preview').content()(function() {
    return [
        {
            elem: 'icon',
            content: {
                block: 'icon',
                mods: {type: 'cart'}
            }
        },
        {
            elem: 'price-w',
            content: {
                elem: 'price-i',
                content: [
                    {
                        elem: 'price',
                        tag: 'span',
                        content: ''
                    },
                    {
                        block: 'rub'
                    }
                ]
            }
        },
        {
            block: 'popup',
            mods: {
                autoclosable: true,
                target: 'anchor',
                theme: 'islands'
            },
            directions: ['bottom-right'],
            content: {
                block: 'cart-popup',
                mods: {empty: true}
            }
        }
    ];
})
