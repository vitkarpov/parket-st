block('card-aside').content()(function() {
    return [
        {
            elem: 'preview',
            content: {
                tag: 'img',
                attrs: {
                    src: 'http://lorempixel.com/340/340/?' + Math.random(),
                    width: 340,
                    height: 340
                }
            }
        },
        {
            elem: 'caption',
            content: 'О производителе'
        },
        {
            elem: 'item',
            content: [
                {
                    elem: 'logo',
                    content: {
                        tag: 'img',
                        attrs: {
                            src: 'dummy/amigo.jpg',
                            width: 147,
                            height: 44
                        }
                    }
                },
                'Германия'
            ]
        },
        {
            elem: 'item',
            content: 'Компания Amigo производит массивную доску и паркет с 2004 года. За этот период времени продукция марки Amigo завоевала доверие покупателей по всему миру. Главным принципом компании было и остается совершенствование оборудования и, как следствие, производство только качественных товаров.'
        },
        {
            block: 'card-details'
        }
    ];
})
