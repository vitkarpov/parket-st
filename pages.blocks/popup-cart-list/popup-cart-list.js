modules.define('popup-cart-list', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    _onRemoveClick: function(e) {
        var $link = $(e.currentTarget);
        var id = $link.data('id');
        var href = $link.attr('href');

        $.get(href).then(function(e) {
            var data = JSON.parse(e);

            this.findBlockOutside('page').findBlockInside('cart-preview').setState({
                count: data.count,
                price: data.price
            });

            BEMDOM.destruct(this.findItemById(id));
            this.emit('change');

        }.bind(this));

        e.preventDefault();
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
