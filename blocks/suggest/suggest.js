modules.define('suggest', ['i-bem__dom'], function(provide, BEMDOM) {

var togglerName = 'suggest__toggler';
var itemsName = 'suggest__items';

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('toggler', 'click', this._onToggle, this);
            this.show(this.params.start);
        }
    },

    TOGGLER: 'suggest__toggler',
    ITEMS: 'suggest__items',

    _onToggle: function(e) {
        var toggler = $(e.currentTarget).bem(togglerName);

        this.show(toggler.getMod('id'));
    },

    show: function(id) {
        this.elem('toggler').each(function() {
            $(this).bem(togglerName).delMod('current');
        });
        this.elem('toggler', 'id', id).bem(togglerName).setMod('current');

        this.elem('items').each(function() {
            $(this).bem(itemsName).delMod('current');
        });
        this.elem('items', 'id', id).bem(itemsName).setMod('current');
    }
}));

});
