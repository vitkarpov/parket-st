block('main-content').mod('home', true).content()(function() {
    return [
        {
            block: 'page',
            elem: 'container',
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
                        mods: {main: true}
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
