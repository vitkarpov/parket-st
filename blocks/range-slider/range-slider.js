modules.define('range-slider', ['i-bem__dom', 'objects', 'jquery__range'], function(provide, BEMDOM, _) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            var params = _.extend(this.params, {
                width: '100%',
                showScale: false,
                scale: [],
                isRange: true,
                theme: 'parket'
            });

            this.findElem('controller').jRange(params);
        }
    }
}));

});
