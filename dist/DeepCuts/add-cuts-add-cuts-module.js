(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-cuts-add-cuts-module"],{

/***/ "./src/app/add-cuts/add-cuts.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-cuts/add-cuts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#addCutsGrid{\r\n    display: -ms-grid;\r\n    display: grid;\r\n        grid-template-areas: \". lastfmsearch  addcuts .\";\r\n    -ms-grid-rows: auto;\r\n    grid-template-rows: auto;\r\n    -ms-grid-columns:  1fr 55px  1fr;\r\n    grid-template-columns:  1fr  1fr;\r\n    grid-column-gap: 55px;\r\n}\r\n\r\n#lastfmSearchWrapper form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 3;\r\n    grid-area: lastfmsearch;\r\n}\r\n\r\n#lastfmSearchWrapper{\r\n    margin-left: 30px;\r\n    max-width: 400px;\r\n}\r\n\r\n#addCutsMainWrapper form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    -ms-grid-row: 1;\r\n    -ms-grid-column: 5;\r\n    grid-area: addcuts;\r\n}\r\n\r\n.listOption{\r\n    display: flex;\r\n}\r\n\r\n.listOption img{\r\n    border-radius: 50%;\r\n}\r\n\r\n.details{\r\n    margin-left:25px;\r\n    margin-top:21px;\r\n}\r\n\r\n.mat-list .mat-list-item, .mat-list .mat-list-option, .mat-nav-list .mat-list-item, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-item, .mat-selection-list .mat-list-option {\r\n    display: block;\r\n    height: 75px;\r\n}"

/***/ }),

/***/ "./src/app/add-cuts/add-cuts.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-cuts/add-cuts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addCutsGrid\">\n  <div id=\"lastfmSearchWrapper\"> \n    <h1>Add Cuts</h1>\n    <app-last-fm-search (trackSelectionEvent)=\"recieveTrack($event)\"></app-last-fm-search>\n  </div>\n\n  <div id=\"addCutsMainWrapper\">\n    <h2>Track Details</h2>\n      <form [formGroup] = \"addCutForm\">\n          <mat-form-field id=\"artist\">\n            <input matInput formControlName=\"ArtistName\" type=\"text\" placeholder=\"Enter Artist Name\" >\n          </mat-form-field>\n    \n          <mat-form-field id=\"track\">\n            <input matInput formControlName=\"TrackName\" type=\"text\" placeholder=\"Enter Track Name\" >\n          </mat-form-field>\n\n          <mat-form-field id=\"album\">\n              <input matInput formControlName=\"AlbumName\" type=\"text\" placeholder=\"Enter Album Name\" >\n          </mat-form-field>\n  \n          <mat-form-field id=\"year\">\n              <input matInput formControlName=\"Release\" type=\"text\" placeholder=\"Enter Release Year\" >\n          </mat-form-field>\n\n          <mat-form-field class=\"genre-chip-list\">\n              <mat-chip-list #genreChipList>\n                <mat-chip *ngFor=\"let genre of genres\" [selectable]=\"false\"\n                         [removable]=\"removable\" (removed)=\"removeGenre(genre)\">\n                  {{genre.name}}\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input placeholder=\"Add Genre...\"\n                       [matChipInputFor]=\"genreChipList\"\n                       [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                       [matChipInputAddOnBlur]=\"true\"\n                       (matChipInputTokenEnd)=\"addGenre($event)\">\n              </mat-chip-list>\n            </mat-form-field>\n\n            <mat-form-field class=\"tag-chip-list\">\n                <mat-chip-list #tagChipList>\n                  <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"false\"\n                           [removable]=\"removable\" (removed)=\"removeTag(tag)\">\n                    {{tag.name}}\n                    <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                  </mat-chip>\n                  <input placeholder=\"Add Tag...\"\n                         [matChipInputFor]=\"tagChipList\"\n                         [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                         [matChipInputAddOnBlur]=\"true\"\n                         (matChipInputTokenEnd)=\"addTag($event)\">\n                </mat-chip-list>\n              </mat-form-field>\n\n          <mat-form-field id=\"description\">\n              <textarea matInput formControlName=\"Description\" type=\"text\" placeholder=\"Write a comment...\" ></textarea>\n          </mat-form-field>\n\n          <div class=\"albumArt\">\n            <img src=\"{{albumArt}}\">\n          </div>\n\n          <button mat-raised-button (click)=\"addCut()\" >Submit</button>\n      </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/add-cuts/add-cuts.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-cuts/add-cuts.component.ts ***!
  \************************************************/
