(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comps_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/main/main.component */ "./src/app/comps/main/main.component.ts");
/* harmony import */ var _comps_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/error/error.component */ "./src/app/comps/error/error.component.ts");
/* harmony import */ var _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/admin/admin.component */ "./src/app/comps/admin/admin.component.ts");
/* harmony import */ var _comps_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/shop/shop.component */ "./src/app/comps/shop/shop.component.ts");
/* harmony import */ var _comps_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/register/register.component */ "./src/app/comps/register/register.component.ts");
/* harmony import */ var _comps_order_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/order/order.component */ "./src/app/comps/order/order.component.ts");









var routes = [
    { path: "", pathMatch: "full", component: _comps_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: "home", component: _comps_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: "register", component: _comps_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: "admin", component: _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: "shop", component: _comps_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"] },
    { path: "shop/order", component: _comps_order_order_component__WEBPACK_IMPORTED_MODULE_8__["OrderComponent"] },
    { path: "**", component: _comps_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "/*\r\n  #e8ecf1 lightgrey\r\n  #b5cfd8 lightteal\r\n  #7393a7 darkteal\r\n  #6c737e darkgrey\r\n*/\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7O0FBRUQ7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgI2U4ZWNmMSBsaWdodGdyZXlcclxuICAjYjVjZmQ4IGxpZ2h0dGVhbFxyXG4gICM3MzkzYTcgZGFya3RlYWxcclxuICAjNmM3MzdlIGRhcmtncmV5XHJcbiovXHJcblxyXG4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWwge1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project4-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/header/header.component */ "./src/app/comps/header/header.component.ts");
/* harmony import */ var _comps_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/main/main.component */ "./src/app/comps/main/main.component.ts");
/* harmony import */ var _comps_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/error/error.component */ "./src/app/comps/error/error.component.ts");
/* harmony import */ var _comps_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/login/login.component */ "./src/app/comps/login/login.component.ts");
/* harmony import */ var _comps_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/about/about.component */ "./src/app/comps/about/about.component.ts");
/* harmony import */ var _comps_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/notifications/notifications.component */ "./src/app/comps/notifications/notifications.component.ts");
/* harmony import */ var _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/admin/admin.component */ "./src/app/comps/admin/admin.component.ts");
/* harmony import */ var _comps_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/shop/shop.component */ "./src/app/comps/shop/shop.component.ts");
/* harmony import */ var _comps_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./comps/register/register.component */ "./src/app/comps/register/register.component.ts");
/* harmony import */ var _comps_order_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comps/order/order.component */ "./src/app/comps/order/order.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _comps_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _comps_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _comps_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _comps_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _comps_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _comps_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
                _comps_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _comps_shop_shop_component__WEBPACK_IMPORTED_MODULE_14__["ShopComponent"],
                _comps_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _comps_order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comps/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to top, #7393a7, #728b9d, #718293, #6f7b89, #6c737e);\r\n}\r\n.about-header {\r\n    height: 40%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to right top, #e8ecf1d2, #cbd5dfd3, #aebeccd3, #91a8bad7, #7393a7d2), url('/uploads/bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top;\r\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 60%, 0 90%);\r\n            clip-path: polygon(0 0, 100% 0, 100% 60%, 0 90%);\r\n}\r\n.about-body {\r\n    font-family: 'Germania One', cursive;\r\n    font-size: 1.5rem;\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0ZBQXNGO0FBQzFGO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDhIQUE4SDtJQUM5SCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix3REFBZ0Q7WUFBaEQsZ0RBQWdEO0FBQ3BEO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzczOTNhNywgIzcyOGI5ZCwgIzcxODI5MywgIzZmN2I4OSwgIzZjNzM3ZSk7XHJcbn1cclxuLmFib3V0LWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI2U4ZWNmMWQyLCAjY2JkNWRmZDMsICNhZWJlY2NkMywgIzkxYThiYWQ3LCAjNzM5M2E3ZDIpLCB1cmwoJy91cGxvYWRzL2JnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgNjAlLCAwIDkwJSk7XHJcbn1cclxuLmFib3V0LWJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdHZXJtYW5pYSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comps/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/comps/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n  <div class=\"about-header\"></div>\n  <div class=\"about-body\">\n    <p>Why go to the supermarket when the supermarket can come to you? From freshly baked morning breads, to late night\n      chocolate cravings, you’ll get it all covered with just a\n      few clicks.</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/comps/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/comps/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/comps/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n.admin-placeholder {\r\n    position: relative;\r\n}\r\n#admin-loader{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 25vh;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.admin-section {\r\n    transition: all 500ms ease-in-out;\r\n}\r\n#admin-sidebar {\r\n    width: 35vw;\r\n    height: 90vh;\r\n    transition: all 500ms linear;\r\n    background-image: linear-gradient(to left top, #e0e0e0, #e5e5e5, #ebebeb, #f0f0f0, #f6f6f6, #f9f9f9, #fbfbfb, #fefefe, #fefefe, #fefefe, #fdfdfd, #fdfdfd);\r\n    z-index: 998;\r\n    border: 1px solid black;\r\n    position: fixed;\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n#admin-sidebar.active {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n.admin-sidebar-head {\r\n    position: relative;\r\n    background-image: linear-gradient(to left, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n    padding: 2rem;\r\n    font-size: 1.5rem;\r\n}\r\n.admin-sidebar-head b {\r\n      font-family: 'ZCOOL XiaoWei', serif;\r\n}\r\n.add-prod {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 20px;\r\n    cursor: pointer;\r\n}\r\n.admin-sidebar-toggle {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    left: 102%;\r\n    top: 25px;\r\n    -webkit-transform: rotateZ(90deg);\r\n            transform: rotateZ(90deg);\r\n    transition: all 300ms linear;\r\n}\r\n.admin-sidebar-toggle:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n}\r\n.admin-sidebar-body {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 2rem;\r\n}\r\n.admin-inputs {\r\n    display: block;\r\n    margin-bottom: 2rem;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    border-bottom-color: #2f7fe5;\r\n    border-bottom-width: 6px;\r\n    width: 70%;\r\n}\r\n.admin-content-head {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    word-wrap: break-word;\r\n    overflow-x: auto;\r\n}\r\n.admin-content-head.gap {\r\n    padding-left: 100px;\r\n}\r\n.admin-head-row {\r\n    display: block;\r\n    position: relative;\r\n}\r\n#admin-search {\r\n    border-color: transparent;\r\n    border-bottom-color: #3161a3;\r\n    border-bottom-width: 6px;\r\n    margin-bottom: 1rem;\r\n    width: 30%;\r\n}\r\n.anim-btn {\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:hover {\r\n    box-shadow: 5px 5px 6px 3px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:active {\r\n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\r\n}\r\n.go-back-link {\r\n    width: 60px;\r\n    height: 60px;\r\n    border: 5px #3161a3 solid;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: 1em;\r\n}\r\n.go-back-link img {\r\n   height: 100%;\r\n   width: 100%;\r\n}\r\n.catg-link {\r\n    margin-right: 1em;\r\n    margin-top: .5em;\r\n    color: #3161a3;\r\n}\r\n.catg-link.active {\r\n    font-size: 1.25em;\r\n    text-decoration: underline;\r\n    color: black;\r\n }\r\n.catg-link:hover {\r\n   cursor: pointer;\r\n   text-decoration: underline;\r\n }\r\n.admin-product {\r\n    padding: 1rem;\r\n}\r\n.admin-product-card {\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #3161a3;\r\n    font-size: 150%;\r\n}\r\n.admin-product-card>img {\r\n    height: 50%;\r\n    width: 100%;\r\n    margin-bottom: 5%;\r\n    border-radius: 50%;\r\n}\r\n.admin-prod-price {\r\n    color: black;\r\n    margin-right: 5px;\r\n}\r\n.edit-prod {\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-left: 5px;\r\n    cursor: pointer;\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    .links-responsive {\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    #admin-sidebar {\r\n        width: 50vw;\r\n    }\r\n}\r\n@media only screen and (max-width: 760px) {\r\n    .links-responsive {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n    .admin-content-head {\r\n        padding-left: 60px;\r\n    }\r\n    .admin-content-head.gap {\r\n        padding-left: 0;\r\n    }\r\n    #admin-sidebar {\r\n        width: 70vw;\r\n    }\r\n}\r\n@media only screen and (max-width: 360px) {\r\n   .admin-sidebar-head {\r\n       padding: 1.5rem;\r\n   }\r\n   .admin-sidebar-body {\r\n       padding: 1.5rem;\r\n   }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDBKQUEwSjtJQUMxSixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUZBQXVGO0lBQ3ZGLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtNQUNNLG1DQUFtQztBQUN6QztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQXdCO1lBQXhCLHdCQUF3QjtBQUM1QjtBQUNDO0lBQ0csV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0dBQ0csWUFBWTtHQUNaLFdBQVc7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLFlBQVk7Q0FDZjtBQUNBO0dBQ0UsZUFBZTtHQUNmLDBCQUEwQjtDQUM1QjtBQUNBO0lBQ0csYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFDQTtHQUNHO09BQ0ksZUFBZTtHQUNuQjtHQUNBO09BQ0ksZUFBZTtHQUNuQjtBQUNIIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XHJcbn1cclxuLmFkbWluLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jYWRtaW4tbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5hZG1pbi1zZWN0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4jYWRtaW4tc2lkZWJhciB7XHJcbiAgICB3aWR0aDogMzV2dztcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBsaW5lYXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNlMGUwZTAsICNlNWU1ZTUsICNlYmViZWIsICNmMGYwZjAsICNmNmY2ZjYsICNmOWY5ZjksICNmYmZiZmIsICNmZWZlZmUsICNmZWZlZmUsICNmZWZlZmUsICNmZGZkZmQsICNmZGZkZmQpO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcbiNhZG1pbi1zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuLmFkbWluLXNpZGViYXItaGVhZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzJmODlmYywgIzJmN2ZlNSwgIzMwNzVjZiwgIzMwNmJiOSwgIzMxNjFhMyk7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmFkbWluLXNpZGViYXItaGVhZCBiIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XHJcbn1cclxuLmFkZC1wcm9kIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkbWluLXNpZGViYXItdG9nZ2xlIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTAyJTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgbGluZWFyO1xyXG59XHJcbi5hZG1pbi1zaWRlYmFyLXRvZ2dsZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyk7XHJcbn1cclxuIC5hZG1pbi1zaWRlYmFyLWJvZHkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59IFxyXG4uYWRtaW4taW5wdXRzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMyZjdmZTU7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uYWRtaW4tY29udGVudC1oZWFkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLmFkbWluLWNvbnRlbnQtaGVhZC5nYXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxufVxyXG4uYWRtaW4taGVhZC1yb3cge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2FkbWluLXNlYXJjaCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMxNjFhMztcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi5hbmltLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uYW5pbS1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA2cHggM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmFuaW0tYnRuOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uZ28tYmFjay1saW5rIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyOiA1cHggIzMxNjFhMyBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbn1cclxuLmdvLWJhY2stbGluayBpbWcge1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXRnLWxpbmsge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xyXG4gICAgY29sb3I6ICMzMTYxYTM7XHJcbn1cclxuXHJcbi5jYXRnLWxpbmsuYWN0aXZlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiB9XHJcbiAuY2F0Zy1saW5rOmhvdmVyIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuIH1cclxuIC5hZG1pbi1wcm9kdWN0IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuLmFkbWluLXByb2R1Y3QtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzE2MWEzO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcbi5hZG1pbi1wcm9kdWN0LWNhcmQ+aW1nIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uYWRtaW4tcHJvZC1wcmljZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZWRpdC1wcm9kIHtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5saW5rcy1yZXNwb25zaXZlIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAjYWRtaW4tc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDUwdnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gICAgLmxpbmtzLXJlc3BvbnNpdmUge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5hZG1pbi1jb250ZW50LWhlYWQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcclxuICAgIH1cclxuICAgIC5hZG1pbi1jb250ZW50LWhlYWQuZ2FwIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAjYWRtaW4tc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAuYWRtaW4tc2lkZWJhci1oZWFkIHtcclxuICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgfVxyXG4gICAuYWRtaW4tc2lkZWJhci1ib2R5IHtcclxuICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/comps/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/comps/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid admin-placeholder\" *ngIf=\"!showContent\">\n  <img src=\"/uploads/loader.gif\" alt=\"loader animation\" id=\"admin-loader\" />\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"showContent\">\n  <div class=\"row\">\n    <div class=\"col-sm-{{ sidebarWidth }} admin-section\">\n      <div id=\"admin-sidebar\">\n        <div class=\"admin-sidebar-head\">\n          <span (click)=\"handleSidebar()\">\n            <img src=\"/uploads/menu.png\" class=\"admin-sidebar-toggle links-responsive\"\n              alt=\"menu icon\" />\n          </span>\n          <b>{{ sidebarTitle }}</b>\n          <img src=\"/uploads/add.png\" alt=\"plus icon\" title=\"add a new product\" class=\"add-prod\" (click)=\"resetSidebar()\" />\n        </div>\n        <div class=\"admin-sidebar-body\">\n           <form [formGroup]=\"productForm\">\n             <b>Name:</b>\n             <input formControlName=\"title\" class=\"admin-inputs\" />\n             <b>Image link:</b>\n             <input formControlName=\"image\" class=\"admin-inputs\" />\n             <b>Category:</b>\n             <input formControlName=\"categoryID\" class=\"admin-inputs\" />\n             <b>Price:</b>\n             <input  type=\"number\" min=\"0\" formControlName=\"price\" class=\"admin-inputs\" />\n             <button (click)=\"saveProduct()\" [disabled]=\"!productForm.valid\" *ngIf=\"!editOn\" class=\"btn btn-primary anim-btn\">Save Product!</button>\n             <button (click)=\"editProduct()\" [disabled]=\"!productForm.valid\" *ngIf=\"editOn\" class=\"btn btn-primary anim-btn\">Edit Product!</button>\n           </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-{{ contentWidth }} admin-section\">\n      <div id=\"admin-content\">\n        <div class=\"admin-content-head\">\n          <label class=\"admin-head-row\">\n            <input placeholder=\"Product's name\" [(ngModel)]=\"prodSearch\" (keyup)=\"searchProduct()\" id=\"admin-search\" />\n            <button (click)=\"getAllProds()\" class=\"btn btn-primary anim-btn\">All products</button>\n            <label class=\"go-back-link links-responsive\">\n              <a [routerLink]=\"''\"><img src=\"/uploads/home.png\"\n                  alt=\"home icon homepage link\" /></a>\n            </label>\n          </label>\n          <label>\n            <span *ngFor=\"let c of allCategories\" (click)=\"getProdsByCategory(c._id)\"\n              class=\"catg-link {{ c.status }}\">{{ c.title }}</span>\n          </label>\n        </div>\n        <div class=\"row admin-sidebar-body\">\n          <div *ngFor=\"let p of allProducts\" class=\"col-sm-3 admin-product\">\n            <div class=\"admin-product-card\">\n              <img src=\"{{ p.image }}\" alt=\"product-image\" />\n              <p><b>{{ p.title }}</b></p>\n              <p><b><span class=\"admin-prod-price\">{{ p.price }}$</span></b><img src=\"/uploads/pencil.png\" (click)=\"setProductDetails(p)\" class=\"edit-prod links-responsive\" alt=\"edit product\" /></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AdminComponent = /** @class */ (function () {
    function AdminComponent(usersService, prodsService, router) {
        this.usersService = usersService;
        this.prodsService = prodsService;
        this.router = router;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            categoryID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.showContent = false;
        this.sidebarOpen = false;
        this.editOn = false;
        this.sidebarWidth = 1;
        this.contentWidth = 11;
        this.prodSearch = "";
        this.itemToEdit = "";
        this.sidebarTitle = "Add Product";
        this.allCategories = new Array();
        this.allProducts = new Array();
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.checkSession().subscribe(function (data) {
            if (!data.isAdmin) {
                _this.router.navigate(['error']);
            }
            else
                _this.showContent = true;
        });
        this.getAllCategories();
        this.getAllProds();
    };
    AdminComponent.prototype.handleSidebar = function () {
        if (this.sidebarOpen) {
            this.sidebarWidth = 1;
            this.contentWidth = 11;
            document.getElementsByClassName('admin-content-head')[0].classList.remove('gap');
        }
        else {
            this.sidebarWidth = 4;
            this.contentWidth = 8;
            document.getElementsByClassName('admin-content-head')[0].classList.add('gap');
        }
        document.getElementById('admin-sidebar').classList.toggle('active');
        this.sidebarOpen = !this.sidebarOpen;
    };
    AdminComponent.prototype.searchProduct = function () {
        var _this = this;
        if (this.prodSearch === "") {
            this.getAllProds();
        }
        else {
            this.allCategories.forEach(function (cat) { cat.status = ""; });
            this.prodsService.getProductByName(this.prodSearch).subscribe(function (data) {
                _this.allProducts = data;
                _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
            });
        }
    };
    AdminComponent.prototype.getAllProds = function () {
        var _this = this;
        this.prodsService.getProducts().subscribe(function (data) {
            _this.allProducts = data;
            _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
        });
        this.allCategories.forEach(function (cat) { cat.status = ""; });
    };
    AdminComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.prodsService.getCategories().subscribe(function (data) {
            _this.allCategories = data;
        });
    };
    AdminComponent.prototype.getProdsByCategory = function (catgId) {
        var _this = this;
        this.prodsService.getProductByCategories(catgId).subscribe(function (data) {
            _this.allProducts = data;
            _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
        });
        this.allCategories.forEach(function (cat) {
            if (cat._id === catgId)
                cat.status = "active";
            else
                cat.status = "";
        });
    };
    AdminComponent.prototype.setProductDetails = function (product) {
        if (!this.sidebarOpen)
            this.handleSidebar();
        this.editOn = true;
        this.sidebarTitle = product.title;
        this.itemToEdit = product._id;
        var prodsCatg = this.allCategories.find(function (catg) { return catg._id == product.categoryID; });
        prodsCatg = prodsCatg.title;
        this.productForm.setValue({
            title: product.title,
            categoryID: prodsCatg,
            price: product.price,
            image: product.image
        });
    };
    AdminComponent.prototype.resetSidebar = function () {
        this.sidebarTitle = "Add Product";
        this.editOn = false;
        this.productForm.reset();
    };
    AdminComponent.prototype.saveProduct = function () {
        var _this = this;
        var catgInput = this.productForm.value.categoryID;
        catgInput = catgInput[0].toUpperCase() + catgInput.substring(1);
        this.prodsService.searchCategory(catgInput).subscribe(function (data) {
            if (data) {
                _this.productForm.value.categoryID = data._id;
                _this.prodsService.saveNewProduct(_this.productForm.value).subscribe(function (data) {
                    if (data._id) {
                        _this.getAllProds();
                        _this.productForm.reset();
                    }
                });
            }
            else {
                _this.prodsService.addNewCategory({ title: catgInput }).subscribe(function (data) {
                    _this.productForm.value.categoryID = data._id;
                    _this.prodsService.saveNewProduct(_this.productForm.value).subscribe(function (data) {
                        if (data._id) {
                            _this.getAllCategories();
                            _this.getAllProds();
                            _this.productForm.reset();
                        }
                    });
                });
            }
        });
    };
    AdminComponent.prototype.editProduct = function () {
        var _this = this;
        //   this.itemToEdit is the prod ID    &&&&&&&   this.productForm.value is the prod obj
        var catgInput = this.productForm.value.categoryID;
        catgInput = catgInput[0].toUpperCase() + catgInput.substring(1);
        this.prodsService.searchCategory(catgInput).subscribe(function (data) {
            if (data) {
                _this.productForm.value.categoryID = data._id;
                _this.prodsService.updateProduct(_this.itemToEdit, _this.productForm.value).subscribe(function (data) {
                    if (data._id) {
                        _this.getAllProds();
                        _this.resetSidebar();
                    }
                });
            }
            else {
                _this.prodsService.addNewCategory({ title: catgInput }).subscribe(function (data) {
                    _this.productForm.value.categoryID = data._id;
                    _this.prodsService.updateProduct(_this.itemToEdit, _this.productForm.value).subscribe(function (data) {
                        if (data._id) {
                            _this.getAllCategories();
                            _this.getAllProds();
                            _this.resetSidebar();
                        }
                    });
                });
            }
        });
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/comps/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/comps/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/comps/error/error.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/error/error.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".err {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n.err-header {\r\n    font-family: 'Baloo Chettan', cursive;\r\n    font-size: 8rem;\r\n    color: red;\r\n}\r\n.err-header > .black {\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcclxufVxyXG4uZXJyLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIENoZXR0YW4nLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiA4cmVtO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4uZXJyLWhlYWRlciA+IC5ibGFjayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comps/error/error.component.html":
/*!**************************************************!*\
  !*** ./src/app/comps/error/error.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"err\">\n  <p class=\"err-header\">4<span class=\"black\">0</span>4</p>\n  <p class=\"err-sub\">the page you are looking for doesn't exists or is no longer available...</p>\n</div>\n"

/***/ }),

