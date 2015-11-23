block('aside').mod('type', 'main').content()(function() {
    return [
        {
            block: 'radio-group',
            mix: {block: 'aside', elem: 'radio'},
            mods: {type : 'button'},
            val: 'categories',
            options: [
                {val: 'categories', text: 'Категории'},
                {val: 'brands', text: 'Бренды'}
            ]
        }
    ]
})
