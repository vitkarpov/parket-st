modules.define('cart-row', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.findBlockInside('counter').on('change', this.update, this);
                this.setState(this.getInitialState());

                this.bindTo('remove', 'click', this.remove, this);
            }
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
    },

    setState: function(state) {
        this._state = state;
        this.emit('change');
    },

    getState: function() {
        return this._state;
    },

    remove: function() {
        this.setState({
            square: 0,
            price: 0
        });
        BEMDOM.destruct(this.domElem);
    }
}));

});
