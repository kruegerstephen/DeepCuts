(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-cuts-view-cuts-module"],{

/***/ "./src/app/filter-side-bar/filter-side-bar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/filter-side-bar/filter-side-bar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#filterGrid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \"artist\"\r\n                         \"track\"\r\n                         \"year\"\r\n                         \"genre\";\r\n    max-width: 300px;\r\n    border: 1px black solid;\r\n    height:100vh;\r\n    padding:10px;\r\n}\r\n\r\n\r\n#artist{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 1;\r\n    grid-area: artist;\r\n}\r\n\r\n\r\n#genres{\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    grid-area: genre;\r\n}\r\n\r\n\r\n#year{\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n    grid-area: year;\r\n}\r\n\r\n\r\n#track{\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    grid-area: track;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/filter-side-bar/filter-side-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/filter-side-bar/filter-side-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"filterGrid\">\n  <form [formGroup] = \"filterForm\">\n    <mat-form-field id=\"artist\">\n      <input matInput formControlName=\"ArtistName\" type=\"text\" placeholder=\"Enter Artist Name\" >\n    </mat-form-field>\n\n    <mat-form-field id=\"track\">\n      <input matInput formControlName=\"TrackName\" type=\"text\" placeholder=\"Enter Track Name\" >\n    </mat-form-field>\n\n    <mat-form-field id=\"album\">\n      <input matInput formControlName=\"AlbumName\" type=\"text\" placeholder=\"Enter Album Name\" >\n    </mat-form-field>\n\n    <mat-form-field id=\"year\">\n      <input matInput formControlName=\"Release\" type=\"text\" placeholder=\"Enter Release Year\" >\n    </mat-form-field>\n\n    <mat-selection-list id=\"genres\" #genres>\n      <mat-list-option (click)=\"addGenre(genre)\" *ngFor=\"let genre of genresList\">\n        {{genre}}\n      </mat-list-option>\n    </mat-selection-list>\n\n    <button mat-raised-button (click)=\"filterTracks()\">Search!</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/filter-side-bar/filter-side-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/filter-side-bar/filter-side-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSideBarComponent", function() { return FilterSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-services/track-service.service */ "./src/app/firebase-services/track-service.service.ts");
/* harmony import */ var _filter_track_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-track.service */ "./src/app/filter-side-bar/filter-track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterSideBarComponent = /** @class */ (function () {
    function FilterSideBarComponent(trackService, fb, filterService) {
        this.trackService = trackService;
        this.fb = fb;
        this.filterService = filterService;
        this.genresList = [];
    }
    FilterSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackService.tracks.subscribe(function (tracks) {
            _this.trackList = tracks;
        });
        this.buildForm();
    };
    FilterSideBarComponent.prototype.buildForm = function () {
        this.filterForm = this.fb.group({
            ArtistName: [''],
            AlbumName: [''],
            TrackName: [''],
            Genre: [[]],
            Release: [''],
            DeepRating: [''],
            CutRating: [''],
        });
    };
    FilterSideBarComponent.prototype.filterTracks = function () {
        var filterValues = this.filterForm.value;
        var filter = {
            artistName: filterValues.ArtistName,
            trackName: filterValues.TrackName,
            albumName: filterValues.AlbumName,
            rating: filterValues.DeepRating,
            year: filterValues.Release,
        };
        this.filterService.FilterSubject.next(filter);
    };
    FilterSideBarComponent.prototype.addGenre = function (genre) {
        var isAdded = this.filterForm.value.Genre.includes(genre);
        if (!isAdded) {
            this.filterForm.value.Genre.push(genre);
        }
        else {
            var idx = this.filterForm.value.Genre.indexOf(genre);
            if (idx > -1) {
                this.filterForm.value.Genre.splice(idx, 1);
            }
        }
    };
    FilterSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter-side-bar',
            template: __webpack_require__(/*! ./filter-side-bar.component.html */ "./src/app/filter-side-bar/filter-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./filter-side-bar.component.css */ "./src/app/filter-side-bar/filter-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_2__["TrackService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _filter_track_service__WEBPACK_IMPORTED_MODULE_3__["FilterTrackService"]])
    ], FilterSideBarComponent);
    return FilterSideBarComponent;
}());



/***/ }),

/***/ "./src/app/filter-side-bar/filter.module.ts":
/*!**************************************************!*\
  !*** ./src/app/filter-side-bar/filter.module.ts ***!
  \**************************************************/
/*! exports provided: FilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-side-bar.component */ "./src/app/filter-side-bar/filter-side-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_4__["AngMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_filter_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["FilterSideBarComponent"]],
            exports: [_filter_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["FilterSideBarComponent"]]
        })
    ], FilterModule);
    return FilterModule;
}());



/***/ }),

/***/ "./src/app/track-details/track-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/track-details/track-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/track-details/track-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/track-details/track-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"tracks\">\n    <li *ngFor=\"let track of trackDetails\">\n       {{track.Track}}\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/track-details/track-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/track-details/track-details.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackDetailsComponent", function() { return TrackDetailsComponent; });
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


