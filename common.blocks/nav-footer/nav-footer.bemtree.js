block('nav-footer').content()(function() {
    var page = this.page;
    var main = ([
        'Доставка и оплата',
        'Вопросы и ответы',
        'Информация',
        'О компании',
        'Контакты'
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                elem: 'caption',
                content: {
                    elem: 'link',
                    content: item
                }
            }
        };
    });

    return [
        {
            elem: 'main',
            content: main
        },
        (function() {
            if (page === 'catalog-all') {
                return;
            }
            return [
                {
                    block: 'catalog-all',
                    mix: {
                        block: 'nav-footer',
                        elem: 'catalog'
                    }
                },
                {
                    elem: 'arrow',
                    content: {
                        block: 'icon',
                        mods: {type: 'arrow-down'}
                    }
                }
            ];
        }())
    ];
})
