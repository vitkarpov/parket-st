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
                        theme: 'parket',
                        type: 'submit',
                        view: 'plain'
                    },
                    text: 'Оформить заказ'
                }
            ]
        }
    ]
})
