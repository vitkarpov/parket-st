modules.define('input', ['i-bem__dom', 'jquery__masked'], function(provide, BEMDOM, $, Input) {

provide(Input.decl({ modName: 'type', modVal: 'phone' }, {
    onSetMod: {
        'js': function() {
            this.elem('control').mask('(999) 999-99-99')
        }
    }
}));

});
