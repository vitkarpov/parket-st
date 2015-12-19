block('suggs-toggler')(
    js()(function() {
        return {
            current: this.ctx.current
        }
    }),

    content()(function() {
        var ctx = this.ctx;

        return [
            {
                elem: 'header',
                content: ctx.captions.map(function(item, i) {
                    return {
                        elem: 'toggler',
                        mods: {
                            count: (i + 1)
                        },
                        content: item
                    }
                })
            },
            {
                elem: 'content',
                content: applyNext().map(function(item, i) {
                    return {
                        elem: 'item',
                        mods: {
                            count: (i + 1)
                        },
                        content: item
                    }
                })
            },
            {
                elem: 'spin',
                content: {
                    block: 'spin',
                    mods: {theme: 'islands', size: 'l', visible: true}
                }
            }
        ]
    })
)
