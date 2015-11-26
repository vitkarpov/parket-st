modules.define('aside-menu-item', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: this.name }, {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            var _onMouserEnter = this._onMouserEnter.bind(this);
            var _onMouserLeave = this._onMouserLeave.bind(this);

            this.popup.bindTo('mouseenter', _onMouserEnter);
            this.popup.bindTo('mouseleave', _onMouserLeave);
            this.bindTo('mouseenter', _onMouserEnter);
            this.bindTo('mouseleave', _onMouserLeave);
        }
    },

    _onMouserEnter: function() {
        clearTimeout(this._closeTimer);
        this._openTimer = setTimeout(this._open.bind(this), 200);
    },

    _onMouserLeave: function() {
        clearTimeout(this._openTimer);
        this._closeTimer = setTimeout(this._close.bind(this), 200);
    },

    _open: function() {
        if (!this._openTimer) {
            return;
        }
        this.popup.setMod('visible', true);
        this._openTimer = null;

        this.setMod('active', true);
    },

    _close: function() {
        if (!this._closeTimer) {
            return;
        }
        this.popup.setMod('visible', false);
        this._closeTimer = null;

        this.setMod('active', false);
    }
}))

})
