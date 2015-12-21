block('catalog-item')(
    attrs()(function() {
        var cnt = this.ctx.content;

        return {
            title: cnt.title || cnt.caption,
        };
    }),

    js()(true),

    content()(function() {
        var cnt = applyNext();
        var props = [];

        if (cnt.props) {
            var l = cnt.props.length;

            props.push({
                elem: 'props',
                tag: 'ul',
                content: cnt.props.map(function(item, n) {
                    var isLast = n === l - 1;

                    return {
                        tag: 'li',
                        content: [
                            item,
                            (!isLast) ? ',' : ''
                        ]
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
                        (function() {
                            if (!cnt.label) {
                                return;
                            }
                            return {
                                elem: 'label',
                                content: ({
                                    'day': 'Товар дня',
                                    'price': 'Лучшая цена',
                                    'discount': 'Скидка'
                                })[cnt.label]
                            }
                        }()),
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
                            tag: 'input',
                            attrs: { type: 'hidden', name: 'id', value: 100500 },
                        },
                        {
                            tag: 'input',
                            attrs: { type: 'hidden', name: 'action', value: 'add' },
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

        attrs()({ action: 'cart.html' }),

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
            href: 'card.html'
        })
    )
)
