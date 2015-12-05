block('filter-class').content()(function() {
    return ([
        '31', '32', '33', '34'
    ])
    .map(function(item) {
        return {
            elem: 'item',
            content: {
                block: 'checkbox',
                mods: {
                    type: 'round'
                },
                name: 'class',
                value: item,
                text: item
            }
        };
    })
})
