modules.define('aside', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: this.name, modName: 'type', modVal: 'main' }, {
    onSetMod: {
        'js': function() {
            this.switcher = this.findBlockInside('radio-group');

            this._show(this.switcher.getVal());
            this.switcher.on('change', this._onChange, this);
        }
    },

    _onChange: function() {
        this._show(this.switcher.getVal());
    },

    _findItem: function(id) {
        return this.elem('item').filter('[data-id = "' + id + '"]');
    },

    _show: function(id) {
        this.setMod(this.elem('item'), 'current', false);
        this.setMod(this._findItem(id), 'current', true);
    }
}))

})
