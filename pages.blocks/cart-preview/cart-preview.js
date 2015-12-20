modules.define('cart-preview', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-preview', {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            this.bindTo('click', this._onClick);
            this.popup.findBlockInside('popup-cart-list').on('change', this._onCartItemsChanged, this);
        }
    },

    _onClick: function(e) {
        this.popup.setMod('visible', true);
    },

    _onCartItemsChanged: function(e) {
        var items = e.target.findElem('item');

        var count = items.length;
        var price = 0;

        items.each(function() {
            price += +$(this).attr('data-price');
        });

        this.setState({
            count: count,
            price: price
        });
    },

    setState: function(state) {
        this._state = state;
        this.render();
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        var state = this.getState();

        this.setMod('has-items', state.count > 0);

        this.elem('icon').attr('data-count', state.count);
        this.elem('price-i').text(state.price);
    }
}));

});
