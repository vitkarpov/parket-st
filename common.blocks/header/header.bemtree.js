block('header').content()(function() {
    return [
        {
            elem: 'item',
            content: {
                block: 'logo',
                main: this.page === 'home'
            }
        },
        {
            elem: 'item',
            tag: 'a',
            attrs: {
                href: 'tel:+74957796531'
            },
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
            tag: 'a',
            attrs: {
                href: 'contacts.html'
            },
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
