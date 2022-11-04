// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2BImZ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "7cd8f9507a2eefe6";
module.bundle.HMR_BUNDLE_ID = "eeefdfea979dd8f7";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3dn4I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _optionsStorage = require("../lib/options-storage");
var _optionsStorageDefault = parcelHelpers.interopDefault(_optionsStorage);
console.log("\uD83D\uDC88 Content script loaded for", chrome.runtime.getManifest().name);
async function init() {
    const options = await (0, _optionsStorageDefault.default).getAll();
    const color = "rgb(" + options.colorRed + ", " + options.colorGreen + "," + options.colorBlue + ")";
    const text = options.text;
    const notice = document.createElement("div");
    notice.innerHTML = text;
    document.body.prepend(notice);
    notice.id = "text-notice";
    notice.style.border = "2px solid " + color;
    notice.style.color = color;
}
init();

},{"../lib/options-storage":"5DvQs","@parcel/transformer-js/src/esmodule-helpers.js":"8ISrk"}],"5DvQs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _webextOptionsSync = require("webext-options-sync");
var _webextOptionsSyncDefault = parcelHelpers.interopDefault(_webextOptionsSync);
exports.default = new (0, _webextOptionsSyncDefault.default)({
    defaults: {
        colorRed: 244,
        colorGreen: 67,
        colorBlue: 54,
        text: "Set a text!"
    },
    migrations: [
        (0, _webextOptionsSyncDefault.default).migrations.removeUnused, 
    ],
    logging: true
});

},{"webext-options-sync":"5Apzs","@parcel/transformer-js/src/esmodule-helpers.js":"8ISrk"}],"5Apzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>OptionsSync);
var _webextDetectPage = require("webext-detect-page");
function throttle(delay, noTrailing, callback, debounceMode) {
    var timeoutID;
    var cancelled = false;
    var lastExec = 0;
    function clearExistingTimeout() {
        timeoutID && clearTimeout(timeoutID);
    }
    if ("boolean" != typeof noTrailing) {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = void 0;
    }
    function wrapper() {
        for(var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++)arguments_[_key] = arguments[_key];
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (!cancelled) {
            debounceMode && !timeoutID && exec();
            clearExistingTimeout();
            void 0 === debounceMode && elapsed > delay ? exec() : true !== noTrailing && (timeoutID = setTimeout(debounceMode ? clear : exec, void 0 === debounceMode ? delay - elapsed : delay));
        }
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        function clear() {
            timeoutID = void 0;
        }
    }
    wrapper.cancel = function() {
        clearExistingTimeout();
        cancelled = true;
    };
    return wrapper;
}
class TypeRegistry {
    constructor(initial = {}){
        this.registeredTypes = initial;
    }
    get(type) {
        return void 0 !== this.registeredTypes[type] ? this.registeredTypes[type] : this.registeredTypes.default;
    }
    register(type, item) {
        void 0 === this.registeredTypes[type] && (this.registeredTypes[type] = item);
    }
    registerDefault(item) {
        this.register("default", item);
    }
}
class KeyExtractors extends TypeRegistry {
    constructor(options){
        super(options);
        this.registerDefault((el)=>el.getAttribute("name") || "");
    }
}
class InputReaders extends TypeRegistry {
    constructor(options){
        super(options);
        this.registerDefault((el)=>el.value);
        this.register("checkbox", (el)=>null !== el.getAttribute("value") ? el.checked ? el.getAttribute("value") : null : el.checked);
        this.register("select", (el)=>(function(elem) {
                var value, option, i;
                var options = elem.options;
                var index = elem.selectedIndex;
                var one = "select-one" === elem.type;
                var values = one ? null : [];
                var max = one ? index + 1 : options.length;
                i = index < 0 ? max : one ? index : 0;
                for(; i < max; i++)if (((option = options[i]).selected || i === index) && !option.disabled && !(option.parentNode.disabled && "optgroup" === option.parentNode.tagName.toLowerCase())) {
                    value = option.value;
                    if (one) return value;
                    values.push(value);
                }
                return values;
            })(el));
    }
}
class KeyAssignmentValidators extends TypeRegistry {
    constructor(options){
        super(options);
        this.registerDefault(()=>true);
        this.register("radio", (el)=>el.checked);
    }
}
function keySplitter(key) {
    let matches = key.match(/[^[\]]+/g);
    let lastKey;
    if (key.length > 1 && key.indexOf("[]") === key.length - 2) {
        lastKey = matches.pop();
        matches.push([
            lastKey
        ]);
    }
    return matches;
}
function getElementType(el) {
    let typeAttr;
    let tagName = el.tagName;
    let type = tagName;
    if ("input" === tagName.toLowerCase()) {
        typeAttr = el.getAttribute("type");
        type = typeAttr || "text";
    }
    return type.toLowerCase();
}
function getInputElements(element, options) {
    return Array.prototype.filter.call(element.querySelectorAll("input,select,textarea"), (el)=>{
        if ("input" === el.tagName.toLowerCase() && ("submit" === el.type || "reset" === el.type)) return false;
        let myType = getElementType(el);
        let identifier = options.keyExtractors.get(myType)(el);
        let foundInInclude = -1 !== (options.include || []).indexOf(identifier);
        let foundInExclude = -1 !== (options.exclude || []).indexOf(identifier);
        let foundInIgnored = false;
        let reject = false;
        if (options.ignoredTypes) for (let selector of options.ignoredTypes)el.matches(selector) && (foundInIgnored = true);
        reject = !foundInInclude && (!!options.include || foundInExclude || foundInIgnored);
        return !reject;
    });
}
function assignKeyValue(obj, keychain, value) {
    if (!keychain) return obj;
    var key = keychain.shift();
    obj[key] || (obj[key] = Array.isArray(key) ? [] : {});
    0 === keychain.length && (Array.isArray(obj[key]) ? null !== value && obj[key].push(value) : obj[key] = value);
    keychain.length > 0 && assignKeyValue(obj[key], keychain, value);
    return obj;
}
function serialize(element, options = {}) {
    let data = {};
    options.keySplitter = options.keySplitter || keySplitter;
    options.keyExtractors = new KeyExtractors(options.keyExtractors || {});
    options.inputReaders = new InputReaders(options.inputReaders || {});
    options.keyAssignmentValidators = new KeyAssignmentValidators(options.keyAssignmentValidators || {});
    Array.prototype.forEach.call(getInputElements(element, options), (el)=>{
        let type = getElementType(el);
        let key = options.keyExtractors.get(type)(el);
        let value = options.inputReaders.get(type)(el);
        if (options.keyAssignmentValidators.get(type)(el, key, value)) {
            let keychain = options.keySplitter(key);
            data = assignKeyValue(data, keychain, value);
        }
    });
    return data;
}
class InputWriters extends TypeRegistry {
    constructor(options){
        super(options);
        this.registerDefault((el, value)=>{
            el.value = value;
        });
        this.register("checkbox", (el, value)=>{
            null === value ? el.indeterminate = true : el.checked = Array.isArray(value) ? -1 !== value.indexOf(el.value) : value;
        });
        this.register("radio", function(el, value) {
            void 0 !== value && (el.checked = el.value === value.toString());
        });
        this.register("select", setSelectValue);
    }
}
function setSelectValue(elem, value) {
    var optionSet, option;
    var options = elem.options;
    var values = function(arr) {
        var ret = [];
        null !== arr && (Array.isArray(arr) ? ret.push.apply(ret, arr) : ret.push(arr));
        return ret;
    }(value);
    var i = options.length;
    for(; i--;){
        option = options[i];
        if (values.indexOf(option.value) > -1) {
            option.setAttribute("selected", true);
            optionSet = true;
        }
    }
    optionSet || (elem.selectedIndex = -1);
}
function keyJoiner(parentKey, childKey) {
    return parentKey + "[" + childKey + "]";
}
function flattenData(data, parentKey, options = {}) {
    let flatData = {};
    let keyJoiner$1 = options.keyJoiner || keyJoiner;
    for(let keyName in data){
        if (!data.hasOwnProperty(keyName)) continue;
        let value = data[keyName];
        let hash = {};
        parentKey && (keyName = keyJoiner$1(parentKey, keyName));
        if (Array.isArray(value)) {
            hash[keyName + "[]"] = value;
            hash[keyName] = value;
        } else "object" == typeof value ? hash = flattenData(value, keyName, options) : hash[keyName] = value;
        Object.assign(flatData, hash);
    }
    return flatData;
}
function deserialize(form, data, options = {}) {
    let flattenedData = flattenData(data, null, options);
    options.keyExtractors = new KeyExtractors(options.keyExtractors || {});
    options.inputWriters = new InputWriters(options.inputWriters || {});
    Array.prototype.forEach.call(getInputElements(form, options), (el)=>{
        let type = getElementType(el);
        let key = options.keyExtractors.get(type)(el);
        options.inputWriters.get(type)(el, flattenedData[key]);
    });
}
var lzString = {
    exports: {}
};
module = lzString, LZString = function() {
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for(var i = 0; i < alphabet.length; i++)baseReverseDic[alphabet][alphabet.charAt(i)] = i;
        }
        return baseReverseDic[alphabet][character];
    }
    var LZString = {
        compressToBase64: function(input) {
            if (null == input) return "";
            var res = LZString._compress(input, 6, function(a) {
                return keyStrBase64.charAt(a);
            });
            switch(res.length % 4){
                default:
                case 0:
                    return res;
                case 1:
                    return res + "===";
                case 2:
                    return res + "==";
                case 3:
                    return res + "=";
            }
        },
        decompressFromBase64: function(input) {
            return null == input ? "" : "" == input ? null : LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrBase64, input.charAt(index));
            });
        },
        compressToUTF16: function(input) {
            return null == input ? "" : LZString._compress(input, 15, function(a) {
                return f(a + 32);
            }) + " ";
        },
        decompressFromUTF16: function(compressed) {
            return null == compressed ? "" : "" == compressed ? null : LZString._decompress(compressed.length, 16384, function(index) {
                return compressed.charCodeAt(index) - 32;
            });
        },
        compressToUint8Array: function(uncompressed) {
            var compressed = LZString.compress(uncompressed);
            var buf = new Uint8Array(2 * compressed.length);
            for(var i = 0, TotalLen = compressed.length; i < TotalLen; i++){
                var current_value = compressed.charCodeAt(i);
                buf[2 * i] = current_value >>> 8;
                buf[2 * i + 1] = current_value % 256;
            }
            return buf;
        },
        decompressFromUint8Array: function(compressed) {
            if (null == compressed) return LZString.decompress(compressed);
            var buf = new Array(compressed.length / 2);
            for(var i = 0, TotalLen = buf.length; i < TotalLen; i++)buf[i] = 256 * compressed[2 * i] + compressed[2 * i + 1];
            var result = [];
            buf.forEach(function(c) {
                result.push(f(c));
            });
            return LZString.decompress(result.join(""));
        },
        compressToEncodedURIComponent: function(input) {
            return null == input ? "" : LZString._compress(input, 6, function(a) {
                return keyStrUriSafe.charAt(a);
            });
        },
        decompressFromEncodedURIComponent: function(input) {
            if (null == input) return "";
            if ("" == input) return null;
            input = input.replace(/ /g, "+");
            return LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
        },
        compress: function(uncompressed) {
            return LZString._compress(uncompressed, 16, function(a) {
                return f(a);
            });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (null == uncompressed) return "";
            var i, value, ii, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0;
            for(ii = 0; ii < uncompressed.length; ii += 1){
                context_c = uncompressed.charAt(ii);
                if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                    context_dictionary[context_c] = context_dictSize++;
                    context_dictionaryToCreate[context_c] = true;
                }
                context_wc = context_w + context_c;
                if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) context_w = context_wc;
                else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for(i = 0; i < context_numBits; i++){
                                context_data_val <<= 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 8; i++){
                                context_data_val = context_data_val << 1 | 1 & value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value >>= 1;
                            }
                        } else {
                            value = 1;
                            for(i = 0; i < context_numBits; i++){
                                context_data_val = context_data_val << 1 | value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value = 0;
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 16; i++){
                                context_data_val = context_data_val << 1 | 1 & value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value >>= 1;
                            }
                        }
                        if (0 == --context_enlargeIn) {
                            context_enlargeIn = Math.pow(2, context_numBits);
                            context_numBits++;
                        }
                        delete context_dictionaryToCreate[context_w];
                    } else {
                        value = context_dictionary[context_w];
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | 1 & value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value >>= 1;
                        }
                    }
                    if (0 == --context_enlargeIn) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    context_dictionary[context_wc] = context_dictSize++;
                    context_w = String(context_c);
                }
            }
            if ("" !== context_w) {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for(i = 0; i < context_numBits; i++){
                            context_data_val <<= 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 8; i++){
                            context_data_val = context_data_val << 1 | 1 & value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value >>= 1;
                        }
                    } else {
                        value = 1;
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value = 0;
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 16; i++){
                            context_data_val = context_data_val << 1 | 1 & value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value >>= 1;
                        }
                    }
                    if (0 == --context_enlargeIn) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    delete context_dictionaryToCreate[context_w];
                } else {
                    value = context_dictionary[context_w];
                    for(i = 0; i < context_numBits; i++){
                        context_data_val = context_data_val << 1 | 1 & value;
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else context_data_position++;
                        value >>= 1;
                    }
                }
                if (0 == --context_enlargeIn) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
            }
            value = 2;
            for(i = 0; i < context_numBits; i++){
                context_data_val = context_data_val << 1 | 1 & value;
                if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                } else context_data_position++;
                value >>= 1;
            }
            for(;;){
                context_data_val <<= 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data.push(getCharFromInt(context_data_val));
                    break;
                }
                context_data_position++;
            }
            return context_data.join("");
        },
        decompress: function(compressed) {
            return null == compressed ? "" : "" == compressed ? null : LZString._decompress(compressed.length, 32768, function(index) {
                return compressed.charCodeAt(index);
            });
        },
        _decompress: function(length, resetValue, getNextValue) {
            var i, w, bits, resb, maxpower, power, c, dictionary = [], enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], data = {
                val: getNextValue(0),
                position: resetValue,
                index: 1
            };
            for(i = 0; i < 3; i += 1)dictionary[i] = i;
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            for(; power != maxpower;){
                resb = data.val & data.position;
                data.position >>= 1;
                if (0 == data.position) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch(bits){
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    for(; power != maxpower;){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (0 == data.position) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    for(; power != maxpower;){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (0 == data.position) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 2:
                    return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            for(;;){
                if (data.index > length) return "";
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                for(; power != maxpower;){
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (0 == data.position) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                switch(c = bits){
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        for(; power != maxpower;){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (0 == data.position) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        for(; power != maxpower;){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (0 == data.position) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join("");
                }
                if (0 == enlargeIn) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                if (dictionary[c]) entry = dictionary[c];
                else {
                    if (c !== dictSize) return null;
                    entry = w + w.charAt(0);
                }
                result.push(entry);
                dictionary[dictSize++] = w + entry.charAt(0);
                w = entry;
                if (0 == --enlargeIn) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
            }
        }
    };
    return LZString;
}(), null != module && (module.exports = LZString);
var module, LZString;
class OptionsSync {
    constructor({ defaults: defaults = {} , storageName: storageName = "options" , migrations: migrations = [] , logging: logging = true , storageType: storageType = "sync"  } = {}){
        Object.defineProperty(this, "storageName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "defaults", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_form", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_migrations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.storageName = storageName;
        this.defaults = defaults;
        this.storageType = storageType;
        this._handleFormInput = (delay = 300, atBegin = this._handleFormInput.bind(this), void 0 === callback ? throttle(delay, atBegin, false) : throttle(delay, callback, false !== atBegin));
        var delay, atBegin, callback;
        this._handleStorageChangeOnForm = this._handleStorageChangeOnForm.bind(this);
        logging || (this._log = ()=>{});
        this._migrations = this._runMigrations(migrations);
    }
    get storage() {
        return chrome.storage[this.storageType];
    }
    async getAll() {
        await this._migrations;
        return this._getAll();
    }
    async setAll(newOptions) {
        await this._migrations;
        return this._setAll(newOptions);
    }
    async set(newOptions) {
        return this.setAll({
            ...await this.getAll(),
            ...newOptions
        });
    }
    async syncForm(form) {
        this._form = form instanceof HTMLFormElement ? form : document.querySelector(form);
        this._form.addEventListener("input", this._handleFormInput);
        this._form.addEventListener("submit", this._handleFormSubmit);
        chrome.storage.onChanged.addListener(this._handleStorageChangeOnForm);
        this._updateForm(this._form, await this.getAll());
    }
    async stopSyncForm() {
        if (this._form) {
            this._form.removeEventListener("input", this._handleFormInput);
            this._form.removeEventListener("submit", this._handleFormSubmit);
            chrome.storage.onChanged.removeListener(this._handleStorageChangeOnForm);
            delete this._form;
        }
    }
    _log(method, ...args) {
        console[method](...args);
    }
    async _getAll() {
        return new Promise((resolve, reject)=>{
            this.storage.get(this.storageName, (result)=>{
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve(this._decode(result[this.storageName]));
            });
        });
    }
    async _setAll(newOptions) {
        this._log("log", "Saving options", newOptions);
        return new Promise((resolve, reject)=>{
            this.storage.set({
                [this.storageName]: this._encode(newOptions)
            }, ()=>{
                chrome.runtime.lastError ? reject(chrome.runtime.lastError) : resolve();
            });
        });
    }
    _encode(options) {
        const thinnedOptions = {
            ...options
        };
        for (const [key, value] of Object.entries(thinnedOptions))this.defaults[key] === value && delete thinnedOptions[key];
        this._log("log", "Without the default values", thinnedOptions);
        return lzString.exports.compressToEncodedURIComponent(JSON.stringify(thinnedOptions));
    }
    _decode(options) {
        let decompressed = options;
        "string" == typeof options && (decompressed = JSON.parse(lzString.exports.decompressFromEncodedURIComponent(options)));
        return {
            ...this.defaults,
            ...decompressed
        };
    }
    async _runMigrations(migrations) {
        if (0 === migrations.length || !(0, _webextDetectPage.isBackground)() || !await async function() {
            return new Promise((resolve)=>{
                const callback = (installType)=>{
                    if ("development" !== installType) {
                        chrome.runtime.onInstalled.addListener(()=>{
                            resolve(true);
                        });
                        setTimeout(resolve, 500, false);
                    } else resolve(true);
                };
                chrome.management?.getSelf ? chrome.management.getSelf(({ installType: installType  })=>{
                    callback(installType);
                }) : callback("unknown");
            });
        }()) return;
        const options = await this._getAll();
        const initial = JSON.stringify(options);
        this._log("log", "Found these stored options", {
            ...options
        });
        this._log("info", "Will run", migrations.length, 1 === migrations.length ? "migration" : " migrations");
        for (const migrate of migrations)migrate(options, this.defaults);
        initial !== JSON.stringify(options) && await this._setAll(options);
    }
    async _handleFormInput({ target: target  }) {
        const field = target;
        if (field.name) {
            await this.set(this._parseForm(field.form));
            field.form.dispatchEvent(new CustomEvent("options-sync:form-synced", {
                bubbles: true
            }));
        }
    }
    _handleFormSubmit(event) {
        event.preventDefault();
    }
    _updateForm(form, options) {
        const currentFormState = this._parseForm(form);
        for (const [key, value] of Object.entries(options))currentFormState[key] === value && delete options[key];
        const include = Object.keys(options);
        include.length > 0 && deserialize(form, options, {
            include: include
        });
    }
    _parseForm(form) {
        const include = [];
        for (const field of form.querySelectorAll("[name]"))field.validity.valid && !field.disabled && include.push(field.name.replace(/\[.*]/, ""));
        return serialize(form, {
            include: include
        });
    }
    _handleStorageChangeOnForm(changes, areaName) {
        areaName !== this.storageType || !changes[this.storageName] || document.hasFocus() && this._form.contains(document.activeElement) || this._updateForm(this._form, this._decode(changes[this.storageName].newValue));
    }
}
Object.defineProperty(OptionsSync, "migrations", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: {
        removeUnused (options, defaults) {
            for (const key of Object.keys(options))key in defaults || delete options[key];
        }
    }
});

},{"webext-detect-page":"gkIGC","@parcel/transformer-js/src/esmodule-helpers.js":"8ISrk"}],"gkIGC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "disableWebextDetectPageCache", ()=>disableWebextDetectPageCache);
parcelHelpers.export(exports, "isWebPage", ()=>isWebPage);
parcelHelpers.export(exports, "isExtensionContext", ()=>isExtensionContext);
parcelHelpers.export(exports, "isContentScript", ()=>isContentScript);
parcelHelpers.export(exports, "isBackground", ()=>isBackground);
parcelHelpers.export(exports, "isBackgroundPage", ()=>isBackgroundPage);
parcelHelpers.export(exports, "isBackgroundWorker", ()=>isBackgroundWorker);
parcelHelpers.export(exports, "isOptionsPage", ()=>isOptionsPage);
parcelHelpers.export(exports, "isDevToolsPage", ()=>isDevToolsPage);
parcelHelpers.export(exports, "isFirefox", ()=>isFirefox);
parcelHelpers.export(exports, "isChrome", ()=>isChrome);
parcelHelpers.export(exports, "isSafari", ()=>isSafari);
parcelHelpers.export(exports, "contextNames", ()=>contextNames);
parcelHelpers.export(exports, "getContextName", ()=>getContextName);
let cache = true;
function disableWebextDetectPageCache() {
    cache = false;
}
function isCurrentPathname(path) {
    if (!path) return false;
    try {
        const { pathname  } = new URL(path, location.origin);
        return pathname === location.pathname;
    } catch  {
        return false;
    }
}
function getManifest(_version) {
    return globalThis.chrome?.runtime?.getManifest?.();
}
function once(function_) {
    let result;
    return ()=>{
        if (!cache || typeof result === "undefined") result = function_();
        return result;
    };
}
const isWebPage = once(()=>globalThis.location?.protocol.startsWith("http"));
const isExtensionContext = once(()=>typeof globalThis.chrome?.extension === "object");
const isContentScript = once(()=>isExtensionContext() && isWebPage());
const isBackground = ()=>isBackgroundPage() || isBackgroundWorker();
const isBackgroundPage = once(()=>{
    const manifest = getManifest(2);
    if (manifest && isCurrentPathname(manifest.background_page || manifest.background?.page)) return true;
    return Boolean(manifest?.background?.scripts && isCurrentPathname("/_generated_background_page.html"));
});
const isBackgroundWorker = once(()=>isCurrentPathname(getManifest(3)?.background?.service_worker));
const isOptionsPage = once(()=>{
    if (!isExtensionContext() || !chrome.runtime.getManifest) return false;
    const { options_ui: optionsUi  } = chrome.runtime.getManifest();
    if (typeof optionsUi?.page !== "string") return false;
    const url = new URL(optionsUi.page, location.origin);
    return url.pathname === location.pathname;
});
const isDevToolsPage = once(()=>{
    if (!isExtensionContext() || !chrome.devtools) return false;
    const { devtools_page: devtoolsPage  } = chrome.runtime.getManifest();
    if (typeof devtoolsPage !== "string") return false;
    const url = new URL(devtoolsPage, location.origin);
    return url.pathname === location.pathname;
});
const isFirefox = ()=>globalThis.navigator?.userAgent.includes("Firefox");
const isChrome = ()=>globalThis.navigator?.userAgent.includes("Chrome");
const isSafari = ()=>!isChrome() && globalThis.navigator?.userAgent.includes("Safari");
const contextNames = {
    contentScript: isContentScript,
    background: isBackground,
    options: isOptionsPage,
    devToolsPage: isDevToolsPage,
    extension: isExtensionContext,
    web: isWebPage
};
function getContextName() {
    for (const [name, test] of Object.entries(contextNames)){
        if (test()) return name;
    }
    return "unknown";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"8ISrk"}],"8ISrk":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2BImZ","3dn4I"], "3dn4I", "parcelRequire94c2")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3pDLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQ3ZFLE9BQU87UUFHVCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLFdBQVk7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQyxDQUFDO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS02MmUwNDYxMWMwYjJmNWE2LmpzIiwic3JjL3NjcmlwdHMvY29udGVudC50cyIsInNyYy9saWIvb3B0aW9ucy1zdG9yYWdlLnRzIiwibm9kZV9tb2R1bGVzL3dlYmV4dC1vcHRpb25zLXN5bmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvd2ViZXh0LWRldGVjdC1wYWdlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEhNUl9IT1NUID0gbnVsbDt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiN2NkOGY5NTA3YTJlZWZlNlwiO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiZWVlZmRmZWE5NzlkZDhmN1wiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIGNocm9tZSwgYnJvd3NlciwgZ2xvYmFsVGhpcywgX19wYXJjZWxfX2ltcG9ydF9fLCBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmludGVyZmFjZSBFeHRlbnNpb25Db250ZXh0IHtcbiAgcnVudGltZToge3xcbiAgICByZWxvYWQoKTogdm9pZCxcbiAgICBnZXRVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0TWFuaWZlc3QoKToge21hbmlmZXN0X3ZlcnNpb246IG51bWJlciwgLi4ufTtcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5cbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGEsXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyBXZWIgZXh0ZW5zaW9uIGNvbnRleHRcblxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogYnJvd3NlciA6IGNocm9tZTsgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBzb3VyY2VVUkwgaW4gZXJyb3Igc3RhY2tzLlxuICAvLyBldmFsIG1heSBhbHNvIGJlIGRpc2FibGVkIHZpYSBDU1AsIHNvIGRvIGEgcXVpY2sgY2hlY2suXG5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudFxuICAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqL1xuICApIHtcbiAgICBjaGVja2VkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFjY2VwdGVkQXNzZXRzID0ge31cbiAgICAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovXG4gICAgO1xuICAgIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gICAgdmFyIGRhdGFcbiAgICAvKjogSE1STWVzc2FnZSAqL1xuICAgID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHMuZmlsdGVyKGFzc2V0ID0+IGFzc2V0LmVudkhhc2ggPT09IEhNUl9FTlZfSEFTSCk7IC8vIEhhbmRsZSBITVIgVXBkYXRlXG5cbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgICBjb25zb2xlLmNsZWFyKCk7IC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGZ1bGxSZWxvYWQoKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgfTtcblxuICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcblxuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuXG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIvX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAoJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKVxuLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL1xue1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG5cbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcblxuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG5cbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcblxuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIC8vICRGbG93Rml4TWVcbiAgbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7IC8vICRGbG93Rml4TWVcblxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxuXG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWZcbiAgICAgIC8qOiBzdHJpbmcgKi9cbiAgICAgID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcblxuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAoX2RvY3VtZW50JGhlYWQgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcblxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaG1yQXBwbHlVcGRhdGVzKGFzc2V0cykge1xuICBnbG9iYWwucGFyY2VsSG90VXBkYXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IHNjcmlwdHNUb1JlbW92ZTtcblxuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuXG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gYnVnZml4IGZvciBDaHJvbWl1bVxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyNTU0MTIjYzEyXG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsIGluc3RhbmNlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzc2V0LnVybCA9IGV4dEN0eC5ydW50aW1lLmdldFVSTCgnL19fcGFyY2VsX2htcl9wcm94eV9fP3VybD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGhtckRvd25sb2FkKGFzc2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcblxuICAgIGlmIChzY3JpcHRzVG9SZW1vdmUpIHtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQyO1xuXG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICBsZXQgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuXG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICAgIC8vIEdsb2JhbCBldmFsLiBXZSB3b3VsZCB1c2UgYG5ldyBGdW5jdGlvbmAgaGVyZSBidXQgYnJvd3NlclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBzb3VyY2UgbWFwcyBpcyBiZXR0ZXIgd2l0aCBldmFsLlxuICAgICAgICAoMCwgZXZhbCkoYXNzZXQub3V0cHV0KTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICBsZXQgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGRlcCBpbiBkZXBzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuXG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfSAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cblxuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdOyAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuXG4gICAgb3JwaGFucy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cblxuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGxldCB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIGxldCBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG5cbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcGFyZW50cy5wdXNoKC4uLnApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhY2NlcHRlZDtcbn1cblxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuLCBkZXBzQnlCdW5kbGVcbi8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cblxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcblxuICBpZiAoIWNhY2hlZCB8fCBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRSdW4oYnVuZGxlXG4vKjogUGFyY2VsUmVxdWlyZSAqL1xuLCBpZFxuLyo6IHN0cmluZyAqL1xuKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YSA9IHt9O1xuXG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhO1xuICB9XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZShpZCk7XG4gIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIHZhciBhc3NldHNUb0Fsc29BY2NlcHQgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQgJiYgYXNzZXRzVG9BY2NlcHQubGVuZ3RoKSB7XG4gICAgICAgIC8vICRGbG93Rml4TWVbbWV0aG9kLXVuYmluZGluZ11cbiAgICAgICAgYXNzZXRzVG9BY2NlcHQucHVzaC5hcHBseShhc3NldHNUb0FjY2VwdCwgYXNzZXRzVG9BbHNvQWNjZXB0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFjY2VwdGVkQXNzZXRzW2lkXSA9IHRydWU7XG59IiwiaW1wb3J0IG9wdGlvbnNTdG9yYWdlIGZyb20gJy4uL2xpYi9vcHRpb25zLXN0b3JhZ2UnXG5cbmNvbnNvbGUubG9nKCfwn5KIIENvbnRlbnQgc2NyaXB0IGxvYWRlZCBmb3InLCBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpLm5hbWUpXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBvcHRpb25zID0gYXdhaXQgb3B0aW9uc1N0b3JhZ2UuZ2V0QWxsKClcbiAgY29uc3QgY29sb3IgPVxuICAgICdyZ2IoJyArXG4gICAgb3B0aW9ucy5jb2xvclJlZCArXG4gICAgJywgJyArXG4gICAgb3B0aW9ucy5jb2xvckdyZWVuICtcbiAgICAnLCcgK1xuICAgIG9wdGlvbnMuY29sb3JCbHVlICtcbiAgICAnKSdcbiAgY29uc3QgdGV4dCA9IG9wdGlvbnMudGV4dFxuICBjb25zdCBub3RpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBub3RpY2UuaW5uZXJIVE1MID0gdGV4dFxuICBkb2N1bWVudC5ib2R5LnByZXBlbmQobm90aWNlKVxuICBub3RpY2UuaWQgPSAndGV4dC1ub3RpY2UnXG4gIG5vdGljZS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkICcgKyBjb2xvclxuICBub3RpY2Uuc3R5bGUuY29sb3IgPSBjb2xvclxufVxuXG5pbml0KClcbiIsImltcG9ydCBPcHRpb25zU3luYyBmcm9tICd3ZWJleHQtb3B0aW9ucy1zeW5jJztcblxuZXhwb3J0IGRlZmF1bHQgbmV3IE9wdGlvbnNTeW5jKHtcblx0ZGVmYXVsdHM6IHtcblx0XHRjb2xvclJlZDogMjQ0LFxuXHRcdGNvbG9yR3JlZW46IDY3LFxuXHRcdGNvbG9yQmx1ZTogNTQsXG5cdFx0dGV4dDogJ1NldCBhIHRleHQhJyxcblx0fSxcblx0bWlncmF0aW9uczogW1xuXHRcdE9wdGlvbnNTeW5jLm1pZ3JhdGlvbnMucmVtb3ZlVW51c2VkLFxuXHRdLFxuXHRsb2dnaW5nOiB0cnVlLFxufSk7XG4iLCJpbXBvcnQgeyBpc0JhY2tncm91bmQgfSBmcm9tIFwid2ViZXh0LWRldGVjdC1wYWdlXCI7XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5LCBub1RyYWlsaW5nLCBjYWxsYmFjaywgZGVib3VuY2VNb2RlKSB7XG4gICAgdmFyIHRpbWVvdXRJRDtcbiAgICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgdmFyIGxhc3RFeGVjID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhckV4aXN0aW5nVGltZW91dCgpIHtcbiAgICAgICAgdGltZW91dElEICYmIGNsZWFyVGltZW91dCh0aW1lb3V0SUQpO1xuICAgIH1cbiAgICBpZiAoXCJib29sZWFuXCIgIT0gdHlwZW9mIG5vVHJhaWxpbmcpIHtcbiAgICAgICAgZGVib3VuY2VNb2RlID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrID0gbm9UcmFpbGluZztcbiAgICAgICAgbm9UcmFpbGluZyA9IHZvaWQgMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50c18gPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSBhcmd1bWVudHNfW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIGxhc3RFeGVjO1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgZGVib3VuY2VNb2RlICYmICF0aW1lb3V0SUQgJiYgZXhlYygpO1xuICAgICAgICAgICAgY2xlYXJFeGlzdGluZ1RpbWVvdXQoKTtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZGVib3VuY2VNb2RlICYmIGVsYXBzZWQgPiBkZWxheSA/IGV4ZWMoKSA6IHRydWUgIT09IG5vVHJhaWxpbmcgJiYgKHRpbWVvdXRJRCA9IHNldFRpbWVvdXQoZGVib3VuY2VNb2RlID8gY2xlYXIgOiBleGVjLCB2b2lkIDAgPT09IGRlYm91bmNlTW9kZSA/IGRlbGF5IC0gZWxhcHNlZCA6IGRlbGF5KSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgICAgIGxhc3RFeGVjID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50c18pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICAgICAgdGltZW91dElEID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdyYXBwZXIuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyRXhpc3RpbmdUaW1lb3V0KCk7XG4gICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuY2xhc3MgVHlwZVJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsID0ge30pIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkVHlwZXMgPSBpbml0aWFsO1xuICAgIH1cbiAgICBnZXQodHlwZSkge1xuICAgICAgICByZXR1cm4gdm9pZCAwICE9PSB0aGlzLnJlZ2lzdGVyZWRUeXBlc1t0eXBlXSA/IHRoaXMucmVnaXN0ZXJlZFR5cGVzW3R5cGVdIDogdGhpcy5yZWdpc3RlcmVkVHlwZXMuZGVmYXVsdDtcbiAgICB9XG4gICAgcmVnaXN0ZXIodHlwZSwgaXRlbSkge1xuICAgICAgICB2b2lkIDAgPT09IHRoaXMucmVnaXN0ZXJlZFR5cGVzW3R5cGVdICYmICh0aGlzLnJlZ2lzdGVyZWRUeXBlc1t0eXBlXSA9IGl0ZW0pO1xuICAgIH1cbiAgICByZWdpc3RlckRlZmF1bHQoaXRlbSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwiZGVmYXVsdFwiLCBpdGVtKTtcbiAgICB9XG59XG5cbmNsYXNzIEtleUV4dHJhY3RvcnMgZXh0ZW5kcyBUeXBlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEZWZhdWx0KChlbCA9PiBlbC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwiXCIpKTtcbiAgICB9XG59XG5cbmNsYXNzIElucHV0UmVhZGVycyBleHRlbmRzIFR5cGVSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRlZmF1bHQoKGVsID0+IGVsLnZhbHVlKSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXCJjaGVja2JveFwiLCAoZWwgPT4gbnVsbCAhPT0gZWwuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPyBlbC5jaGVja2VkID8gZWwuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgOiBudWxsIDogZWwuY2hlY2tlZCkpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwic2VsZWN0XCIsIChlbCA9PiBmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUsIG9wdGlvbiwgaTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gZWxlbS5vcHRpb25zO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4O1xuICAgICAgICAgICAgdmFyIG9uZSA9IFwic2VsZWN0LW9uZVwiID09PSBlbGVtLnR5cGU7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gb25lID8gbnVsbCA6IFtdO1xuICAgICAgICAgICAgdmFyIG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgaSA9IGluZGV4IDwgMCA/IG1heCA6IG9uZSA/IGluZGV4IDogMDtcbiAgICAgICAgICAgIGZvciAoO2kgPCBtYXg7IGkrKykgaWYgKCgob3B0aW9uID0gb3B0aW9uc1tpXSkuc2VsZWN0ZWQgfHwgaSA9PT0gaW5kZXgpICYmICFvcHRpb24uZGlzYWJsZWQgJiYgIShvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCAmJiBcIm9wdGdyb3VwXCIgPT09IG9wdGlvbi5wYXJlbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25lKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfShlbCkpKTtcbiAgICB9XG59XG5cbmNsYXNzIEtleUFzc2lnbm1lbnRWYWxpZGF0b3JzIGV4dGVuZHMgVHlwZVJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRGVmYXVsdCgoKCkgPT4gdHJ1ZSkpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKFwicmFkaW9cIiwgKGVsID0+IGVsLmNoZWNrZWQpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGtleVNwbGl0dGVyKGtleSkge1xuICAgIGxldCBtYXRjaGVzID0ga2V5Lm1hdGNoKC9bXltcXF1dKy9nKTtcbiAgICBsZXQgbGFzdEtleTtcbiAgICBpZiAoa2V5Lmxlbmd0aCA+IDEgJiYga2V5LmluZGV4T2YoXCJbXVwiKSA9PT0ga2V5Lmxlbmd0aCAtIDIpIHtcbiAgICAgICAgbGFzdEtleSA9IG1hdGNoZXMucG9wKCk7XG4gICAgICAgIG1hdGNoZXMucHVzaChbIGxhc3RLZXkgXSk7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50VHlwZShlbCkge1xuICAgIGxldCB0eXBlQXR0cjtcbiAgICBsZXQgdGFnTmFtZSA9IGVsLnRhZ05hbWU7XG4gICAgbGV0IHR5cGUgPSB0YWdOYW1lO1xuICAgIGlmIChcImlucHV0XCIgPT09IHRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICB0eXBlQXR0ciA9IGVsLmdldEF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIHR5cGUgPSB0eXBlQXR0ciB8fCBcInRleHRcIjtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGUudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRFbGVtZW50cyhlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCxzZWxlY3QsdGV4dGFyZWFcIiksIChlbCA9PiB7XG4gICAgICAgIGlmIChcImlucHV0XCIgPT09IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAmJiAoXCJzdWJtaXRcIiA9PT0gZWwudHlwZSB8fCBcInJlc2V0XCIgPT09IGVsLnR5cGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBteVR5cGUgPSBnZXRFbGVtZW50VHlwZShlbCk7XG4gICAgICAgIGxldCBpZGVudGlmaWVyID0gb3B0aW9ucy5rZXlFeHRyYWN0b3JzLmdldChteVR5cGUpKGVsKTtcbiAgICAgICAgbGV0IGZvdW5kSW5JbmNsdWRlID0gLTEgIT09IChvcHRpb25zLmluY2x1ZGUgfHwgW10pLmluZGV4T2YoaWRlbnRpZmllcik7XG4gICAgICAgIGxldCBmb3VuZEluRXhjbHVkZSA9IC0xICE9PSAob3B0aW9ucy5leGNsdWRlIHx8IFtdKS5pbmRleE9mKGlkZW50aWZpZXIpO1xuICAgICAgICBsZXQgZm91bmRJbklnbm9yZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlamVjdCA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5pZ25vcmVkVHlwZXMpIGZvciAobGV0IHNlbGVjdG9yIG9mIG9wdGlvbnMuaWdub3JlZFR5cGVzKSBlbC5tYXRjaGVzKHNlbGVjdG9yKSAmJiAoZm91bmRJbklnbm9yZWQgPSB0cnVlKTtcbiAgICAgICAgcmVqZWN0ID0gIWZvdW5kSW5JbmNsdWRlICYmICghIW9wdGlvbnMuaW5jbHVkZSB8fCAoZm91bmRJbkV4Y2x1ZGUgfHwgZm91bmRJbklnbm9yZWQpKTtcbiAgICAgICAgcmV0dXJuICFyZWplY3Q7XG4gICAgfSkpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25LZXlWYWx1ZShvYmosIGtleWNoYWluLCB2YWx1ZSkge1xuICAgIGlmICgha2V5Y2hhaW4pIHJldHVybiBvYmo7XG4gICAgdmFyIGtleSA9IGtleWNoYWluLnNoaWZ0KCk7XG4gICAgb2JqW2tleV0gfHwgKG9ialtrZXldID0gQXJyYXkuaXNBcnJheShrZXkpID8gW10gOiB7fSk7XG4gICAgMCA9PT0ga2V5Y2hhaW4ubGVuZ3RoICYmIChBcnJheS5pc0FycmF5KG9ialtrZXldKSA/IG51bGwgIT09IHZhbHVlICYmIG9ialtrZXldLnB1c2godmFsdWUpIDogb2JqW2tleV0gPSB2YWx1ZSk7XG4gICAga2V5Y2hhaW4ubGVuZ3RoID4gMCAmJiBhc3NpZ25LZXlWYWx1ZShvYmpba2V5XSwga2V5Y2hhaW4sIHZhbHVlKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemUoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSB7fTtcbiAgICBvcHRpb25zLmtleVNwbGl0dGVyID0gb3B0aW9ucy5rZXlTcGxpdHRlciB8fCBrZXlTcGxpdHRlcjtcbiAgICBvcHRpb25zLmtleUV4dHJhY3RvcnMgPSBuZXcgS2V5RXh0cmFjdG9ycyhvcHRpb25zLmtleUV4dHJhY3RvcnMgfHwge30pO1xuICAgIG9wdGlvbnMuaW5wdXRSZWFkZXJzID0gbmV3IElucHV0UmVhZGVycyhvcHRpb25zLmlucHV0UmVhZGVycyB8fCB7fSk7XG4gICAgb3B0aW9ucy5rZXlBc3NpZ25tZW50VmFsaWRhdG9ycyA9IG5ldyBLZXlBc3NpZ25tZW50VmFsaWRhdG9ycyhvcHRpb25zLmtleUFzc2lnbm1lbnRWYWxpZGF0b3JzIHx8IHt9KTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdldElucHV0RWxlbWVudHMoZWxlbWVudCwgb3B0aW9ucyksIChlbCA9PiB7XG4gICAgICAgIGxldCB0eXBlID0gZ2V0RWxlbWVudFR5cGUoZWwpO1xuICAgICAgICBsZXQga2V5ID0gb3B0aW9ucy5rZXlFeHRyYWN0b3JzLmdldCh0eXBlKShlbCk7XG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbnMuaW5wdXRSZWFkZXJzLmdldCh0eXBlKShlbCk7XG4gICAgICAgIGlmIChvcHRpb25zLmtleUFzc2lnbm1lbnRWYWxpZGF0b3JzLmdldCh0eXBlKShlbCwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBrZXljaGFpbiA9IG9wdGlvbnMua2V5U3BsaXR0ZXIoa2V5KTtcbiAgICAgICAgICAgIGRhdGEgPSBhc3NpZ25LZXlWYWx1ZShkYXRhLCBrZXljaGFpbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiBkYXRhO1xufVxuXG5jbGFzcyBJbnB1dFdyaXRlcnMgZXh0ZW5kcyBUeXBlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEZWZhdWx0KCgoZWwsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXCJjaGVja2JveFwiLCAoKGVsLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgbnVsbCA9PT0gdmFsdWUgPyBlbC5pbmRldGVybWluYXRlID0gdHJ1ZSA6IGVsLmNoZWNrZWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IC0xICE9PSB2YWx1ZS5pbmRleE9mKGVsLnZhbHVlKSA6IHZhbHVlO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXCJyYWRpb1wiLCAoZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICB2b2lkIDAgIT09IHZhbHVlICYmIChlbC5jaGVja2VkID0gZWwudmFsdWUgPT09IHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoXCJzZWxlY3RcIiwgc2V0U2VsZWN0VmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0VmFsdWUoZWxlbSwgdmFsdWUpIHtcbiAgICB2YXIgb3B0aW9uU2V0LCBvcHRpb247XG4gICAgdmFyIG9wdGlvbnMgPSBlbGVtLm9wdGlvbnM7XG4gICAgdmFyIHZhbHVlcyA9IGZ1bmN0aW9uKGFycikge1xuICAgICAgICB2YXIgcmV0ID0gW107XG4gICAgICAgIG51bGwgIT09IGFyciAmJiAoQXJyYXkuaXNBcnJheShhcnIpID8gcmV0LnB1c2guYXBwbHkocmV0LCBhcnIpIDogcmV0LnB1c2goYXJyKSk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSh2YWx1ZSk7XG4gICAgdmFyIGkgPSBvcHRpb25zLmxlbmd0aDtcbiAgICBmb3IgKDtpLS07ICkge1xuICAgICAgICBvcHRpb24gPSBvcHRpb25zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmluZGV4T2Yob3B0aW9uLnZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBvcHRpb25TZXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wdGlvblNldCB8fCAoZWxlbS5zZWxlY3RlZEluZGV4ID0gLTEpO1xufVxuXG5mdW5jdGlvbiBrZXlKb2luZXIocGFyZW50S2V5LCBjaGlsZEtleSkge1xuICAgIHJldHVybiBwYXJlbnRLZXkgKyBcIltcIiArIGNoaWxkS2V5ICsgXCJdXCI7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5EYXRhKGRhdGEsIHBhcmVudEtleSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGZsYXREYXRhID0ge307XG4gICAgbGV0IGtleUpvaW5lciQxID0gb3B0aW9ucy5rZXlKb2luZXIgfHwga2V5Sm9pbmVyO1xuICAgIGZvciAobGV0IGtleU5hbWUgaW4gZGF0YSkge1xuICAgICAgICBpZiAoIWRhdGEuaGFzT3duUHJvcGVydHkoa2V5TmFtZSkpIGNvbnRpbnVlO1xuICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleU5hbWVdO1xuICAgICAgICBsZXQgaGFzaCA9IHt9O1xuICAgICAgICBwYXJlbnRLZXkgJiYgKGtleU5hbWUgPSBrZXlKb2luZXIkMShwYXJlbnRLZXksIGtleU5hbWUpKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBoYXNoW2tleU5hbWUgKyBcIltdXCJdID0gdmFsdWU7XG4gICAgICAgICAgICBoYXNoW2tleU5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBcIm9iamVjdFwiID09IHR5cGVvZiB2YWx1ZSA/IGhhc2ggPSBmbGF0dGVuRGF0YSh2YWx1ZSwga2V5TmFtZSwgb3B0aW9ucykgOiBoYXNoW2tleU5hbWVdID0gdmFsdWU7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZmxhdERhdGEsIGhhc2gpO1xuICAgIH1cbiAgICByZXR1cm4gZmxhdERhdGE7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplKGZvcm0sIGRhdGEsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBmbGF0dGVuZWREYXRhID0gZmxhdHRlbkRhdGEoZGF0YSwgbnVsbCwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy5rZXlFeHRyYWN0b3JzID0gbmV3IEtleUV4dHJhY3RvcnMob3B0aW9ucy5rZXlFeHRyYWN0b3JzIHx8IHt9KTtcbiAgICBvcHRpb25zLmlucHV0V3JpdGVycyA9IG5ldyBJbnB1dFdyaXRlcnMob3B0aW9ucy5pbnB1dFdyaXRlcnMgfHwge30pO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ2V0SW5wdXRFbGVtZW50cyhmb3JtLCBvcHRpb25zKSwgKGVsID0+IHtcbiAgICAgICAgbGV0IHR5cGUgPSBnZXRFbGVtZW50VHlwZShlbCk7XG4gICAgICAgIGxldCBrZXkgPSBvcHRpb25zLmtleUV4dHJhY3RvcnMuZ2V0KHR5cGUpKGVsKTtcbiAgICAgICAgb3B0aW9ucy5pbnB1dFdyaXRlcnMuZ2V0KHR5cGUpKGVsLCBmbGF0dGVuZWREYXRhW2tleV0pO1xuICAgIH0pKTtcbn1cblxudmFyIGx6U3RyaW5nID0ge1xuICAgIGV4cG9ydHM6IHt9XG59O1xuXG5tb2R1bGUgPSBselN0cmluZywgTFpTdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZiA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gICAgdmFyIGtleVN0ckJhc2U2NCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbiAgICB2YXIga2V5U3RyVXJpU2FmZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLSRcIjtcbiAgICB2YXIgYmFzZVJldmVyc2VEaWMgPSB7fTtcbiAgICBmdW5jdGlvbiBnZXRCYXNlVmFsdWUoYWxwaGFiZXQsIGNoYXJhY3Rlcikge1xuICAgICAgICBpZiAoIWJhc2VSZXZlcnNlRGljW2FscGhhYmV0XSkge1xuICAgICAgICAgICAgYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFscGhhYmV0Lmxlbmd0aDsgaSsrKSBiYXNlUmV2ZXJzZURpY1thbHBoYWJldF1bYWxwaGFiZXQuY2hhckF0KGkpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVtjaGFyYWN0ZXJdO1xuICAgIH1cbiAgICB2YXIgTFpTdHJpbmcgPSB7XG4gICAgICAgIGNvbXByZXNzVG9CYXNlNjQ6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBpbnB1dCkgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB2YXIgcmVzID0gTFpTdHJpbmcuX2NvbXByZXNzKGlucHV0LCA2LCAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlTdHJCYXNlNjQuY2hhckF0KGEpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgc3dpdGNoIChyZXMubGVuZ3RoICUgNCkge1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcblxuICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcyArIFwiPT09XCI7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXMgKyBcIj09XCI7XG5cbiAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHJldHVybiByZXMgKyBcIj1cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVjb21wcmVzc0Zyb21CYXNlNjQ6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBpbnB1dCA/IFwiXCIgOiBcIlwiID09IGlucHV0ID8gbnVsbCA6IExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyQmFzZTY0LCBpbnB1dC5jaGFyQXQoaW5kZXgpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NUb1VURjE2OiBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gaW5wdXQgPyBcIlwiIDogTFpTdHJpbmcuX2NvbXByZXNzKGlucHV0LCAxNSwgKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhICsgMzIpO1xuICAgICAgICAgICAgfSkpICsgXCIgXCI7XG4gICAgICAgIH0sXG4gICAgICAgIGRlY29tcHJlc3NGcm9tVVRGMTY6IGZ1bmN0aW9uKGNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsID09IGNvbXByZXNzZWQgPyBcIlwiIDogXCJcIiA9PSBjb21wcmVzc2VkID8gbnVsbCA6IExaU3RyaW5nLl9kZWNvbXByZXNzKGNvbXByZXNzZWQubGVuZ3RoLCAxNjM4NCwgKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXByZXNzZWQuY2hhckNvZGVBdChpbmRleCkgLSAzMjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NUb1VpbnQ4QXJyYXk6IGZ1bmN0aW9uKHVuY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgdmFyIGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzcyh1bmNvbXByZXNzZWQpO1xuICAgICAgICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KDIgKiBjb21wcmVzc2VkLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgVG90YWxMZW4gPSBjb21wcmVzc2VkLmxlbmd0aDsgaSA8IFRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudF92YWx1ZSA9IGNvbXByZXNzZWQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICBidWZbMiAqIGldID0gY3VycmVudF92YWx1ZSA+Pj4gODtcbiAgICAgICAgICAgICAgICBidWZbMiAqIGkgKyAxXSA9IGN1cnJlbnRfdmFsdWUgJSAyNTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9LFxuICAgICAgICBkZWNvbXByZXNzRnJvbVVpbnQ4QXJyYXk6IGZ1bmN0aW9uKGNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IGNvbXByZXNzZWQpIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKGNvbXByZXNzZWQpO1xuICAgICAgICAgICAgdmFyIGJ1ZiA9IG5ldyBBcnJheShjb21wcmVzc2VkLmxlbmd0aCAvIDIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIFRvdGFsTGVuID0gYnVmLmxlbmd0aDsgaSA8IFRvdGFsTGVuOyBpKyspIGJ1ZltpXSA9IDI1NiAqIGNvbXByZXNzZWRbMiAqIGldICsgY29tcHJlc3NlZFsyICogaSArIDFdO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgYnVmLmZvckVhY2goKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChmKGMpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKHJlc3VsdC5qb2luKFwiXCIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQ6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBpbnB1dCA/IFwiXCIgOiBMWlN0cmluZy5fY29tcHJlc3MoaW5wdXQsIDYsIChmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleVN0clVyaVNhZmUuY2hhckF0KGEpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBkZWNvbXByZXNzRnJvbUVuY29kZWRVUklDb21wb25lbnQ6IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBpbnB1dCkgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBpZiAoXCJcIiA9PSBpbnB1dCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoLyAvZywgXCIrXCIpO1xuICAgICAgICAgICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyVXJpU2FmZSwgaW5wdXQuY2hhckF0KGluZGV4KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXByZXNzOiBmdW5jdGlvbih1bmNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBMWlN0cmluZy5fY29tcHJlc3ModW5jb21wcmVzc2VkLCAxNiwgKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZihhKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgX2NvbXByZXNzOiBmdW5jdGlvbih1bmNvbXByZXNzZWQsIGJpdHNQZXJDaGFyLCBnZXRDaGFyRnJvbUludCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gdW5jb21wcmVzc2VkKSByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIHZhciBpLCB2YWx1ZSwgaWksIGNvbnRleHRfZGljdGlvbmFyeSA9IHt9LCBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZSA9IHt9LCBjb250ZXh0X2MgPSBcIlwiLCBjb250ZXh0X3djID0gXCJcIiwgY29udGV4dF93ID0gXCJcIiwgY29udGV4dF9lbmxhcmdlSW4gPSAyLCBjb250ZXh0X2RpY3RTaXplID0gMywgY29udGV4dF9udW1CaXRzID0gMiwgY29udGV4dF9kYXRhID0gW10sIGNvbnRleHRfZGF0YV92YWwgPSAwLCBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgZm9yIChpaSA9IDA7IGlpIDwgdW5jb21wcmVzc2VkLmxlbmd0aDsgaWkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfYyA9IHVuY29tcHJlc3NlZC5jaGFyQXQoaWkpO1xuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbnRleHRfZGljdGlvbmFyeSwgY29udGV4dF9jKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF9jXSA9IGNvbnRleHRfZGljdFNpemUrKztcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGVbY29udGV4dF9jXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHRfd2MgPSBjb250ZXh0X3cgKyBjb250ZXh0X2M7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb250ZXh0X2RpY3Rpb25hcnksIGNvbnRleHRfd2MpKSBjb250ZXh0X3cgPSBjb250ZXh0X3djOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZSwgY29udGV4dF93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRfdy5jaGFyQ29kZUF0KDApIDwgMjU2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPDw9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSBjb250ZXh0X2RhdGFfdmFsIDw8IDEgfCAxICYgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPj49IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSBjb250ZXh0X2RhdGFfdmFsIDw8IDEgfCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhciAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IGNvbnRleHRfZGF0YV92YWwgPDwgMSB8IDEgJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhciAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA+Pj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSAtLWNvbnRleHRfZW5sYXJnZUluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9lbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBjb250ZXh0X251bUJpdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlW2NvbnRleHRfd107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3ddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IGNvbnRleHRfZGF0YV92YWwgPDwgMSB8IDEgJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA+Pj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PSAtLWNvbnRleHRfZW5sYXJnZUluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93Y10gPSBjb250ZXh0X2RpY3RTaXplKys7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRfdyA9IFN0cmluZyhjb250ZXh0X2MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChcIlwiICE9PSBjb250ZXh0X3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlLCBjb250ZXh0X3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X3cuY2hhckNvZGVBdCgwKSA8IDI1Nikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA8PD0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IGNvbnRleHRfZGF0YV92YWwgPDwgMSB8IDEgJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA+Pj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250ZXh0X251bUJpdHM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSBjb250ZXh0X2RhdGFfdmFsIDw8IDEgfCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfdy5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gY29udGV4dF9kYXRhX3ZhbCA8PCAxIHwgMSAmIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID4+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IC0tY29udGV4dF9lbmxhcmdlSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZVtjb250ZXh0X3ddO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF9kaWN0aW9uYXJ5W2NvbnRleHRfd107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb250ZXh0X251bUJpdHM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IGNvbnRleHRfZGF0YV92YWwgPDwgMSB8IDEgJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA+Pj0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoMCA9PSAtLWNvbnRleHRfZW5sYXJnZUluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dF9udW1CaXRzKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSAyO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IGNvbnRleHRfZGF0YV92YWwgPDwgMSB8IDEgJiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICB2YWx1ZSA+Pj0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsIDw8PSAxO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHRfZGF0YS5qb2luKFwiXCIpO1xuICAgICAgICB9LFxuICAgICAgICBkZWNvbXByZXNzOiBmdW5jdGlvbihjb21wcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBjb21wcmVzc2VkID8gXCJcIiA6IFwiXCIgPT0gY29tcHJlc3NlZCA/IG51bGwgOiBMWlN0cmluZy5fZGVjb21wcmVzcyhjb21wcmVzc2VkLmxlbmd0aCwgMzI3NjgsIChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wcmVzc2VkLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBfZGVjb21wcmVzczogZnVuY3Rpb24obGVuZ3RoLCByZXNldFZhbHVlLCBnZXROZXh0VmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpLCB3LCBiaXRzLCByZXNiLCBtYXhwb3dlciwgcG93ZXIsIGMsIGRpY3Rpb25hcnkgPSBbXSwgZW5sYXJnZUluID0gNCwgZGljdFNpemUgPSA0LCBudW1CaXRzID0gMywgZW50cnkgPSBcIlwiLCByZXN1bHQgPSBbXSwgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICB2YWw6IGdldE5leHRWYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVzZXRWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbmRleDogMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIGRpY3Rpb25hcnlbaV0gPSBpO1xuICAgICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsIDIpO1xuICAgICAgICAgICAgcG93ZXIgPSAxO1xuICAgICAgICAgICAgZm9yICg7cG93ZXIgIT0gbWF4cG93ZXI7ICkge1xuICAgICAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PSBkYXRhLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnZhbCA9IGdldE5leHRWYWx1ZShkYXRhLmluZGV4KyspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiaXRzIHw9IChyZXNiID4gMCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChiaXRzKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsIDgpO1xuICAgICAgICAgICAgICAgIHBvd2VyID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKDtwb3dlciAhPSBtYXhwb3dlcjsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPj49IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IGRhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiaXRzIHw9IChyZXNiID4gMCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgICAgICAgICBwb3dlciA8PD0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYyA9IGYoYml0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwgMTYpO1xuICAgICAgICAgICAgICAgIHBvd2VyID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKDtwb3dlciAhPSBtYXhwb3dlcjsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPj49IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IGRhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiaXRzIHw9IChyZXNiID4gMCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgICAgICAgICBwb3dlciA8PD0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYyA9IGYoYml0cyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGljdGlvbmFyeVszXSA9IGM7XG4gICAgICAgICAgICB3ID0gYztcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGMpO1xuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmluZGV4ID4gbGVuZ3RoKSByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsIG51bUJpdHMpO1xuICAgICAgICAgICAgICAgIHBvd2VyID0gMTtcbiAgICAgICAgICAgICAgICBmb3IgKDtwb3dlciAhPSBtYXhwb3dlcjsgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPj49IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICgwID09IGRhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBiaXRzIHw9IChyZXNiID4gMCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgICAgICAgICBwb3dlciA8PD0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjID0gYml0cykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLCA4KTtcbiAgICAgICAgICAgICAgICAgICAgcG93ZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDtwb3dlciAhPSBtYXhwb3dlcjsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgwID09IGRhdGEucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnZhbCA9IGdldE5leHRWYWx1ZShkYXRhLmluZGV4KyspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYml0cyB8PSAocmVzYiA+IDAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgICAgICAgICAgICBjID0gZGljdFNpemUgLSAxO1xuICAgICAgICAgICAgICAgICAgICBlbmxhcmdlSW4tLTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBwb3dlciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoO3Bvd2VyICE9IG1heHBvd2VyOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDAgPT0gZGF0YS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiaXRzIHw9IChyZXNiID4gMCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGljdGlvbmFyeVtkaWN0U2l6ZSsrXSA9IGYoYml0cyk7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBkaWN0U2l6ZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgwID09IGVubGFyZ2VJbikge1xuICAgICAgICAgICAgICAgICAgICBlbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBudW1CaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtQml0cysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGljdGlvbmFyeVtjXSkgZW50cnkgPSBkaWN0aW9uYXJ5W2NdOyBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgIT09IGRpY3RTaXplKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkgPSB3ICsgdy5jaGFyQXQoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVudHJ5KTtcbiAgICAgICAgICAgICAgICBkaWN0aW9uYXJ5W2RpY3RTaXplKytdID0gdyArIGVudHJ5LmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICB3ID0gZW50cnk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT0gLS1lbmxhcmdlSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZW5sYXJnZUluID0gTWF0aC5wb3coMiwgbnVtQml0cyk7XG4gICAgICAgICAgICAgICAgICAgIG51bUJpdHMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMWlN0cmluZztcbn0oKSwgbnVsbCAhPSBtb2R1bGUgJiYgKG1vZHVsZS5leHBvcnRzID0gTFpTdHJpbmcpO1xuXG52YXIgbW9kdWxlLCBMWlN0cmluZztcblxuY2xhc3MgT3B0aW9uc1N5bmMge1xuICAgIGNvbnN0cnVjdG9yKHtkZWZhdWx0czogZGVmYXVsdHMgPSB7fSwgc3RvcmFnZU5hbWU6IHN0b3JhZ2VOYW1lID0gXCJvcHRpb25zXCIsIG1pZ3JhdGlvbnM6IG1pZ3JhdGlvbnMgPSBbXSwgbG9nZ2luZzogbG9nZ2luZyA9IHRydWUsIHN0b3JhZ2VUeXBlOiBzdG9yYWdlVHlwZSA9IFwic3luY1wifSA9IHt9KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0b3JhZ2VOYW1lXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0b3JhZ2VUeXBlXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRlZmF1bHRzXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9mb3JtXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9taWdyYXRpb25zXCIsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiB2b2lkIDBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RvcmFnZU5hbWUgPSBzdG9yYWdlTmFtZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLnN0b3JhZ2VUeXBlID0gc3RvcmFnZVR5cGU7XG4gICAgICAgIHRoaXMuX2hhbmRsZUZvcm1JbnB1dCA9IChkZWxheSA9IDMwMCwgYXRCZWdpbiA9IHRoaXMuX2hhbmRsZUZvcm1JbnB1dC5iaW5kKHRoaXMpLCBcbiAgICAgICAgdm9pZCAwID09PSBjYWxsYmFjayA/IHRocm90dGxlKGRlbGF5LCBhdEJlZ2luLCBmYWxzZSkgOiB0aHJvdHRsZShkZWxheSwgY2FsbGJhY2ssIGZhbHNlICE9PSBhdEJlZ2luKSk7XG4gICAgICAgIHZhciBkZWxheSwgYXRCZWdpbiwgY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2hhbmRsZVN0b3JhZ2VDaGFuZ2VPbkZvcm0gPSB0aGlzLl9oYW5kbGVTdG9yYWdlQ2hhbmdlT25Gb3JtLmJpbmQodGhpcyk7XG4gICAgICAgIGxvZ2dpbmcgfHwgKHRoaXMuX2xvZyA9ICgpID0+IHt9KTtcbiAgICAgICAgdGhpcy5fbWlncmF0aW9ucyA9IHRoaXMuX3J1bk1pZ3JhdGlvbnMobWlncmF0aW9ucyk7XG4gICAgfVxuICAgIGdldCBzdG9yYWdlKCkge1xuICAgICAgICByZXR1cm4gY2hyb21lLnN0b3JhZ2VbdGhpcy5zdG9yYWdlVHlwZV07XG4gICAgfVxuICAgIGFzeW5jIGdldEFsbCgpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fbWlncmF0aW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEFsbCgpO1xuICAgIH1cbiAgICBhc3luYyBzZXRBbGwobmV3T3B0aW9ucykge1xuICAgICAgICBhd2FpdCB0aGlzLl9taWdyYXRpb25zO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0QWxsKG5ld09wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBzZXQobmV3T3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRBbGwoe1xuICAgICAgICAgICAgLi4uYXdhaXQgdGhpcy5nZXRBbGwoKSxcbiAgICAgICAgICAgIC4uLm5ld09wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHN5bmNGb3JtKGZvcm0pIHtcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQgPyBmb3JtIDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtKTtcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdGhpcy5faGFuZGxlRm9ybUlucHV0KTtcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIodGhpcy5faGFuZGxlU3RvcmFnZUNoYW5nZU9uRm9ybSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZvcm0odGhpcy5fZm9ybSwgYXdhaXQgdGhpcy5nZXRBbGwoKSk7XG4gICAgfVxuICAgIGFzeW5jIHN0b3BTeW5jRm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Zvcm0pIHtcbiAgICAgICAgICAgIHRoaXMuX2Zvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuX2hhbmRsZUZvcm1JbnB1dCk7XG4gICAgICAgICAgICB0aGlzLl9mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCk7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5vbkNoYW5nZWQucmVtb3ZlTGlzdGVuZXIodGhpcy5faGFuZGxlU3RvcmFnZUNoYW5nZU9uRm9ybSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZm9ybTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfbG9nKG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICBjb25zb2xlW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfVxuICAgIGFzeW5jIF9nZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh0aGlzLnN0b3JhZ2VOYW1lLCAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IgPyByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSA6IHJlc29sdmUodGhpcy5fZGVjb2RlKHJlc3VsdFt0aGlzLnN0b3JhZ2VOYW1lXSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGFzeW5jIF9zZXRBbGwobmV3T3B0aW9ucykge1xuICAgICAgICB0aGlzLl9sb2coXCJsb2dcIiwgXCJTYXZpbmcgb3B0aW9uc1wiLCBuZXdPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICBbdGhpcy5zdG9yYWdlTmFtZV06IHRoaXMuX2VuY29kZShuZXdPcHRpb25zKVxuICAgICAgICAgICAgfSwgKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IgPyByZWplY3QoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSA6IHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBfZW5jb2RlKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdGhpbm5lZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH07XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaW5uZWRPcHRpb25zKSkgdGhpcy5kZWZhdWx0c1trZXldID09PSB2YWx1ZSAmJiBkZWxldGUgdGhpbm5lZE9wdGlvbnNba2V5XTtcbiAgICAgICAgdGhpcy5fbG9nKFwibG9nXCIsIFwiV2l0aG91dCB0aGUgZGVmYXVsdCB2YWx1ZXNcIiwgdGhpbm5lZE9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gbHpTdHJpbmcuZXhwb3J0cy5jb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlubmVkT3B0aW9ucykpO1xuICAgIH1cbiAgICBfZGVjb2RlKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IGRlY29tcHJlc3NlZCA9IG9wdGlvbnM7XG4gICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG9wdGlvbnMgJiYgKGRlY29tcHJlc3NlZCA9IEpTT04ucGFyc2UobHpTdHJpbmcuZXhwb3J0cy5kZWNvbXByZXNzRnJvbUVuY29kZWRVUklDb21wb25lbnQob3B0aW9ucykpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnRoaXMuZGVmYXVsdHMsXG4gICAgICAgICAgICAuLi5kZWNvbXByZXNzZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgX3J1bk1pZ3JhdGlvbnMobWlncmF0aW9ucykge1xuICAgICAgICBpZiAoMCA9PT0gbWlncmF0aW9ucy5sZW5ndGggfHwgIWlzQmFja2dyb3VuZCgpIHx8ICFhd2FpdCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBpbnN0YWxsVHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImRldmVsb3BtZW50XCIgIT09IGluc3RhbGxUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNocm9tZS5tYW5hZ2VtZW50Py5nZXRTZWxmID8gY2hyb21lLm1hbmFnZW1lbnQuZ2V0U2VsZigoKHtpbnN0YWxsVHlwZTogaW5zdGFsbFR5cGV9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGluc3RhbGxUeXBlKTtcbiAgICAgICAgICAgICAgICB9KSkgOiBjYWxsYmFjayhcInVua25vd25cIik7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0oKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgdGhpcy5fZ2V0QWxsKCk7XG4gICAgICAgIGNvbnN0IGluaXRpYWwgPSBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fbG9nKFwibG9nXCIsIFwiRm91bmQgdGhlc2Ugc3RvcmVkIG9wdGlvbnNcIiwge1xuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbG9nKFwiaW5mb1wiLCBcIldpbGwgcnVuXCIsIG1pZ3JhdGlvbnMubGVuZ3RoLCAxID09PSBtaWdyYXRpb25zLmxlbmd0aCA/IFwibWlncmF0aW9uXCIgOiBcIiBtaWdyYXRpb25zXCIpO1xuICAgICAgICBmb3IgKGNvbnN0IG1pZ3JhdGUgb2YgbWlncmF0aW9ucykgbWlncmF0ZShvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgICAgICAgaW5pdGlhbCAhPT0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucykgJiYgYXdhaXQgdGhpcy5fc2V0QWxsKG9wdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBfaGFuZGxlRm9ybUlucHV0KHt0YXJnZXQ6IHRhcmdldH0pIHtcbiAgICAgICAgY29uc3QgZmllbGQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldCh0aGlzLl9wYXJzZUZvcm0oZmllbGQuZm9ybSkpO1xuICAgICAgICAgICAgZmllbGQuZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIm9wdGlvbnMtc3luYzpmb3JtLXN5bmNlZFwiLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIF91cGRhdGVGb3JtKGZvcm0sIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEZvcm1TdGF0ZSA9IHRoaXMuX3BhcnNlRm9ybShmb3JtKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob3B0aW9ucykpIGN1cnJlbnRGb3JtU3RhdGVba2V5XSA9PT0gdmFsdWUgJiYgZGVsZXRlIG9wdGlvbnNba2V5XTtcbiAgICAgICAgY29uc3QgaW5jbHVkZSA9IE9iamVjdC5rZXlzKG9wdGlvbnMpO1xuICAgICAgICBpbmNsdWRlLmxlbmd0aCA+IDAgJiYgZGVzZXJpYWxpemUoZm9ybSwgb3B0aW9ucywge1xuICAgICAgICAgICAgaW5jbHVkZTogaW5jbHVkZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3BhcnNlRm9ybShmb3JtKSB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIikpIGZpZWxkLnZhbGlkaXR5LnZhbGlkICYmICFmaWVsZC5kaXNhYmxlZCAmJiBpbmNsdWRlLnB1c2goZmllbGQubmFtZS5yZXBsYWNlKC9cXFsuKl0vLCBcIlwiKSk7XG4gICAgICAgIHJldHVybiBzZXJpYWxpemUoZm9ybSwge1xuICAgICAgICAgICAgaW5jbHVkZTogaW5jbHVkZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2hhbmRsZVN0b3JhZ2VDaGFuZ2VPbkZvcm0oY2hhbmdlcywgYXJlYU5hbWUpIHtcbiAgICAgICAgYXJlYU5hbWUgIT09IHRoaXMuc3RvcmFnZVR5cGUgfHwgIWNoYW5nZXNbdGhpcy5zdG9yYWdlTmFtZV0gfHwgZG9jdW1lbnQuaGFzRm9jdXMoKSAmJiB0aGlzLl9mb3JtLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHx8IHRoaXMuX3VwZGF0ZUZvcm0odGhpcy5fZm9ybSwgdGhpcy5fZGVjb2RlKGNoYW5nZXNbdGhpcy5zdG9yYWdlTmFtZV0ubmV3VmFsdWUpKTtcbiAgICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShPcHRpb25zU3luYywgXCJtaWdyYXRpb25zXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZToge1xuICAgICAgICByZW1vdmVVbnVzZWQob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9wdGlvbnMpKSBrZXkgaW4gZGVmYXVsdHMgfHwgZGVsZXRlIG9wdGlvbnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgeyBPcHRpb25zU3luYyBhcyBkZWZhdWx0IH07XG4iLCJsZXQgY2FjaGUgPSB0cnVlO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVXZWJleHREZXRlY3RQYWdlQ2FjaGUoKSB7XG4gICAgY2FjaGUgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ3VycmVudFBhdGhuYW1lKHBhdGgpIHtcbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBuZXcgVVJMKHBhdGgsIGxvY2F0aW9uLm9yaWdpbik7XG4gICAgICAgIHJldHVybiBwYXRobmFtZSA9PT0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE1hbmlmZXN0KF92ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lPy5nZXRNYW5pZmVzdD8uKCk7XG59XG5mdW5jdGlvbiBvbmNlKGZ1bmN0aW9uXykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKCFjYWNoZSB8fCB0eXBlb2YgcmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gZnVuY3Rpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjb2RlIGlzIGJlaW5nIHJ1biBvbiBodHRwKHMpOi8vIHBhZ2VzIChpdCBjb3VsZCBiZSBpbiBhIGNvbnRlbnQgc2NyaXB0IG9yIHJlZ3VsYXIgd2ViIGNvbnRleHQpICovXG5leHBvcnQgY29uc3QgaXNXZWJQYWdlID0gb25jZSgoKSA9PiBnbG9iYWxUaGlzLmxvY2F0aW9uPy5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpO1xuLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjb2RlIGlzIGJlaW5nIHJ1biBpbiBleHRlbnNpb24gY29udGV4dHMgdGhhdCBoYXZlIGFjY2VzcyB0byB0aGUgY2hyb21lIEFQSSAqL1xuZXhwb3J0IGNvbnN0IGlzRXh0ZW5zaW9uQ29udGV4dCA9IG9uY2UoKCkgPT4gdHlwZW9mIGdsb2JhbFRoaXMuY2hyb21lPy5leHRlbnNpb24gPT09ICdvYmplY3QnKTtcbi8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY29kZSBpcyBiZWluZyBydW4gaW4gYSBjb250ZW50IHNjcmlwdCAqL1xuZXhwb3J0IGNvbnN0IGlzQ29udGVudFNjcmlwdCA9IG9uY2UoKCkgPT4gaXNFeHRlbnNpb25Db250ZXh0KCkgJiYgaXNXZWJQYWdlKCkpO1xuLyoqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBjb2RlIGlzIGJlaW5nIHJ1biBpbiBhIGJhY2tncm91bmQgY29udGV4dCAqL1xuZXhwb3J0IGNvbnN0IGlzQmFja2dyb3VuZCA9ICgpID0+IGlzQmFja2dyb3VuZFBhZ2UoKSB8fCBpc0JhY2tncm91bmRXb3JrZXIoKTtcbi8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY29kZSBpcyBiZWluZyBydW4gaW4gYSBiYWNrZ3JvdW5kIHBhZ2UgKi9cbmV4cG9ydCBjb25zdCBpc0JhY2tncm91bmRQYWdlID0gb25jZSgoKSA9PiB7XG4gICAgY29uc3QgbWFuaWZlc3QgPSBnZXRNYW5pZmVzdCgyKTtcbiAgICBpZiAobWFuaWZlc3RcbiAgICAgICAgJiYgaXNDdXJyZW50UGF0aG5hbWUobWFuaWZlc3QuYmFja2dyb3VuZF9wYWdlIHx8IG1hbmlmZXN0LmJhY2tncm91bmQ/LnBhZ2UpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gQm9vbGVhbihtYW5pZmVzdD8uYmFja2dyb3VuZD8uc2NyaXB0c1xuICAgICAgICAmJiBpc0N1cnJlbnRQYXRobmFtZSgnL19nZW5lcmF0ZWRfYmFja2dyb3VuZF9wYWdlLmh0bWwnKSk7XG59KTtcbi8qKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgY29kZSBpcyBiZWluZyBydW4gaW4gYSBiYWNrZ3JvdW5kIHdvcmtlciAqL1xuZXhwb3J0IGNvbnN0IGlzQmFja2dyb3VuZFdvcmtlciA9IG9uY2UoKCkgPT4gaXNDdXJyZW50UGF0aG5hbWUoZ2V0TWFuaWZlc3QoMyk/LmJhY2tncm91bmQ/LnNlcnZpY2Vfd29ya2VyKSk7XG4vKiogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvZGUgaXMgYmVpbmcgcnVuIGluIGFuIG9wdGlvbnMgcGFnZS4gVGhpcyBvbmx5IHdvcmtzIGlmIHRoZSBjdXJyZW50IHBhZ2XigJlzIFVSTCBtYXRjaGVzIHRoZSBvbmUgc3BlY2lmaWVkIGluIHRoZSBleHRlbnNpb24ncyBgbWFuaWZlc3QuanNvbmAgKi9cbmV4cG9ydCBjb25zdCBpc09wdGlvbnNQYWdlID0gb25jZSgoKSA9PiB7XG4gICAgaWYgKCFpc0V4dGVuc2lvbkNvbnRleHQoKSB8fCAhY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IG9wdGlvbnNfdWk6IG9wdGlvbnNVaSB9ID0gY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNVaT8ucGFnZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKG9wdGlvbnNVaS5wYWdlLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xufSk7XG4vKiogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvZGUgaXMgYmVpbmcgcnVuIGluIGEgZGV2IHRvb2xzIHBhZ2UuIFRoaXMgb25seSB3b3JrcyBpZiB0aGUgY3VycmVudCBwYWdl4oCZcyBVUkwgbWF0Y2hlcyB0aGUgb25lIHNwZWNpZmllZCBpbiB0aGUgZXh0ZW5zaW9uJ3MgYG1hbmlmZXN0Lmpzb25gIGBkZXZ0b29sc19wYWdlYCBmaWVsZC4gKi9cbmV4cG9ydCBjb25zdCBpc0RldlRvb2xzUGFnZSA9IG9uY2UoKCkgPT4ge1xuICAgIGlmICghaXNFeHRlbnNpb25Db250ZXh0KCkgfHwgIWNocm9tZS5kZXZ0b29scykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHsgZGV2dG9vbHNfcGFnZTogZGV2dG9vbHNQYWdlIH0gPSBjaHJvbWUucnVudGltZS5nZXRNYW5pZmVzdCgpO1xuICAgIGlmICh0eXBlb2YgZGV2dG9vbHNQYWdlICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZGV2dG9vbHNQYWdlLCBsb2NhdGlvbi5vcmlnaW4pO1xuICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xufSk7XG4vKiogTG9vc2VseSBkZXRlY3QgRmlyZWZveCB2aWEgdXNlciBhZ2VudCAqL1xuZXhwb3J0IGNvbnN0IGlzRmlyZWZveCA9ICgpID0+IGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5jbHVkZXMoJ0ZpcmVmb3gnKTtcbi8qKiBMb29zZWx5IGRldGVjdCBDaHJvbWUgdmlhIHVzZXIgYWdlbnQgKG1pZ2h0IGFsc28gaW5jbHVkZSBDaHJvbWl1bSBhbmQgZm9ya3MgbGlrZSBPcGVyYSkgKi9cbmV4cG9ydCBjb25zdCBpc0Nocm9tZSA9ICgpID0+IGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQuaW5jbHVkZXMoJ0Nocm9tZScpO1xuLyoqIExvb3NlbHkgZGV0ZWN0IFNhZmFyaSB2aWEgdXNlciBhZ2VudCAqL1xuZXhwb3J0IGNvbnN0IGlzU2FmYXJpID0gKCkgPT4gIWlzQ2hyb21lKCkgJiYgZ2xvYmFsVGhpcy5uYXZpZ2F0b3I/LnVzZXJBZ2VudC5pbmNsdWRlcygnU2FmYXJpJyk7XG5leHBvcnQgY29uc3QgY29udGV4dE5hbWVzID0ge1xuICAgIGNvbnRlbnRTY3JpcHQ6IGlzQ29udGVudFNjcmlwdCxcbiAgICBiYWNrZ3JvdW5kOiBpc0JhY2tncm91bmQsXG4gICAgb3B0aW9uczogaXNPcHRpb25zUGFnZSxcbiAgICBkZXZUb29sc1BhZ2U6IGlzRGV2VG9vbHNQYWdlLFxuICAgIGV4dGVuc2lvbjogaXNFeHRlbnNpb25Db250ZXh0LFxuICAgIHdlYjogaXNXZWJQYWdlLFxufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZXh0TmFtZSgpIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB0ZXN0XSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0TmFtZXMpKSB7XG4gICAgICAgIGlmICh0ZXN0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAndW5rbm93bic7XG59XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC45NzlkZDhmNy5qcy5tYXAifQ==
