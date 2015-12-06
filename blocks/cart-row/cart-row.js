modules.define('cart-row', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('counter').on('change', this.update, this);
        }
    },

    update: function(e) {
        var blockCounter = e.target;
        var blockPrice = this.findBlockInside('price');

        var count = blockCounter.getCurrentVal();
        var price = blockPrice.params.unit * count;

        blockPrice.setCurrentVal(price);
        blockPrice.render();
    }
}));

});
