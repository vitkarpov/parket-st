block('main-content').mod('catalog', true).content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
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
                            block: 'filter'
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
                            }
                        ]
                    }
                ]
            }
        ]
    };
})
