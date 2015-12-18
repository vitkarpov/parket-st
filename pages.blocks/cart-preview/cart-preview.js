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
    },

    setVal: function(data) {
        this.setMod('has-items', data.count > 0);

        this.elem('icon').attr('data-count', data.count);
        this.elem('price-i').text(data.price);
    }
}));

});
