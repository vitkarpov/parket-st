modules.define('price', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.render();
        }
    },

    setCurrentVal: function(val) {
        this._val = val;
    },

    getCurrentVal: function() {
        return this._val || (this._val = this.elem('input').val());
    },

    render: function() {
        var val = this.getCurrentVal();

        this.elem('count').text(val);
        this.elem('input').val(val);
    }
}));

});
