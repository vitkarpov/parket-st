modules.define('aside-menu-item', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block: this.name }, {
    onSetMod: {
        'js': function() {
            this.popup = this.findBlockInside('popup');
            this.popup.setAnchor(this);

            var _onMouserEnter = this._onMouserEnter.bind(this);
            var _onMouserLeave = this._onMouserLeave.bind(this);

            if (!Modernizr.touch) {
                this.popup.bindTo('mouseenter', _onMouserEnter);
                this.popup.bindTo('mouseleave', _onMouserLeave);
                this.bindTo('mouseenter', _onMouserEnter);
                this.bindTo('mouseleave', _onMouserLeave);
            } else {
                this.domElem.on('click', this._onClick.bind(this));
                this.bindToDoc('click', this._onClickOnDoc.bind(this));
            }
        }
    },

    _onClick: function(e) {
        if (!this.popup.hasMod('visible')) {
            e.preventDefault();
        }
        this.popup.setMod('visible', true);
        this.setMod('active', true);
    },

    _onClickOnDoc: function(e) {
        if ($(e.target).closest(this.domElem).length) {
            return;
        }
        this.popup.setMod('visible', false);
        this.setMod('active', false);
    },

    _onMouserEnter: function(e) {
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
