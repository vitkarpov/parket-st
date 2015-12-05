block('filter-class').content()(function() {
    return ([
        '31', '32', '33', '34'
    ])
    .map(function(item) {
        return {
            elem: 'item',
            name: 'class',
            value: item,
            content: item
        };
    })
})
