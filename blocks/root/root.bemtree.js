block('root').replace()(function() {
    this.page = this.ctx.page;

    return {
        block: 'page',
        title: 'Паркет СТ',
        head: [
            { elem: 'css', url: 'parket.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'https://yastatic.net/jquery/2.1.4/jquery.min.js' },
            { elem: 'js', url: 'parket.min.js' }
        ]
    };
});
