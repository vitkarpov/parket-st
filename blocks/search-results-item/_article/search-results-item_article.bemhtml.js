block('search-results-item').mod('article', true)(
    content()(function() {
        return [
            {
                elem: 'caption',
                content: {
                    block: 'link',
                    content: this.ctx.caption
                }
            },
            {
                tag: 'p',
                content: this.ctx.text
            }
        ];
    })
)
