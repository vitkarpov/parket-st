modules.define('popup-cart-list', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.checkEmpty();
        }
    },

    _onRemoveClick: function(e) {
        var id = $(e.currentTarget).data('id');

        BEMDOM.destruct(this.findItemById(id));
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
