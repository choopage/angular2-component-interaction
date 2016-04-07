import {Component} from 'angular2/core';
import {HeroParentComponent} from './parent-child-pass-data/hero-parent.component';
import {NameParentComponent} from './parent-child-intercept-with-setter/name-parent.component';

@Component({
    selector: 'my-app',
    template: `
        <hero-parent></hero-parent>
        <hr>
        <name-parent></name-parent>
    `,
    directives: [HeroParentComponent, NameParentComponent]
})
export class AppComponent { }
