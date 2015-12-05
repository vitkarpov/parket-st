block('filter-clear')(
    content()(function() {
        return [
            {
                block: 'icon',
                mods: {
                    type: 'refresh'
                }
            },
            applyNext()
        ];
    })
)
