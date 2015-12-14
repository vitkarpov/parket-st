modules.define('aside', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: this.name, modName: 'main', modVal: true }, {
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
        return this.elem('group').filter('[data-id = "' + id + '"]');
    },

    _show: function(id) {
        this.setMod(this.elem('group'), 'current', false);
        this.setMod(this._findItem(id), 'current', true);
        this.findBlockInside('spin').setMod('visible', false);
    }
}))

})
