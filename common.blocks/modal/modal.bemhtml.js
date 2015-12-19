block('modal')(
    elem('content').content()(function() {
        return [
            {
                elem: 'close',
                content: {
                    block: 'icon',
                    mods: { type: 'close' }
                }
            },
            applyNext()
        ]
    })
)
