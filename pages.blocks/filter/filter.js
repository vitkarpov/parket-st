modules.define('filter', ['i-bem__dom', 'filter-clear'], function(provide, BEMDOM, FilterClear) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            FilterClear.on(this.domElem, 'clear', this._onClear, this);
        }
    },

    _onClear: function(e) {
        var block = e.target;
        var id = block.params.target;

        this.clear(id);
    },

    clear: function(id) {
        var scope;

        if (id === 'filter') {
            scope = this;
        } else {
            scope = this.elem('item', id).bem('filter__item');
        }

        if (!scope) {
            return;
        }

        scope.findBlocksInside('checkbox').forEach(function(block) {
            block.setMod('checked', false);
        });
    }
}));

});
