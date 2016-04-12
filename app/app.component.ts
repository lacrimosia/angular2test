import {Component, Inject} from 'angular2/core';
import {navComponent} from './navigation.component';
import {coolService} from './coolService';
import {listComponent} from './list.component';

@Component({
    selector: 'my-app',
    directives: [navComponent, listComponent],
    templateUrl: 'app.component.html'
})
export class AppComponent { 

	// access services
	// make public coolService to be accessible in methods
	constructor(public coolService: coolService){
		console.log(coolService);
	}

	public names = [
		{name: "kali"},
		{name: "tomas"},
		{name: "loyu"}
	];

	changeNames(name){
			var k = name;
			alert(k);
	}

	onSubmit() {
		// alert(value);
		// make a reference to the coolService to share in components
		this.coolService.todos.push(this.todoModel);
	}

}
