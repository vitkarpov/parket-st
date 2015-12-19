modules.define('suggest', ['i-bem__dom'], function(provide, BEMDOM) {

var togglerName = 'suggest__toggler';
var itemsName = 'suggest__items';

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('toggler', 'click', this._onToggle, this);
            this.bindTo('refresh', 'click', this._onRefresh, this);

            this.show(this.params.start);
        }
    },

    TOGGLER: 'suggest__toggler',
    ITEMS: 'suggest__items',

    _onToggle: function(e) {
        var toggler = $(e.currentTarget).bem(togglerName);

        this.show(toggler.getMod('id'));
    },

    _onRefresh: function() {
        $.get(this.params.url)
            .then(this._onSuccess.bind(this));
    },

    _onSuccess: function(html) {
        BEMDOM.destruct(this.elem('items'));
        BEMDOM.append(this.elem('content'), html);

        this.show(this.params.start);
        this.findBlockInside('catalog-item');
    },

    show: function(id) {
        this.findElem('toggler').each(function() {
            $(this).bem(togglerName).delMod('current');
        });
        this.findElem('toggler', 'id', id).bem(togglerName).setMod('current');

        this.findElem('items').each(function() {
            $(this).bem(itemsName).delMod('current');
        });
        this.findElem('items', 'id', id).bem(itemsName).setMod('current');
    }
}));

});
