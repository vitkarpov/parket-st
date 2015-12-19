modules.define('popup-cart-list', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    _onRemoveClick: function(e) {
        var id = $(e.currentTarget).data('id');

        BEMDOM.destruct(this.findItemById(id));
        this.emit('change');
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
