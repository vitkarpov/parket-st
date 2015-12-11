block('card-sum')(
    js()(true),

    content()(function() {
        return [
            'Итого — ',
            {
                tag: 'span',
                elem: 'val',
                content: this.ctx.val
            },
            '&nbsp;',
            {
                block: 'rub'
            },
            {
                elem: 'control',
                tag: 'input',
                attrs: {
                    name: 'sum',
                    type: 'hidden',
                    value: this.ctx.val
                }
            }
        ]
    })
)
