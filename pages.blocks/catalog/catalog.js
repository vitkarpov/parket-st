modules.define('catalog', ['i-bem__dom', 'jquery__masonry'], function(provide, BEMDOM) {

provide(BEMDOM.decl('catalog', {
    onSetMod: {
        'js': {
            'inited': function() {
                this._onResize();

                this.domElem.masonry({
                    itemSelector: '.catalog__item',
                    columnWidth: '.catalog__sizer',
                    percentPosition: true
                })

                this._onResize = this._onResize.bind(this);
                BEMDOM.win.on('resize', this._onResize);

                this.setMod('ready');
            },
            '': function() {
                BEMDOM.win.off('resize', this._onResize);
            }
        },
        'small': {
            'true': function() {
                if (!this.hasMod('ready')) {
                    return;
                }
                this.domElem.masonry('layout');
            },
            '': function() {
                this.domElem.masonry('layout');
            }
        }
    },

    TRESHHOLD_SMALL: 800,

    _onResize: function() {
        if (this.domElem.width() < this.TRESHHOLD_SMALL) {
            this.setMod('small');
        } else {
            this.delMod('small');
        }
    }
}));

});
