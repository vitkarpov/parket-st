modules.define('cart-popup', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-popup', {
    onSetMod: {
        'js': function() {
            this.findBlockInside('cart-list').on(
                'empty',
                this._onCartEmpty,
                this
            )
        }
    },

    _onCartEmpty: function() {
        this.setMod('empty', true);
    }
}));

});
