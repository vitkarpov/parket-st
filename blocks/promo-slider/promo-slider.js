modules.define('promo-slider', ['i-bem__dom', 'jquery__slider'], function(provide, BEMDOM) {

provide(BEMDOM.decl('promo-slider', {
    onSetMod: {
        'js': function() {
            this.findElem('content')
                .on('fotorama:ready', this._onSliderReady.bind(this))
                .fotorama({
                    width: '100%',
                    ratio: 4/3,
                    click: false
                });
        }
    },

    _onSliderReady: function() {
        this.setMod('ready', true);
        this.findBlockInside('spin').setMod('visible', false);
    }
}));

});
