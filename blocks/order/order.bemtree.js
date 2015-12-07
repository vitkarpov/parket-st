block('order').content()(function() {
    return [
        {
            elem: 'left',
            content: [
                {
                    elem: 'section',
                    content: [
                        {
                            elem: 'caption',
                            content: '1. Контактные данные'
                        },
                        {
                            block: 'order-contacts'
                        }
                    ]
                },
                {
                    elem: 'section',
                    content: [
                        {
                            elem: 'caption',
                            content: '2. Способ доставки'
                        },
                        {
                            block: 'order-delivery'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'right',
            content: [
                {
                    elem: 'section',
                    content: [
                        {
                            elem: 'caption',
                            content: '2. Способ доставки'
                        },
                        {
                            elem: 'edit',
                            content: 'Изменить'
                        }
                    ]
                },
                {
                    elem: 'section',
                    content: {
                        block: 'order-list'
                    }
                },
                {
                    elem: 'section',
                    content: [
                        {
                            block: 'order-sum'
                        },
                        {
                            elem: 'submit',
                            content: {
                                block: 'button',
                                mods: {
                                    theme: 'parket',
                                    view: 'plain'
                                },
                                text: 'Оформить заказ'
                            }
                        },
                        {
                            elem: 'info',
                            content: 'Оплатить заказ можно только наличными при получении от курьера или самовывозе'
                        }
                    ]
                }
            ]
        }
    ]
})
