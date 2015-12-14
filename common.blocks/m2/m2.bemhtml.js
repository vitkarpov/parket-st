block('m2')(
    tag()('span'),

    content()(function() {
        return [
            'м',
            {
                tag: 'sup',
                content: '2'
            }
        ]
    })
)
