block('main-content').mod('certs', true).content()(function() {
    return {
        block: 'page',
        elem: 'container',
        content: [
            {
                block: 'crumbs',
                items: ['Сертификаты']
            },
            {
                elem: 'caption',
                content: 'Сертификаты'
            },
            {
                block: this.block,
                elem: 'wrapper',
                mods: {
                    'aside-right': true
                },
                content: [
                    {
                        elem: 'aside',
                        content: {
                            block: 'aside',
                            mods: {certs: true}
                        }
                    },
                    {
                        elem: 'content',
                        content: {
                            block: 'certs'
                        }
                    }
                ]
            }
        ]
    };
});
