block('faq-form').content()(function() {
    var extend = this.extend;
    var items = ([
        {
            label: 'Ваше имя',
            name: 'name',
            val: 'Константин Константинопольский',
            type: 'text'
        },
        {
            label: 'E-mail',
            name: 'email',
            type: 'email'
        },
        {
            label: 'Ваш вопрос',
            name: 'qustion',
            type: 'textarea'
        }
    ])
    return [
        {
            elem: 'caption',
            content: 'Задать вопрос'
        },
        items.map(function(item) {
            return extend(item, {
                elem: 'item'
            });
        }),
        {
            elem: 'footer',
            content: [
                {
                    block: 'button',
                    mix: {
                        block: 'faq-form',
                        elem: 'submit'
                    },
                    mods: {
                        theme: 'parket',
                        view: 'plain',
                        type: 'submit'
                    },
                    text: 'Задать вопрос'
                },
                {
                    elem: 'captcha',
                    content: {
                        tag: 'img',
                        attrs: {
                            src: 'dummy/captcha.gif',
                            width: 320,
                            height: 85
                        }
                    }
                }
            ]
        }
    ];
})
