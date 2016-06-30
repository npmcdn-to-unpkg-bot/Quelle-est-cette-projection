import {Component, Input, Output, EventEmitter} from '@angular/core';

import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';


import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import {MdCheckbox} from '@angular2-material/checkbox';
import {Observable} from 'rxjs/Rx';

import {OrderBy} from '../pipes/order_by.pipe';
import {FilterPipe} from '../pipes/filter.pipe';

import {Projection} from '../projections/projection';


declare var proj4: any;
declare var _: any;

@Component({
    moduleId: module.id,
    selector: 'shp-to-coords',
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdCheckbox, MdIcon, MdButton],
    viewProviders: [MdIconRegistry],
    pipes: [OrderBy, FilterPipe],

    styleUrls: ['./shp-to-coords.component.css'],
    templateUrl: './shp-to-coords.component.html'
})



export class ShpToCoords {
    @Input() projections: Projection[];
    @Input() selected_projection_code;
    @Input() shpParams;

    @Output() shpCoordsBbox = new EventEmitter();
    @Output() newShpParams = new EventEmitter();
    @Output() projSelected = new EventEmitter();
    @Output() onInitShpToCoords = new EventEmitter();
    reader = new FileReader();
    selectedProjection = {};


    proj_4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

    constructor() {
        let fileloaded = Observable.fromEvent(this.reader, 'loadend');
 
        fileloaded.subscribe((data: ProgressEvent) => {
            let target: any = data.target;
            let dataview = new DataView(target.result, 0, 80);
            let file_code = dataview.getInt32(0);
            let file_length = dataview.getInt32(24);
            let file_type = dataview.getInt32(32, true);
            let x_min = dataview.getFloat64(36, true);
            let x_max = dataview.getFloat64(52, true);
            let y_min = dataview.getFloat64(44, true);
            let y_max = dataview.getFloat64(60, true);
            this.shpParams.coords = [{ lng: x_min, lat: y_min },
                { lng: x_min, lat: y_max },
                { lng: x_max, lat: y_max },
                { lng: x_max, lat: y_min }];
            let res = this.updateBboxsTo4326(this.shpParams.coords, this.projections);
            this.newShpParams.emit(this.shpParams);
            this.shpCoordsBbox.emit(res);
        });
    }



    onClickProjection = function (_projection_selected) {
        if (this.shpParams) {
            this.selectedProjection = _projection_selected;
            this.selected_projection_code = this.selectedProjection.code;
            this.projSelected.emit(_projection_selected);
        }
    };

    onChange = function (e) {
        let shpFile = e.target.files[0];
        this.shpParams = {};
        this.shpParams.fileName = shpFile.name;
        this.reader.readAsArrayBuffer(shpFile);
    };

    updateBboxsTo4326 = function (coords, projs): Projection[] {
        let list_proj_point_to_coords = (JSON.parse(JSON.stringify(projs)));

        for (let i = 0; i < list_proj_point_to_coords.length; i++) {
            let coords_from_proj0 = proj4(list_proj_point_to_coords[i].proj4, this.proj_4326, [coords[0].lng, coords[0].lat]);
            let coords_from_proj1 = proj4(list_proj_point_to_coords[i].proj4, this.proj_4326, [coords[1].lng, coords[1].lat]);
            let coords_from_proj2 = proj4(list_proj_point_to_coords[i].proj4, this.proj_4326, [coords[2].lng, coords[2].lat]);
            let coords_from_proj3 = proj4(list_proj_point_to_coords[i].proj4, this.proj_4326, [coords[3].lng, coords[3].lat]);

            list_proj_point_to_coords[i].bbox = [
                { lng: coords_from_proj0[0], lat: coords_from_proj0[1] },
                { lng: coords_from_proj1[0], lat: coords_from_proj1[1] },
                { lng: coords_from_proj2[0], lat: coords_from_proj2[1] },
                { lng: coords_from_proj3[0], lat: coords_from_proj3[1] }
            ];

        }

        return list_proj_point_to_coords;
    };

    scrollToSelectedProjection = function (code) {
        if (document.getElementById(code))
            document.getElementById(code).scrollIntoView();
    };

    orderBy = function (field) {
        this.orderby = (this.orderby === field) ? '-' + field : field;
    };


    ngOnChanges(changes) {
        if (changes.selected_projection_code) {
            for (let i = 0; i < this.projections.length; i++) {
                if (this.projections[i].code === changes.selected_projection_code.currentValue) {
                    this.selectedProjection = this.projections[i];
                    this.scrollToSelectedProjection(changes.selected_projection_code.currentValue);
                }
            }
        }

        if (changes.projections) {
            if (this.shpParams) {
                this.shpCoordsBbox.emit(this.updateBboxsTo4326(this.shpParams.coords, this.projections));
                this.projections = changes.projections.currentValue;
            }
        }

    }

    ngOnInit() {
        if (this.shpParams) {
            this.shpCoordsBbox.emit(this.updateBboxsTo4326(this.shpParams.coords, this.projections));
        }
        else {
            this.onInitShpToCoords.emit(null);
        }
    }


}
