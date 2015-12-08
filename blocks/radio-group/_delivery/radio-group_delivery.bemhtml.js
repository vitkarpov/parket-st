block('radio-group').mod('delivery', true)(
    tag()('div'),

    content()(function() {
        var ctx = this.ctx;
        var radios = [];

        /**
         * Собирает блоки radio в массив radios
         */
        (function getRadiosOnly(items, res) {
            items.forEach(function(ctx) {
                if (ctx.forEach) {
                    return getRadiosOnly(ctx, res);
                }
                if (ctx.block && ctx.block === 'radio') {
                    res.push(ctx);
                }
            })
        }(applyNext(), radios));

        return radios.map(function(radio, n) {
            return {
                elem: 'item',
                content: [
                    radio,
                    {
                        elem: 'info',
                        content: ctx.info[n]
                    }
                ]
            };
        })
    })
)
