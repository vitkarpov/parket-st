block('form-search').content()(function() {
    return [
        {
            block: 'input',
            mix: {
                block: this.block,
                elem: 'input'
            },
            mods: {
                'search-results': true,
                size: 'big'
            }
        },
        {
            elem: 'clear'
        }
    ]
})
