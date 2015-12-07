block('link')(
    js()(false)
)

block('link').match(function() { return !this.ctx.url })(
    tag()('span')
)
