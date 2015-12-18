modules.define('faq-form', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.domElem.on('submit', this._onSubmit.bind(this));
        }
    },

    _onSubmit: function(e) {
        $.post(this.domElem.attr('action'), this.domElem.serialize())
            .then(this._onSuccess.bind(this), this._onFail.bind(this));

        e.preventDefault();
    },

    _onSuccess: function() {
        this.setMod('done', true);
    },

    _onFail: function() {
        this.setMod('failed', true);
    }
}));

});
