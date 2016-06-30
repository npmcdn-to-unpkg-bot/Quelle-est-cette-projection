import {Injectable} from '@angular/core';
import {PROJECTIONS} from './mock-projections';
    @Injectable()
export class ProjectionService {
    getProjections() {
        return Promise.resolve(PROJECTIONS);

    }
}
