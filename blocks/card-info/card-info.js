modules.define('card-info', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('checkbox-group').on('change', this._onChangeCheckbox, this);
            this.findBlockInside('card-calc').on('change', this._onChangePrice, this);

            this.domElem.on('submit', this._onSubmit.bind(this));
            this.bindTo('cancel', 'click', this._onClickCancel, this);

            this.popup = this.elem('calc-link').bem('card-info__calc-link').findBlockInside('modal');

            this.bindTo('calc-link', 'click', function() {
                this.popup.setMod('visible', true);
            });

            this.setState(this.getInitialState());
        }
    },

    _onChangeCheckbox: function(e) {
        var checkbox = e.target.getCheckboxes()[0];
        var isChecked = !!checkbox.getMod('checked');

        var sum = this.getState().sum;
        var cacheSum = this.getState().cacheSum;

        var delta = 0.05 * cacheSum;
        var sign = (isChecked) ? 1 : -1;

        this.setState({
            sum: sum + sign * delta,
            cacheSum: cacheSum
        });
    },

    _onChangePrice: function(e) {
        var calc = e.target;
        var sum = calc.getPrice();

        this.setState({
            sum: sum,
            cacheSum: sum
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
        var sum = this.findBlockInside('card-sum').getState().sum;

        return {
            cacheSum: sum,
            sum: sum
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
