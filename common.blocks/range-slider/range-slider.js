modules.define('range-slider', ['i-bem__dom', 'objects', 'jquery__range', 'i-formatter-price'], function(provide, BEMDOM, _, $, formatPrice) {

var global = this.global;

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            var params = _.extend(this.params, {
                width: '100%',
                showScale: false,
                scale: [],
                isRange: true,
                theme: 'parket',
                format: this._format.bind(this),
                onstatechange: debounce(this._onChanged.bind(this), 100)
            });

            this.findElem('controller').jRange(params);
        }
    },

    _onChanged: function() {
        this.emit('change', this);
    },

    _format: function(val) {
        if (this.params.price) {
            return formatPrice(val)
        }
        return val;
    }
}));

function debounce(fn, timeout, invokeAsap, ctx) {
    var timer;

    if(arguments.length === 3 && typeof invokeAsap !== 'boolean') {
        ctx = invokeAsap;
        invokeAsap = false;
    }
    return function() {
        var args = arguments;
        ctx || (ctx = this);

        invokeAsap && !timer && fn.apply(ctx, args);

        global.clearTimeout(timer);

        timer = global.setTimeout(function() {
            invokeAsap || fn.apply(ctx, args);
            timer = null;
        }, timeout);
    };
}

});
