modules.define('cart-list', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-list', {
    _onRemoveClick: function(e) {
        var close = e.currentTarget.bem('cart-list__remove');
        var itemCurrent = close.findBlockOutside('item', 'cart-list');

        console.log(itemCurrent);
    },

    findItemById: function(id) {
        this.findElemInside
    }
}, {
    live : function() {
        this.liveBindTo('remove', 'click', function(e) {
            this._onRemoveClick(e);
        });
    }
}));

});
