block('card-details').content()(function() {
    var items = [
        {
            term: 'Покрытие дерева',
            def: {
                val: 'Лак'
            }
        },
        {
            term: 'Порода дерева',
            def: {
                val: 'Бамбук'
            }
        },
        {
            term: 'Тон',
            def: {
                val: 'светло-коричневый'
            }
        },
        {
            term: 'В упаковке',
            def: {
                val: 2.21,
                unit: {block: 'm2'}
            }
        },
        {
            term: 'Длина',
            def: {
                val: 960,
                unit: 'мм'
            }
        },
        {
            term: 'Ширина',
            def: {
                val: 96,
                unit: 'мм'
            }
        },
        {
            term: 'Толщина',
            def: {
                val: 15,
                unit: 'мм'
            }
        }
    ];

    return [
        {
            elem: 'caption',
            content: 'Подробное описание'
        },
        items.map(function(item) {
            var term = item.term;
            var def = item.def;

            return {
                elem: 'item',
                content: [
                    {
                        elem: 'term',
                        content: term
                    },
                    {
                        elem: 'def',
                        content: [
                            def.val,
                            '&nbsp;',
                            def.unit
                        ]
                    }
                ]
            }
        })
    ];
})
