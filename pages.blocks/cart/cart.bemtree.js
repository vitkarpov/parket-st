block('cart').content()(function() {
    return [
        {
            block: 'cart-table'
        },
        {
            elem: 'form',
            content: [
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
        }
    ]
})
