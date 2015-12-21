block('textarea')(
    attrs()(function() {
        var old = applyNext();

        if (this.ctx.required) {
            old.required = true;
        }

        return old;
    })
)
