(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/nicky/git/ada_stores/frontend/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "9xVd":
    /*!***********************************!*\
      !*** ./src/app/stores.service.ts ***!
      \***********************************/

    /*! exports provided: StoresService */

    /***/
    function xVd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoresService", function () {
        return StoresService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StoresService = /*#__PURE__*/function () {
        function StoresService(http) {
          _classCallCheck(this, StoresService);

          this.http = http; //private storesUrl = 'http://localhost:8000/stores/?format=json';
          // private storesUrl = 'https://testing-cardano-back.herokuapp.com/stores/?format=json';

          this.storesUrl = 'https://cardano-directory-back.herokuapp.com/stores/?format=json';
        }

        _createClass(StoresService, [{
          key: "getStores",
          value: function getStores(url) {
            var currentUrl = url !== null && url !== void 0 ? url : this.storesUrl;
            return this.http.get(currentUrl);
          }
        }]);

        return StoresService;
      }();

      StoresService.ɵfac = function StoresService_Factory(t) {
        return new (t || StoresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      StoresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StoresService,
        factory: StoresService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _stores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stores.service */
      "9xVd");
      /* harmony import */


      var _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./store-list/store-list.component */
      "smD0");

      var AppComponent = function AppComponent(storesService) {
        _classCallCheck(this, AppComponent);

        this.storesService = storesService;
        this.title = 'Ada and Friends - Business Directory';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stores_service__WEBPACK_IMPORTED_MODULE_1__["StoresService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-store-list");
          }
        },
        directives: [_store_list_store_list_component__WEBPACK_IMPORTED_MODULE_2__["StoreListComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./store-box/store-box.component */
      "qOGq");
      /* harmony import */


      var _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./store-list/store-list.component */
      "smD0");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _http_request_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./http-request-interceptor */
      "eIeQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _http_request_interceptor__WEBPACK_IMPORTED_MODULE_6__["HttpRequestInterceptor"],
          multi: true
        }],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_3__["StoreBoxComponent"], _store_list_store_list_component__WEBPACK_IMPORTED_MODULE_4__["StoreListComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]]
        });
      })();
      /***/

    },

    /***/
    "eIeQ":
    /*!*********************************************!*\
      !*** ./src/app/http-request-interceptor.ts ***!
      \*********************************************/

    /*! exports provided: HttpRequestInterceptor */

    /***/
    function eIeQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function () {
        return HttpRequestInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loading.service */
      "ixqX");
      /**
       * This class is for intercepting http requests. When a request starts, we set the loadingSub property
       * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
       * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
       * @class {HttpRequestInterceptor}
       */


      var HttpRequestInterceptor = /*#__PURE__*/function () {
        function HttpRequestInterceptor(_loading) {
          _classCallCheck(this, HttpRequestInterceptor);

          this._loading = _loading;
        }

        _createClass(HttpRequestInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this = this;

            this._loading.setLoading(true, request.url);

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              _this._loading.setLoading(false, request.url);

              return err;
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (evt) {
              if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                _this._loading.setLoading(false, request.url);
              }

              return evt;
            }));
          }
        }]);

        return HttpRequestInterceptor;
      }();

      HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) {
        return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]));
      };

      HttpRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HttpRequestInterceptor,
        factory: HttpRequestInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "ixqX":
    /*!************************************!*\
      !*** ./src/app/loading.service.ts ***!
      \************************************/

    /*! exports provided: LoadingService */

    /***/
    function ixqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService() {
          _classCallCheck(this, LoadingService);

          this.loadingSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
          /**
           * Contains in-progress loading requests
           */

          this.loadingMap = new Map();
        }
        /**
         * Sets the loadingSub property value based on the following:
         * - If loading is true, add the provided url to the loadingMap with a true value, set loadingSub value to true
         * - If loading is false, remove the loadingMap entry and only when the map is empty will we set loadingSub to false
         * This pattern ensures if there are multiple requests awaiting completion, we don't set loading to false before
         * other requests have completed. At the moment, this function is only called from the @link{HttpRequestInterceptor}
         * @param loading {boolean}
         * @param url {string}
         */


        _createClass(LoadingService, [{
          key: "setLoading",
          value: function setLoading(loading, url) {
            if (!url) {
              throw new Error('The request URL must be provided to the LoadingService.setLoading function');
            }

            if (loading === true) {
              this.loadingMap.set(url, loading);
              this.loadingSub.next(true);
            } else if (loading === false && this.loadingMap.has(url)) {
              this.loadingMap["delete"](url);
            }

            if (this.loadingMap.size === 0) {
              this.loadingSub.next(false);
            }
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ɵfac = function LoadingService_Factory(t) {
        return new (t || LoadingService)();
      };

      LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LoadingService,
        factory: LoadingService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "qOGq":
    /*!**************************************************!*\
      !*** ./src/app/store-box/store-box.component.ts ***!
      \**************************************************/

    /*! exports provided: StoreBoxComponent */

    /***/
    function qOGq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreBoxComponent", function () {
        return StoreBoxComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      function StoreBoxComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 22);
        }
      }

      function StoreBoxComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 23);
        }
      }

      function StoreBoxComponent_p_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.store.address, ", ", ctx_r2.store.state, "");
        }
      }

      function StoreBoxComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.store.address);
        }
      }

      function StoreBoxComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r5.store.googlemaps_link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.store.country["name"]);
        }
      }

      var StoreBoxComponent = /*#__PURE__*/function () {
        function StoreBoxComponent() {
          _classCallCheck(this, StoreBoxComponent);

          this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMapMarkerAlt"];
        }

        _createClass(StoreBoxComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StoreBoxComponent;
      }();

      StoreBoxComponent.ɵfac = function StoreBoxComponent_Factory(t) {
        return new (t || StoreBoxComponent)();
      };

      StoreBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StoreBoxComponent,
        selectors: [["app-store-box"]],
        inputs: {
          store: "store",
          index: "index"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 30,
        vars: 12,
        consts: [["class", "clearfix visible-md-block visible-lg-block", 4, "ngIf"], ["class", "clearfix visible-sm-block", 4, "ngIf"], [1, "col-md-4", "col-sm-6"], [1, "single-explore-item"], [1, "single-explore-img"], ["alt", "shop image", 3, "src"], [1, "single-explore-txt", "bg-theme-1"], [1, "explore-person"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "row"], [1, "col-sm-10"], [1, "explore-rating-price"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngIf"], [1, "explore-open-close-part"], [1, "col-xs-5"], ["target", "_blank", "rel", "noreferrer noopener", 3, "href"], [1, "close-btn", "open-btn"], [1, "col-xs-7"], [1, "explore-map-icon"], [3, "icon"], [1, "clearfix", "visible-md-block", "visible-lg-block"], [1, "clearfix", "visible-sm-block"]],
        template: function StoreBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, StoreBoxComponent_div_0_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StoreBoxComponent_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, StoreBoxComponent_p_15_Template, 2, 2, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StoreBoxComponent_ng_template_16_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, StoreBoxComponent_div_19_Template, 3, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "open website");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "fa-icon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.index % 3 === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.index % 2 === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.store.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.store.website, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.store.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.store.googlemaps_link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.store.state)("ngIfElse", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.store.country);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.store.website, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.store.googlemaps_link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faMapMarkerAlt);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1ib3guY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "smD0":
    /*!****************************************************!*\
      !*** ./src/app/store-list/store-list.component.ts ***!
      \****************************************************/

    /*! exports provided: StoreListComponent */

    /***/
    function smD0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreListComponent", function () {
        return StoreListComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../loading.service */
      "ixqX");
      /* harmony import */


      var _stores_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../stores.service */
      "9xVd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../store-box/store-box.component */
      "qOGq");

      function StoreListComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoreListComponent_app_store_box_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-store-box", 15);
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;
          var indexOfStore_r4 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("store", item_r3)("index", indexOfStore_r4);
        }
      }

      function StoreListComponent_li_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreListComponent_li_18_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var page_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.getStores(page_r5["address"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.currentPage == page_r5["number"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5["number"]);
        }
      }

      var StoreListComponent = /*#__PURE__*/function () {
        function StoreListComponent(_loading, storesService) {
          _classCallCheck(this, StoreListComponent);

          this._loading = _loading;
          this.storesService = storesService;
          this.loading = false;
          this.storeList = [];
          this.paginationNext = '';
          this.paginationPrevious = '';
          this.pagesShown = [];
        }

        _createClass(StoreListComponent, [{
          key: "getStores",
          value: function getStores(url) {
            var _this2 = this;

            this.storesService.getStores(url).subscribe(function (data) {
              _this2.storeList = data['results'];
              _this2.paginationNext = data['next'];
              _this2.paginationPrevious = data['previous'];
              _this2.numberOfPages = Math.ceil(data['count'] / 9);
              console.log(_this2.paginationNext); // Extraction ofthe current page number from "next page" link

              if (_this2.paginationNext !== null) {
                _this2.currentPage = Number(_this2.paginationNext.split('page=')[1]) - 1;
                _this2.paginationAddress = _this2.paginationNext.split('page=')[0];
              } else {
                _this2.currentPage = _this2.numberOfPages;
              }

              _this2.pagesShown = []; // We reset the list on every API call
              // this.initializer = Math.max(1, this.currentPage - 2) <= 0 ? 1 :
              //   this.currentPage - 2;
              // this.endCondition = Math.min(this.currentPage + 2, this.numberOfPages)
              // Selection of the page numbers to be displayed on the pagination nav

              _this2.pagesShown = []; // We reset the list on every API call
              // Set initializer and end condition for pages loop

              if (_this2.numberOfPages <= 5 || [1, 2].includes(_this2.currentPage)) {
                _this2.initializer = 1;
                _this2.endCondition = Math.min(_this2.numberOfPages, 5);
              } else if ([_this2.numberOfPages, _this2.numberOfPages - 1].includes(_this2.currentPage)) {
                _this2.initializer = _this2.currentPage - 4;
                _this2.endCondition = _this2.numberOfPages;
              } else {
                _this2.initializer = _this2.currentPage - 2;
                _this2.endCondition = _this2.currentPage + 2;
              } // Set pages to be shown with corresponding API address


              for (var i = _this2.initializer; i <= _this2.endCondition; i++) {
                _this2.pagesShown.push({
                  "number": i,
                  "address": "".concat(_this2.paginationAddress, "page=").concat(i)
                });
              } // if (this.numberOfPages <= 5 || [1, 2].includes(this.currentPage)) {
              //   for (let i = 1; i < (this.numberOfPages + 1); i++) {
              //     this.pagesShown.push({
              //       "number": i,
              //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
              //     })
              //     if (this.pagesShown.length == 5) {
              //       break
              //     }
              //   }
              // } else if ([this.numberOfPages, this.numberOfPages - 1].includes(
              //   this.currentPage)) {
              //   for (let i = (this.currentPage - 4);
              //     i < this.numberOfPages + 1; i++) {
              //     this.pagesShown.push({
              //       "number": i,
              //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
              //     })
              //   }
              // } else {
              //   for (let i = this.currentPage - 2; i < this.currentPage + 3; i++) {
              //     this.pagesShown.push({
              //       "number": i,
              //       "address": `http://localhost:8000/stores/?format=json&page=${i}`
              //     })
              //   }
              // }

            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getStores();
            this.listenToLoading();
          }
        }, {
          key: "listenToLoading",
          value: function listenToLoading() {
            var _this3 = this;

            this._loading.loadingSub.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
            .subscribe(function (loading) {
              _this3.loading = loading;
            });
          }
        }]);

        return StoreListComponent;
      }();

      StoreListComponent.ɵfac = function StoreListComponent_Factory(t) {
        return new (t || StoreListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_stores_service__WEBPACK_IMPORTED_MODULE_3__["StoresService"]));
      };

      StoreListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StoreListComponent,
        selectors: [["app-store-list"]],
        decls: 24,
        vars: 5,
        consts: [[2, "text-align", "left"], ["id", "explore", 1, "explore"], [1, "container"], [1, "section-header"], [4, "ngIf"], [1, "explore-content"], [1, "row"], [3, "store", "index", 4, "ngFor", "ngForOf"], ["aria-label", "pagination"], [1, "pagination"], [1, "pagination-btn", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [1, "visuallyhidden"], ["aria-hidden", "true"], [1, "lds-ring"], [3, "store", "index"]],
        template: function StoreListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "find your store");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Find stores and businesses that accept ADA coin, the Cardano Blockchain coin");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StoreListComponent_div_8_Template, 6, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StoreListComponent_app_store_box_11_Template, 1, 2, "app-store-box", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nav", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreListComponent_Template_button_click_15_listener() {
              return ctx.getStores(ctx.paginationPrevious);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\xAB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, StoreListComponent_li_18_Template, 3, 2, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoreListComponent_Template_button_click_20_listener() {
              return ctx.getStores(ctx.paginationNext);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\xBB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.storeList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentPage == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pagesShown);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.currentPage == ctx.numberOfPages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _store_box_store_box_component__WEBPACK_IMPORTED_MODULE_5__["StoreBoxComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map