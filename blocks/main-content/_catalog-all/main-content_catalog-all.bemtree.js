block('main-content').mod('catalog-all', true).content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог']
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
