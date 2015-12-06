modules.define('counter', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.render();
            this.elem('input').change(this._onChange.bind(this));

            this.bindTo('control', 'click', this._onClickControl, this);
        }
    },

    _onClickControl: function(e) {
        var control = $(e.target).bem('counter__control');
        var cur = this.elem('input').val();

        if (control.hasMod('plus')) {
            this.setCurrentVal(++cur);
        } else if (control.hasMod('minus')) {
            this.setCurrentVal(--cur);
        }
        this.render();
    },

    _onChange: function() {
        this.setCurrentVal(this.elem('input').val());
        this.render();
    },

    setCurrentVal: function(value) {
        this._cur = value;
    },

    getCurrentVal: function() {
        return this._cur || (this._cur = this.elem('input').val());
    },

    render: function() {
        var count = this.getCurrentVal();
        var k = this.params.unit;

        if (count <= 0) {
            return;
        }

        this.elem('input').val(count);
        this.elem('count').text(Math.round(count * k * 100) / 100);
        this.emit('change', count);
    }
}));

});
