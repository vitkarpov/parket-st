block('main-content').mod('cart', true).content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'crumbs',
                items: ['Корзина']
            },
            {
                elem: 'caption',
                content: 'Корзина'
            },
            {
                block: 'cart'
            }
        ]
    };
});
