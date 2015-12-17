modules.define('cart', ['i-bem__dom', 'cart-row'], function(provide, BEMDOM, CartRow) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            CartRow.on(this.domElem, 'change', this._onChange, this);
        }
    },

    _onChange: function() {
        var vals = this.findBlocksInside('cart-row')
                .map(function(item) {
                    return item.getState();
                })
                .reduce(
                    function(prev, cur) {
                        var res = prev;

                        res.price += cur.price;
                        res.square += cur.square;

                        return res;
                    },
                    {price: 0, square: 0}
                );

        if (vals.price === 0) {
            this.setMod('empty', true);
            return;
        }

        this.findBlockInside('cart-summary').setState(vals);
    }
}));

});
