block('cart-popup').content()(function() {
    var items = [];

    return [
        {
            elem: 'caption',
            content: 'Ваша корзина'
        },
        items,
        {
            elem: 'button',
            content: {
                block: 'button',
                content: 'Оформить заказ',
                mods: {
                    theme: 'islands'
                }
            }
        }
    ];
})
