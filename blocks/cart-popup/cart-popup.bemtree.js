block('cart-popup').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Ваша корзина'
        },
        {
            block: 'cart-list'
        },
        {
            elem: 'button',
            content: {
                block: 'button',
                content: 'Оформить заказ',
                mods: {
                    theme: 'islands',
                    type: 'submit'
                }
            }
        }
    ];
})
