block('nav-main').content()(function() {
    var menu = ([
        ['Каталог товаров', 'catalog-all.html'],
        ['Скидки и акции', '#'],
        ['Доставка', 'delivery.html'],
        ['Вопросы и ответы', '#'],
        ['О компании', 'about.html'],
        ['Контакты', 'contacts.html']
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                elem: 'link',
                url: item[1],
                content: item[0]
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
