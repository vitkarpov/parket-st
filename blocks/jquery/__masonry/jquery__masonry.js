modules.define('jquery__masonry', ['jquery'], function(provide, $) {

/**
 * NOTE: Masonry wants window as global scope
 */
!function() {
    /* borschik:include:../node_modules/masonry-layout/dist/masonry.pkgd.js */
}.call(this.global);

provide($);

});
