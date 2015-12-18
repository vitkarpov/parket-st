modules.define('catalog', ['i-bem__dom', 'jquery__masonry'], function(provide, BEMDOM) {

provide(BEMDOM.decl('catalog', {
    onSetMod: {
        'js': function() {
            this.domElem.masonry({
                itemSelector: '.catalog__item',
                columnWidth: '.catalog__sizer',
                percentPosition: true
            });
            this.setMod('ready')
        }
    }
}));

});
