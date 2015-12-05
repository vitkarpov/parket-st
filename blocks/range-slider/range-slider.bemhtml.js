block('range-slider')(
    js()(function() {
        return this.ctx.range;
    }),

    content()(function() {
        return {
            elem: 'controller',
            value: this.ctx.value,
            name: this.ctx.name
        };
    }),

    elem('controller')(
        tag()('input'),
        attrs()(function() {
            return this.extend({
                type: 'hidden'
            }, {
                value: this.ctx.value,
                name: this.ctx.name
            });
        })
    )
)
