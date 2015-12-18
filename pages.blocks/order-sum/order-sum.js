modules.define('order-sum', ['i-bem__dom', 'i-formatter-price'], function(provide, BEMDOM, formatPrice) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.setState(this.getInitialState());
        }
    },

    getInitialState: function() {
        return {
            sum: +this.elem('control').val()
        }
    },

    setState: function(state) {
        this._state = state;
        this.render();
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        var state = this.getState();

        this.elem('sum').text(formatPrice(state.sum));
        this.elem('control').val(state.sum);
    }
}));

});
