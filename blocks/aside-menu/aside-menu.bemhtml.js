block('aside-menu')(
    tag()('nav'),

    elem('item').replace()(function() {
        return {
            block: 'aside-menu-item',
            js: true,
            content: [
                {
                    block: 'link',
                    url: '#',
                    mix: {
                        block: this.block,
                        elem: 'link'
                    },
                    content: applyNext()
                },
                {
                    block: 'popup',
                    mods: {
                        target: 'anchor',
                        theme: 'islands'
                    },
                    directions: ['right-top'],
                    content: {
                        block: 'aside-menu',
                        elem: 'popup',
                        content: this.ctx.popupItems.map(function(item) {
                            if (Math.random() > 0.5) {
                                return false;
                            }
                            return {
                                block: 'link',
                                url: '#',
                                mix: {
                                    block: 'aside-menu',
                                    elem: 'link'
                                },
                                content: item
                            };
                        }).filter(Boolean)
                    }
                }
            ]
        };
    })
)