/***/ "./src/app/comps/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/comps/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/comps/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/comps/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/comps/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    width: 100%;\r\n    height: 15vh;\r\n    background-image: linear-gradient(to left, #6c737e, #6f7b89, #718293, #728b9d, #7393a7);\r\n    position: relative;\r\n}\r\n#logo {\r\n    width: 80px;\r\n    position: absolute;\r\n    top: 2rem;\r\n    left: 1rem;\r\n}\r\n.greeting {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 10vw; \r\n  font-size: 1.5rem;\r\n  font-family: 'ZCOOL XiaoWei', serif;\r\n}\r\n.log-out {\r\n  font-size: 1rem;\r\n  font-family: 'ZCOOL XiaoWei', serif;\r\n  color: #b5cfd8;\r\n  margin-left: 1rem;\r\n}\r\n@media only screen and (max-height: 750px) {\r\n    #logo {\r\n        width: 50px;\r\n        top: 1rem;\r\n    }\r\n    .greeting {\r\n        font-size: 1rem;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1RkFBdUY7SUFDdkYsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsU0FBUztJQUNiO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzZjNzM3ZSwgIzZmN2I4OSwgIzcxODI5MywgIzcyOGI5ZCwgIzczOTNhNyk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2xvZ28ge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDJyZW07XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uZ3JlZXRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDEwdnc7IFxyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnWkNPT0wgWGlhb1dlaScsIHNlcmlmO1xyXG59XHJcbi5sb2ctb3V0IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XHJcbiAgY29sb3I6ICNiNWNmZDg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcclxuICAgICNsb2dvIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICB0b3A6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuZ3JlZXRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/comps/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/comps/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"page-header\">\n <img src=\"/uploads/logo.png\" id=\"logo\" alt=\"cart logo\" />\n <label class=\"greeting\">Hello {{ entity }} <a (click)=\"logOut()\" *ngIf=\"logOutLink\" class=\"log-out\" [routerLink]=\"''\" >Log out</a></label>\n</header>"

/***/ }),

