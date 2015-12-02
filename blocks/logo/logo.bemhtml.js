block('logo')(
    content()(function() {
        return 'Паркет СТ';
    }),

    match(function() { return !this.ctx.main; })(
        tag()('a'),

        attrs()({
            href: 'welcome.html'
        })
    )
)
