block('suggest').content()(function() {
    return [
        {
            elem: 'togglers',
            content: [
                'Похожие товары по ',
                {
                    elem: 'toggler',
                    id: 0,
                    current: true,
                    content: 'оттенку'
                },
                ', ',
                {
                    elem: 'toggler',
                    id: 1,
                    content: 'материалу'
                },
                ', ',
                {
                    elem: 'toggler',
                    id: 2,
                    content: 'цене'
                }
            ]
        },
        {
            elem: 'content',
            current: 0
        }
    ];
})
