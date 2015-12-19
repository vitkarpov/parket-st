modules.define('cart-popup', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('popup-cart-list').on(
                'change',
                this._onCartItemsChanged,
                this
            )
        }
    },

    _onCartItemsChanged: function(e) {
        var hasItems = e.target.findElem('item').length > 0;

        this.setMod('empty', !hasItems);
        this.findBlockOutside('popup').redraw();
    }
}));

});