/***/ "./src/app/comps/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/comps/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(usersService) {
        this.usersService = usersService;
        this.entity = "guest";
        this.logOutLink = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.checkSession().subscribe(function (data) {
            if (data.connected) {
                _this.logOutLink = true;
                data.user.Fname = data.user.Fname[0].toUpperCase() + data.user.Fname.substring(1);
                _this.entity = data.user.Fname;
            }
        });
        this.usersService.userNameEventEmitter.subscribe(function (data) {
            _this.logOutLink = true;
            data = data[0].toUpperCase() + data.substring(1);
            _this.entity = data;
        });
    };
    HeaderComponent.prototype.logOut = function () {
        var _this = this;
        this.usersService.logOut().subscribe(function (data) {
            _this.logOutLink = false;
            if (!data.connected) {
                _this.entity = "guest";
                _this.usersService.userLogOutEventEmitter.emit(true);
            }
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/comps/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/comps/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/comps/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\r\n    background-image: linear-gradient(to top, #7393a7, #728b9d, #718293, #6f7b89, #6c737e);\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 1rem;\r\n}\r\n.action-btn {\r\n    margin-top: 1rem;\r\n    margin-bottom: 20vh;\r\n}\r\n.anim-btn {\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  }\r\n.anim-btn:hover {\r\n    box-shadow: 5px 5px 6px 3px rgba(0,0,0,0.75);\r\n  }\r\n.anim-btn:active {\r\n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\r\n  }\r\n.login-inputs {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n    background-color: #e8ecf1;\r\n    border-color: transparent;\r\n    border-bottom-color: #7393a7;\r\n    border-bottom-width: 6px;\r\n    width: 70%;\r\n}\r\n.log-btn {\r\n    margin-right: 1rem;\r\n}\r\n.login>form {\r\n    display: inline;\r\n}\r\n.reg-link {\r\n    font-size: 1rem;\r\n    color: black;\r\n}\r\n.login>p {\r\n    font-size: 1.5rem;\r\n}\r\n.login-denial {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    color: darkred;\r\n    margin-top: 1rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNGQUFzRjtJQUN0RixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLDRDQUE0QztFQUM5QztBQUNBO0lBQ0UsNENBQTRDO0VBQzlDO0FBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7QUFDRjtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM3MzkzYTcsICM3MjhiOWQsICM3MTgyOTMsICM2ZjdiODksICM2YzczN2UpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5hY3Rpb24tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHZoO1xyXG59XHJcbi5hbmltLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICB9XHJcbiAgLmFuaW0tYnRuOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNnB4IDNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIH1cclxuICAuYW5pbS1idG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIH1cclxuLmxvZ2luLWlucHV0cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM3MzkzYTc7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2cHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5sb2ctYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4ubG9naW4+Zm9ybSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLnJlZy1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubG9naW4+cCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ubG9naW4tZGVuaWFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comps/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/comps/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <button class=\"btn btn-primary action-btn anim-btn\" [routerLink]=\"'shop'\" *ngIf=\"!isAdminConnected\" [disabled]=\"disableActions\" >{{ buyAction }}</button>\n  <button class=\"btn btn-primary action-btn anim-btn\" [routerLink]=\"'admin'\" *ngIf=\"isAdminConnected\" [disabled]=\"disableActions\" >Admin Zone</button>\n  <p><b>Allready Registered?</b></p>\n   <form [formGroup]=\"loginForm\">\n     <input placeholder=\"Username\" formControlName=\"username\" class=\"login-inputs\" />\n     <input placeholder=\"Password\" type=\"password\" formControlName=\"password\" class=\"login-inputs\" />\n     <input type=\"submit\" [disabled]=\"!this.loginForm.valid\" (click)=\"sendData()\" class=\"btn btn-info log-btn anim-btn\" value=\"Login\" />\n   </form>\n   <a class=\"reg-link\" [routerLink]=\"'register'\"><b>Register</b></a>\n   <label class=\"login-denial\" *ngIf=\"showWarning\"><b>Wrong username or password!</b></label>\n</div>\n"

/***/ }),

/***/ "./src/app/comps/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/services/carts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, cartsService, router) {
        this.usersService = usersService;
        this.cartsService = cartsService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.showWarning = false;
        this.disableActions = true;
        this.buyAction = "Start shopping";
        this.isAdminConnected = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.checkSession().subscribe(function (data) {
            if (data.connected) {
                if (data.isAdmin) {
                    _this.disableActions = false;
                    _this.isAdminConnected = true;
                }
                else {
                    _this.disableActions = false;
                }
            }
        });
        this.usersService.userLogOutEventEmitter.subscribe(function (data) {
            if (data) {
                _this.buyAction = "Start shopping";
                _this.disableActions = true;
                _this.isAdminConnected = false;
            }
        });
        this.cartsService.openCartEventEmitter.subscribe(function (data) {
            if (data)
                _this.buyAction = "Resume shopping";
        });
    };
    LoginComponent.prototype.sendData = function () {
        var _this = this;
        this.usersService.login(this.loginForm.value).subscribe(function (data) {
            if (!data.approve) {
                _this.showWarning = true;
                setTimeout(function () { _this.showWarning = false; }, 1000);
            }
            else {
                if (data.isAdmin) {
                    //ADMIN CONNECTED
                    _this.isAdminConnected = true;
                    _this.usersService.userNameEventEmitter.emit(data.user.Fname);
                    _this.usersService.userLoginEventEmitter.emit(data.user);
                    _this.router.navigate(['admin']);
                }
                else {
                    //USER CONNECTED
                    _this.usersService.userNameEventEmitter.emit(data.user.Fname);
                    _this.usersService.userLoginEventEmitter.emit(data.user);
                    _this.disableActions = false;
                    _this.loginForm.reset();
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/comps/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/comps/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/comps/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/comps/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-section {\r\n    padding: 1rem;\r\n    height: 105vh;\r\n    font-family: 'ZCOOL XiaoWei', serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1DQUFtQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDV2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnWkNPT0wgWGlhb1dlaScsIHNlcmlmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/comps/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/comps/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 home-section\">\n     <app-login></app-login>\n    </div>\n    <div class=\"col-sm-4 home-section\">\n      <app-about></app-about>\n    </div>\n    <div class=\"col-sm-4 home-section\">\n      <app-notifications></app-notifications>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/comps/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/comps/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/comps/notifications/notifications.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/notifications/notifications.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notiftications {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to top, #7393a7, #728b9d, #718293, #6f7b89, #6c737e);\r\n}\r\n.notiftications-header {\r\n    height: 40%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to right top, #e8ecf1d2, #cbd5dfd3, #aebeccd3, #91a8bad7, #7393a7d2), url('/uploads/bg.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: top;\r\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 60%);\r\n            clip-path: polygon(0 0, 100% 0, 100% 90%, 0 60%);\r\n}\r\n.notiftications-body {\r\n    font-size: 1rem;\r\n    margin-left: 1rem;\r\n}\r\n.notiftications-body .num {\r\n    color: cyan;\r\n}\r\n.notiftications-box {\r\n    margin-left: 1rem;\r\n    margin-top: 15vh;\r\n    font-size: 1.25rem;\r\n    color: #faed27;\r\n    letter-spacing: 1px;\r\n    padding: 1rem;\r\n    padding-left: 2.5rem;\r\n    word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNGQUFzRjtBQUMxRjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCw4SEFBOEg7SUFDOUgsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsd0RBQWdEO1lBQWhELGdEQUFnRDtBQUNwRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZ0aWNhdGlvbnMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNzM5M2E3LCAjNzI4YjlkLCAjNzE4MjkzLCAjNmY3Yjg5LCAjNmM3MzdlKTtcclxufVxyXG4ubm90aWZ0aWNhdGlvbnMtaGVhZGVyIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCAjZThlY2YxZDIsICNjYmQ1ZGZkMywgI2FlYmVjY2QzLCAjOTFhOGJhZDcsICM3MzkzYTdkMiksIHVybCgnL3VwbG9hZHMvYmcuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA5MCUsIDAgNjAlKTtcclxufVxyXG4ubm90aWZ0aWNhdGlvbnMtYm9keSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4ubm90aWZ0aWNhdGlvbnMtYm9keSAubnVtIHtcclxuICAgIGNvbG9yOiBjeWFuO1xyXG59XHJcbi5ub3RpZnRpY2F0aW9ucy1ib3gge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6ICNmYWVkMjc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/comps/notifications/notifications.component.html":
/*!******************************************************************!*\
  !*** ./src/app/comps/notifications/notifications.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notiftications\">\n  <div class=\"notiftications-header\"></div>\n  <div class=\"notiftications-body\">\n     <p><b>Orders made in this site: <span class=\"num\">{{ ordersNum }}</span></b></p>\n     <p><b>Products available in this site: <span class=\"num\">{{ productsNum }}</span></b></p>\n     <label class=\"notiftications-box\">\n       <p><b>{{ msg }}</b></p>\n     </label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/notifications/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/services/carts.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");






var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(usersService, prodsService, cartsService, orderService) {
        this.usersService = usersService;
        this.prodsService = prodsService;
        this.cartsService = cartsService;
        this.orderService = orderService;
        this.msg = "";
        this.name = "";
        this.userId = "";
        this.productsNum = 0;
        this.ordersNum = 0;
        this.openCartFrom = "";
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodsService.getProducts().subscribe(function (data) {
            _this.productsNum = data.length;
        });
        this.orderService.getAllOrders().subscribe(function (data) {
            _this.ordersNum = data.length;
        });
        this.usersService.checkSession().subscribe(function (data) {
            if (data.connected) {
                _this.userId = data.user._id;
                _this.name = data.user.Fname;
                _this.name = _this.name[0].toUpperCase() + _this.name.substring(1);
                if (data.user.Role === "admin") {
                    _this.msg = "Hello " + _this.name + "!";
                }
                else {
                    _this.cartsService.checkOpenCart().subscribe(function (data) {
                        if (data) {
                            _this.openCartFrom = data.creationDate;
                            _this.cartsService.checkCartItems(data._id).subscribe(function (itemsData) {
                                if (itemsData.length !== 0) {
                                    // ACTIVE CART
                                    _this.renderActiveCartMsg(itemsData);
                                }
                                else {
                                    //EMPTY CART  
                                    _this.orderService.getUserOrders(_this.userId).subscribe(function (data) {
                                        if (data.length > 0) {
                                            // THERE ARE ORDERS ----CHECK WHAT'S LAST
                                            var ordersDatesArray = data.map(function (ord) { return ord.orderDate; });
                                            var lastOrderDate = ordersDatesArray.slice(-1)[0];
                                            lastOrderDate = lastOrderDate.substring(4, 15);
                                            _this.msg = "Hello " + _this.name + ", your last order was on " + lastOrderDate + ".";
                                        }
                                        else
                                            _this.msg = "Hello " + _this.name + ", Your'e welcome to start your first shop!";
                                    });
                                }
                            });
                        }
                        else {
                            _this.msg = "Hello " + _this.name + ", Your'e welcome to start your first shop!";
                        }
                    });
                }
            }
        });
        this.usersService.userLoginEventEmitter.subscribe(function (data) {
            if (data) {
                _this.userId = data._id;
                _this.name = data.Fname;
                _this.name = _this.name[0].toUpperCase() + _this.name.substring(1);
                _this.cartsService.checkOpenCart().subscribe(function (data) {
                    if (data) {
                        _this.openCartFrom = data.creationDate;
                        _this.cartsService.checkCartItems(data._id).subscribe(function (itemsData) {
                            if (itemsData.length !== 0) {
                                // ACTIVE CART
                                _this.renderActiveCartMsg(itemsData);
                            }
                            else {
                                // EMPTY CART   -
                                _this.orderService.getUserOrders(_this.userId).subscribe(function (data) {
                                    if (data.length > 0) {
                                        // THERE ARE ORDERS ----CHECK WHAT'S LAST
                                        var ordersDatesArray = data.map(function (ord) { return ord.orderDate; });
                                        var lastOrderDate = ordersDatesArray.slice(-1)[0];
                                        lastOrderDate = lastOrderDate.substring(4, 15);
                                        _this.msg = "Hello " + _this.name + ", your last order was on " + lastOrderDate + ".";
                                    }
                                    else
                                        _this.msg = "Hello " + _this.name + ", Your'e welcome to start your first shop!";
                                });
                            }
                        });
                    }
                    else {
                        _this.msg = "Hello " + _this.name + ", Your'e welcome to start your first shop!";
                    }
                });
            }
        });
        this.usersService.userLogOutEventEmitter.subscribe(function (data) {
            if (data) {
                _this.msg = "";
            }
        });
    };
    NotificationsComponent.prototype.renderActiveCartMsg = function (itemsData) {
        this.cartsService.openCartEventEmitter.emit(true);
        var viewDate = this.openCartFrom.substring(4, 15);
        var priceSum = itemsData.map(function (item) { return item.finalPrice; });
        priceSum = priceSum.reduce(function (a, b) { return a + b; }, 0);
        this.msg = "Hello " + this.name + ", you have an open cart from " + viewDate + ", with the total amout of " + priceSum + "$.";
    };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/comps/notifications/notifications.component.html"),
            styles: [__webpack_require__(/*! ./notifications.component.css */ "./src/app/comps/notifications/notifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"], _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/comps/order/order.component.css":
/*!*************************************************!*\
  !*** ./src/app/comps/order/order.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'ZCOOL XiaoWei', serif;\r\n}\r\n.order-placeholder {\r\n    position: relative;\r\n}\r\n#order-loader{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 25vh;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.order-section {\r\n    padding: 1rem;\r\n    height: 100vh;\r\n}\r\n.order-block {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-image: linear-gradient(to top, #7393a7, #728b9d, #718293, #6f7b89, #6c737e);\r\n    position: relative;\r\n}\r\n.order-cover {\r\n    background-color: #e8ecf1ce;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n}\r\n.order-review-header {\r\n    width: 100%;\r\n    border-bottom: 1px solid black;\r\n    background-image: linear-gradient(to left, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n    font-size: 150%;\r\n    padding: 1.5rem;\r\n}\r\n.order-review-header.payment {\r\n    background-image: linear-gradient(to right, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n}\r\n.order-review-header>b {\r\n    text-decoration: underline;\r\n}\r\n.order-review-header.payment>b {\r\n    text-decoration: none;\r\n}\r\n.order-review-header>.order-link {\r\n   float: right;\r\n   color: rgb(199, 19, 19);\r\n}\r\n.order-review {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.review-search {\r\n    text-align: center;\r\n    width: 100%;\r\n    padding: 2rem;\r\n}\r\n.review-search > input {\r\n    width: 50%;\r\n    background-color: #e8ecf1;\r\n    border-color: transparent;\r\n    border-bottom-color: #7393a7;\r\n    border-bottom-width: 6px;\r\n}\r\n.order-items-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    margin-right: .5rem;\r\n}\r\n.order-items-list>li {\r\n   margin: 1.5rem;\r\n}\r\n.order-items-list {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 1.25rem;\r\n    letter-spacing: 3px;\r\n    overflow-y: auto;\r\n    padding: 2rem;\r\n    height: 70vh;\r\n}\r\n.order-review-footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding: 1.5rem;\r\n    font-size: 150%;\r\n    background-image: linear-gradient(to left, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n    text-align: center;\r\n}\r\n.order-review-footer>b>.teal {\r\n    color: greenyellow;\r\n}\r\n.empty-cart-notice {\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    padding-top: 10vh;\r\n}\r\n.empty-cart-notice a {\r\n    color: greenyellow;\r\n}\r\n.empty-cart-notice>img {\r\n    width: 100%;\r\n    height: 60%;\r\n    margin-top: 5vh;\r\n    margin-bottom: 15vh;\r\n}\r\n.order-payment {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 125%;\r\n}\r\n.order-payment .head {\r\n    font-size: 150%;\r\n    border-bottom: 1px solid black;\r\n    margin-bottom: 2rem;\r\n}\r\n.order-payment .head.payment {\r\n    margin-top: 5vh;\r\n}\r\n.payment-form {\r\n    overflow-y: auto;\r\n}\r\n.order-inputs {\r\n    display: block;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    margin-top: 1.5vh;\r\n    background-color: #e8ecf1;\r\n    border-color: transparent;\r\n    border-bottom-color: #2f7fe5;\r\n    border-bottom-width: 6px;\r\n}\r\n.order-btn {\r\n    margin-top: 1.5vh;\r\n}\r\n.order-review-footer.second {\r\n    height: 84px;\r\n    background-image: linear-gradient(to right, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n}\r\n.date-notice {\r\n    color: rgb(199, 19, 19);\r\n    margin-top: 2rem;\r\n    font-size: 125%;\r\n}\r\n.order-modal {\r\n    display: none;\r\n    width: 35%;\r\n    background-image: linear-gradient(to left top, #e0e0e0, #e5e5e5, #ebebeb, #f0f0f0, #f6f6f6, #f9f9f9, #fbfbfb, #fefefe, #fefefe, #fefefe, #fdfdfd, #fdfdfd);\r\n    position: absolute;\r\n    left: 32.5%;\r\n    top: 35%;\r\n    z-index: 999;\r\n    border-radius: 25px;\r\n    box-shadow: 15px 15px 7px 2px rgba(0,0,0,0.75);\r\n    -webkit-animation: scaleUp 300ms linear;\r\n            animation: scaleUp 300ms linear;\r\n    text-align: center;\r\n    padding: 2rem;\r\n}\r\n.order-modal>b {\r\n    font-size: 150%;\r\n}\r\n.order-modal>p {\r\n    font-size: 120%;\r\n    margin-top: 1rem;\r\n}\r\n.order-modal>p>span {\r\n   cursor: pointer;\r\n   color: #2f89fc;\r\n}\r\n.order-modal>p>span:hover {\r\n    text-decoration: underline;\r\n }\r\n.order-modal>button {\r\n    width: 20%;\r\n    margin-top: 4rem;\r\n    margin-bottom: 1rem;\r\n }\r\n#discline-modal.removed {\r\n    -webkit-animation: scaleDown 300ms linear;\r\n            animation: scaleDown 300ms linear;\r\n}\r\n#discline-modal>b {\r\n    color: rgb(199, 19, 19);;\r\n}\r\n.anim-btn {\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:hover {\r\n    box-shadow: 5px 5px 6px 3px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:active {\r\n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\r\n}\r\n@-webkit-keyframes scaleUp {\r\n    0%   {-webkit-transform: scale(0);transform: scale(0); }\r\n    100% {-webkit-transform: scale(1);transform: scale(1); }\r\n}\r\n@keyframes scaleUp {\r\n    0%   {-webkit-transform: scale(0);transform: scale(0); }\r\n    100% {-webkit-transform: scale(1);transform: scale(1); }\r\n}\r\n@-webkit-keyframes scaleDown {\r\n    0%   {-webkit-transform: scale(1);transform: scale(1); }\r\n    100% {-webkit-transform: scale(0);transform: scale(0); }\r\n}\r\n@keyframes scaleDown {\r\n    0%   {-webkit-transform: scale(1);transform: scale(1); }\r\n    100% {-webkit-transform: scale(0);transform: scale(0); }\r\n}\r\n@media screen and (max-height: 840px) {\r\n    .order-section {\r\n      height: 120vh;\r\n    }\r\n}\r\n@media screen and (max-height: 650px) {\r\n    .order-section {\r\n      height: 140vh;\r\n    }\r\n}\r\n@media screen and (max-height: 540px) {\r\n    .order-section {\r\n     height: 220vh;\r\n    }\r\n}\r\n@media screen and (max-width: 750px) {\r\n    .order-modal{\r\n      width: 70%;\r\n      left: 15%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzRkFBc0Y7SUFDdEYsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtJQUM5Qix1RkFBdUY7SUFDdkYsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdGQUF3RjtBQUM1RjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtHQUNHLFlBQVk7R0FDWix1QkFBdUI7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0dBQ0csY0FBYztBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZix1RkFBdUY7SUFDdkYsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osd0ZBQXdGO0FBQzVGO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsMEpBQTBKO0lBQzFKLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtHQUNHLGVBQWU7R0FDZixjQUFjO0FBQ2pCO0FBQ0E7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSx5Q0FBaUM7WUFBakMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0lBQzNCLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0FBQy9CO0FBSEE7SUFDSSxNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtJQUMzQixNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtBQUMvQjtBQUNBO0lBQ0ksTUFBTSwyQkFBbUIsQ0FBbkIsbUJBQW1CLEVBQUU7SUFDM0IsTUFBTSwyQkFBbUIsQ0FBbkIsbUJBQW1CLEVBQUU7QUFDL0I7QUFIQTtJQUNJLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0lBQzNCLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0FBQy9CO0FBQ0E7SUFDSTtNQUNFLGFBQWE7SUFDZjtBQUNKO0FBQ0E7SUFDSTtNQUNFLGFBQWE7SUFDZjtBQUNKO0FBQ0E7SUFDSTtLQUNDLGFBQWE7SUFDZDtBQUNKO0FBQ0E7SUFDSTtNQUNFLFVBQVU7TUFDVixTQUFTO0lBQ1g7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XHJcbn1cclxuLm9yZGVyLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jb3JkZXItbG9hZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiAyNXZoO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcbi5vcmRlci1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5vcmRlci1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM3MzkzYTcsICM3MjhiOWQsICM3MTgyOTMsICM2ZjdiODksICM2YzczN2UpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5vcmRlci1jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlY2YxY2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG4ub3JkZXItcmV2aWV3LWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMmY4OWZjLCAjMmY3ZmU1LCAjMzA3NWNmLCAjMzA2YmI5LCAjMzE2MWEzKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG4ub3JkZXItcmV2aWV3LWhlYWRlci5wYXltZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmODlmYywgIzJmN2ZlNSwgIzMwNzVjZiwgIzMwNmJiOSwgIzMxNjFhMyk7XHJcbn1cclxuLm9yZGVyLXJldmlldy1oZWFkZXI+YiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ub3JkZXItcmV2aWV3LWhlYWRlci5wYXltZW50PmIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5vcmRlci1yZXZpZXctaGVhZGVyPi5vcmRlci1saW5rIHtcclxuICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICBjb2xvcjogcmdiKDE5OSwgMTksIDE5KTtcclxufVxyXG4ub3JkZXItcmV2aWV3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5yZXZpZXctc2VhcmNoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG4ucmV2aWV3LXNlYXJjaCA+IGlucHV0IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM3MzkzYTc7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2cHg7XHJcbn1cclxuLm9yZGVyLWl0ZW1zLXRodW1iIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4ub3JkZXItaXRlbXMtbGlzdD5saSB7XHJcbiAgIG1hcmdpbjogMS41cmVtO1xyXG59XHJcbi5vcmRlci1pdGVtcy1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcbi5vcmRlci1yZXZpZXctZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyZjg5ZmMsICMyZjdmZTUsICMzMDc1Y2YsICMzMDZiYjksICMzMTYxYTMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vcmRlci1yZXZpZXctZm9vdGVyPmI+LnRlYWwge1xyXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59IFxyXG4uZW1wdHktY2FydC1ub3RpY2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwdmg7XHJcbn1cclxuLmVtcHR5LWNhcnQtbm90aWNlIGEge1xyXG4gICAgY29sb3I6IGdyZWVueWVsbG93O1xyXG59XHJcbi5lbXB0eS1jYXJ0LW5vdGljZT5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcbn1cclxuLm9yZGVyLXBheW1lbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG59XHJcbi5vcmRlci1wYXltZW50IC5oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLm9yZGVyLXBheW1lbnQgLmhlYWQucGF5bWVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmg7XHJcbn1cclxuLnBheW1lbnQtZm9ybSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbi5vcmRlci1pbnB1dHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEuNXZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMmY3ZmU1O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNnB4O1xyXG59XHJcbi5vcmRlci1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMS41dmg7XHJcbn1cclxuLm9yZGVyLXJldmlldy1mb290ZXIuc2Vjb25kIHtcclxuICAgIGhlaWdodDogODRweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmODlmYywgIzJmN2ZlNSwgIzMwNzVjZiwgIzMwNmJiOSwgIzMxNjFhMyk7XHJcbn1cclxuLmRhdGUtbm90aWNlIHtcclxuICAgIGNvbG9yOiByZ2IoMTk5LCAxOSwgMTkpO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxufVxyXG4ub3JkZXItbW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNlMGUwZTAsICNlNWU1ZTUsICNlYmViZWIsICNmMGYwZjAsICNmNmY2ZjYsICNmOWY5ZjksICNmYmZiZmIsICNmZWZlZmUsICNmZWZlZmUsICNmZWZlZmUsICNmZGZkZmQsICNmZGZkZmQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzIuNSU7XHJcbiAgICB0b3A6IDM1JTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggN3B4IDJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYW5pbWF0aW9uOiBzY2FsZVVwIDMwMG1zIGxpbmVhcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbn1cclxuLm9yZGVyLW1vZGFsPmIge1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcbi5vcmRlci1tb2RhbD5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLm9yZGVyLW1vZGFsPnA+c3BhbiB7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgY29sb3I6ICMyZjg5ZmM7XHJcbn1cclxuLm9yZGVyLW1vZGFsPnA+c3Bhbjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuIH1cclxuLm9yZGVyLW1vZGFsPmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiB9XHJcbiNkaXNjbGluZS1tb2RhbC5yZW1vdmVkIHtcclxuICAgIGFuaW1hdGlvbjogc2NhbGVEb3duIDMwMG1zIGxpbmVhcjtcclxufVxyXG4jZGlzY2xpbmUtbW9kYWw+YiB7XHJcbiAgICBjb2xvcjogcmdiKDE5OSwgMTksIDE5KTs7XHJcbn1cclxuLmFuaW0tYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5hbmltLWJ0bjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDZweCAzcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uYW5pbS1idG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGVVcCB7XHJcbiAgICAwJSAgIHt0cmFuc2Zvcm06IHNjYWxlKDApOyB9XHJcbiAgICAxMDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbn1cclxuQGtleWZyYW1lcyBzY2FsZURvd24ge1xyXG4gICAgMCUgICB7dHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4NDBweCkge1xyXG4gICAgLm9yZGVyLXNlY3Rpb24ge1xyXG4gICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2NTBweCkge1xyXG4gICAgLm9yZGVyLXNlY3Rpb24ge1xyXG4gICAgICBoZWlnaHQ6IDE0MHZoO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1NDBweCkge1xyXG4gICAgLm9yZGVyLXNlY3Rpb24ge1xyXG4gICAgIGhlaWdodDogMjIwdmg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcclxuICAgIC5vcmRlci1tb2RhbHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgbGVmdDogMTUlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/comps/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/comps/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid order-placeholder\" *ngIf=\"!showContent\">\n  <img src=\"/uploads/loader.gif\" alt=\"loader animation\" id=\"order-loader\" />\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"showContent\">\n  <div class=\"row\">\n    <div class=\"order-modal\" id=\"approve-modal\">\n      <b>Your order has been placed successfully!</b>\n      <p>To print your receipt <span (click)=\"printReceipt()\">click here.</span></p>\n      <button [routerLink]=\"''\" class=\"btn btn-primary anim-btn\">OK</button>\n    </div>\n    <div class=\"order-modal\" id=\"discline-modal\">\n       <b>Oops, something has gone wrong.</b>\n       <p>Please try again later.</p>\n       <button (click)=\"closeModal()\" class=\"btn btn-info anim-btn\">Close</button>\n    </div>\n    <div class=\"col-sm-6 order-section\">\n      <div class=\"order-block\">\n        <div class=\"order-review-header\">\n          <b>My Cart</b><a [routerLink]=\"'/shop'\" class=\"order-link\">Back to shop</a>\n        </div>\n        <div *ngIf=\"cartEmpty\" class=\"empty-cart-notice\">\n          <p>Unfortunately, Your'e Cart Is Empty...</p>\n          <span><a [routerLink]=\"'/shop'\">Continue shopping</a> to fill it up.</span>\n          <img src=\"/uploads/empty.png\" alt=\"empty cart\" />\n        </div>\n        <div *ngIf=\"!cartEmpty\" class=\"order-review\">\n          <div class=\"review-search\">\n            <input placeholder=\"Search recipe\" [(ngModel)]=\"recipeSearch\" (keyup)=\"searchRecipe()\" />\n          </div>\n          <ul class=\"order-items-list\">\n            <li *ngFor=\"let i of usersCartItems\">\n              <img src=\"{{ i.image }}\" class=\"order-items-thumb\" alt=\"product icon\" /><b\n                class=\"order-item-names\">{{ i.name }}</b>\n              {{ i.quantity }} * {{ i.finalPrice/i.quantity }}$ = <span\n                class=\"order-items-finalprice\">{{ i.finalPrice }}$</span>.\n            </li>\n          </ul>\n          <div class=\"order-review-footer\">\n            <b>Total: <span class=\"teal\">{{ totalAmount }}$</span></b>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 order-section\">\n      <div class=\"order-block\">\n        <div *ngIf=\"coverOn\" class=\"order-cover\"></div>\n        <div class=\"order-review-header payment\">\n          <b>Order Summery</b>\n        </div>\n        <div class=\"order-payment\">\n          <div class=\"head\">Shipping Details:</div>\n          <form [formGroup]=\"orderForm\">\n            City:\n            <select title=\"Double click to auto fill your details\" (dblclick)=\"fillUserDetails('city')\"\n              class=\"order-inputs\" formControlName=\"city\">\n              <option></option>\n              <option *ngFor=\"let c of availableCities\">{{ c }}</option>\n            </select>\n            Street:\n            <input title=\"Double click to auto fill your details\" (dblclick)=\"fillUserDetails('street')\"\n              class=\"order-inputs\" formControlName=\"street\" />\n            Supply Date:\n            <input type=\"date\" class=\"order-inputs\" (focus)=\"hideNotice()\" (change)=\"validateDate()\"\n              formControlName=\"supplyDate\" />\n            <label *ngIf=\"dateTakenWarning\" class=\"date-notice\"><span>Sorry, no deliveries available for this\n                day,</span> please pick another date.</label>\n            <div class=\"head payment\">Payments:</div>\n            Credit Card:\n            <input class=\"order-inputs\" pattern=\"[0-9].{15}\" formControlName=\"creditCard\" />\n            <button [disabled]=\"!orderForm.valid\" (click)=\"sendOrder()\"\n              class=\"btn btn-primary btn-lg anim-btn order-btn\">Order!</button>\n          </form>\n        </div>\n        <div class=\"order-review-footer second\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/services/carts.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var OrderComponent = /** @class */ (function () {
    function OrderComponent(usersService, cartsService, ordersService, router) {
        this.usersService = usersService;
        this.cartsService = cartsService;
        this.ordersService = ordersService;
        this.router = router;
        this.showContent = false;
        this.coverOn = true;
        this.cartEmpty = false;
        this.dateTakenWarning = false;
        this.userOnline = {};
        this.usersCartId = "";
        this.usersCartItems = [];
        this.receiptInfo = [];
        this.recipeSearch = "";
        this.totalAmount = null;
        this.availableCities = ["Jerusalem", "Tel-Aviv", "Haifa", "Ashdod", "Rishon-Leziyyon", "Beer-sheba", "Petah-Tikva", "Netanya", "Holon", "Bnei-brak"];
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            supplyDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            creditCard: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.checkSession().subscribe(function (data) {
            if (data.connected) {
                if (data.user.Role === "client") {
                    _this.showContent = true;
                    _this.userOnline = data.user;
                    _this.cartsService.checkOpenCart().subscribe(function (data) {
                        if (data) {
                            _this.usersCartId = data._id;
                            _this.cartsService.checkCartItems(_this.usersCartId).subscribe(function (data) {
                                if (data.length > 0) {
                                    // ACTIVE CART
                                    _this.coverOn = false;
                                    _this.usersCartItems = data;
                                    _this.handleFinalPrice(data);
                                }
                                else {
                                    // EMPTY CART
                                    _this.cartEmpty = true;
                                }
                            });
                        }
                        else {
                            ////    ----USER DONT HAVE A CART rare case cant get there without except from URL after reg 
                            _this.cartEmpty = true;
                        }
                    });
                }
                else
                    _this.router.navigate(['error']);
            }
            else
                _this.router.navigate(['error']);
        });
    };
    OrderComponent.prototype.searchRecipe = function () {
        var _this = this;
        var recipeItems = document.querySelectorAll('.order-item-names');
        recipeItems.forEach(function (item) {
            if (_this.recipeSearch === "") {
                item.style.backgroundColor = "transparent";
            }
            else {
                if (item.innerHTML.toLowerCase().includes(_this.recipeSearch)) {
                    item.style.backgroundColor = "yellow";
                }
                else
                    item.style.backgroundColor = "transparent";
            }
        });
    };
    OrderComponent.prototype.handleFinalPrice = function (data) {
        var valueSum = data.map(function (i) { return i.finalPrice; });
        valueSum = valueSum.reduce(function (a, b) { return a + b; }, 0);
        this.totalAmount = valueSum;
    };
    OrderComponent.prototype.fillUserDetails = function (input) {
        switch (input) {
            case "city":
                this.orderForm.patchValue({ city: this.userOnline.City });
                break;
            case "street":
                this.orderForm.patchValue({ street: this.userOnline.Street });
                break;
        }
    };
    OrderComponent.prototype.validateDate = function () {
        var _this = this;
        this.ordersService.getOrdersByDate(this.orderForm.value.supplyDate).subscribe(function (data) {
            if (data.length >= 3) {
                _this.orderForm.patchValue({ supplyDate: "" });
                _this.dateTakenWarning = true;
            }
            else
                _this.dateTakenWarning = false;
        });
    };
    OrderComponent.prototype.hideNotice = function () {
        this.dateTakenWarning = false;
    };
    OrderComponent.prototype.sendOrder = function () {
        var _this = this;
        var moreDetails = {
            cartId: this.usersCartId,
            finalPrice: this.totalAmount
        };
        this.ordersService.saveNewOrder({ details: moreDetails, form: this.orderForm.value }).subscribe(function (data) {
            if (data) {
                // ORDER ADDED   
                _this.receiptInfo = _this.usersCartItems;
                _this.cartsService.clearCart(_this.usersCartId).subscribe(function (data) {
                    if (data.ok > 0) {
                        _this.orderForm.reset();
                        var modal = document.getElementById('approve-modal');
                        modal.style.display = "block";
                    }
                });
            }
            else {
                // ORDER NOT ADDED 
                var modal = document.getElementById('discline-modal');
                modal.style.display = "block";
            }
        });
    };
    OrderComponent.prototype.closeModal = function () {
        var modal = document.getElementById('discline-modal');
        modal.classList.add('removed');
        setTimeout(function () {
            modal.style.display = "none";
            modal.classList.remove('removed');
        }, 250);
    };
    OrderComponent.prototype.printReceipt = function () {
        this.ordersService.printReceipt({ items: this.receiptInfo }).subscribe(function (data) {
            window.open(data.path, '_blank');
        });
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/comps/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/comps/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"], _services_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/comps/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/comps/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-section {\r\n    padding: 1rem;\r\n    height: 105vh;\r\n    font-family: 'ZCOOL XiaoWei', serif;\r\n}\r\n.reg-block {\r\n    background-image: linear-gradient(to top, #7393a7, #728b9d, #718293, #6f7b89, #6c737e);\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    position: relative;\r\n    padding: 0;\r\n}\r\n.go-back-link {\r\n    font-size: 1.5rem;\r\n    color: #b5cfd8;\r\n    position: absolute;\r\n    top: 1rem;\r\n    left: 1rem;\r\n}\r\n#link-btn {\r\n    color: #b5cfd8;\r\n    font-size: 1.5rem;\r\n}\r\n#link-btn:hover {\r\n   text-decoration: underline;\r\n   cursor: pointer;\r\n}\r\n.reg-head {\r\n    font-size: 2rem;\r\n    margin-bottom: 5vh;\r\n}\r\n.reg-inputs {\r\n    display: block;\r\n    width: 50%;\r\n    margin-left: 25%;\r\n    margin-bottom: 1.5vh;\r\n    background-color: #e8ecf1;\r\n    border-color: transparent;\r\n    border-bottom-color: #7393a7;\r\n    border-bottom-width: 6px;\r\n}\r\n.id-taken-warning {\r\n    font-size: 1.5rem;\r\n    color: darkred;\r\n    margin-top: 2rem;\r\n}\r\n.reg-cover {\r\n    background-color: #e8ecf1ce;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n}\r\n.reg-form {\r\n    padding-top: 20vh;\r\n}\r\n.reg-sec-head {\r\n    font-size: 2rem;\r\n    margin-bottom: 5vh;\r\n}\r\n.anim-btn {\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n  }\r\n.anim-btn:hover {\r\n    box-shadow: 5px 5px 6px 3px rgba(0,0,0,0.75);\r\n  }\r\n.anim-btn:active {\r\n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxzRkFBc0Y7SUFDdEYsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0dBQ0csMEJBQTBCO0dBQzFCLGVBQWU7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSw0Q0FBNEM7RUFDOUM7QUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUNBO0lBQ0UsNENBQTRDO0VBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDEwNXZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdaQ09PTCBYaWFvV2VpJywgc2VyaWY7XHJcbn1cclxuLnJlZy1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjNzM5M2E3LCAjNzI4YjlkLCAjNzE4MjkzLCAjNmY3Yjg5LCAjNmM3MzdlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZ28tYmFjay1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICNiNWNmZDg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICBsZWZ0OiAxcmVtO1xyXG59XHJcbiNsaW5rLWJ0biB7XHJcbiAgICBjb2xvcjogI2I1Y2ZkODtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbiNsaW5rLWJ0bjpob3ZlciB7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZy1oZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG4ucmVnLWlucHV0cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41dmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM3MzkzYTc7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiA2cHg7XHJcbn1cclxuLmlkLXRha2VuLXdhcm5pbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjb2xvcjogZGFya3JlZDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuLnJlZy1jb3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlY2YxY2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG4ucmVnLWZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbn1cclxuLnJlZy1zZWMtaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuLmFuaW0tYnRuIHtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIH1cclxuICAuYW5pbS1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA2cHggM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgfVxyXG4gIC5hbmltLWJ0bjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/comps/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/comps/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 register-section\">\n      <div class=\"reg-block\">\n        <div *ngIf=\"!nextStepBlock\" class=\"reg-cover\"></div>\n        <a [routerLink]=\"''\" *ngIf=\"nextStepBlock\" class=\"go-back-link\">Go back</a>\n        <div class=\"reg-form\">\n          <p class=\"reg-head\"><b>Register:</b></p>\n          <form [formGroup]=\"registerForm\">\n            <input placeholder=\"ID Number\" formControlName=\"ID\" pattern=\"[0-9]*\" class=\"reg-inputs\" />\n            <input placeholder=\"Email\" formControlName=\"Email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n              class=\"reg-inputs\" />\n            <input placeholder=\"Username\" formControlName=\"Username\" class=\"reg-inputs\" />\n            <input placeholder=\"Password\" type=\"password\" formControlName=\"Password\" class=\"reg-inputs\" />\n            <input placeholder=\"Repeat password\" type=\"password\" formControlName=\"PassConf\" class=\"reg-inputs\" />\n            <button type=\"submit\" (click)=\"progressRegister()\" [disabled]=\"!registerForm.valid\"\n              class=\"btn btn-info anim-btn\" value=\"Continue\">Continue</button>\n            <p class=\"id-taken-warning\" *ngIf=\"idWarning\"><b>There is allready an acount for this id number...</b></p>\n            <p class=\"id-taken-warning\" *ngIf=\"passWarning\"><b>The passwords did not match...</b></p>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6 register-section\">\n      <div class=\"reg-block\" id=\"reg-second-block\">\n        <div *ngIf=\"nextStepBlock\" class=\"reg-cover\"></div>\n        <a (click)=\"goBack()\" *ngIf=\"!nextStepBlock\" id=\"link-btn\" class=\"go-back-link\">Go back</a>\n        <div class=\"reg-form\">\n          <p class=\"reg-sec-head\"><b>Few more details please.</b></p>\n          <form [formGroup]=\"secondForm\">\n            <input placeholder=\"First name\" class=\"reg-inputs\" formControlName=\"Fname\" />\n            <input placeholder=\"Last name\" class=\"reg-inputs\" formControlName=\"Lname\" />\n            <select formControlName=\"City\" class=\"reg-inputs\">\n              <option>City</option>\n              <option *ngFor=\"let x of citiesArray\">{{ x }}</option>\n            </select>\n            <input placeholder=\"Street name\" class=\"reg-inputs\" formControlName=\"Street\" />\n            <button class=\"btn btn-primary anim-btn\" [disabled]=\"!secondForm.valid\"\n              (click)=\"sendData()\">Register!</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/comps/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            ID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9)]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            PassConf: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.secondForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            City: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Street: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.citiesArray = ["Jerusalem", "Tel-Aviv", "Haifa", "Ashdod", "Rishon-Leziyyon", "Beer-sheba", "Petah-Tikva", "Netanya", "Holon", "Bnei-brak"];
        this.idWarning = false;
        this.passWarning = false;
        this.nextStepBlock = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.progressRegister = function () {
        var _this = this;
        if (this.registerForm.value.PassConf !== this.registerForm.value.Password) {
            this.passWarning = true;
            setTimeout(function () { _this.passWarning = false; }, 1000);
        }
        else {
            this.usersService.checkIdAvailable(this.registerForm.value.ID).subscribe(function (data) {
                if (data.IdAvailable) {
                    // pass & ID OK!
                    _this.nextStepBlock = false;
                }
                else {
                    _this.idWarning = true;
                    setTimeout(function () { _this.idWarning = false; }, 1500);
                }
            });
        }
    };
    RegisterComponent.prototype.goBack = function () {
        this.nextStepBlock = true;
    };
    RegisterComponent.prototype.sendData = function () {
        var _this = this;
        var userDetails = {
            first: {
                ID: this.registerForm.value.ID,
                Email: this.registerForm.value.Email,
                Username: this.registerForm.value.Username,
                Password: this.registerForm.value.Password
            },
            second: {
                Fname: this.secondForm.value.Fname,
                Lname: this.secondForm.value.Lname,
                City: this.secondForm.value.City,
                Street: this.secondForm.value.Street
            }
        };
        this.usersService.registerNewUser(userDetails).subscribe(function (data) {
            if (data.approve) {
                _this.usersService.userNameEventEmitter.emit(data.user.Fname);
                _this.router.navigate(['']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/comps/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/comps/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/comps/shop/shop.component.css":
/*!***********************************************!*\
  !*** ./src/app/comps/shop/shop.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Roboto Slab', serif;\r\n}\r\n.shop-placeholder {\r\n    position: relative;\r\n}\r\n#shop-loader{\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 25vh;\r\n    -webkit-transform: translateX(-50%);\r\n            transform: translateX(-50%);\r\n}\r\n.shop-head {\r\n    padding: 1em;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n.shop-section {\r\n    transition: all 500ms ease-in-out;\r\n}\r\n.catg-link {\r\n    margin-right: 1em;\r\n    margin-top: .5em;\r\n    color: #3161a3;\r\n}\r\n.catg-link.active {\r\n   font-size: 1.25em;\r\n   text-decoration: underline;\r\n   color: black;\r\n}\r\n.catg-link:hover {\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n#shop-sidebar {\r\n    height: 100%;\r\n    width: 25vw;\r\n    position: fixed;\r\n    transition: all 500ms linear;\r\n    z-index: 998;\r\n    -webkit-transform: translateY(5vh);\r\n            transform: translateY(5vh);\r\n}\r\n#shop-sidebar.active {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n.shop-sidebar-head {\r\n    padding: 15px;\r\n    background-image: linear-gradient(to left, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n    font-size: 1.5rem;\r\n    -webkit-clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);\r\n}\r\n.shop-sidebar-toggle {\r\n    width: 60px;\r\n    height: 60px;\r\n    border: 5px #3161a3 solid;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 66px;\r\n}\r\n.shop-sidebar-toggle>img {\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n}\r\n.shop-sidebar-body {\r\n    border: 1px solid black;\r\n    background-image: linear-gradient(to left top, #e0e0e0, #e5e5e5, #ebebeb, #f0f0f0, #f6f6f6, #f9f9f9, #fbfbfb, #fefefe, #fefefe, #fefefe, #fdfdfd, #fdfdfd);\r\n    height: 60vh;\r\n    position: relative;\r\n}\r\n.cart-items-list {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 1rem;\r\n    overflow-y: auto;\r\n    list-style-type: none;\r\n}\r\n.shop-clear-cart {\r\n    list-style-type: none;\r\n    text-align: right;\r\n    font-size: 1rem;\r\n    cursor: pointer;\r\n}\r\n.shop-clear-cart:hover {\r\n    color: red;\r\n    text-decoration: underline;\r\n}\r\n.cart-items-list>li {\r\n    margin-bottom: 3rem;\r\n}\r\n.cart-li-finalprice {\r\n    color: forestgreen;\r\n}\r\n.cancel-cart-item {\r\n    width: 25px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n.cart-items-thumb {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    margin-right: .5rem;\r\n}\r\n.shop-sidebar-footer {\r\n    width: 100%;\r\n    height: 8vh;\r\n    position: absolute;\r\n    bottom: 0;\r\n    padding: 2rem;\r\n    background-image: linear-gradient(to left, #2f89fc, #2f7fe5, #3075cf, #306bb9, #3161a3);\r\n    font-size: 1.25rem;\r\n}\r\n.shop-sidebar-footer >.total {\r\n   float: left;\r\n}\r\n.shop-sidebar-footer >.total span {\r\n    color: greenyellow;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n }\r\n.shop-sidebar-footer >.order {\r\n    float: right;\r\n }\r\n.order a {\r\n     color: inherit;\r\n }\r\n#shop-search {\r\n    border-color: transparent;\r\n    border-bottom-color: #3161a3;\r\n    border-bottom-width: 6px;\r\n    margin-bottom: 1rem;\r\n    width: 30%;\r\n}\r\n.shop-head-row {\r\n    display: block;\r\n}\r\n.go-back-link {\r\n    width: 60px;\r\n    height: 60px;\r\n    border: 5px #3161a3 solid;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    right: 1em;\r\n}\r\n.go-back-link img {\r\n   height: 100%;\r\n   width: 100%;\r\n}\r\n#shop-content {\r\n    height: 100%;\r\n}\r\n.shop-product {\r\n    padding: 1rem;\r\n}\r\n.shop-product-card {\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #3161a3;\r\n    font-size: 150%;\r\n}\r\n.shop-product-card>img {\r\n    height: 50%;\r\n    width: 100%;\r\n    margin-bottom: 5%;\r\n    border-radius: 50%;\r\n}\r\n.shop-prod-price {\r\n    color: black;\r\n}\r\n/* MODAL STYLES */\r\n.shop-prod-modal {\r\n    display: none;\r\n    flex-direction: column;\r\n    height: 12rem;\r\n    width: 11rem;\r\n    background-image: linear-gradient(to left top, #e0e0e0, #e5e5e5, #ebebeb, #f0f0f0, #f6f6f6, #f9f9f9, #fbfbfb, #fefefe, #fefefe, #fefefe, #fdfdfd, #fdfdfd);\r\n    z-index: 999;\r\n    position: absolute;\r\n    top: 50%;\r\n    border-radius: 10px;\r\n    -webkit-animation: scaleUp 300ms linear;\r\n            animation: scaleUp 300ms linear;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n    box-shadow: 15px 15px 7px 2px rgba(0,0,0,0.75);\r\n}\r\n.shop-prod-modal.removed {\r\n    -webkit-animation: scaleDown 300ms linear;\r\n            animation: scaleDown 300ms linear;\r\n}\r\n.prod-quantity {\r\n    margin-left: 15%;\r\n    margin-right: 15%;\r\n}\r\n.quantity-btn {\r\n    cursor: pointer;\r\n    font-size: 150%;\r\n    color: black;\r\n}\r\n.shop-prod-modal>.shop-modal-footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    padding-right: 1rem;\r\n    padding-left: 1rem;\r\n    border-top: 1px solid #6c737e;\r\n}\r\n.modal-operators {\r\n    width: 30px;\r\n}\r\n.shop-modal-footer {\r\n    height: 45px;\r\n}\r\n.shop-modal-head {\r\n    text-align: left;\r\n    padding: .5rem;\r\n    color: #383838;\r\n    text-decoration: underline;\r\n}\r\n.close-modal-link {\r\n    float: right;\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n.close-modal-link>img {\r\n   width: 100%;\r\n   height: 100%;\r\n}\r\n/* MODAL STYLES */\r\n.anim-btn {\r\n    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:hover {\r\n    box-shadow: 5px 5px 6px 3px rgba(0,0,0,0.75);\r\n}\r\n.anim-btn:active {\r\n    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);\r\n}\r\n@-webkit-keyframes scaleUp {\r\n    0%   {-webkit-transform: scale(0);transform: scale(0); }\r\n    100% {-webkit-transform: scale(1);transform: scale(1); }\r\n}\r\n@keyframes scaleUp {\r\n    0%   {-webkit-transform: scale(0);transform: scale(0); }\r\n    100% {-webkit-transform: scale(1);transform: scale(1); }\r\n}\r\n@-webkit-keyframes scaleDown {\r\n    0%   {-webkit-transform: scale(1);transform: scale(1); }\r\n    100% {-webkit-transform: scale(0);transform: scale(0); }\r\n}\r\n@keyframes scaleDown {\r\n    0%   {-webkit-transform: scale(1);transform: scale(1); }\r\n    100% {-webkit-transform: scale(0);transform: scale(0); }\r\n}\r\n@media only screen and (max-width: 2500px) {\r\n    #shop-sidebar {\r\n      width: 30vw;\r\n    }\r\n}\r\n@media only screen and (max-width: 1700px) {\r\n    #shop-sidebar {\r\n      width: 35vw;\r\n    }\r\n}\r\n@media only screen and (max-width: 1200px) {\r\n    #shop-sidebar {\r\n      width: 40vw;\r\n    }\r\n    .go-back-link {\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n}\r\n@media only screen and (max-width: 700px) {\r\n    #shop-sidebar {\r\n      width: 70vw;\r\n    }\r\n    .shop-sidebar-body {\r\n        height: 50vh;\r\n    }\r\n}\r\n@media only screen and (max-height: 700px) {\r\n    .shop-sidebar-body {\r\n        height: 40vh;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7R0FDRyxpQkFBaUI7R0FDakIsMEJBQTBCO0dBQzFCLFlBQVk7QUFDZjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUZBQXVGO0lBQ3ZGLGlCQUFpQjtJQUNqQix5REFBaUQ7WUFBakQsaURBQWlEO0FBQ3JEO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDBKQUEwSjtJQUMxSixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUZBQXVGO0lBQ3ZGLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csV0FBVztBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0E7S0FDSSxjQUFjO0NBQ2xCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0dBQ0csWUFBWTtHQUNaLFdBQVc7QUFDZDtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWiwwSkFBMEo7SUFDMUosWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7QUFDbEQ7QUFDQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0FBQ2Y7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtJQUMzQixNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtBQUMvQjtBQUhBO0lBQ0ksTUFBTSwyQkFBbUIsQ0FBbkIsbUJBQW1CLEVBQUU7SUFDM0IsTUFBTSwyQkFBbUIsQ0FBbkIsbUJBQW1CLEVBQUU7QUFDL0I7QUFDQTtJQUNJLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0lBQzNCLE1BQU0sMkJBQW1CLENBQW5CLG1CQUFtQixFQUFFO0FBQy9CO0FBSEE7SUFDSSxNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtJQUMzQixNQUFNLDJCQUFtQixDQUFuQixtQkFBbUIsRUFBRTtBQUMvQjtBQUNBO0lBQ0k7TUFDRSxXQUFXO0lBQ2I7QUFDSjtBQUNBO0lBQ0k7TUFDRSxXQUFXO0lBQ2I7QUFDSjtBQUNBO0lBQ0k7TUFDRSxXQUFXO0lBQ2I7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO01BQ0UsV0FBVztJQUNiO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xyXG59XHJcbi5zaG9wLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jc2hvcC1sb2FkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDI1dmg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuLnNob3AtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2hvcC1zZWN0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4uY2F0Zy1saW5rIHtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjVlbTtcclxuICAgIGNvbG9yOiAjMzE2MWEzO1xyXG59XHJcbi5jYXRnLWxpbmsuYWN0aXZlIHtcclxuICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmNhdGctbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiNzaG9wLXNpZGViYXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgbGluZWFyO1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDV2aCk7XHJcbn1cclxuI3Nob3Atc2lkZWJhci5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG4uc2hvcC1zaWRlYmFyLWhlYWQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMmY4OWZjLCAjMmY3ZmU1LCAjMzA3NWNmLCAjMzA2YmI5LCAjMzE2MWEzKTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgOTAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxufVxyXG4uc2hvcC1zaWRlYmFyLXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlcjogNXB4ICMzMTYxYTMgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gICAgdG9wOiA2NnB4O1xyXG59XHJcbi5zaG9wLXNpZGViYXItdG9nZ2xlPmltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2hvcC1zaWRlYmFyLWJvZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNlMGUwZTAsICNlNWU1ZTUsICNlYmViZWIsICNmMGYwZjAsICNmNmY2ZjYsICNmOWY5ZjksICNmYmZiZmIsICNmZWZlZmUsICNmZWZlZmUsICNmZWZlZmUsICNmZGZkZmQsICNmZGZkZmQpO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jYXJ0LWl0ZW1zLWxpc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcbi5zaG9wLWNsZWFyLWNhcnQge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNob3AtY2xlYXItY2FydDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmNhcnQtaXRlbXMtbGlzdD5saSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcbi5jYXJ0LWxpLWZpbmFscHJpY2Uge1xyXG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xyXG59XHJcbi5jYW5jZWwtY2FydC1pdGVtIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJ0LWl0ZW1zLXRodW1iIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxufVxyXG4uc2hvcC1zaWRlYmFyLWZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMmY4OWZjLCAjMmY3ZmU1LCAjMzA3NWNmLCAjMzA2YmI5LCAjMzE2MWEzKTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG4uc2hvcC1zaWRlYmFyLWZvb3RlciA+LnRvdGFsIHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNob3Atc2lkZWJhci1mb290ZXIgPi50b3RhbCBzcGFuIHtcclxuICAgIGNvbG9yOiBncmVlbnllbGxvdztcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuIH1cclxuLnNob3Atc2lkZWJhci1mb290ZXIgPi5vcmRlciB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiB9XHJcbiAub3JkZXIgYSB7XHJcbiAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiB9XHJcbiNzaG9wLXNlYXJjaCB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMxNjFhMztcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbi5zaG9wLWhlYWQtcm93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5nby1iYWNrLWxpbmsge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXI6IDVweCAjMzE2MWEzIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFlbTtcclxufVxyXG4uZ28tYmFjay1saW5rIGltZyB7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3Nob3AtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNob3AtcHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5zaG9wLXByb2R1Y3QtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzE2MWEzO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcbi5zaG9wLXByb2R1Y3QtY2FyZD5pbWcge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zaG9wLXByb2QtcHJpY2Uge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi8qIE1PREFMIFNUWUxFUyAqL1xyXG4uc2hvcC1wcm9kLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHdpZHRoOiAxMXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IHRvcCwgI2UwZTBlMCwgI2U1ZTVlNSwgI2ViZWJlYiwgI2YwZjBmMCwgI2Y2ZjZmNiwgI2Y5ZjlmOSwgI2ZiZmJmYiwgI2ZlZmVmZSwgI2ZlZmVmZSwgI2ZlZmVmZSwgI2ZkZmRmZCwgI2ZkZmRmZCk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBhbmltYXRpb246IHNjYWxlVXAgMzAwbXMgbGluZWFyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggN3B4IDJweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5zaG9wLXByb2QtbW9kYWwucmVtb3ZlZCB7XHJcbiAgICBhbmltYXRpb246IHNjYWxlRG93biAzMDBtcyBsaW5lYXI7XHJcbn1cclxuLnByb2QtcXVhbnRpdHkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG59XHJcbi5xdWFudGl0eS1idG4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zaG9wLXByb2QtbW9kYWw+LnNob3AtbW9kYWwtZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNmM3MzdlO1xyXG59XHJcbi5tb2RhbC1vcGVyYXRvcnMge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuLnNob3AtbW9kYWwtZm9vdGVyIHtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG4uc2hvcC1tb2RhbC1oZWFkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0gXHJcbi5jbG9zZS1tb2RhbC1saW5rIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5jbG9zZS1tb2RhbC1saW5rPmltZyB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLyogTU9EQUwgU1RZTEVTICovXHJcbi5hbmltLWJ0biB7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4uYW5pbS1idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA2cHggM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmFuaW0tYnRuOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xyXG4gICAgMCUgICB7dHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2NhbGVEb3duIHtcclxuICAgIDAlICAge3RyYW5zZm9ybTogc2NhbGUoMSk7IH1cclxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMCk7IH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1MDBweCkge1xyXG4gICAgI3Nob3Atc2lkZWJhciB7XHJcbiAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgICAjc2hvcC1zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDM1dnc7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNzaG9wLXNpZGViYXIge1xyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgIH1cclxuICAgIC5nby1iYWNrLWxpbmsge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAjc2hvcC1zaWRlYmFyIHtcclxuICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICB9XHJcbiAgICAuc2hvcC1zaWRlYmFyLWJvZHkge1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xyXG4gICAgLnNob3Atc2lkZWJhci1ib2R5IHtcclxuICAgICAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/comps/shop/shop.component.html":
/*!************************************************!*\
  !*** ./src/app/comps/shop/shop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid shop-placeholder\" *ngIf=\"!showContent\">\n  <img src=\"/uploads/loader.gif\" alt=\"loader animation\" id=\"shop-loader\" />\n</div>\n\n<div class=\"container-fluid\" *ngIf=\"showContent\">\n  <div class=\"row\" class=\"shop-head\">\n    <label class=\"shop-head-row\">\n      <input placeholder=\"Product's name\" [(ngModel)]=\"prodSearch\" (keyup)=\"searchProduct()\" id=\"shop-search\" />\n      <button (click)=\"getAllProds()\" class=\"btn btn-primary anim-btn\">All products</button>\n      <label class=\"go-back-link\">\n        <a [routerLink]=\"''\"><img src=\"/uploads/home.png\" alt=\"home icon homepage link\" /></a>\n      </label>\n    </label>\n    <label>\n      <span *ngFor=\"let c of allCategories\" (click)=\"getProdsByCategory(c._id)\"\n        class=\"catg-link {{ c.status }}\">{{ c.title }}</span>\n    </label>\n  </div>\n  <div class=\"shop row\">\n    <div class=\"col-sm-{{ sidebarWidth }} shop-section\">\n      <div id=\"shop-sidebar\">\n        <div class=\"shop-sidebar-head\">\n          My cart\n        </div>\n        <span (click)=\"handleSidebar()\" class=\"shop-sidebar-toggle\">\n          <img src=\"/uploads/cart.toggle.png\" alt=\"cart toggle cart icon\" />\n        </span>\n        <div class=\"shop-sidebar-body\">\n           <ul class=\"cart-items-list\">\n             <li *ngIf=\"showClearCart\" class=\"shop-clear-cart\"><b (click)=\"clearCart()\">Clear All!</b></li>\n             <li *ngFor=\"let i of userCartItems\">\n               <p>\n                 <img src=\"{{ i.image }}\" class=\"cart-items-thumb\" alt=\"product icon\" /><b>{{ i.name }}</b> {{ i.quantity }} * {{ i.finalPrice/i.quantity }}$ = <span class=\"cart-li-finalprice\">{{ i.finalPrice }}$</span>.\n                 <img src=\"/uploads/cancel.png\" (click)=\"removeCartItem(i._id)\" class=\"cancel-cart-item\" alt=\"x icon\" title=\"Cancel\" />\n              </p>\n             </li>\n           </ul>\n          <div class=\"shop-sidebar-footer\">\n            <span class=\"total\">\n              <b>Total: <span>{{ totalCartValue }}</span>$</b>\n            </span>\n            <span class=\"order\">\n              <a [routerLink]=\"'order'\" ><b>Order!</b></a>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-{{ shopWidth }} shop-section\">\n      <div class=\"container-fluid\" id=\"shop-content\">\n        <div class=\"row\">\n          <div *ngFor=\"let p of allProducts\" class=\"col-sm-4 shop-product\">\n            <div class=\"shop-product-card\">\n              <img src=\"{{ p.image }}\" alt=\"product-image\" />\n              <p><b>{{ p.title }}</b></p>\n              <p><b><span class=\"shop-prod-price\">{{ p.price }}$</span></b></p>\n              <button (click)=\"openProdModal(p._id)\" class=\"btn btn-primary anim-btn\">Add to cart</button>\n              <!-- MODAL -->\n              <div id=\"{{ p._id }}\" class=\"shop-prod-modal\">\n                <div class=\"shop-modal-head\">\n                  <span>Quantity:</span>\n                  <span class=\"close-modal-link\" (click)=\"closeProdModal(p._id)\">\n                    <img src=\"/uploads/x.png\" alt=\"X icon\" />\n                  </span>\n                </div>\n                <div>\n                  <b>\n                    <a (click)=\"handleQuantity('minus')\" class=\"quantity-btn\"><img\n                        src=\"/uploads/minus.png\" class=\"modal-operators\" alt=\"minus icon\" /></a>\n                    <span class=\"prod-quantity\">{{ quantity }}</span>\n                    <a (click)=\"handleQuantity('plus')\" class=\"quantity-btn\"><img\n                        src=\"/uploads/plus.png\" class=\"modal-operators\" alt=\"plus icon\" /></a>\n                  </b>\n                </div>\n                <div class=\"shop-modal-footer\">\n                  <button (click)=\"addToCart(p)\" class=\"btn btn-primary anim-btn\">Add to cart!</button>\n                </div>\n              </div>\n              <!-- MODAL -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/comps/shop/shop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/shop/shop.component.ts ***!
  \**********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_carts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/carts.service */ "./src/app/services/carts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ShopComponent = /** @class */ (function () {
    function ShopComponent(usersService, prodsService, cartsService, router) {
        this.usersService = usersService;
        this.prodsService = prodsService;
        this.cartsService = cartsService;
        this.router = router;
        this.showContent = false;
        this.sidebarOpen = true;
        this.sidebarWidth = 5;
        this.shopWidth = 7;
        this.prodSearch = "";
        this.allCategories = new Array();
        this.allProducts = new Array();
        this.quantity = 1;
        this.userOnline = {};
        this.currentCart = {};
        this.totalCartValue = 0;
        this.userCartItems = [];
        this.showClearCart = false;
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.checkSession().subscribe(function (data) {
            if (data.connected) {
                if (data.user.Role === "client") {
                    _this.showContent = true;
                    _this.userOnline = data.user;
                }
                else
                    _this.router.navigate(['error']);
            }
            else
                _this.router.navigate(['error']);
        });
        this.prodsService.getCategories().subscribe(function (data) {
            _this.allCategories = data;
        });
        this.getAllProds();
        this.cartsService.checkOpenCart().subscribe(function (data) {
            if (data) {
                //USER HAS AN OPEN CART 
                _this.currentCart = data;
                _this.cartsService.checkCartItems(data._id).subscribe(function (data) {
                    if (data.length > 0) {
                        _this.userCartItems = data;
                        _this.handleFinalPrice(data);
                        _this.showClearCart = true;
                    }
                    else {
                        return;
                    }
                });
            }
            else {
                //USER DONT HAVE AN OPEN CART 
                _this.cartsService.openNewCart().subscribe(function (data) {
                    if (data) {
                        //new cart opened for user
                        _this.currentCart = data;
                    }
                });
            }
        });
    };
    ShopComponent.prototype.handleSidebar = function () {
        if (this.sidebarOpen) {
            this.sidebarWidth = 1;
            this.shopWidth = 11;
        }
        else {
            this.sidebarWidth = 5;
            this.shopWidth = 7;
        }
        document.getElementById('shop-sidebar').classList.toggle('active');
        this.sidebarOpen = !this.sidebarOpen;
    };
    ShopComponent.prototype.getProdsByCategory = function (catg) {
        var _this = this;
        this.prodsService.getProductByCategories(catg).subscribe(function (data) {
            _this.allProducts = data;
            _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
        });
        this.allCategories.forEach(function (cat) {
            if (cat._id === catg)
                cat.status = "active";
            else
                cat.status = "";
        });
    };
    ShopComponent.prototype.searchProduct = function () {
        var _this = this;
        if (this.prodSearch === "") {
            this.getAllProds();
        }
        else {
            this.allCategories.forEach(function (cat) { cat.status = ""; });
            this.prodsService.getProductByName(this.prodSearch).subscribe(function (data) {
                _this.allProducts = data;
                _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
            });
        }
    };
    ShopComponent.prototype.getAllProds = function () {
        var _this = this;
        this.prodsService.getProducts().subscribe(function (data) {
            _this.allProducts = data;
            _this.allProducts.map(function (prod) { return prod.title = prod.title[0].toUpperCase() + prod.title.substring(1); });
        });
        this.allCategories.forEach(function (cat) { cat.status = ""; });
    };
    ShopComponent.prototype.openProdModal = function (id) {
        var modal = document.getElementById(id);
        modal.style.display = "flex";
    };
    ShopComponent.prototype.closeProdModal = function (id) {
        var _this = this;
        var modal = document.getElementById(id);
        modal.classList.add('removed');
        setTimeout(function () {
            modal.style.display = "none";
            modal.classList.remove('removed');
            _this.quantity = 1;
        }, 250);
    };
    ShopComponent.prototype.handleQuantity = function (action) {
        if (action === "minus" && this.quantity > 1)
            this.quantity--;
        else if (action === "plus")
            this.quantity++;
    };
    ShopComponent.prototype.addToCart = function (prod) {
        var _this = this;
        this.cartsService.checkOpenCart().subscribe(function (data) {
            var newCartItem = {
                productID: prod._id,
                cartID: data._id,
                quantity: _this.quantity,
                finalPrice: (prod.price * _this.quantity),
                name: prod.title,
                image: prod.image
            };
            _this.cartsService.addCartItem(newCartItem).subscribe(function (itemData) {
                if (itemData) {
                    _this.closeProdModal(itemData.productID);
                    _this.quantity = 1;
                    _this.cartsService.checkCartItems(itemData.cartID).subscribe(function (data) {
                        _this.userCartItems = data;
                        _this.handleFinalPrice(data);
                    });
                    _this.showClearCart = true;
                }
            });
        });
    };
    ShopComponent.prototype.handleFinalPrice = function (data) {
        var valueSum = data.map(function (i) { return i.finalPrice; });
        valueSum = valueSum.reduce(function (a, b) { return a + b; }, 0);
        this.totalCartValue = valueSum;
    };
    ShopComponent.prototype.removeCartItem = function (itemID) {
        var _this = this;
        this.cartsService.removeCartItem(itemID).subscribe(function (data) {
            if (data._id) {
                _this.cartsService.checkCartItems(data.cartID).subscribe(function (data) {
                    _this.userCartItems = data;
                    _this.handleFinalPrice(data);
                    if (data.length === 0)
                        _this.showClearCart = false;
                });
            }
        });
    };
    ShopComponent.prototype.clearCart = function () {
        var _this = this;
        this.cartsService.clearCart(this.currentCart._id).subscribe(function (data) {
            if (data.ok) {
                _this.cartsService.checkCartItems(data.cartID).subscribe(function (data) {
                    _this.userCartItems = data;
                });
                _this.showClearCart = false;
                _this.totalCartValue = 0;
            }
        });
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/comps/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/comps/shop/shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"], _services_carts_service__WEBPACK_IMPORTED_MODULE_4__["CartsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/app/services/carts.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/carts.service.ts ***!
  \*******************************************/
/*! exports provided: CartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsService", function() { return CartsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var CartsService = /** @class */ (function () {
    function CartsService(http) {
        this.http = http;
        this.baseURL = '/api/shop/';
        this.openCartEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CartsService.prototype.checkOpenCart = function () {
        return this.http.get(this.baseURL + 'carts/');
    };
    CartsService.prototype.openNewCart = function () {
        return this.http.post(this.baseURL + 'carts/', httpOptions);
    };
    CartsService.prototype.clearCart = function (cartId) {
        return this.http.delete(this.baseURL + 'carts/' + cartId, httpOptions);
    };
    CartsService.prototype.addCartItem = function (item) {
        return this.http.post(this.baseURL + 'cartitems/', item, httpOptions);
    };
    CartsService.prototype.checkCartItems = function (cartId) {
        return this.http.get(this.baseURL + 'cartitems/' + cartId);
    };
    CartsService.prototype.removeCartItem = function (itemId) {
        return this.http.delete(this.baseURL + 'cartitems/' + itemId, httpOptions);
    };
    CartsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CartsService);
    return CartsService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var OrdersService = /** @class */ (function () {
    function OrdersService(http) {
        this.http = http;
        this.baseURL = '/api/shop/orders/';
    }
    OrdersService.prototype.getAllOrders = function () {
        return this.http.get(this.baseURL);
    };
    OrdersService.prototype.getOrdersByDate = function (date) {
        return this.http.get(this.baseURL + date);
    };
    OrdersService.prototype.getUserOrders = function (userID) {
        return this.http.get(this.baseURL + 'user/' + userID);
    };
    OrdersService.prototype.saveNewOrder = function (ord) {
        return this.http.post(this.baseURL, ord, httpOptions);
    };
    OrdersService.prototype.printReceipt = function (details) {
        return this.http.post(this.baseURL + 'receipt', details, httpOptions);
    };
    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.baseURL = '/api/shop/products/';
    }
    ProductsService.prototype.getCategories = function () {
        return this.http.get('/api/shop/categories');
    };
    ProductsService.prototype.searchCategory = function (name) {
        return this.http.get('/api/shop/categories/' + name);
    };
    ProductsService.prototype.addNewCategory = function (catg) {
        return this.http.post('/api/shop/categories', catg, httpOptions);
    };
    ProductsService.prototype.getProducts = function () {
        return this.http.get(this.baseURL);
    };
    ProductsService.prototype.getProductByCategories = function (catg) {
        return this.http.get(this.baseURL + catg);
    };
    ProductsService.prototype.getProductByName = function (name) {
        return this.http.get('/api/shop/search/' + name);
    };
    ProductsService.prototype.saveNewProduct = function (prod) {
        return this.http.post(this.baseURL, prod, httpOptions);
    };
    ProductsService.prototype.updateProduct = function (prodId, prod) {
        return this.http.put(this.baseURL + prodId, prod, httpOptions);
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.userNameEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLogOutEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLoginEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UsersService.prototype.login = function (data) {
        return this.http.post('/api/login/', data, httpOptions);
    };
    UsersService.prototype.checkSession = function () {
        return this.http.get('/api/login/');
    };
    UsersService.prototype.logOut = function () {
        return this.http.get('/api/logout/');
    };
    UsersService.prototype.checkIdAvailable = function (id) {
        return this.http.get('/api/register/' + id);
    };
    UsersService.prototype.registerNewUser = function (userObj) {
        return this.http.post('/api/register/', userObj, httpOptions);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dresn\Desktop\homeWork\project4\project4-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map