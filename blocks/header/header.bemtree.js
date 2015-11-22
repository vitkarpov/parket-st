block('header').content()(function() {
    return [
        {
            elem: 'item',
            content: {
                block: 'logo'
            }
        },
        {
            elem: 'item',
            content: [
                {
                    block: 'icon',
                    mods: {type: 'phone'}
                },
                '8 495 779–65–31'
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    block: 'icon',
                    mods: {type: 'pin'}
                },
                'Адрес магазина'
            ]
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'price',
                    attrs: {
                        'data-count': '12'
                    },
                    content: {
                        block: 'icon',
                        mods: {type: 'cart'}
                    }
                },
                '97 480 ',
                {
                    block: 'rub'
                }
            ]
        }
    ];
})
