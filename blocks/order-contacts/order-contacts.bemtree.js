block('order-contacts').content()(function() {
    return ([
        ['Ваше имя', 'text'],
        ['Телефон', 'phone'],
        ['E-mail', 'email'],
        ['Адрес', 'text']
    ])
    .map(function(item, n) {
        var val = '';

        if (n === 0) {
            val = 'Константин Константинопольский'
        }

        return {
            elem: 'item',
            content: [
                {
                    elem: 'label',
                    content: item[0]
                },
                {
                    elem: 'input',
                    content: {
                        block: 'input',
                        mods: {
                            theme: 'parket',
                            type: item[1]
                        },
                        type: item[1],
                        val: val
                    }
                }
            ]
        };
    });
})
