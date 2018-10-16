(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./add-cuts/add-cuts.module": [
		"./src/app/add-cuts/add-cuts.module.ts",
		"add-cuts-add-cuts-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./view-cuts/view-cuts.module": [
		"./src/app/view-cuts/view-cuts.module.ts",
		"view-cuts-view-cuts-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/ang-material/ang-material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ang-material/ang-material.module.ts ***!
  \*****************************************************/
/*! exports provided: AngMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngMaterialModule", function() { return AngMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AngMaterialModule = /** @class */ (function () {
    function AngMaterialModule() {
    }
    AngMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]
            ],
        })
    ], AngMaterialModule);
    return AngMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'search', loadChildren: './view-cuts/view-cuts.module#ViewCutsModule' },
    { path: 'addCut', loadChildren: './add-cuts/add-cuts.module#AddCutsModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-bar/nav-bar.module */ "./src/app/nav-bar/nav-bar.module.ts");
/* harmony import */ var _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core-services/core-services.module */ "./src/app/core-services/core-services.module.ts");
/* harmony import */ var _lastfm_last_fm_search_last_fm_search_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lastfm/last-fm-search/last-fm-search.module */ "./src/app/lastfm/last-fm-search/last-fm-search.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = /** @class */ (function () {
    function AppModule(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustUrl('/assets/mdi.svg'));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _nav_bar_nav_bar_module__WEBPACK_IMPORTED_MODULE_12__["NavBarModule"],
                _lastfm_last_fm_search_last_fm_search_module__WEBPACK_IMPORTED_MODULE_14__["LastFmSearchModule"],
                _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_13__["CoreServicesModule"].forRoot(),
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_9__["AngMaterialModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase)
            ],
            providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core-services/core-services.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/core-services/core-services.module.ts ***!
  \*******************************************************/
/*! exports provided: CoreServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreServicesModule", function() { return CoreServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-services/track-service.service */ "./src/app/firebase-services/track-service.service.ts");
/* harmony import */ var _lastfm_lastfm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lastfm/lastfm.service */ "./src/app/lastfm/lastfm.service.ts");
/* harmony import */ var _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-side-bar/filter-track.service */ "./src/app/filter-side-bar/filter-track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreServicesModule = /** @class */ (function () {
    function CoreServicesModule() {
    }
    CoreServicesModule_1 = CoreServicesModule;
    CoreServicesModule.forRoot = function () {
        return {
            ngModule: CoreServicesModule_1,
            providers: [_firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_2__["TrackService"], _lastfm_lastfm_service__WEBPACK_IMPORTED_MODULE_3__["LastfmService"], _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_4__["FilterTrackService"]]
        };
    };
    CoreServicesModule = CoreServicesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [],
        })
    ], CoreServicesModule);
    return CoreServicesModule;
    var CoreServicesModule_1;
}());



/***/ }),

/***/ "./src/app/filter-side-bar/filter-track.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/filter-side-bar/filter-track.service.ts ***!
  \*********************************************************/
/*! exports provided: FilterTrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTrackService", function() { return FilterTrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterTrackService = /** @class */ (function () {
    function FilterTrackService() {
        this.FilterSubject = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    FilterTrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FilterTrackService);
    return FilterTrackService;
}());



/***/ }),

/***/ "./src/app/firebase-services/track-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/firebase-services/track-service.service.ts ***!
  \************************************************************/
