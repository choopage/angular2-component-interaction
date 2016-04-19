import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote-child',
    template: `
        {{name}}
        <button (click)="vote(true)" [disabled]="voted">Agree</button>
        <button (click)="vote(false)" [disabled]="voted">Disagree</button>
    `
})

export class VoteChildComponent {
    @Input()
    name:string;

    @Output()
    onVoted = new EventEmitter<boolean>();

    voted:boolean = false;

    vote(agreed:boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }
}