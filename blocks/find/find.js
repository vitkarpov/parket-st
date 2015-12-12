modules.define('find', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('click', function() {
                this.findForm().setMod('visible', true);
            });
        }
    },

    findForm: function() {
        return this.findBlockOutside('page').findBlockInside('form-search');
    }
}));

});
