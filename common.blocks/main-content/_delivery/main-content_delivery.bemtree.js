block('main-content').mod('delivery', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Доставка и оплата']
            },
            {
                elem: 'caption',
                content: 'Доставка и оплата'
            },
            {
                block: this.block,
                elem: 'wrapper',
                mods: {
                    'aside-right': true
                },
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {delivery: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'delivery'
                        }
                    }
                ]
            }
        ]
    };
});
