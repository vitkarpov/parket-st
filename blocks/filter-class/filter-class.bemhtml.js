block('filter-class')(
    js()(true),

    elem('item')(
        tag()('label'),

        content()(function() {
            return [
                {
                    tag: 'input',
                    attrs: {
                        type: 'checkbox',
                        name: this.ctx.name,
                        value: this.ctx.value
                    }
                },
                applyNext()
            ];
        })
    )
)
