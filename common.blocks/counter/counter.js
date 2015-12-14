modules.define('counter', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.setState(this.getInitialState());

            this.elem('input').change(this._onChange.bind(this));
            this.bindTo('control', 'click', this._onClickControl, this);
        }
    },

    _onClickControl: function(e) {
        var control = $(e.target).bem('counter__control');
        var count = this.elem('input').val();

        if (control.hasMod('plus')) {
            count++
        } else if (control.hasMod('minus')) {
            count--;
        }
        this.setState({
            count: count,
            square: this._getSquare(count)
        });
    },

    _onChange: function() {
        var count = this.elem('input').val();

        this.setState({
            count: count,
            square: this._getSquare(count)
        });
    },

    _getSquare: function(count) {
        var factor = this.params.factor;
        return Math.round(count * factor * 100) / 100;
    },

    getInitialState: function() {
        var count = this.elem('input').val();

        return {
            count: count,
            square: this._getSquare(count)
        }
    },

    setState: function(state, silent) {
        this._state = state;

        if (state.count <= 0) {
            this.setState({
                count: 1,
                square: this._getSquare(1)
            });
            return;
        }

        if (!silent) {
            this.render();
            this.emit('change');
        }
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        var state = this.getState();

        this.elem('input').val(state.count);
        this.elem('count').text(state.square);
    }
}));

});
