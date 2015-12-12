block('main-content').mod('collections', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Массивная доска', 'Классическая коллекция из дуба']
            },
            {
                block: this.block,
                elem: 'wrapper',
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {collections: true}
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
                                content: 'Классическая коллекция из дуба'
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
