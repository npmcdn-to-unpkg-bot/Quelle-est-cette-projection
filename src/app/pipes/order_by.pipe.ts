import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'orderBy'})

export class OrderBy implements PipeTransform {
    transform(obj: any, _orderField: string) {
        let orderType: string = 'ASC';
        let orderField  = _orderField;

        if (_orderField){
              if (_orderField[0] === '-') {
                orderField = _orderField.substring(1);
                orderType = 'DESC';
            }

                     obj.sort(function(a, b) {
                if (orderType === 'ASC') {
                    if (a[orderField] < b[orderField]) return -1;
                    if (a[orderField] > b[orderField]) return 1;
                    return 0;
                } else {
                    if (a[orderField] < b[orderField]) return 1;
                    if (a[orderField] > b[orderField]) return -1;
                    return 0;
                }
            });

        }

        return obj;
    }
}
