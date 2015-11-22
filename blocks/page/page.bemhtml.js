block('page')(
    elem('wrapper')(
        content()(function() {
            return {
                elem: 'inner',
                content: applyNext()
            };
        })
    )
)
