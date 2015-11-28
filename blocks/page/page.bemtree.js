block('page').content()(function() {
    var mods = {};

    mods[this.page] = true;

    return [
        {block: 'header'},
        {block: 'nav-main'},
        {
            block: 'main',
            mods: mods
        },
        {block: 'nav-footer'},
        {block: 'footer'},
        {
            block : 'font',
            js: {
                url: 'https://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic-ext'
            }
        }
    ]
});
