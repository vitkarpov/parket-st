modules.define('suggs-toggler', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.bindTo('toggler', 'click', this._onTogglerClick, this);
            this.setCurrent(this.params.current || 1);
        }
    },

    _onTogglerClick: function(e) {
        var n = $(e.currentTarget).bem('suggs-toggler__toggler').getMod('count');
        this.setCurrent(n);
    },

    setCurrent: function(n) {
        this.elem('toggler').each(function() {
            $(this).bem('suggs-toggler__toggler').setMod('current', false);
        });
        this.elem('toggler', 'count', n).bem('suggs-toggler__toggler').setMod('current', true);

        this.elem('item').each(function() {
            $(this).bem('suggs-toggler__item').setMod('current', false);
        });
        this.elem('item', 'count', n).bem('suggs-toggler__item').setMod('current', true);
    }
}));

});
