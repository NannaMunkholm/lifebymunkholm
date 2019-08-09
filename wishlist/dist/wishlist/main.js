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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guidelines/guidelines.component */ "./src/app/guidelines/guidelines.component.ts");
/* harmony import */ var _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dictionary/dictionary.component */ "./src/app/dictionary/dictionary.component.ts");
/* harmony import */ var _guidelines_css_css_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guidelines/css/css.component */ "./src/app/guidelines/css/css.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'tools', component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__["ToolsComponent"] },
    { path: 'guidelines', component: _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_5__["GuidelinesComponent"] },
    { path: 'dictionary', component: _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_6__["DictionaryComponent"] },
    { path: 'guidelines/css', component: _guidelines_css_css_component__WEBPACK_IMPORTED_MODULE_7__["CSSComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>"

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
        this.title = 'guidelines';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guidelines/guidelines.component */ "./src/app/guidelines/guidelines.component.ts");
/* harmony import */ var _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dictionary/dictionary.component */ "./src/app/dictionary/dictionary.component.ts");
/* harmony import */ var _guidelines_css_css_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guidelines/css/css.component */ "./src/app/guidelines/css/css.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_7__["ToolsComponent"],
                _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_8__["GuidelinesComponent"],
                _dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_9__["DictionaryComponent"],
                _guidelines_css_css_component__WEBPACK_IMPORTED_MODULE_10__["CSSComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dictionary/dictionary.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY3Rpb25hcnkvZGljdGlvbmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dictionary/dictionary.component.html":
/*!******************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Dictionary for programming</title>\n  <meta name=\"keywords\" content=\"programming Dictionary, HTML, CSS\">\n</head>\n\n<body>\n  <header>\n      <h1>Dictionary for programming</h1>\n  </header>\n\n  <main>\n    <dl class=\"row\">\n      <dt class=\"col-sm-3\">CSS</dt>\n      <dd class=\"col-sm-9\">Cascading Stylesheet - used for styling and designing a webpage.</dd>\n      <dt class=\"col-sm-3\">HTML</dt>\n      <dd class=\"col-sm-9\">Hypertext Markup Language - is concerned with the content and structure of the website.</dd>\n    </dl>\n\n    <h2>HTML</h2>\n    <dl class=\"row\">\n      <dt class=\"col-sm-3\">Tags</dt>\n      <dd class=\"col-sm-9\">Tags are angle brackets with a single word enclosed inside, where each tag has a specific meaning. Most tags in HTML have a correspnoding end tag.</dd>\n      <dt class=\"col-sm-3\">&lt;img&gt;</dt>\n      <dd class=\"col-sm-9\">Used to add images to a page. Example: &lt;img src=\"someimg.jpg\" height=\"100px\" width=\"100px\" alt=\"just some image\"&gt;</dd>\n      <dt class=\"col-sm-3\">&lt;meta&gt;</dt>\n      <dd class=\"col-sm-9\">The meta tag is used to provide keywords and descriptions for search engines. Example: &lt;meta name=\"keywords\" content=\"HTML, CSS\"&gt; or &lt;meta name=\"description\" content=\"This is my first website.\"&gt;</dd>\n      <dt class=\"col-sm-3\">&lt;p&gt;</dt>\n      <dd class=\"col-sm-9\">Paragraph tag is used to add text to a page.</dd>\n      <dt class=\"col-sm-3\">&lt;a&gt;</dt>\n      <dd class=\"col-sm-9\">Is used to insert a hyperlink. Example: &lt;a href=\"http://www.google.com\"&gt;Click here to go to Google &lt;/a&gt;</dd>\n      <dt class=\"col-sm-3\">&lt;ol&gt; and &lt;li&gt;</dt>\n      <dd class=\"col-sm-9\">Is an ordered list and is used to create a list with numbers or alphabets as list markers. Example: <br>&lt;ol&gt;<br>&lt;li&gt;Chocolate&lt;/li&gt;<br>&lt;/ol&gt;</dd>\n      <dt class=\"col-sm-3\">&lt;ul&gt; and &lt;li&gt;</dt>\n      <dd class=\"col-sm-9\">Is an unordered list that use other shapes a dots or hollow circle.</dd>\n      <dt class=\"col-sm-3\">&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</dt>\n      <dd class=\"col-sm-9\">Is used to create tables, which is created row by row. &lt;tr&gt;=\"Table row\", &lt;th&gt;=\"Table Header\", &lt;td&gt;=\"Table Data\",.</dd>\n      <dt class=\"col-sm-3\">&lt;div&gt;</dt>\n      <dd class=\"col-sm-9\">Division is used to define a division or a section. It is normally used together with CSS to format the content.</dd>\n      <dt class=\"col-sm-3\">&lt;span&gt;</dt>\n      <dd class=\"col-sm-9\">Span is similar to div, but the main difference is taht div is a block element, while span is an inline element. Is used to wrap small portions of text, images etc.</dd>\n      <dt class=\"col-sm-3\">Block element</dt>\n      <dd class=\"col-sm-9\">Is one that starts and ends with a new line break.</dd>\n      <dt class=\"col-sm-3\">Inline element</dt>\n      <dd class=\"col-sm-9\">Is one that does not starts and ends with a inline break.</dd>\n      <dt class=\"col-sm-3\">&lt;script&gt;</dt>\n      <dd class=\"col-sm-9\">The script tag is used to add internal Javascript code to our HTML document or to link to an external script.</dd>\n      <dt class=\"col-sm-3\">&lt;strong&gt;</dt>\n      <dd class=\"col-sm-9\">Make the text <strong>bold</strong>.</dd>\n      <dt class=\"col-sm-3\">&lt;em&gt;</dt>\n      <dd class=\"col-sm-9\">Displayes the text in <em>italics</em>.</dd>\n      <dt class=\"col-sm-3\">Make a comment</dt>\n      <dd class=\"col-sm-9\">&lt;!--and--&gt;.</dd>\n      <dt class=\"col-sm-3\">Entity name</dt>\n      <dd class=\"col-sm-9\">A way of writing characters as &gt;, it always starts with a & and end with a simi-colon (;). <a href=\"https://www.freeformatter.com/html-entities.html\">List of html-entities </a></dd>\n      <dt class=\"col-sm-3\">Shortcut for colors</dt>\n      <dd class=\"col-sm-9\"><a href=\"https://www.w3schools.com/cssref/css_colors.asp\">List of colors </a></dd>\n      <dt class=\"col-sm-3\">Write extra space</dt>\n      <dd class=\"col-sm-9\">&nbsp; & n b s p ;.</dd>\n    </dl>\n      \n    <h2>CSS</h2>\n    <dl class=\"row\">\n      <dt class=\"col-sm-3\">CSS</dt>\n      <dd class=\"col-sm-9\">Cascading Stylesheet - used for styling and designing a webpage.</dd>\n      <dt class=\"col-sm-3\">HTML</dt>\n      <dd class=\"col-sm-9\">Hypertext Markup Language - is concerned with the content and structure of the website.</dd>\n      <dt class=\"col-sm-3\">border-style</dt>\n      <dd class=\"col-sm-9\">Acceptable values are none, dotted, dashed, solid, double, groove, ridge, inset and outset.</dd>\n      <dt class=\"col-sm-3\">border-radius</dt>\n      <dd class=\"col-sm-9\">Is used to create borders with rounded corners, is given in pixel or percentage.</dd>\n      <dt class=\"col-sm-3\">border shorthand</dt>\n      <dd class=\"col-sm-9\">Specify border width, style and color in one line. Example border: 5px solid green;</dd>\n    </dl>\n  </main>\n  <footer></footer>\n</body>"

/***/ }),

