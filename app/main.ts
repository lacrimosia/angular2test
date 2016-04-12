import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {navComponent} from './navigation.component';
import {coolService} from './coolService';

bootstrap(AppComponent, [coolService]);
