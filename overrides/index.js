"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var architect_1 = require("@angular-devkit/architect");
var build_webpack_1 = require("@angular-devkit/build-webpack");
var core_1 = require("@angular-devkit/core");
var node_1 = require("@angular-devkit/core/node");
var path = require("path");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var analytics_1 = require("../../plugins/webpack/analytics");
var webpack_configs_1 = require("../angular-cli-files/models/webpack-configs");
var write_index_html_1 = require("../angular-cli-files/utilities/index-file/write-index-html");
var service_worker_1 = require("../angular-cli-files/utilities/service-worker");
var stats_1 = require("../angular-cli-files/utilities/stats");
var utils_1 = require("../utils");
var webpack_browser_config_1 = require("../utils/webpack-browser-config");
function createBrowserLoggingCallback(verbose, logger) {
    return function (stats, config) {
        // config.stats contains our own stats settings, added during buildWebpackConfig().
        var json = stats.toJson(config.stats);
        if (verbose) {
            logger.info(stats.toString(config.stats));
        }
        else {
            logger.info(stats_1.statsToString(json, config.stats));
        }
        if (stats.hasWarnings()) {
            logger.warn(stats_1.statsWarningsToString(json, config.stats));
        }
        if (stats.hasErrors()) {
            logger.error(stats_1.statsErrorsToString(json, config.stats));
        }
    };
}
exports.createBrowserLoggingCallback = createBrowserLoggingCallback;
function buildBrowserWebpackConfigFromContext(options, context, host) {
    if (host === void 0) { host = new node_1.NodeJsSyncHost(); }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, webpack_browser_config_1.generateBrowserWebpackConfigFromContext(options, context, function (wco) { return [
                    webpack_configs_1.getCommonConfig(wco),
                    webpack_configs_1.getBrowserConfig(wco),
                    webpack_configs_1.getStylesConfig(wco),
                    webpack_configs_1.getStatsConfig(wco),
                    getAnalyticsConfig(wco, context),
                    getCompilerConfig(wco),
                    wco.buildOptions.webWorkerTsConfig ? webpack_configs_1.getWorkerConfig(wco) : {},
                ]; }, host)];
        });
    });
}
exports.buildBrowserWebpackConfigFromContext = buildBrowserWebpackConfigFromContext;
function getAnalyticsConfig(wco, context) {
    if (context.analytics) {
        // If there's analytics, add our plugin. Otherwise no need to slow down the build.
        var category = 'build';
        if (context.builder) {
            // We already vetted that this is a "safe" package, otherwise the analytics would be noop.
            category = context.builder.builderName.split(':')[1];
        }
        // The category is the builder name if it's an angular builder.
        return {
            plugins: [
                new analytics_1.NgBuildAnalyticsPlugin(wco.projectRoot, context.analytics, category),
            ],
        };
    }
    return {};
}
function getCompilerConfig(wco) {
    if (wco.buildOptions.main || wco.buildOptions.polyfills) {
        return wco.buildOptions.aot ? webpack_configs_1.getAotConfig(wco) : webpack_configs_1.getNonAotConfig(wco);
    }
    return {};
}
function initialize(options, context, host, webpackConfigurationTransform) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, config, workspace, transformedConfig, _i, config_1, c, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, buildBrowserWebpackConfigFromContext(options, context, host)];
                case 1:
                    _a = _d.sent(), config = _a.config, workspace = _a.workspace;
                    if (!webpackConfigurationTransform) return [3 /*break*/, 5];
                    transformedConfig = [];
                    _i = 0, config_1 = config;
                    _d.label = 2;
                case 2:
                    if (!(_i < config_1.length)) return [3 /*break*/, 5];
                    c = config_1[_i];
                    _c = (_b = transformedConfig).push;
                    return [4 /*yield*/, webpackConfigurationTransform(c)];
                case 3:
                    _c.apply(_b, [_d.sent()]);
                    _d.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
                    if (!options.deleteOutputPath) return [3 /*break*/, 7];
                    return [4 /*yield*/, utils_1.deleteOutputDir(core_1.normalize(context.workspaceRoot), core_1.normalize(options.outputPath), host).toPromise()];
                case 6:
                    _d.sent();
                    _d.label = 7;
                case 7: return [2 /*return*/, { config: transformedConfig || config, workspace: workspace }];
            }
        });
    });
}
function buildWebpackBrowser(options, context, transforms) {
    if (transforms === void 0) { transforms = {}; }
    var host = new node_1.NodeJsSyncHost();
    var root = core_1.normalize(context.workspaceRoot);
    var loggingFn = transforms.logging
        || createBrowserLoggingCallback(!!options.verbose, context.logger);
    return rxjs_1.from(initialize(options, context, host, transforms.webpackConfiguration)).pipe(operators_1.switchMap(function (_a) {
        var workspace = _a.workspace, configs = _a.config;
        var projectName = context.target
            ? context.target.project : workspace.getDefaultProjectName();
        if (!projectName) {
            throw new Error('Must either have a target from the context or a default project.');
        }
        var projectRoot = core_1.resolve(workspace.root, core_1.normalize(workspace.getProject(projectName).root));
        return rxjs_1.from(configs).pipe(
        // the concurrency parameter (3rd parameter of mergeScan) is deliberately
        // set to 1 to make sure the build steps are executed in sequence.
        operators_1.mergeScan(function (lastResult, config) {
            // Make sure to only run the 2nd build step, if 1st one succeeded
            if (lastResult.success) {
                return build_webpack_1.runWebpack(config, context, { logging: loggingFn });
            }
            else {
                return rxjs_1.of();
            }
        }, { success: true }, 1), operators_1.bufferCount(configs.length), operators_1.switchMap(function (buildEvents) {
            var success = buildEvents.every(function (r) { return r.success; });
            if (success && buildEvents.length === 2 && options.index) {
                var _a = buildEvents[0].emittedFiles, ES5BuildFiles = _a === void 0 ? [] : _a;
                var _b = buildEvents[1].emittedFiles, ES2015BuildFiles = _b === void 0 ? [] : _b;
                return write_index_html_1.writeIndexHtml({
                    host: host,
                    outputPath: core_1.join(root, options.outputPath),
                    indexPath: core_1.join(root, options.index),
                    ES5BuildFiles: ES5BuildFiles,
                    ES2015BuildFiles: ES2015BuildFiles,
                    baseHref: options.baseHref,
                    deployUrl: options.deployUrl,
                    sri: options.subresourceIntegrity,
                    scripts: options.scripts,
                    styles: options.styles,
                })
                    .pipe(operators_1.map(function () { return ({ success: true }); }), operators_1.catchError(function () { return rxjs_1.of({ success: false }); }));
            }
            else {
                return rxjs_1.of({ success: success });
            }
        }), operators_1.concatMap(function (buildEvent) {
            if (buildEvent.success && !options.watch && options.serviceWorker) {
                return rxjs_1.from(service_worker_1.augmentAppWithServiceWorker(host, root, projectRoot, core_1.resolve(root, core_1.normalize(options.outputPath)), options.baseHref || '/', options.ngswConfigPath).then(function () { return ({ success: true }); }, function () { return ({ success: false }); }));
            }
            else {
                return rxjs_1.of(buildEvent);
            }
        }), operators_1.map(function (event) { return (__assign({}, event, {
            // If we use differential loading, both configs have the same outputs
            outputPath: path.resolve(context.workspaceRoot, options.outputPath) })); }));
    }));
}
exports.buildWebpackBrowser = buildWebpackBrowser;
exports.default = architect_1.createBuilder(buildWebpackBrowser);
