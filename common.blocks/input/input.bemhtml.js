block('input')(
    content()(function() {
        var box = applyNext();

        if (this.ctx.required) {
            box.content.attrs = {};
            box.content.attrs.required = true;
        }

        return box;
    })
)
