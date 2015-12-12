block('main-content').mod('brand', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Coswick']
            },
            {
                elem: 'caption',
                content: 'Coswick'
            },
            {
                block: 'brand-info'
            },
            {
                block: 'digest',
                mods: {
                    type: 'brand'
                }
            }
        ]
    };
});
