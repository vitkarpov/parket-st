modules.define('form-search', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this._onClickSpace = this._onClickSpace.bind(this);

            this.findBlockInside('input').on('change', this._onChange, this);
        },
        'visible': {
            'true': function() {
                BEMDOM.doc.on('click', this._onClickSpace);
            },
            '': function() {
                BEMDOM.doc.off('click', this._onClickSpace);
            }
        }
    },

    _onClickSpace: function(e) {
        if ($(e.target).closest(this.domElem).length) {
            return;
        }
        if ($(e.target).closest(this.getFind().domElem).length) {
            return;
        }
        this.setMod('visible', false);
    },

    _onChange: function(e) {
        var input = e.target;
        this.setMod('filled', input.getVal().length > 0);
    },

    getFind: function() {
        return this.findBlockOutside('page').findBlockInside('find');
    }
}));

});
