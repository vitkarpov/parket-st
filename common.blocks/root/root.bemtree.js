block('root').replace()(function() {
    this.page = this.ctx.page;

    return {
        block: 'page',
        title: 'Паркет СТ',
        head: [
            { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Ubuntu:400,500&subset=cyrillic-ext' },
            { elem: 'css', url: 'parket.min.css' },
            {
                block: 'opengraph',
                props: [
                    {name: "og:type", content: "website"},
                    {name: "og:title", content: "Паркет-СТ"},
                    {name: "og:site_name", content: "parket-st"},
                    {name: "og:description", content: "Абсолютно любое напольное покрытие в Москве. Паркет и ламинат для вашего дома"},
                    {name: "og:url", content: "http://parket-st.ru/"},
                    {name: "og:image", content: "http://parket-st.ru/i/logo.png"},
                    {name: "og:image:type", content: "png"},
                    {name: "og:image:width", content: "220"},
                    {name: "og:image:height", content: "32"}
                ]
            }
        ],
        scripts: [
            { elem: 'js', url: 'https://yastatic.net/jquery/2.1.4/jquery.min.js' },
            { elem: 'js', url: 'parket.min.js' }
        ]
    };
});
