modules.define('cart-preview', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-preview', {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            this.bindTo('click', this._onClick);
        }
    },

    _onClick: function(e) {
        this.popup.setMod('visible', true);
    }
}));

});
