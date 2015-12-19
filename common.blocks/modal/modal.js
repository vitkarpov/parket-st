modules.define('modal', function(provide, Modal) {

provide(Modal.decl({
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base();
                this.bindTo('close', 'click', this._onClickClose);
            }
        }
    },

    _onClickClose: function() {
        this.setMod('visible', false);
    }
}));

});
