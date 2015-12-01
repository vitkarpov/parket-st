block('filter')(
    tag()('form'),

    attrs()({ action: '#' }),

    elem('item')(
        tag()('fieldset')
    )
)
