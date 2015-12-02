block('header').content()(function() {
    return [
        {
            elem: 'item',
            content: {
                block: 'logo',
                main: this.page === 'welcome'
            }
        },
        {
            elem: 'item',
            content: {
                elem: 'phone',
                content: [
                    {
                        block: 'icon',
                        mix: {block: 'header', elem: 'icon'},
                        mods: {type: 'phone'}
                    },
                    '8 495 779–65–31'
                ]
            }
        },
        {
            elem: 'item',
            content: [
                {
                    block: 'icon',
                    mix: {block: 'header', elem: 'icon'},
                    mods: {type: 'pin'}
                },
                'Адрес магазина'
            ]
        },
        {
            elem: 'item',
            content: {
                block: 'cart-preview'
            }
        }
    ];
})
