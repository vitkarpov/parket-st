block('colors')(
    js()(true)
)

block('colors').elem('item')(
    tag()('label'),

    content()(function() {
        return [
            {
                elem: 'bg',
                tag: 'i',
                attrs: {
                    style: 'background-color: #' + this.ctx.value + ';'
                }
            },
            {
                tag: 'input',
                attrs: {
                    type: 'checkbox',
                    name: this.ctx.name,
                    value: this.ctx.value
                }
            }
        ]
    })
)
