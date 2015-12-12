block('faq')(
    js()(true),

    content()(function() {
        return [
            applyNext(),
            {
                elem: 'spin',
                content: {
                    block : 'spin',
                    mods : {theme : 'islands', size : 'l', visible : true}
                }
            }
        ]
    })
)
