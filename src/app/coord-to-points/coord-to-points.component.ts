import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ProjectionService} from '../projections/projection.service';
import {Projection} from '../projections/projection';
import {MdButton, MdAnchor} from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {OrderBy} from '../pipes/order_by.pipe';
import {FilterPipe} from '../pipes/filter.pipe';


declare var proj4: any;

@Component({
    moduleId: module.id,
    selector: 'coord-to-points',
    directives: [MdButton, MdInput, MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdCheckbox, MdIcon],
    viewProviders: [MdIconRegistry],
    pipes: [OrderBy, FilterPipe],
    templateUrl: './coord-to-points.component.html',
    styleUrls: ['./coord-to-points.component.css']
})



export class CoordToPointsComponent {
    @Input() coordsToPoints;
    @Input() projections: Projection[];

    @Input() selected_projection_code;
    @Input() filterText;


    @Output() newCoordsEvent = new EventEmitter();
    @Output() projSelected = new EventEmitter();
    @Output() onInitCoords2pts = new EventEmitter();
    @Output() newCoords2Pts = new EventEmitter();

    inputCoords = { lng: 0, lat: 0 };
    res_coords_to_points: Projection[];
    selectedProjection = {};
    lngIsValid = false;
    latIsValid = false;
    proj_4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    orderby;

    constructor() { }

 

    scrollToSelectedProjection = function (code) {
        if (document.getElementById(code))
            document.getElementById(code).scrollIntoView();
    };

    orderBy = function (field) {
        this.orderby = (this.orderby === field) ? '-' + field : field;
    };

    onPastLng = function (e) {
        let data: string = e.clipboardData.getData('text/plain').trim().replace(' ', '');

        if (new RegExp('[0-9]+,?[0-9]+?').test(data)) {
            e.preventDefault();
            this.coordsToPoints.lng = data.split(',')[0].trim();
            this.coordsToPoints.lat = data.split(',')[1].trim();
        }
    };

    onKeyupCoords = function (e) {
    };

    onClickProjection = function (_projection_selected) {

        if (this.coordsToPoints.lat && this.coordsToPoints.lng) {
            this.selectedProjection = _projection_selected;
            this.projSelected.emit(_projection_selected);
        }
    };

    /*renvoie une liste de projection avec les coordonnées en 4326*/
    updateCoordsListTo4326 = function (coords, projs): Projection[] {
        let list_proj_point_to_coords: Projection[] = (JSON.parse(JSON.stringify(projs)));

        if (coords.lat && coords.lng) {
            for (let i = 0; i < list_proj_point_to_coords.length; i++) {
                let coords_from_proj = proj4(list_proj_point_to_coords[i].proj4, this.proj_4326, [coords.lng, coords.lat]);
                list_proj_point_to_coords[i].lng = coords_from_proj[0];
                list_proj_point_to_coords[i].lat = coords_from_proj[1];
            }
        }
        return list_proj_point_to_coords;
    };

    /* lors du sumbit de nouvelles coordonnées */
    submitNewCoords = function (lnglat: string[]) {
        let lng = parseFloat(lnglat[0]);
        let lat = parseFloat(lnglat[1]);

        if (lng && lat) {
            // validation
            this.coordsToPoints = { lng: lng, lat: lat };
            this.newCoordsEvent.emit(this.updateCoordsListTo4326({ lng: lng, lat: lat }, this.projections));
            this.newCoords2Pts.emit({ lng: lng, lat: lat });
        }

    };

    reverseLngLat = function (lng, lat) {
        this.inputCoords.lng = lat.value;
        this.inputCoords.lat = lng.value;

        let coordValidPatt = new RegExp('^\s*?[0-9]*\.?[0-9]*?\s*?$');
        if (coordValidPatt.test(this.inputCoords.lng) && coordValidPatt.test(this.inputCoords.lat))
            this.submitNewCoords([this.inputCoords.lng, this.inputCoords.lat]);
    }

    ngOnInit(): any {

        if (this.coordsToPoints.lng && this.coordsToPoints.lat) {
            this.submitNewCoords([this.coordsToPoints.lng, this.coordsToPoints.lat]);
        } else {
            this.newCoords2Pts.emit({ lng: null, lat: null });
        }

    }

    ngOnChanges(changes) {

        if (changes.projections) {
            this.submitNewCoords([this.coordsToPoints.lng, this.coordsToPoints.lat]);
            this.projections = changes.projections.currentValue;
        }
        if (changes.selected_projection_code) {
            for (let i = 0; i < this.projections.length; i++) {
                if (this.projections[i].code === changes.selected_projection_code.currentValue) {
                    this.selectedProjection = this.projections[i];
                    this.scrollToSelectedProjection(changes.selected_projection_code.currentValue);
                }

            }
        }

    }
}



