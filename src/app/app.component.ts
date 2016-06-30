import {Component, Input, Output, EventEmitter } from '@angular/core';


import {Observable} from 'rxjs/Rx';
import {ProjectionService} from './projections/projection.service';
import {Projection} from './projections/projection';
import {GeocoderService} from './geocoder/geocoder.service';

import {PointToCoordListComponent} from './point-to-coords/point-to-coords.component';
import {CoordToPointsComponent} from './coord-to-points/coord-to-points.component';
import {BboxToCoordsComponent} from './bbox-to-coords/bbox-to-coords.component';

import {ShpToCoords} from './shp-to-coords/shp-to-coords.component';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdToolbar} from '@angular2-material/toolbar';

import {MdInput} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
declare var L: any;


@Component({
    moduleId: module.id,
    selector: 'app-root',
    directives: [PointToCoordListComponent, CoordToPointsComponent, BboxToCoordsComponent, ShpToCoords, MdToolbar, MdButton, MdInput, MdIcon],
    providers: [ProjectionService, GeocoderService],
    viewProviders: [MdIconRegistry],
    styleUrls: ['app.component.css'],
    templateUrl: 'app.component.html',

})
export class AppComponent {
    title = 'app works!';

    coordsToPoints = { lng: null, lat: null };
    pointToCoords = { lng: null, lat: null };
    bboxToCoords: any[] = [];
    shpParams;
    selected_projection_code = null;
    projSelected;
    public currentProjections = [];
    featureColor = {
        selected: { fillColor: '#FF0000', color: '#FF0000' },
        unselected: { fillColor: '#000000', color: '#000000' }
    };

    map: any;
    markerLayer: any;
    locationLayer: any;
    mode = 'pointToCoords'; // coordToPoints  pointToCoords  shpToCoords bboxToCoords

    projections: Projection[] = []; // data origine
    projectionsFilter: Projection[] = [];

    filterText: string = '';

    constructor(private _projectionService: ProjectionService, private _geocoderService: GeocoderService) {
        this._projectionService.getProjections().then((projections: Projection[]) => {
            this.projections = projections;
            this.projectionsFilter = projections;
        });
    }

    ngOnInit(): any {
        this.map = L.map('map').setView({ lat: 45, lng: 5 }, 7);
    
        this.markerLayer = L.featureGroup();
        this.markerLayer.addTo(this.map);
        this.locationLayer = L.featureGroup();
        this.locationLayer.addTo(this.map);
        this.map.on('click', this.onClickMap, this);
        this.map.on('mousemove', this.onMouseMoveMap, this);

        this.currentProjections = this.projections.slice(0);


     

        var CLE_IGN = "m48ulrwi9hs26nzcgrb2m41o";//mmspckk4f42vizs561m8mub1

        var url_ign_scan = "https://gpp3-wxs.ign.fr/" + CLE_IGN + "/wmts?LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS&EXCEPTIONS=text/xml&FORMAT=image/jpeg&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}"
        var url_ign_parcelaire = "https://gpp3-wxs.ign.fr/" + CLE_IGN + "/wmts?LAYER=CADASTRALPARCELS.PARCELS&EXCEPTIONS=text/xml&FORMAT=image/png&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}"
        var url_ign_ortho = "https://gpp3-wxs.ign.fr/" + CLE_IGN + "/wmts?LAYER=ORTHOIMAGERY.ORTHOPHOTOS&EXCEPTIONS=text/xml&FORMAT=image/jpeg&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=normal&TILEMATRIXSET=PM&&TILEMATRIX={z}&TILECOL={x}&TILEROW={y}"

        var base_osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' })
        var base_mapbox = L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', { id: 'fabiendelolmo.h5p49m4f' })
        var base_ign_scan = L.tileLayer(url_ign_scan, { attribution: '&copy; <a href="http://www.ign.fr/">IGN</a>' })
        var base_ign_ortho = L.tileLayer(url_ign_ortho, { attribution: '&copy; <a href="http://www.ign.fr/">IGN</a>' })
        var base_ign_parcelaire = L.tileLayer(url_ign_parcelaire, { attribution: '&copy; <a href="http://www.ign.fr/">IGN</a>' })

        base_osm.addTo(this.map)

        var baseMaps = {
            "OSM": base_osm,
            "Mapbox OSM": base_mapbox,
            "Scan IGN": base_ign_scan,
            "Ortho IGN": base_ign_ortho,
            "Parcelaire IGN": base_ign_parcelaire
        };

        L.control.layers(baseMaps).addTo(this.map);
    }

