modules.define('colors', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('colors', {
    onSetMod: {
        'js': function() {
            this.bindTo('item', 'change', this._onChange);
        }
    },

    _onChange: function(e) {
        var item = $(e.currentTarget).bem('colors__item');
        var $checkbox = $(e.currentTarget).find('input');

        item.setMod('checked', $checkbox.is(':checked'));
    }
}));

});
