block('map')(
    js()({
        lat: 55.6716914,
        lng: 37.5788164,
        zoom: 15
    }),

    content()(function() {
        return {
            elem: 'spin',
            content: {
                block : 'spin',
                mods : {theme : 'islands', size : 'l', visible : true}
            }
        };
    })
)