/*! exports provided: TrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackService", function() { return TrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filter-side-bar/filter-track.service */ "./src/app/filter-side-bar/filter-track.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackService = /** @class */ (function () {
    function TrackService(afs, filterService) {
        this.afs = afs;
        this.filterService = filterService;
        this.trackCollection = afs.collection('Tracks', function (ref) {
            return ref.orderBy('Artist');
        });
        this.tracks = this.trackCollection.valueChanges();
        this.searchTrackByTrackName$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.searchTrackByArtistName$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.searchTrackByTrackID$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.trackNameQueryObservable = this.searchTrackByTrackName$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (trackName) {
            return afs.collection('Tracks', function (ref) {
                var query = ref;
                if (trackName) {
                    query = query.where('Track', '==', trackName);
                }
                return query;
            }).valueChanges();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { console.log(err); return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err); }));
        this.trackIDQueryObservable = this.searchTrackByTrackID$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (ID) { return afs.collection('Tracks').doc(ID).ref.get().then(function (doc) {
            if (doc.exists) {
                console.log(doc.data());
            }
            else {
                console.log('Document Does Not Exist');
            }
        }).catch(function (err) { return console.log(err); }); })).subscribe();
    }
    TrackService.prototype.createTrack = function (track) {
        try {
            this.trackCollection.add(track);
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    TrackService.prototype.getCollection$ = function (filter) {
        var _this = this;
        return this.afs.collection('Tracks', function (ref) {
            var query = ref;
            if (filter) {
                if (filter.trackName) {
                    query = _this.textSearchQuery(filter.trackName, 'Track', query);
                }
                if (filter.artistName) {
                    query = _this.textSearchQuery(filter.artistName, 'Artist', query);
                }
                if (filter.albumName) {
                    query = _this.textSearchQuery(filter.albumName, 'Album', query);
                }
            }
            return query;
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    TrackService.prototype.textSearchQuery = function (searchString, searchTerm, query) {
        var strSearch = searchString;
        var strlength = strSearch.length;
        var strFrontCode = strSearch.slice(0, strlength - 1);
        var strEndCode = strSearch.slice(strlength - 1, strSearch.length);
        var startcode = strSearch;
        var endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
        return query.where(searchTerm, '>=', startcode).where(searchTerm, '<', endcode);
    };
    TrackService.prototype.updateTrack = function (track) {
        return this.trackDoc.update(track);
    };
    TrackService.prototype.findTrack = function (trackName) {
        return this.afs.collection('Tracks', function (ref) { return ref.where('track', '==', trackName); }).valueChanges();
    };
    TrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_4__["FilterTrackService"]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "./src/app/lastfm/last-fm-search/last-fm-search.component.css":
/*!********************************************************************!*\
  !*** ./src/app/lastfm/last-fm-search/last-fm-search.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.listOption{\r\n    display: flex;\r\n}\r\n\r\n.listOption img{\r\n    border-radius: 50%;\r\n}\r\n\r\n.details{\r\n    margin-left:25px;\r\n    margin-top:21px;\r\n}\r\n\r\n.mat-list .mat-list-item, .mat-list .mat-list-option, .mat-nav-list .mat-list-item, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-item, .mat-selection-list .mat-list-option {\r\n    display: block;\r\n    height: 75px;\r\n}"

/***/ }),

/***/ "./src/app/lastfm/last-fm-search/last-fm-search.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/lastfm/last-fm-search/last-fm-search.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Search Last.fm: </h3>\n<form [formGroup] = \"lastFmSearch\">\n  <mat-form-field id=\"track\">\n    <input matInput formControlName=\"TrackName\" type=\"text\" placeholder=\"Search Last.fm...\" >\n  </mat-form-field>\n</form>\n\n<mat-selection-list id=\"trackRes\" #trackRes>\n  <mat-list-option *ngFor=\"let track of suggestedTrackList\" [value]=\"track\">\n    <div class=\"listOption\">\n      <img src='{{track.image[1][[\"#text\"]]}}'> <div class=\"details\">{{track.name}} / {{track.artist}}</div>\n    </div>\n  </mat-list-option>\n</mat-selection-list>"

/***/ }),

/***/ "./src/app/lastfm/last-fm-search/last-fm-search.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/lastfm/last-fm-search/last-fm-search.component.ts ***!
  \*******************************************************************/
/*! exports provided: LastFmSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastFmSearchComponent", function() { return LastFmSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _lastfm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lastfm.service */ "./src/app/lastfm/lastfm.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LastFmSearchComponent = /** @class */ (function () {
    function LastFmSearchComponent(lastfm, fb) {
        this.lastfm = lastfm;
        this.fb = fb;
        this.trackSelectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LastFmSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lastFmSearch = this.fb.group({
            TrackName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.lastFmSearch.valueChanges.subscribe(function (searchValues) {
            _this.lastfm.searchTracks(searchValues.TrackName, searchValues.ArtistName).subscribe(function (tracks) {
                _this.suggestedTrackList = tracks.results.trackmatches.track;
            });
        });
        this.trackRes.selectionChange.subscribe(function (selection) {
            _this.trackRes.deselectAll();
            selection.option.selected = true;
            if (selection.option.value.mbid !== undefined && selection.option.value.mbid !== '') {
                _this.lastfm.getTrackInfoMbid(selection.option.value.mbid).subscribe(function (res) {
                    // this.setFormWithTrackData(res.track);
                    _this.sendTrack(res.track);
                });
            }
            else {
                _this.lastfm.getTrackInfo(selection.option.value.name, selection.option.value.artist).subscribe(function (res) {
                    // this.setFormWithTrackData(res.track);
                    _this.sendTrack(res.track);
                });
            }
        });
    };
    LastFmSearchComponent.prototype.sendTrack = function (track) {
        this.trackSelectionEvent.emit(track);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('trackRes'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"])
    ], LastFmSearchComponent.prototype, "trackRes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LastFmSearchComponent.prototype, "trackSelectionEvent", void 0);
    LastFmSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-last-fm-search',
            template: __webpack_require__(/*! ./last-fm-search.component.html */ "./src/app/lastfm/last-fm-search/last-fm-search.component.html"),
            styles: [__webpack_require__(/*! ./last-fm-search.component.css */ "./src/app/lastfm/last-fm-search/last-fm-search.component.css")]
        }),
        __metadata("design:paramtypes", [_lastfm_service__WEBPACK_IMPORTED_MODULE_2__["LastfmService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LastFmSearchComponent);
    return LastFmSearchComponent;
}());



/***/ }),

/***/ "./src/app/lastfm/last-fm-search/last-fm-search.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/lastfm/last-fm-search/last-fm-search.module.ts ***!
  \****************************************************************/
/*! exports provided: LastFmSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastFmSearchModule", function() { return LastFmSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _last_fm_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./last-fm-search.component */ "./src/app/lastfm/last-fm-search/last-fm-search.component.ts");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core-services/core-services.module */ "./src/app/core-services/core-services.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LastFmSearchModule = /** @class */ (function () {
    function LastFmSearchModule() {
    }
    LastFmSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__["AngMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_5__["CoreServicesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_last_fm_search_component__WEBPACK_IMPORTED_MODULE_2__["LastFmSearchComponent"]],
            providers: [],
            exports: [_last_fm_search_component__WEBPACK_IMPORTED_MODULE_2__["LastFmSearchComponent"]]
        })
    ], LastFmSearchModule);
    return LastFmSearchModule;
}());