/***/ "./src/app/dictionary/dictionary.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dictionary/dictionary.component.ts ***!
  \****************************************************/
/*! exports provided: DictionaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionaryComponent", function() { return DictionaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DictionaryComponent = /** @class */ (function () {
    function DictionaryComponent() {
    }
    DictionaryComponent.prototype.ngOnInit = function () {
    };
    DictionaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dictionary',
            template: __webpack_require__(/*! ./dictionary.component.html */ "./src/app/dictionary/dictionary.component.html"),
            styles: [__webpack_require__(/*! ./dictionary.component.css */ "./src/app/dictionary/dictionary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DictionaryComponent);
    return DictionaryComponent;
}());



/***/ }),

/***/ "./src/app/guidelines/css/css.component.css":
/*!**************************************************!*\
  !*** ./src/app/guidelines/css/css.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#box1 {\r\n    margin: 20px;\r\n    padding: 10px;\r\n    border:5px solid black;\r\n    width: 200px;\r\n    height: 200px;\r\n    text-align: justify;\r\n    float: left;\r\n}\r\n\r\n#box2 {\r\n    margin: 20px;\r\n    padding: 50px;\r\n    border:5px solid black;\r\n    width: 200px;\r\n    height: 200px;\r\n    text-align: justify;\r\n    float: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3VpZGVsaW5lcy9jc3MvY3NzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ndWlkZWxpbmVzL2Nzcy9jc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3gxIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6NXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2JveDIge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlcjo1cHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/guidelines/css/css.component.html":
/*!***************************************************!*\
  !*** ./src/app/guidelines/css/css.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"How to style your site first time with CSS\">\n  <meta name=\"keywords\" content=\"CSS\">\n  <meta name=\"author\" content=\"Nanna Bach Munkholm\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n\n<body>\n  <header>\n    <h1>How to setup the style for a new angular project with CSS</h1>\n  </header>\n  <main>\n      <h3>Main struture of a page</h3>\n      <p>A HTML document is made up of two main elements, the head and the body elements.<br>\n        <strong>The head</strong> provides general information about the document, incl. its meta data, title and links to additional resources.<br>\n        Within the head tags, other tags that provide behind-the-scene information is enclosed.<br>\n        All content provided within <strong>the body</strong> tags will be displayed on the webpage.\n      </p>\n      <pre class=\"line-numbers\">\n          <code>\n              &lt;head&gt;\n              &lt;meta charset=\"UTF-8\"&gt;\n              &lt;meta name=\"description\" content=\"Free Web tutorials\"&gt;\n              &lt;meta name=\"keywords\" content=\"HTML,CSS,XML,JavaScript\"&gt;\n              &lt;meta name=\"author\" content=\"Nanna Bach Munkholm\"&gt;\n              &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n              &lt;/head&gt;\n      \n              &lt;body&gt;\n              &lt;/body&gt;\n          </code>\n      </pre>\n      <p>\n        Within the body tags we first have the header.<br>\n        The header defines the top section of a webpage and normally consist of a logo/banner of the website.<br>\n        Afterwards the navigation section is given with &lt;nav&gt; <br>\n        The main section is afterwards enclosed by &lt;main&gt;<br>\n        Last the footer element is given to define the bottom of the webpage.  \n        \n      </p>\n\n      <h2>CSS Box Model</h2>\n      <img src=\"https://mdn.mozillademos.org/files/13647/box-model-standard-small.png\" height=\"250px\"  alt=\"just some image\">\n\n      <table>\n        <tr>\n          <th>CSS code for box1</th>\n          <th>CSS code for box2</th>\n        </tr>\n        <tr>\n          <td>\n              <pre class=\"line-numbers\">\n                  <code>\n                    &#35;box1 \t&#123;\n                      margin&#58; 20px&#59;\n                      padding&#58; 10px&#59;\n                      border&#58; 5px solid black&#59;\n                      width&#58; 200px&#59;\n                      height&#58; 200px&#59;\n                      text-align&#58; justify&#59;\n                      float&#58; left&#59;\n                      &#125;\n                  </code>\n              </pre>\n          </td>\n          <td>\n            <pre class=\"line-numbers\">\n                <code>\n                  &#35;box2 \t&#123;\n                    margin&#58; 20px&#59;\n                    padding&#58; 50px&#59;\n                    border&#58; 5px solid black&#59;\n                    width&#58; 200px&#59;\n                    height&#58; 200px&#59;\n                    text-align&#58; justify&#59;\n                    float&#58; left&#59;\n                    &#125;\n                </code>\n            </pre>\n          </td>\n        </tr>\n      </table>\n\n      <div id=\"box1\">Learn what margins, paddings and borders are.</div>\n      <div id=\"box2\">Learn what margins, paddings and borders are.</div>\n      <p>dfjkgljlknfvlknkln<br>knskdnfkvnkbjkbdjk<br>bdsjkbvjksbjkdbvjkb jvkb<br> jkb vjk jk jk cjkjk jk jk<br>dbjkbfjnlnaskfnl<br>nflnlnlnlnlnwlnfnfdnkfclnsnfcsdn</p>\n\n      \n  </main>\n</body>"

/***/ }),

