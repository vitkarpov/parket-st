modules.define('range-slider', ['i-bem__dom', 'objects', 'jquery__range', 'i-formatter-price'], function(provide, BEMDOM, _, $, formatPrice) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            var params = _.extend(this.params, {
                width: '100%',
                showScale: false,
                scale: [],
                isRange: true,
                theme: 'parket',
                format: this._format.bind(this)
            });

            this.findElem('controller').jRange(params);
        }
    },

    _format: function(val) {
        if (this.params.price) {
            return formatPrice(val)
        }
        return val;
    }
}));

});
