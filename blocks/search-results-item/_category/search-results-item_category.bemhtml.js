block('search-results-item').mod('category', true)(
    content()(function() {
        return [
            {
                elem: 'preview',
                content: {
                    tag: 'img',
                    attrs: {
                        src: this.ctx.preview
                    }
                }
            },
            {
                elem: 'caption',
                content: {
                    block: 'link',
                    content: this.ctx.caption
                }
            },
            {
                elem: 'range',
                content: [
                    'от&nbsp;',
                    this.ctx.range,
                    '&nbsp;',
                    {block: 'rub'}
                ]
            }
        ];
    })
)
