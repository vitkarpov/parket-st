block('cart-empty').content()(function() {
    return [
        {
            elem: 'caption',
            content: 'В корзине пока пусто'
        },
        {
            elem: 'text',
            content: 'Но в нашем каталоге есть из чего выбрать'
        },
        {
            block: 'button',
            url: 'catalog-all.html',
            mods: {
                type: 'link',
                theme: 'parket',
                size: 'm',
                view: 'action'
            },
            text: 'Перейти в каталог'
        }
    ];
})
