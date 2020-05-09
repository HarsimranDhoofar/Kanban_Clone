(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");





const routes = [
    { path: '', component: _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'kanbanClone';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main-view/main-view.component */ "./src/app/pages/main-view/main-view.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_5__["MainViewComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/crud-backend.service.ts":
/*!*****************************************!*\
  !*** ./src/app/crud-backend.service.ts ***!
  \*****************************************/
/*! exports provided: CrudBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudBackendService", function() { return CrudBackendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_column_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/column.model */ "./src/app/models/column.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CrudBackendService {
    constructor(http) {
        this.http = http;
        this.boardUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.boards = [];
        this.history = [];
        this.columnUpdateTask = new _models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"]("", "", []);
    }
    newColumn(col) {
        this.http.post('http://localhost:3000/api/boards', col).subscribe((responseData) => {
            console.log(responseData.message);
        });
        this.boards.push(col);
    }
    deleteColumn(_id) {
        this.http.delete("http://localhost:3000/api/boards/" + _id).subscribe((responseData) => {
            console.log(responseData.message);
        });
    }
    newTask(col) {
        this.http.put('http://localhost:3000/api/boards', col)
            .subscribe((responseData) => {
            console.log(responseData.message);
        });
    }
    editTask(taskNameToBeUpdated, colIdUserClickedOn) {
        console.log(taskNameToBeUpdated);
        this.http.delete('http://localhost:3000/api/boards/edit/' + colIdUserClickedOn / taskNameToBeUpdated)
            .subscribe((responseData) => {
        });
    }
    clearEveryThing() {
        this.http.delete("http://localhost:3000/api/boards/clearEveryThing/All/E").subscribe((responseData) => {
            console.log(responseData.message);
        });
    }
    deleteTask(taskId, colId, item) {
        this.http.delete("http://localhost:3000/api/boards/" + colId + "/" + item).subscribe((responseData) => {
            console.log(responseData.message);
        });
    }
    getBoard() {
        return this.http.get('http://localhost:3000/api/boards');
    }
    getBoardUpdateListener() {
        return this.boardUpdated.asObservable();
    }
}
CrudBackendService.ɵfac = function CrudBackendService_Factory(t) { return new (t || CrudBackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CrudBackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CrudBackendService, factory: CrudBackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrudBackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/column.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/column.model.ts ***!
  \****************************************/
/*! exports provided: Column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return Column; });
class Column {
    constructor(_id, name, columns) {
        this._id = _id;
        this.name = name;
        this.columns = columns;
    }
}


/***/ }),

/***/ "./src/app/models/description.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/description.model.ts ***!
  \*********************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
class Description {
    constructor(_id, taskName, desc, history) {
        this._id = _id;
        this.taskName = taskName;
        this.desc = desc;
        this.history = history;
    }
}


/***/ }),

/***/ "./src/app/pages/main-view/main-view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-view/main-view.component.ts ***!
  \********************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/column.model */ "./src/app/models/column.model.ts");
