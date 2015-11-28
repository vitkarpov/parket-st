block('footer').content()(function() {
    return [
        {
            block: 'link',
            url: 'http://www.studio-v.ru/',
            mix: {
                block: this.block,
                elem: 'creator'
            },
            content: 'Создание сайта — Студия «Восхождение»'
        },
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
        }
    ]
})
