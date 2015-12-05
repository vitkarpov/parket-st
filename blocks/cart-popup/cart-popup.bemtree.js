block('cart-popup').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Ваша корзина'
        },
        {
            elem: 'list',
            content: {
                block: 'cart-list'
            }
        },
        {
            elem: 'footer',
            content: {
                block: 'button',
                mix: {block: 'cart-popup', elem: 'submit'},
                text: 'Оформить заказ',
                mods: {
                    theme: 'parket',
                    type: 'submit',
                    size: 'm',
                    view: 'action'
                }
            }
        },
        {
            elem: 'empty',
            content: 'Корзина пуста'
        }
    ];
})
