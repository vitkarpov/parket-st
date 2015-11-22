block('cart-preview').content()(function() {
    return [
        {
            elem: 'icon',
            attrs: {
                'data-count': '12'
            },
            content: {
                block: 'icon',
                mods: {type: 'cart'}
            }
        },
        '97 480 ',
        {
            block: 'rub'
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
                block: 'cart-popup'
            }
        }
    ];
})
