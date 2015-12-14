block('checkbox').mod('type', 'color')(
    content()(function() {
        this.color = this.ctx.color;
        return applyNext();
    }),

    elem('box').content()(function() {
        return [
            {
                elem: 'color'
            },
            applyNext()
        ]
    }),

    elem('color')(
        tag()('i'),

        attrs()(function() {
            return {
                style: 'background-color: #' + this.color + ';'
            };
        })
    )
)
