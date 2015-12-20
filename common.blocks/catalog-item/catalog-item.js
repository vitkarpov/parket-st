modules.define('catalog-item', ['i-bem__dom'], function(provide, BEMDOM) {

// GOD, FORGIVE ME!
window.count = 0;
window.price = 0;

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.elem('extra').on('submit', this._onSubmit.bind(this));
            },
            '': function() {
                this.elem('extra').off('submit');
            }
        }
    },

    _onSubmit: function(e) {
        var $form = $(e.target);

        $.get($form.attr('action'), $form.serialize())
            .then(this._onSuccess.bind(this), this._onFail.bind(this));

        e.preventDefault();
    },

    _onSuccess: function(e) {
        // var data = JSON.parse(e);

        var data = {};
        var id = 'uniq' + Math.random();

        data.count = ++window.count;
        data.price = window.price + 3000;
        window.price = data.price;
        data.html = '<div class="popup-cart-list__item" data-id="'+ id +'"> <div class="cart-item"> <div class="cart-item__content"> <div class="cart-item__preview"><img src="dummy/cart-preview-2.jpg"/></div><div class="cart-item__caption">Массивная доска Coswick Дуб Молочный шоколад с мраморной крошкой</div><div class="cart-item__price">54 432 <span class="rub">&#8381;</span></div><div class="cart-item__props">8 упаковок</div><div class="cart-item__props">18,14 <span class="m2">м<sup>2</sup></span></div><div class="cart-item__props">3 000 <span class="rub">&#8381;</span>/<span class="m2">м<sup>2</sup></span></div></div></div><a href="cart.html?action=remove&id=100500" class="popup-cart-list__remove" title="Удалить из Корзины" data-id="'+ id +'"><span class="icon icon_type_close"></span></a></div>'

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
