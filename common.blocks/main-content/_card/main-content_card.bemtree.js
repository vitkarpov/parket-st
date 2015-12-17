block('main-content').mod('card', true).content()(function() {
    return [
        {
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
                            content: [
                                {block: 'card-info'},
                                {block: 'card-info-delivery'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'page',
            elem: 'container',
            content: {
                block: this.block,
                elem: 'wrapper',
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {card2: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'card-info-suggest'
                        }
                    }
                ]
            }
        },
        {
            block: 'page',
            elem: 'container',
            content: {
                block: 'suggest'
            }
        }
    ];
})
