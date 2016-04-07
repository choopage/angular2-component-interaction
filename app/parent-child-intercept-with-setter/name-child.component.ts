/**
 * Created by jerchoo on 2/4/16.
 */
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'name-child',
    template: '<h3>{{name}}</h3>'
})

export class NameChildComponent {
    private _name : string = 'no name set';

    @Input()
    set name(name: string) {
        this._name = (name && name.trim() || 'no name set');
    }

    get name() {
        return this._name;
    }
}