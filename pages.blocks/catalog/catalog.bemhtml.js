block('catalog')(
    js()(true),

    content()(function() {
        return [
            {
                elem: 'spin',
                content: {
                    block: 'spin',
                    mods: { theme: 'islands', size: 'l', visible: true }
                }
            },
            {
                elem: 'sizer'
            },
            applyNext()
        ];
    })
)
