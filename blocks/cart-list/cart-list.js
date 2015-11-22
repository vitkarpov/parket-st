modules.define('cart-list', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-list', {
    onSetMod: {
        'js': function() {
            this.checkEmpty();
        }
    },

    _onRemoveClick: function(e) {
        var id = $(e.currentTarget).data('id');

        this.findItemById(id).remove();
        this.checkEmpty();
    },

    checkEmpty: function() {
        if (!this.findElem('item').length) {
            this.emit('empty');
        }
    },

    findItemById: function(id) {
        return this.findElem('item').filter('[data-id="' + id + '"]');
    }
}, {
    live : function() {
        this.liveBindTo('remove', 'click', function(e) {
            this._onRemoveClick(e);
        });
    }
}));

});
