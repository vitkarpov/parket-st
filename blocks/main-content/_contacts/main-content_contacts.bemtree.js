block('main-content').mod('contacts', true).content()(function() {
    return {
        block: 'page',
        elem: 'wrapper',
        content: [
            {
                block: 'crumbs',
                items: ['Контакты']
            },
            {
                elem: 'caption',
                content: 'Контакты'
            },
            {
                block: 'contacts'
            }
        ]
    };
});