/***/ }),

/***/ "./src/app/lastfm/lastfm.service.ts":
/*!******************************************!*\
  !*** ./src/app/lastfm/lastfm.service.ts ***!
  \******************************************/
/*! exports provided: LastfmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastfmService", function() { return LastfmService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _lastfmEndpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lastfmEndpoints */ "./src/app/lastfm/lastfmEndpoints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LastfmService = /** @class */ (function () {
    function LastfmService(http) {
        this.http = http;
        this.lastFmEnv = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].lastfm;
        this.lastFmMethods = _lastfmEndpoints__WEBPACK_IMPORTED_MODULE_3__["LastfmMethods"];
        this.apiPath = 'http://ws.audioscrobbler.com/2.0/';
    }
    LastfmService.prototype.getTrackInfo = function (track, artist) {
        if (artist === void 0) { artist = ''; }
        var method = this.lastFmMethods.getTrackInfo;
        method.parameters.artist = artist;
        method.parameters.track = track;
        var apiUrl = this.createLastFmURL(method);
        method.parameters = {};
        return this.http.get(apiUrl);
    };
    LastfmService.prototype.getTrackInfoMbid = function (mbid) {
        var method = this.lastFmMethods.getTrackInfo;
        method.parameters.mbid = mbid;
        var apiUrl = this.createLastFmURL(method);
        method.parameters = {};
        return this.http.get(apiUrl);
    };
    LastfmService.prototype.searchTracks = function (track, artist) {
        if (track === void 0) { track = ''; }
        if (artist === void 0) { artist = ''; }
        var method = this.lastFmMethods.searchTracks;
        method.parameters.track = track;
        if (artist !== '') {
            method.parameters.artist = artist;
        }
        var apiUrl = this.createLastFmURL(method);
        return this.http.get(apiUrl);
    };
    LastfmService.prototype.getTrackTags = function (track, artist) {
        if (artist === void 0) { artist = ''; }
        var method = this.lastFmMethods.getTrackTags;
        method.parameters.artist = artist;
        method.parameters.track = track;
        var apiUrl = this.createLastFmURL(method);
        return this.http.get(apiUrl);
    };
    LastfmService.prototype.createLastFmURL = function (method) {
        var url = this.apiPath + method.url;
        var apiKey = '&api_key=' + this.lastFmEnv.apiKey;
        url = url + apiKey;
        for (var key in method.parameters) {
            if (method.parameters.hasOwnProperty(key)) {
                var paramstring = '&' + key + '=' + method.parameters[key];
                url += paramstring;
            }
        }
        url = url + '&format=json';
        return url;
    };
    LastfmService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LastfmService);
    return LastfmService;
}());



