webpackJsonp([1,4],{

/***/ 468:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 468;


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(649);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountComponent = (function () {
    function AccountComponent(af) {
        this.af = af;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (state) {
            if (state) {
                console.log('AccountComponent.loggedIn', state);
                _this.item = _this.af.database.object('/profiles/' + state.google.uid);
                _this.item.subscribe(function (data) {
                    console.log('AccountComponent.item.subscribe');
                    _this.item.update({
                        email: data.email || state.google.email,
                        name: data.name || state.google.displayName,
                        photo: data.photo || state.google.photoURL
                    });
                });
            }
            else {
                console.log('AccountComponent.notLoggedIn', state);
            }
        });
    };
    AccountComponent.prototype.login = function () {
        this.af.auth.login();
    };
    AccountComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__(724),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a;
}());
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.isDesktop = function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 720) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(725),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__locations_locations_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__(648);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var myFirebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AuthMethods */].Popup
};
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_12__locations_locations_component__["a" /* LocationsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["FlexLayoutModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["c" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* firebaseConfig */], myFirebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_12__locations_locations_component__["a" /* LocationsComponent */], __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyDp3bPY3sx8PQVBmOFyGQfqtW7AaSsTroE',
    authDomain: 'community-eac28.firebaseapp.com',
    databaseURL: 'https://community-eac28.firebaseio.com',
    storageBucket: 'community-eac28.appspot.com',
    messagingSenderId: '687264577300'
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(726),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(167);
/* unused harmony export Location */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Location = (function () {
    function Location() {
    }
    return Location;
}());
var LocationsComponent = (function () {
    function LocationsComponent(af) {
        this.af = af;
        this.item = { date: 0, name: '' };
    }
    LocationsComponent.prototype.ngOnInit = function () {
        this.items = this.af.database.list('/locations');
    };
    LocationsComponent.prototype.add = function (item) {
        var _this = this;
        item.date = new Date().getTime();
        this.items.push(item).then(function () {
            _this.reset();
        });
    };
    LocationsComponent.prototype.update = function (key, item) {
        item.date = new Date().getTime();
        this.items.update(key, item);
    };
    LocationsComponent.prototype.delete = function (key) {
        this.items.remove(key);
    };
    LocationsComponent.prototype.reset = function () {
        this.item = { date: 0, name: '' };
    };
    LocationsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-locations',
            template: __webpack_require__(727),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], LocationsComponent);
    return LocationsComponent;
    var _a;
}());
//# sourceMappingURL=locations.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(af) {
        this.af = af;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (state) {
            if (state) {
                console.log('ProfileComponent.loggedIn', state);
                _this.item = _this.af.database.object('/profiles/' + state.google.uid);
            }
            else {
                console.log('ProfileComponent.notLoggedIn', state);
            }
        });
    };
    ProfileComponent.prototype.editMode = function (isEditable) {
        this.edit = isEditable;
    };
    ProfileComponent.prototype.save = function (obj) {
        this.item.set(obj);
    };
    ProfileComponent.prototype.update = function (name, email, intro) {
        this.item.update({ name: name, email: email, intro: intro });
        this.editMode(false);
    };
    ProfileComponent.prototype.delete = function () {
        this.item.remove();
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(728),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host .user {\n    border-radius: 50%;\n    cursor: pointer;\n    height: 2.25em;\n    -webkit-transition: -webkit-transform .15s ease-out;\n    transition: -webkit-transform .15s ease-out;\n    transition: transform .15s ease-out;\n    transition: transform .15s ease-out, -webkit-transform .15s ease-out;\n    width: 2.25em;\n    vertical-align: bottom;\n}\n\n:host .user:hover {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n}\n\n:host .label {\n    vertical-align: inherit;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host .container {\n  height: 100vh;\n}\n\n:host .app-icon-button {\n  margin-right: 16px;\n  min-width: 0;\n}\n\n/*:host .app-toolbar {\n    min-height: 64px;\n}\n\n:host md-toolbar-row {\n  height: 64px;\n}*/\n\n:host .app-toolbar-title {\n  cursor: pointer;\n  font-weight: normal;\n}\n\n/*:host .app-content {\n  padding: 16px;\n}*/\n\n:host .app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n/* sidenav */\n\n:host .sidenav {\n  padding: 16px;\n  min-width: 200px;\n}\n\n:host .sidenav-item {\n  cursor: pointer;\n  -webkit-transition: background-color .15s ease-out;\n  transition: background-color .15s ease-out;\n}\n\n:host .sidenav-item:hover {\n  background-color: #eee;\n}\n\n:host .sidenav-item span {\n  margin-left: .5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: no-repeat center/100% 100% url(" + __webpack_require__(769) + ");\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    height: calc(100vh - 64px);\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}\n\n:host h1 {\n    font-weight: normal;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host h1 {\n  font-weight: normal;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)();
// imports


// module
exports.push([module.i, ":host {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n:host .intro {\n  background-color: #5162C4;\n  color: #fff;\n  padding: 2em;\n  position: relative;\n  text-align: center;\n}\n\n:host h1,\n:host h2,\n:host h3,\n:host h4 {\n  font-weight: normal;\n  margin: .25em 0;\n}\n\n:host .edit {\n    position: absolute;\n    right: 1em;\n    top: 1em;\n    min-width: auto;\n}\n\n:host .user {\n    border-radius: 50%;\n    height: 5em;\n    width: 5em;\n}\n\n:host .input {\n  width: 100%;\n}\n\n:host button {\n  margin-left: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"af.auth | async\">\n  <img src=\"{{ (af.auth | async)?.google.photoURL || '../../assets/no-photo.gif' }}\" alt=\"{{ (af.auth | async)?.google.displayName }}\" class=\"user\" [mdMenuTriggerFor]=\"menu\" />\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item routerLink=\"/profile\">\n      <md-icon class=\"icon\">account_box</md-icon>\n      <span class=\"label\">My Profile</span>\n    </button>\n    <button md-menu-item (click)=\"logout()\">\n      <md-icon class=\"icon\">exit_to_app</md-icon>\n      <span class=\"label\">Logout</span>\n    </button>\n  </md-menu>\n</div>\n<div *ngIf=\"!(af.auth | async)\">\n  <button md-button (click)=\"login()\">Login</button>\n</div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container class=\"container\">\n  <md-sidenav #sidenav [mode]=\"isDesktop() ? 'side' : 'over'\" [opened]=\"isDesktop()\" class=\"sidenav\">\n    <md-list>\n        <md-list-item class=\"sidenav-item\" routerLink=\"/\">\n            <md-icon class=\"material-icons\" color=\"primary\">home</md-icon>\n            <span>Home</span>\n        </md-list-item>\n        <md-list-item class=\"sidenav-item\" routerLink=\"/locations\">\n            <md-icon class=\"material-icons\" color=\"primary\">location_on</md-icon>\n            <span>Locations</span>\n        </md-list-item>\n    </md-list>\n  </md-sidenav>\n  <md-toolbar color=\"primary\" class=\"app-toolbar\">\n      <button md-button class=\"app-icon-button\" (click)=\"sidenav.toggle()\"><i class=\"material-icons\">menu</i></button>\n      <span class=\"app-toolbar-title\" routerLink=\"/\">NgMatFire</span>\n      <span class=\"app-toolbar-filler\"></span>\n      <app-account></app-account>\n  </md-toolbar>\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<h1>Angular2 Material Firebase</h1>\n<button md-raised-button routerLink=\"/locations\" color=\"primary\">Explore</button>"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h1>Locations</h1>\n  <p>Currently there are {{ (items | async)?.length || 0 }} locations</p>\n  <ul>\n    <li *ngFor=\"let item of items | async\">{{ item.name }}</li>\n  </ul>\n  <form #form=\"ngForm\" (ngSubmit)=\"add(item)\" novalidate *ngIf=\"af.auth | async\">\n    <md-input-container>\n      <input mdInput [(ngModel)]=\"item.name\" name=\"name\" placeholder=\"Name\" required />\n    </md-input-container>\n    <button type=\"submit\" [disabled]=\"!form.form.valid\" md-raised-button color=\"primary\">Add</button>\n  </form>\n</md-card>"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"(af.auth | async) && !edit\">\n  <div class=\"intro\" color=\"primary\">\n      <button md-button (click)=\"editMode(true)\" class=\"edit\"><i class=\"material-icons\">edit</i></button>\n      <img src=\"{{ (item | async)?.photo || '../../assets/no-photo.gif' }}\" alt=\"{{ (af.auth | async)?.google.displayName }}\" class=\"user\" />\n      <h1>{{ (item | async)?.name }}</h1>\n      <h4>{{ (item | async)?.intro }}</h4>\n  </div>\n  <md-card>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non nunc gravida, condimentum lorem id, aliquet libero. In eu fermentum erat. Ut nec vestibulum metus. Curabitur in lacus non mi mollis vehicula. Curabitur vel consequat ligula. Praesent iaculis maximus enim, sit amet imperdiet libero tincidunt in.</p>\n  </md-card>\n</div>\n<md-card *ngIf=\"(af.auth | async) && edit\">\n  <form #form=\"ngForm\" (ngSubmit)=\"update(name.value, email.value, intro.value)\">\n    <h1>Edit profile</h1>\n    <div fxLayout=\"row\">\n      <div fxFlex=\"100\">\n        <md-input-container class=\"input\">\n          <input mdInput [ngModel]=\"(item | async)?.name\" #name name=\"name\" placeholder=\"Name\" required />\n        </md-input-container>\n      </div>\n    </div>\n    <div fxLayout=\"row\">\n      <div fxFlex=\"100\">\n        <md-input-container class=\"input\">\n          <input mdInput [ngModel]=\"(item | async)?.email\" #email name=\"email\" placeholder=\"Email\" required />\n        </md-input-container>\n      </div>\n    </div>\n    <div fxLayout=\"row\">\n      <div fxFlex=\"100\">\n        <md-input-container class=\"input\">\n          <textarea mdInput [ngModel]=\"(item | async)?.intro\" #intro name=\"intro\" placeholder=\"Intro\"></textarea>\n        </md-input-container>\n      </div>\n    </div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <button type=\"cancel\" md-raised-button>Cancel</button>\n      <button type=\"submit\" [disabled]=\"!form.form.valid\" md-raised-button color=\"primary\">Save</button>\n    </div>\n  </form>\n</md-card>"

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.f1f7dff3cb2cb05ef31e.jpg";

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(469);


/***/ })

},[771]);
//# sourceMappingURL=main.bundle.js.map