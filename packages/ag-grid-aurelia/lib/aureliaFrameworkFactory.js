// ag-grid-aurelia v18.1.0
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var main_1 = require("ag-grid/main");
var AureliaFrameworkFactory = /** @class */ (function () {
    function AureliaFrameworkFactory() {
        this._baseFrameworkFactory = new main_1.BaseFrameworkFactory(); // todo - inject this
    }
    AureliaFrameworkFactory.prototype.setContainer = function (container) {
        this._container = container;
    };
    AureliaFrameworkFactory.prototype.setViewResources = function (viewResources) {
        this._viewResources = viewResources;
    };
    AureliaFrameworkFactory = __decorate([
        aurelia_framework_1.autoinject(),
        aurelia_framework_1.transient()
    ], AureliaFrameworkFactory);
    return AureliaFrameworkFactory;
}());
exports.AureliaFrameworkFactory = AureliaFrameworkFactory;
