modules.define('checkbox', function(provide, Checkbox) {

provide(Checkbox.decl({
    _onChange: function() {
        this.__base.apply(this, arguments);
        this.emit('change', this);
    }
}));

});
