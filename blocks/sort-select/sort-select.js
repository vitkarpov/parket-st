modules.define('sort-select', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.findBlockInside('select').on('change', this.submit, this);
        }
    },

    submit: function() {
        this.domElem.submit();
    }
}));

});
