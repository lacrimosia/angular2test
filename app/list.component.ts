import {Component} from 'angular2/core';
import {coolService} from './coolService';

@Component({
	selector: 'list',
	template: `
		<div>
		<p>Listing</p>
			<ul>
				<li *ngFor="#todo of coolService.todos"> {{todo}} </li>
			</ul>
		</div>
	`
})

export class listComponent {
	constructor(public coolService: coolService){}
}