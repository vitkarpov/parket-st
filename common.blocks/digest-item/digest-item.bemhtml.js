block('digest-item')(
    tag()('a'),

    attrs()(function() {
        return {
            href: 'catalog-collections.html',
            title: this.ctx.title
        }
    }),

    content()(function() {
        var ctx = this.ctx;
        var price = Math.floor(ctx.price / 1000) + ' ' + (ctx.price % 1000);

        return [
            {
                elem: 'caption',
                content: {
                    block: 'link',
                    content: ctx.caption
                }
            },
            {
                elem: 'price',
                content: [
                    'от&nbsp;',
                    price,
                    '&nbsp;',
                    {block: 'rub'}
                ]
            }
        ];
    })
)
