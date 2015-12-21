block('page').content()(function() {
    var mods = {};
    var navFooter = {};

    mods[this.page] = true;

    if (this.page !== 'order' && this.page !== 'order-done') {
        navFooter = {block: 'nav-footer'};
    };

    return [
        {block: 'header'},
        {block: 'nav-main'},
        {block: 'form-search'},
        {
            block: 'main-content',
            mods: mods
        },
        navFooter,
        {block: 'footer'},
        {
            block : 'font',
            js: {
                url: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500&subset=cyrillic-ext'
            }
        }
    ]
});
