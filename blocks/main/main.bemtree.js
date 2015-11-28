block('main').content()(function() {
    return [
        {
            elem: 'aside',
            content: {
                block: 'aside',
                mods: {type: 'main'}
            }
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'promo-slider'
                },
                {
                    block: 'catalog-list'
                }
            ]
        }
    ];
})
