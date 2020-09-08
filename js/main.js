AOS.init();

new Splide('.splide', {
    arrows: false,
    autoplay: true
}).mount();

class LocationMap {
    constructor(id, view, zoomLevel) {
        this.id = id
        this.view = view;
        this.zoomLevel = zoomLevel
        this.tokenMap =
            'pk.eyJ1IjoieW9nYWFsdGFyaXoiLCJhIjoiY2tjdzI3M3k0MDl1ejJ2bGE0Y3l0M3FoeCJ9.4t6IoUSf2tqc1hjdRC7KhQ'
        this.L = L
        this.map = this.L.map(this.id).setView(this.view, this.zoomLevel)

        this.coordinates = [5.5447089, 95.3300688]
    }

    init() {
        this.L.tileLayer(
            'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: this.tokenMap
        }).addTo(this.map);

        this.L.marker(this.coordinates).addTo(this.map)
    }
}

const HQ = new LocationMap('hq-map', [5.548290, 95.323753], 13).init()
