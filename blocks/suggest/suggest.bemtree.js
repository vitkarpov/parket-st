block('suggest').content()(function() {
    return [
        {
            elem: 'togglers',
            content: [
                'Похожие товары по ',
                {
                    elem: 'toggler',
                    mods: {
                        id: 0
                    },
                    content: 'оттенку'
                },
                ', ',
                {
                    elem: 'toggler',
                    mods: {
                        id: 1
                    },
                    content: 'материалу'
                },
                ', ',
                {
                    elem: 'toggler',
                    mods: {
                        id: 2
                    },
                    content: 'цене'
                }
            ]
        },
        {
            elem: 'content',
            current: 0
        },
        {
            elem: 'spin',
            content: {
                block: 'spin',
                mods: {size: 'l', theme: 'islands', visible: true}
            }
        }
    ];
})
