import {Component} from 'angular2/core';
import {HeroParentComponent} from './parent-child-pass-data/hero-parent.component';
import {NameParentComponent} from './parent-child-intercept-with-setter/name-parent.component';
import {VersionParentComponent} from './parent-child-version/version-parent-component';
import {VoteParentComponent} from './parent-child-event-emitter/vote-parent-component';

@Component({
    selector: 'my-app',
    template: `
        <hero-parent></hero-parent>
        <hr>
        <name-parent></name-parent>
        <hr>
        <version-parent></version-parent>
        <hr>
        <vote-parent></vote-parent>
    `,
    directives: [HeroParentComponent, NameParentComponent, VersionParentComponent, VoteParentComponent]
})
export class AppComponent { }
