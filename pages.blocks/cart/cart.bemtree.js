block('cart').content()(function() {
    return [
        {
            elem: 'content',
            content: [
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
        },
        {
            block: 'cart-empty',
            mix: {
                block: 'cart',
                elem: 'empty'
            }
        }
    ]
})
