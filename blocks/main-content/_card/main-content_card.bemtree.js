block('main-content').mod('card', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Каталог', 'Массивная доска', 'Kjopmann Дуб Экспрешен']
            },
            {
                block: this.block,
                elem: 'wrapper',
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {card: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'card-info'
                        }
                    }
                ]
            },
            {
                block: 'suggest'
            }
        ]
    };
})
