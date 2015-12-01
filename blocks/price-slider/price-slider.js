modules.define('price-slider', ['i-bem__dom', 'objects', 'jquery__range'], function(provide, BEMDOM, _) {

provide(BEMDOM.decl('price-slider', {
    onSetMod: {
        'js': function() {
            var params = _.extend(this.params, {
                width: '100%',
                showScale: false,
                scale: [],
                isRange: true
            });

            this.findElem('range').jRange(params);
        }
    }
}));

});
