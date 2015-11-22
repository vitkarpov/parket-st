block('page').content()(function() {
    return [
        {block: 'header'},
        {block: 'main'},
        {block: 'footer'},
        {
            block : 'font',
            js: {
                url: 'https://fonts.googleapis.com/css?family=Ubuntu&subset=cyrillic-ext'
            }
        }
    ]
});
