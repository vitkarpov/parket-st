modules.define('filter-clear', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('filter-clear', {
    onSetMod: {
        'js': function() {
            this.bindTo('click', this._onClick);
        }
    },

    _onClick: function() {
        this.emit('clear');
    }
}));

});