/***/ "./src/app/guidelines/css/css.component.ts":
/*!*************************************************!*\
  !*** ./src/app/guidelines/css/css.component.ts ***!
  \*************************************************/
/*! exports provided: CSSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSComponent", function() { return CSSComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CSSComponent = /** @class */ (function () {
    function CSSComponent() {
    }
    CSSComponent.prototype.ngOnInit = function () {
    };
    CSSComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-css',
            template: __webpack_require__(/*! ./css.component.html */ "./src/app/guidelines/css/css.component.html"),
            styles: [__webpack_require__(/*! ./css.component.css */ "./src/app/guidelines/css/css.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CSSComponent);
    return CSSComponent;
}());



/***/ }),

/***/ "./src/app/guidelines/guidelines.component.css":
/*!*****************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlbGluZXMvZ3VpZGVsaW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/guidelines/guidelines.component.html":
/*!******************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <title>Guidelines</title>\n</head>\n\n<body>\n  <header>\n    <h1>Guidelines for programming</h1>\n    <a routerLink=\"/guidelines/css\">CSS</a>\n  </header>\n\n  <main>\n    \n    <p>\n      This site contains guidelines for how a website is build.\n      It is made as a dictonary for myself, so I can keep all guides in one place. \n    </p>\n\n    <h2>Templating - Structure your site</h2>\n    <h3>Setup the main folders</h3>\n    <p>\n      1. Create a new page/folder write \"ng g c name of folder\" <br>\n      2. Add the new page to app.routing.modules.ts <br>\n      3. Insert:<br>\n    </p>\n    <pre class=\"line-numbers\">\n        <code>\n            import DictionaryComponent from './dictionary/dictionary.component'\n            path: 'dictionary', component: DictionaryComponent\n        </code>\n    </pre>\n    <p>\n      Create a new page within the folder, insert in the terminal: <br>\n      \"ng g c name of folder/name of new page\"\n    </p>\n\n    <h3>Setup navigation between sites</h3>\n    <h2>Styling - Style your site</h2>\n    <p>\n      Main CSS syntax: <br>\n      selector &#123; property : value; property : value \t&#125;\n    </p>\n  </main>\n</body>\n"

/***/ }),

