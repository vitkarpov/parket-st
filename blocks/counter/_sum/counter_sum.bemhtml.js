block('counter').mod('sum', true).content()(function() {
    return [
        applyNext(),
        {
            elem: 'sum',
            content: [
                {
                    tag: 'span',
                    elem: 'count'
                },
                '&nbsp;',
                this.ctx.unit
            ]
        }
    ]
})