    /* --------------Geocoder-------------- */
    geocode = function (text) {
        this._geocoderService.getCoordsByAdress(text)
            .subscribe(res => {

                if (res.status === 'OK') {
                    let coordsGeocoder = res.results[0].geometry.location;
                    this.map.panTo(coordsGeocoder);
                    if (this.map.getZoom() < 13)
                        this.map.setZoom(13);
                }
            }
            );
    };

    getLocation = function () {
        this._geocoderService.getLocation()
            .subscribe(location => {
                this.locationLayer.clearLayers();
                let coordsLocation = { lat: location.coords.latitude, lng: location.coords.longitude };
                this.map.panTo(coordsLocation);
                L.marker(coordsLocation, {
                    icon: L.icon({
                        iconUrl: './assets/location.png',
                        iconSize: [24, 24],
                        iconAnchor: [12, 12]
                    }), clickable: false
                }).addTo(this.locationLayer);
                if (this.map.getZoom() < 13)
                    this.map.setZoom(13);

            });
    };

    /* --------------Filter-------------- */
    filterProjection = function (filterText) {
        let res = [];
        let patt = new RegExp(filterText, 'i');
        if (filterText) {
            this.projections.forEach(element => {
                if (patt.test(element.code) || patt.test(element.nom)) {
                    res.push(element);
                }
                this.projectionsFilter = res;
            });
        } else {
            this.projectionsFilter = this.projections;
        }

    };

    filterProjectionReset = function () {
        this.projectionsFilter = this.projections;
        this.filterText = '';
    };



    /* --------------Events / Divers--------------  */
    onClickMap = function (e) {
        if (this.mode === 'pointToCoords') {
            this.pointToCoordsOnClickMap(e);
        }

        else if (this.mode === 'bboxToCoords') {
            this.bboxToCoordsOnClickMap(e);
        }
    };

    onMouseMoveMap = function (e) {
        if (this.mode === 'bboxToCoords') {
            this.bboxToCoordsOnMouseMoveMap(e);
        }
    };

    changeMode = function (mode) {
        this.mode = mode;
    };

    /* --------------COORDS TO POINTS-------------- */

    onInitCoords2pts = function (e: any[]) {
        this.drawMarkers(e);
    };

    newCoords2Pts = function (e) {
        this.coordsToPoints = e;
        if (!e.lat && !e.lng)
            this.markerLayer.clearLayers();
    };

    coords2PointNewCoords = function (e) { // nouvelles coordonnées  depuis le input (coords-to-points) => on récupere l'objet transdformé
        this.drawMarkers(e);
    };

    coord2pts_coordSelected = function (e) {
        this.projSelected = e;
        let code = e.code;
        let features: any[] = this.markerLayer.getLayers()[0].getLayers();
        for (let i = 0; i < features.length; i++) {
            if (features[i].code === code) {
                this.map.panTo(features[i].getLatLng());
                return;
            }
        }
    };


    addMarker = function (latlng) {
        this.markerLayer.clearLayers();
        if (this.pointToCoords.lat && this.pointToCoords.lng) {
            let extraMarkers = L.ExtraMarkers.icon({
                icon: 'fa-number',
                iconColor: 'black',
                markerColor: 'white',
                shape: 'circle',
                prefix: 'fa',
                number: '?'
            });
            let marker = L.marker(latlng, { icon: extraMarkers });
            marker.addTo(this.markerLayer);
        }
    };

    onClickMarker = function (marker) {
        this.selected_projection_code = marker.target.code;
    };

