block('aside-teaser').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'Выбрать напольное покрытие для'
        },
        {
            elem: 'items',
            content: ([
                'гостиной',
                'прихожей',
                'офиса',
                'спальни',
                'кухни',
                'детской'
            ])
            .map(function(item) {
                return {
                    elem: 'item',
                    content: {
                        elem: 'link',
                        content: item
                    }
                }
            })
        }
    ]
})
