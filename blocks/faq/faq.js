modules.define('faq', ['i-bem__dom', 'jquery__masonry'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.elem('items').masonry({
                itemSelector: '.faq__item',
                columnWidth: 480
            });
            this.setMod('loaded', true);

            this.popup = this.findBlockInside('modal');
            this.bindTo('ask', 'click', this._onClickAsk, this);
        }
    },

    _onClickAsk: function() {
        this.popup.setMod('visible', true);
    }
}));

});
