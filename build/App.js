"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var components_1 = require('ng-ag2-configurator/components');
var App = (function () {
    function App() {
        this.message = "Default Messages";
    }
    App.prototype.onKeyUp = function (input) {
        this.message = input.value;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [components_1.Configurator],
            template: "<input placeholder=\"Type Hello World!\" (keyup)=\"onKeyUp(input)\" #input>\n               {{message}}\n               <configurator></configurator>\n               "
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
browser_1.bootstrap(App);
//# sourceMappingURL=App.js.map