    getColorIcon = function (region) {
        let color = 'white';
        switch (region) {
            case 'Monde': return 'blue-dark';
            case 'France': return 'blue';
            case 'Guadeloupe': return 'blue';
            case 'Guyane': return 'blue';
            case 'Martinique': return 'blue';
            case 'Réunion': return 'blue';
            case 'Polynésie': return 'blue';
            case 'Nouvelle Caledonie': return 'blue';
            case 'Mayotte': return 'blue';
            case 'Belgique': return 'yellow';
            case 'Irlande': return 'blue';
            case 'Luxembourg': return 'red';
            case 'Suisse': return 'red';
            case 'Italie': return 'green';
            case 'USA-Canada': return 'purple';
            case 'Espagne': return 'orange-dark';
            default: return 'white';
        }
    };

    drawMarkers = function (coords_list) { // coords To Point
        this.markerLayer.clearLayers();
        let markers = L.markerClusterGroup({ maxClusterRadius: 30 });
        this.markerLayer.addLayer(markers);
        for (let i = 0; i < coords_list.length; i++) {
            let extraMarkers = L.ExtraMarkers.icon({
                icon: 'fa-number',
                iconColor: 'white',
                markerColor: this.getColorIcon(coords_list[i].region),
                shape: 'circle',
                prefix: 'fa',
                number: coords_list[i].region.substr(0, 3)
            });
            let marker = L.marker([coords_list[i].lat, coords_list[i].lng], { icon: extraMarkers });
            marker.code = coords_list[i].code;
            marker.on('click', this.onClickMarker, this)
            markers.addLayer(marker);
        }
    };



    /* --------------POINT TO COORDS-------------- */
    onInitPt2coords = function (e) {
        if (e.lng && e.lat) {
            this.addMarker(e);
        } else {
            this.markerLayer.clearLayers();
        }
    };

    pointToCoordsOnClickMap = function (e) {
        this.pointToCoords = e.latlng;
        this.addMarker(this.pointToCoords);
    };


    /* --------------SHP TO BBOX-------------- */
    onInitShpToCoords = function () {
        this.markerLayer.clearLayers();
    }

    newShpParams = function (shpParam) {
        this.shpParams = shpParam;
    };

    shpCoordsBbox = function (data: any[]) {
        this.markerLayer.clearLayers();
        for (let i = 0; i < data.length; i++) {
            let polygon = L.polygon(data[i].bbox);
            polygon.code = data[i].code;
            polygon.on('click', this.onClickPolygon, this);
            polygon.setStyle(this.featureColor.unselected);
            polygon.addTo(this.markerLayer);
        }
    };

    onClickPolygon = function (e) {
        this.selected_projection_code = e.target.code;
        this.setPolygonStyle(e.target.code);

    };

    shpCoordSelected = function (projSelected) {
        this.projSelected = projSelected;
        this.setPolygonStyle(projSelected.code, true);
    };

    setPolygonStyle = function (projSelectedCode, fitBounds = false) {
        this.markerLayer.getLayers().forEach(feature => {
            if (projSelectedCode === feature.code) {
                feature.setStyle(this.featureColor.selected);
                if (fitBounds)
                    this.map.fitBounds(feature.getBounds());
            } else {
                feature.setStyle(this.featureColor.unselected);
            }
        });
    };

    /* --------------BBOX TO COORDS-------------- */
    // bbox-to-coords.component

    onInitBboxToCoords = function (e) {
        if (e == null) {
            this.markerLayer.clearLayers();
        }

        else {
            this.markerLayer.clearLayers();
            L.rectangle(this.bboxToCoords).addTo(this.markerLayer);
        }
    }

    bboxToCoordsOnClickMap = function (e) {
        if (this.bboxToCoords.length !== 1) {
            this.markerLayer.clearLayers();
            this.bboxToCoords = [];
            this.bboxToCoords.push(e.latlng);
        }
        else {
            this.bboxToCoords.push(e.latlng);
            L.rectangle(this.bboxToCoords).addTo(this.markerLayer);
        }
    };

    bboxToCoordsOnMouseMoveMap = function (e) {
        if (this.bboxToCoords.length === 1) {
            this.markerLayer.clearLayers();
            let rectangle = L.rectangle([this.bboxToCoords[0], e.latlng]);

            rectangle.on('click', function (e) {
                // this.bboxToCoords.push(e.latlng); // pas de détection du changement ! ?!
                this.bboxToCoords = [this.bboxToCoords[0], e.latlng];
            }, this);
            rectangle.addTo(this.markerLayer);
        }
    }


}
