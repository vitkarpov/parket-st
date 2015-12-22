modules.define('cart-preview', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('cart-preview', {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            this.bindTo('content', 'click', this._onClick);

            this.setState(this.getInitialState(), true);
        }
    },

    _onClick: function(e) {
        var state = this.getState();

        if (state.count > 0) {
            e.preventDefault();
            this.popup.setMod('visible', true);
        }
    },

    getInitialState: function() {
        return {
            count: this.params.count,
            price: this.params.price
        }
    },

    setState: function(state, silent) {
        this._state = state;

        if (!silent) {
            this.render();
        }
    },

    getState: function() {
        return this._state;
    },

    render: function() {
        var state = this.getState();

        if (this.hasMod('has-items') && state.count > 0) {
            this.setMod('touched', true);
            setTimeout(function() {
                this.setMod('touched', false);
            }.bind(this), 300);
        }
        this.setMod('has-items', state.count > 0);

        this.elem('icon').attr('data-count', state.count);
        this.elem('price').text(state.price);
    }
}));

});
