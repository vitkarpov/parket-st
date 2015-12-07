block('order-delivery').content()(function() {
    var id = this.generateId();

    return [
        {
            block: 'order-label-group',
            label: 'Город доставки',
            for: id,
            content: {
                block: 'select',
                mods: {
                    theme: 'parket',
                    mode: 'radio'
                },
                name: 'city',
                val: 1,
                id: id,
                options: [
                    {
                        val: 1,
                        text: 'Москва'
                    },
                    {
                        val: 2,
                        text: 'Ростов'
                    },
                    {
                        val: 3,
                        text: 'Санкт-Петербург'
                    }
                ]
            }
        }
    ];
})
