import {Component} from 'angular2/core';
import {VersionChildComponent} from './version-child-component';

@Component({
    selector: 'version-parent',
    template: `
        <h2>Source code version</h2>
        {{major}}.{{minor}}
        <button (click)="newMajor()">Increase Major</button>
        <button (click)="newMinor()">Increase Minor</button>
        <version-child [major]="major" [minor]="minor"></version-child>
    `,
    directives: [VersionChildComponent]
})

export class VersionParentComponent {
    major: number = 1;
    minor: number = 23;

    newMinor() {
        this.minor++;
    }

    newMajor() {
        this.major++;
        this.minor = 0;
    }
}