/***/ }),

/***/ "./src/app/lastfm/lastfmEndpoints.ts":
/*!*******************************************!*\
  !*** ./src/app/lastfm/lastfmEndpoints.ts ***!
  \*******************************************/
/*! exports provided: LastfmMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastfmMethods", function() { return LastfmMethods; });
var LastfmMethods = /** @class */ (function () {
    function LastfmMethods() {
    }
    LastfmMethods.getTrackInfo = {
        url: '?method=track.getInfo',
        parameters: {
            artist: '',
            track: '',
        },
        autocorrect: 1
    };
    LastfmMethods.getTrackTags = {
        url: '?method=track.gettoptags',
        parameters: {
            artist: '',
            track: '',
        },
        autocorrect: 1
    };
    LastfmMethods.searchTracks = {
        url: '?method=track.search',
        parameters: {
            track: '',
        },
        autocorrect: 1
    };
    return LastfmMethods;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep :root .mat-tab-links {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"links\" mat-tab-nav-bar>\n    <a mat-tab-link\n    *ngFor=\"let link of navLinks\"\n    [routerLink]=\"['/'+link.path]\"\n    routerLinkActive=\"active\" #rla=\"routerLinkActive\"\n    [active]=\"rla.isActive\">\n    {{link.label}}\n    </a>\n  </nav>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(router) {
        this.router = router;
        this.navLinks = [{ path: 'home', label: 'Home' },
            { path: 'search', label: 'Search Tracks' },
            { path: 'addCut', label: 'Add Tracks' },
            { path: 'playlists', label: 'Playlists' },
            { path: 'forum', label: 'Forum' },
        ];
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/nav-bar/nav-bar.module.ts ***!
  \*******************************************/
/*! exports provided: NavBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarModule", function() { return NavBarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavBarModule = /** @class */ (function () {
    function NavBarModule() {
    }
    NavBarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__["AngMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ],
            exports: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]],
            declarations: [_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"]]
        })
    ], NavBarModule);
    return NavBarModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA8zUViOVS6L2-YA65p6CTY9CdfvG1nUVQ',
        authDomain: 'deepcuts-477ba.firebaseapp.com',
        databaseURL: 'https://deepcuts-477ba.firebaseio.com',
        projectId: 'deepcuts-477ba',
        storageBucket: 'deepcuts-477ba.appspot.com',
        messagingSenderId: '254648362199'
    },
    lastfm: {
        apiKey: 'cb4fe7dd2d9e803f022eae657736864c',
        shared: '4f9ac50253414dee2d5dd7fd8bff379b',
        acct: 'Moya34',
        appName: 'DeepCuts'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\supremeruler\Sources\DeepCuts\DeepCuts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map