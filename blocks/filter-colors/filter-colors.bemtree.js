block('filter-colors').content()(function() {
    return ([
        'f7f7f2', 'bb9c7d', '6c4928', '4b2b15',
        'bf8f5f', '885238', '2c181a', 'e3e1d4',
        'e3e1d4', '6a3832', 'e6b371', 'febcce',
        '816a5c', '7a7a7a', 'b04c1a', 'b1b0ac',
        '7b6b4d', '544845', 'bdcfcf'
    ])
    .map(function(color) {
        return {
            elem: 'item',
            name: 'filter-colors',
            value: color
        };
    })
})
