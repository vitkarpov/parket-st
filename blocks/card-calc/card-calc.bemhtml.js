block('card-calc')(
    js()(function() {
        return {factor: this.ctx.square}
    }),

    content()(function() {
        return [
            {
                elem: 'item',
                name: 'square',
                val: Math.ceil(this.ctx.square * this.ctx.count)
            },
            '&nbsp;',
            {block: 'm2'},
            {
                elem: 'eql',
                content: '='
            },
            {
                elem: 'item',
                name: 'count',
                val: this.ctx.count
            },
            ' упаковок по&nbsp;',
            this.ctx.square,
            '&nbsp;',
            {block: 'm2'}
        ];
    })
)

block('card-calc')(
    elem('item')(
        tag()('span'),

        content()(function() {
            return {
                block: 'counter',
                mods: {
                    vertical: true,
                    type: this.ctx.name
                },
                js: true,
                value: this.ctx.val,
                name: this.ctx.name
            }
        })
    ),

    elem('eql').tag()('span')
)
