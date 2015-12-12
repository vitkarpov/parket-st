modules.define('nav-footer', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('arrow', 'click', this._onClickArrow);
        }
    },

    _onClickArrow: function() {
        this.toggleMod('contracted');
    }
}));

});