/*! exports provided: AddCutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCutsComponent", function() { return AddCutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase-services/track-service.service */ "./src/app/firebase-services/track-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCutsComponent = /** @class */ (function () {
    function AddCutsComponent(trackService, fb) {
        this.trackService = trackService;
        this.fb = fb;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.removable = true;
        this.genres = [];
        this.tags = [];
    }
    AddCutsComponent.prototype.ngOnInit = function () {
        this.addCutForm = this.fb.group({
            ArtistName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            TrackName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            AlbumName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Tag: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Genre: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Release: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddCutsComponent.prototype.setFormWithTrackData = function (track) {
        var _this = this;
        this.tags = [];
        track.toptags.tag.forEach(function (tag) {
            _this.tags.push(tag);
        });
        if (track.album === undefined) {
            track.album = {};
            track.album.title = '';
            track.album.image = { '#text': '' };
            this.albumArt = '';
        }
        else {
            this.albumArt = track.album.image[3]['#text'];
        }
        this.addCutForm.setValue({
            ArtistName: track.artist.name,
            TrackName: track.name,
            AlbumName: track.album.title,
            Genre: this.genres,
            Tag: this.tags,
            Description: '',
            Release: '',
        });
    };
    AddCutsComponent.prototype.recieveTrack = function ($event) {
        this.setFormWithTrackData($event);
    };
    AddCutsComponent.prototype.addCut = function () {
        var formValue = this.addCutForm.value;
        var newCut = {
            Artist: formValue.ArtistName,
            Album: formValue.AlbumName,
            AlbumArt: this.albumArt,
            Track: formValue.TrackName,
            Description: formValue.Description,
            Release: formValue.Release,
            Genre: this.genres,
            Tags: this.tags,
            CutRating: 0,
            DeepRating: 0,
        };
        this.trackService.createTrack(newCut);
    };
    AddCutsComponent.prototype.addGenre = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.genres.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    AddCutsComponent.prototype.removeGenre = function (genre) {
        var index = this.genres.indexOf(genre);
        if (index >= 0) {
            this.genres.splice(index, 1);
        }
    };
    AddCutsComponent.prototype.addTag = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.tags.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    AddCutsComponent.prototype.removeTag = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    AddCutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-cuts',
            template: __webpack_require__(/*! ./add-cuts.component.html */ "./src/app/add-cuts/add-cuts.component.html"),
            styles: [__webpack_require__(/*! ./add-cuts.component.css */ "./src/app/add-cuts/add-cuts.component.css")]
        }),
        __metadata("design:paramtypes", [_firebase_services_track_service_service__WEBPACK_IMPORTED_MODULE_1__["TrackService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddCutsComponent);
    return AddCutsComponent;
}());



/***/ }),

/***/ "./src/app/add-cuts/add-cuts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-cuts/add-cuts.module.ts ***!
  \*********************************************/
/*! exports provided: AddCutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCutsModule", function() { return AddCutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_cuts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-cuts.component */ "./src/app/add-cuts/add-cuts.component.ts");
/* harmony import */ var _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ang-material/ang-material.module */ "./src/app/ang-material/ang-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core-services/core-services.module */ "./src/app/core-services/core-services.module.ts");
/* harmony import */ var _lastfm_last_fm_search_last_fm_search_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lastfm/last-fm-search/last-fm-search.module */ "./src/app/lastfm/last-fm-search/last-fm-search.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _add_cuts_component__WEBPACK_IMPORTED_MODULE_2__["AddCutsComponent"] }
];
var AddCutsModule = /** @class */ (function () {
    function AddCutsModule() {
    }
    AddCutsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ang_material_ang_material_module__WEBPACK_IMPORTED_MODULE_3__["AngMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _core_services_core_services_module__WEBPACK_IMPORTED_MODULE_6__["CoreServicesModule"],
                _lastfm_last_fm_search_last_fm_search_module__WEBPACK_IMPORTED_MODULE_7__["LastFmSearchModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
            declarations: [_add_cuts_component__WEBPACK_IMPORTED_MODULE_2__["AddCutsComponent"]],
        })
    ], AddCutsModule);
    return AddCutsModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-cuts-add-cuts-module.js.map