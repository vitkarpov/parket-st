block('catalog-item')(
    attrs()(function() {
        var cnt = this.ctx.content;

        return {
            title: cnt.title || cnt.caption
        };
    }),

    content()(function() {
        var cnt = applyNext();
        var props = [];

        if (cnt.props) {
            props.push({
                block: 'props',
                content: cnt.props.map(function(item) {
                    return {
                        elem: 'item',
                        content: item
                    };
                })
            });
        }

        return {
            elem: 'content',
            content: [
                {
                    elem: 'link',
                    content: [
                        {
                            block: this.block,
                            elem: 'preview'
                        },
                        {
                            block: this.block,
                            elem: 'caption',
                            content: cnt.caption
                        },
                        {
                            block: this.block,
                            elem: 'prices',
                            mix: {
                                block: this.block,
                                elem: 'main-prices'
                            },
                            content: cnt.prices
                        }
                    ]
                },
                {
                    elem: 'extra',
                    content: [
                        props,
                        {
                            elem: 'prices',
                            content: cnt.prices
                        },
                        {
                            block: 'button',
                            mix: {
                                block: this.block,
                                elem: 'button'
                            },
                            mods: {
                                theme: 'parket',
                                view: 'action',
                                type: 'submit'
                            },
                            text: 'В корзину'
                        }
                    ]
                }
            ]
        }
    }),

    elem('extra')(
        tag()('form'),

        attrs()({ action: '#' }),

        content()(function() {
            return {
                elem: 'extra-i',
                content: applyNext()
            };
        })
    ),

    elem('extra-i').tag()('fieldset'),

    elem('preview').content()(function() {
        var n = Math.floor(Math.random() * 4) + 1;

        return {
            block: 'image',
            url: 'dummy/catalog-item-' + n + '.jpg'
        }
    }),

    elem('prices').content()(function() {
        var cnt = applyNext();
        var old = cnt.old;
        var current = cnt.current;

        var res = [
            {
                elem: 'current',
                content: [
                    current,
                    {
                        block: 'rub'
                    }
                ]
            }
        ];
        if (old) {
            res.push({
                elem: 'old',
                content: [
                    old,
                    {
                        block: 'rub'
                    }
                ]
            });
        }

        return res;
    }),

    elem('link')(
        tag()('a'),

        attrs()({
            href: '#'
        })
    )
)
