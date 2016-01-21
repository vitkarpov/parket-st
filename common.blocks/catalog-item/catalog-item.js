modules.define('catalog-item', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.elem('extra').on('submit', this._onSubmit.bind(this));

                if (Modernizr.touch) {
                    this.domElem.on('click', this._onClick.bind(this));
                    this.bindToDoc('click', this._onClickDoc);
                }
            },
            '': function() {
                this.elem('extra').off('submit');
                this.domElem.off('click');
                this.unbindToDoc('click', this._onClickDoc);
            }
        }
    },

    _onSubmit: function(e) {
        var $form = $(e.target);

        $.get($form.attr('action'), $form.serialize())
            .then(this._onSuccess.bind(this), this._onFail.bind(this));

        e.preventDefault();
    },

    _onClick: function(e) {
        if (!this.hasMod('active')) {
            e.preventDefault();
        }
        this.setMod('active', true);
    },

    _onClickDoc: function(e) {
        if ($(e.target).closest(this.domElem).length) {
            return;
        }
        this.setMod('active', false);
    },

    _onSuccess: function(e) {
        var data = JSON.parse(e);

        this.findBlockOutside('page').findBlockInside('cart-preview').setState({
            price: data.price,
            count: data.count
        });

        var popupCartList = this.findBlockOutside('page').findBlockInside('popup-cart-list');
        BEMDOM.append(
            popupCartList.domElem,
            data.html
        );
        popupCartList.emit('change');
    },

    _onFail: function(e) {
        this.elem('extra').submit();
    }
}));

});
