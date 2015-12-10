modules.define('card-calc', ['i-bem__dom', 'counter'], function(provide, BEMDOM, Counter) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            Counter.on(this.domElem, 'change', this._onChangeCounter, this);
        }
    },

    _getAnotherTypeCounter: function(type) {
        return (type === 'square') ? 'count' : 'square';
    },

    _onChangeCounter: function(e) {
        var cur = e.target;
        var type = cur._extractModVal('type');

        var count = cur.getState().count;
        var res;

        if (type === 'count') {
            res = count * this.params.factor;
        } else if (type === 'square') {
            res = count / this.params.factor;
        }

        this.findBlockInside({
            block: 'counter',
            modName: 'type',
            modVal: this._getAnotherTypeCounter(type)
        })
            .setState({
                count: Math.ceil(res)
            }, true);
    }
}));

});
