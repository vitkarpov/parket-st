block('sort-select').content()(function() {
    return {
        block: 'select',
        mods: {
            theme: 'parket',
            mode: 'radio-check'
        },
        name: 'sort',
        text: 'Сортировать',
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
