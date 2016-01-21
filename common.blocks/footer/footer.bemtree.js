block('footer').content()(function() {
    return [
        {
            elem: 'copy',
            content: '&copy; Паркет СТ, 2015'
        },
        {
            elem: 'address',
            content: [
                '8 495 779 65 31',
                { tag: 'br' },
                'Москва, Нахимовский проспект, 24'
            ]
        },
        {
            elem: 'creator',
            tag: 'a',
            attrs: {
                href: 'http://www.studio-v.ru/',
                target: '_blank'
            },
            content: 'Создание сайта — Студия «Восхождение»'
        }
    ]
})
