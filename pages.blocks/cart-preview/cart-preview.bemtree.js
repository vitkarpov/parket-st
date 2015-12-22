block('cart-preview').content()(function() {
    return [
        {
            elem: 'content',
            tag: 'a',
            attrs: {
                href: 'cart-empty.html'
            },
            content: [
                {
                    elem: 'icon',
                    attrs: {
                        'data-count': '3'
                    },
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
                                content: '3 240'
                            },
                            {
                                block: 'rub'
                            }
                        ]
                    }
                }
            ]
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
