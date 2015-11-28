block('advantages').content()(function() {
    return ([
        {
            icon: 'options',
            caption: 'Большой выбор',
            text: 'популярных и проверенных временем напольных покрытий. Любые&nbsp;цвета&nbsp;и размеры.'
        },
        {
            icon: 'prices',
            caption: 'Демократичные цены',
            text: 'регулярные акции и скидки'
        },
        {
            icon: 'consult',
            caption: 'Консультации',
            text: 'и помощь в выборе напольных покрытий'
        },
        {
            icon: 'delivery',
            caption: 'Быстрая доставка',
            text: 'по Москве и Московской области нашим автотранспортом'
        }
    ])
    .map(function(item) {
        return {
            elem: 'item',
            mods: {icon: item.icon},
            content: [
                {
                    elem: 'caption',
                    content: item.caption
                },
                {
                    elem: 'text',
                    content: item.text
                }
            ]
        };
    })
})
