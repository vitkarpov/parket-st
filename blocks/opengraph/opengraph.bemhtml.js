block('opengraph').replace()(function() {
    return this.ctx.props.map(function(item) {
        return {
            tag: 'meta',
            attrs: {
                name: item.name,
                content: item.content
            }
        }
    })
})
