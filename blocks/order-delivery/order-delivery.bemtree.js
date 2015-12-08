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
        },
        {
            elem: 'item',
            content: [
                {
                    block : 'radio',
                    mods : { theme : 'parket', checked : true },
                    text : 'Самовывоз из магазина — Бесплатно'
                },
                {
                    elem: 'text',
                    content: 'Забрать заказ можно из нашего магазина по адресу Нахимовский проспект, 24, выставка «Экспострой», павильон 1, место 34'
                }
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    block : 'radio',
                    mods : { theme : 'parket' },
                    text : 'Курьерская доставка — 1 800₽ по Москве (за МКАД 20₽/км)'
                },
                {
                    elem: 'text',
                    content: 'По Москве 1800 рублей, теплых полов – 500 рублей. В регионы любой транспортной компанией на ваш выбор по ее тарифам'
                }
            ]
        },
        {
            elem: 'item',
            content: {
                block: 'link',
                url: '#',
                content: 'Условия доставки'
            }
        }
    ];
})
