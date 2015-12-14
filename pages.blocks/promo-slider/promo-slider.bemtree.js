block('promo-slider').content()(function() {
    return [
        {
            elem: 'item',
            bg: 'http://lorempixel.com/700/500/?' + Math.random(),
            content: [
                {
                    elem: 'caption',
                    content: 'Balterio. Стиль. Качество. Простота'
                },
                {
                    elem: 'text',
                    content: 'Крупнейший завод компании расположен в самом сердце бельгийских Арденн в городке Vielsalm'
                }
            ]
        },
        {
            elem: 'item',
            bg: 'http://lorempixel.com/700/500/?' + Math.random(),
            content: [
                {
                    elem: 'caption',
                    content: 'Равновероятный интеграл по бесконечной области'
                },
                {
                    elem: 'text',
                    content: 'Мнимая единица последовательно поддерживает убывающий интеграл по ориентированной области, как и предполагалось.'
                }
            ]
        },
        {
            elem: 'item',
            bg: 'http://lorempixel.com/700/500/?' + Math.random(),
            content: [
                {
                    elem: 'caption',
                    content: 'Линейно зависимый лист Мёбиуса: предпосылки и развитие'
                },
                {
                    elem: 'text',
                    content: 'Интеграл Фурье, следовательно, расточительно искажает предел функции. Приступая к доказательству следует безапелляционно заявить, что сумма ряда ускоряет сходящийся ряд.'
                }
            ]
        }
    ];
})