/* harmony import */ var src_app_models_description_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/description.model */ "./src/app/models/description.model.ts");
/* harmony import */ var _crud_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../crud-backend.service */ "./src/app/crud-backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function MainViewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.startVoiceRecognitionColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainViewComponent_ng_template_19_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.voiceText);
} }
function MainViewComponent_ng_template_19_ng_container_0_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listening\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MainViewComponent_ng_template_19_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start talking\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainViewComponent_ng_template_19_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainViewComponent_ng_template_19_ng_container_0_ng_template_2_ng_container_0_Template, 3, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_ng_template_19_ng_container_0_ng_template_2_ng_template_1_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.voiceActiveSectionListening)("ngIfElse", _r14);
} }
function MainViewComponent_ng_template_19_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_ng_template_19_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainViewComponent_ng_template_19_ng_container_0_ng_template_2_Template, 3, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.voiceText)("ngIfElse", _r11);
} }
function MainViewComponent_ng_template_19_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Didn\u2019t catch that");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainViewComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainViewComponent_ng_template_19_ng_container_0_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_ng_template_19_ng_template_1_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_ng_template_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeVoiceRecognition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_ng_template_19_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.startVoiceRecognitionColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.voiceActiveSectionError)("ngIfElse", _r8);
} }
function MainViewComponent_div_23_ng_template_6_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.voiceTextTask);
} }
function MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Listening\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start talking\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_ng_container_0_Template, 3, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_ng_template_1_Template, 2, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.voiceActiveSectionTasksListening)("ngIfElse", _r31);
} }
function MainViewComponent_div_23_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_div_23_ng_template_6_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainViewComponent_div_23_ng_template_6_ng_container_0_ng_template_2_Template, 3, 2, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.voiceTextTask)("ngIfElse", _r28);
} }
function MainViewComponent_div_23_ng_template_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Didn\u2019t catch that");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainViewComponent_div_23_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainViewComponent_div_23_ng_template_6_ng_container_0_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainViewComponent_div_23_ng_template_6_ng_template_1_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_23_ng_template_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.closeVoiceRecognition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_23_ng_template_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const col_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.startVoiceRecognitionTask(col_r19._id, col_r19.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.voiceActiveSectionTasksError)("ngIfElse", _r25);
} }
function MainViewComponent_div_23_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_23_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const item_r37 = ctx.$implicit; const col_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.toggleModal(col_r19._id, item_r37.taskName, col_r19.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r37.taskName, "");
} }
function MainViewComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const col_r19 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.onCreateNewTask(col_r19._id, col_r19.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainViewComponent_div_23_ng_template_6_Template, 9, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_23_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const col_r19 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.onDeleteColumn(col_r19._id, col_r19.name, col_r19.columns); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function MainViewComponent_div_23_Template_div_cdkDropListDropped_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.drop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainViewComponent_div_23_div_13_Template, 3, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r19.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", col_r19.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", col_r19.columns);
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
function MainViewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainViewComponent_div_24_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.descriptionMethod(_r45, ctx_r47.itemSeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "header", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_24_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.toggleModalClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_24_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.editTaskName(ctx_r50.itemSeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 Edit Task Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_24_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.editTaskName(ctx_r51.itemSeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 Delete Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_24_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.editTaskName(ctx_r52.itemSeleted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0 Speech to text description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_div_24_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.toggleModalClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r4.isModalActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.itemSeleted);
} }
class MainViewComponent {
    constructor(crudBackend, ngZone) {
        this.crudBackend = crudBackend;
        this.ngZone = ngZone;
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionDisabledTask = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.voiceActiveSectionTasksDisabled = true;
        this.voiceActiveSectionTasksDisabledTask = true;
        this.voiceActiveSectionTasksError = false;
        this.voiceActiveSectionTasksSuccess = false;
        this.voiceActiveSectionTasksListening = false;
        this.isModalActive = false;
        this.itemSeleted = "";
        this.column = [];
        this.history = [];
        this.message = '';
        this.desc = [];
    }
    initializeVoiceRecognitionCallback() {
        annyang.addCallback('error', (err) => {
            if (err.error === 'network') {
                this.voiceText = "Internet is require";
                annyang.abort();
                this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
            }
            else if (this.voiceText === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('soundstart', (res) => {
            this.ngZone.run(() => this.voiceActiveSectionListening = true);
        });
        annyang.addCallback('end', () => {
            if (this.voiceText === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('result', (userSaid) => {
            this.ngZone.run(() => this.voiceActiveSectionError = false);
            let queryText = userSaid[0];
            annyang.abort();
            this.voiceText = queryText;
            this.ngZone.run(() => this.voiceActiveSectionListening = false);
            this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
            if (this.voiceText != null && this.voiceText != "") {
                this.onCreateNewColumnVoice();
                annyang.abort();
            }
            this.closeVoiceRecognition();
        });
    }
    startVoiceRecognitionColumn() {
        this.voiceActiveSectionDisabled = false;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceText = undefined;
        if (annyang) {
            let commands = {
                'demo-annyang': () => { }
            };
            annyang.addCommands(commands);
            this.initializeVoiceRecognitionCallback();
            annyang.start({ autoRestart: false });
        }
    }
    startVoiceRecognitionTask(id, getColumnName) {
        this.voiceActiveSectionTasksDisabled = false;
        this.voiceActiveSectionTasksError = false;
        this.voiceActiveSectionTasksSuccess = false;
        this.voiceTextTask = undefined;
        if (annyang) {
            let commands = {
                'demo-annyang': () => { }
            };
            annyang.addCommands(commands);
            this.initializeVoiceRecognitionCallbackTask(id, getColumnName);
            annyang.start({ autoRestart: false });
        }
    }
    initializeVoiceRecognitionCallbackTask(id, getColumnName) {
        annyang.addCallback('error', (err) => {
            if (err.error === 'network') {
                this.voiceTextTask = "Internet is require";
                annyang.abort();
                this.ngZone.run(() => this.voiceActiveSectionTasksSuccess = true);
            }
            else if (this.voiceTextTask === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionTasksError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('soundstart', (res) => {
            this.ngZone.run(() => this.voiceActiveSectionTasksListening = true);
        });
        annyang.addCallback('end', () => {
            if (this.voiceTextTask === undefined) {
                this.ngZone.run(() => this.voiceActiveSectionTasksError = true);
                annyang.abort();
            }
        });
        annyang.addCallback('result', (userSaid) => {
            this.ngZone.run(() => this.voiceActiveSectionTasksError = false);
            let queryText = userSaid[0];
            annyang.abort();
            this.voiceTextTask = queryText;
            this.ngZone.run(() => this.voiceActiveSectionTasksListening = false);
            this.ngZone.run(() => this.voiceActiveSectionTasksSuccess = true);
            if (this.voiceText != null && this.voiceText != "") {
                this.onCreateNewTaskVoice(id, getColumnName, this.voiceTextTask);
                annyang.abort();
            }
            this.closeVoiceRecognition();
        });
    }
    closeVoiceRecognition() {
        this.voiceActiveSectionDisabled = true;
        this.voiceActiveSectionError = false;
        this.voiceActiveSectionSuccess = false;
        this.voiceActiveSectionListening = false;
        this.voiceText = undefined;
        if (annyang) {
            annyang.abort();
        }
    }
    ngOnInit() {
        this.getBoardData();
    }
    getBoardData() {
        this.crudBackend.getBoard().subscribe((data) => {
            const col = data["boards"];
            for (let i = 0; i <= Object.keys(col).length - 1; i++) {
                const len = col[i];
                const _id = len['_id'];
                const columnName = len['name'];
                const taskLength = len['columns'];
                const description = [];
                for (let a = 0; a <= Object.keys(taskLength).length - 1; a++) {
                    const leng = taskLength[a];
                    const taskId = leng['_id'];
                    const desc = leng['desc'];
                    const history = leng['history'];
                    const taskName = leng['taskName'];
                    if (taskName != null && taskName != "") {
                        description.push(new src_app_models_description_model__WEBPACK_IMPORTED_MODULE_3__["Description"](taskId, taskName, desc, history));
                    }
                }
                this.column.push(new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"](_id, columnName, description));
            }
        });
    }
    onCreateNewColumn() {
        var columnName = prompt("Please enter the name of the column", "New Column");
        if (columnName != null && columnName != "") {
            var col = new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"](this.makeid(9), columnName, []);
            this.column.push(col);
            this.crudBackend.newColumn(col);
        }
        else {
            alert("Column name can not be empty");
        }
    }
    onCreateNewColumnVoice() {
        var col = new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"](this.makeid(9), this.voiceText, []);
        this.column.push(col);
        this.crudBackend.newColumn(col);
    }
    onCreateNewTask(id, getColumnName) {
        var taskname = prompt("Please enter the name of the task", "New Task");
        if (taskname != null && taskname != "") {
            this.column.find((data) => {
                this.history.push("New Task Created on: " + Date.now());
                data.columns.push(new src_app_models_description_model__WEBPACK_IMPORTED_MODULE_3__["Description"](this.makeid(9), taskname, "", this.history));
                if (data.name != getColumnName) {
                    data.columns.pop();
                }
                const col = new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"](id, getColumnName, data.columns);
                this.crudBackend.newTask(col);
            });
        }
    }
    onCreateNewTaskVoice(id, getColumnName, voiceTaskName) {
        if (voiceTaskName != null && voiceTaskName != "") {
            this.column.find((data) => {
                this.history.push("New Task Created on: " + Date.now());
                data.columns.push(new src_app_models_description_model__WEBPACK_IMPORTED_MODULE_3__["Description"](this.makeid(9), voiceTaskName, "", this.history));
                if (data.name != getColumnName) {
                    data.columns.pop();
                }
                const col = new src_app_models_column_model__WEBPACK_IMPORTED_MODULE_2__["Column"](id, getColumnName, data.columns);
                this.crudBackend.newTask(col);
            });
        }
    }
    onDeleteColumn(id, getColumnName, getTasks) {
        const conf = confirm('Are you sure you want to delete this column?');
        if (conf == true) {
            for (var i = this.column.length - 1; i >= 0; i--) {
                if (this.column[i].name === getColumnName) {
                    this.column.splice(i, 1);
                }
            }
            this.crudBackend.deleteColumn(id);
        }
    }
    onEditBoardName() {
        var getBoardName = prompt("Please enter the board Name", "New Board");
    }
    descriptionMethod(description, gettaskName) {
        this.column.find((data) => {
            for (var i = data.columns.length - 1; i >= 0; i--) {
                if (data.columns[i].taskName === gettaskName) {
                    data.columns[i].desc = description;
                }
            }
        });
    }
    toggleModal(id, items, getColumnName) {
        console.log(items);
        this.onClickTaskColid = id;
        this.onClickTaskItem = items;
        console.log(this.itemSeleted);
        this.itemSeleted = items;
        this.itemFromColumn = getColumnName;
        this.isModalActive = !this.isModalActive;
    }
    onClearEveryThing() {
        const conf = confirm('Are you sure you want to delete everything and start fresh?');
        if (conf == true) {
            this.column = [];
            this.crudBackend.clearEveryThing();
        }
    }
    editTaskName(gettaskName) {
        console.log(this.onClickTaskColid);
        console.log(this.onClickTaskItem);
        var editName = prompt("Please enter the new taskName", "New Task Name");
        this.column.find((data) => {
            for (var i = data.columns.length - 1; i >= 0; i--) {
                if (data.columns[i].taskName === gettaskName) {
                    this.itemSeleted = editName;
                    data.columns[i].taskName = editName;
                    console.log("This is now : " + data.columns[i]);
                    // this.desc.push
                    // const col = new Column(this.onClickTaskColid, this.itemFromColumn, this.descdata.columns[i])
                    this.crudBackend.editTask(editName, this.onClickTaskColid);
                }
            }
        });
    }
    toggleModalClose() {
        this.isModalActive = !this.isModalActive;
    }
    ondeleteTask(taskId, colId, item, getColumnName) {
        for (var i = this.column.length - 1; i >= 0; i--) {
            if (this.column[i].name === getColumnName) {
                for (var a = this.column[i].columns.length - 1; a >= 0; a--) {
                    if (this.column[i].columns[a].taskName === item) {
                        this.column[i].columns.splice(a, 1);
                    }
                }
            }
        }
        this.crudBackend.deleteTask(taskId, colId, item);
    }
    drop(event) {
        console.log(event.container.data, event.previousIndex, event.currentIndex);
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result.toString();
    }
}
MainViewComponent.ɵfac = function MainViewComponent_Factory(t) { return new (t || MainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crud_backend_service__WEBPACK_IMPORTED_MODULE_4__["CrudBackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainViewComponent, selectors: [["app-main-view"]], decls: 25, vars: 4, consts: [[1, "root"], [1, "navbar", "has-background-dark"], [1, "navbar-brand"], [1, "navbar-item"], [1, "app-name", "has-gradient-text"], [1, "board"], [1, "board-bar"], [1, "board-name"], [1, "buttons", "are-small"], [1, "button", "is-primary", "is-inverted", "is-outlined", "is-light", 3, "click"], [1, "fa", "fa-plus"], [4, "ngIf", "ngIfElse"], [1, "button", "is-danger", "is-inverted", "is-outlined", "is-light", 3, "click"], [1, "fa", "fa-times"], ["voicesection", ""], [1, "board-wrapper"], ["cdkDropListGroup", "", 1, "board-columns"], ["class", "board-column", 4, "ngFor", "ngForOf"], ["class", "modal", 3, "ngClass", 4, "ngIf"], ["type", "button", 1, "button", "is-link", "is-inverted", "is-outlined", "is-light", 3, "click"], [1, "fa", "fa-microphone"], ["failure", ""], [1, "button", "is-link", "is-inverted", "is-outlined", "is-light", 3, "click"], ["start", ""], ["beginning", ""], [1, "board-column"], [1, "column-title"], [1, "button", "is-small", "is-link", "is-inverted", "is-outlined", "is-light", 3, "click"], ["voices", ""], [1, "button", "is-small", "is-danger", "is-inverted", "is-outlined", "is-light", 3, "click"], [1, "fa", "fa-trash"], ["cdkDropList", "", 1, "tasks-container", 3, "cdkDropListData", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["class", "task", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["failures", ""], ["starts", ""], ["beginnings", ""], ["cdkDrag", "", 1, "task", 3, "click"], [1, "modal", 3, "ngClass"], [1, "modal-background"], [3, "ngSubmit"], ["description", "ngForm"], [1, "modal-card"], [1, "modal-card-head"], [1, "modal-card-title"], ["aria-label", "close", 1, "delete", 3, "click"], [1, "modal-card-body"], [1, "button", "is-small", "is-rounded", "is-dark", 3, "click"], [1, "fa", "fa-edit"], [1, "button", "is-small", "is-rounded", "is-danger", 3, "click"], [1, "button", "is-small", "is-rounded", "is-info", 3, "click"], ["ngModel", "", "type", "email", "name", "desc", "placeholder", "Your description", 1, "textarea", "form-control"], ["desc", "ngModel"], [1, "modal-card-foot"], ["type", "submit", 1, "button", "is-success"], [1, "button", 3, "click"]], template: function MainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KANBAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_Template_button_click_11_listener() { return ctx.onCreateNewColumn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0Create New Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainViewComponent_div_14_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainViewComponent_Template_button_click_16_listener() { return ctx.onClearEveryThing(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A0Start-Fresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainViewComponent_ng_template_19_Template, 9, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MainViewComponent_div_23_Template, 14, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainViewComponent_div_24_Template, 30, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.voiceActiveSectionDisabled)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.column);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemSeleted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropListGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.app-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n  margin: auto;\n  text-align: center;\n}\n\n.has-gradient-text[_ngcontent-%COMP%] {\n  background: #CD9A9D;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-width: 0;\n  min-height: 0;\n}\n\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%] {\n  background: rgba(128, 128, 128, 0.5);\n  padding: 8px 15px;\n}\n\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%]   .board-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: white;\n}\n\n.board[_ngcontent-%COMP%]   .board-bar[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 2px;\n  margin-left: 2px;\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  overflow-x: auto;\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  flex-basis: 0;\n  min-width: 300px;\n  margin: 50px;\n  padding: 25px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.5);\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0;\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  font-family: \"Lato\", sans-serif;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n\n.board[_ngcontent-%COMP%]   .board-wrapper[_ngcontent-%COMP%]   .board-columns[_ngcontent-%COMP%]   .board-column[_ngcontent-%COMP%]   .column-title[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: 4px;\n}\n\n.tasks-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.task[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px 12px;\n  background: white;\n  border-bottom: solid 1px white;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05), 0 3px 14px 2px rgba(0, 0, 0, 0.05);\n  margin-bottom: 15px;\n}\n\n.task[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: block;\n  float: inline-start;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.tasks-container.cdk-drop-list-dragging[_ngcontent-%COMP%]   .task[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi12aWV3L0M6XFxVc2Vyc1xcc2FtZGhcXERvY3VtZW50c1xcR2l0SHViXFxLYW5iYW5fQ2xvbmUvc3JjXFxhcHBcXHBhZ2VzXFxtYWluLXZpZXdcXG1haW4tdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFpbi12aWV3L21haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREFJO0VBQ0ksb0NBQUE7RUFDQSxpQkFBQTtBQ0VSOztBRERRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0daOztBRERRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QUREUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDR1o7O0FERlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDSWhCOztBREhnQjtFQUNJLGNBQUE7QUNLcEI7O0FESGdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDS3BCOztBREpvQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ014Qjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FERUE7RUFFSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrRkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FEQ0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURLQTtFQUNJLGVBQUE7QUNGSjs7QURLQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtBQ0ZKOztBREtBO0VBQ0ksc0RBQUE7QUNGSjs7QURLQTtFQUNJLHNEQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oYXMtZ3JhZGllbnQtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQ0Q5QTlEO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICAuYm9hcmQtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogZ3JheSwgJGFscGhhOiAwLjUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gICAgICAgIC5ib2FyZC1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uc3tcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYm9hcmQtd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAuYm9hcmQtY29sdW1ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgLmJvYXJkLWNvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7IC8vIHRvIGZvcmNlIGFsbCB0aGUgY29sdW1ucyB0byBhbGwgYmUgdGhlIHNhbWUgc2l6ZSwgcmVnYXJkbGVzcyBvZiB0aGUgY29udGVudFxyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29sdW1uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFza3MtY29udGFpbmVyIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgXHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi50YXNrIHtcclxuICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTVweCAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC5idXR0b257XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICBmbG9hdDogaW5saW5lLXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udGFzazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4udGFza3MtY29udGFpbmVyLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLnRhc2s6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59IiwiLnJvb3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oYXMtZ3JhZGllbnQtdGV4dCB7XG4gIGJhY2tncm91bmQ6ICNDRDlBOUQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuLmJvYXJkIC5ib2FyZC1iYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xufVxuLmJvYXJkIC5ib2FyZC1iYXIgLmJvYXJkLW5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYm9hcmQgLmJvYXJkLWJhciAuYnV0dG9ucyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uYm9hcmQgLmJvYXJkLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uYm9hcmQgLmJvYXJkLXdyYXBwZXIgLmJvYXJkLWNvbHVtbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uYm9hcmQgLmJvYXJkLXdyYXBwZXIgLmJvYXJkLWNvbHVtbnMgLmJvYXJkLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogMDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiA1MHB4O1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5ib2FyZCAuYm9hcmQtd3JhcHBlciAuYm9hcmQtY29sdW1ucyAuYm9hcmQtY29sdW1uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uYm9hcmQgLmJvYXJkLXdyYXBwZXIgLmJvYXJkLWNvbHVtbnMgLmJvYXJkLWNvbHVtbiAuY29sdW1uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYm9hcmQgLmJvYXJkLXdyYXBwZXIgLmJvYXJkLWNvbHVtbnMgLmJvYXJkLWNvbHVtbiAuY29sdW1uLXRpdGxlIC5idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLnRhc2tzLWNvbnRhaW5lciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMTJweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnRhc2sgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogaW5saW5lLXN0YXJ0O1xufVxuXG4udGFzazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLnRhc2tzLWNvbnRhaW5lci5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC50YXNrOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-view',
                templateUrl: './main-view.component.html',
                styleUrls: ['./main-view.component.scss'],
            }]
    }], function () { return [{ type: _crud_backend_service__WEBPACK_IMPORTED_MODULE_4__["CrudBackendService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\samdh\Documents\GitHub\Kanban_Clone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map