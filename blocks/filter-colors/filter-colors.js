modules.define('filter-colors', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('filter-colors', {
    onSetMod: {
        'js': function() {
            this.bindTo('item', 'change', this._onChange);
        }
    },

    _onChange: function(e) {
        var item = $(e.currentTarget).bem('filter-colors__item');
        var $checkbox = $(e.currentTarget).find('input');

        item.setMod('checked', $checkbox.is(':checked'));
    }
}));

});
