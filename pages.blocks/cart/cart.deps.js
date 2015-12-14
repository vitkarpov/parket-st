({
    shouldDeps: [
        'cart-table',
        'cart-summary',
        'cart-row',
        {
            block: 'counter',
            mods: {
                sum: true
            }
        },
        'price',
        {
            block: 'button',
            mods: {
                theme: 'parket',
                type: 'submit',
                view: 'plain'
            }
        }
    ]
})
