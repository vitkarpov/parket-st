block('company-info').content()(function() {
    return [
        {
            elem: 'item',
            content: [
                {
                    block: 'page',
                    elem: 'container',
                    content: [
                        {
                            block: this.block,
                            elem: 'caption',
                            content: 'О компании'
                        },
                        {
                            block: this.block,
                            elem: 'content',
                            content: [
                                {
                                    block: this.block,
                                    elem: 'image',
                                    content: {
                                        block: 'image',
                                        url: 'http://lorempixel.com/290/220/?' + Math.random()
                                    }
                                },
                                {
                                    block: this.block,
                                    elem: 'subcaption',
                                    content: 'Лучшие напольные покрытия для вашего дома'
                                },
                                {
                                    block: this.block,
                                    elem: 'text',
                                    content: [
                                        {
                                            tag: 'p',
                                            content: 'Интернет-магазин «Паркет-СТ» успешно работает на рынке с 1999 года. Мы предлагаем широкий выбор напольных покрытий самых известных и качественных производителей. Всю продукцию вы можете посмотреть вживую в нашем шоу-руме по адресу Москва, Нахимовский проспект 24, строительная выставка Экспострой.'
                                        },
                                        {
                                            tag: 'p',
                                            content: 'У нас Вы можете получить грамотную консультацию, задать любой интересующий Вас вопрос, а при желании — Вы всегда можете приехать к нам и на месте посмотреть понравившийся товар.'
                                        }
                                    ]
                                },
                                {
                                    block: 'address-pin',
                                    mix: {
                                        block: this.block,
                                        elem: 'address'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem: 'item',
            content: {
                block: 'advantages'
            }
        }
    ]
})
