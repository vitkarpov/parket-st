block('order-contacts').content()(function() {
    generateId = this.generateId;

    return ([
        ['Ваше имя', 'text'],
        ['Телефон', 'phone'],
        ['E-mail', 'email'],
        ['Адрес', 'text']
    ])
    .map(function(item, n) {
        var val = '';
        var label = item[0];
        var type = item[1];
        var id = generateId();

        if (n === 0) {
            val = 'Константин Константинопольский'
        }

        return {
            block: 'order-label-group',
            for: id,
            label: label,
            type: type,
            content: [
                {
                    block: 'input',
                    mods: {
                        theme: 'parket',
                        type: type
                    },
                    id: id,
                    type: type,
                    val: val
                }
            ]
        };
    });
})
