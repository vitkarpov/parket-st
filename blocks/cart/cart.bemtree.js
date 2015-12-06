block('cart').content()(function() {
    return [
        {
            block: 'cart-table'
        },
        {
            block: 'cart-summary'
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'button',
                    mods: {
                        type: 'submit',
                        view: 'normal'
                    }
                }
            ]
        }
    ]
})
