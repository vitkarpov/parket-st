modules.define('catalog-item', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.elem('extra').on('submit', this._onSubmit.bind(this));
        }
    },

    _onSubmit: function(e) {
        var $form = $(e.target);

        $.get($form.attr('action'), $form.serialize())
            .then(this._onSuccess.bind(this), this._onFail.bind(this));

        e.preventDefault();
    },

    _onSuccess: function(e) {
        var data = JSON.parse(e);

        this.findBlockOutside('page').findBlockInside('cart-preview').setVal(data);
    },

    _onFail: function(e) {
        this.elem('extra').submit();
    }
}));

});