/***/ "./src/app/guidelines/guidelines.component.ts":
/*!****************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.ts ***!
  \****************************************************/
/*! exports provided: GuidelinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidelinesComponent", function() { return GuidelinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuidelinesComponent = /** @class */ (function () {
    function GuidelinesComponent() {
    }
    GuidelinesComponent.prototype.ngOnInit = function () {
    };
    GuidelinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guidelines',
            template: __webpack_require__(/*! ./guidelines.component.html */ "./src/app/guidelines/guidelines.component.html"),
            styles: [__webpack_require__(/*! ./guidelines.component.css */ "./src/app/guidelines/guidelines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuidelinesComponent);
    return GuidelinesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style buttons */\r\n.btn {\r\n    background-color: DodgerBlue; /* Blue background */\r\n    border: none; /* Remove borders */\r\n    color: white; /* White text */\r\n    padding: 15px 15px; /* Some padding */\r\n    font-size: 25px; /* Set a font size */\r\n    cursor: pointer; /* Mouse pointer on hover */\r\n  }\r\n/* Darker background on mouse-over */\r\n.btn:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksNEJBQTRCLEVBQUUsb0JBQW9CO0lBQ2xELFlBQVksRUFBRSxtQkFBbUI7SUFDakMsWUFBWSxFQUFFLGVBQWU7SUFDN0Isa0JBQWtCLEVBQUUsaUJBQWlCO0lBQ3JDLGVBQWUsRUFBRSxvQkFBb0I7SUFDckMsZUFBZSxFQUFFLDJCQUEyQjtFQUM5QztBQUVBLG9DQUFvQztBQUNwQztJQUNFLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgYnV0dG9ucyAqL1xyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gICAgY29sb3I6IHdoaXRlOyAvKiBXaGl0ZSB0ZXh0ICovXHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xyXG4gICAgZm9udC1zaXplOiAyNXB4OyAvKiBTZXQgYSBmb250IHNpemUgKi9cclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogTW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xyXG4gIH1cclxuICBcclxuICAvKiBEYXJrZXIgYmFja2dyb3VuZCBvbiBtb3VzZS1vdmVyICovXHJcbiAgLmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"description\" content=\"Usefull tools for programming and life in general \">\r\n    <meta name=\"keywords\" content=\"Tools, angular\">\r\n    <meta name=\"author\" content=\"Nanna Bach Munkholm\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <!-- Add icon library -->\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <h1>Guidelines & tools for programming</h1>\r\n    </header>\r\n\r\n    <main>\r\n        <button class=\"btn\"><i class=\"fa fa-linkedin-square\"></i> <a href=\"https://www.linkedin.com/in/nanna-bach-munkholm-65459b76/\" style=\"color:#FFFFFF;\"> Linkedin</a></button>\r\n\r\n    </main>\r\n</body>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\" >Guidelines & tools by Nanna B. Munkholm</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/tools\">Tools</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/dictionary\">Dictionary</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/guidelines\">Guidelines</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'Guidelines & tools by Nanna Munkholm';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tools/tools.component.html":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"description\" content=\"Usefull tools for programming and live in general \">\n    <meta name=\"keywords\" content=\"Tools, angular\">\n    <meta name=\"author\" content=\"Nanna Bach Munkholm\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>\n\n<body>\n    <header>\n        <h1>My favorite tools</h1>\n    </header>\n\n    <main>\n        <p>\n            Basic angular 7 guide:\n        </p>\n        <ul>https://www.youtube.com/watch?v=5wtnKulcquA</ul>\n        <ul>https://coursetro.com/posts/code/171/Angular-7-Tutorial---Learn-Angular-7-by-Example</ul>\n    </main>\n</body>\n\n\n"

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\45246\Desktop\orbit-master\nannawishlist\wishlist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map