block('aside').mod('main', true)(
    js()(true),

    elem('menu')(
        tag()('nav')
    ),

    elem('groups')(
        content()(function() {
            return [
                applyNext(),
                {
                    elem: 'spin',
                    content: {
                        block: 'spin',
                        mods : {theme : 'islands', size : 'l', visible : true}
                    }
                }
            ]
        })
    )
)
