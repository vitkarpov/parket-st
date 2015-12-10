block('card-sum')(
    js()(true),

    content()(function() {
        var val = ('' + (this.ctx.val / 1000)).replace('.', ' ');

        return [
            'Итого — ',
            {
                tag: 'span',
                elem: 'val',
                content: val
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
