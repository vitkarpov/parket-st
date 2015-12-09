block('main-content').mod('discounts', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Скидки и акции']
            },
            {
                block: this.block,
                elem: 'wrapper',
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {discounts: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: [
                            {
                                elem: 'select',
                                content: {
                                    block: 'sort-select'
                                }
                            },
                            {
                                block: 'page',
                                elem: 'caption',
                                mods: {
                                    colorful: true
                                },
                                content: 'Cидки и акции'
                            },
                            {
                                block: 'catalog',
                                mods: {discounts: true}
                            },
                            {
                                block: 'pager',
                                current: '1'
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
