import {Component} from 'angular2/core';


@Component({
    selector: 'navigation',
    template: `
     <h1>{{tacos}} and {{shopping}}</h1>
    `
})
export class navComponent {
	public shopping = "90";
	public tacos = " 100";
}
