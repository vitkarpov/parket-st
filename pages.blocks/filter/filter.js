modules.define('filter', ['i-bem__dom', 'filter-clear', 'range-slider', 'checkbox'], function(provide, BEMDOM, FilterClear, RangeSlider, Checkbox) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            FilterClear.on(this.domElem, 'clear', this._onClear, this);
            RangeSlider.on(this.domElem, 'change', this._onFilterChanged, this);
            Checkbox.on(this.domElem, 'change', this._onFilterChanged, this);
        }
    },

    _onClear: function(e) {
        var block = e.target;
        var id = block.params.target;

        this.clear(id);
    },

    /**
     * Вызывается при изменении любого из контролов в фильтре.
     * Делает пост-запрос на сервер по урлу указанному в параметрах блока (data-bem)
     */
    _onFilterChanged: function() {
        $.post(this.params.url, this.domElem.serialize())
            .done(this._onGotNewCollection.bind(this));
    },

    /**
     * Вызывается, когда сервер успешно ответил и передал новый html.
     * ВАЖНО: html должен представлять собой целый каталог (div.catalog)
     * с новыми вложенными элементами
     * @param  {String} html новый html, который пришел от сервера
     */
    _onGotNewCollection: function(html) {
        var catalog = this.findBlockOutside('page').findBlockInside('catalog');
        BEMDOM.replace(catalog.domElem, html);
    },

    clear: function(id) {
        var scope;

        if (id === 'filter') {
            scope = this;
        } else {
            scope = this.elem('item', id).bem('filter__item');
        }

        if (!scope) {
            return;
        }

        scope.findBlocksInside('checkbox').forEach(function(block) {
            block.setMod('checked', false);
        });
    }
}));

});
