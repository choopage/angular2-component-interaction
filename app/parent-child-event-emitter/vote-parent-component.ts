import {Component} from 'angular2/core';
import {VoteChildComponent} from './vote-child-component';

@Component({
    selector: 'vote-parent',
    template: `
        <h3>Agree: {{agreed}}, Disagree {{disagreed}}</h3>
        <vote-child *ngFor="#voter of voters" [name]="voter" (onVoted)="onVoted($event)"></vote-child>
    `,
    directives: [VoteChildComponent]
})

export class VoteParentComponent {
    agreed: number = 0;
    disagreed: number = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
}