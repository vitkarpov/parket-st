modules.define('cart-popup', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('popup-cart-list').on(
                'empty',
                this._onCartEmpty,
                this
            )
        }
    },

    _onCartEmpty: function() {
        this.setMod('empty', true);
        this.findBlockOutside('popup').redraw();
    }
}));

});
