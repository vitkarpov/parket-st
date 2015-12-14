block('main-content').mod('search', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Результаты поиска']
            },
            {
                elem: 'caption',
                content: 'Результаты поиска'
            },
            {
                block: 'search'
            }
        ]
    };
});
