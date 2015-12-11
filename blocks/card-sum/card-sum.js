modules.define('card-sum', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.setState(this.getInitialState());
        }
    },

    getInitialState: function() {
        return {
            sum: this.elem('control').val()
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
        var sum = this.getState().sum;

        this.elem('val').text(sum);
        this.elem('control').val(sum);
    }
}));

});
