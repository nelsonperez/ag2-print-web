/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Configurator} from 'ng-ag2-configurator/components';


@Component({
    selector: 'app',
    directives: [Configurator],
    template: `<input placeholder="Type Hello World!" (keyup)="onKeyUp(input)" #input>
               {{message}}
               <configurator></configurator>
               `
})
export class App {

    message = "Default Messages";

    onKeyUp(input) {
        this.message = input.value;
    }

}

bootstrap(App);