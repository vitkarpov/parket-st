block('nav-main').content()(function() {
    var menu = ([
        'Каталог товаров',
        'Скидки и акции',
        'Доставка',
        'Вопросы и ответы',
        'О компании',
        'Контакты'
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                elem: 'link',
                content: item
            }
        };
    });

    return [
        menu,
        {
            block: 'find',
            mix: {block: 'nav-main', elem: 'item'}
        }
    ]
})
