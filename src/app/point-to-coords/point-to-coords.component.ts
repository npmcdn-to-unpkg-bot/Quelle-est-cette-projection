import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Projection} from '../projections/projection';

import {RoundCoords} from '../pipes/round_coords.pipe';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {OrderBy} from '../pipes/order_by.pipe';


declare var proj4: any;
declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'point-to-coord-list',
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdCheckbox],
    pipes: [RoundCoords, OrderBy],
    templateUrl: './point-to-coors.component.html',
    styleUrls: ['./point-to-coords.component.css']
})



export class PointToCoordListComponent {
    @Input() pointToCoords;
    @Input() projections: Projection[];

    @Output() onInitPt2coords = new EventEmitter();


    point_to_coords_list: Projection[]; // liste accueillant le résultat
    proj_4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    selectedProjection = {};

    orderby = null
    orderBy = function (field) {
        this.orderby = (this.orderby == field) ? '-' + field : field;
    }

    onClickProjection = function (projectionSelected) {
        this.selectedProjection = projectionSelected;
    };


    updateCoordsListFrom4326 = function (coords, projs): Projection[] {
        let list_proj_point_to_coords: Projection[] = (JSON.parse(JSON.stringify(projs))); // _.cloneDeep(projs); //(JSON.parse(JSON.stringify(projs)));
        for (let i = 0; i < list_proj_point_to_coords.length; i++) {
            let coords_from_proj = proj4(this.proj_4326, list_proj_point_to_coords[i].proj4, [coords.lng, coords.lat]);
            list_proj_point_to_coords[i].lng = coords_from_proj[0];
            list_proj_point_to_coords[i].lat = coords_from_proj[1];
            // selectedProjection update;
            if (this.selectedProjection.code)
                if (this.selectedProjection.code === list_proj_point_to_coords[i].code)
                    this.selectedProjection = list_proj_point_to_coords[i];
        }
        return list_proj_point_to_coords;
    };

    ngOnChanges(changes) {
        if (changes.projections) {
            this.projections = changes.projections.currentValue;
            this.point_to_coords_list = (JSON.parse(JSON.stringify(this.projections)));
            if (this.pointToCoords.lat)
                this.point_to_coords_list = this.updateCoordsListFrom4326(this.pointToCoords, (JSON.parse(JSON.stringify(this.projections))));


        }

        if (changes.pointToCoords && changes.pointToCoords.currentValue.lat && changes.pointToCoords.currentValue.lng) {
            this.point_to_coords_list = this.updateCoordsListFrom4326(changes.pointToCoords.currentValue, (JSON.parse(JSON.stringify(this.projections))))
        }

    }

    ngOnInit() {

        this.onInitPt2coords.emit(this.pointToCoords);
        if (this.pointToCoords.lat) {


        } else {
            this.point_to_coords_list = (JSON.parse(JSON.stringify(this.projections)))
        }
    }
}
