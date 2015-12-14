block('main-content').mod('contacts', true).content()(function() {
    return [
        {
            block: 'page',
            elem: 'container',
            content: [
                {
                    block: 'crumbs',
                    items: ['Контакты']
                },
                {
                    elem: 'caption',
                    content: 'Контакты'
                }
            ]
        },
        {
            block: 'contacts'
        }
    ]
});