var TrackDetailsComponent = /** @class */ (function () {
    function TrackDetailsComponent(route) {
        this.route = route;
    }
    TrackDetailsComponent.prototype.ngOnInit = function () {
    };
    TrackDetailsComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TrackDetailsComponent.prototype, "trackDetails", void 0);
    TrackDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-details',
            template: __webpack_require__(/*! ./track-details.component.html */ "./src/app/track-details/track-details.component.html"),
            styles: [__webpack_require__(/*! ./track-details.component.css */ "./src/app/track-details/track-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TrackDetailsComponent);
    return TrackDetailsComponent;
}());



/***/ }),

/***/ "./src/app/track-details/track-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/track-details/track-details.module.ts ***!
  \*******************************************************/
/*! exports provided: TrackDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackDetailsModule", function() { return TrackDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _track_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track-details.component */ "./src/app/track-details/track-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrackDetailsModule = /** @class */ (function () {
    function TrackDetailsModule() {
    }
    TrackDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_track_details_component__WEBPACK_IMPORTED_MODULE_2__["TrackDetailsComponent"]],
            exports: [_track_details_component__WEBPACK_IMPORTED_MODULE_2__["TrackDetailsComponent"]]
        })
    ], TrackDetailsModule);
    return TrackDetailsModule;
}());



/***/ }),

/***/ "./src/app/view-cuts/view-cuts.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-cuts/view-cuts.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#displayGrid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \". tracks filter\";\r\n}\r\n\r\n#filterBar{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    grid-area: filter;\r\n}\r\n\r\n#tracks{\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 2;\r\n    grid-area: tracks;\r\n}"

/***/ }),

/***/ "./src/app/view-cuts/view-cuts.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-cuts/view-cuts.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"displayGrid\">\n\n<app-filter-side-bar id=\"filterBar\"></app-filter-side-bar>\n\n<ul id=\"tracks\">\n    <li *ngFor=\"let track of tracks$ | async\">\n        <app-track-details [trackDetails]=track></app-track-details>\n    </li>\n</ul>\n\n\n</div>"

/***/ }),

/***/ "./src/app/view-cuts/view-cuts.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-cuts/view-cuts.component.ts ***!
  \**************************************************/
/*! exports provided: ViewCutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCutsComponent", function() { return ViewCutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase-services/track-service.service */ "./src/app/firebase-services/track-service.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filter-side-bar/filter-track.service */ "./src/app/filter-side-bar/filter-track.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewCutsComponent = /** @class */ (function () {
    function ViewCutsComponent(trackService, filterService, route, router, afs) {
        this.trackService = trackService;
        this.filterService = filterService;
        this.route = route;
        this.router = router;
        this.afs = afs;
    }
    ViewCutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterService.FilterSubject.subscribe(function (filter) {
            _this.currentFilter = filter;
            _this.tracks$ = _this.trackService.getCollection$(_this.currentFilter);
        });
        this.tracks$ = this.trackService.getCollection$(this.currentFilter);
    };
    ViewCutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-cuts',
            template: __webpack_require__(/*! ./view-cuts.component.html */ "./src/app/view-cuts/view-cuts.component.html"),
            styles: [__webpack_require__(/*! ./view-cuts.component.css */ "./src/app/view-cuts/view-cuts.component.css")]
        }),
        __metadata("design:paramtypes", [_firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_1__["TrackService"],
            _filter_side_bar_filter_track_service__WEBPACK_IMPORTED_MODULE_3__["FilterTrackService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ViewCutsComponent);
    return ViewCutsComponent;
}());



/***/ }),

/***/ "./src/app/view-cuts/view-cuts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/view-cuts/view-cuts.module.ts ***!
  \***********************************************/
/*! exports provided: ViewCutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCutsModule", function() { return ViewCutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_cuts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-cuts.component */ "./src/app/view-cuts/view-cuts.component.ts");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_side_bar_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../filter-side-bar/filter.module */ "./src/app/filter-side-bar/filter.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _track_details_track_details_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../track-details/track-details.module */ "./src/app/track-details/track-details.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '',
        component: _view_cuts_component__WEBPACK_IMPORTED_MODULE_2__["ViewCutsComponent"],
    }
];
var ViewCutsModule = /** @class */ (function () {
    function ViewCutsModule() {
    }
    ViewCutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__["AngMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _filter_side_bar_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _track_details_track_details_module__WEBPACK_IMPORTED_MODULE_7__["TrackDetailsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            ],
            declarations: [_view_cuts_component__WEBPACK_IMPORTED_MODULE_2__["ViewCutsComponent"]]
        })
    ], ViewCutsModule);
    return ViewCutsModule;
}());



/***/ })

}]);
//# sourceMappingURL=view-cuts-view-cuts-module.js.map