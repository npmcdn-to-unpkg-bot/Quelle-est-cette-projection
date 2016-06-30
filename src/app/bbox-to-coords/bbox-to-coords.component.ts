import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Projection} from '../projections/projection';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {OrderBy} from '../pipes/order_by.pipe';
import {RoundCoords} from '../pipes/round_coords.pipe';
import {MdInput} from '@angular2-material/input';
import {ClipboardDirective} from 'angular2-clipboard';



declare var proj4: any;
declare var _: any;
declare var Clipboard: any;

@Component({
    moduleId: module.id,
    selector: 'bbox-to-coords',
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MdCheckbox, MdInput,ClipboardDirective],
    pipes: [OrderBy, RoundCoords],
    templateUrl: './bbox-to-coords.component.html',
    styleUrls: ['./bbox-to-coords.component.css']
})



export class BboxToCoordsComponent {

    @Input() projections: Projection[];
    @Input() bboxToCoords;
    @Output() onInitBboxToCoords = new EventEmitter();


    bboxToCoordsList: Projection[]; // liste accueillant le résultat
    proj_4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
    selectedProjection = {};
    coordsFormatString = '';
    currentFormat = 'wkt';

    orderby = null
    orderBy = function (field) {
        this.orderby = (this.orderby === field) ? '-' + field : field;
    };

    onClickProjection = function (projectionSelected) {
        if (this.bboxToCoords[1]) {
            this.selectedProjection = projectionSelected;

            this.coordsFormatString = this.getBboxFormat(this.currentFormat)
        }

    };


    updateCoordsListFrom4326 = function (coords, projs): Projection[] {
        let result: Projection[] = (JSON.parse(JSON.stringify(projs))); // _.cloneDeep(projs); //(JSON.parse(JSON.stringify(projs)));
        if (coords[0] && coords[1]) {
            for (let i = 0; i < result.length; i++) {
                let coords1 = proj4(this.proj_4326, result[i].proj4, [coords[0].lng, coords[0].lat]);
                let coords2 = proj4(this.proj_4326, result[i].proj4, [coords[1].lng, coords[1].lat]);

                let x_min: number = (coords1[0] < coords2[0]) ? coords1[0] : coords2[0];
                let x_max: number = (coords1[0] >= coords2[0]) ? coords1[0] : coords2[0];

                let y_min: number = (coords1[1] < coords2[1]) ? coords1[1] : coords2[1];
                let y_max: number = (coords1[1] >= coords2[1]) ? coords1[1] : coords2[1];
                result[i].coords = [[x_min, y_min], [x_max, y_max]];
                // result[i].coords = [coords1, coords2];

                // selectedProjection update;
                if (this.selectedProjection.code)
                    if (this.selectedProjection.code === result[i].code)
                        this.selectedProjection = result[i];
            }
        }
        return result;
    };



    getBboxFormat = function (format) {
        let coords = this.selectedProjection.coords;
        if (this.selectedProjection.coords) {
            let x_min = coords[0][0];
            let x_max = coords[1][0];
            let y_min = coords[0][1];
            let y_max = coords[1][1];
            let formatedString = '';
            switch (format) {
                case 'wkt':
                    formatedString = 'POLYGON(' + x_min + ' ' + y_min + ','
                        + x_min + ' ' + y_max + ','
                        + x_max + ' ' + y_max + ','
                        + x_max + ' ' + y_min + ','
                        + x_min + ' ' + y_min
                        + ')';
                    break;

                case 'geojson':
                    formatedString = '{"type": "Polygon","coordinates": [' +
                        '[[' + x_min + ', ' + y_min + '], [' + x_min + ', ' + y_max + '], [' + x_max + ', ' + y_max + '],[' + x_max + ', ' + y_min + '],[' + x_min + ', ' + y_min + ']' + ']]}';
                    break;

                case 'xyMinMax':
                    formatedString = x_min + ' ' + y_min + ', ' + x_max + ' ' + y_max;
                    break

                case 'yxMinMax':
                    formatedString = y_min + ' ' + x_min + ', ' + y_max + ' ' + x_max;
                    break

                case 'overpassXML':
                    formatedString = '<bbox-query e="' + x_max + '" n="' + y_max + '" s="' + y_min + '" w="' + x_min + '"/>';
                    break

                case 'overpassQL':
                    formatedString = y_min + ',' + x_min + ',' + y_max + ',' + x_max;
                    break
            }

            return formatedString;
        }
    };

    formatChange = function (select) {
        this.currentFormat = select.target.value;
        this.coordsFormatString = this.getBboxFormat(this.currentFormat)
    }





    ngOnChanges(changes) {

        if (changes.projections) {
            this.projections = changes.projections.currentValue;
            this.bboxToCoordsList = JSON.parse(JSON.stringify(this.projections));
            this.bboxToCoordsList = this.updateCoordsListFrom4326(this.bboxToCoords, this.projections);
        }

        if (changes.bboxToCoords) {
            if (changes.bboxToCoords.currentValue.length === 2) {
                this.bboxToCoordsList = this.updateCoordsListFrom4326(this.bboxToCoords, this.projections);
                if (this.selectedProjection)
                    this.coordsFormatString = this.getBboxFormat(this.currentFormat);
           
            }
        }


    }

    ngOnInit() {
        console.log('ini bbox to coords')

        if (this.bboxToCoords.length == 2) {
            this.onInitBboxToCoords.emit(this.bboxToCoords);
        }

        else {
            this.bboxToCoordsList = JSON.parse(JSON.stringify(this.projections));
            this.onInitBboxToCoords.emit(null);
        }
    }
}
