modules.define('font', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl('font', {
    onSetMod: {
        'js': function() {
            var css = this.getFontFromCache();

            if (css) {
                this.injectStyles(css);
            } else {
                $.get(this.params.url, this.onLoaded.bind(this));
            }

            // :)
            console.log('Need a scalable front-end? https://github.com/vitkarpov')
        }
    },

    getFontFromCache: function() {
        return window.localStorage && window.localStorage[this.params.url];
    },

    injectStyles: function(css) {
        $('<style />')
            .html(css)
            .appendTo('head');
    },

    onLoaded: function(css) {
        this.injectStyles(css);
        window.localStorage.setItem(this.params.url, css);
    }
}));

});
