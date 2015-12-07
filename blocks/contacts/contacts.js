modules.define('contacts', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('modal');

            this.bindTo('details', 'click', function() {
                this.popup.setMod('visible', true);
            });
        }
    }
}));

});
