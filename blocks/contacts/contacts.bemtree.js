block('contacts').content()(function() {
    return [
        {
            block: 'map'
        },
        {
            elem: 'items',
            content: [
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'caption',
                            content: 'Наш магазин'
                        },
                        {
                            tag: 'p',
                            content: [
                                'Москва, Нахимовский проспект,&nbsp;24, выставка «Экспострой»,',
                                {tag: 'br'},
                                '1&nbsp;павильон, 34&nbsp;место'
                            ]
                        }
                    ]
                },
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'caption',
                            content: 'Отдел&nbsp;продаж'
                        },
                        {
                            tag: 'p',
                            content: '8&nbsp;495&nbsp;779–65–31'
                        },
                        {
                            tag: 'p',
                            content: '8&nbsp;963&nbsp;655–19–68'
                        }
                    ]
                },
                {
                    elem: 'item',
                    content: [
                        {
                            elem: 'caption',
                            content: 'Поддержка'
                        },
                        {
                            tag: 'p',
                            content: '8&nbsp;499&nbsp;515–30–75'
                        },
                        {
                            tag: 'p',
                            content: {
                                block: 'link',
                                url: '#',
                                content: 'parketst@yandex.ru'
                            }
                        }
                    ]
                }
            ]
        },
        {
            block: 'button',
            mods: {
                theme: 'parket',
                view: 'action'
            },
            text: 'Реквизиты компании'
        }
    ];
})
