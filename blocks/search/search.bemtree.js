block('search').content()(function() {
    return [
        {
            elem: 'form',
            tag: 'form',
            content: {
                block: 'input',
                mods: {
                    'search-results': true
                },
                js: false,
                name: 'query',
                val: 'Ламинат Quic Step 32 класс 12 мм'
            }
        },
        {
            block: 'search-results'
        }
    ];
})
