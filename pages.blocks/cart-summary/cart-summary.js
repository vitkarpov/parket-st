modules.define('cart-summary', ['i-bem__dom'], function(provide, BEMDOM) {

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
        this._update('price');
        this._update('square');
    },

    _update: function(id) {
        var state = this.getState();

        this.elem('val', 'type', id).text(state[id]);
        this.elem('control', 'type', id).val(state[id]);
    }
}));

});
