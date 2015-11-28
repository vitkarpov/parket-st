block('main').mod('catalog-all', true).content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'crumbs',
                mix: {
                    block: this.block,
                    elem: 'crumbs'
                }
            },
            {
                elem: 'caption',
                content: 'Каталог'
            },
            {
                block: 'catalog-all'
            }
        ]
    };
})
