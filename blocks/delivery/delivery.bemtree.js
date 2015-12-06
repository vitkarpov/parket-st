block('delivery').content()(function() {
    return [
        {
            elem: 'text',
            tag: 'p',
            content: 'Для доставки по Москве и Московской области мы используем свой автотранспорт и гарантируем бережную перевозку напольных покрытий от двери до двери.'
        },
        {
            elem: 'items'
        },
        {
            elem: 'caption',
            content: 'Оплата'
        },
        {
            tag: 'p',
            content: 'Мы принимаем наличный и безналичный расчет, работаем с физическими и юридическими лицами'
        }
    ];
})

block('delivery').elem('items').content()(function() {
    return ([
        {
            caption: 'По Москве',
            content: [
                'Напольные покрытия — 1500 ₽',
                {tag: 'br'},
                'Теплый пол — 500 ₽',
                {tag: 'br'},
                '+ 20₽/км за МКАД'
            ]
        },
        {
            caption: 'В регионы',
            content: 'Любой транспортной компанией на ваш выбор по ее тарифам'
        }
    ])
    .map(function(item){
        return {
            elem: 'item',
            content: [
                {
                    elem: 'item-caption',
                    content: item.caption
                },
                {
                    tag: 'p',
                    content: item.content
                }
            ]
        }
    })
})
