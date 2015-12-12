modules.define('card-info', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('checkbox-group').on('change', this._onChangeCheckbox, this);
            this.findBlockInside('card-calc').on('change', this._onChangePrice, this);

            this.domElem.on('submit', this._onSubmit.bind(this));
            this.bindTo('cancel', 'click', this._onClickCancel, this);

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

    _onSubmit: function(e) {
        var data = this.domElem.serialize();
        this.elem('submit').bem('button').setMod('disabled', true);

        $.post(this.domElem.attr('action'), data)
            .then(this._onAdded.bind(this), this._onFailed.bind(this));

        e.preventDefault();
    },

    _onClickCancel: function(e) {
        $.get(this.elem('cancel').attr('href'))
            .then(this._onCanceled.bind(this));

        e.preventDefault();
    },

    _onAdded: function() {
        this.elem('submit').bem('button').setMod('disabled', false);
        this.setMod('added', true);
    },

    _onCanceled: function() {
        this.setMod('added', false);
    },

    _onFailed: function() {
        this.setMod('failed', true)
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
