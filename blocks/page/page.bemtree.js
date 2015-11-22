block('page').content()(function() {
    return [
        {block: 'header'},
        {block: 'nav-main'},
        {block: 'main'},
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
