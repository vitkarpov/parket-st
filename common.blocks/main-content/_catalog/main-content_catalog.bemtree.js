block('main-content').mod('catalog', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        mods: {
            fluid: true
        },
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Массивная доска']
            },
            {
                block: this.block,
                elem: 'wrapper',
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {catalog: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: [
                            {
                                block: 'page',
                                elem: 'caption',
                                content: 'Массивная доска'
                            },
                            {
                                block: 'catalog'
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
})
