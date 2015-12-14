block('counter')(
    content()(function() {
        return [
            {
                elem: 'control',
                mods: {
                    minus: true
                },
                content: '-'
            },
            {
                elem: 'control',
                mods: {
                    plus: true
                },
                content: '+'
            },
            {
                elem: 'input',
                tag: 'input',
                attrs: {
                    name: this.ctx.name,
                    value: this.ctx.value
                }
            }
        ]
    }),

    elem('input')(
        attrs()({
            type: 'number',
            min: 0
        })
    )
)
