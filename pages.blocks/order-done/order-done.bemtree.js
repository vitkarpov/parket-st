block('order-done').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Заказ оформлен'
        },
        {
            elem: 'text',
            content: [
                {
                    tag: 'p',
                    content: 'Ваш заказ №2494 оформлен и ждет подтверждения. Наш менеджер позвонит и объяснит как забрать заказ.'
                },
                {
                    tag: 'p',
                    content: 'Вся информация о заказе отправлена вам на почту paper.goods@gmail.com'
                }
            ]
        },
        {
            elem: 'footer',
            content: {
                block: 'button',
                text: 'Вернуться в магазин',
                url: 'catalog.html',
                mods: {
                    type: 'link',
                    theme: 'parket',
                    size: 'm',
                    view: 'action'
                }
            }
        }
    ];
})
