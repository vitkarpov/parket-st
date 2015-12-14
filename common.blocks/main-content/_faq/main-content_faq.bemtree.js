block('main-content').mod('faq', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Вопросы и ответы']
            },
            {
                elem: 'caption',
                content: 'Вопросы и ответы'
            },
            {
                block: 'faq'
            }
        ]
    };
});
