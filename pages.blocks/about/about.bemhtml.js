block('about')(
    content()(function() {
        return [
            {
                elem: 'image'
            },
            {
                elem: 'content',
                content: [
                    {
                        elem: 'caption',
                        content: this.ctx.caption
                    },
                    applyNext()
                ]
            }
        ]
    }),

    elem('caption').tag()('h2'),

    elem('image').content()(function() {
        return {
            tag: 'img',
            attrs: {
                src: 'http://lorempixel.com/645/420/?' + Math.random(),
                width: 645,
                height: 420
            }
        }
    })
)
