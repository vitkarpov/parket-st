block('popup-details-info').content()(function() {
    var items = [
        ['ИП', 'Иванютина Светлана Николаевна'],
        ['Расчетный счет', '4089275425483462345'],
        ['Банк', 'ОАО «Банк Москвы»'],
        ['Кор.счет', '1234135139537452'],
        ['БИК', '0443253132']
    ];
    return [
        {
            elem: 'caption',
            content: 'Реквизиты компании'
        },
        {
            elem: 'items',
            content: items.map(function(item) {
                return {
                    elem: 'item',
                    content: [
                        {
                            elem: 'term',
                            content: item[0]
                        },
                        {
                            elem: 'def',
                            content: item[1]
                        }
                    ]
                };
            })
        }
    ]
})
