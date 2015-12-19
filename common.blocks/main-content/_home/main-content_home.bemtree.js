block('main-content').mod('home', true).content()(function() {
    return [
        {
            block: 'page',
            elem: 'container',
            mix: {
                block: this.block,
                elem: 'wrapper',
            },
            content: [
                {
                    block: this.block,
                    elem: 'aside',
                    content: {
                        block: 'aside',
                        mods: {main: true}
                    }
                },
                {
                    block: this.block,
                    elem: 'content',
                    content: [
                        {
                            block: 'promo-slider'
                        },
                        {
                            block: 'suggs-toggler',
                            captions: ['Лучшие', 'Новые', 'Популярные'],
                            current: 1,
                            content: [
                                {block: 'catalog-list'},
                                {block: 'catalog-list'},
                                {block: 'catalog-list'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'company-info'
        }
    ];
})
