({
    shouldDeps: [
        'card-calc',
        'card-sum',
        'popup-coverage-info',
        {
            block: 'button',
            mods: {
                theme: 'parket',
                type: 'submit',
                view: 'plain'
            }
        },
        {
            block: 'link',
            mods: {
                type: 'pseudo'
            }
        },
        {
            block: 'checkbox-group',
            mods: { theme : 'parket' }
        },
        {
            block: 'modal',
            mods: {theme: 'islands', autoclosable: true}
        }
    ]
})
