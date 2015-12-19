modules.define('cart-preview', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-preview', {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            this.bindTo('click', this._onClick);
        }
    },

    _onClick: function(e) {
        this.popup.setMod('visible', true);
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

        var popupCartList = this.popup.findBlockInside('popup-cart-list');

        BEMDOM.append(
            popupCartList.domElem,
            state.html
        );
        popupCartList.emit('change');
    }
}));

});
