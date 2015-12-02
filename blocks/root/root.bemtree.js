block('root').replace()(function() {
    this.page = this.ctx.page;

    return {
        block: 'page',
        title: 'Паркет СТ',
        head: [
            { elem: 'css', url: '../all/all.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'https://yastatic.net/jquery/2.1.4/jquery.min.js' },
            { elem: 'js', url: '../all/all.min.js' }
        ]
    };
});
