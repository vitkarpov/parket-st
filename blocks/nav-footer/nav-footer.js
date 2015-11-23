modules.define('nav-footer', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('nav-footer', {
    onSetMod: {
        'js': function() {
            this.bindTo('arrow', 'click', this._onClickArrow);
        }
    },

    _onClickArrow: function() {
        this.toggleMod('contacted');
    }
}));

});
