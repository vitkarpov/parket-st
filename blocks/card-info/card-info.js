modules.define('card-info', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('checkbox-group').on('change', this._onChangeCheckbox, this);
            this.findBlockInside('card-calc').on('change', this._onChangePrice, this);

            this.setState(this.getInitialState());
        }
    },

    _onChangePrice: function(e) {
        var calc = e.target;

        this.setState({
            sum: calc.getPrice()
        });
    },

    _onChangeCheckbox: function(e) {
        var checkbox = e.target.getCheckboxes()[0];

        var cur = this.getState().sum;
        var sum;

        if (checkbox.hasMod('checked')) {
            sum = Math.ceil(1.05 * cur);
        } else {
            sum = this.getState().old;
        }

        this.setState({
            old: cur,
            sum: sum
        });
    },

    getInitialState: function() {
        return {
            sum: this.findBlockInside('card-sum').getState().sum
        }
    },

    setState: function(state, silent) {
        this._state = state;

        if (!silent) {
            this.render();
        }
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        this.findBlockInside('card-sum').setState({
            sum: this.getState().sum
        });
    }
}));

});
