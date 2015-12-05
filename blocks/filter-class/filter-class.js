modules.define('filter-class', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('filter-class', {
    onSetMod: {
        'js': function() {
            this.bindTo('item', 'change', this._onChange);
        }
    },

    _onChange: function(e) {
        var item = $(e.currentTarget).bem('filter-class__item');
        var $checkbox = $(e.currentTarget).find('input');

        item.setMod('checked', $checkbox.is(':checked'));
    }
}));

});
