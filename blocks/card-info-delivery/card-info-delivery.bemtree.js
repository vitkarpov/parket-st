block('card-info-delivery').content()(function() {
    return [
        {
            elem: 'text',
            content: [
                'Доставка по Москве от 500&nbsp;',
                {block: 'rub'},
                {tag: 'br'},
                'Самовывоз — бесплатно'
            ]
        },
        {
            elem: 'link',
            content: {
                block: 'link',
                url: 'delivery.html',
                content: 'Подробнее о доставке'
            }
        },
    ];
})
