block('price').content()(function() {
    return [
        {
            elem: 'text',
            content: [
                {
                    elem: 'count',
                    tag: 'span',
                    content: this.ctx.value
                },
                '&nbsp;',
                {block: 'rub'}
            ]
        },
        {
            elem: 'sum',
            content: [
                this.ctx.js.price,
                {block: 'rub'},
                ' за упаковку'
            ]
        },
        {
            elem: 'input',
            tag: 'input',
            attrs: {
                type: 'hidden',
                value: this.ctx.value,
                name: this.ctx.name
            }
        }
    ];
})
