block('cart-item')(
    js()(true),

    content()(function() {
        var ctx = this.ctx;

        return {
            elem: 'content',
            content: [
                {
                    elem: 'preview',
                    content: {
                        tag: 'img',
                        attrs: {src: ctx.src}
                    }
                },
                {
                    elem: 'caption',
                    content: ctx.caption
                },
                {
                    elem: 'price',
                    content: [
                        ctx.price,
                        ' ',
                        { block: 'rub' }
                    ]
                },
                {
                    block: 'props',
                    mix: {
                        block: 'cart-list', elem: 'props'
                    },
                    content: ctx.list.map(function(item, i) {
                        var unit;

                        if (i === 0) {
                            unit = 'упаковок';
                        } else if (i === 1) {
                            unit = {block: 'm2'};
                        } else if (i === 2) {
                            unit = [
                                {block: 'rub'},
                                '/',
                                {block: 'm2'}
                            ];
                        }

                        return {
                            elem: 'item',
                            content: [item, ' ', unit]
                        };
                    })
                }
            ]
        }
    })
)
