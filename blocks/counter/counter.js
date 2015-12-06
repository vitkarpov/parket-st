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
            count: count
        });
    },

    _onChange: function() {
        this.setState({
            count: this.elem('input').val()
        });
    },

    getInitialState: function() {
        return {
            count: this.elem('input').val()
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
        var count = this.getState().count;
        var factor = this.params.factor;

        if (count <= 0) {
            this.setState({ count: 1 });
            return;
        }

        this.elem('input').val(count);
        this.elem('count').text(Math.round(count * factor * 100) / 100);

        this.emit('change');
    }
}));

});
