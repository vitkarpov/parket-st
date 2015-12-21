modules.define('order', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('radio-group')
                    .on('change', this._onChangeDelivery, this);
        }
    },

    _onChangeDelivery: function(e) {
        var bRadioChecked = e.target.findBlockInside({ block: 'radio', modName: 'checked', modVal: true });
        var bSum = this.findBlockOutside('order').findBlockInside('order-sum');

        var sign = (bRadioChecked.params.delivery) ? 1 : -1;
        var sum = bSum.getState().sum + sign * this.params["delivery-price"];

        bSum.setState({
            sum: sum,
            delivery: sign > 0
        });
    }
}));

});
