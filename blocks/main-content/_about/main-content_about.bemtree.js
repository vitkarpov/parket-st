block('main-content').mod('about', true).content()(function() {
    return [
        {
            block: 'page',
            elem: 'container',
            content: [
                {
                    block: 'crumbs',
                    items: ['О компании']
                },
                {
                    elem: 'caption',
                    content: 'О компании'
                },
                {
                    block: 'about',
                    mods: {
                        'img': 'right'
                    },
                    caption: 'Магазин «Паркет-СТ» успешно работает на рынке с 1999 года',
                    content: [
                        {
                            tag: 'p',
                            content: 'Мы предлагаем широкий выбор напольных покрытий самых известных и качественных производителей. Всю продукцию вы можете посмотреть вживую в нашем шоу-руме по адресу г. Москва, Нахимовский проспект д. 24, строительная выставка Экспострой (схема проезда). У нас Вы можете получить грамотную консультацию, задать любой интересующий Вас вопрос, а при желании — Вы всегда можете приехать к нам и на месте посмотреть понравившийся товар.'
                        }
                    ]
                }
            ]
        },
        {
            block: 'advantages',
            mods: {
                bright: true
            }
        },
        {
            block: 'page',
            elem: 'container',
            content: {
                block: 'about',
                mods: {
                    'img': 'left'
                },
                caption: 'Наши предки хорошо знали все преимущества натурального напольного покрытия',
                content: [
                    {
                        tag: 'p',
                        content: 'Древесные полы известны человечеству уже несколько тысячелетий. В холод он сохранял драгоценное тепло, летом же — участвовал в теплоотдаче. Сегодня на волне эко-тенденций натуральное напольное покрытие бьет рекорды продаж и прочно занимает ведущую позицию на рынке отделочных материалов. Стремясь удовлетворить любое пожелание своих покупателей, магазин «ПаркетСТ», вот уже на протяжении семи лет своего успешного существования, рад предложить Вашему вниманию любое напольное покрытие самых известных производителей. Здесь представлены наиболее востребованные модели напольного покрытия, которое отличают высокое качество, замечательная практичность, весьма высокая цветовая палитра и демократичные цены, ориентированные на самого широкого потребителя.'
                    },
                    {
                        tag: 'p',
                        content: 'Помимо оформления интернет-заказа, воочию убедиться в гармоничном союзе цены и качества продукции можно в нашем магазине, расположенном по адресу: г.  Москва, Нахимовский проспект, дом 24, строительная выставка «Экспострой». Наши эксперты окажут Вам консультативную помощь, ответят на все интересующие Вас вопросы.'
                    }
                ]
            }
        }
    ];
})
