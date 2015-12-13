modules.define('cart-row', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('counter').on('change', this.update, this);
            this.setState(this.getInitialState());
        }
    },

    getInitialState: function() {
        var counter = this.findBlockInside('counter').getState();
        var price = this.findBlockInside('price').params.price;

        return {
            square: counter.square,
            price: price * counter.count
        };
    },

    update: function(e) {
        var blockCounter = e.target;
        var blockPrice = this.findBlockInside('price');

        var count = blockCounter.getState().count;
        var price = blockPrice.params.price * count;

        blockPrice.setState({
            price: price
        });

        this.setState({
            square: blockCounter.getState().square,
            price: price,
        });
        this.emit('change');
    },

    setState: function(state) {
        this._state = state;
    },

    getState: function() {
        return this._state;
    }
}));

});
