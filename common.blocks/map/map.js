modules.define('map', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js': function() {
            this.loadApi();
        }
    },

    loadApi: function() {
        var script = document.createElement('script');
        script.src = "https://maps.googleapis.com/maps/api/js";
        script.onload = this.initMap.bind(this);

        document.body.appendChild(script);
    },

    initMap: function() {
        var mapOptions = {
            scrollwheel: false,
            center: new google.maps.LatLng(this.params.lat, this.params.lng),
            zoom: this.params.zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(this.domElem[0], mapOptions);
        new google.maps.Marker({
            position: {
                lat: this.params.lat,
                lng: this.params.lng
            },
            map: map,
            icon: {
                url: 'data:image/png;base64,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'
            }
        });
    }
}));

});
