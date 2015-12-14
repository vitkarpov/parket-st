block('sort-select').content()(function() {
    return {
        block: 'select',
        mods: {
            theme: 'parket',
            mode: 'radio'
        },
        name: 'sort',
        val: 1,
        options: [
            {
                val: 1,
                text: 'Максимальная скидка'
            },
            {
                val: 2,
                text: 'Дешевле'
            },
            {
                val: 3,
                text: 'Дороже'
            }
        ]
    }
})
