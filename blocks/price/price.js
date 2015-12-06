modules.define('price', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.setState(this.getInitalState());
        }
    },

    getInitalState: function() {
        return {
            price: this.elem('input').val()
        };
    },

    setState: function(state) {
        this._state = state;
        this.render();
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        var price = this.getState().price;

        this.elem('count').text(price);
        this.elem('input').val(price);
    }
}));

});
