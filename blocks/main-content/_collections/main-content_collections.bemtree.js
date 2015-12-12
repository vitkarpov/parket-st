block('main-content').mod('collections', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Массивная доска', 'Coswick']
            },
            {
                elem: 'caption',
                content: 'Массивная доска Coswick'
            },
            {
                block: 'brand-info'
            },
            {
                block: 'digest',
                mods: {
                    type: 'collections'
                }
            }
        ]
    };
});
