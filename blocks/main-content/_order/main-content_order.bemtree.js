block('main-content').mod('order', true).content()(function() {
    return [
        {
            block: 'page',
            elem: 'container',
            content: [
                {
                    block: 'crumbs',
                    items: ['Корзина', 'Оформление заказа']
                },
                {
                    elem: 'caption',
                    content: 'Оформление заказа'
                },
                {
                    block: 'order'
                }
            ]
        }
    ];
})
