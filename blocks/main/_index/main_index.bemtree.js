block('main').content()(function() {
    return [
        {
            block: 'page',
            elem: 'wrapper',
            mix: {
                block: this.block,
                elem: 'wrapper',
            },
            content: [
                {
                    block: this.block,
                    elem: 'aside',
                    content: {
                        block: 'aside',
                        mods: {type: 'main'}
                    }
                },
                {
                    block: this.block,
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
            ]
        },
        {
            block: 'company-info'
        }
    ];
})
