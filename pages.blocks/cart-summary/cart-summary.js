modules.define('cart-summary', ['i-bem__dom', 'i-formatter-price'], function(provide, BEMDOM, formatterPrice) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.setState(this.getInitialState());
        }
    },

    getInitialState: function() {
        return {
            square: this.elem('control', 'type', 'square').val(),
            price: this.elem('control', 'type', 'price').val()
        }
    },

    getState: function() {
        return this._state;
    },

    setState: function(state, silent) {
        this._state = state;

        if (!silent) {
            this.render();
        }
    },

    render: function() {
        var state = this.getState();

        this._update('price', formatterPrice(state.price));
        this._update('square', state.square);
    },

    _update: function(id, val) {
        this.elem('val', 'type', id).text(val);
        this.elem('control', 'type', id).val(val);
    }
}));

});
