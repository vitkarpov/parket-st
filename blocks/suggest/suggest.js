modules.define('suggest', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('toggler', 'click', this._onToggle, this);
        }
    },

    _onToggle: function(e) {
        var link = $(e.currentTarget);
        var id = link.data('id');

        this.elem('toggler').each(function() {
            $(this).bem('link').setMod('current', false);
        });
        link.bem('link').setMod('current');

        this.elem('items').each(function() {
            $(this).bem('suggest__items').setMod('current', false);
        });
        this.elem('items', 'n', id).bem('suggest__items').setMod('current', true);
    }
}));

});
