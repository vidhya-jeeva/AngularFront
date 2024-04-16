import {
  BroadcastChannel,
  JSONPath,
  api,
  createLeaderElection,
  require_browser_ponyfill,
  require_p_cancelable,
  require_tiny_emitter
} from "./chunk-DJVU3HQQ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-CPNXOV62.js";

// node_modules/core-js-pure/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js-pure/internals/fails.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js-pure/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js-pure/internals/function-bind-native.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      var test = (function() {
      }).bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js-pure/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js-pure/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js-pure/internals/global.js"(exports, module) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js-pure/internals/function-apply.js
var require_function_apply = __commonJS({
  "node_modules/core-js-pure/internals/function-apply.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var apply = FunctionPrototype.apply;
    var call = FunctionPrototype.call;
    module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
      return call.apply(apply, arguments);
    });
  }
});

// node_modules/core-js-pure/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js-pure/internals/classof-raw.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module) {
    "use strict";
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

// node_modules/core-js-pure/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js-pure/internals/is-callable.js"(exports, module) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js-pure/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js-pure/internals/descriptors.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/core-js-pure/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js-pure/internals/function-call.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js-pure/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js-pure/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js-pure/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js-pure/internals/indexed-object.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js-pure/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module) {
    "use strict";
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js-pure/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js-pure/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js-pure/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js-pure/internals/is-object.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    module.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js-pure/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js-pure/internals/path.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/core-js-pure/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js-pure/internals/get-built-in.js"(exports, module) {
    "use strict";
    var path = require_path();
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(variable) {
      return isCallable(variable) ? variable : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global2[namespace]) : path[namespace] && path[namespace][method] || global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js-pure/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js-pure/internals/engine-user-agent.js"(exports, module) {
    "use strict";
    module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/core-js-pure/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js-pure/internals/engine-v8-version.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process2 = global2.process;
    var Deno2 = global2.Deno;
    var versions = process2 && process2.versions || Deno2 && Deno2.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js-pure/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module) {
    "use strict";
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js-pure/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js-pure/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js-pure/internals/is-symbol.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js-pure/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js-pure/internals/try-to-string.js"(exports, module) {
    "use strict";
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js-pure/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js-pure/internals/a-callable.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js-pure/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js-pure/internals/get-method.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js-pure/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js-pure/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js-pure/internals/is-pure.js"(exports, module) {
    "use strict";
    module.exports = true;
  }
});

// node_modules/core-js-pure/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js-pure/internals/define-global-property.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js-pure/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js-pure/internals/shared-store.js"(exports, module) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.36.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js-pure/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js-pure/internals/shared.js"(exports, module) {
    "use strict";
    var store = require_shared_store();
    module.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/core-js-pure/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js-pure/internals/to-object.js"(exports, module) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js-pure/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js-pure/internals/has-own-property.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js-pure/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js-pure/internals/uid.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js-pure/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js-pure/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js-pure/internals/to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isObject2 = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject2(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js-pure/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js-pure/internals/to-property-key.js"(exports, module) {
    "use strict";
    var toPrimitive2 = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive2(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js-pure/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js-pure/internals/document-create-element.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var isObject2 = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js-pure/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey2 = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey2(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js-pure/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js-pure/internals/is-forced.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// node_modules/core-js-pure/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js-pure/internals/function-bind-context.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind2 = uncurryThis(uncurryThis.bind);
    module.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind2(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js-pure/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/core-js-pure/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js-pure/internals/an-object.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject2(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js-pure/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js-pure/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey2 = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey2(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey2(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js-pure/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js-pure/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js-pure/internals/export.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var apply = require_function_apply();
    var uncurryThis = require_function_uncurry_this_clause();
    var isCallable = require_is_callable();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var isForced = require_is_forced();
    var path = require_path();
    var bind2 = require_function_bind_context();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    require_shared_store();
    var wrapConstructor = function(NativeConstructor) {
      var Wrapper = function(a3, b3, c2) {
        if (this instanceof Wrapper) {
          switch (arguments.length) {
            case 0:
              return new NativeConstructor();
            case 1:
              return new NativeConstructor(a3);
            case 2:
              return new NativeConstructor(a3, b3);
          }
          return new NativeConstructor(a3, b3, c2);
        }
        return apply(NativeConstructor, this, arguments);
      };
      Wrapper.prototype = NativeConstructor.prototype;
      return Wrapper;
    };
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var PROTO = options.proto;
      var nativeSource = GLOBAL ? global2 : STATIC ? global2[TARGET] : global2[TARGET] && global2[TARGET].prototype;
      var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
      var targetPrototype = target.prototype;
      var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
      var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
      for (key in source) {
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
        targetProperty = target[key];
        if (USE_NATIVE)
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(nativeSource, key);
            nativeProperty = descriptor && descriptor.value;
          } else
            nativeProperty = nativeSource[key];
        sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
        if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty)
          continue;
        if (options.bind && USE_NATIVE)
          resultProperty = bind2(sourceProperty, global2);
        else if (options.wrap && USE_NATIVE)
          resultProperty = wrapConstructor(sourceProperty);
        else if (PROTO && isCallable(sourceProperty))
          resultProperty = uncurryThis(sourceProperty);
        else
          resultProperty = sourceProperty;
        if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(resultProperty, "sham", true);
        }
        createNonEnumerableProperty(target, key, resultProperty);
        if (PROTO) {
          VIRTUAL_PROTOTYPE = TARGET + "Prototype";
          if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
            createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
          }
          createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
          if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
            createNonEnumerableProperty(targetPrototype, key, sourceProperty);
          }
        }
      }
    };
  }
});

// node_modules/core-js-pure/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js-pure/internals/math-trunc.js"(exports, module) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js-pure/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module) {
    "use strict";
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js-pure/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js-pure/internals/to-length.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js-pure/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module) {
    "use strict";
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js-pure/internals/array-reduce.js
var require_array_reduce = __commonJS({
  "node_modules/core-js-pure/internals/array-reduce.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var $TypeError = TypeError;
    var REDUCE_EMPTY = "Reduce of empty array with no initial value";
    var createMethod = function(IS_RIGHT) {
      return function(that, callbackfn, argumentsLength, memo) {
        var O = toObject(that);
        var self2 = IndexedObject(O);
        var length = lengthOfArrayLike(O);
        aCallable(callbackfn);
        if (length === 0 && argumentsLength < 2)
          throw new $TypeError(REDUCE_EMPTY);
        var index = IS_RIGHT ? length - 1 : 0;
        var i = IS_RIGHT ? -1 : 1;
        if (argumentsLength < 2)
          while (true) {
            if (index in self2) {
              memo = self2[index];
              index += i;
              break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw new $TypeError(REDUCE_EMPTY);
            }
          }
        for (; IS_RIGHT ? index >= 0 : length > index; index += i)
          if (index in self2) {
            memo = callbackfn(memo, self2[index], index, O);
          }
        return memo;
      };
    };
    module.exports = {
      // `Array.prototype.reduce` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduce
      left: createMethod(false),
      // `Array.prototype.reduceRight` method
      // https://tc39.es/ecma262/#sec-array.prototype.reduceright
      right: createMethod(true)
    };
  }
});

// node_modules/core-js-pure/internals/array-method-is-strict.js
var require_array_method_is_strict = __commonJS({
  "node_modules/core-js-pure/internals/array-method-is-strict.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = function(METHOD_NAME, argument) {
      var method = [][METHOD_NAME];
      return !!method && fails(function() {
        method.call(null, argument || function() {
          return 1;
        }, 1);
      });
    };
  }
});

// node_modules/core-js-pure/internals/engine-is-node.js
var require_engine_is_node = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-node.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var classof = require_classof_raw();
    module.exports = classof(global2.process) === "process";
  }
});

// node_modules/core-js-pure/modules/es.array.reduce.js
var require_es_array_reduce = __commonJS({
  "node_modules/core-js-pure/modules/es.array.reduce.js"() {
    "use strict";
    var $ = require_export();
    var $reduce = require_array_reduce().left;
    var arrayMethodIsStrict = require_array_method_is_strict();
    var CHROME_VERSION = require_engine_v8_version();
    var IS_NODE = require_engine_is_node();
    var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
    var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
    $({ target: "Array", proto: true, forced: FORCED }, {
      reduce: function reduce(callbackfn) {
        var length = arguments.length;
        return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
      }
    });
  }
});

// node_modules/core-js-pure/internals/get-built-in-prototype-method.js
var require_get_built_in_prototype_method = __commonJS({
  "node_modules/core-js-pure/internals/get-built-in-prototype-method.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var path = require_path();
    module.exports = function(CONSTRUCTOR, METHOD) {
      var Namespace = path[CONSTRUCTOR + "Prototype"];
      var pureMethod = Namespace && Namespace[METHOD];
      if (pureMethod)
        return pureMethod;
      var NativeConstructor = global2[CONSTRUCTOR];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      return NativePrototype && NativePrototype[METHOD];
    };
  }
});

// node_modules/core-js-pure/es/array/virtual/reduce.js
var require_reduce = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/reduce.js"(exports, module) {
    "use strict";
    require_es_array_reduce();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "reduce");
  }
});

// node_modules/core-js-pure/es/instance/reduce.js
var require_reduce2 = __commonJS({
  "node_modules/core-js-pure/es/instance/reduce.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_reduce();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.reduce;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/reduce.js
var require_reduce3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/reduce.js"(exports, module) {
    "use strict";
    var parent = require_reduce2();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
var require_reduce4 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"(exports, module) {
    module.exports = require_reduce3();
  }
});

// node_modules/core-js-pure/internals/array-slice.js
var require_array_slice = __commonJS({
  "node_modules/core-js-pure/internals/array-slice.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis([].slice);
  }
});

// node_modules/core-js-pure/internals/function-bind.js
var require_function_bind = __commonJS({
  "node_modules/core-js-pure/internals/function-bind.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    var isObject2 = require_is_object();
    var hasOwn = require_has_own_property();
    var arraySlice = require_array_slice();
    var NATIVE_BIND = require_function_bind_native();
    var $Function = Function;
    var concat = uncurryThis([].concat);
    var join = uncurryThis([].join);
    var factories = {};
    var construct = function(C, argsLength, args) {
      if (!hasOwn(factories, argsLength)) {
        var list = [];
        var i = 0;
        for (; i < argsLength; i++)
          list[i] = "a[" + i + "]";
        factories[argsLength] = $Function("C,a", "return new C(" + join(list, ",") + ")");
      }
      return factories[argsLength](C, args);
    };
    module.exports = NATIVE_BIND ? $Function.bind : function bind2(that) {
      var F = aCallable(this);
      var Prototype = F.prototype;
      var partArgs = arraySlice(arguments, 1);
      var boundFunction = function bound() {
        var args = concat(partArgs, arraySlice(arguments));
        return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
      };
      if (isObject2(Prototype))
        boundFunction.prototype = Prototype;
      return boundFunction;
    };
  }
});

// node_modules/core-js-pure/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js-pure/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js-pure/internals/classof.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js-pure/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js-pure/internals/inspect-source.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js-pure/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js-pure/internals/is-constructor.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, [], argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js-pure/internals/a-constructor.js
var require_a_constructor = __commonJS({
  "node_modules/core-js-pure/internals/a-constructor.js"(exports, module) {
    "use strict";
    var isConstructor = require_is_constructor();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isConstructor(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a constructor");
    };
  }
});

// node_modules/core-js-pure/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js-pure/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js-pure/internals/array-includes.js"(exports, module) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js-pure/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js-pure/internals/hidden-keys.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/core-js-pure/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/core-js-pure/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module) {
    "use strict";
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js-pure/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js-pure/internals/object-keys.js"(exports, module) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js-pure/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js-pure/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js-pure/internals/html.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js-pure/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js-pure/internals/shared-key.js"(exports, module) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js-pure/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js-pure/internals/object-create.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js-pure/modules/es.reflect.construct.js
var require_es_reflect_construct = __commonJS({
  "node_modules/core-js-pure/modules/es.reflect.construct.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var bind2 = require_function_bind();
    var aConstructor = require_a_constructor();
    var anObject = require_an_object();
    var isObject2 = require_is_object();
    var create = require_object_create();
    var fails = require_fails();
    var nativeConstruct = getBuiltIn("Reflect", "construct");
    var ObjectPrototype = Object.prototype;
    var push = [].push;
    var NEW_TARGET_BUG = fails(function() {
      function F() {
      }
      return !(nativeConstruct(function() {
      }, [], F) instanceof F);
    });
    var ARGS_BUG = !fails(function() {
      nativeConstruct(function() {
      });
    });
    var FORCED = NEW_TARGET_BUG || ARGS_BUG;
    $({ target: "Reflect", stat: true, forced: FORCED, sham: FORCED }, {
      construct: function construct(Target, args) {
        aConstructor(Target);
        anObject(args);
        var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG)
          return nativeConstruct(Target, args, newTarget);
        if (Target === newTarget) {
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
          var $args = [null];
          apply(push, $args, args);
          return new (apply(bind2, Target, $args))();
        }
        var proto = newTarget.prototype;
        var instance = create(isObject2(proto) ? proto : ObjectPrototype);
        var result = apply(Target, instance, args);
        return isObject2(result) ? result : instance;
      }
    });
  }
});

// node_modules/core-js-pure/es/reflect/construct.js
var require_construct = __commonJS({
  "node_modules/core-js-pure/es/reflect/construct.js"(exports, module) {
    "use strict";
    require_es_reflect_construct();
    var path = require_path();
    module.exports = path.Reflect.construct;
  }
});

// node_modules/core-js-pure/stable/reflect/construct.js
var require_construct2 = __commonJS({
  "node_modules/core-js-pure/stable/reflect/construct.js"(exports, module) {
    "use strict";
    var parent = require_construct();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js
var require_construct3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/reflect/construct.js"(exports, module) {
    module.exports = require_construct2();
  }
});

// node_modules/core-js-pure/modules/es.object.create.js
var require_es_object_create = __commonJS({
  "node_modules/core-js-pure/modules/es.object.create.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var create = require_object_create();
    $({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
      create
    });
  }
});

// node_modules/core-js-pure/es/object/create.js
var require_create = __commonJS({
  "node_modules/core-js-pure/es/object/create.js"(exports, module) {
    "use strict";
    require_es_object_create();
    var path = require_path();
    var Object2 = path.Object;
    module.exports = function create(P, D) {
      return Object2.create(P, D);
    };
  }
});

// node_modules/core-js-pure/stable/object/create.js
var require_create2 = __commonJS({
  "node_modules/core-js-pure/stable/object/create.js"(exports, module) {
    "use strict";
    var parent = require_create();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/object/create.js
var require_create3 = __commonJS({
  "node_modules/core-js-pure/actual/object/create.js"(exports, module) {
    "use strict";
    var parent = require_create2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/object/create.js
var require_create4 = __commonJS({
  "node_modules/core-js-pure/full/object/create.js"(exports, module) {
    "use strict";
    var parent = require_create3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/object/create.js
var require_create5 = __commonJS({
  "node_modules/core-js-pure/features/object/create.js"(exports, module) {
    "use strict";
    module.exports = require_create4();
  }
});

// node_modules/core-js-pure/modules/es.object.define-property.js
var require_es_object_define_property = __commonJS({
  "node_modules/core-js-pure/modules/es.object.define-property.js"() {
    "use strict";
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var defineProperty = require_object_define_property().f;
    $({ target: "Object", stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
      defineProperty
    });
  }
});

// node_modules/core-js-pure/es/object/define-property.js
var require_define_property = __commonJS({
  "node_modules/core-js-pure/es/object/define-property.js"(exports, module) {
    "use strict";
    require_es_object_define_property();
    var path = require_path();
    var Object2 = path.Object;
    var defineProperty = module.exports = function defineProperty2(it, key, desc) {
      return Object2.defineProperty(it, key, desc);
    };
    if (Object2.defineProperty.sham)
      defineProperty.sham = true;
  }
});

// node_modules/core-js-pure/stable/object/define-property.js
var require_define_property2 = __commonJS({
  "node_modules/core-js-pure/stable/object/define-property.js"(exports, module) {
    "use strict";
    var parent = require_define_property();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/object/define-property.js
var require_define_property3 = __commonJS({
  "node_modules/core-js-pure/actual/object/define-property.js"(exports, module) {
    "use strict";
    var parent = require_define_property2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/object/define-property.js
var require_define_property4 = __commonJS({
  "node_modules/core-js-pure/full/object/define-property.js"(exports, module) {
    "use strict";
    var parent = require_define_property3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/object/define-property.js
var require_define_property5 = __commonJS({
  "node_modules/core-js-pure/features/object/define-property.js"(exports, module) {
    "use strict";
    module.exports = require_define_property4();
  }
});

// node_modules/core-js-pure/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    module.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js-pure/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    module.exports = function(argument) {
      return isObject2(argument) || argument === null;
    };
  }
});

// node_modules/core-js-pure/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module) {
    "use strict";
    var isPossiblePrototype = require_is_possible_prototype();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isPossiblePrototype(argument))
        return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/core-js-pure/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThisAccessor = require_function_uncurry_this_accessor();
    var isObject2 = require_is_object();
    var requireObjectCoercible = require_require_object_coercible();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        requireObjectCoercible(O);
        aPossiblePrototype(proto);
        if (!isObject2(O))
          return O;
        if (CORRECT_SETTER)
          setter(O, proto);
        else
          O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/core-js-pure/modules/es.object.set-prototype-of.js
var require_es_object_set_prototype_of = __commonJS({
  "node_modules/core-js-pure/modules/es.object.set-prototype-of.js"() {
    "use strict";
    var $ = require_export();
    var setPrototypeOf = require_object_set_prototype_of();
    $({ target: "Object", stat: true }, {
      setPrototypeOf
    });
  }
});

// node_modules/core-js-pure/es/object/set-prototype-of.js
var require_set_prototype_of = __commonJS({
  "node_modules/core-js-pure/es/object/set-prototype-of.js"(exports, module) {
    "use strict";
    require_es_object_set_prototype_of();
    var path = require_path();
    module.exports = path.Object.setPrototypeOf;
  }
});

// node_modules/core-js-pure/stable/object/set-prototype-of.js
var require_set_prototype_of2 = __commonJS({
  "node_modules/core-js-pure/stable/object/set-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_set_prototype_of();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/object/set-prototype-of.js
var require_set_prototype_of3 = __commonJS({
  "node_modules/core-js-pure/actual/object/set-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_set_prototype_of2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/object/set-prototype-of.js
var require_set_prototype_of4 = __commonJS({
  "node_modules/core-js-pure/full/object/set-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_set_prototype_of3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/object/set-prototype-of.js
var require_set_prototype_of5 = __commonJS({
  "node_modules/core-js-pure/features/object/set-prototype-of.js"(exports, module) {
    "use strict";
    module.exports = require_set_prototype_of4();
  }
});

// node_modules/core-js-pure/modules/es.function.bind.js
var require_es_function_bind = __commonJS({
  "node_modules/core-js-pure/modules/es.function.bind.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind();
    $({ target: "Function", proto: true, forced: Function.bind !== bind2 }, {
      bind: bind2
    });
  }
});

// node_modules/core-js-pure/es/function/virtual/bind.js
var require_bind = __commonJS({
  "node_modules/core-js-pure/es/function/virtual/bind.js"(exports, module) {
    "use strict";
    require_es_function_bind();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Function", "bind");
  }
});

// node_modules/core-js-pure/es/instance/bind.js
var require_bind2 = __commonJS({
  "node_modules/core-js-pure/es/instance/bind.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_bind();
    var FunctionPrototype = Function.prototype;
    module.exports = function(it) {
      var own = it.bind;
      return it === FunctionPrototype || isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/bind.js
var require_bind3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/bind.js"(exports, module) {
    "use strict";
    var parent = require_bind2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/instance/bind.js
var require_bind4 = __commonJS({
  "node_modules/core-js-pure/actual/instance/bind.js"(exports, module) {
    "use strict";
    var parent = require_bind3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/bind.js
var require_bind5 = __commonJS({
  "node_modules/core-js-pure/full/instance/bind.js"(exports, module) {
    "use strict";
    var parent = require_bind4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/bind.js
var require_bind6 = __commonJS({
  "node_modules/core-js-pure/features/instance/bind.js"(exports, module) {
    "use strict";
    module.exports = require_bind5();
  }
});

// node_modules/core-js-pure/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js-pure/internals/is-array.js"(exports, module) {
    "use strict";
    var classof = require_classof_raw();
    module.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/core-js-pure/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js-pure/internals/create-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      if (DESCRIPTORS)
        definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
      else
        object[key] = value;
    };
  }
});

// node_modules/core-js-pure/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js-pure/internals/array-species-constructor.js"(exports, module) {
    "use strict";
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject2 = require_is_object();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    module.exports = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
          C = void 0;
        else if (isObject2(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// node_modules/core-js-pure/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js-pure/internals/array-species-create.js"(exports, module) {
    "use strict";
    var arraySpeciesConstructor = require_array_species_constructor();
    module.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js-pure/internals/array-method-has-species-support.js
var require_array_method_has_species_support = __commonJS({
  "node_modules/core-js-pure/internals/array-method-has-species-support.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var wellKnownSymbol = require_well_known_symbol();
    var V8_VERSION = require_engine_v8_version();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function(METHOD_NAME) {
      return V8_VERSION >= 51 || !fails(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
  }
});

// node_modules/core-js-pure/modules/es.array.concat.js
var require_es_array_concat = __commonJS({
  "node_modules/core-js-pure/modules/es.array.concat.js"() {
    "use strict";
    var $ = require_export();
    var fails = require_fails();
    var isArray = require_is_array();
    var isObject2 = require_is_object();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var createProperty = require_create_property();
    var arraySpeciesCreate = require_array_species_create();
    var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
    var wellKnownSymbol = require_well_known_symbol();
    var V8_VERSION = require_engine_v8_version();
    var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
    var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
      var array = [];
      array[IS_CONCAT_SPREADABLE] = false;
      return array.concat()[0] !== array;
    });
    var isConcatSpreadable = function(O) {
      if (!isObject2(O))
        return false;
      var spreadable = O[IS_CONCAT_SPREADABLE];
      return spreadable !== void 0 ? !!spreadable : isArray(O);
    };
    var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport("concat");
    $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i];
          if (isConcatSpreadable(E)) {
            len = lengthOfArrayLike(E);
            doesNotExceedSafeInteger(n + len);
            for (k = 0; k < len; k++, n++)
              if (k in E)
                createProperty(A, n, E[k]);
          } else {
            doesNotExceedSafeInteger(n + 1);
            createProperty(A, n++, E);
          }
        }
        A.length = n;
        return A;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/core-js-pure/modules/es.object.to-string.js"() {
  }
});

// node_modules/core-js-pure/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/core-js-pure/internals/to-string.js"(exports, module) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/core-js-pure/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js-pure/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js-pure/internals/object-get-own-property-names-external.js
var require_object_get_own_property_names_external = __commonJS({
  "node_modules/core-js-pure/internals/object-get-own-property-names-external.js"(exports, module) {
    "use strict";
    var classof = require_classof_raw();
    var toIndexedObject = require_to_indexed_object();
    var $getOwnPropertyNames = require_object_get_own_property_names().f;
    var arraySlice = require_array_slice();
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return $getOwnPropertyNames(it);
      } catch (error) {
        return arraySlice(windowNames);
      }
    };
    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && classof(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
    };
  }
});

// node_modules/core-js-pure/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js-pure/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js-pure/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js-pure/internals/define-built-in.js"(exports, module) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module.exports = function(target, key, value, options) {
      if (options && options.enumerable)
        target[key] = value;
      else
        createNonEnumerableProperty(target, key, value);
      return target;
    };
  }
});

// node_modules/core-js-pure/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module) {
    "use strict";
    var defineProperty = require_object_define_property();
    module.exports = function(target, name, descriptor) {
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/core-js-pure/internals/well-known-symbol-wrapped.js
var require_well_known_symbol_wrapped = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol-wrapped.js"(exports) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    exports.f = wellKnownSymbol;
  }
});

// node_modules/core-js-pure/internals/well-known-symbol-define.js
var require_well_known_symbol_define = __commonJS({
  "node_modules/core-js-pure/internals/well-known-symbol-define.js"(exports, module) {
    "use strict";
    var path = require_path();
    var hasOwn = require_has_own_property();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineProperty = require_object_define_property().f;
    module.exports = function(NAME) {
      var Symbol2 = path.Symbol || (path.Symbol = {});
      if (!hasOwn(Symbol2, NAME))
        defineProperty(Symbol2, NAME, {
          value: wrappedWellKnownSymbolModule.f(NAME)
        });
    };
  }
});

// node_modules/core-js-pure/internals/symbol-define-to-primitive.js
var require_symbol_define_to_primitive = __commonJS({
  "node_modules/core-js-pure/internals/symbol-define-to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var getBuiltIn = require_get_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var defineBuiltIn = require_define_built_in();
    module.exports = function() {
      var Symbol2 = getBuiltIn("Symbol");
      var SymbolPrototype = Symbol2 && Symbol2.prototype;
      var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
        defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function(hint) {
          return call(valueOf, this);
        }, { arity: 1 });
      }
    };
  }
});

// node_modules/core-js-pure/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/core-js-pure/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/core-js-pure/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineProperty = require_object_define_property().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var toString = require_object_to_string();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module.exports = function(it, TAG, STATIC, SET_METHOD) {
      var target = STATIC ? it : it && it.prototype;
      if (target) {
        if (!hasOwn(target, TO_STRING_TAG)) {
          defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
        }
        if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
          createNonEnumerableProperty(target, "toString", toString);
        }
      }
    };
  }
});

// node_modules/core-js-pure/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/core-js-pure/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js-pure/internals/internal-state.js"(exports, module) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject2 = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set2;
    var get3;
    var has;
    var enforce = function(it) {
      return has(it) ? get3(it) : set2(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject2(it) || (state = get3(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set2 = function(it, metadata) {
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get3 = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set2 = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get3 = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set: set2,
      get: get3,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js-pure/internals/array-iteration.js
var require_array_iteration = __commonJS({
  "node_modules/core-js-pure/internals/array-iteration.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var uncurryThis = require_function_uncurry_this();
    var IndexedObject = require_indexed_object();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var arraySpeciesCreate = require_array_species_create();
    var push = uncurryThis([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE === 1;
      var IS_FILTER = TYPE === 2;
      var IS_SOME = TYPE === 3;
      var IS_EVERY = TYPE === 4;
      var IS_FIND_INDEX = TYPE === 6;
      var IS_FILTER_REJECT = TYPE === 7;
      var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self2 = IndexedObject(O);
        var length = lengthOfArrayLike(self2);
        var boundFunction = bind2(callbackfn, that);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
        var value, result;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP)
                target[index] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index;
                  case 2:
                    push(target, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push(target, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
      };
    };
    module.exports = {
      // `Array.prototype.forEach` method
      // https://tc39.es/ecma262/#sec-array.prototype.foreach
      forEach: createMethod(0),
      // `Array.prototype.map` method
      // https://tc39.es/ecma262/#sec-array.prototype.map
      map: createMethod(1),
      // `Array.prototype.filter` method
      // https://tc39.es/ecma262/#sec-array.prototype.filter
      filter: createMethod(2),
      // `Array.prototype.some` method
      // https://tc39.es/ecma262/#sec-array.prototype.some
      some: createMethod(3),
      // `Array.prototype.every` method
      // https://tc39.es/ecma262/#sec-array.prototype.every
      every: createMethod(4),
      // `Array.prototype.find` method
      // https://tc39.es/ecma262/#sec-array.prototype.find
      find: createMethod(5),
      // `Array.prototype.findIndex` method
      // https://tc39.es/ecma262/#sec-array.prototype.findIndex
      findIndex: createMethod(6),
      // `Array.prototype.filterReject` method
      // https://github.com/tc39/proposal-array-filtering
      filterReject: createMethod(7)
    };
  }
});

// node_modules/core-js-pure/modules/es.symbol.constructor.js
var require_es_symbol_constructor = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.constructor.js"() {
    "use strict";
    var $ = require_export();
    var global2 = require_global();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails = require_fails();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey2 = require_to_property_key();
    var $toString = require_to_string();
    var createPropertyDescriptor = require_create_property_descriptor();
    var nativeObjectCreate = require_object_create();
    var objectKeys = require_object_keys();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    var definePropertiesModule = require_object_define_properties();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var shared = require_shared();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var uid = require_uid();
    var wellKnownSymbol = require_well_known_symbol();
    var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var defineSymbolToPrimitive = require_symbol_define_to_primitive();
    var setToStringTag = require_set_to_string_tag();
    var InternalStateModule = require_internal_state();
    var $forEach = require_array_iteration().forEach;
    var HIDDEN = sharedKey("hidden");
    var SYMBOL = "Symbol";
    var PROTOTYPE = "prototype";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(SYMBOL);
    var ObjectPrototype = Object[PROTOTYPE];
    var $Symbol = global2.Symbol;
    var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
    var RangeError2 = global2.RangeError;
    var TypeError2 = global2.TypeError;
    var QObject = global2.QObject;
    var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var nativeDefineProperty = definePropertyModule.f;
    var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
    var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
    var push = uncurryThis([].push);
    var AllSymbols = shared("symbols");
    var ObjectPrototypeSymbols = shared("op-symbols");
    var WellKnownSymbolsStore = shared("wks");
    var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
    var fallbackDefineProperty = function(O, P, Attributes) {
      var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
      if (ObjectPrototypeDescriptor)
        delete ObjectPrototype[P];
      nativeDefineProperty(O, P, Attributes);
      if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
      }
    };
    var setSymbolDescriptor = DESCRIPTORS && fails(function() {
      return nativeObjectCreate(nativeDefineProperty({}, "a", {
        get: function() {
          return nativeDefineProperty(this, "a", { value: 7 }).a;
        }
      })).a !== 7;
    }) ? fallbackDefineProperty : nativeDefineProperty;
    var wrap = function(tag, description) {
      var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
      setInternalState(symbol, {
        type: SYMBOL,
        tag,
        description
      });
      if (!DESCRIPTORS)
        symbol.description = description;
      return symbol;
    };
    var $defineProperty = function defineProperty(O, P, Attributes) {
      if (O === ObjectPrototype)
        $defineProperty(ObjectPrototypeSymbols, P, Attributes);
      anObject(O);
      var key = toPropertyKey2(P);
      anObject(Attributes);
      if (hasOwn(AllSymbols, key)) {
        if (!Attributes.enumerable) {
          if (!hasOwn(O, HIDDEN))
            nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
          O[HIDDEN][key] = true;
        } else {
          if (hasOwn(O, HIDDEN) && O[HIDDEN][key])
            O[HIDDEN][key] = false;
          Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        }
        return setSymbolDescriptor(O, key, Attributes);
      }
      return nativeDefineProperty(O, key, Attributes);
    };
    var $defineProperties = function defineProperties(O, Properties) {
      anObject(O);
      var properties = toIndexedObject(Properties);
      var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
      $forEach(keys, function(key) {
        if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key))
          $defineProperty(O, key, properties[key]);
      });
      return O;
    };
    var $create = function create(O, Properties) {
      return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
    };
    var $propertyIsEnumerable = function propertyIsEnumerable(V) {
      var P = toPropertyKey2(V);
      var enumerable = call(nativePropertyIsEnumerable, this, P);
      if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P))
        return false;
      return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
    };
    var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
      var it = toIndexedObject(O);
      var key = toPropertyKey2(P);
      if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key))
        return;
      var descriptor = nativeGetOwnPropertyDescriptor(it, key);
      if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
      }
      return descriptor;
    };
    var $getOwnPropertyNames = function getOwnPropertyNames(O) {
      var names = nativeGetOwnPropertyNames(toIndexedObject(O));
      var result = [];
      $forEach(names, function(key) {
        if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key))
          push(result, key);
      });
      return result;
    };
    var $getOwnPropertySymbols = function(O) {
      var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
      var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
      var result = [];
      $forEach(names, function(key) {
        if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
          push(result, AllSymbols[key]);
        }
      });
      return result;
    };
    if (!NATIVE_SYMBOL) {
      $Symbol = function Symbol2() {
        if (isPrototypeOf(SymbolPrototype, this))
          throw new TypeError2("Symbol is not a constructor");
        var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
        var tag = uid(description);
        var setter = function(value) {
          var $this = this === void 0 ? global2 : this;
          if ($this === ObjectPrototype)
            call(setter, ObjectPrototypeSymbols, value);
          if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag))
            $this[HIDDEN][tag] = false;
          var descriptor = createPropertyDescriptor(1, value);
          try {
            setSymbolDescriptor($this, tag, descriptor);
          } catch (error) {
            if (!(error instanceof RangeError2))
              throw error;
            fallbackDefineProperty($this, tag, descriptor);
          }
        };
        if (DESCRIPTORS && USE_SETTER)
          setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
        return wrap(tag, description);
      };
      SymbolPrototype = $Symbol[PROTOTYPE];
      defineBuiltIn(SymbolPrototype, "toString", function toString() {
        return getInternalState(this).tag;
      });
      defineBuiltIn($Symbol, "withoutSetter", function(description) {
        return wrap(uid(description), description);
      });
      propertyIsEnumerableModule.f = $propertyIsEnumerable;
      definePropertyModule.f = $defineProperty;
      definePropertiesModule.f = $defineProperties;
      getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
      getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
      getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
      wrappedWellKnownSymbolModule.f = function(name) {
        return wrap(wellKnownSymbol(name), name);
      };
      if (DESCRIPTORS) {
        defineBuiltInAccessor(SymbolPrototype, "description", {
          configurable: true,
          get: function description() {
            return getInternalState(this).description;
          }
        });
        if (!IS_PURE) {
          defineBuiltIn(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
        }
      }
    }
    $({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
      Symbol: $Symbol
    });
    $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
      defineWellKnownSymbol(name);
    });
    $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
      useSetter: function() {
        USE_SETTER = true;
      },
      useSimple: function() {
        USE_SETTER = false;
      }
    });
    $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
      // `Object.create` method
      // https://tc39.es/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.es/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.es/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor
    });
    $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
      // `Object.getOwnPropertyNames` method
      // https://tc39.es/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames
    });
    defineSymbolToPrimitive();
    setToStringTag($Symbol, SYMBOL);
    hiddenKeys[HIDDEN] = true;
  }
});

// node_modules/core-js-pure/internals/symbol-registry-detection.js
var require_symbol_registry_detection = __commonJS({
  "node_modules/core-js-pure/internals/symbol-registry-detection.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !!Symbol["for"] && !!Symbol.keyFor;
  }
});

// node_modules/core-js-pure/modules/es.symbol.for.js
var require_es_symbol_for = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.for.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var hasOwn = require_has_own_property();
    var toString = require_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var StringToSymbolRegistry = shared("string-to-symbol-registry");
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      "for": function(key) {
        var string = toString(key);
        if (hasOwn(StringToSymbolRegistry, string))
          return StringToSymbolRegistry[string];
        var symbol = getBuiltIn("Symbol")(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.symbol.key-for.js
var require_es_symbol_key_for = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.key-for.js"() {
    "use strict";
    var $ = require_export();
    var hasOwn = require_has_own_property();
    var isSymbol = require_is_symbol();
    var tryToString = require_try_to_string();
    var shared = require_shared();
    var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
    var SymbolToStringRegistry = shared("symbol-to-string-registry");
    $({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
          throw new TypeError(tryToString(sym) + " is not a symbol");
        if (hasOwn(SymbolToStringRegistry, sym))
          return SymbolToStringRegistry[sym];
      }
    });
  }
});

// node_modules/core-js-pure/internals/get-json-replacer-function.js
var require_get_json_replacer_function = __commonJS({
  "node_modules/core-js-pure/internals/get-json-replacer-function.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isArray = require_is_array();
    var isCallable = require_is_callable();
    var classof = require_classof_raw();
    var toString = require_to_string();
    var push = uncurryThis([].push);
    module.exports = function(replacer) {
      if (isCallable(replacer))
        return replacer;
      if (!isArray(replacer))
        return;
      var rawLength = replacer.length;
      var keys = [];
      for (var i = 0; i < rawLength; i++) {
        var element = replacer[i];
        if (typeof element == "string")
          push(keys, element);
        else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String")
          push(keys, toString(element));
      }
      var keysLength = keys.length;
      var root = true;
      return function(key, value) {
        if (root) {
          root = false;
          return value;
        }
        if (isArray(this))
          return value;
        for (var j = 0; j < keysLength; j++)
          if (keys[j] === key)
            return value;
      };
    };
  }
});

// node_modules/core-js-pure/modules/es.json.stringify.js
var require_es_json_stringify = __commonJS({
  "node_modules/core-js-pure/modules/es.json.stringify.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var apply = require_function_apply();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isSymbol = require_is_symbol();
    var arraySlice = require_array_slice();
    var getReplacerFunction = require_get_json_replacer_function();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var $String = String;
    var $stringify = getBuiltIn("JSON", "stringify");
    var exec = uncurryThis(/./.exec);
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var replace = uncurryThis("".replace);
    var numberToString = uncurryThis(1 .toString);
    var tester = /[\uD800-\uDFFF]/g;
    var low = /^[\uD800-\uDBFF]$/;
    var hi = /^[\uDC00-\uDFFF]$/;
    var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
      var symbol = getBuiltIn("Symbol")("stringify detection");
      return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
    });
    var ILL_FORMED_UNICODE = fails(function() {
      return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
    });
    var stringifyWithSymbolsFix = function(it, replacer) {
      var args = arraySlice(arguments);
      var $replacer = getReplacerFunction(replacer);
      if (!isCallable($replacer) && (it === void 0 || isSymbol(it)))
        return;
      args[1] = function(key, value) {
        if (isCallable($replacer))
          value = call($replacer, this, $String(key), value);
        if (!isSymbol(value))
          return value;
      };
      return apply($stringify, null, args);
    };
    var fixIllFormed = function(match, offset, string) {
      var prev = charAt(string, offset - 1);
      var next = charAt(string, offset + 1);
      if (exec(low, match) && !exec(hi, next) || exec(hi, match) && !exec(low, prev)) {
        return "\\u" + numberToString(charCodeAt(match, 0), 16);
      }
      return match;
    };
    if ($stringify) {
      $({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        stringify: function stringify(it, replacer, space) {
          var args = arraySlice(arguments);
          var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
          return ILL_FORMED_UNICODE && typeof result == "string" ? replace(result, tester, fixIllFormed) : result;
        }
      });
    }
  }
});

// node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js
var require_es_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js"() {
    "use strict";
    var $ = require_export();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var fails = require_fails();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var toObject = require_to_object();
    var FORCED = !NATIVE_SYMBOL || fails(function() {
      getOwnPropertySymbolsModule.f(1);
    });
    $({ target: "Object", stat: true, forced: FORCED }, {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
        return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.symbol.js
var require_es_symbol = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.js"() {
    "use strict";
    require_es_symbol_constructor();
    require_es_symbol_for();
    require_es_symbol_key_for();
    require_es_json_stringify();
    require_es_object_get_own_property_symbols();
  }
});

// node_modules/core-js-pure/modules/es.symbol.async-iterator.js
var require_es_symbol_async_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.async-iterator.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("asyncIterator");
  }
});

// node_modules/core-js-pure/modules/es.symbol.description.js
var require_es_symbol_description = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.description.js"() {
  }
});

// node_modules/core-js-pure/modules/es.symbol.has-instance.js
var require_es_symbol_has_instance = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.has-instance.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("hasInstance");
  }
});

// node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js
var require_es_symbol_is_concat_spreadable = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("isConcatSpreadable");
  }
});

// node_modules/core-js-pure/modules/es.symbol.iterator.js
var require_es_symbol_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.iterator.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("iterator");
  }
});

// node_modules/core-js-pure/modules/es.symbol.match.js
var require_es_symbol_match = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.match.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("match");
  }
});

// node_modules/core-js-pure/modules/es.symbol.match-all.js
var require_es_symbol_match_all = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.match-all.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("matchAll");
  }
});

// node_modules/core-js-pure/modules/es.symbol.replace.js
var require_es_symbol_replace = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.replace.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("replace");
  }
});

// node_modules/core-js-pure/modules/es.symbol.search.js
var require_es_symbol_search = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.search.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("search");
  }
});

// node_modules/core-js-pure/modules/es.symbol.species.js
var require_es_symbol_species = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.species.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("species");
  }
});

// node_modules/core-js-pure/modules/es.symbol.split.js
var require_es_symbol_split = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.split.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("split");
  }
});

// node_modules/core-js-pure/modules/es.symbol.to-primitive.js
var require_es_symbol_to_primitive = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.to-primitive.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var defineSymbolToPrimitive = require_symbol_define_to_primitive();
    defineWellKnownSymbol("toPrimitive");
    defineSymbolToPrimitive();
  }
});

// node_modules/core-js-pure/modules/es.symbol.to-string-tag.js
var require_es_symbol_to_string_tag = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.to-string-tag.js"() {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var defineWellKnownSymbol = require_well_known_symbol_define();
    var setToStringTag = require_set_to_string_tag();
    defineWellKnownSymbol("toStringTag");
    setToStringTag(getBuiltIn("Symbol"), "Symbol");
  }
});

// node_modules/core-js-pure/modules/es.symbol.unscopables.js
var require_es_symbol_unscopables = __commonJS({
  "node_modules/core-js-pure/modules/es.symbol.unscopables.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("unscopables");
  }
});

// node_modules/core-js-pure/modules/es.json.to-string-tag.js
var require_es_json_to_string_tag = __commonJS({
  "node_modules/core-js-pure/modules/es.json.to-string-tag.js"() {
    "use strict";
    var global2 = require_global();
    var setToStringTag = require_set_to_string_tag();
    setToStringTag(global2.JSON, "JSON", true);
  }
});

// node_modules/core-js-pure/modules/es.math.to-string-tag.js
var require_es_math_to_string_tag = __commonJS({
  "node_modules/core-js-pure/modules/es.math.to-string-tag.js"() {
  }
});

// node_modules/core-js-pure/modules/es.reflect.to-string-tag.js
var require_es_reflect_to_string_tag = __commonJS({
  "node_modules/core-js-pure/modules/es.reflect.to-string-tag.js"() {
  }
});

// node_modules/core-js-pure/es/symbol/index.js
var require_symbol = __commonJS({
  "node_modules/core-js-pure/es/symbol/index.js"(exports, module) {
    "use strict";
    require_es_array_concat();
    require_es_object_to_string();
    require_es_symbol();
    require_es_symbol_async_iterator();
    require_es_symbol_description();
    require_es_symbol_has_instance();
    require_es_symbol_is_concat_spreadable();
    require_es_symbol_iterator();
    require_es_symbol_match();
    require_es_symbol_match_all();
    require_es_symbol_replace();
    require_es_symbol_search();
    require_es_symbol_species();
    require_es_symbol_split();
    require_es_symbol_to_primitive();
    require_es_symbol_to_string_tag();
    require_es_symbol_unscopables();
    require_es_json_to_string_tag();
    require_es_math_to_string_tag();
    require_es_reflect_to_string_tag();
    var path = require_path();
    module.exports = path.Symbol;
  }
});

// node_modules/core-js-pure/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module) {
    "use strict";
    module.exports = function() {
    };
  }
});

// node_modules/core-js-pure/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js-pure/internals/iterators.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// node_modules/core-js-pure/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js-pure/internals/function-name.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && (function something() {
    }).name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js-pure/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/core-js-pure/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/core-js-pure/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/core-js-pure/internals/iterators-core.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject2(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE)
      IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/core-js-pure/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "node_modules/core-js-pure/internals/iterator-create-constructor.js"(exports, module) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// node_modules/core-js-pure/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "node_modules/core-js-pure/internals/iterator-define.js"(exports, module) {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var IS_PURE = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator)
          return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype)
          return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE)
            Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return call(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED)
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
          }
        else
          $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };
  }
});

// node_modules/core-js-pure/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/core-js-pure/internals/create-iter-result-object.js"(exports, module) {
    "use strict";
    module.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/core-js-pure/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var addToUnscopables = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty = require_object_define_property().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        // target
        index: 0,
        // next index
        kind
        // kind
      });
    }, function() {
      var state = getInternalState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      switch (state.kind) {
        case "keys":
          return createIterResultObject(index, false);
        case "values":
          return createIterResultObject(target[index], false);
      }
      return createIterResultObject([index, target[index]], false);
    }, "values");
    var values = Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
    if (!IS_PURE && DESCRIPTORS && values.name !== "values")
      try {
        defineProperty(values, "name", { value: "values" });
      } catch (error) {
      }
  }
});

// node_modules/core-js-pure/internals/dom-iterables.js
var require_dom_iterables = __commonJS({
  "node_modules/core-js-pure/internals/dom-iterables.js"(exports, module) {
    "use strict";
    module.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  }
});

// node_modules/core-js-pure/modules/web.dom-collections.iterator.js
var require_web_dom_collections_iterator = __commonJS({
  "node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
    "use strict";
    require_es_array_iterator();
    var DOMIterables = require_dom_iterables();
    var global2 = require_global();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    for (COLLECTION_NAME in DOMIterables) {
      setToStringTag(global2[COLLECTION_NAME], COLLECTION_NAME);
      Iterators[COLLECTION_NAME] = Iterators.Array;
    }
    var COLLECTION_NAME;
  }
});

// node_modules/core-js-pure/stable/symbol/index.js
var require_symbol2 = __commonJS({
  "node_modules/core-js-pure/stable/symbol/index.js"(exports, module) {
    "use strict";
    var parent = require_symbol();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/modules/esnext.function.metadata.js
var require_esnext_function_metadata = __commonJS({
  "node_modules/core-js-pure/modules/esnext.function.metadata.js"() {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var defineProperty = require_object_define_property().f;
    var METADATA = wellKnownSymbol("metadata");
    var FunctionPrototype = Function.prototype;
    if (FunctionPrototype[METADATA] === void 0) {
      defineProperty(FunctionPrototype, METADATA, {
        value: null
      });
    }
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js
var require_esnext_symbol_async_dispose = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("asyncDispose");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.dispose.js
var require_esnext_symbol_dispose = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.dispose.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("dispose");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.metadata.js
var require_esnext_symbol_metadata = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.metadata.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("metadata");
  }
});

// node_modules/core-js-pure/actual/symbol/index.js
var require_symbol3 = __commonJS({
  "node_modules/core-js-pure/actual/symbol/index.js"(exports, module) {
    "use strict";
    var parent = require_symbol2();
    require_esnext_function_metadata();
    require_esnext_symbol_async_dispose();
    require_esnext_symbol_dispose();
    require_esnext_symbol_metadata();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/internals/symbol-is-registered.js
var require_symbol_is_registered = __commonJS({
  "node_modules/core-js-pure/internals/symbol-is-registered.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var Symbol2 = getBuiltIn("Symbol");
    var keyFor = Symbol2.keyFor;
    var thisSymbolValue = uncurryThis(Symbol2.prototype.valueOf);
    module.exports = Symbol2.isRegisteredSymbol || function isRegisteredSymbol(value) {
      try {
        return keyFor(thisSymbolValue(value)) !== void 0;
      } catch (error) {
        return false;
      }
    };
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js
var require_esnext_symbol_is_registered_symbol = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js"() {
    "use strict";
    var $ = require_export();
    var isRegisteredSymbol = require_symbol_is_registered();
    $({ target: "Symbol", stat: true }, {
      isRegisteredSymbol
    });
  }
});

// node_modules/core-js-pure/internals/symbol-is-well-known.js
var require_symbol_is_well_known = __commonJS({
  "node_modules/core-js-pure/internals/symbol-is-well-known.js"(exports, module) {
    "use strict";
    var shared = require_shared();
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var isSymbol = require_is_symbol();
    var wellKnownSymbol = require_well_known_symbol();
    var Symbol2 = getBuiltIn("Symbol");
    var $isWellKnownSymbol = Symbol2.isWellKnownSymbol;
    var getOwnPropertyNames = getBuiltIn("Object", "getOwnPropertyNames");
    var thisSymbolValue = uncurryThis(Symbol2.prototype.valueOf);
    var WellKnownSymbolsStore = shared("wks");
    for (i = 0, symbolKeys = getOwnPropertyNames(Symbol2), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
      try {
        symbolKey = symbolKeys[i];
        if (isSymbol(Symbol2[symbolKey]))
          wellKnownSymbol(symbolKey);
      } catch (error) {
      }
    }
    var symbolKey;
    var i;
    var symbolKeys;
    var symbolKeysLength;
    module.exports = function isWellKnownSymbol(value) {
      if ($isWellKnownSymbol && $isWellKnownSymbol(value))
        return true;
      try {
        var symbol = thisSymbolValue(value);
        for (var j = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j < keysLength; j++) {
          if (WellKnownSymbolsStore[keys[j]] == symbol)
            return true;
        }
      } catch (error) {
      }
      return false;
    };
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js
var require_esnext_symbol_is_well_known_symbol = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js"() {
    "use strict";
    var $ = require_export();
    var isWellKnownSymbol = require_symbol_is_well_known();
    $({ target: "Symbol", stat: true, forced: true }, {
      isWellKnownSymbol
    });
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.matcher.js
var require_esnext_symbol_matcher = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.matcher.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("matcher");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.observable.js
var require_esnext_symbol_observable = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.observable.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("observable");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.is-registered.js
var require_esnext_symbol_is_registered = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.is-registered.js"() {
    "use strict";
    var $ = require_export();
    var isRegisteredSymbol = require_symbol_is_registered();
    $({ target: "Symbol", stat: true, name: "isRegisteredSymbol" }, {
      isRegistered: isRegisteredSymbol
    });
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js
var require_esnext_symbol_is_well_known = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js"() {
    "use strict";
    var $ = require_export();
    var isWellKnownSymbol = require_symbol_is_well_known();
    $({ target: "Symbol", stat: true, name: "isWellKnownSymbol", forced: true }, {
      isWellKnown: isWellKnownSymbol
    });
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js
var require_esnext_symbol_metadata_key = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("metadataKey");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js
var require_esnext_symbol_pattern_match = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("patternMatch");
  }
});

// node_modules/core-js-pure/modules/esnext.symbol.replace-all.js
var require_esnext_symbol_replace_all = __commonJS({
  "node_modules/core-js-pure/modules/esnext.symbol.replace-all.js"() {
    "use strict";
    var defineWellKnownSymbol = require_well_known_symbol_define();
    defineWellKnownSymbol("replaceAll");
  }
});

// node_modules/core-js-pure/full/symbol/index.js
var require_symbol4 = __commonJS({
  "node_modules/core-js-pure/full/symbol/index.js"(exports, module) {
    "use strict";
    var parent = require_symbol3();
    require_esnext_symbol_is_registered_symbol();
    require_esnext_symbol_is_well_known_symbol();
    require_esnext_symbol_matcher();
    require_esnext_symbol_observable();
    require_esnext_symbol_is_registered();
    require_esnext_symbol_is_well_known();
    require_esnext_symbol_metadata_key();
    require_esnext_symbol_pattern_match();
    require_esnext_symbol_replace_all();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/symbol/index.js
var require_symbol5 = __commonJS({
  "node_modules/core-js-pure/features/symbol/index.js"(exports, module) {
    "use strict";
    module.exports = require_symbol4();
  }
});

// node_modules/core-js-pure/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "node_modules/core-js-pure/internals/string-multibyte.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString = require_to_string();
    var requireObjectCoercible = require_require_object_coercible();
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var stringSlice = uncurryThis("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position = toIntegerOrInfinity(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position);
        return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position) : first : CONVERT_TO_STRING ? stringSlice(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module.exports = {
      // `String.prototype.codePointAt` method
      // https://tc39.es/ecma262/#sec-string.prototype.codepointat
      codeAt: createMethod(false),
      // `String.prototype.at` method
      // https://github.com/mathiasbynens/String.prototype.at
      charAt: createMethod(true)
    };
  }
});

// node_modules/core-js-pure/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "node_modules/core-js-pure/modules/es.string.iterator.js"() {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    var toString = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      });
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length)
        return createIterResultObject(void 0, true);
      point = charAt(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    });
  }
});

// node_modules/core-js-pure/es/symbol/iterator.js
var require_iterator = __commonJS({
  "node_modules/core-js-pure/es/symbol/iterator.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_object_to_string();
    require_es_string_iterator();
    require_es_symbol_iterator();
    var WrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    module.exports = WrappedWellKnownSymbolModule.f("iterator");
  }
});

// node_modules/core-js-pure/stable/symbol/iterator.js
var require_iterator2 = __commonJS({
  "node_modules/core-js-pure/stable/symbol/iterator.js"(exports, module) {
    "use strict";
    var parent = require_iterator();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/symbol/iterator.js
var require_iterator3 = __commonJS({
  "node_modules/core-js-pure/actual/symbol/iterator.js"(exports, module) {
    "use strict";
    var parent = require_iterator2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/symbol/iterator.js
var require_iterator4 = __commonJS({
  "node_modules/core-js-pure/full/symbol/iterator.js"(exports, module) {
    "use strict";
    var parent = require_iterator3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/symbol/iterator.js
var require_iterator5 = __commonJS({
  "node_modules/core-js-pure/features/symbol/iterator.js"(exports, module) {
    "use strict";
    module.exports = require_iterator4();
  }
});

// node_modules/core-js-pure/modules/es.object.get-prototype-of.js
var require_es_object_get_prototype_of = __commonJS({
  "node_modules/core-js-pure/modules/es.object.get-prototype-of.js"() {
    "use strict";
    var $ = require_export();
    var fails = require_fails();
    var toObject = require_to_object();
    var nativeGetPrototypeOf = require_object_get_prototype_of();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var FAILS_ON_PRIMITIVES = fails(function() {
      nativeGetPrototypeOf(1);
    });
    $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
      getPrototypeOf: function getPrototypeOf(it) {
        return nativeGetPrototypeOf(toObject(it));
      }
    });
  }
});

// node_modules/core-js-pure/es/object/get-prototype-of.js
var require_get_prototype_of = __commonJS({
  "node_modules/core-js-pure/es/object/get-prototype-of.js"(exports, module) {
    "use strict";
    require_es_object_get_prototype_of();
    var path = require_path();
    module.exports = path.Object.getPrototypeOf;
  }
});

// node_modules/core-js-pure/stable/object/get-prototype-of.js
var require_get_prototype_of2 = __commonJS({
  "node_modules/core-js-pure/stable/object/get-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_get_prototype_of();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/object/get-prototype-of.js
var require_get_prototype_of3 = __commonJS({
  "node_modules/core-js-pure/actual/object/get-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_get_prototype_of2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/object/get-prototype-of.js
var require_get_prototype_of4 = __commonJS({
  "node_modules/core-js-pure/full/object/get-prototype-of.js"(exports, module) {
    "use strict";
    var parent = require_get_prototype_of3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/object/get-prototype-of.js
var require_get_prototype_of5 = __commonJS({
  "node_modules/core-js-pure/features/object/get-prototype-of.js"(exports, module) {
    "use strict";
    module.exports = require_get_prototype_of4();
  }
});

// node_modules/core-js-pure/internals/array-buffer-non-extensible.js
var require_array_buffer_non_extensible = __commonJS({
  "node_modules/core-js-pure/internals/array-buffer-non-extensible.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = fails(function() {
      if (typeof ArrayBuffer == "function") {
        var buffer = new ArrayBuffer(8);
        if (Object.isExtensible(buffer))
          Object.defineProperty(buffer, "a", { value: 8 });
      }
    });
  }
});

// node_modules/core-js-pure/internals/object-is-extensible.js
var require_object_is_extensible = __commonJS({
  "node_modules/core-js-pure/internals/object-is-extensible.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isObject2 = require_is_object();
    var classof = require_classof_raw();
    var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES = fails(function() {
      $isExtensible(1);
    });
    module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
      if (!isObject2(it))
        return false;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer")
        return false;
      return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;
  }
});

// node_modules/core-js-pure/internals/freezing.js
var require_freezing = __commonJS({
  "node_modules/core-js-pure/internals/freezing.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }
});

// node_modules/core-js-pure/internals/internal-metadata.js
var require_internal_metadata = __commonJS({
  "node_modules/core-js-pure/internals/internal-metadata.js"(exports, module) {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var hiddenKeys = require_hidden_keys();
    var isObject2 = require_is_object();
    var hasOwn = require_has_own_property();
    var defineProperty = require_object_define_property().f;
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
    var isExtensible = require_object_is_extensible();
    var uid = require_uid();
    var FREEZING = require_freezing();
    var REQUIRED = false;
    var METADATA = uid("meta");
    var id = 0;
    var setMetadata = function(it) {
      defineProperty(it, METADATA, { value: {
        objectID: "O" + id++,
        // object ID
        weakData: {}
        // weak collections IDs
      } });
    };
    var fastKey = function(it, create) {
      if (!isObject2(it))
        return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!hasOwn(it, METADATA)) {
        if (!isExtensible(it))
          return "F";
        if (!create)
          return "E";
        setMetadata(it);
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function(it, create) {
      if (!hasOwn(it, METADATA)) {
        if (!isExtensible(it))
          return true;
        if (!create)
          return false;
        setMetadata(it);
      }
      return it[METADATA].weakData;
    };
    var onFreeze = function(it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
        setMetadata(it);
      return it;
    };
    var enable = function() {
      meta.enable = function() {
      };
      REQUIRED = true;
      var getOwnPropertyNames = getOwnPropertyNamesModule.f;
      var splice = uncurryThis([].splice);
      var test = {};
      test[METADATA] = 1;
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function(it) {
          var result = getOwnPropertyNames(it);
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }
          return result;
        };
        $({ target: "Object", stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
      }
    };
    var meta = module.exports = {
      enable,
      fastKey,
      getWeakData,
      onFreeze
    };
    hiddenKeys[METADATA] = true;
  }
});

// node_modules/core-js-pure/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/core-js-pure/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module) {
    "use strict";
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module.exports = function(it) {
      if (!isNullOrUndefined(it))
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js-pure/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js-pure/internals/get-iterator.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw new $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js-pure/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js-pure/internals/iterator-close.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/core-js-pure/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js-pure/internals/iterate.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind2(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw new $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js-pure/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/core-js-pure/internals/an-instance.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it))
        return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/core-js-pure/internals/collection.js
var require_collection = __commonJS({
  "node_modules/core-js-pure/internals/collection.js"(exports, module) {
    "use strict";
    var $ = require_export();
    var global2 = require_global();
    var InternalMetadataModule = require_internal_metadata();
    var fails = require_fails();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var iterate = require_iterate();
    var anInstance = require_an_instance();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var isNullOrUndefined = require_is_null_or_undefined();
    var setToStringTag = require_set_to_string_tag();
    var defineProperty = require_object_define_property().f;
    var forEach = require_array_iteration().forEach;
    var DESCRIPTORS = require_descriptors();
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
      var ADDER = IS_MAP ? "set" : "add";
      var NativeConstructor = global2[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var exported = {};
      var Constructor;
      if (!DESCRIPTORS || !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
        new NativeConstructor().entries().next();
      }))) {
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
      } else {
        Constructor = wrapper(function(target, iterable) {
          setInternalState(anInstance(target, Prototype), {
            type: CONSTRUCTOR_NAME,
            collection: new NativeConstructor()
          });
          if (!isNullOrUndefined(iterable))
            iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        forEach(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(KEY) {
          var IS_ADDER = KEY === "add" || KEY === "set";
          if (KEY in NativePrototype && !(IS_WEAK && KEY === "clear")) {
            createNonEnumerableProperty(Prototype, KEY, function(a3, b3) {
              var collection = getInternalState(this).collection;
              if (!IS_ADDER && IS_WEAK && !isObject2(a3))
                return KEY === "get" ? void 0 : false;
              var result = collection[KEY](a3 === 0 ? 0 : a3, b3);
              return IS_ADDER ? this : result;
            });
          }
        });
        IS_WEAK || defineProperty(Prototype, "size", {
          configurable: true,
          get: function() {
            return getInternalState(this).collection.size;
          }
        });
      }
      setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
      exported[CONSTRUCTOR_NAME] = Constructor;
      $({ global: true, forced: true }, exported);
      if (!IS_WEAK)
        common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };
  }
});

// node_modules/core-js-pure/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/core-js-pure/internals/define-built-ins.js"(exports, module) {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    module.exports = function(target, src, options) {
      for (var key in src) {
        if (options && options.unsafe && target[key])
          target[key] = src[key];
        else
          defineBuiltIn(target, key, src[key], options);
      }
      return target;
    };
  }
});

// node_modules/core-js-pure/internals/set-species.js
var require_set_species = __commonJS({
  "node_modules/core-js-pure/internals/set-species.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var wellKnownSymbol = require_well_known_symbol();
    var DESCRIPTORS = require_descriptors();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineBuiltInAccessor(Constructor, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// node_modules/core-js-pure/internals/collection-strong.js
var require_collection_strong = __commonJS({
  "node_modules/core-js-pure/internals/collection-strong.js"(exports, module) {
    "use strict";
    var create = require_object_create();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var defineBuiltIns = require_define_built_ins();
    var bind2 = require_function_bind_context();
    var anInstance = require_an_instance();
    var isNullOrUndefined = require_is_null_or_undefined();
    var iterate = require_iterate();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var setSpecies = require_set_species();
    var DESCRIPTORS = require_descriptors();
    var fastKey = require_internal_metadata().fastKey;
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    module.exports = {
      getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
          anInstance(that, Prototype);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            index: create(null),
            first: void 0,
            last: void 0,
            size: 0
          });
          if (!DESCRIPTORS)
            that.size = 0;
          if (!isNullOrUndefined(iterable))
            iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define = function(that, key, value) {
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          var previous, index;
          if (entry) {
            entry.value = value;
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key,
              value,
              previous: previous = state.last,
              next: void 0,
              removed: false
            };
            if (!state.first)
              state.first = entry;
            if (previous)
              previous.next = entry;
            if (DESCRIPTORS)
              state.size++;
            else
              that.size++;
            if (index !== "F")
              state.index[index] = entry;
          }
          return that;
        };
        var getEntry = function(that, key) {
          var state = getInternalState(that);
          var index = fastKey(key);
          var entry;
          if (index !== "F")
            return state.index[index];
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key === key)
              return entry;
          }
        };
        defineBuiltIns(Prototype, {
          // `{ Map, Set }.prototype.clear()` methods
          // https://tc39.es/ecma262/#sec-map.prototype.clear
          // https://tc39.es/ecma262/#sec-set.prototype.clear
          clear: function clear() {
            var that = this;
            var state = getInternalState(that);
            var entry = state.first;
            while (entry) {
              entry.removed = true;
              if (entry.previous)
                entry.previous = entry.previous.next = void 0;
              entry = entry.next;
            }
            state.first = state.last = void 0;
            state.index = create(null);
            if (DESCRIPTORS)
              state.size = 0;
            else
              that.size = 0;
          },
          // `{ Map, Set }.prototype.delete(key)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.delete
          // https://tc39.es/ecma262/#sec-set.prototype.delete
          "delete": function(key) {
            var that = this;
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev)
                prev.next = next;
              if (next)
                next.previous = prev;
              if (state.first === entry)
                state.first = next;
              if (state.last === entry)
                state.last = prev;
              if (DESCRIPTORS)
                state.size--;
              else
                that.size--;
            }
            return !!entry;
          },
          // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.foreach
          // https://tc39.es/ecma262/#sec-set.prototype.foreach
          forEach: function forEach(callbackfn) {
            var state = getInternalState(this);
            var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            var entry;
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this);
              while (entry && entry.removed)
                entry = entry.previous;
            }
          },
          // `{ Map, Set}.prototype.has(key)` methods
          // https://tc39.es/ecma262/#sec-map.prototype.has
          // https://tc39.es/ecma262/#sec-set.prototype.has
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
          // `Map.prototype.get(key)` method
          // https://tc39.es/ecma262/#sec-map.prototype.get
          get: function get3(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          // `Map.prototype.set(key, value)` method
          // https://tc39.es/ecma262/#sec-map.prototype.set
          set: function set2(key, value) {
            return define(this, key === 0 ? 0 : key, value);
          }
        } : {
          // `Set.prototype.add(value)` method
          // https://tc39.es/ecma262/#sec-set.prototype.add
          add: function add(value) {
            return define(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (DESCRIPTORS)
          defineBuiltInAccessor(Prototype, "size", {
            configurable: true,
            get: function() {
              return getInternalState(this).size;
            }
          });
        return Constructor;
      },
      setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
          setInternalState(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind,
            last: void 0
          });
        }, function() {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last;
          while (entry && entry.removed)
            entry = entry.previous;
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            state.target = void 0;
            return createIterResultObject(void 0, true);
          }
          if (kind === "keys")
            return createIterResultObject(entry.key, false);
          if (kind === "values")
            return createIterResultObject(entry.value, false);
          return createIterResultObject([entry.key, entry.value], false);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(CONSTRUCTOR_NAME);
      }
    };
  }
});

// node_modules/core-js-pure/modules/es.map.constructor.js
var require_es_map_constructor = __commonJS({
  "node_modules/core-js-pure/modules/es.map.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Map", function(init) {
      return function Map() {
        return init(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js-pure/modules/es.map.js
var require_es_map = __commonJS({
  "node_modules/core-js-pure/modules/es.map.js"() {
    "use strict";
    require_es_map_constructor();
  }
});

// node_modules/core-js-pure/internals/caller.js
var require_caller = __commonJS({
  "node_modules/core-js-pure/internals/caller.js"(exports, module) {
    "use strict";
    module.exports = function(methodName, numArgs) {
      return numArgs === 1 ? function(object, arg) {
        return object[methodName](arg);
      } : function(object, arg1, arg2) {
        return object[methodName](arg1, arg2);
      };
    };
  }
});

// node_modules/core-js-pure/internals/map-helpers.js
var require_map_helpers = __commonJS({
  "node_modules/core-js-pure/internals/map-helpers.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var caller = require_caller();
    var Map = getBuiltIn("Map");
    module.exports = {
      Map,
      set: caller("set", 2),
      get: caller("get", 1),
      has: caller("has", 1),
      remove: caller("delete", 1),
      proto: Map.prototype
    };
  }
});

// node_modules/core-js-pure/modules/es.map.group-by.js
var require_es_map_group_by = __commonJS({
  "node_modules/core-js-pure/modules/es.map.group-by.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var aCallable = require_a_callable();
    var requireObjectCoercible = require_require_object_coercible();
    var iterate = require_iterate();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var Map = MapHelpers.Map;
    var has = MapHelpers.has;
    var get3 = MapHelpers.get;
    var set2 = MapHelpers.set;
    var push = uncurryThis([].push);
    $({ target: "Map", stat: true, forced: IS_PURE }, {
      groupBy: function groupBy(items, callbackfn) {
        requireObjectCoercible(items);
        aCallable(callbackfn);
        var map = new Map();
        var k = 0;
        iterate(items, function(value) {
          var key = callbackfn(value, k++);
          if (!has(map, key))
            set2(map, key, [value]);
          else
            push(get3(map, key), value);
        });
        return map;
      }
    });
  }
});

// node_modules/core-js-pure/es/map/index.js
var require_map = __commonJS({
  "node_modules/core-js-pure/es/map/index.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_map();
    require_es_map_group_by();
    require_es_object_to_string();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Map;
  }
});

// node_modules/core-js-pure/stable/map/index.js
var require_map2 = __commonJS({
  "node_modules/core-js-pure/stable/map/index.js"(exports, module) {
    "use strict";
    var parent = require_map();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/modules/esnext.map.group-by.js
var require_esnext_map_group_by = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.group-by.js"() {
    "use strict";
    require_es_map_group_by();
  }
});

// node_modules/core-js-pure/actual/map/index.js
var require_map3 = __commonJS({
  "node_modules/core-js-pure/actual/map/index.js"(exports, module) {
    "use strict";
    var parent = require_map2();
    require_esnext_map_group_by();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/internals/collection-from.js
var require_collection_from = __commonJS({
  "node_modules/core-js-pure/internals/collection-from.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var anObject = require_an_object();
    var toObject = require_to_object();
    var iterate = require_iterate();
    module.exports = function(C, adder, ENTRY) {
      return function from(source) {
        var O = toObject(source);
        var length = arguments.length;
        var mapFn = length > 1 ? arguments[1] : void 0;
        var mapping = mapFn !== void 0;
        var boundFunction = mapping ? bind2(mapFn, length > 2 ? arguments[2] : void 0) : void 0;
        var result = new C();
        var n = 0;
        iterate(O, function(nextItem) {
          var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
          if (ENTRY)
            adder(result, anObject(entry)[0], entry[1]);
          else
            adder(result, entry);
        });
        return result;
      };
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.from.js
var require_esnext_map_from = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.from.js"() {
    "use strict";
    var $ = require_export();
    var MapHelpers = require_map_helpers();
    var createCollectionFrom = require_collection_from();
    $({ target: "Map", stat: true, forced: true }, {
      from: createCollectionFrom(MapHelpers.Map, MapHelpers.set, true)
    });
  }
});

// node_modules/core-js-pure/internals/collection-of.js
var require_collection_of = __commonJS({
  "node_modules/core-js-pure/internals/collection-of.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    module.exports = function(C, adder, ENTRY) {
      return function of() {
        var result = new C();
        var length = arguments.length;
        for (var index = 0; index < length; index++) {
          var entry = arguments[index];
          if (ENTRY)
            adder(result, anObject(entry)[0], entry[1]);
          else
            adder(result, entry);
        }
        return result;
      };
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.of.js
var require_esnext_map_of = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.of.js"() {
    "use strict";
    var $ = require_export();
    var MapHelpers = require_map_helpers();
    var createCollectionOf = require_collection_of();
    $({ target: "Map", stat: true, forced: true }, {
      of: createCollectionOf(MapHelpers.Map, MapHelpers.set, true)
    });
  }
});

// node_modules/core-js-pure/internals/a-map.js
var require_a_map = __commonJS({
  "node_modules/core-js-pure/internals/a-map.js"(exports, module) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (typeof it == "object" && "size" in it && "has" in it && "get" in it && "set" in it && "delete" in it && "entries" in it)
        return it;
      throw new $TypeError(tryToString(it) + " is not a map");
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.delete-all.js
var require_esnext_map_delete_all = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.delete-all.js"() {
    "use strict";
    var $ = require_export();
    var aMap = require_a_map();
    var remove = require_map_helpers().remove;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      deleteAll: function deleteAll() {
        var collection = aMap(this);
        var allDeleted = true;
        var wasDeleted;
        for (var k = 0, len = arguments.length; k < len; k++) {
          wasDeleted = remove(collection, arguments[k]);
          allDeleted = allDeleted && wasDeleted;
        }
        return !!allDeleted;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.emplace.js
var require_esnext_map_emplace = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.emplace.js"() {
    "use strict";
    var $ = require_export();
    var aMap = require_a_map();
    var MapHelpers = require_map_helpers();
    var get3 = MapHelpers.get;
    var has = MapHelpers.has;
    var set2 = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      emplace: function emplace(key, handler) {
        var map = aMap(this);
        var value, inserted;
        if (has(map, key)) {
          value = get3(map, key);
          if ("update" in handler) {
            value = handler.update(value, key, map);
            set2(map, key, value);
          }
          return value;
        }
        inserted = handler.insert(key, map);
        set2(map, key, inserted);
        return inserted;
      }
    });
  }
});

// node_modules/core-js-pure/internals/iterate-simple.js
var require_iterate_simple = __commonJS({
  "node_modules/core-js-pure/internals/iterate-simple.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    module.exports = function(record, fn, ITERATOR_INSTEAD_OF_RECORD) {
      var iterator = ITERATOR_INSTEAD_OF_RECORD ? record : record.iterator;
      var next = record.next;
      var step, result;
      while (!(step = call(next, iterator)).done) {
        result = fn(step.value);
        if (result !== void 0)
          return result;
      }
    };
  }
});

// node_modules/core-js-pure/internals/map-iterate.js
var require_map_iterate = __commonJS({
  "node_modules/core-js-pure/internals/map-iterate.js"(exports, module) {
    "use strict";
    var iterateSimple = require_iterate_simple();
    module.exports = function(map, fn, interruptible) {
      return interruptible ? iterateSimple(map.entries(), function(entry) {
        return fn(entry[1], entry[0]);
      }, true) : map.forEach(fn);
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.every.js
var require_esnext_map_every = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.every.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      every: function every(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        return iterate(map, function(value, key) {
          if (!boundFunction(value, key, map))
            return false;
        }, true) !== false;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.filter.js
var require_esnext_map_filter = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.filter.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var MapHelpers = require_map_helpers();
    var iterate = require_map_iterate();
    var Map = MapHelpers.Map;
    var set2 = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      filter: function filter(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var newMap = new Map();
        iterate(map, function(value, key) {
          if (boundFunction(value, key, map))
            set2(newMap, key, value);
        });
        return newMap;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.find.js
var require_esnext_map_find = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.find.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      find: function find2(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var result = iterate(map, function(value, key) {
          if (boundFunction(value, key, map))
            return { value };
        }, true);
        return result && result.value;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.find-key.js
var require_esnext_map_find_key = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.find-key.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      findKey: function findKey(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var result = iterate(map, function(value, key) {
          if (boundFunction(value, key, map))
            return { key };
        }, true);
        return result && result.key;
      }
    });
  }
});

// node_modules/core-js-pure/internals/same-value-zero.js
var require_same_value_zero = __commonJS({
  "node_modules/core-js-pure/internals/same-value-zero.js"(exports, module) {
    "use strict";
    module.exports = function(x, y) {
      return x === y || x !== x && y !== y;
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.includes.js
var require_esnext_map_includes = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.includes.js"() {
    "use strict";
    var $ = require_export();
    var sameValueZero = require_same_value_zero();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      includes: function includes(searchElement) {
        return iterate(aMap(this), function(value) {
          if (sameValueZero(value, searchElement))
            return true;
        }, true) === true;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.key-by.js
var require_esnext_map_key_by = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.key-by.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var iterate = require_iterate();
    var isCallable = require_is_callable();
    var aCallable = require_a_callable();
    var Map = require_map_helpers().Map;
    $({ target: "Map", stat: true, forced: true }, {
      keyBy: function keyBy(iterable, keyDerivative) {
        var C = isCallable(this) ? this : Map;
        var newMap = new C();
        aCallable(keyDerivative);
        var setter = aCallable(newMap.set);
        iterate(iterable, function(element) {
          call(setter, newMap, keyDerivative(element), element);
        });
        return newMap;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.key-of.js
var require_esnext_map_key_of = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.key-of.js"() {
    "use strict";
    var $ = require_export();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      keyOf: function keyOf(searchElement) {
        var result = iterate(aMap(this), function(value, key) {
          if (value === searchElement)
            return { key };
        }, true);
        return result && result.key;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.map-keys.js
var require_esnext_map_map_keys = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.map-keys.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var MapHelpers = require_map_helpers();
    var iterate = require_map_iterate();
    var Map = MapHelpers.Map;
    var set2 = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      mapKeys: function mapKeys(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var newMap = new Map();
        iterate(map, function(value, key) {
          set2(newMap, boundFunction(value, key, map), value);
        });
        return newMap;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.map-values.js
var require_esnext_map_map_values = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.map-values.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var MapHelpers = require_map_helpers();
    var iterate = require_map_iterate();
    var Map = MapHelpers.Map;
    var set2 = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      mapValues: function mapValues(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        var newMap = new Map();
        iterate(map, function(value, key) {
          set2(newMap, key, boundFunction(value, key, map));
        });
        return newMap;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.merge.js
var require_esnext_map_merge = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.merge.js"() {
    "use strict";
    var $ = require_export();
    var aMap = require_a_map();
    var iterate = require_iterate();
    var set2 = require_map_helpers().set;
    $({ target: "Map", proto: true, real: true, arity: 1, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      merge: function merge(iterable) {
        var map = aMap(this);
        var argumentsLength = arguments.length;
        var i = 0;
        while (i < argumentsLength) {
          iterate(arguments[i++], function(key, value) {
            set2(map, key, value);
          }, { AS_ENTRIES: true });
        }
        return map;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.reduce.js
var require_esnext_map_reduce = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.reduce.js"() {
    "use strict";
    var $ = require_export();
    var aCallable = require_a_callable();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    var $TypeError = TypeError;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      reduce: function reduce(callbackfn) {
        var map = aMap(this);
        var noInitial = arguments.length < 2;
        var accumulator = noInitial ? void 0 : arguments[1];
        aCallable(callbackfn);
        iterate(map, function(value, key) {
          if (noInitial) {
            noInitial = false;
            accumulator = value;
          } else {
            accumulator = callbackfn(accumulator, value, key, map);
          }
        });
        if (noInitial)
          throw new $TypeError("Reduce of empty map with no initial value");
        return accumulator;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.some.js
var require_esnext_map_some = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.some.js"() {
    "use strict";
    var $ = require_export();
    var bind2 = require_function_bind_context();
    var aMap = require_a_map();
    var iterate = require_map_iterate();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      some: function some(callbackfn) {
        var map = aMap(this);
        var boundFunction = bind2(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        return iterate(map, function(value, key) {
          if (boundFunction(value, key, map))
            return true;
        }, true) === true;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.update.js
var require_esnext_map_update = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.update.js"() {
    "use strict";
    var $ = require_export();
    var aCallable = require_a_callable();
    var aMap = require_a_map();
    var MapHelpers = require_map_helpers();
    var $TypeError = TypeError;
    var get3 = MapHelpers.get;
    var has = MapHelpers.has;
    var set2 = MapHelpers.set;
    $({ target: "Map", proto: true, real: true, forced: true }, {
      update: function update(key, callback) {
        var map = aMap(this);
        var length = arguments.length;
        aCallable(callback);
        var isPresentInMap = has(map, key);
        if (!isPresentInMap && length < 3) {
          throw new $TypeError("Updating absent value");
        }
        var value = isPresentInMap ? get3(map, key) : aCallable(length > 2 ? arguments[2] : void 0)(key, map);
        set2(map, key, callback(value, key, map));
        return map;
      }
    });
  }
});

// node_modules/core-js-pure/internals/map-upsert.js
var require_map_upsert = __commonJS({
  "node_modules/core-js-pure/internals/map-upsert.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var aCallable = require_a_callable();
    var isCallable = require_is_callable();
    var anObject = require_an_object();
    var $TypeError = TypeError;
    module.exports = function upsert(key, updateFn) {
      var map = anObject(this);
      var get3 = aCallable(map.get);
      var has = aCallable(map.has);
      var set2 = aCallable(map.set);
      var insertFn = arguments.length > 2 ? arguments[2] : void 0;
      var value;
      if (!isCallable(updateFn) && !isCallable(insertFn)) {
        throw new $TypeError("At least one callback required");
      }
      if (call(has, map, key)) {
        value = call(get3, map, key);
        if (isCallable(updateFn)) {
          value = updateFn(value);
          call(set2, map, key, value);
        }
      } else if (isCallable(insertFn)) {
        value = insertFn();
        call(set2, map, key, value);
      }
      return value;
    };
  }
});

// node_modules/core-js-pure/modules/esnext.map.upsert.js
var require_esnext_map_upsert = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.upsert.js"() {
    "use strict";
    var $ = require_export();
    var upsert = require_map_upsert();
    $({ target: "Map", proto: true, real: true, forced: true }, {
      upsert
    });
  }
});

// node_modules/core-js-pure/modules/esnext.map.update-or-insert.js
var require_esnext_map_update_or_insert = __commonJS({
  "node_modules/core-js-pure/modules/esnext.map.update-or-insert.js"() {
    "use strict";
    var $ = require_export();
    var upsert = require_map_upsert();
    $({ target: "Map", proto: true, real: true, name: "upsert", forced: true }, {
      updateOrInsert: upsert
    });
  }
});

// node_modules/core-js-pure/full/map/index.js
var require_map4 = __commonJS({
  "node_modules/core-js-pure/full/map/index.js"(exports, module) {
    "use strict";
    var parent = require_map3();
    require_esnext_map_from();
    require_esnext_map_of();
    require_esnext_map_delete_all();
    require_esnext_map_emplace();
    require_esnext_map_every();
    require_esnext_map_filter();
    require_esnext_map_find();
    require_esnext_map_find_key();
    require_esnext_map_includes();
    require_esnext_map_key_by();
    require_esnext_map_key_of();
    require_esnext_map_map_keys();
    require_esnext_map_map_values();
    require_esnext_map_merge();
    require_esnext_map_reduce();
    require_esnext_map_some();
    require_esnext_map_update();
    require_esnext_map_upsert();
    require_esnext_map_update_or_insert();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/map/index.js
var require_map5 = __commonJS({
  "node_modules/core-js-pure/features/map/index.js"(exports, module) {
    "use strict";
    module.exports = require_map4();
  }
});

// node_modules/core-js-pure/modules/es.array.index-of.js
var require_es_array_index_of = __commonJS({
  "node_modules/core-js-pure/modules/es.array.index-of.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this_clause();
    var $indexOf = require_array_includes().indexOf;
    var arrayMethodIsStrict = require_array_method_is_strict();
    var nativeIndexOf = uncurryThis([].indexOf);
    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
    var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
    $({ target: "Array", proto: true, forced: FORCED }, {
      indexOf: function indexOf(searchElement) {
        var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
        return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/index-of.js
var require_index_of = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/index-of.js"(exports, module) {
    "use strict";
    require_es_array_index_of();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "indexOf");
  }
});

// node_modules/core-js-pure/es/instance/index-of.js
var require_index_of2 = __commonJS({
  "node_modules/core-js-pure/es/instance/index-of.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_index_of();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.indexOf;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/index-of.js
var require_index_of3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/index-of.js"(exports, module) {
    "use strict";
    var parent = require_index_of2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/instance/index-of.js
var require_index_of4 = __commonJS({
  "node_modules/core-js-pure/actual/instance/index-of.js"(exports, module) {
    "use strict";
    var parent = require_index_of3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/index-of.js
var require_index_of5 = __commonJS({
  "node_modules/core-js-pure/full/instance/index-of.js"(exports, module) {
    "use strict";
    var parent = require_index_of4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/index-of.js
var require_index_of6 = __commonJS({
  "node_modules/core-js-pure/features/instance/index-of.js"(exports, module) {
    "use strict";
    module.exports = require_index_of5();
  }
});

// node_modules/core-js-pure/actual/reflect/construct.js
var require_construct4 = __commonJS({
  "node_modules/core-js-pure/actual/reflect/construct.js"(exports, module) {
    "use strict";
    var parent = require_construct2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/reflect/construct.js
var require_construct5 = __commonJS({
  "node_modules/core-js-pure/full/reflect/construct.js"(exports, module) {
    "use strict";
    var parent = require_construct4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/reflect/construct.js
var require_construct6 = __commonJS({
  "node_modules/core-js-pure/features/reflect/construct.js"(exports, module) {
    "use strict";
    module.exports = require_construct5();
  }
});

// node_modules/core-js-pure/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/core-js-pure/internals/array-set-length.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/core-js-pure/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/core-js-pure/modules/es.array.push.js"() {
    "use strict";
    var $ = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/push.js
var require_push = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/push.js"(exports, module) {
    "use strict";
    require_es_array_push();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "push");
  }
});

// node_modules/core-js-pure/es/instance/push.js
var require_push2 = __commonJS({
  "node_modules/core-js-pure/es/instance/push.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_push();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.push;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.push ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/push.js
var require_push3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/push.js"(exports, module) {
    "use strict";
    var parent = require_push2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/instance/push.js
var require_push4 = __commonJS({
  "node_modules/core-js-pure/actual/instance/push.js"(exports, module) {
    "use strict";
    var parent = require_push3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/push.js
var require_push5 = __commonJS({
  "node_modules/core-js-pure/full/instance/push.js"(exports, module) {
    "use strict";
    var parent = require_push4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/push.js
var require_push6 = __commonJS({
  "node_modules/core-js-pure/features/instance/push.js"(exports, module) {
    "use strict";
    module.exports = require_push5();
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js
var require_set_prototype_of6 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/set-prototype-of.js"(exports, module) {
    module.exports = require_set_prototype_of2();
  }
});

// node_modules/core-js-pure/modules/es.array.slice.js
var require_es_array_slice = __commonJS({
  "node_modules/core-js-pure/modules/es.array.slice.js"() {
    "use strict";
    var $ = require_export();
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject2 = require_is_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var toIndexedObject = require_to_indexed_object();
    var createProperty = require_create_property();
    var wellKnownSymbol = require_well_known_symbol();
    var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
    var nativeSlice = require_array_slice();
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    var max = Math.max;
    $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      slice: function slice(start, end) {
        var O = toIndexedObject(this);
        var length = lengthOfArrayLike(O);
        var k = toAbsoluteIndex(start, length);
        var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
        var Constructor, result, n;
        if (isArray(O)) {
          Constructor = O.constructor;
          if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
            Constructor = void 0;
          } else if (isObject2(Constructor)) {
            Constructor = Constructor[SPECIES];
            if (Constructor === null)
              Constructor = void 0;
          }
          if (Constructor === $Array || Constructor === void 0) {
            return nativeSlice(O, k, fin);
          }
        }
        result = new (Constructor === void 0 ? $Array : Constructor)(max(fin - k, 0));
        for (n = 0; k < fin; k++, n++)
          if (k in O)
            createProperty(result, n, O[k]);
        result.length = n;
        return result;
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/slice.js
var require_slice = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/slice.js"(exports, module) {
    "use strict";
    require_es_array_slice();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "slice");
  }
});

// node_modules/core-js-pure/es/instance/slice.js
var require_slice2 = __commonJS({
  "node_modules/core-js-pure/es/instance/slice.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_slice();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.slice;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/slice.js
var require_slice3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/slice.js"(exports, module) {
    "use strict";
    var parent = require_slice2();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js
var require_slice4 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"(exports, module) {
    module.exports = require_slice3();
  }
});

// node_modules/core-js-pure/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js-pure/internals/own-keys.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js-pure/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js-pure/internals/copy-constructor-properties.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js-pure/internals/install-error-cause.js
var require_install_error_cause = __commonJS({
  "node_modules/core-js-pure/internals/install-error-cause.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    module.exports = function(O, options) {
      if (isObject2(options) && "cause" in options) {
        createNonEnumerableProperty(O, "cause", options.cause);
      }
    };
  }
});

// node_modules/core-js-pure/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/core-js-pure/internals/error-stack-clear.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var $Error = Error;
    var replace = uncurryThis("".replace);
    var TEST = function(arg) {
      return String(new $Error(arg).stack);
    }("zxcasd");
    var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
    var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace) {
        while (dropEntries--)
          stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      }
      return stack;
    };
  }
});

// node_modules/core-js-pure/internals/error-stack-installable.js
var require_error_stack_installable = __commonJS({
  "node_modules/core-js-pure/internals/error-stack-installable.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = !fails(function() {
      var error = new Error("a");
      if (!("stack" in error))
        return true;
      Object.defineProperty(error, "stack", createPropertyDescriptor(1, 7));
      return error.stack !== 7;
    });
  }
});

// node_modules/core-js-pure/internals/error-stack-install.js
var require_error_stack_install = __commonJS({
  "node_modules/core-js-pure/internals/error-stack-install.js"(exports, module) {
    "use strict";
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var clearErrorStack = require_error_stack_clear();
    var ERROR_STACK_INSTALLABLE = require_error_stack_installable();
    var captureStackTrace = Error.captureStackTrace;
    module.exports = function(error, C, stack, dropEntries) {
      if (ERROR_STACK_INSTALLABLE) {
        if (captureStackTrace)
          captureStackTrace(error, C);
        else
          createNonEnumerableProperty(error, "stack", clearErrorStack(stack, dropEntries));
      }
    };
  }
});

// node_modules/core-js-pure/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/core-js-pure/internals/normalize-string-argument.js"(exports, module) {
    "use strict";
    var toString = require_to_string();
    module.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/core-js-pure/modules/es.aggregate-error.constructor.js
var require_es_aggregate_error_constructor = __commonJS({
  "node_modules/core-js-pure/modules/es.aggregate-error.constructor.js"() {
    "use strict";
    var $ = require_export();
    var isPrototypeOf = require_object_is_prototype_of();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var copyConstructorProperties = require_copy_constructor_properties();
    var create = require_object_create();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    var installErrorCause = require_install_error_cause();
    var installErrorStack = require_error_stack_install();
    var iterate = require_iterate();
    var normalizeStringArgument = require_normalize_string_argument();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Error = Error;
    var push = [].push;
    var $AggregateError = function AggregateError(errors, message) {
      var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
      var that;
      if (setPrototypeOf) {
        that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
      } else {
        that = isInstance ? this : create(AggregateErrorPrototype);
        createNonEnumerableProperty(that, TO_STRING_TAG, "Error");
      }
      if (message !== void 0)
        createNonEnumerableProperty(that, "message", normalizeStringArgument(message));
      installErrorStack(that, $AggregateError, that.stack, 1);
      if (arguments.length > 2)
        installErrorCause(that, arguments[2]);
      var errorsArray = [];
      iterate(errors, push, { that: errorsArray });
      createNonEnumerableProperty(that, "errors", errorsArray);
      return that;
    };
    if (setPrototypeOf)
      setPrototypeOf($AggregateError, $Error);
    else
      copyConstructorProperties($AggregateError, $Error, { name: true });
    var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
      constructor: createPropertyDescriptor(1, $AggregateError),
      message: createPropertyDescriptor(1, ""),
      name: createPropertyDescriptor(1, "AggregateError")
    });
    $({ global: true, constructor: true, arity: 2 }, {
      AggregateError: $AggregateError
    });
  }
});

// node_modules/core-js-pure/modules/es.aggregate-error.js
var require_es_aggregate_error = __commonJS({
  "node_modules/core-js-pure/modules/es.aggregate-error.js"() {
    "use strict";
    require_es_aggregate_error_constructor();
  }
});

// node_modules/core-js-pure/internals/species-constructor.js
var require_species_constructor = __commonJS({
  "node_modules/core-js-pure/internals/species-constructor.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var aConstructor = require_a_constructor();
    var isNullOrUndefined = require_is_null_or_undefined();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function(O, defaultConstructor) {
      var C = anObject(O).constructor;
      var S;
      return C === void 0 || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
    };
  }
});

// node_modules/core-js-pure/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/core-js-pure/internals/validate-arguments-length.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    module.exports = function(passed, required) {
      if (passed < required)
        throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/core-js-pure/internals/engine-is-ios.js
var require_engine_is_ios = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-ios.js"(exports, module) {
    "use strict";
    var userAgent = require_engine_user_agent();
    module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);
  }
});

// node_modules/core-js-pure/internals/task.js
var require_task = __commonJS({
  "node_modules/core-js-pure/internals/task.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var apply = require_function_apply();
    var bind2 = require_function_bind_context();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var fails = require_fails();
    var html = require_html();
    var arraySlice = require_array_slice();
    var createElement = require_document_create_element();
    var validateArgumentsLength = require_validate_arguments_length();
    var IS_IOS = require_engine_is_ios();
    var IS_NODE = require_engine_is_node();
    var set2 = global2.setImmediate;
    var clear = global2.clearImmediate;
    var process2 = global2.process;
    var Dispatch = global2.Dispatch;
    var Function2 = global2.Function;
    var MessageChannel = global2.MessageChannel;
    var String2 = global2.String;
    var counter = 0;
    var queue = {};
    var ONREADYSTATECHANGE = "onreadystatechange";
    var $location;
    var defer;
    var channel;
    var port;
    fails(function() {
      $location = global2.location;
    });
    var run2 = function(id) {
      if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var runner = function(id) {
      return function() {
        run2(id);
      };
    };
    var eventListener = function(event) {
      run2(event.data);
    };
    var globalPostMessageDefer = function(id) {
      global2.postMessage(String2(id), $location.protocol + "//" + $location.host);
    };
    if (!set2 || !clear) {
      set2 = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function2(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
          apply(fn, void 0, args);
        };
        defer(counter);
        return counter;
      };
      clear = function clearImmediate(id) {
        delete queue[id];
      };
      if (IS_NODE) {
        defer = function(id) {
          process2.nextTick(runner(id));
        };
      } else if (Dispatch && Dispatch.now) {
        defer = function(id) {
          Dispatch.now(runner(id));
        };
      } else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind2(port.postMessage, port);
      } else if (global2.addEventListener && isCallable(global2.postMessage) && !global2.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global2.addEventListener("message", eventListener, false);
      } else if (ONREADYSTATECHANGE in createElement("script")) {
        defer = function(id) {
          html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run2(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(runner(id), 0);
        };
      }
    }
    module.exports = {
      set: set2,
      clear
    };
  }
});

// node_modules/core-js-pure/internals/safe-get-built-in.js
var require_safe_get_built_in = __commonJS({
  "node_modules/core-js-pure/internals/safe-get-built-in.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var DESCRIPTORS = require_descriptors();
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    module.exports = function(name) {
      if (!DESCRIPTORS)
        return global2[name];
      var descriptor = getOwnPropertyDescriptor(global2, name);
      return descriptor && descriptor.value;
    };
  }
});

// node_modules/core-js-pure/internals/queue.js
var require_queue = __commonJS({
  "node_modules/core-js-pure/internals/queue.js"(exports, module) {
    "use strict";
    var Queue = function() {
      this.head = null;
      this.tail = null;
    };
    Queue.prototype = {
      add: function(item) {
        var entry = { item, next: null };
        var tail = this.tail;
        if (tail)
          tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
      },
      get: function() {
        var entry = this.head;
        if (entry) {
          var next = this.head = entry.next;
          if (next === null)
            this.tail = null;
          return entry.item;
        }
      }
    };
    module.exports = Queue;
  }
});

// node_modules/core-js-pure/internals/engine-is-ios-pebble.js
var require_engine_is_ios_pebble = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-ios-pebble.js"(exports, module) {
    "use strict";
    var userAgent = require_engine_user_agent();
    module.exports = /ipad|iphone|ipod/i.test(userAgent) && typeof Pebble != "undefined";
  }
});

// node_modules/core-js-pure/internals/engine-is-webos-webkit.js
var require_engine_is_webos_webkit = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-webos-webkit.js"(exports, module) {
    "use strict";
    var userAgent = require_engine_user_agent();
    module.exports = /web0s(?!.*chrome)/i.test(userAgent);
  }
});

// node_modules/core-js-pure/internals/microtask.js
var require_microtask = __commonJS({
  "node_modules/core-js-pure/internals/microtask.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var safeGetBuiltIn = require_safe_get_built_in();
    var bind2 = require_function_bind_context();
    var macrotask = require_task().set;
    var Queue = require_queue();
    var IS_IOS = require_engine_is_ios();
    var IS_IOS_PEBBLE = require_engine_is_ios_pebble();
    var IS_WEBOS_WEBKIT = require_engine_is_webos_webkit();
    var IS_NODE = require_engine_is_node();
    var MutationObserver = global2.MutationObserver || global2.WebKitMutationObserver;
    var document2 = global2.document;
    var process2 = global2.process;
    var Promise2 = global2.Promise;
    var microtask = safeGetBuiltIn("queueMicrotask");
    var notify;
    var toggle;
    var node;
    var promise;
    var then;
    if (!microtask) {
      queue = new Queue();
      flush = function() {
        var parent, fn;
        if (IS_NODE && (parent = process2.domain))
          parent.exit();
        while (fn = queue.get())
          try {
            fn();
          } catch (error) {
            if (queue.head)
              notify();
            throw error;
          }
        if (parent)
          parent.enter();
      };
      if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document2) {
        toggle = true;
        node = document2.createTextNode("");
        new MutationObserver(flush).observe(node, { characterData: true });
        notify = function() {
          node.data = toggle = !toggle;
        };
      } else if (!IS_IOS_PEBBLE && Promise2 && Promise2.resolve) {
        promise = Promise2.resolve(void 0);
        promise.constructor = Promise2;
        then = bind2(promise.then, promise);
        notify = function() {
          then(flush);
        };
      } else if (IS_NODE) {
        notify = function() {
          process2.nextTick(flush);
        };
      } else {
        macrotask = bind2(macrotask, global2);
        notify = function() {
          macrotask(flush);
        };
      }
      microtask = function(fn) {
        if (!queue.head)
          notify();
        queue.add(fn);
      };
    }
    var queue;
    var flush;
    module.exports = microtask;
  }
});

// node_modules/core-js-pure/internals/host-report-errors.js
var require_host_report_errors = __commonJS({
  "node_modules/core-js-pure/internals/host-report-errors.js"(exports, module) {
    "use strict";
    module.exports = function(a3, b3) {
      try {
        arguments.length === 1 ? console.error(a3) : console.error(a3, b3);
      } catch (error) {
      }
    };
  }
});

// node_modules/core-js-pure/internals/perform.js
var require_perform = __commonJS({
  "node_modules/core-js-pure/internals/perform.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return { error: false, value: exec() };
      } catch (error) {
        return { error: true, value: error };
      }
    };
  }
});

// node_modules/core-js-pure/internals/promise-native-constructor.js
var require_promise_native_constructor = __commonJS({
  "node_modules/core-js-pure/internals/promise-native-constructor.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    module.exports = global2.Promise;
  }
});

// node_modules/core-js-pure/internals/engine-is-deno.js
var require_engine_is_deno = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-deno.js"(exports, module) {
    "use strict";
    module.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
  }
});

// node_modules/core-js-pure/internals/engine-is-browser.js
var require_engine_is_browser = __commonJS({
  "node_modules/core-js-pure/internals/engine-is-browser.js"(exports, module) {
    "use strict";
    var IS_DENO = require_engine_is_deno();
    var IS_NODE = require_engine_is_node();
    module.exports = !IS_DENO && !IS_NODE && typeof window == "object" && typeof document == "object";
  }
});

// node_modules/core-js-pure/internals/promise-constructor-detection.js
var require_promise_constructor_detection = __commonJS({
  "node_modules/core-js-pure/internals/promise-constructor-detection.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var NativePromiseConstructor = require_promise_native_constructor();
    var isCallable = require_is_callable();
    var isForced = require_is_forced();
    var inspectSource = require_inspect_source();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_BROWSER = require_engine_is_browser();
    var IS_DENO = require_engine_is_deno();
    var IS_PURE = require_is_pure();
    var V8_VERSION = require_engine_v8_version();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var SPECIES = wellKnownSymbol("species");
    var SUBCLASSING = false;
    var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global2.PromiseRejectionEvent);
    var FORCED_PROMISE_CONSTRUCTOR = isForced("Promise", function() {
      var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
      var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
      if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
        return true;
      if (IS_PURE && !(NativePromisePrototype["catch"] && NativePromisePrototype["finally"]))
        return true;
      if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
        var promise = new NativePromiseConstructor(function(resolve) {
          resolve(1);
        });
        var FakePromise = function(exec) {
          exec(function() {
          }, function() {
          });
        };
        var constructor = promise.constructor = {};
        constructor[SPECIES] = FakePromise;
        SUBCLASSING = promise.then(function() {
        }) instanceof FakePromise;
        if (!SUBCLASSING)
          return true;
      }
      return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
    });
    module.exports = {
      CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
      REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
      SUBCLASSING
    };
  }
});

// node_modules/core-js-pure/internals/new-promise-capability.js
var require_new_promise_capability = __commonJS({
  "node_modules/core-js-pure/internals/new-promise-capability.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var $TypeError = TypeError;
    var PromiseCapability = function(C) {
      var resolve, reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== void 0 || reject !== void 0)
          throw new $TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aCallable(resolve);
      this.reject = aCallable(reject);
    };
    module.exports.f = function(C) {
      return new PromiseCapability(C);
    };
  }
});

// node_modules/core-js-pure/modules/es.promise.constructor.js
var require_es_promise_constructor = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.constructor.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var IS_NODE = require_engine_is_node();
    var global2 = require_global();
    var call = require_function_call();
    var defineBuiltIn = require_define_built_in();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var setSpecies = require_set_species();
    var aCallable = require_a_callable();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var anInstance = require_an_instance();
    var speciesConstructor = require_species_constructor();
    var task = require_task().set;
    var microtask = require_microtask();
    var hostReportErrors = require_host_report_errors();
    var perform = require_perform();
    var Queue = require_queue();
    var InternalStateModule = require_internal_state();
    var NativePromiseConstructor = require_promise_native_constructor();
    var PromiseConstructorDetection = require_promise_constructor_detection();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var PROMISE = "Promise";
    var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
    var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
    var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
    var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
    var setInternalState = InternalStateModule.set;
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var PromiseConstructor = NativePromiseConstructor;
    var PromisePrototype = NativePromisePrototype;
    var TypeError2 = global2.TypeError;
    var document2 = global2.document;
    var process2 = global2.process;
    var newPromiseCapability = newPromiseCapabilityModule.f;
    var newGenericPromiseCapability = newPromiseCapability;
    var DISPATCH_EVENT = !!(document2 && document2.createEvent && global2.dispatchEvent);
    var UNHANDLED_REJECTION = "unhandledrejection";
    var REJECTION_HANDLED = "rejectionhandled";
    var PENDING = 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    var HANDLED = 1;
    var UNHANDLED = 2;
    var Internal;
    var OwnPromiseCapability;
    var PromiseWrapper;
    var nativeThen;
    var isThenable = function(it) {
      var then;
      return isObject2(it) && isCallable(then = it.then) ? then : false;
    };
    var callReaction = function(reaction, state) {
      var value = state.value;
      var ok = state.state === FULFILLED;
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED)
              onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true)
            result = value;
          else {
            if (domain)
              domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(new TypeError2("Promise-chain cycle"));
          } else if (then = isThenable(result)) {
            call(then, result, resolve, reject);
          } else
            resolve(result);
        } else
          reject(value);
      } catch (error) {
        if (domain && !exited)
          domain.exit();
        reject(error);
      }
    };
    var notify = function(state, isReject) {
      if (state.notified)
        return;
      state.notified = true;
      microtask(function() {
        var reactions = state.reactions;
        var reaction;
        while (reaction = reactions.get()) {
          callReaction(reaction, state);
        }
        state.notified = false;
        if (isReject && !state.rejection)
          onUnhandled(state);
      });
    };
    var dispatchEvent = function(name, promise, reason) {
      var event, handler;
      if (DISPATCH_EVENT) {
        event = document2.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        global2.dispatchEvent(event);
      } else
        event = { promise, reason };
      if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global2["on" + name]))
        handler(event);
      else if (name === UNHANDLED_REJECTION)
        hostReportErrors("Unhandled promise rejection", reason);
    };
    var onUnhandled = function(state) {
      call(task, global2, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
          result = perform(function() {
            if (IS_NODE) {
              process2.emit("unhandledRejection", value, promise);
            } else
              dispatchEvent(UNHANDLED_REJECTION, promise, value);
          });
          state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
          if (result.error)
            throw result.value;
        }
      });
    };
    var isUnhandled = function(state) {
      return state.rejection !== HANDLED && !state.parent;
    };
    var onHandleUnhandled = function(state) {
      call(task, global2, function() {
        var promise = state.facade;
        if (IS_NODE) {
          process2.emit("rejectionHandled", promise);
        } else
          dispatchEvent(REJECTION_HANDLED, promise, state.value);
      });
    };
    var bind2 = function(fn, state, unwrap) {
      return function(value) {
        fn(state, value, unwrap);
      };
    };
    var internalReject = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      state.value = value;
      state.state = REJECTED;
      notify(state, true);
    };
    var internalResolve = function(state, value, unwrap) {
      if (state.done)
        return;
      state.done = true;
      if (unwrap)
        state = unwrap;
      try {
        if (state.facade === value)
          throw new TypeError2("Promise can't be resolved itself");
        var then = isThenable(value);
        if (then) {
          microtask(function() {
            var wrapper = { done: false };
            try {
              call(
                then,
                value,
                bind2(internalResolve, wrapper, state),
                bind2(internalReject, wrapper, state)
              );
            } catch (error) {
              internalReject(wrapper, error, state);
            }
          });
        } else {
          state.value = value;
          state.state = FULFILLED;
          notify(state, false);
        }
      } catch (error) {
        internalReject({ done: false }, error, state);
      }
    };
    if (FORCED_PROMISE_CONSTRUCTOR) {
      PromiseConstructor = function Promise2(executor) {
        anInstance(this, PromisePrototype);
        aCallable(executor);
        call(Internal, this);
        var state = getInternalPromiseState(this);
        try {
          executor(bind2(internalResolve, state), bind2(internalReject, state));
        } catch (error) {
          internalReject(state, error);
        }
      };
      PromisePrototype = PromiseConstructor.prototype;
      Internal = function Promise2(executor) {
        setInternalState(this, {
          type: PROMISE,
          done: false,
          notified: false,
          parent: false,
          reactions: new Queue(),
          rejection: false,
          state: PENDING,
          value: void 0
        });
      };
      Internal.prototype = defineBuiltIn(PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE ? process2.domain : void 0;
        if (state.state === PENDING)
          state.reactions.add(reaction);
        else
          microtask(function() {
            callReaction(reaction, state);
          });
        return reaction.promise;
      });
      OwnPromiseCapability = function() {
        var promise = new Internal();
        var state = getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = bind2(internalResolve, state);
        this.reject = bind2(internalReject, state);
      };
      newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
        return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
      };
      if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
        nativeThen = NativePromisePrototype.then;
        if (!NATIVE_PROMISE_SUBCLASSING) {
          defineBuiltIn(NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function(resolve, reject) {
              call(nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
          }, { unsafe: true });
        }
        try {
          delete NativePromisePrototype.constructor;
        } catch (error) {
        }
        if (setPrototypeOf) {
          setPrototypeOf(NativePromisePrototype, PromisePrototype);
        }
      }
    }
    $({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      Promise: PromiseConstructor
    });
    setToStringTag(PromiseConstructor, PROMISE, false, true);
    setSpecies(PROMISE);
  }
});

// node_modules/core-js-pure/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = __commonJS({
  "node_modules/core-js-pure/internals/check-correctness-of-iteration.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    var SAFE_CLOSING = false;
    try {
      called = 0;
      iteratorWithReturn = {
        next: function() {
          return { done: !!called++ };
        },
        "return": function() {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR] = function() {
        return this;
      };
      Array.from(iteratorWithReturn, function() {
        throw 2;
      });
    } catch (error) {
    }
    var called;
    var iteratorWithReturn;
    module.exports = function(exec, SKIP_CLOSING) {
      try {
        if (!SKIP_CLOSING && !SAFE_CLOSING)
          return false;
      } catch (error) {
        return false;
      }
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR] = function() {
          return {
            next: function() {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) {
      }
      return ITERATION_SUPPORT;
    };
  }
});

// node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js
var require_promise_statics_incorrect_iteration = __commonJS({
  "node_modules/core-js-pure/internals/promise-statics-incorrect-iteration.js"(exports, module) {
    "use strict";
    var NativePromiseConstructor = require_promise_native_constructor();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function(iterable) {
      NativePromiseConstructor.all(iterable).then(void 0, function() {
      });
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.all.js
var require_es_promise_all = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.all.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call($promiseResolve, C, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = value;
              --remaining || resolve(values);
            }, reject);
          });
          --remaining || resolve(values);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.catch.js
var require_es_promise_catch = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.catch.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var NativePromiseConstructor = require_promise_native_constructor();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var defineBuiltIn = require_define_built_in();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    $({ target: "Promise", proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
      "catch": function(onRejected) {
        return this.then(void 0, onRejected);
      }
    });
    if (!IS_PURE && isCallable(NativePromiseConstructor)) {
      method = getBuiltIn("Promise").prototype["catch"];
      if (NativePromisePrototype["catch"] !== method) {
        defineBuiltIn(NativePromisePrototype, "catch", method, { unsafe: true });
      }
    }
    var method;
  }
});

// node_modules/core-js-pure/modules/es.promise.race.js
var require_es_promise_race = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.race.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var reject = capability.reject;
        var result = perform(function() {
          var $promiseResolve = aCallable(C.resolve);
          iterate(iterable, function(promise) {
            call($promiseResolve, C, promise).then(capability.resolve, reject);
          });
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.reject.js
var require_es_promise_reject = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.reject.js"() {
    "use strict";
    var $ = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    $({ target: "Promise", stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
      reject: function reject(r) {
        var capability = newPromiseCapabilityModule.f(this);
        var capabilityReject = capability.reject;
        capabilityReject(r);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/internals/promise-resolve.js
var require_promise_resolve = __commonJS({
  "node_modules/core-js-pure/internals/promise-resolve.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var isObject2 = require_is_object();
    var newPromiseCapability = require_new_promise_capability();
    module.exports = function(C, x) {
      anObject(C);
      if (isObject2(x) && x.constructor === C)
        return x;
      var promiseCapability = newPromiseCapability.f(C);
      var resolve = promiseCapability.resolve;
      resolve(x);
      return promiseCapability.promise;
    };
  }
});

// node_modules/core-js-pure/modules/es.promise.resolve.js
var require_es_promise_resolve = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.resolve.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var IS_PURE = require_is_pure();
    var NativePromiseConstructor = require_promise_native_constructor();
    var FORCED_PROMISE_CONSTRUCTOR = require_promise_constructor_detection().CONSTRUCTOR;
    var promiseResolve = require_promise_resolve();
    var PromiseConstructorWrapper = getBuiltIn("Promise");
    var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;
    $({ target: "Promise", stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
      resolve: function resolve(x) {
        return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.js
var require_es_promise = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.js"() {
    "use strict";
    require_es_promise_constructor();
    require_es_promise_all();
    require_es_promise_catch();
    require_es_promise_race();
    require_es_promise_reject();
    require_es_promise_resolve();
  }
});

// node_modules/core-js-pure/modules/es.promise.all-settled.js
var require_es_promise_all_settled = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.all-settled.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      allSettled: function allSettled(iterable) {
        var C = this;
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var promiseResolve = aCallable(C.resolve);
          var values = [];
          var counter = 0;
          var remaining = 1;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyCalled = false;
            remaining++;
            call(promiseResolve, C, promise).then(function(value) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = { status: "fulfilled", value };
              --remaining || resolve(values);
            }, function(error) {
              if (alreadyCalled)
                return;
              alreadyCalled = true;
              values[index] = { status: "rejected", reason: error };
              --remaining || resolve(values);
            });
          });
          --remaining || resolve(values);
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.any.js
var require_es_promise_any = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.any.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var aCallable = require_a_callable();
    var getBuiltIn = require_get_built_in();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    var iterate = require_iterate();
    var PROMISE_STATICS_INCORRECT_ITERATION = require_promise_statics_incorrect_iteration();
    var PROMISE_ANY_ERROR = "No one promise resolved";
    $({ target: "Promise", stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
      any: function any(iterable) {
        var C = this;
        var AggregateError = getBuiltIn("AggregateError");
        var capability = newPromiseCapabilityModule.f(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = perform(function() {
          var promiseResolve = aCallable(C.resolve);
          var errors = [];
          var counter = 0;
          var remaining = 1;
          var alreadyResolved = false;
          iterate(iterable, function(promise) {
            var index = counter++;
            var alreadyRejected = false;
            remaining++;
            call(promiseResolve, C, promise).then(function(value) {
              if (alreadyRejected || alreadyResolved)
                return;
              alreadyResolved = true;
              resolve(value);
            }, function(error) {
              if (alreadyRejected || alreadyResolved)
                return;
              alreadyRejected = true;
              errors[index] = error;
              --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
            });
          });
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
        if (result.error)
          reject(result.value);
        return capability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.with-resolvers.js
var require_es_promise_with_resolvers = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.with-resolvers.js"() {
    "use strict";
    var $ = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    $({ target: "Promise", stat: true }, {
      withResolvers: function withResolvers() {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        return {
          promise: promiseCapability.promise,
          resolve: promiseCapability.resolve,
          reject: promiseCapability.reject
        };
      }
    });
  }
});

// node_modules/core-js-pure/modules/es.promise.finally.js
var require_es_promise_finally = __commonJS({
  "node_modules/core-js-pure/modules/es.promise.finally.js"() {
    "use strict";
    var $ = require_export();
    var IS_PURE = require_is_pure();
    var NativePromiseConstructor = require_promise_native_constructor();
    var fails = require_fails();
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var speciesConstructor = require_species_constructor();
    var promiseResolve = require_promise_resolve();
    var defineBuiltIn = require_define_built_in();
    var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
    var NON_GENERIC = !!NativePromiseConstructor && fails(function() {
      NativePromisePrototype["finally"].call({ then: function() {
      } }, function() {
      });
    });
    $({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
      "finally": function(onFinally) {
        var C = speciesConstructor(this, getBuiltIn("Promise"));
        var isFunction2 = isCallable(onFinally);
        return this.then(
          isFunction2 ? function(x) {
            return promiseResolve(C, onFinally()).then(function() {
              return x;
            });
          } : onFinally,
          isFunction2 ? function(e) {
            return promiseResolve(C, onFinally()).then(function() {
              throw e;
            });
          } : onFinally
        );
      }
    });
    if (!IS_PURE && isCallable(NativePromiseConstructor)) {
      method = getBuiltIn("Promise").prototype["finally"];
      if (NativePromisePrototype["finally"] !== method) {
        defineBuiltIn(NativePromisePrototype, "finally", method, { unsafe: true });
      }
    }
    var method;
  }
});

// node_modules/core-js-pure/es/promise/index.js
var require_promise = __commonJS({
  "node_modules/core-js-pure/es/promise/index.js"(exports, module) {
    "use strict";
    require_es_aggregate_error();
    require_es_array_iterator();
    require_es_object_to_string();
    require_es_promise();
    require_es_promise_all_settled();
    require_es_promise_any();
    require_es_promise_with_resolvers();
    require_es_promise_finally();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Promise;
  }
});

// node_modules/core-js-pure/stable/promise/index.js
var require_promise2 = __commonJS({
  "node_modules/core-js-pure/stable/promise/index.js"(exports, module) {
    "use strict";
    var parent = require_promise();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/promise.js
var require_promise3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/promise.js"(exports, module) {
    module.exports = require_promise2();
  }
});

// node_modules/core-js-pure/es/array/virtual/concat.js
var require_concat = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/concat.js"(exports, module) {
    "use strict";
    require_es_array_concat();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "concat");
  }
});

// node_modules/core-js-pure/es/instance/concat.js
var require_concat2 = __commonJS({
  "node_modules/core-js-pure/es/instance/concat.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_concat();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.concat;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/concat.js
var require_concat3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/concat.js"(exports, module) {
    "use strict";
    var parent = require_concat2();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
var require_concat4 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"(exports, module) {
    module.exports = require_concat3();
  }
});

// node_modules/core-js-pure/internals/string-repeat.js
var require_string_repeat = __commonJS({
  "node_modules/core-js-pure/internals/string-repeat.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString = require_to_string();
    var requireObjectCoercible = require_require_object_coercible();
    var $RangeError = RangeError;
    module.exports = function repeat(count) {
      var str = toString(requireObjectCoercible(this));
      var result = "";
      var n = toIntegerOrInfinity(count);
      if (n < 0 || n === Infinity)
        throw new $RangeError("Wrong number of repetitions");
      for (; n > 0; (n >>>= 1) && (str += str))
        if (n & 1)
          result += str;
      return result;
    };
  }
});

// node_modules/core-js-pure/internals/string-pad.js
var require_string_pad = __commonJS({
  "node_modules/core-js-pure/internals/string-pad.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toLength = require_to_length();
    var toString = require_to_string();
    var $repeat = require_string_repeat();
    var requireObjectCoercible = require_require_object_coercible();
    var repeat = uncurryThis($repeat);
    var stringSlice = uncurryThis("".slice);
    var ceil = Math.ceil;
    var createMethod = function(IS_END) {
      return function($this, maxLength, fillString) {
        var S = toString(requireObjectCoercible($this));
        var intMaxLength = toLength(maxLength);
        var stringLength = S.length;
        var fillStr = fillString === void 0 ? " " : toString(fillString);
        var fillLen, stringFiller;
        if (intMaxLength <= stringLength || fillStr === "")
          return S;
        fillLen = intMaxLength - stringLength;
        stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
        if (stringFiller.length > fillLen)
          stringFiller = stringSlice(stringFiller, 0, fillLen);
        return IS_END ? S + stringFiller : stringFiller + S;
      };
    };
    module.exports = {
      // `String.prototype.padStart` method
      // https://tc39.es/ecma262/#sec-string.prototype.padstart
      start: createMethod(false),
      // `String.prototype.padEnd` method
      // https://tc39.es/ecma262/#sec-string.prototype.padend
      end: createMethod(true)
    };
  }
});

// node_modules/core-js-pure/internals/date-to-iso-string.js
var require_date_to_iso_string = __commonJS({
  "node_modules/core-js-pure/internals/date-to-iso-string.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var padStart = require_string_pad().start;
    var $RangeError = RangeError;
    var $isFinite = isFinite;
    var abs = Math.abs;
    var DatePrototype = Date.prototype;
    var nativeDateToISOString = DatePrototype.toISOString;
    var thisTimeValue = uncurryThis(DatePrototype.getTime);
    var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
    var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
    var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
    var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
    var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
    var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
    var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);
    module.exports = fails(function() {
      return nativeDateToISOString.call(new Date(-5e13 - 1)) !== "0385-07-25T07:06:39.999Z";
    }) || !fails(function() {
      nativeDateToISOString.call(/* @__PURE__ */ new Date(NaN));
    }) ? function toISOString() {
      if (!$isFinite(thisTimeValue(this)))
        throw new $RangeError("Invalid time value");
      var date = this;
      var year = getUTCFullYear(date);
      var milliseconds = getUTCMilliseconds(date);
      var sign = year < 0 ? "-" : year > 9999 ? "+" : "";
      return sign + padStart(abs(year), sign ? 6 : 4, 0) + "-" + padStart(getUTCMonth(date) + 1, 2, 0) + "-" + padStart(getUTCDate(date), 2, 0) + "T" + padStart(getUTCHours(date), 2, 0) + ":" + padStart(getUTCMinutes(date), 2, 0) + ":" + padStart(getUTCSeconds(date), 2, 0) + "." + padStart(milliseconds, 3, 0) + "Z";
    } : nativeDateToISOString;
  }
});

// node_modules/core-js-pure/modules/es.date.to-json.js
var require_es_date_to_json = __commonJS({
  "node_modules/core-js-pure/modules/es.date.to-json.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var toObject = require_to_object();
    var toPrimitive2 = require_to_primitive();
    var toISOString = require_date_to_iso_string();
    var classof = require_classof_raw();
    var fails = require_fails();
    var FORCED = fails(function() {
      return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || call(Date.prototype.toJSON, { toISOString: function() {
        return 1;
      } }) !== 1;
    });
    $({ target: "Date", proto: true, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      toJSON: function toJSON(key) {
        var O = toObject(this);
        var pv = toPrimitive2(O, "number");
        return typeof pv == "number" && !isFinite(pv) ? null : !("toISOString" in O) && classof(O) === "Date" ? call(toISOString, O) : O.toISOString();
      }
    });
  }
});

// node_modules/core-js-pure/es/json/stringify.js
var require_stringify = __commonJS({
  "node_modules/core-js-pure/es/json/stringify.js"(exports, module) {
    "use strict";
    require_es_date_to_json();
    require_es_json_stringify();
    var path = require_path();
    var apply = require_function_apply();
    if (!path.JSON)
      path.JSON = { stringify: JSON.stringify };
    module.exports = function stringify(it, replacer, space) {
      return apply(path.JSON.stringify, null, arguments);
    };
  }
});

// node_modules/core-js-pure/stable/json/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/core-js-pure/stable/json/stringify.js"(exports, module) {
    "use strict";
    var parent = require_stringify();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js
var require_stringify3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js"(exports, module) {
    module.exports = require_stringify2();
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
var require_index_of7 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"(exports, module) {
    module.exports = require_index_of3();
  }
});

// node_modules/core-js-pure/modules/esnext.promise.with-resolvers.js
var require_esnext_promise_with_resolvers = __commonJS({
  "node_modules/core-js-pure/modules/esnext.promise.with-resolvers.js"() {
    "use strict";
    require_es_promise_with_resolvers();
  }
});

// node_modules/core-js-pure/actual/promise/index.js
var require_promise4 = __commonJS({
  "node_modules/core-js-pure/actual/promise/index.js"(exports, module) {
    "use strict";
    var parent = require_promise2();
    require_esnext_promise_with_resolvers();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/modules/esnext.aggregate-error.js
var require_esnext_aggregate_error = __commonJS({
  "node_modules/core-js-pure/modules/esnext.aggregate-error.js"() {
    "use strict";
    require_es_aggregate_error();
  }
});

// node_modules/core-js-pure/modules/esnext.promise.all-settled.js
var require_esnext_promise_all_settled = __commonJS({
  "node_modules/core-js-pure/modules/esnext.promise.all-settled.js"() {
    "use strict";
    require_es_promise_all_settled();
  }
});

// node_modules/core-js-pure/modules/esnext.promise.try.js
var require_esnext_promise_try = __commonJS({
  "node_modules/core-js-pure/modules/esnext.promise.try.js"() {
    "use strict";
    var $ = require_export();
    var newPromiseCapabilityModule = require_new_promise_capability();
    var perform = require_perform();
    $({ target: "Promise", stat: true, forced: true }, {
      "try": function(callbackfn) {
        var promiseCapability = newPromiseCapabilityModule.f(this);
        var result = perform(callbackfn);
        (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
        return promiseCapability.promise;
      }
    });
  }
});

// node_modules/core-js-pure/modules/esnext.promise.any.js
var require_esnext_promise_any = __commonJS({
  "node_modules/core-js-pure/modules/esnext.promise.any.js"() {
    "use strict";
    require_es_promise_any();
  }
});

// node_modules/core-js-pure/full/promise/index.js
var require_promise5 = __commonJS({
  "node_modules/core-js-pure/full/promise/index.js"(exports, module) {
    "use strict";
    var parent = require_promise4();
    require_esnext_aggregate_error();
    require_esnext_promise_all_settled();
    require_esnext_promise_try();
    require_esnext_promise_any();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/promise/index.js
var require_promise6 = __commonJS({
  "node_modules/core-js-pure/features/promise/index.js"(exports, module) {
    "use strict";
    module.exports = require_promise5();
  }
});

// node_modules/core-js-pure/modules/es.date.to-primitive.js
var require_es_date_to_primitive = __commonJS({
  "node_modules/core-js-pure/modules/es.date.to-primitive.js"() {
  }
});

// node_modules/core-js-pure/es/symbol/to-primitive.js
var require_to_primitive2 = __commonJS({
  "node_modules/core-js-pure/es/symbol/to-primitive.js"(exports, module) {
    "use strict";
    require_es_date_to_primitive();
    require_es_symbol_to_primitive();
    var WrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
    module.exports = WrappedWellKnownSymbolModule.f("toPrimitive");
  }
});

// node_modules/core-js-pure/stable/symbol/to-primitive.js
var require_to_primitive3 = __commonJS({
  "node_modules/core-js-pure/stable/symbol/to-primitive.js"(exports, module) {
    "use strict";
    var parent = require_to_primitive2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/symbol/to-primitive.js
var require_to_primitive4 = __commonJS({
  "node_modules/core-js-pure/actual/symbol/to-primitive.js"(exports, module) {
    "use strict";
    var parent = require_to_primitive3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/symbol/to-primitive.js
var require_to_primitive5 = __commonJS({
  "node_modules/core-js-pure/full/symbol/to-primitive.js"(exports, module) {
    "use strict";
    var parent = require_to_primitive4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/symbol/to-primitive.js
var require_to_primitive6 = __commonJS({
  "node_modules/core-js-pure/features/symbol/to-primitive.js"(exports, module) {
    "use strict";
    module.exports = require_to_primitive5();
  }
});

// node_modules/@babel/runtime-corejs3/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime-corejs3/helpers/typeof.js"(exports, module) {
    var _Symbol5 = require_symbol5();
    var _Symbol$iterator2 = require_iterator5();
    function _typeof2(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof2 = "function" == typeof _Symbol5 && "symbol" == typeof _Symbol$iterator2 ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof _Symbol5 && o2.constructor === _Symbol5 && o2 !== _Symbol5.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
    }
    module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/core-js-pure/internals/array-for-each.js
var require_array_for_each = __commonJS({
  "node_modules/core-js-pure/internals/array-for-each.js"(exports, module) {
    "use strict";
    var $forEach = require_array_iteration().forEach;
    var arrayMethodIsStrict = require_array_method_is_strict();
    var STRICT_METHOD = arrayMethodIsStrict("forEach");
    module.exports = !STRICT_METHOD ? function forEach(callbackfn) {
      return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    } : [].forEach;
  }
});

// node_modules/core-js-pure/modules/es.array.for-each.js
var require_es_array_for_each = __commonJS({
  "node_modules/core-js-pure/modules/es.array.for-each.js"() {
    "use strict";
    var $ = require_export();
    var forEach = require_array_for_each();
    $({ target: "Array", proto: true, forced: [].forEach !== forEach }, {
      forEach
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/for-each.js
var require_for_each = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/for-each.js"(exports, module) {
    "use strict";
    require_es_array_for_each();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "forEach");
  }
});

// node_modules/core-js-pure/stable/array/virtual/for-each.js
var require_for_each2 = __commonJS({
  "node_modules/core-js-pure/stable/array/virtual/for-each.js"(exports, module) {
    "use strict";
    var parent = require_for_each();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/modules/web.dom-collections.for-each.js
var require_web_dom_collections_for_each = __commonJS({
  "node_modules/core-js-pure/modules/web.dom-collections.for-each.js"() {
  }
});

// node_modules/core-js-pure/stable/instance/for-each.js
var require_for_each3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/for-each.js"(exports, module) {
    "use strict";
    var classof = require_classof();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_for_each2();
    require_web_dom_collections_for_each();
    var ArrayPrototype = Array.prototype;
    var DOMIterables = {
      DOMTokenList: true,
      NodeList: true
    };
    module.exports = function(it) {
      var own = it.forEach;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach || hasOwn(DOMIterables, classof(it)) ? method : own;
    };
  }
});

// node_modules/core-js-pure/actual/instance/for-each.js
var require_for_each4 = __commonJS({
  "node_modules/core-js-pure/actual/instance/for-each.js"(exports, module) {
    "use strict";
    var parent = require_for_each3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/for-each.js
var require_for_each5 = __commonJS({
  "node_modules/core-js-pure/full/instance/for-each.js"(exports, module) {
    "use strict";
    var parent = require_for_each4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/for-each.js
var require_for_each6 = __commonJS({
  "node_modules/core-js-pure/features/instance/for-each.js"(exports, module) {
    "use strict";
    module.exports = require_for_each5();
  }
});

// node_modules/core-js-pure/modules/es.array.reverse.js
var require_es_array_reverse = __commonJS({
  "node_modules/core-js-pure/modules/es.array.reverse.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var isArray = require_is_array();
    var nativeReverse = uncurryThis([].reverse);
    var test = [1, 2];
    $({ target: "Array", proto: true, forced: String(test) === String(test.reverse()) }, {
      reverse: function reverse() {
        if (isArray(this))
          this.length = this.length;
        return nativeReverse(this);
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/reverse.js
var require_reverse = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/reverse.js"(exports, module) {
    "use strict";
    require_es_array_reverse();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "reverse");
  }
});

// node_modules/core-js-pure/es/instance/reverse.js
var require_reverse2 = __commonJS({
  "node_modules/core-js-pure/es/instance/reverse.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_reverse();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.reverse;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reverse ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/reverse.js
var require_reverse3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/reverse.js"(exports, module) {
    "use strict";
    var parent = require_reverse2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/instance/reverse.js
var require_reverse4 = __commonJS({
  "node_modules/core-js-pure/actual/instance/reverse.js"(exports, module) {
    "use strict";
    var parent = require_reverse3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/reverse.js
var require_reverse5 = __commonJS({
  "node_modules/core-js-pure/full/instance/reverse.js"(exports, module) {
    "use strict";
    var parent = require_reverse4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/reverse.js
var require_reverse6 = __commonJS({
  "node_modules/core-js-pure/features/instance/reverse.js"(exports, module) {
    "use strict";
    module.exports = require_reverse5();
  }
});

// node_modules/core-js-pure/actual/instance/slice.js
var require_slice5 = __commonJS({
  "node_modules/core-js-pure/actual/instance/slice.js"(exports, module) {
    "use strict";
    var parent = require_slice3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/instance/slice.js
var require_slice6 = __commonJS({
  "node_modules/core-js-pure/full/instance/slice.js"(exports, module) {
    "use strict";
    var parent = require_slice5();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/instance/slice.js
var require_slice7 = __commonJS({
  "node_modules/core-js-pure/features/instance/slice.js"(exports, module) {
    "use strict";
    module.exports = require_slice6();
  }
});

// node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime-corejs3/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof2 = require_typeof()["default"];
    var _Object$defineProperty4 = require_define_property5();
    var _Symbol5 = require_symbol5();
    var _Object$create3 = require_create5();
    var _Object$getPrototypeOf2 = require_get_prototype_of5();
    var _forEachInstanceProperty = require_for_each6();
    var _pushInstanceProperty3 = require_push6();
    var _Object$setPrototypeOf4 = require_set_prototype_of5();
    var _Promise3 = require_promise6();
    var _reverseInstanceProperty = require_reverse6();
    var _sliceInstanceProperty3 = require_slice7();
    function _regeneratorRuntime2() {
      "use strict";
      module.exports = _regeneratorRuntime2 = function _regeneratorRuntime3() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = _Object$defineProperty4 || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof _Symbol5 ? _Symbol5 : {}, a3 = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define(t2, e2, r2) {
        return _Object$defineProperty4(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define({}, "");
      } catch (t2) {
        define = function define2(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a4 = _Object$create3(i2.prototype), c3 = new Context(n2 || []);
        return o(a4, "_invoke", {
          value: makeInvokeMethod(t2, r2, c3)
        }), a4;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define(p, a3, function() {
        return this;
      });
      var d = _Object$getPrototypeOf2, v = d && d(d(values([])));
      v && v !== r && n.call(v, a3) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create3(p);
      function defineIteratorMethods(t2) {
        var _context2;
        _forEachInstanceProperty(_context2 = ["next", "throw", "return"]).call(_context2, function(e2) {
          define(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a4) {
          var c3 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c3.type) {
            var u2 = c3.arg, h2 = u2.value;
            return h2 && "object" == _typeof2(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a4);
            }, function(t3) {
              invoke("throw", t3, i2, a4);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a4);
            });
          }
          a4(c3.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a4) {
          if (o2 === f)
            throw Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a4;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a4; ; ) {
            var c3 = n2.delegate;
            if (c3) {
              var u2 = maybeInvokeDelegate(c3, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a4 = i2.arg;
        return a4 ? a4.done ? (r2[e2.resultName] = a4.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a4 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var _context2;
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), _pushInstanceProperty3(_context2 = this.tryEntries).call(_context2, e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], _forEachInstanceProperty(t2).call(t2, pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a3];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof2(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return _Object$setPrototypeOf4 ? _Object$setPrototypeOf4(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = _Object$create3(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = _Promise3);
        var a4 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a4 : a4.next().then(function(t3) {
          return t3.done ? t3.value : a4.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a3, function() {
        return this;
      }), define(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          _pushInstanceProperty3(r2).call(r2, n2);
        return _reverseInstanceProperty(r2).call(r2), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          var _context3;
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, _forEachInstanceProperty(_context3 = this.tryEntries).call(_context3, resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+_sliceInstanceProperty3(r2).call(r2, 1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a4.type = "throw", a4.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a4 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c3 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c3 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c3) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a4 = i2 ? i2.completion : {};
          return a4.type = t2, a4.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a4);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime-corejs3/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime-corejs3/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/core-js-pure/internals/object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js-pure/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var fails = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis([].concat);
    module.exports = !$assign || fails(function() {
      if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol("assign detection");
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js-pure/modules/es.object.assign.js
var require_es_object_assign = __commonJS({
  "node_modules/core-js-pure/modules/es.object.assign.js"() {
    "use strict";
    var $ = require_export();
    var assign = require_object_assign();
    $({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
      assign
    });
  }
});

// node_modules/core-js-pure/es/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js-pure/es/object/assign.js"(exports, module) {
    "use strict";
    require_es_object_assign();
    var path = require_path();
    module.exports = path.Object.assign;
  }
});

// node_modules/core-js-pure/stable/object/assign.js
var require_assign2 = __commonJS({
  "node_modules/core-js-pure/stable/object/assign.js"(exports, module) {
    "use strict";
    var parent = require_assign();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js
var require_assign3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js"(exports, module) {
    module.exports = require_assign2();
  }
});

// node_modules/core-js-pure/modules/es.object.keys.js
var require_es_object_keys = __commonJS({
  "node_modules/core-js-pure/modules/es.object.keys.js"() {
    "use strict";
    var $ = require_export();
    var toObject = require_to_object();
    var nativeKeys = require_object_keys();
    var fails = require_fails();
    var FAILS_ON_PRIMITIVES = fails(function() {
      nativeKeys(1);
    });
    $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
      keys: function keys(it) {
        return nativeKeys(toObject(it));
      }
    });
  }
});

// node_modules/core-js-pure/es/object/keys.js
var require_keys = __commonJS({
  "node_modules/core-js-pure/es/object/keys.js"(exports, module) {
    "use strict";
    require_es_object_keys();
    var path = require_path();
    module.exports = path.Object.keys;
  }
});

// node_modules/core-js-pure/stable/object/keys.js
var require_keys2 = __commonJS({
  "node_modules/core-js-pure/stable/object/keys.js"(exports, module) {
    "use strict";
    var parent = require_keys();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js
var require_keys3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js"(exports, module) {
    module.exports = require_keys2();
  }
});

// node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/core-js-pure/internals/array-from.js
var require_array_from = __commonJS({
  "node_modules/core-js-pure/internals/array-from.js"(exports, module) {
    "use strict";
    var bind2 = require_function_bind_context();
    var call = require_function_call();
    var toObject = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor = require_is_constructor();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array = Array;
    module.exports = function from(arrayLike) {
      var O = toObject(arrayLike);
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind2(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        result = IS_CONSTRUCTOR ? new this() : [];
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        for (; !(step = call(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// node_modules/core-js-pure/modules/es.array.from.js
var require_es_array_from = __commonJS({
  "node_modules/core-js-pure/modules/es.array.from.js"() {
    "use strict";
    var $ = require_export();
    var from = require_array_from();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
      Array.from(iterable);
    });
    $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
      from
    });
  }
});

// node_modules/core-js-pure/es/array/from.js
var require_from = __commonJS({
  "node_modules/core-js-pure/es/array/from.js"(exports, module) {
    "use strict";
    require_es_string_iterator();
    require_es_array_from();
    var path = require_path();
    module.exports = path.Array.from;
  }
});

// node_modules/core-js-pure/stable/array/from.js
var require_from2 = __commonJS({
  "node_modules/core-js-pure/stable/array/from.js"(exports, module) {
    "use strict";
    var parent = require_from();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js
var require_from3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js"(exports, module) {
    module.exports = require_from2();
  }
});

// node_modules/core-js-pure/modules/es.array.is-array.js
var require_es_array_is_array = __commonJS({
  "node_modules/core-js-pure/modules/es.array.is-array.js"() {
    "use strict";
    var $ = require_export();
    var isArray = require_is_array();
    $({ target: "Array", stat: true }, {
      isArray
    });
  }
});

// node_modules/core-js-pure/es/array/is-array.js
var require_is_array2 = __commonJS({
  "node_modules/core-js-pure/es/array/is-array.js"(exports, module) {
    "use strict";
    require_es_array_is_array();
    var path = require_path();
    module.exports = path.Array.isArray;
  }
});

// node_modules/core-js-pure/stable/array/is-array.js
var require_is_array3 = __commonJS({
  "node_modules/core-js-pure/stable/array/is-array.js"(exports, module) {
    "use strict";
    var parent = require_is_array2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/array/is-array.js
var require_is_array4 = __commonJS({
  "node_modules/core-js-pure/actual/array/is-array.js"(exports, module) {
    "use strict";
    var parent = require_is_array3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/array/is-array.js
var require_is_array5 = __commonJS({
  "node_modules/core-js-pure/full/array/is-array.js"(exports, module) {
    "use strict";
    var parent = require_is_array4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/array/is-array.js
var require_is_array6 = __commonJS({
  "node_modules/core-js-pure/features/array/is-array.js"(exports, module) {
    "use strict";
    module.exports = require_is_array5();
  }
});

// node_modules/core-js-pure/es/get-iterator-method.js
var require_get_iterator_method2 = __commonJS({
  "node_modules/core-js-pure/es/get-iterator-method.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_string_iterator();
    var getIteratorMethod = require_get_iterator_method();
    module.exports = getIteratorMethod;
  }
});

// node_modules/core-js-pure/stable/get-iterator-method.js
var require_get_iterator_method3 = __commonJS({
  "node_modules/core-js-pure/stable/get-iterator-method.js"(exports, module) {
    "use strict";
    var parent = require_get_iterator_method2();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/get-iterator-method.js
var require_get_iterator_method4 = __commonJS({
  "node_modules/core-js-pure/actual/get-iterator-method.js"(exports, module) {
    "use strict";
    var parent = require_get_iterator_method3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/get-iterator-method.js
var require_get_iterator_method5 = __commonJS({
  "node_modules/core-js-pure/full/get-iterator-method.js"(exports, module) {
    "use strict";
    var parent = require_get_iterator_method4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/get-iterator-method.js
var require_get_iterator_method6 = __commonJS({
  "node_modules/core-js-pure/features/get-iterator-method.js"(exports, module) {
    "use strict";
    module.exports = require_get_iterator_method5();
  }
});

// node_modules/core-js-pure/actual/array/from.js
var require_from4 = __commonJS({
  "node_modules/core-js-pure/actual/array/from.js"(exports, module) {
    "use strict";
    var parent = require_from2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/array/from.js
var require_from5 = __commonJS({
  "node_modules/core-js-pure/full/array/from.js"(exports, module) {
    "use strict";
    var parent = require_from4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/array/from.js
var require_from6 = __commonJS({
  "node_modules/core-js-pure/features/array/from.js"(exports, module) {
    "use strict";
    module.exports = require_from5();
  }
});

// node_modules/core-js-pure/modules/es.array.map.js
var require_es_array_map = __commonJS({
  "node_modules/core-js-pure/modules/es.array.map.js"() {
    "use strict";
    var $ = require_export();
    var $map = require_array_iteration().map;
    var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
    $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      map: function map(callbackfn) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/map.js
var require_map6 = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/map.js"(exports, module) {
    "use strict";
    require_es_array_map();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "map");
  }
});

// node_modules/core-js-pure/es/instance/map.js
var require_map7 = __commonJS({
  "node_modules/core-js-pure/es/instance/map.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_map6();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.map;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/map.js
var require_map8 = __commonJS({
  "node_modules/core-js-pure/stable/instance/map.js"(exports, module) {
    "use strict";
    var parent = require_map7();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
var require_map9 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"(exports, module) {
    module.exports = require_map8();
  }
});

// node_modules/core-js-pure/internals/object-to-array.js
var require_object_to_array = __commonJS({
  "node_modules/core-js-pure/internals/object-to-array.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var uncurryThis = require_function_uncurry_this();
    var objectGetPrototypeOf = require_object_get_prototype_of();
    var objectKeys = require_object_keys();
    var toIndexedObject = require_to_indexed_object();
    var $propertyIsEnumerable = require_object_property_is_enumerable().f;
    var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
    var push = uncurryThis([].push);
    var IE_BUG = DESCRIPTORS && fails(function() {
      var O = /* @__PURE__ */ Object.create(null);
      O[2] = 2;
      return !propertyIsEnumerable(O, 2);
    });
    var createMethod = function(TO_ENTRIES) {
      return function(it) {
        var O = toIndexedObject(it);
        var keys = objectKeys(O);
        var IE_WORKAROUND = IE_BUG && objectGetPrototypeOf(O) === null;
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
          key = keys[i++];
          if (!DESCRIPTORS || (IE_WORKAROUND ? key in O : propertyIsEnumerable(O, key))) {
            push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
          }
        }
        return result;
      };
    };
    module.exports = {
      // `Object.entries` method
      // https://tc39.es/ecma262/#sec-object.entries
      entries: createMethod(true),
      // `Object.values` method
      // https://tc39.es/ecma262/#sec-object.values
      values: createMethod(false)
    };
  }
});

// node_modules/core-js-pure/modules/es.object.entries.js
var require_es_object_entries = __commonJS({
  "node_modules/core-js-pure/modules/es.object.entries.js"() {
    "use strict";
    var $ = require_export();
    var $entries = require_object_to_array().entries;
    $({ target: "Object", stat: true }, {
      entries: function entries(O) {
        return $entries(O);
      }
    });
  }
});

// node_modules/core-js-pure/es/object/entries.js
var require_entries = __commonJS({
  "node_modules/core-js-pure/es/object/entries.js"(exports, module) {
    "use strict";
    require_es_object_entries();
    var path = require_path();
    module.exports = path.Object.entries;
  }
});

// node_modules/core-js-pure/stable/object/entries.js
var require_entries2 = __commonJS({
  "node_modules/core-js-pure/stable/object/entries.js"(exports, module) {
    "use strict";
    var parent = require_entries();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js
var require_entries3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/entries.js"(exports, module) {
    module.exports = require_entries2();
  }
});

// node_modules/core-js-pure/es/array/virtual/keys.js
var require_keys4 = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/keys.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_object_to_string();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "keys");
  }
});

// node_modules/core-js-pure/stable/array/virtual/keys.js
var require_keys5 = __commonJS({
  "node_modules/core-js-pure/stable/array/virtual/keys.js"(exports, module) {
    "use strict";
    var parent = require_keys4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/stable/instance/keys.js
var require_keys6 = __commonJS({
  "node_modules/core-js-pure/stable/instance/keys.js"(exports, module) {
    "use strict";
    require_web_dom_collections_iterator();
    var classof = require_classof();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_keys5();
    var ArrayPrototype = Array.prototype;
    var DOMIterables = {
      DOMTokenList: true,
      NodeList: true
    };
    module.exports = function(it) {
      var own = it.keys;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.keys || hasOwn(DOMIterables, classof(it)) ? method : own;
    };
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js
var require_keys7 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/keys.js"(exports, module) {
    module.exports = require_keys6();
  }
});

// node_modules/core-js-pure/modules/es.object.values.js
var require_es_object_values = __commonJS({
  "node_modules/core-js-pure/modules/es.object.values.js"() {
    "use strict";
    var $ = require_export();
    var $values = require_object_to_array().values;
    $({ target: "Object", stat: true }, {
      values: function values(O) {
        return $values(O);
      }
    });
  }
});

// node_modules/core-js-pure/es/object/values.js
var require_values = __commonJS({
  "node_modules/core-js-pure/es/object/values.js"(exports, module) {
    "use strict";
    require_es_object_values();
    var path = require_path();
    module.exports = path.Object.values;
  }
});

// node_modules/core-js-pure/stable/object/values.js
var require_values2 = __commonJS({
  "node_modules/core-js-pure/stable/object/values.js"(exports, module) {
    "use strict";
    var parent = require_values();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js
var require_values3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js"(exports, module) {
    module.exports = require_values2();
  }
});

// node_modules/core-js-pure/modules/es.array.find.js
var require_es_array_find = __commonJS({
  "node_modules/core-js-pure/modules/es.array.find.js"() {
    "use strict";
    var $ = require_export();
    var $find = require_array_iteration().find;
    var addToUnscopables = require_add_to_unscopables();
    var FIND = "find";
    var SKIPS_HOLES = true;
    if (FIND in [])
      Array(1)[FIND](function() {
        SKIPS_HOLES = false;
      });
    $({ target: "Array", proto: true, forced: SKIPS_HOLES }, {
      find: function find2(callbackfn) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    addToUnscopables(FIND);
  }
});

// node_modules/core-js-pure/es/array/virtual/find.js
var require_find = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/find.js"(exports, module) {
    "use strict";
    require_es_array_find();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "find");
  }
});

// node_modules/core-js-pure/es/instance/find.js
var require_find2 = __commonJS({
  "node_modules/core-js-pure/es/instance/find.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_find();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.find;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.find ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/find.js
var require_find3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/find.js"(exports, module) {
    "use strict";
    var parent = require_find2();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js
var require_find4 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js"(exports, module) {
    module.exports = require_find3();
  }
});

// node_modules/core-js-pure/modules/es.array.filter.js
var require_es_array_filter = __commonJS({
  "node_modules/core-js-pure/modules/es.array.filter.js"() {
    "use strict";
    var $ = require_export();
    var $filter = require_array_iteration().filter;
    var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
    $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
      filter: function filter(callbackfn) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  }
});

// node_modules/core-js-pure/es/array/virtual/filter.js
var require_filter = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/filter.js"(exports, module) {
    "use strict";
    require_es_array_filter();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "filter");
  }
});

// node_modules/core-js-pure/es/instance/filter.js
var require_filter2 = __commonJS({
  "node_modules/core-js-pure/es/instance/filter.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_filter();
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      var own = it.filter;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter ? method : own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/filter.js
var require_filter3 = __commonJS({
  "node_modules/core-js-pure/stable/instance/filter.js"(exports, module) {
    "use strict";
    var parent = require_filter2();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js
var require_filter4 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js"(exports, module) {
    module.exports = require_filter3();
  }
});

// node_modules/core-js-pure/internals/whitespaces.js
var require_whitespaces = __commonJS({
  "node_modules/core-js-pure/internals/whitespaces.js"(exports, module) {
    "use strict";
    module.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
  }
});

// node_modules/core-js-pure/internals/string-trim.js
var require_string_trim = __commonJS({
  "node_modules/core-js-pure/internals/string-trim.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var requireObjectCoercible = require_require_object_coercible();
    var toString = require_to_string();
    var whitespaces = require_whitespaces();
    var replace = uncurryThis("".replace);
    var ltrim = RegExp("^[" + whitespaces + "]+");
    var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
    var createMethod = function(TYPE) {
      return function($this) {
        var string = toString(requireObjectCoercible($this));
        if (TYPE & 1)
          string = replace(string, ltrim, "");
        if (TYPE & 2)
          string = replace(string, rtrim, "$1");
        return string;
      };
    };
    module.exports = {
      // `String.prototype.{ trimLeft, trimStart }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimstart
      start: createMethod(1),
      // `String.prototype.{ trimRight, trimEnd }` methods
      // https://tc39.es/ecma262/#sec-string.prototype.trimend
      end: createMethod(2),
      // `String.prototype.trim` method
      // https://tc39.es/ecma262/#sec-string.prototype.trim
      trim: createMethod(3)
    };
  }
});

// node_modules/core-js-pure/internals/number-parse-int.js
var require_number_parse_int = __commonJS({
  "node_modules/core-js-pure/internals/number-parse-int.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var fails = require_fails();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var trim = require_string_trim().trim;
    var whitespaces = require_whitespaces();
    var $parseInt = global2.parseInt;
    var Symbol2 = global2.Symbol;
    var ITERATOR = Symbol2 && Symbol2.iterator;
    var hex = /^[+-]?0x/i;
    var exec = uncurryThis(hex.exec);
    var FORCED = $parseInt(whitespaces + "08") !== 8 || $parseInt(whitespaces + "0x16") !== 22 || ITERATOR && !fails(function() {
      $parseInt(Object(ITERATOR));
    });
    module.exports = FORCED ? function parseInt2(string, radix) {
      var S = trim(toString(string));
      return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
    } : $parseInt;
  }
});

// node_modules/core-js-pure/modules/es.parse-int.js
var require_es_parse_int = __commonJS({
  "node_modules/core-js-pure/modules/es.parse-int.js"() {
    "use strict";
    var $ = require_export();
    var $parseInt = require_number_parse_int();
    $({ global: true, forced: parseInt !== $parseInt }, {
      parseInt: $parseInt
    });
  }
});

// node_modules/core-js-pure/es/parse-int.js
var require_parse_int = __commonJS({
  "node_modules/core-js-pure/es/parse-int.js"(exports, module) {
    "use strict";
    require_es_parse_int();
    var path = require_path();
    module.exports = path.parseInt;
  }
});

// node_modules/core-js-pure/stable/parse-int.js
var require_parse_int2 = __commonJS({
  "node_modules/core-js-pure/stable/parse-int.js"(exports, module) {
    "use strict";
    var parent = require_parse_int();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js
var require_parse_int3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"(exports, module) {
    module.exports = require_parse_int2();
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/map.js
var require_map10 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/map.js"(exports, module) {
    module.exports = require_map2();
  }
});

// node_modules/core-js-pure/es/array/virtual/values.js
var require_values4 = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/values.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_object_to_string();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "values");
  }
});

// node_modules/core-js-pure/stable/array/virtual/values.js
var require_values5 = __commonJS({
  "node_modules/core-js-pure/stable/array/virtual/values.js"(exports, module) {
    "use strict";
    var parent = require_values4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/stable/instance/values.js
var require_values6 = __commonJS({
  "node_modules/core-js-pure/stable/instance/values.js"(exports, module) {
    "use strict";
    require_web_dom_collections_iterator();
    var classof = require_classof();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_values5();
    var ArrayPrototype = Array.prototype;
    var DOMIterables = {
      DOMTokenList: true,
      NodeList: true
    };
    module.exports = function(it) {
      var own = it.values;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.values || hasOwn(DOMIterables, classof(it)) ? method : own;
    };
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js
var require_values7 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js"(exports, module) {
    module.exports = require_values6();
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js
var require_symbol6 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js"(exports, module) {
    module.exports = require_symbol2();
  }
});

// node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js
var require_get_iterator_method7 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"(exports, module) {
    module.exports = require_get_iterator_method6();
  }
});

// node_modules/core-js-pure/es/array/virtual/entries.js
var require_entries4 = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/entries.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_object_to_string();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "entries");
  }
});

// node_modules/core-js-pure/stable/array/virtual/entries.js
var require_entries5 = __commonJS({
  "node_modules/core-js-pure/stable/array/virtual/entries.js"(exports, module) {
    "use strict";
    var parent = require_entries4();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/stable/instance/entries.js
var require_entries6 = __commonJS({
  "node_modules/core-js-pure/stable/instance/entries.js"(exports, module) {
    "use strict";
    require_web_dom_collections_iterator();
    var classof = require_classof();
    var hasOwn = require_has_own_property();
    var isPrototypeOf = require_object_is_prototype_of();
    var method = require_entries5();
    var ArrayPrototype = Array.prototype;
    var DOMIterables = {
      DOMTokenList: true,
      NodeList: true
    };
    module.exports = function(it) {
      var own = it.entries;
      return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.entries || hasOwn(DOMIterables, classof(it)) ? method : own;
    };
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js
var require_entries7 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/entries.js"(exports, module) {
    module.exports = require_entries6();
  }
});

// node_modules/core-js-pure/modules/es.object.from-entries.js
var require_es_object_from_entries = __commonJS({
  "node_modules/core-js-pure/modules/es.object.from-entries.js"() {
    "use strict";
    var $ = require_export();
    var iterate = require_iterate();
    var createProperty = require_create_property();
    $({ target: "Object", stat: true }, {
      fromEntries: function fromEntries(iterable) {
        var obj = {};
        iterate(iterable, function(k, v) {
          createProperty(obj, k, v);
        }, { AS_ENTRIES: true });
        return obj;
      }
    });
  }
});

// node_modules/core-js-pure/es/object/from-entries.js
var require_from_entries = __commonJS({
  "node_modules/core-js-pure/es/object/from-entries.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    require_es_object_from_entries();
    var path = require_path();
    module.exports = path.Object.fromEntries;
  }
});

// node_modules/core-js-pure/stable/object/from-entries.js
var require_from_entries2 = __commonJS({
  "node_modules/core-js-pure/stable/object/from-entries.js"(exports, module) {
    "use strict";
    var parent = require_from_entries();
    require_web_dom_collections_iterator();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js
var require_from_entries3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/object/from-entries.js"(exports, module) {
    module.exports = require_from_entries2();
  }
});

// node_modules/core-js-pure/modules/es.array.includes.js
var require_es_array_includes = __commonJS({
  "node_modules/core-js-pure/modules/es.array.includes.js"() {
    "use strict";
    var $ = require_export();
    var $includes = require_array_includes().includes;
    var fails = require_fails();
    var addToUnscopables = require_add_to_unscopables();
    var BROKEN_ON_SPARSE = fails(function() {
      return !Array(1).includes();
    });
    $({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
      includes: function includes(el) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    addToUnscopables("includes");
  }
});

// node_modules/core-js-pure/es/array/virtual/includes.js
var require_includes = __commonJS({
  "node_modules/core-js-pure/es/array/virtual/includes.js"(exports, module) {
    "use strict";
    require_es_array_includes();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("Array", "includes");
  }
});

// node_modules/core-js-pure/internals/is-regexp.js
var require_is_regexp = __commonJS({
  "node_modules/core-js-pure/internals/is-regexp.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var classof = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var MATCH = wellKnownSymbol("match");
    module.exports = function(it) {
      var isRegExp;
      return isObject2(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) === "RegExp");
    };
  }
});

// node_modules/core-js-pure/internals/not-a-regexp.js
var require_not_a_regexp = __commonJS({
  "node_modules/core-js-pure/internals/not-a-regexp.js"(exports, module) {
    "use strict";
    var isRegExp = require_is_regexp();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isRegExp(it)) {
        throw new $TypeError("The method doesn't accept regular expressions");
      }
      return it;
    };
  }
});

// node_modules/core-js-pure/internals/correct-is-regexp-logic.js
var require_correct_is_regexp_logic = __commonJS({
  "node_modules/core-js-pure/internals/correct-is-regexp-logic.js"(exports, module) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var MATCH = wellKnownSymbol("match");
    module.exports = function(METHOD_NAME) {
      var regexp = /./;
      try {
        "/./"[METHOD_NAME](regexp);
      } catch (error1) {
        try {
          regexp[MATCH] = false;
          return "/./"[METHOD_NAME](regexp);
        } catch (error2) {
        }
      }
      return false;
    };
  }
});

// node_modules/core-js-pure/modules/es.string.includes.js
var require_es_string_includes = __commonJS({
  "node_modules/core-js-pure/modules/es.string.includes.js"() {
    "use strict";
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var notARegExp = require_not_a_regexp();
    var requireObjectCoercible = require_require_object_coercible();
    var toString = require_to_string();
    var correctIsRegExpLogic = require_correct_is_regexp_logic();
    var stringIndexOf = uncurryThis("".indexOf);
    $({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
      includes: function includes(searchString) {
        return !!~stringIndexOf(
          toString(requireObjectCoercible(this)),
          toString(notARegExp(searchString)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    });
  }
});

// node_modules/core-js-pure/es/string/virtual/includes.js
var require_includes2 = __commonJS({
  "node_modules/core-js-pure/es/string/virtual/includes.js"(exports, module) {
    "use strict";
    require_es_string_includes();
    var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
    module.exports = getBuiltInPrototypeMethod("String", "includes");
  }
});

// node_modules/core-js-pure/es/instance/includes.js
var require_includes3 = __commonJS({
  "node_modules/core-js-pure/es/instance/includes.js"(exports, module) {
    "use strict";
    var isPrototypeOf = require_object_is_prototype_of();
    var arrayMethod = require_includes();
    var stringMethod = require_includes2();
    var ArrayPrototype = Array.prototype;
    var StringPrototype = String.prototype;
    module.exports = function(it) {
      var own = it.includes;
      if (it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes)
        return arrayMethod;
      if (typeof it == "string" || it === StringPrototype || isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes) {
        return stringMethod;
      }
      return own;
    };
  }
});

// node_modules/core-js-pure/stable/instance/includes.js
var require_includes4 = __commonJS({
  "node_modules/core-js-pure/stable/instance/includes.js"(exports, module) {
    "use strict";
    var parent = require_includes3();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js
var require_includes5 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js"(exports, module) {
    module.exports = require_includes4();
  }
});

// node_modules/core-js-pure/internals/is-data-descriptor.js
var require_is_data_descriptor = __commonJS({
  "node_modules/core-js-pure/internals/is-data-descriptor.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    module.exports = function(descriptor) {
      return descriptor !== void 0 && (hasOwn(descriptor, "value") || hasOwn(descriptor, "writable"));
    };
  }
});

// node_modules/core-js-pure/modules/es.reflect.get.js
var require_es_reflect_get = __commonJS({
  "node_modules/core-js-pure/modules/es.reflect.get.js"() {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var isObject2 = require_is_object();
    var anObject = require_an_object();
    var isDataDescriptor = require_is_data_descriptor();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var getPrototypeOf = require_object_get_prototype_of();
    function get3(target, propertyKey) {
      var receiver = arguments.length < 3 ? target : arguments[2];
      var descriptor, prototype;
      if (anObject(target) === receiver)
        return target[propertyKey];
      descriptor = getOwnPropertyDescriptorModule.f(target, propertyKey);
      if (descriptor)
        return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === void 0 ? void 0 : call(descriptor.get, receiver);
      if (isObject2(prototype = getPrototypeOf(target)))
        return get3(prototype, propertyKey, receiver);
    }
    $({ target: "Reflect", stat: true }, {
      get: get3
    });
  }
});

// node_modules/core-js-pure/es/reflect/get.js
var require_get = __commonJS({
  "node_modules/core-js-pure/es/reflect/get.js"(exports, module) {
    "use strict";
    require_es_reflect_get();
    var path = require_path();
    module.exports = path.Reflect.get;
  }
});

// node_modules/core-js-pure/stable/reflect/get.js
var require_get2 = __commonJS({
  "node_modules/core-js-pure/stable/reflect/get.js"(exports, module) {
    "use strict";
    var parent = require_get();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/reflect/get.js
var require_get3 = __commonJS({
  "node_modules/core-js-pure/actual/reflect/get.js"(exports, module) {
    "use strict";
    var parent = require_get2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/reflect/get.js
var require_get4 = __commonJS({
  "node_modules/core-js-pure/full/reflect/get.js"(exports, module) {
    "use strict";
    var parent = require_get3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/reflect/get.js
var require_get5 = __commonJS({
  "node_modules/core-js-pure/features/reflect/get.js"(exports, module) {
    "use strict";
    module.exports = require_get4();
  }
});

// node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js
var require_es_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js-pure/modules/es.object.get-own-property-descriptor.js"() {
    "use strict";
    var $ = require_export();
    var fails = require_fails();
    var toIndexedObject = require_to_indexed_object();
    var nativeGetOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var DESCRIPTORS = require_descriptors();
    var FORCED = !DESCRIPTORS || fails(function() {
      nativeGetOwnPropertyDescriptor(1);
    });
    $({ target: "Object", stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
        return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
      }
    });
  }
});

// node_modules/core-js-pure/es/object/get-own-property-descriptor.js
var require_get_own_property_descriptor = __commonJS({
  "node_modules/core-js-pure/es/object/get-own-property-descriptor.js"(exports, module) {
    "use strict";
    require_es_object_get_own_property_descriptor();
    var path = require_path();
    var Object2 = path.Object;
    var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor2(it, key) {
      return Object2.getOwnPropertyDescriptor(it, key);
    };
    if (Object2.getOwnPropertyDescriptor.sham)
      getOwnPropertyDescriptor.sham = true;
  }
});

// node_modules/core-js-pure/stable/object/get-own-property-descriptor.js
var require_get_own_property_descriptor2 = __commonJS({
  "node_modules/core-js-pure/stable/object/get-own-property-descriptor.js"(exports, module) {
    "use strict";
    var parent = require_get_own_property_descriptor();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/actual/object/get-own-property-descriptor.js
var require_get_own_property_descriptor3 = __commonJS({
  "node_modules/core-js-pure/actual/object/get-own-property-descriptor.js"(exports, module) {
    "use strict";
    var parent = require_get_own_property_descriptor2();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/full/object/get-own-property-descriptor.js
var require_get_own_property_descriptor4 = __commonJS({
  "node_modules/core-js-pure/full/object/get-own-property-descriptor.js"(exports, module) {
    "use strict";
    var parent = require_get_own_property_descriptor3();
    module.exports = parent;
  }
});

// node_modules/core-js-pure/features/object/get-own-property-descriptor.js
var require_get_own_property_descriptor5 = __commonJS({
  "node_modules/core-js-pure/features/object/get-own-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = require_get_own_property_descriptor4();
  }
});

// node_modules/core-js-pure/internals/is-integral-number.js
var require_is_integral_number = __commonJS({
  "node_modules/core-js-pure/internals/is-integral-number.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var floor = Math.floor;
    module.exports = Number.isInteger || function isInteger(it) {
      return !isObject2(it) && isFinite(it) && floor(it) === it;
    };
  }
});

// node_modules/core-js-pure/modules/es.number.is-integer.js
var require_es_number_is_integer = __commonJS({
  "node_modules/core-js-pure/modules/es.number.is-integer.js"() {
    "use strict";
    var $ = require_export();
    var isIntegralNumber = require_is_integral_number();
    $({ target: "Number", stat: true }, {
      isInteger: isIntegralNumber
    });
  }
});

// node_modules/core-js-pure/es/number/is-integer.js
var require_is_integer = __commonJS({
  "node_modules/core-js-pure/es/number/is-integer.js"(exports, module) {
    "use strict";
    require_es_number_is_integer();
    var path = require_path();
    module.exports = path.Number.isInteger;
  }
});

// node_modules/core-js-pure/stable/number/is-integer.js
var require_is_integer2 = __commonJS({
  "node_modules/core-js-pure/stable/number/is-integer.js"(exports, module) {
    "use strict";
    var parent = require_is_integer();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/number/is-integer.js
var require_is_integer3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/number/is-integer.js"(exports, module) {
    module.exports = require_is_integer2();
  }
});

// node_modules/core-js-pure/internals/url-constructor-detection.js
var require_url_constructor_detection = __commonJS({
  "node_modules/core-js-pure/internals/url-constructor-detection.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var wellKnownSymbol = require_well_known_symbol();
    var DESCRIPTORS = require_descriptors();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    module.exports = !fails(function() {
      var url = new URL("b?a=1&b=2&c=3", "http://a");
      var params = url.searchParams;
      var params2 = new URLSearchParams("a=1&a=2&b=3");
      var result = "";
      url.pathname = "c%20d";
      params.forEach(function(value, key) {
        params["delete"]("b");
        result += key + value;
      });
      params2["delete"]("a", 2);
      params2["delete"]("b", void 0);
      return IS_PURE && (!url.toJSON || !params2.has("a", 1) || params2.has("a", 2) || !params2.has("a", void 0) || params2.has("b")) || !params.size && (IS_PURE || !DESCRIPTORS) || !params.sort || url.href !== "http://a/c%20d?a=1&c=3" || params.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !params[ITERATOR] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("http://тест").host !== "xn--e1aybc" || new URL("http://a#б").hash !== "#%D0%B1" || result !== "a1c3" || new URL("http://x", void 0).host !== "x";
    });
  }
});

// node_modules/core-js-pure/internals/array-sort.js
var require_array_sort = __commonJS({
  "node_modules/core-js-pure/internals/array-sort.js"(exports, module) {
    "use strict";
    var arraySlice = require_array_slice();
    var floor = Math.floor;
    var sort = function(array, comparefn) {
      var length = array.length;
      if (length < 8) {
        var i = 1;
        var element, j;
        while (i < length) {
          j = i;
          element = array[i];
          while (j && comparefn(array[j - 1], element) > 0) {
            array[j] = array[--j];
          }
          if (j !== i++)
            array[j] = element;
        }
      } else {
        var middle = floor(length / 2);
        var left = sort(arraySlice(array, 0, middle), comparefn);
        var right = sort(arraySlice(array, middle), comparefn);
        var llength = left.length;
        var rlength = right.length;
        var lindex = 0;
        var rindex = 0;
        while (lindex < llength || rindex < rlength) {
          array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
        }
      }
      return array;
    };
    module.exports = sort;
  }
});

// node_modules/core-js-pure/modules/web.url-search-params.constructor.js
var require_web_url_search_params_constructor = __commonJS({
  "node_modules/core-js-pure/modules/web.url-search-params.constructor.js"(exports, module) {
    "use strict";
    require_es_array_iterator();
    var $ = require_export();
    var global2 = require_global();
    var safeGetBuiltIn = require_safe_get_built_in();
    var call = require_function_call();
    var uncurryThis = require_function_uncurry_this();
    var DESCRIPTORS = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var defineBuiltIns = require_define_built_ins();
    var setToStringTag = require_set_to_string_tag();
    var createIteratorConstructor = require_iterator_create_constructor();
    var InternalStateModule = require_internal_state();
    var anInstance = require_an_instance();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var bind2 = require_function_bind_context();
    var classof = require_classof();
    var anObject = require_an_object();
    var isObject2 = require_is_object();
    var $toString = require_to_string();
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var createIterResultObject = require_create_iter_result_object();
    var validateArgumentsLength = require_validate_arguments_length();
    var wellKnownSymbol = require_well_known_symbol();
    var arraySort = require_array_sort();
    var ITERATOR = wellKnownSymbol("iterator");
    var URL_SEARCH_PARAMS = "URLSearchParams";
    var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + "Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
    var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
    var nativeFetch = safeGetBuiltIn("fetch");
    var NativeRequest = safeGetBuiltIn("Request");
    var Headers = safeGetBuiltIn("Headers");
    var RequestPrototype = NativeRequest && NativeRequest.prototype;
    var HeadersPrototype = Headers && Headers.prototype;
    var RegExp2 = global2.RegExp;
    var TypeError2 = global2.TypeError;
    var decodeURIComponent2 = global2.decodeURIComponent;
    var encodeURIComponent2 = global2.encodeURIComponent;
    var charAt = uncurryThis("".charAt);
    var join = uncurryThis([].join);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var shift = uncurryThis([].shift);
    var splice = uncurryThis([].splice);
    var split = uncurryThis("".split);
    var stringSlice = uncurryThis("".slice);
    var plus = /\+/g;
    var sequences = Array(4);
    var percentSequence = function(bytes) {
      return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp2("((?:%[\\da-f]{2}){" + bytes + "})", "gi"));
    };
    var percentDecode = function(sequence) {
      try {
        return decodeURIComponent2(sequence);
      } catch (error) {
        return sequence;
      }
    };
    var deserialize = function(it) {
      var result = replace(it, plus, " ");
      var bytes = 4;
      try {
        return decodeURIComponent2(result);
      } catch (error) {
        while (bytes) {
          result = replace(result, percentSequence(bytes--), percentDecode);
        }
        return result;
      }
    };
    var find2 = /[!'()~]|%20/g;
    var replacements = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+"
    };
    var replacer = function(match) {
      return replacements[match];
    };
    var serialize = function(it) {
      return replace(encodeURIComponent2(it), find2, replacer);
    };
    var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
      setInternalState(this, {
        type: URL_SEARCH_PARAMS_ITERATOR,
        target: getInternalParamsState(params).entries,
        index: 0,
        kind
      });
    }, URL_SEARCH_PARAMS, function next() {
      var state = getInternalIteratorState(this);
      var target = state.target;
      var index = state.index++;
      if (!target || index >= target.length) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      var entry = target[index];
      switch (state.kind) {
        case "keys":
          return createIterResultObject(entry.key, false);
        case "values":
          return createIterResultObject(entry.value, false);
      }
      return createIterResultObject([entry.key, entry.value], false);
    }, true);
    var URLSearchParamsState = function(init) {
      this.entries = [];
      this.url = null;
      if (init !== void 0) {
        if (isObject2(init))
          this.parseObject(init);
        else
          this.parseQuery(typeof init == "string" ? charAt(init, 0) === "?" ? stringSlice(init, 1) : init : $toString(init));
      }
    };
    URLSearchParamsState.prototype = {
      type: URL_SEARCH_PARAMS,
      bindURL: function(url) {
        this.url = url;
        this.update();
      },
      parseObject: function(object) {
        var entries = this.entries;
        var iteratorMethod = getIteratorMethod(object);
        var iterator, next, step, entryIterator, entryNext, first, second;
        if (iteratorMethod) {
          iterator = getIterator(object, iteratorMethod);
          next = iterator.next;
          while (!(step = call(next, iterator)).done) {
            entryIterator = getIterator(anObject(step.value));
            entryNext = entryIterator.next;
            if ((first = call(entryNext, entryIterator)).done || (second = call(entryNext, entryIterator)).done || !call(entryNext, entryIterator).done)
              throw new TypeError2("Expected sequence with length 2");
            push(entries, { key: $toString(first.value), value: $toString(second.value) });
          }
        } else
          for (var key in object)
            if (hasOwn(object, key)) {
              push(entries, { key, value: $toString(object[key]) });
            }
      },
      parseQuery: function(query) {
        if (query) {
          var entries = this.entries;
          var attributes = split(query, "&");
          var index = 0;
          var attribute, entry;
          while (index < attributes.length) {
            attribute = attributes[index++];
            if (attribute.length) {
              entry = split(attribute, "=");
              push(entries, {
                key: deserialize(shift(entry)),
                value: deserialize(join(entry, "="))
              });
            }
          }
        }
      },
      serialize: function() {
        var entries = this.entries;
        var result = [];
        var index = 0;
        var entry;
        while (index < entries.length) {
          entry = entries[index++];
          push(result, serialize(entry.key) + "=" + serialize(entry.value));
        }
        return join(result, "&");
      },
      update: function() {
        this.entries.length = 0;
        this.parseQuery(this.url.query);
      },
      updateURL: function() {
        if (this.url)
          this.url.update();
      }
    };
    var URLSearchParamsConstructor = function URLSearchParams2() {
      anInstance(this, URLSearchParamsPrototype);
      var init = arguments.length > 0 ? arguments[0] : void 0;
      var state = setInternalState(this, new URLSearchParamsState(init));
      if (!DESCRIPTORS)
        this.size = state.entries.length;
    };
    var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
    defineBuiltIns(URLSearchParamsPrototype, {
      // `URLSearchParams.prototype.append` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-append
      append: function append(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 2);
        push(state.entries, { key: $toString(name), value: $toString(value) });
        if (!DESCRIPTORS)
          this.length++;
        state.updateURL();
      },
      // `URLSearchParams.prototype.delete` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
      "delete": function(name) {
        var state = getInternalParamsState(this);
        var length = validateArgumentsLength(arguments.length, 1);
        var entries = state.entries;
        var key = $toString(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString($value);
        var index = 0;
        while (index < entries.length) {
          var entry = entries[index];
          if (entry.key === key && (value === void 0 || entry.value === value)) {
            splice(entries, index, 1);
            if (value !== void 0)
              break;
          } else
            index++;
        }
        if (!DESCRIPTORS)
          this.size = entries.length;
        state.updateURL();
      },
      // `URLSearchParams.prototype.get` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-get
      get: function get3(name) {
        var entries = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var index = 0;
        for (; index < entries.length; index++) {
          if (entries[index].key === key)
            return entries[index].value;
        }
        return null;
      },
      // `URLSearchParams.prototype.getAll` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
      getAll: function getAll(name) {
        var entries = getInternalParamsState(this).entries;
        validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var result = [];
        var index = 0;
        for (; index < entries.length; index++) {
          if (entries[index].key === key)
            push(result, entries[index].value);
        }
        return result;
      },
      // `URLSearchParams.prototype.has` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-has
      has: function has(name) {
        var entries = getInternalParamsState(this).entries;
        var length = validateArgumentsLength(arguments.length, 1);
        var key = $toString(name);
        var $value = length < 2 ? void 0 : arguments[1];
        var value = $value === void 0 ? $value : $toString($value);
        var index = 0;
        while (index < entries.length) {
          var entry = entries[index++];
          if (entry.key === key && (value === void 0 || entry.value === value))
            return true;
        }
        return false;
      },
      // `URLSearchParams.prototype.set` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-set
      set: function set2(name, value) {
        var state = getInternalParamsState(this);
        validateArgumentsLength(arguments.length, 1);
        var entries = state.entries;
        var found = false;
        var key = $toString(name);
        var val = $toString(value);
        var index = 0;
        var entry;
        for (; index < entries.length; index++) {
          entry = entries[index];
          if (entry.key === key) {
            if (found)
              splice(entries, index--, 1);
            else {
              found = true;
              entry.value = val;
            }
          }
        }
        if (!found)
          push(entries, { key, value: val });
        if (!DESCRIPTORS)
          this.size = entries.length;
        state.updateURL();
      },
      // `URLSearchParams.prototype.sort` method
      // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
      sort: function sort() {
        var state = getInternalParamsState(this);
        arraySort(state.entries, function(a3, b3) {
          return a3.key > b3.key ? 1 : -1;
        });
        state.updateURL();
      },
      // `URLSearchParams.prototype.forEach` method
      forEach: function forEach(callback) {
        var entries = getInternalParamsState(this).entries;
        var boundFunction = bind2(callback, arguments.length > 1 ? arguments[1] : void 0);
        var index = 0;
        var entry;
        while (index < entries.length) {
          entry = entries[index++];
          boundFunction(entry.value, entry.key, this);
        }
      },
      // `URLSearchParams.prototype.keys` method
      keys: function keys() {
        return new URLSearchParamsIterator(this, "keys");
      },
      // `URLSearchParams.prototype.values` method
      values: function values() {
        return new URLSearchParamsIterator(this, "values");
      },
      // `URLSearchParams.prototype.entries` method
      entries: function entries() {
        return new URLSearchParamsIterator(this, "entries");
      }
    }, { enumerable: true });
    defineBuiltIn(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: "entries" });
    defineBuiltIn(URLSearchParamsPrototype, "toString", function toString() {
      return getInternalParamsState(this).serialize();
    }, { enumerable: true });
    if (DESCRIPTORS)
      defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
          return getInternalParamsState(this).entries.length;
        },
        configurable: true,
        enumerable: true
      });
    setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
    $({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
      URLSearchParams: URLSearchParamsConstructor
    });
    if (!USE_NATIVE_URL && isCallable(Headers)) {
      headersHas = uncurryThis(HeadersPrototype.has);
      headersSet = uncurryThis(HeadersPrototype.set);
      wrapRequestOptions = function(init) {
        if (isObject2(init)) {
          var body = init.body;
          var headers;
          if (classof(body) === URL_SEARCH_PARAMS) {
            headers = init.headers ? new Headers(init.headers) : new Headers();
            if (!headersHas(headers, "content-type")) {
              headersSet(headers, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
            return create(init, {
              body: createPropertyDescriptor(0, $toString(body)),
              headers: createPropertyDescriptor(0, headers)
            });
          }
        }
        return init;
      };
      if (isCallable(nativeFetch)) {
        $({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
          fetch: function fetch(input) {
            return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
          }
        });
      }
      if (isCallable(NativeRequest)) {
        RequestConstructor = function Request(input) {
          anInstance(this, RequestPrototype);
          return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        };
        RequestPrototype.constructor = RequestConstructor;
        RequestConstructor.prototype = RequestPrototype;
        $({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
          Request: RequestConstructor
        });
      }
    }
    var headersHas;
    var headersSet;
    var wrapRequestOptions;
    var RequestConstructor;
    module.exports = {
      URLSearchParams: URLSearchParamsConstructor,
      getState: getInternalParamsState
    };
  }
});

// node_modules/core-js-pure/modules/web.url-search-params.js
var require_web_url_search_params = __commonJS({
  "node_modules/core-js-pure/modules/web.url-search-params.js"() {
    "use strict";
    require_web_url_search_params_constructor();
  }
});

// node_modules/core-js-pure/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/core-js-pure/modules/web.url-search-params.delete.js"() {
  }
});

// node_modules/core-js-pure/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/core-js-pure/modules/web.url-search-params.has.js"() {
  }
});

// node_modules/core-js-pure/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/core-js-pure/modules/web.url-search-params.size.js"() {
  }
});

// node_modules/core-js-pure/web/url-search-params.js
var require_url_search_params = __commonJS({
  "node_modules/core-js-pure/web/url-search-params.js"(exports, module) {
    "use strict";
    require_web_url_search_params();
    require_web_url_search_params_delete();
    require_web_url_search_params_has();
    require_web_url_search_params_size();
    var path = require_path();
    module.exports = path.URLSearchParams;
  }
});

// node_modules/core-js-pure/internals/string-punycode-to-ascii.js
var require_string_punycode_to_ascii = __commonJS({
  "node_modules/core-js-pure/internals/string-punycode-to-ascii.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var maxInt = 2147483647;
    var base = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128;
    var delimiter = "-";
    var regexNonASCII = /[^\0-\u007E]/;
    var regexSeparators = /[.\u3002\uFF0E\uFF61]/g;
    var OVERFLOW_ERROR = "Overflow: input needs wider integers to process";
    var baseMinusTMin = base - tMin;
    var $RangeError = RangeError;
    var exec = uncurryThis(regexSeparators.exec);
    var floor = Math.floor;
    var fromCharCode = String.fromCharCode;
    var charCodeAt = uncurryThis("".charCodeAt);
    var join = uncurryThis([].join);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var split = uncurryThis("".split);
    var toLowerCase = uncurryThis("".toLowerCase);
    var ucs2decode = function(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      while (counter < length) {
        var value = charCodeAt(string, counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          var extra = charCodeAt(string, counter++);
          if ((extra & 64512) === 56320) {
            push(output, ((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            push(output, value);
            counter--;
          }
        } else {
          push(output, value);
        }
      }
      return output;
    };
    var digitToBasic = function(digit) {
      return digit + 22 + 75 * (digit < 26);
    };
    var adapt = function(delta, numPoints, firstTime) {
      var k = 0;
      delta = firstTime ? floor(delta / damp) : delta >> 1;
      delta += floor(delta / numPoints);
      while (delta > baseMinusTMin * tMax >> 1) {
        delta = floor(delta / baseMinusTMin);
        k += base;
      }
      return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    var encode = function(input) {
      var output = [];
      input = ucs2decode(input);
      var inputLength = input.length;
      var n = initialN;
      var delta = 0;
      var bias = initialBias;
      var i, currentValue;
      for (i = 0; i < input.length; i++) {
        currentValue = input[i];
        if (currentValue < 128) {
          push(output, fromCharCode(currentValue));
        }
      }
      var basicLength = output.length;
      var handledCPCount = basicLength;
      if (basicLength) {
        push(output, delimiter);
      }
      while (handledCPCount < inputLength) {
        var m = maxInt;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue >= n && currentValue < m) {
            m = currentValue;
          }
        }
        var handledCPCountPlusOne = handledCPCount + 1;
        if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
          throw new $RangeError(OVERFLOW_ERROR);
        }
        delta += (m - n) * handledCPCountPlusOne;
        n = m;
        for (i = 0; i < input.length; i++) {
          currentValue = input[i];
          if (currentValue < n && ++delta > maxInt) {
            throw new $RangeError(OVERFLOW_ERROR);
          }
          if (currentValue === n) {
            var q = delta;
            var k = base;
            while (true) {
              var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
              if (q < t)
                break;
              var qMinusT = q - t;
              var baseMinusT = base - t;
              push(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
              q = floor(qMinusT / baseMinusT);
              k += base;
            }
            push(output, fromCharCode(digitToBasic(q)));
            bias = adapt(delta, handledCPCountPlusOne, handledCPCount === basicLength);
            delta = 0;
            handledCPCount++;
          }
        }
        delta++;
        n++;
      }
      return join(output, "");
    };
    module.exports = function(input) {
      var encoded = [];
      var labels = split(replace(toLowerCase(input), regexSeparators, "."), ".");
      var i, label;
      for (i = 0; i < labels.length; i++) {
        label = labels[i];
        push(encoded, exec(regexNonASCII, label) ? "xn--" + encode(label) : label);
      }
      return join(encoded, ".");
    };
  }
});

// node_modules/core-js-pure/modules/web.url.constructor.js
var require_web_url_constructor = __commonJS({
  "node_modules/core-js-pure/modules/web.url.constructor.js"() {
    "use strict";
    require_es_string_iterator();
    var $ = require_export();
    var DESCRIPTORS = require_descriptors();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var global2 = require_global();
    var bind2 = require_function_bind_context();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltIn = require_define_built_in();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var anInstance = require_an_instance();
    var hasOwn = require_has_own_property();
    var assign = require_object_assign();
    var arrayFrom = require_array_from();
    var arraySlice = require_array_slice();
    var codeAt = require_string_multibyte().codeAt;
    var toASCII = require_string_punycode_to_ascii();
    var $toString = require_to_string();
    var setToStringTag = require_set_to_string_tag();
    var validateArgumentsLength = require_validate_arguments_length();
    var URLSearchParamsModule = require_web_url_search_params_constructor();
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var getInternalURLState = InternalStateModule.getterFor("URL");
    var URLSearchParams2 = URLSearchParamsModule.URLSearchParams;
    var getInternalSearchParamsState = URLSearchParamsModule.getState;
    var NativeURL = global2.URL;
    var TypeError2 = global2.TypeError;
    var parseInt2 = global2.parseInt;
    var floor = Math.floor;
    var pow = Math.pow;
    var charAt = uncurryThis("".charAt);
    var exec = uncurryThis(/./.exec);
    var join = uncurryThis([].join);
    var numberToString = uncurryThis(1 .toString);
    var pop = uncurryThis([].pop);
    var push = uncurryThis([].push);
    var replace = uncurryThis("".replace);
    var shift = uncurryThis([].shift);
    var split = uncurryThis("".split);
    var stringSlice = uncurryThis("".slice);
    var toLowerCase = uncurryThis("".toLowerCase);
    var unshift = uncurryThis([].unshift);
    var INVALID_AUTHORITY = "Invalid authority";
    var INVALID_SCHEME = "Invalid scheme";
    var INVALID_HOST = "Invalid host";
    var INVALID_PORT = "Invalid port";
    var ALPHA = /[a-z]/i;
    var ALPHANUMERIC = /[\d+-.a-z]/i;
    var DIGIT = /\d/;
    var HEX_START = /^0x/i;
    var OCT = /^[0-7]+$/;
    var DEC = /^\d+$/;
    var HEX = /^[\da-f]+$/i;
    var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
    var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
    var LEADING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+/;
    var TRAILING_C0_CONTROL_OR_SPACE = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
    var TAB_AND_NEW_LINE = /[\t\n\r]/g;
    var EOF;
    var parseIPv4 = function(input) {
      var parts = split(input, ".");
      var partsLength, numbers, index, part, radix, number, ipv4;
      if (parts.length && parts[parts.length - 1] === "") {
        parts.length--;
      }
      partsLength = parts.length;
      if (partsLength > 4)
        return input;
      numbers = [];
      for (index = 0; index < partsLength; index++) {
        part = parts[index];
        if (part === "")
          return input;
        radix = 10;
        if (part.length > 1 && charAt(part, 0) === "0") {
          radix = exec(HEX_START, part) ? 16 : 8;
          part = stringSlice(part, radix === 8 ? 1 : 2);
        }
        if (part === "") {
          number = 0;
        } else {
          if (!exec(radix === 10 ? DEC : radix === 8 ? OCT : HEX, part))
            return input;
          number = parseInt2(part, radix);
        }
        push(numbers, number);
      }
      for (index = 0; index < partsLength; index++) {
        number = numbers[index];
        if (index === partsLength - 1) {
          if (number >= pow(256, 5 - partsLength))
            return null;
        } else if (number > 255)
          return null;
      }
      ipv4 = pop(numbers);
      for (index = 0; index < numbers.length; index++) {
        ipv4 += numbers[index] * pow(256, 3 - index);
      }
      return ipv4;
    };
    var parseIPv6 = function(input) {
      var address = [0, 0, 0, 0, 0, 0, 0, 0];
      var pieceIndex = 0;
      var compress = null;
      var pointer = 0;
      var value, length, numbersSeen, ipv4Piece, number, swaps, swap;
      var chr = function() {
        return charAt(input, pointer);
      };
      if (chr() === ":") {
        if (charAt(input, 1) !== ":")
          return;
        pointer += 2;
        pieceIndex++;
        compress = pieceIndex;
      }
      while (chr()) {
        if (pieceIndex === 8)
          return;
        if (chr() === ":") {
          if (compress !== null)
            return;
          pointer++;
          pieceIndex++;
          compress = pieceIndex;
          continue;
        }
        value = length = 0;
        while (length < 4 && exec(HEX, chr())) {
          value = value * 16 + parseInt2(chr(), 16);
          pointer++;
          length++;
        }
        if (chr() === ".") {
          if (length === 0)
            return;
          pointer -= length;
          if (pieceIndex > 6)
            return;
          numbersSeen = 0;
          while (chr()) {
            ipv4Piece = null;
            if (numbersSeen > 0) {
              if (chr() === "." && numbersSeen < 4)
                pointer++;
              else
                return;
            }
            if (!exec(DIGIT, chr()))
              return;
            while (exec(DIGIT, chr())) {
              number = parseInt2(chr(), 10);
              if (ipv4Piece === null)
                ipv4Piece = number;
              else if (ipv4Piece === 0)
                return;
              else
                ipv4Piece = ipv4Piece * 10 + number;
              if (ipv4Piece > 255)
                return;
              pointer++;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            numbersSeen++;
            if (numbersSeen === 2 || numbersSeen === 4)
              pieceIndex++;
          }
          if (numbersSeen !== 4)
            return;
          break;
        } else if (chr() === ":") {
          pointer++;
          if (!chr())
            return;
        } else if (chr())
          return;
        address[pieceIndex++] = value;
      }
      if (compress !== null) {
        swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          swap = address[pieceIndex];
          address[pieceIndex--] = address[compress + swaps - 1];
          address[compress + --swaps] = swap;
        }
      } else if (pieceIndex !== 8)
        return;
      return address;
    };
    var findLongestZeroSequence = function(ipv6) {
      var maxIndex = null;
      var maxLength = 1;
      var currStart = null;
      var currLength = 0;
      var index = 0;
      for (; index < 8; index++) {
        if (ipv6[index] !== 0) {
          if (currLength > maxLength) {
            maxIndex = currStart;
            maxLength = currLength;
          }
          currStart = null;
          currLength = 0;
        } else {
          if (currStart === null)
            currStart = index;
          ++currLength;
        }
      }
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      return maxIndex;
    };
    var serializeHost = function(host) {
      var result, index, compress, ignore0;
      if (typeof host == "number") {
        result = [];
        for (index = 0; index < 4; index++) {
          unshift(result, host % 256);
          host = floor(host / 256);
        }
        return join(result, ".");
      } else if (typeof host == "object") {
        result = "";
        compress = findLongestZeroSequence(host);
        for (index = 0; index < 8; index++) {
          if (ignore0 && host[index] === 0)
            continue;
          if (ignore0)
            ignore0 = false;
          if (compress === index) {
            result += index ? ":" : "::";
            ignore0 = true;
          } else {
            result += numberToString(host[index], 16);
            if (index < 7)
              result += ":";
          }
        }
        return "[" + result + "]";
      }
      return host;
    };
    var C0ControlPercentEncodeSet = {};
    var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
      " ": 1,
      '"': 1,
      "<": 1,
      ">": 1,
      "`": 1
    });
    var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
      "#": 1,
      "?": 1,
      "{": 1,
      "}": 1
    });
    var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1
    });
    var percentEncode = function(chr, set2) {
      var code = codeAt(chr, 0);
      return code > 32 && code < 127 && !hasOwn(set2, chr) ? chr : encodeURIComponent(chr);
    };
    var specialSchemes = {
      ftp: 21,
      file: null,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var isWindowsDriveLetter = function(string, normalized) {
      var second;
      return string.length === 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) === ":" || !normalized && second === "|");
    };
    var startsWithWindowsDriveLetter = function(string) {
      var third;
      return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length === 2 || ((third = charAt(string, 2)) === "/" || third === "\\" || third === "?" || third === "#"));
    };
    var isSingleDot = function(segment) {
      return segment === "." || toLowerCase(segment) === "%2e";
    };
    var isDoubleDot = function(segment) {
      segment = toLowerCase(segment);
      return segment === ".." || segment === "%2e." || segment === ".%2e" || segment === "%2e%2e";
    };
    var SCHEME_START = {};
    var SCHEME = {};
    var NO_SCHEME = {};
    var SPECIAL_RELATIVE_OR_AUTHORITY = {};
    var PATH_OR_AUTHORITY = {};
    var RELATIVE = {};
    var RELATIVE_SLASH = {};
    var SPECIAL_AUTHORITY_SLASHES = {};
    var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
    var AUTHORITY = {};
    var HOST = {};
    var HOSTNAME = {};
    var PORT = {};
    var FILE = {};
    var FILE_SLASH = {};
    var FILE_HOST = {};
    var PATH_START = {};
    var PATH = {};
    var CANNOT_BE_A_BASE_URL_PATH = {};
    var QUERY = {};
    var FRAGMENT = {};
    var URLState = function(url, isBase, base) {
      var urlString = $toString(url);
      var baseState, failure, searchParams;
      if (isBase) {
        failure = this.parse(urlString);
        if (failure)
          throw new TypeError2(failure);
        this.searchParams = null;
      } else {
        if (base !== void 0)
          baseState = new URLState(base, true);
        failure = this.parse(urlString, null, baseState);
        if (failure)
          throw new TypeError2(failure);
        searchParams = getInternalSearchParamsState(new URLSearchParams2());
        searchParams.bindURL(this);
        this.searchParams = searchParams;
      }
    };
    URLState.prototype = {
      type: "URL",
      // https://url.spec.whatwg.org/#url-parsing
      // eslint-disable-next-line max-statements -- TODO
      parse: function(input, stateOverride, base) {
        var url = this;
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = "";
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;
        var codePoints, chr, bufferCodePoints, failure;
        input = $toString(input);
        if (!stateOverride) {
          url.scheme = "";
          url.username = "";
          url.password = "";
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = replace(input, LEADING_C0_CONTROL_OR_SPACE, "");
          input = replace(input, TRAILING_C0_CONTROL_OR_SPACE, "$1");
        }
        input = replace(input, TAB_AND_NEW_LINE, "");
        codePoints = arrayFrom(input);
        while (pointer <= codePoints.length) {
          chr = codePoints[pointer];
          switch (state) {
            case SCHEME_START:
              if (chr && exec(ALPHA, chr)) {
                buffer += toLowerCase(chr);
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else
                return INVALID_SCHEME;
              break;
            case SCHEME:
              if (chr && (exec(ALPHANUMERIC, chr) || chr === "+" || chr === "-" || chr === ".")) {
                buffer += toLowerCase(chr);
              } else if (chr === ":") {
                if (stateOverride && (url.isSpecial() !== hasOwn(specialSchemes, buffer) || buffer === "file" && (url.includesCredentials() || url.port !== null) || url.scheme === "file" && !url.host))
                  return;
                url.scheme = buffer;
                if (stateOverride) {
                  if (url.isSpecial() && specialSchemes[url.scheme] === url.port)
                    url.port = null;
                  return;
                }
                buffer = "";
                if (url.scheme === "file") {
                  state = FILE;
                } else if (url.isSpecial() && base && base.scheme === url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (url.isSpecial()) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] === "/") {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  push(url.path, "");
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = "";
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else
                return INVALID_SCHEME;
              break;
            case NO_SCHEME:
              if (!base || base.cannotBeABaseURL && chr !== "#")
                return INVALID_SCHEME;
              if (base.cannotBeABaseURL && chr === "#") {
                url.scheme = base.scheme;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = "";
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }
              state = base.scheme === "file" ? FILE : RELATIVE;
              continue;
            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (chr === "/" && codePoints[pointer + 1] === "/") {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              }
              break;
            case PATH_OR_AUTHORITY:
              if (chr === "/") {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }
            case RELATIVE:
              url.scheme = base.scheme;
              if (chr === EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = base.query;
              } else if (chr === "/" || chr === "\\" && url.isSpecial()) {
                state = RELATIVE_SLASH;
              } else if (chr === "?") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.query = base.query;
                url.fragment = "";
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = arraySlice(base.path);
                url.path.length--;
                state = PATH;
                continue;
              }
              break;
            case RELATIVE_SLASH:
              if (url.isSpecial() && (chr === "/" || chr === "\\")) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (chr === "/") {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              }
              break;
            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (chr !== "/" || charAt(buffer, pointer + 1) !== "/")
                continue;
              pointer++;
              break;
            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (chr !== "/" && chr !== "\\") {
                state = AUTHORITY;
                continue;
              }
              break;
            case AUTHORITY:
              if (chr === "@") {
                if (seenAt)
                  buffer = "%40" + buffer;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);
                for (var i = 0; i < bufferCodePoints.length; i++) {
                  var codePoint = bufferCodePoints[i];
                  if (codePoint === ":" && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }
                  var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken)
                    url.password += encodedCodePoints;
                  else
                    url.username += encodedCodePoints;
                }
                buffer = "";
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (seenAt && buffer === "")
                  return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = "";
                state = HOST;
              } else
                buffer += chr;
              break;
            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme === "file") {
                state = FILE_HOST;
                continue;
              } else if (chr === ":" && !seenBracket) {
                if (buffer === "")
                  return INVALID_HOST;
                failure = url.parseHost(buffer);
                if (failure)
                  return failure;
                buffer = "";
                state = PORT;
                if (stateOverride === HOSTNAME)
                  return;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial()) {
                if (url.isSpecial() && buffer === "")
                  return INVALID_HOST;
                if (stateOverride && buffer === "" && (url.includesCredentials() || url.port !== null))
                  return;
                failure = url.parseHost(buffer);
                if (failure)
                  return failure;
                buffer = "";
                state = PATH_START;
                if (stateOverride)
                  return;
                continue;
              } else {
                if (chr === "[")
                  seenBracket = true;
                else if (chr === "]")
                  seenBracket = false;
                buffer += chr;
              }
              break;
            case PORT:
              if (exec(DIGIT, chr)) {
                buffer += chr;
              } else if (chr === EOF || chr === "/" || chr === "?" || chr === "#" || chr === "\\" && url.isSpecial() || stateOverride) {
                if (buffer !== "") {
                  var port = parseInt2(buffer, 10);
                  if (port > 65535)
                    return INVALID_PORT;
                  url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                  buffer = "";
                }
                if (stateOverride)
                  return;
                state = PATH_START;
                continue;
              } else
                return INVALID_PORT;
              break;
            case FILE:
              url.scheme = "file";
              if (chr === "/" || chr === "\\")
                state = FILE_SLASH;
              else if (base && base.scheme === "file") {
                switch (chr) {
                  case EOF:
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = base.query;
                    break;
                  case "?":
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = "";
                    state = QUERY;
                    break;
                  case "#":
                    url.host = base.host;
                    url.path = arraySlice(base.path);
                    url.query = base.query;
                    url.fragment = "";
                    state = FRAGMENT;
                    break;
                  default:
                    if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                      url.host = base.host;
                      url.path = arraySlice(base.path);
                      url.shortenPath();
                    }
                    state = PATH;
                    continue;
                }
              } else {
                state = PATH;
                continue;
              }
              break;
            case FILE_SLASH:
              if (chr === "/" || chr === "\\") {
                state = FILE_HOST;
                break;
              }
              if (base && base.scheme === "file" && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ""))) {
                if (isWindowsDriveLetter(base.path[0], true))
                  push(url.path, base.path[0]);
                else
                  url.host = base.host;
              }
              state = PATH;
              continue;
            case FILE_HOST:
              if (chr === EOF || chr === "/" || chr === "\\" || chr === "?" || chr === "#") {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer === "") {
                  url.host = "";
                  if (stateOverride)
                    return;
                  state = PATH_START;
                } else {
                  failure = url.parseHost(buffer);
                  if (failure)
                    return failure;
                  if (url.host === "localhost")
                    url.host = "";
                  if (stateOverride)
                    return;
                  buffer = "";
                  state = PATH_START;
                }
                continue;
              } else
                buffer += chr;
              break;
            case PATH_START:
              if (url.isSpecial()) {
                state = PATH;
                if (chr !== "/" && chr !== "\\")
                  continue;
              } else if (!stateOverride && chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                state = PATH;
                if (chr !== "/")
                  continue;
              }
              break;
            case PATH:
              if (chr === EOF || chr === "/" || chr === "\\" && url.isSpecial() || !stateOverride && (chr === "?" || chr === "#")) {
                if (isDoubleDot(buffer)) {
                  url.shortenPath();
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push(url.path, "");
                  }
                } else if (isSingleDot(buffer)) {
                  if (chr !== "/" && !(chr === "\\" && url.isSpecial())) {
                    push(url.path, "");
                  }
                } else {
                  if (url.scheme === "file" && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host)
                      url.host = "";
                    buffer = charAt(buffer, 0) + ":";
                  }
                  push(url.path, buffer);
                }
                buffer = "";
                if (url.scheme === "file" && (chr === EOF || chr === "?" || chr === "#")) {
                  while (url.path.length > 1 && url.path[0] === "") {
                    shift(url.path);
                  }
                }
                if (chr === "?") {
                  url.query = "";
                  state = QUERY;
                } else if (chr === "#") {
                  url.fragment = "";
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(chr, pathPercentEncodeSet);
              }
              break;
            case CANNOT_BE_A_BASE_URL_PATH:
              if (chr === "?") {
                url.query = "";
                state = QUERY;
              } else if (chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
              }
              break;
            case QUERY:
              if (!stateOverride && chr === "#") {
                url.fragment = "";
                state = FRAGMENT;
              } else if (chr !== EOF) {
                if (chr === "'" && url.isSpecial())
                  url.query += "%27";
                else if (chr === "#")
                  url.query += "%23";
                else
                  url.query += percentEncode(chr, C0ControlPercentEncodeSet);
              }
              break;
            case FRAGMENT:
              if (chr !== EOF)
                url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
              break;
          }
          pointer++;
        }
      },
      // https://url.spec.whatwg.org/#host-parsing
      parseHost: function(input) {
        var result, codePoints, index;
        if (charAt(input, 0) === "[") {
          if (charAt(input, input.length - 1) !== "]")
            return INVALID_HOST;
          result = parseIPv6(stringSlice(input, 1, -1));
          if (!result)
            return INVALID_HOST;
          this.host = result;
        } else if (!this.isSpecial()) {
          if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input))
            return INVALID_HOST;
          result = "";
          codePoints = arrayFrom(input);
          for (index = 0; index < codePoints.length; index++) {
            result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
          }
          this.host = result;
        } else {
          input = toASCII(input);
          if (exec(FORBIDDEN_HOST_CODE_POINT, input))
            return INVALID_HOST;
          result = parseIPv4(input);
          if (result === null)
            return INVALID_HOST;
          this.host = result;
        }
      },
      // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
      cannotHaveUsernamePasswordPort: function() {
        return !this.host || this.cannotBeABaseURL || this.scheme === "file";
      },
      // https://url.spec.whatwg.org/#include-credentials
      includesCredentials: function() {
        return this.username !== "" || this.password !== "";
      },
      // https://url.spec.whatwg.org/#is-special
      isSpecial: function() {
        return hasOwn(specialSchemes, this.scheme);
      },
      // https://url.spec.whatwg.org/#shorten-a-urls-path
      shortenPath: function() {
        var path = this.path;
        var pathSize = path.length;
        if (pathSize && (this.scheme !== "file" || pathSize !== 1 || !isWindowsDriveLetter(path[0], true))) {
          path.length--;
        }
      },
      // https://url.spec.whatwg.org/#concept-url-serializer
      serialize: function() {
        var url = this;
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ":";
        if (host !== null) {
          output += "//";
          if (url.includesCredentials()) {
            output += username + (password ? ":" + password : "") + "@";
          }
          output += serializeHost(host);
          if (port !== null)
            output += ":" + port;
        } else if (scheme === "file")
          output += "//";
        output += url.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
        if (query !== null)
          output += "?" + query;
        if (fragment !== null)
          output += "#" + fragment;
        return output;
      },
      // https://url.spec.whatwg.org/#dom-url-href
      setHref: function(href) {
        var failure = this.parse(href);
        if (failure)
          throw new TypeError2(failure);
        this.searchParams.update();
      },
      // https://url.spec.whatwg.org/#dom-url-origin
      getOrigin: function() {
        var scheme = this.scheme;
        var port = this.port;
        if (scheme === "blob")
          try {
            return new URLConstructor(scheme.path[0]).origin;
          } catch (error) {
            return "null";
          }
        if (scheme === "file" || !this.isSpecial())
          return "null";
        return scheme + "://" + serializeHost(this.host) + (port !== null ? ":" + port : "");
      },
      // https://url.spec.whatwg.org/#dom-url-protocol
      getProtocol: function() {
        return this.scheme + ":";
      },
      setProtocol: function(protocol) {
        this.parse($toString(protocol) + ":", SCHEME_START);
      },
      // https://url.spec.whatwg.org/#dom-url-username
      getUsername: function() {
        return this.username;
      },
      setUsername: function(username) {
        var codePoints = arrayFrom($toString(username));
        if (this.cannotHaveUsernamePasswordPort())
          return;
        this.username = "";
        for (var i = 0; i < codePoints.length; i++) {
          this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      },
      // https://url.spec.whatwg.org/#dom-url-password
      getPassword: function() {
        return this.password;
      },
      setPassword: function(password) {
        var codePoints = arrayFrom($toString(password));
        if (this.cannotHaveUsernamePasswordPort())
          return;
        this.password = "";
        for (var i = 0; i < codePoints.length; i++) {
          this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
        }
      },
      // https://url.spec.whatwg.org/#dom-url-host
      getHost: function() {
        var host = this.host;
        var port = this.port;
        return host === null ? "" : port === null ? serializeHost(host) : serializeHost(host) + ":" + port;
      },
      setHost: function(host) {
        if (this.cannotBeABaseURL)
          return;
        this.parse(host, HOST);
      },
      // https://url.spec.whatwg.org/#dom-url-hostname
      getHostname: function() {
        var host = this.host;
        return host === null ? "" : serializeHost(host);
      },
      setHostname: function(hostname) {
        if (this.cannotBeABaseURL)
          return;
        this.parse(hostname, HOSTNAME);
      },
      // https://url.spec.whatwg.org/#dom-url-port
      getPort: function() {
        var port = this.port;
        return port === null ? "" : $toString(port);
      },
      setPort: function(port) {
        if (this.cannotHaveUsernamePasswordPort())
          return;
        port = $toString(port);
        if (port === "")
          this.port = null;
        else
          this.parse(port, PORT);
      },
      // https://url.spec.whatwg.org/#dom-url-pathname
      getPathname: function() {
        var path = this.path;
        return this.cannotBeABaseURL ? path[0] : path.length ? "/" + join(path, "/") : "";
      },
      setPathname: function(pathname) {
        if (this.cannotBeABaseURL)
          return;
        this.path = [];
        this.parse(pathname, PATH_START);
      },
      // https://url.spec.whatwg.org/#dom-url-search
      getSearch: function() {
        var query = this.query;
        return query ? "?" + query : "";
      },
      setSearch: function(search) {
        search = $toString(search);
        if (search === "") {
          this.query = null;
        } else {
          if (charAt(search, 0) === "?")
            search = stringSlice(search, 1);
          this.query = "";
          this.parse(search, QUERY);
        }
        this.searchParams.update();
      },
      // https://url.spec.whatwg.org/#dom-url-searchparams
      getSearchParams: function() {
        return this.searchParams.facade;
      },
      // https://url.spec.whatwg.org/#dom-url-hash
      getHash: function() {
        var fragment = this.fragment;
        return fragment ? "#" + fragment : "";
      },
      setHash: function(hash) {
        hash = $toString(hash);
        if (hash === "") {
          this.fragment = null;
          return;
        }
        if (charAt(hash, 0) === "#")
          hash = stringSlice(hash, 1);
        this.fragment = "";
        this.parse(hash, FRAGMENT);
      },
      update: function() {
        this.query = this.searchParams.serialize() || null;
      }
    };
    var URLConstructor = function URL2(url) {
      var that = anInstance(this, URLPrototype);
      var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : void 0;
      var state = setInternalState(that, new URLState(url, false, base));
      if (!DESCRIPTORS) {
        that.href = state.serialize();
        that.origin = state.getOrigin();
        that.protocol = state.getProtocol();
        that.username = state.getUsername();
        that.password = state.getPassword();
        that.host = state.getHost();
        that.hostname = state.getHostname();
        that.port = state.getPort();
        that.pathname = state.getPathname();
        that.search = state.getSearch();
        that.searchParams = state.getSearchParams();
        that.hash = state.getHash();
      }
    };
    var URLPrototype = URLConstructor.prototype;
    var accessorDescriptor = function(getter, setter) {
      return {
        get: function() {
          return getInternalURLState(this)[getter]();
        },
        set: setter && function(value) {
          return getInternalURLState(this)[setter](value);
        },
        configurable: true,
        enumerable: true
      };
    };
    if (DESCRIPTORS) {
      defineBuiltInAccessor(URLPrototype, "href", accessorDescriptor("serialize", "setHref"));
      defineBuiltInAccessor(URLPrototype, "origin", accessorDescriptor("getOrigin"));
      defineBuiltInAccessor(URLPrototype, "protocol", accessorDescriptor("getProtocol", "setProtocol"));
      defineBuiltInAccessor(URLPrototype, "username", accessorDescriptor("getUsername", "setUsername"));
      defineBuiltInAccessor(URLPrototype, "password", accessorDescriptor("getPassword", "setPassword"));
      defineBuiltInAccessor(URLPrototype, "host", accessorDescriptor("getHost", "setHost"));
      defineBuiltInAccessor(URLPrototype, "hostname", accessorDescriptor("getHostname", "setHostname"));
      defineBuiltInAccessor(URLPrototype, "port", accessorDescriptor("getPort", "setPort"));
      defineBuiltInAccessor(URLPrototype, "pathname", accessorDescriptor("getPathname", "setPathname"));
      defineBuiltInAccessor(URLPrototype, "search", accessorDescriptor("getSearch", "setSearch"));
      defineBuiltInAccessor(URLPrototype, "searchParams", accessorDescriptor("getSearchParams"));
      defineBuiltInAccessor(URLPrototype, "hash", accessorDescriptor("getHash", "setHash"));
    }
    defineBuiltIn(URLPrototype, "toJSON", function toJSON() {
      return getInternalURLState(this).serialize();
    }, { enumerable: true });
    defineBuiltIn(URLPrototype, "toString", function toString() {
      return getInternalURLState(this).serialize();
    }, { enumerable: true });
    if (NativeURL) {
      nativeCreateObjectURL = NativeURL.createObjectURL;
      nativeRevokeObjectURL = NativeURL.revokeObjectURL;
      if (nativeCreateObjectURL)
        defineBuiltIn(URLConstructor, "createObjectURL", bind2(nativeCreateObjectURL, NativeURL));
      if (nativeRevokeObjectURL)
        defineBuiltIn(URLConstructor, "revokeObjectURL", bind2(nativeRevokeObjectURL, NativeURL));
    }
    var nativeCreateObjectURL;
    var nativeRevokeObjectURL;
    setToStringTag(URLConstructor, "URL");
    $({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
      URL: URLConstructor
    });
  }
});

// node_modules/core-js-pure/modules/web.url.js
var require_web_url = __commonJS({
  "node_modules/core-js-pure/modules/web.url.js"() {
    "use strict";
    require_web_url_constructor();
  }
});

// node_modules/core-js-pure/modules/web.url.can-parse.js
var require_web_url_can_parse = __commonJS({
  "node_modules/core-js-pure/modules/web.url.can-parse.js"() {
    "use strict";
    var $ = require_export();
    var getBuiltIn = require_get_built_in();
    var fails = require_fails();
    var validateArgumentsLength = require_validate_arguments_length();
    var toString = require_to_string();
    var USE_NATIVE_URL = require_url_constructor_detection();
    var URL2 = getBuiltIn("URL");
    var THROWS_WITHOUT_ARGUMENTS = USE_NATIVE_URL && fails(function() {
      URL2.canParse();
    });
    var WRONG_ARITY = fails(function() {
      return URL2.canParse.length !== 1;
    });
    $({ target: "URL", stat: true, forced: !THROWS_WITHOUT_ARGUMENTS || WRONG_ARITY }, {
      canParse: function canParse(url) {
        var length = validateArgumentsLength(arguments.length, 1);
        var urlString = toString(url);
        var base = length < 2 || arguments[1] === void 0 ? void 0 : toString(arguments[1]);
        try {
          return !!new URL2(urlString, base);
        } catch (error) {
          return false;
        }
      }
    });
  }
});

// node_modules/core-js-pure/modules/web.url.to-json.js
var require_web_url_to_json = __commonJS({
  "node_modules/core-js-pure/modules/web.url.to-json.js"() {
  }
});

// node_modules/core-js-pure/web/url.js
var require_url = __commonJS({
  "node_modules/core-js-pure/web/url.js"(exports, module) {
    "use strict";
    require_url_search_params();
    require_web_url();
    require_web_url_can_parse();
    require_web_url_to_json();
    var path = require_path();
    module.exports = path.URL;
  }
});

// node_modules/core-js-pure/stable/url/index.js
var require_url2 = __commonJS({
  "node_modules/core-js-pure/stable/url/index.js"(exports, module) {
    "use strict";
    var parent = require_url();
    module.exports = parent;
  }
});

// node_modules/@babel/runtime-corejs3/core-js-stable/url.js
var require_url3 = __commonJS({
  "node_modules/@babel/runtime-corejs3/core-js-stable/url.js"(exports, module) {
    module.exports = require_url2();
  }
});

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_reduce = __toESM(require_reduce4());
var import_construct4 = __toESM(require_construct3());

// node_modules/@babel/runtime-corejs3/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js
var import_create = __toESM(require_create5());
var import_define_property = __toESM(require_define_property5());

// node_modules/@babel/runtime-corejs3/helpers/esm/setPrototypeOf.js
var import_set_prototype_of = __toESM(require_set_prototype_of5(), 1);
var import_bind = __toESM(require_bind6(), 1);
function _setPrototypeOf(o, p) {
  var _context2;
  _setPrototypeOf = import_set_prototype_of.default ? (0, import_bind.default)(_context2 = import_set_prototype_of.default).call(_context2) : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = (0, import_create.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  (0, import_define_property.default)(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/typeof.js
var import_symbol = __toESM(require_symbol5());
var import_iterator = __toESM(require_iterator5());
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof import_symbol.default && "symbol" == typeof import_iterator.default ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof import_symbol.default && o2.constructor === import_symbol.default && o2 !== import_symbol.default.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/getPrototypeOf.js
var import_set_prototype_of2 = __toESM(require_set_prototype_of5());
var import_bind2 = __toESM(require_bind6());
var import_get_prototype_of = __toESM(require_get_prototype_of5());
function _getPrototypeOf(o) {
  var _context2;
  _getPrototypeOf = import_set_prototype_of2.default ? (0, import_bind2.default)(_context2 = import_get_prototype_of.default).call(_context2) : function _getPrototypeOf2(o2) {
    return o2.__proto__ || (0, import_get_prototype_of.default)(o2);
  };
  return _getPrototypeOf(o);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js
var import_map = __toESM(require_map5());
var import_create2 = __toESM(require_create5());

// node_modules/@babel/runtime-corejs3/helpers/esm/isNativeFunction.js
var import_index_of = __toESM(require_index_of6(), 1);
function _isNativeFunction(fn) {
  try {
    var _context2;
    return (0, import_index_of.default)(_context2 = Function.toString.call(fn)).call(_context2, "[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}

// node_modules/@babel/runtime-corejs3/helpers/esm/construct.js
var import_construct2 = __toESM(require_construct6(), 1);
var import_push = __toESM(require_push6(), 1);
var import_bind3 = __toESM(require_bind6(), 1);

// node_modules/@babel/runtime-corejs3/helpers/esm/isNativeReflectConstruct.js
var import_construct = __toESM(require_construct6(), 1);
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call((0, import_construct.default)(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct3() {
    return !!t;
  })();
}

// node_modules/@babel/runtime-corejs3/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return import_construct2.default.apply(null, arguments);
  var o = [null];
  (0, import_push.default)(o).apply(o, e);
  var p = new ((0, import_bind3.default)(t).apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(Class) {
  var _cache = typeof import_map.default === "function" ? new import_map.default() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = (0, import_create2.default)(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
}

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_set_prototype_of3 = __toESM(require_set_prototype_of6());
var import_slice2 = __toESM(require_slice4());
var import_promise2 = __toESM(require_promise3());
var import_concat = __toESM(require_concat4());
var import_stringify = __toESM(require_stringify3());
var import_index_of2 = __toESM(require_index_of7());

// node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js
var import_promise = __toESM(require_promise6());
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    import_promise.default.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new import_promise.default(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}

// node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js
var import_define_property2 = __toESM(require_define_property5());

// node_modules/@babel/runtime-corejs3/helpers/esm/toPrimitive.js
var import_to_primitive = __toESM(require_to_primitive6(), 1);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t)
    return t;
  var e = t[import_to_primitive.default];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// node_modules/@babel/runtime-corejs3/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    (0, import_define_property2.default)(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  (0, import_define_property2.default)(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_regenerator = __toESM(require_regenerator());
var import_assign = __toESM(require_assign3());
var import_keys = __toESM(require_keys3());
var import_from3 = __toESM(require_from3());

// node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithHoles.js
var import_is_array = __toESM(require_is_array6(), 1);
function _arrayWithHoles(arr) {
  if ((0, import_is_array.default)(arr))
    return arr;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArrayLimit.js
var import_symbol2 = __toESM(require_symbol5(), 1);
var import_get_iterator_method = __toESM(require_get_iterator_method6(), 1);
var import_push2 = __toESM(require_push6(), 1);
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof import_symbol2.default && (0, import_get_iterator_method.default)(r) || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a3 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && ((0, import_push2.default)(a3).call(a3, e.value), a3.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a3;
  }
}

// node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js
var import_slice = __toESM(require_slice7(), 1);
var import_from = __toESM(require_from6(), 1);

// node_modules/@babel/runtime-corejs3/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  var _context2;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = (0, import_slice.default)(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime-corejs3/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_map2 = __toESM(require_map9());
var import_entries = __toESM(require_entries3());
var import_keys2 = __toESM(require_keys7());
var import_values = __toESM(require_values3());
var import_find = __toESM(require_find4());
var import_filter = __toESM(require_filter4());
var import_parse_int = __toESM(require_parse_int3());

// node_modules/@babel/runtime-corejs3/helpers/esm/arrayWithoutHoles.js
var import_is_array2 = __toESM(require_is_array6(), 1);
function _arrayWithoutHoles(arr) {
  if ((0, import_is_array2.default)(arr))
    return _arrayLikeToArray(arr);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/iterableToArray.js
var import_symbol3 = __toESM(require_symbol5(), 1);
var import_get_iterator_method2 = __toESM(require_get_iterator_method6(), 1);
var import_from2 = __toESM(require_from6(), 1);
function _iterableToArray(iter) {
  if (typeof import_symbol3.default !== "undefined" && (0, import_get_iterator_method2.default)(iter) != null || iter["@@iterator"] != null)
    return (0, import_from2.default)(iter);
}

// node_modules/@babel/runtime-corejs3/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/@babel/runtime-corejs3/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_map3 = __toESM(require_map10());
var import_values2 = __toESM(require_values7());
var import_symbol4 = __toESM(require_symbol6());
var import_get_iterator_method3 = __toESM(require_get_iterator_method7());
var import_p_cancelable = __toESM(require_p_cancelable());
var import_entries2 = __toESM(require_entries7());
var import_cross_fetch = __toESM(require_browser_ponyfill());
var import_from_entries = __toESM(require_from_entries3());
var import_includes = __toESM(require_includes5());

// node_modules/@babel/runtime-corejs3/helpers/esm/defineProperty.js
var import_define_property3 = __toESM(require_define_property5());
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    (0, import_define_property3.default)(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/get.js
var import_get = __toESM(require_get5());
var import_bind4 = __toESM(require_bind6());
var import_get_own_property_descriptor = __toESM(require_get_own_property_descriptor5());

// node_modules/@babel/runtime-corejs3/helpers/esm/superPropBase.js
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}

// node_modules/@babel/runtime-corejs3/helpers/esm/get.js
function _get() {
  if (typeof Reflect !== "undefined" && import_get.default) {
    var _context2;
    _get = (0, import_bind4.default)(_context2 = import_get.default).call(_context2);
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = (0, import_get_own_property_descriptor.default)(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

// node_modules/@okta/okta-auth-js/esm/esm.browser.js
var import_is_integer = __toESM(require_is_integer3());
var import_url = __toESM(require_url3());
var import_tiny_emitter = __toESM(require_tiny_emitter());
function _createSuper$x(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$x();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$x() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var CustomError = function(_Error) {
  _inherits(CustomError2, _Error);
  var _super = _createSuper$x(CustomError2);
  function CustomError2(message) {
    var _this;
    _classCallCheck(this, CustomError2);
    _this = _super.call(this, message);
    (0, import_set_prototype_of3.default)(_assertThisInitialized(_this), (this instanceof CustomError2 ? this.constructor : void 0).prototype);
    return _this;
  }
  return CustomError2;
}(_wrapNativeSuper(Error));
function _createSuper$w(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$w();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$w() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthApiError = function(_CustomError) {
  _inherits(AuthApiError2, _CustomError);
  var _super = _createSuper$w(AuthApiError2);
  function AuthApiError2(err, xhr) {
    var _this;
    _classCallCheck(this, AuthApiError2);
    var message = err.errorSummary;
    _this = _super.call(this, message);
    _this.name = "AuthApiError";
    _this.errorSummary = err.errorSummary;
    _this.errorCode = err.errorCode;
    _this.errorLink = err.errorLink;
    _this.errorId = err.errorId;
    _this.errorCauses = err.errorCauses;
    if (xhr) {
      _this.xhr = xhr;
    }
    return _this;
  }
  return AuthApiError2;
}(CustomError);
function _createSuper$v(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$v() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthPollStopError = function(_CustomError) {
  _inherits(AuthPollStopError2, _CustomError);
  var _super = _createSuper$v(AuthPollStopError2);
  function AuthPollStopError2() {
    _classCallCheck(this, AuthPollStopError2);
    var message = "The poll was stopped by the sdk";
    return _super.call(this, message);
  }
  return AuthPollStopError2;
}(CustomError);
function _createSuper$u(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$u() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthSdkError = function(_CustomError) {
  _inherits(AuthSdkError2, _CustomError);
  var _super = _createSuper$u(AuthSdkError2);
  function AuthSdkError2(msg, xhr) {
    var _this;
    _classCallCheck(this, AuthSdkError2);
    _this = _super.call(this, msg);
    _this.name = "AuthSdkError";
    _this.errorCode = "INTERNAL";
    _this.errorSummary = msg;
    _this.errorLink = "INTERNAL";
    _this.errorId = "INTERNAL";
    _this.errorCauses = [];
    if (xhr) {
      _this.xhr = xhr;
    }
    return _this;
  }
  return AuthSdkError2;
}(CustomError);
function _createSuper$t(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$t() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var OAuthError = function(_CustomError) {
  _inherits(OAuthError2, _CustomError);
  var _super = _createSuper$t(OAuthError2);
  function OAuthError2(errorCode, summary) {
    var _this;
    _classCallCheck(this, OAuthError2);
    _this = _super.call(this, summary);
    _this.name = "OAuthError";
    _this.errorCode = errorCode;
    _this.errorSummary = summary;
    _this.error = errorCode;
    _this.error_description = summary;
    return _this;
  }
  return OAuthError2;
}(CustomError);
function isAuthApiError(obj) {
  return obj instanceof AuthApiError;
}
var a = function a2(str) {
  return atob(str);
};
var b = function b2(str) {
  return btoa(str);
};
var c = typeof crypto === "undefined" ? null : crypto;
function stringToBase64Url(str) {
  var b64 = b(str);
  return base64ToBase64Url(b64);
}
function base64ToBase64Url(b64) {
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64UrlToBase64(b64u) {
  return b64u.replace(/-/g, "+").replace(/_/g, "/");
}
function base64UrlToString(b64u) {
  var b64 = base64UrlToBase64(b64u);
  switch (b64.length % 4) {
    case 0:
      break;
    case 2:
      b64 += "==";
      break;
    case 3:
      b64 += "=";
      break;
    default:
      throw new AuthSdkError("Not a valid Base64Url");
  }
  var utf8 = a(b64);
  try {
    return decodeURIComponent(escape(utf8));
  } catch (e) {
    return utf8;
  }
}
function stringToBuffer(str) {
  var buffer = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    buffer[i] = str.charCodeAt(i);
  }
  return buffer;
}
function base64UrlDecode(str) {
  return a(base64UrlToBase64(str));
}
function base64UrlToBuffer(b64u) {
  return Uint8Array.from(base64UrlDecode(b64u), function(c2) {
    return c2.charCodeAt(0);
  });
}
function bufferToBase64Url(bin) {
  var _context2;
  return b((0, import_reduce.default)(_context2 = new Uint8Array(bin)).call(_context2, function(s, byte) {
    return s + String.fromCharCode(byte);
  }, ""));
}
function getOidcHash(str) {
  var buffer = new TextEncoder().encode(str);
  return c.subtle.digest("SHA-256", buffer).then(function(arrayBuffer) {
    var intBuffer = new Uint8Array(arrayBuffer);
    var firstHalf = (0, import_slice2.default)(intBuffer).call(intBuffer, 0, 16);
    var hash = String.fromCharCode.apply(null, firstHalf);
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}
function getNativeConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  } else if (typeof console !== "undefined") {
    return console;
  } else {
    return void 0;
  }
}
function getConsole() {
  var nativeConsole = getNativeConsole();
  if (nativeConsole && nativeConsole.log) {
    return nativeConsole;
  }
  return {
    log: function log() {
    },
    warn: function warn2() {
    },
    group: function group() {
    },
    groupEnd: function groupEnd() {
    }
  };
}
function warn(text) {
  getConsole().warn("[okta-auth-sdk] WARN: " + text);
}
function deprecate(text) {
  getConsole().warn("[okta-auth-sdk] DEPRECATION: " + text);
}
function deprecateWrap(text, fn) {
  return function() {
    deprecate(text);
    return fn.apply(null, arguments);
  };
}
function isoToUTCString(str) {
  var parts = str.match(/\d+/g), isoTime = Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]), isoDate = new Date(isoTime);
  return isoDate.toUTCString();
}
function genRandomString(length) {
  var randomCharset = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var random = "";
  for (var c2 = 0, cl = randomCharset.length; c2 < length; ++c2) {
    random += randomCharset[Math.floor(Math.random() * cl)];
  }
  return random;
}
function delay(ms) {
  return new import_promise2.default(function(resolve) {
    setTimeout(resolve, ms);
  });
}
function bind(fn, ctx) {
  var additionalArgs = (0, import_slice2.default)(Array.prototype).call(arguments, 2);
  return function() {
    var args = (0, import_slice2.default)(Array.prototype).call(arguments);
    args = (0, import_concat.default)(additionalArgs).call(additionalArgs, args);
    return fn.apply(ctx, args);
  };
}
function extend() {
  var obj1 = arguments[0];
  var objArray = (0, import_slice2.default)([]).call(arguments, 1);
  objArray.forEach(function(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop) && obj[prop] !== void 0) {
        obj1[prop] = obj[prop];
      }
    }
  });
  return obj1;
}
function removeNils(obj) {
  var cleaned = {};
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      var value = obj[prop];
      if (value !== null && value !== void 0) {
        cleaned[prop] = value;
      }
    }
  }
  return cleaned;
}
function clone(obj) {
  if (obj) {
    var str = (0, import_stringify.default)(obj);
    if (str) {
      return JSON.parse(str);
    }
  }
  return obj;
}
function omit(obj) {
  var newobj = {};
  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }
  for (var p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p) && (0, import_index_of2.default)(props).call(props, p) == -1) {
      newobj[p] = obj[p];
    }
  }
  return clone(newobj);
}
function find(collection, searchParams) {
  var c2 = collection.length;
  while (c2--) {
    var item = collection[c2];
    var found = true;
    for (var prop in searchParams) {
      if (!Object.prototype.hasOwnProperty.call(searchParams, prop)) {
        continue;
      }
      if (item[prop] !== searchParams[prop]) {
        found = false;
        break;
      }
    }
    if (found) {
      return item;
    }
  }
}
function getLink(obj, linkName, altName) {
  if (!obj || !obj._links) {
    return;
  }
  var link = clone(obj._links[linkName]);
  if (link && link.name && altName) {
    if (link.name === altName) {
      return link;
    }
  } else {
    return link;
  }
}
function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === "[object Number]";
}
function isFunction(fn) {
  return !!fn && {}.toString.call(fn) === "[object Function]";
}
function isPromise(obj) {
  return obj && obj.finally && typeof obj.finally === "function";
}
function isAbsoluteUrl(url) {
  return /^(?:[a-z]+:)?\/\//i.test(url);
}
function toAbsoluteUrl() {
  var _context2, _context22;
  var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var baseUrl = arguments.length > 1 ? arguments[1] : void 0;
  if (isAbsoluteUrl(url)) {
    return url;
  }
  baseUrl = removeTrailingSlash(baseUrl);
  return url[0] === "/" ? (0, import_concat.default)(_context2 = "".concat(baseUrl)).call(_context2, url) : (0, import_concat.default)(_context22 = "".concat(baseUrl, "/")).call(_context22, url);
}
function toRelativeUrl() {
  var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var baseUrl = arguments.length > 1 ? arguments[1] : void 0;
  if (isAbsoluteUrl(url)) {
    url = url.substring(baseUrl.length);
  }
  return url[0] === "/" ? url : "/".concat(url);
}
function toQueryString(obj) {
  var str = [];
  if (obj !== null) {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== void 0 && obj[key] !== null) {
        str.push(key + "=" + encodeURIComponent(obj[key]));
      }
    }
  }
  if (str.length) {
    return "?" + str.join("&");
  } else {
    return "";
  }
}
function removeTrailingSlash(path) {
  if (!path) {
    return;
  }
  var trimmed = path.replace(/^\s+|\s+$/gm, "");
  trimmed = trimmed.replace(/\/+$/, "");
  return trimmed;
}
function verifyToken$1(idToken, key) {
  key = clone(key);
  var format = "jwk";
  var algo = {
    name: "RSASSA-PKCS1-v1_5",
    hash: {
      name: "SHA-256"
    }
  };
  var extractable = true;
  var usages = ["verify"];
  delete key.use;
  return c.subtle.importKey(format, key, algo, extractable, usages).then(function(cryptoKey) {
    var jwt = idToken.split(".");
    var payload = stringToBuffer(jwt[0] + "." + jwt[1]);
    var b64Signature = base64UrlDecode(jwt[2]);
    var signature = stringToBuffer(b64Signature);
    return c.subtle.verify(algo, cryptoKey, signature, payload);
  });
}
var crypto$1 = Object.freeze({
  __proto__: null,
  stringToBase64Url,
  base64ToBase64Url,
  base64UrlToBase64,
  base64UrlToString,
  stringToBuffer,
  base64UrlDecode,
  base64UrlToBuffer,
  bufferToBase64Url,
  getOidcHash,
  verifyToken: verifyToken$1,
  atob: a,
  btoa: b,
  webcrypto: c
});
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var STATE_TOKEN_KEY_NAME = "oktaStateToken";
var DEFAULT_POLLING_DELAY = 500;
var DEFAULT_MAX_CLOCK_SKEW = 300;
var DEFAULT_CACHE_DURATION = 86400;
var REDIRECT_OAUTH_PARAMS_NAME = "okta-oauth-redirect-params";
var REDIRECT_STATE_COOKIE_NAME = "okta-oauth-state";
var REDIRECT_NONCE_COOKIE_NAME = "okta-oauth-nonce";
var TOKEN_STORAGE_NAME = "okta-token-storage";
var CACHE_STORAGE_NAME = "okta-cache-storage";
var PKCE_STORAGE_NAME = "okta-pkce-storage";
var TRANSACTION_STORAGE_NAME = "okta-transaction-storage";
var SHARED_TRANSACTION_STORAGE_NAME = "okta-shared-transaction-storage";
var ORIGINAL_URI_STORAGE_NAME = "okta-original-uri-storage";
var IDX_RESPONSE_STORAGE_NAME = "okta-idx-response-storage";
var ACCESS_TOKEN_STORAGE_KEY = "accessToken";
var ID_TOKEN_STORAGE_KEY = "idToken";
var REFRESH_TOKEN_STORAGE_KEY = "refreshToken";
var REFERRER_PATH_STORAGE_KEY = "referrerPath";
var MIN_VERIFIER_LENGTH = 43;
var MAX_VERIFIER_LENGTH = 128;
var DEFAULT_CODE_CHALLENGE_METHOD = "S256";
var IDX_API_VERSION = "1.0.0";
var constants = Object.freeze({
  __proto__: null,
  STATE_TOKEN_KEY_NAME,
  DEFAULT_POLLING_DELAY,
  DEFAULT_MAX_CLOCK_SKEW,
  DEFAULT_CACHE_DURATION,
  REDIRECT_OAUTH_PARAMS_NAME,
  REDIRECT_STATE_COOKIE_NAME,
  REDIRECT_NONCE_COOKIE_NAME,
  TOKEN_STORAGE_NAME,
  CACHE_STORAGE_NAME,
  PKCE_STORAGE_NAME,
  TRANSACTION_STORAGE_NAME,
  SHARED_TRANSACTION_STORAGE_NAME,
  ORIGINAL_URI_STORAGE_NAME,
  IDX_RESPONSE_STORAGE_NAME,
  ACCESS_TOKEN_STORAGE_KEY,
  ID_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  REFERRER_PATH_STORAGE_KEY,
  MIN_VERIFIER_LENGTH,
  MAX_VERIFIER_LENGTH,
  DEFAULT_CODE_CHALLENGE_METHOD,
  IDX_API_VERSION
});
function setRequestHeader(authClient, headerName, headerValue) {
  authClient.options.headers = authClient.options.headers || {};
  authClient.options.headers[headerName] = headerValue;
}
function httpRequest(sdk, options) {
  options = options || {};
  var url = options.url, method = options.method, args = options.args, saveAuthnState = options.saveAuthnState, accessToken = options.accessToken, withCredentials = options.withCredentials === true, storageUtil2 = sdk.options.storageUtil, storage = storageUtil2.storage, httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  if (options.cacheResponse) {
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[url];
    if (cachedResponse && Date.now() / 1e3 < cachedResponse.expiresAt) {
      return import_promise2.default.resolve(cachedResponse.response);
    }
  }
  var oktaUserAgentHeader = sdk._oktaUserAgent.getHttpHeader();
  var headers = (0, import_assign.default)({
    "Accept": "application/json",
    "Content-Type": "application/json"
  }, oktaUserAgentHeader);
  (0, import_assign.default)(headers, sdk.options.headers, options.headers);
  headers = removeNils(headers);
  if (accessToken && isString(accessToken)) {
    headers["Authorization"] = "Bearer " + accessToken;
  }
  var ajaxOptions = {
    headers,
    data: args || void 0,
    withCredentials
  };
  var err, res;
  return sdk.options.httpRequestClient(method, url, ajaxOptions).then(function(resp) {
    res = resp.responseText;
    if (res && isString(res)) {
      res = JSON.parse(res);
      if (res && _typeof(res) === "object" && !res.headers) {
        res.headers = resp.headers;
      }
    }
    if (saveAuthnState) {
      if (!res.stateToken) {
        storage.delete(STATE_TOKEN_KEY_NAME);
      }
    }
    if (res && res.stateToken && res.expiresAt) {
      storage.set(STATE_TOKEN_KEY_NAME, res.stateToken, res.expiresAt, sdk.options.cookies);
    }
    if (res && options.cacheResponse) {
      httpCache.updateStorage(url, {
        expiresAt: Math.floor(Date.now() / 1e3) + DEFAULT_CACHE_DURATION,
        response: res
      });
    }
    return res;
  }).catch(function(resp) {
    var serverErr = resp.responseText || {};
    if (isString(serverErr)) {
      try {
        serverErr = JSON.parse(serverErr);
      } catch (e) {
        serverErr = {
          errorSummary: "Unknown error"
        };
      }
    }
    if (resp.status >= 500) {
      serverErr.errorSummary = "Unknown error";
    }
    if (sdk.options.transformErrorXHR) {
      resp = sdk.options.transformErrorXHR(clone(resp));
    }
    if (serverErr.error && serverErr.error_description) {
      err = new OAuthError(serverErr.error, serverErr.error_description);
    } else {
      err = new AuthApiError(serverErr, resp);
    }
    if (err.errorCode === "E0000011") {
      storage.delete(STATE_TOKEN_KEY_NAME);
    }
    throw err;
  });
}
function get(sdk, url, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var getOptions = {
    url,
    method: "GET"
  };
  (0, import_assign.default)(getOptions, options);
  return httpRequest(sdk, getOptions);
}
function post(sdk, url, args, options) {
  url = isAbsoluteUrl(url) ? url : sdk.getIssuerOrigin() + url;
  var postOptions = {
    url,
    method: "POST",
    args,
    saveAuthnState: true
  };
  (0, import_assign.default)(postOptions, options);
  return httpRequest(sdk, postOptions);
}
function addStateToken(res, options) {
  var builtArgs = {};
  (0, import_assign.default)(builtArgs, options);
  if (!builtArgs.stateToken && res.stateToken) {
    builtArgs.stateToken = res.stateToken;
  }
  return builtArgs;
}
function getStateToken(res) {
  return addStateToken(res);
}
function getPollFn(sdk, res, ref) {
  return function(options) {
    var delay$1;
    var rememberDevice;
    var autoPush;
    var transactionCallBack;
    if (isNumber(options)) {
      delay$1 = options;
    } else if (isObject(options)) {
      options = options;
      delay$1 = options.delay;
      rememberDevice = options.rememberDevice;
      autoPush = options.autoPush;
      transactionCallBack = options.transactionCallBack;
    }
    if (!delay$1 && delay$1 !== 0) {
      delay$1 = DEFAULT_POLLING_DELAY;
    }
    var pollLink = getLink(res, "next", "poll");
    function pollFn() {
      var opts = {};
      if (typeof autoPush === "function") {
        try {
          opts.autoPush = !!autoPush();
        } catch (e) {
          return import_promise2.default.reject(new AuthSdkError("AutoPush resulted in an error."));
        }
      } else if (autoPush !== void 0 && autoPush !== null) {
        opts.autoPush = !!autoPush;
      }
      if (typeof rememberDevice === "function") {
        try {
          opts.rememberDevice = !!rememberDevice();
        } catch (e) {
          return import_promise2.default.reject(new AuthSdkError("RememberDevice resulted in an error."));
        }
      } else if (rememberDevice !== void 0 && rememberDevice !== null) {
        opts.rememberDevice = !!rememberDevice;
      }
      var href = pollLink.href + toQueryString(opts);
      return post(sdk, href, getStateToken(res), {
        saveAuthnState: false,
        withCredentials: true
      });
    }
    ref.isPolling = true;
    var retryCount = 0;
    var recursivePoll = function recursivePoll2() {
      if (!ref.isPolling) {
        return import_promise2.default.reject(new AuthPollStopError());
      }
      return pollFn().then(function(pollRes) {
        retryCount = 0;
        if (pollRes.factorResult && pollRes.factorResult === "WAITING") {
          if (!ref.isPolling) {
            throw new AuthPollStopError();
          }
          if (typeof transactionCallBack === "function") {
            transactionCallBack(pollRes);
          }
          return delay(delay$1).then(recursivePoll2);
        } else {
          ref.isPolling = false;
          return new AuthTransaction(sdk, pollRes);
        }
      }).catch(function(err) {
        if (err.xhr && (err.xhr.status === 0 || err.xhr.status === 429) && retryCount <= 4) {
          var delayLength = Math.pow(2, retryCount) * 1e3;
          retryCount++;
          return delay(delayLength).then(recursivePoll2);
        }
        throw err;
      });
    };
    return recursivePoll().catch(function(err) {
      ref.isPolling = false;
      throw err;
    });
  };
}
var AuthTransaction = function AuthTransaction2(sdk) {
  var res = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _classCallCheck(this, AuthTransaction2);
  this.data = void 0;
  this.status = void 0;
  if (res) {
    this.data = res;
    if (this.data.interactionHandle) {
      this.status = res.status;
      return;
    }
    (0, import_assign.default)(this, flattenEmbedded(sdk, res, res, {}));
    delete this.stateToken;
    if (res.status === "RECOVERY_CHALLENGE" && !res._links) {
      this.cancel = function() {
        return import_promise2.default.resolve(new AuthTransaction2(sdk));
      };
    }
  }
};
function link2fn(sdk, res, obj, link, ref) {
  if (Array.isArray(link)) {
    return function(name, opts) {
      if (!name) {
        throw new AuthSdkError("Must provide a link name");
      }
      var lk = find(link, {
        name
      });
      if (!lk) {
        throw new AuthSdkError("No link found for that name");
      }
      return link2fn(sdk, res, obj, lk, ref)(opts);
    };
  } else if (link.hints && link.hints.allow && link.hints.allow.length === 1) {
    var method = link.hints.allow[0];
    switch (method) {
      case "GET":
        return function() {
          return get(sdk, link.href, {
            withCredentials: true
          });
        };
      case "POST":
        return function(opts) {
          if (ref && ref.isPolling) {
            ref.isPolling = false;
          }
          var data = addStateToken(res, opts);
          if (res.status === "MFA_ENROLL" || res.status === "FACTOR_ENROLL") {
            (0, import_assign.default)(data, {
              factorType: obj.factorType,
              provider: obj.provider
            });
          }
          var params = {};
          var autoPush = data.autoPush;
          if (autoPush !== void 0) {
            if (typeof autoPush === "function") {
              try {
                params.autoPush = !!autoPush();
              } catch (e) {
                return import_promise2.default.reject(new AuthSdkError("AutoPush resulted in an error."));
              }
            } else if (autoPush !== null) {
              params.autoPush = !!autoPush;
            }
            data = omit(data, "autoPush");
          }
          var rememberDevice = data.rememberDevice;
          if (rememberDevice !== void 0) {
            if (typeof rememberDevice === "function") {
              try {
                params.rememberDevice = !!rememberDevice();
              } catch (e) {
                return import_promise2.default.reject(new AuthSdkError("RememberDevice resulted in an error."));
              }
            } else if (rememberDevice !== null) {
              params.rememberDevice = !!rememberDevice;
            }
            data = omit(data, "rememberDevice");
          } else if (data.profile && data.profile.updatePhone !== void 0) {
            if (data.profile.updatePhone) {
              params.updatePhone = true;
            }
            data.profile = omit(data.profile, "updatePhone");
          }
          var href = link.href + toQueryString(params);
          return postToTransaction(sdk, href, data);
        };
    }
  }
}
function links2fns(sdk, res, obj, ref) {
  var fns = {};
  for (var linkName in obj._links) {
    if (!Object.prototype.hasOwnProperty.call(obj._links, linkName)) {
      continue;
    }
    var link = obj._links[linkName];
    if (linkName === "next") {
      linkName = link.name;
    }
    if (link.type) {
      fns[linkName] = link;
      continue;
    }
    switch (linkName) {
      case "poll":
        fns.poll = getPollFn(sdk, res, ref);
        break;
      default:
        var fn = link2fn(sdk, res, obj, link, ref);
        if (fn) {
          fns[linkName] = fn;
        }
    }
  }
  return fns;
}
function flattenEmbedded(sdk, res, obj, ref) {
  obj = obj || res;
  obj = clone(obj);
  if (Array.isArray(obj)) {
    var objArr = [];
    for (var o = 0, ol = obj.length; o < ol; o++) {
      objArr.push(flattenEmbedded(sdk, res, obj[o], ref));
    }
    return objArr;
  }
  var embedded = obj._embedded || {};
  for (var key in embedded) {
    if (!Object.prototype.hasOwnProperty.call(embedded, key)) {
      continue;
    }
    if (isObject(embedded[key]) || Array.isArray(embedded[key])) {
      embedded[key] = flattenEmbedded(sdk, res, embedded[key], ref);
    }
  }
  var fns = links2fns(sdk, res, obj, ref);
  (0, import_assign.default)(embedded, fns);
  obj = omit(obj, "_embedded", "_links");
  (0, import_assign.default)(obj, embedded);
  return obj;
}
function transactionStatus(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + "/api/v1/authn", args, {
    withCredentials: true
  });
}
function resumeTransaction(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
    if (stateToken) {
      args = {
        stateToken
      };
    } else {
      return import_promise2.default.reject(new AuthSdkError("No transaction to resume"));
    }
  }
  return sdk.tx.status(args).then(function(res) {
    return new AuthTransaction(sdk, res);
  });
}
function introspectAuthn(sdk, args) {
  if (!args || !args.stateToken) {
    var stateToken = sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
    if (stateToken) {
      args = {
        stateToken
      };
    } else {
      return import_promise2.default.reject(new AuthSdkError("No transaction to evaluate"));
    }
  }
  return transactionStep(sdk, args).then(function(res) {
    return new AuthTransaction(sdk, res);
  });
}
function transactionStep(sdk, args) {
  args = addStateToken(sdk, args);
  return post(sdk, sdk.getIssuerOrigin() + "/api/v1/authn/introspect", args, {
    withCredentials: true
  });
}
function transactionExists(sdk) {
  return !!sdk.tx.exists._get(STATE_TOKEN_KEY_NAME);
}
function postToTransaction(sdk, url, args, options) {
  options = (0, import_assign.default)({
    withCredentials: true
  }, options);
  return post(sdk, url, args, options).then(function(res) {
    return new AuthTransaction(sdk, res);
  });
}
function dec2hex(dec) {
  return ("0" + dec.toString(16)).substr(-2);
}
function getRandomString(length) {
  var a3 = new Uint8Array(Math.ceil(length / 2));
  c.getRandomValues(a3);
  var str = (0, import_from3.default)(a3, dec2hex).join("");
  return (0, import_slice2.default)(str).call(str, 0, length);
}
function generateVerifier(prefix) {
  var _context2;
  var verifier = prefix || "";
  if (verifier.length < MIN_VERIFIER_LENGTH) {
    verifier = verifier + getRandomString(MIN_VERIFIER_LENGTH - verifier.length);
  }
  return (0, import_slice2.default)(_context2 = encodeURIComponent(verifier)).call(_context2, 0, MAX_VERIFIER_LENGTH);
}
function computeChallenge(str) {
  var buffer = new TextEncoder().encode(str);
  return c.subtle.digest("SHA-256", buffer).then(function(arrayBuffer) {
    var hash = String.fromCharCode.apply(null, new Uint8Array(arrayBuffer));
    var b64u = stringToBase64Url(hash);
    return b64u;
  });
}
var PKCE = {
  DEFAULT_CODE_CHALLENGE_METHOD,
  generateVerifier,
  computeChallenge
};
function sessionExists(sdk) {
  return sdk.session.get().then(function(res) {
    if (res.status === "ACTIVE") {
      return true;
    }
    return false;
  }).catch(function() {
    return false;
  });
}
function getSession(sdk) {
  return get(sdk, "/api/v1/sessions/me", {
    withCredentials: true
  }).then(function(session) {
    var res = omit(session, "_links");
    res.refresh = function() {
      return post(sdk, getLink(session, "refresh").href, {}, {
        withCredentials: true
      });
    };
    res.user = function() {
      return get(sdk, getLink(session, "user").href, {
        withCredentials: true
      });
    };
    return res;
  }).catch(function() {
    return {
      status: "INACTIVE"
    };
  });
}
function closeSession(sdk) {
  return httpRequest(sdk, {
    url: sdk.getIssuerOrigin() + "/api/v1/sessions/me",
    method: "DELETE",
    withCredentials: true
  });
}
function refreshSession(sdk) {
  return post(sdk, "/api/v1/sessions/me/lifecycle/refresh", {}, {
    withCredentials: true
  });
}
function setCookieAndRedirect(sdk, sessionToken, redirectUrl) {
  redirectUrl = redirectUrl || window.location.href;
  window.location.assign(sdk.getIssuerOrigin() + "/login/sessionCookieRedirect" + toQueryString({
    checkAccountSetupComplete: true,
    token: sessionToken,
    redirectUrl
  }));
}
function convertTokenParamsToOAuthParams(tokenParams) {
  var _context2, _context22, _context3;
  if (!tokenParams.clientId) {
    throw new AuthSdkError("A clientId must be specified in the OktaAuth constructor to get a token");
  }
  if (isString(tokenParams.responseType) && (0, import_index_of2.default)(_context2 = tokenParams.responseType).call(_context2, " ") !== -1) {
    throw new AuthSdkError("Multiple OAuth responseTypes must be defined as an array");
  }
  var oauthParams = {
    "client_id": tokenParams.clientId,
    "code_challenge": tokenParams.codeChallenge,
    "code_challenge_method": tokenParams.codeChallengeMethod,
    "display": tokenParams.display,
    "idp": tokenParams.idp,
    "idp_scope": tokenParams.idpScope,
    "login_hint": tokenParams.loginHint,
    "max_age": tokenParams.maxAge,
    "nonce": tokenParams.nonce,
    "prompt": tokenParams.prompt,
    "redirect_uri": tokenParams.redirectUri,
    "response_mode": tokenParams.responseMode,
    "response_type": tokenParams.responseType,
    "sessionToken": tokenParams.sessionToken,
    "state": tokenParams.state
  };
  oauthParams = removeNils(oauthParams);
  ["idp_scope", "response_type"].forEach(function(mayBeArray) {
    if (Array.isArray(oauthParams[mayBeArray])) {
      oauthParams[mayBeArray] = oauthParams[mayBeArray].join(" ");
    }
  });
  if ((0, import_index_of2.default)(_context22 = tokenParams.responseType).call(_context22, "id_token") !== -1 && (0, import_index_of2.default)(_context3 = tokenParams.scopes).call(_context3, "openid") === -1) {
    throw new AuthSdkError("openid scope must be specified in the scopes argument when requesting an id_token");
  } else {
    oauthParams.scope = tokenParams.scopes.join(" ");
  }
  return oauthParams;
}
function buildAuthorizeParams(tokenParams) {
  var oauthQueryParams = convertTokenParamsToOAuthParams(tokenParams);
  return toQueryString((0, import_assign.default)((0, import_assign.default)({}, oauthQueryParams), tokenParams.extraParams && (0, import_assign.default)({}, tokenParams.extraParams)));
}
function validateOptions(options) {
  if (!options.clientId) {
    throw new AuthSdkError("A clientId must be specified in the OktaAuth constructor to get a token");
  }
  if (!options.redirectUri) {
    throw new AuthSdkError("The redirectUri passed to /authorize must also be passed to /token");
  }
  if (!options.authorizationCode && !options.interactionCode) {
    throw new AuthSdkError("An authorization code (returned from /authorize) must be passed to /token");
  }
  if (!options.codeVerifier) {
    throw new AuthSdkError('The "codeVerifier" (generated and saved by your app) must be passed to /token');
  }
}
function getPostData(sdk, options) {
  var _context2;
  var params = removeNils({
    "client_id": options.clientId,
    "redirect_uri": options.redirectUri,
    "grant_type": options.interactionCode ? "interaction_code" : "authorization_code",
    "code_verifier": options.codeVerifier
  });
  if (options.interactionCode) {
    params["interaction_code"] = options.interactionCode;
  } else if (options.authorizationCode) {
    params.code = options.authorizationCode;
  }
  var clientSecret = sdk.options.clientSecret;
  if (clientSecret) {
    params["client_secret"] = clientSecret;
  }
  return (0, import_slice2.default)(_context2 = toQueryString(params)).call(_context2, 1);
}
function postToTokenEndpoint(sdk, options, urls) {
  validateOptions(options);
  var data = getPostData(sdk, options);
  var headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  return httpRequest(sdk, {
    url: urls.tokenUrl,
    method: "POST",
    args: data,
    headers
  });
}
function postRefreshToken(sdk, options, refreshToken) {
  var _context2;
  return httpRequest(sdk, {
    url: refreshToken.tokenUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    args: (0, import_map2.default)(_context2 = (0, import_entries.default)({
      client_id: options.clientId,
      grant_type: "refresh_token",
      scope: refreshToken.scopes.join(" "),
      refresh_token: refreshToken.refreshToken
    })).call(_context2, function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], value = _ref2[1];
      return name + "=" + encodeURIComponent(value);
    }).join("&")
  });
}
function getWellKnown(sdk, issuer) {
  var authServerUri = issuer || sdk.options.issuer;
  return get(sdk, authServerUri + "/.well-known/openid-configuration", {
    cacheResponse: true
  });
}
function getKey(sdk, issuer, kid) {
  var httpCache = sdk.storageManager.getHttpCache(sdk.options.cookies);
  return getWellKnown(sdk, issuer).then(function(wellKnown) {
    var jwksUri = wellKnown["jwks_uri"];
    var cacheContents = httpCache.getStorage();
    var cachedResponse = cacheContents[jwksUri];
    if (cachedResponse && Date.now() / 1e3 < cachedResponse.expiresAt) {
      var cachedKey = find((0, import_keys2.default)(cachedResponse.response), {
        kid
      });
      if (cachedKey) {
        return cachedKey;
      }
    }
    httpCache.clearStorage(jwksUri);
    return get(sdk, jwksUri, {
      cacheResponse: true
    }).then(function(res) {
      var key = find((0, import_keys2.default)(res), {
        kid
      });
      if (key) {
        return key;
      }
      throw new AuthSdkError("The key id, " + kid + ", was not found in the server's keys");
    });
  });
}
function addListener(eventTarget, name, fn) {
  if (eventTarget.addEventListener) {
    eventTarget.addEventListener(name, fn);
  } else {
    eventTarget.attachEvent("on" + name, fn);
  }
}
function removeListener(eventTarget, name, fn) {
  if (eventTarget.removeEventListener) {
    eventTarget.removeEventListener(name, fn);
  } else {
    eventTarget.detachEvent("on" + name, fn);
  }
}
function loadFrame(src) {
  var iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = src;
  return document.body.appendChild(iframe);
}
function loadPopup(src, options) {
  var title = options.popupTitle || "External Identity Provider User Authentication";
  var appearance = "toolbar=no, scrollbars=yes, resizable=yes, top=100, left=500, width=600, height=600";
  return window.open(src, title, appearance);
}
function addPostMessageListener(sdk, timeout, state) {
  var responseHandler;
  var timeoutId;
  var msgReceivedOrTimeout = new import_promise2.default(function(resolve, reject) {
    responseHandler = function responseHandler2(e) {
      if (!e.data || e.data.state !== state) {
        return;
      }
      if (e.origin !== sdk.getIssuerOrigin()) {
        return reject(new AuthSdkError("The request does not match client configuration"));
      }
      resolve(e.data);
    };
    addListener(window, "message", responseHandler);
    timeoutId = setTimeout(function() {
      reject(new AuthSdkError("OAuth flow timed out"));
    }, timeout || 12e4);
  });
  return msgReceivedOrTimeout.finally(function() {
    clearTimeout(timeoutId);
    removeListener(window, "message", responseHandler);
  });
}
function generateState() {
  return genRandomString(64);
}
function generateNonce() {
  return genRandomString(64);
}
function getIssuer(sdk) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var issuer = removeTrailingSlash(options.issuer) || sdk.options.issuer;
  return issuer;
}
function getOAuthBaseUrl(sdk) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var issuer = getIssuer(sdk, options);
  var baseUrl = (0, import_index_of2.default)(issuer).call(issuer, "/oauth2") > 0 ? issuer : issuer + "/oauth2";
  return baseUrl;
}
function getOAuthDomain(sdk) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var issuer = getIssuer(sdk, options);
  var domain = issuer.split("/oauth2")[0];
  return domain;
}
function getOAuthUrls(sdk, options) {
  if (arguments.length > 2) {
    throw new AuthSdkError('As of version 3.0, "getOAuthUrls" takes only a single set of options');
  }
  options = options || {};
  var authorizeUrl = removeTrailingSlash(options.authorizeUrl) || sdk.options.authorizeUrl;
  var issuer = getIssuer(sdk, options);
  var userinfoUrl = removeTrailingSlash(options.userinfoUrl) || sdk.options.userinfoUrl;
  var tokenUrl = removeTrailingSlash(options.tokenUrl) || sdk.options.tokenUrl;
  var logoutUrl = removeTrailingSlash(options.logoutUrl) || sdk.options.logoutUrl;
  var revokeUrl = removeTrailingSlash(options.revokeUrl) || sdk.options.revokeUrl;
  var baseUrl = getOAuthBaseUrl(sdk, options);
  authorizeUrl = authorizeUrl || baseUrl + "/v1/authorize";
  userinfoUrl = userinfoUrl || baseUrl + "/v1/userinfo";
  tokenUrl = tokenUrl || baseUrl + "/v1/token";
  revokeUrl = revokeUrl || baseUrl + "/v1/revoke";
  logoutUrl = logoutUrl || baseUrl + "/v1/logout";
  return {
    issuer,
    authorizeUrl,
    userinfoUrl,
    tokenUrl,
    revokeUrl,
    logoutUrl
  };
}
var isWindowsPhone = /windows phone|iemobile|wpdesktop/i;
function isBrowser() {
  return typeof document !== "undefined" && typeof window !== "undefined";
}
function isIE11OrLess() {
  if (!isBrowser()) {
    return false;
  }
  var documentMode = document.documentMode;
  return !!documentMode && documentMode <= 11;
}
function getUserAgent() {
  return navigator.userAgent;
}
function isFingerprintSupported() {
  var agent = getUserAgent();
  return agent && !isWindowsPhone.test(agent);
}
function isPopupPostMessageSupported() {
  if (!isBrowser()) {
    return false;
  }
  var documentMode = document.documentMode;
  var isIE8or9 = documentMode && documentMode < 10;
  if (typeof window.postMessage !== "undefined" && !isIE8or9) {
    return true;
  }
  return false;
}
function isTokenVerifySupported() {
  return typeof c !== "undefined" && c !== null && typeof c.subtle !== "undefined" && typeof Uint8Array !== "undefined";
}
function hasTextEncoder() {
  return typeof TextEncoder !== "undefined";
}
function isPKCESupported() {
  return isTokenVerifySupported() && hasTextEncoder();
}
function isHTTPS() {
  if (!isBrowser()) {
    return false;
  }
  return window.location.protocol === "https:";
}
function isLocalhost() {
  return isBrowser() && window.location.hostname === "localhost";
}
var features = Object.freeze({
  __proto__: null,
  isBrowser,
  isIE11OrLess,
  getUserAgent,
  isFingerprintSupported,
  isPopupPostMessageSupported,
  isTokenVerifySupported,
  hasTextEncoder,
  isPKCESupported,
  isHTTPS,
  isLocalhost
});
function getDefaultTokenParams(sdk) {
  var _sdk$options = sdk.options, pkce = _sdk$options.pkce, clientId = _sdk$options.clientId, redirectUri = _sdk$options.redirectUri, responseType = _sdk$options.responseType, responseMode = _sdk$options.responseMode, scopes = _sdk$options.scopes, state = _sdk$options.state, ignoreSignature = _sdk$options.ignoreSignature;
  var defaultRedirectUri = isBrowser() ? window.location.href : void 0;
  return removeNils({
    pkce,
    clientId,
    redirectUri: redirectUri || defaultRedirectUri,
    responseType: responseType || ["token", "id_token"],
    responseMode,
    state: state || generateState(),
    nonce: generateNonce(),
    scopes: scopes || ["openid", "email"],
    ignoreSignature
  });
}
function isInteractionRequiredError(error) {
  if (error.name !== "OAuthError") {
    return false;
  }
  var oauthError = error;
  return oauthError.errorCode === "interaction_required";
}
function isAuthorizationCodeError(sdk, error) {
  if (error.name !== "AuthApiError") {
    return false;
  }
  var authApiError = error;
  var errorResponse = authApiError.xhr;
  var responseJSON = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse.responseJSON;
  return sdk.options.pkce && (responseJSON === null || responseJSON === void 0 ? void 0 : responseJSON.error) === "invalid_grant";
}
function hasTokensInHash(hash) {
  return /((id|access)_token=)/i.test(hash);
}
function hasAuthorizationCode(hashOrSearch) {
  return /(code=)/i.test(hashOrSearch);
}
function hasInteractionCode(hashOrSearch) {
  return /(interaction_code=)/i.test(hashOrSearch);
}
function hasErrorInUrl(hashOrSearch) {
  return /(error=)/i.test(hashOrSearch) || /(error_description)/i.test(hashOrSearch);
}
function isRedirectUri(uri, sdk) {
  var authParams = sdk.options;
  if (!uri || !authParams.redirectUri) {
    return false;
  }
  return (0, import_index_of2.default)(uri).call(uri, authParams.redirectUri) === 0;
}
function isCodeFlow(options) {
  return options.pkce || options.responseType === "code" || options.responseMode === "query";
}
function getHashOrSearch(options) {
  var codeFlow = isCodeFlow(options);
  var useQuery = codeFlow && options.responseMode !== "fragment";
  return useQuery ? window.location.search : window.location.hash;
}
function isLoginRedirect(sdk) {
  if (!isRedirectUri(window.location.href, sdk)) {
    return false;
  }
  var codeFlow = isCodeFlow(sdk.options);
  var hashOrSearch = getHashOrSearch(sdk.options);
  if (hasErrorInUrl(hashOrSearch)) {
    return true;
  }
  if (codeFlow) {
    var hasCode = hasAuthorizationCode(hashOrSearch) || hasInteractionCode(hashOrSearch);
    return hasCode;
  }
  return hasTokensInHash(window.location.hash);
}
function isInteractionRequired(sdk, hashOrSearch) {
  if (!hashOrSearch) {
    if (!isLoginRedirect(sdk)) {
      return false;
    }
    hashOrSearch = getHashOrSearch(sdk.options);
  }
  return /(error=interaction_required)/i.test(hashOrSearch);
}
function createOAuthMeta(sdk, tokenParams) {
  var issuer = sdk.options.issuer;
  var urls = getOAuthUrls(sdk, tokenParams);
  var oauthMeta = {
    issuer,
    urls,
    clientId: tokenParams.clientId,
    redirectUri: tokenParams.redirectUri,
    responseType: tokenParams.responseType,
    responseMode: tokenParams.responseMode,
    scopes: tokenParams.scopes,
    state: tokenParams.state,
    nonce: tokenParams.nonce,
    ignoreSignature: tokenParams.ignoreSignature
  };
  if (tokenParams.pkce === false) {
    return oauthMeta;
  }
  var pkceMeta = (0, import_assign.default)((0, import_assign.default)({}, oauthMeta), {
    codeVerifier: tokenParams.codeVerifier,
    codeChallengeMethod: tokenParams.codeChallengeMethod,
    codeChallenge: tokenParams.codeChallenge
  });
  return pkceMeta;
}
function assertPKCESupport(sdk) {
  if (!sdk.features.isPKCESupported()) {
    var errorMessage = "PKCE requires a modern browser with encryption support running in a secure context.";
    if (!sdk.features.isHTTPS()) {
      errorMessage += "\nThe current page is not being served with HTTPS protocol. PKCE requires secure HTTPS protocol.";
    }
    if (!sdk.features.hasTextEncoder()) {
      errorMessage += '\n"TextEncoder" is not defined. To use PKCE, you may need to include a polyfill/shim for this browser.';
    }
    throw new AuthSdkError(errorMessage);
  }
}
function validateCodeChallengeMethod(_x, _x2) {
  return _validateCodeChallengeMethod.apply(this, arguments);
}
function _validateCodeChallengeMethod() {
  _validateCodeChallengeMethod = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, codeChallengeMethod) {
    var wellKnownResponse, methods;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            codeChallengeMethod = codeChallengeMethod || sdk.options.codeChallengeMethod || DEFAULT_CODE_CHALLENGE_METHOD;
            _context2.next = 3;
            return getWellKnown(sdk);
          case 3:
            wellKnownResponse = _context2.sent;
            methods = wellKnownResponse["code_challenge_methods_supported"] || [];
            if (!((0, import_index_of2.default)(methods).call(methods, codeChallengeMethod) === -1)) {
              _context2.next = 7;
              break;
            }
            throw new AuthSdkError("Invalid code_challenge_method");
          case 7:
            return _context2.abrupt("return", codeChallengeMethod);
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _validateCodeChallengeMethod.apply(this, arguments);
}
function preparePKCE(_x3, _x4) {
  return _preparePKCE.apply(this, arguments);
}
function _preparePKCE() {
  _preparePKCE = _asyncToGenerator(import_regenerator.default.mark(function _callee2(sdk, tokenParams) {
    var _tokenParams, codeVerifier, codeChallenge, codeChallengeMethod;
    return import_regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _tokenParams = tokenParams, codeVerifier = _tokenParams.codeVerifier, codeChallenge = _tokenParams.codeChallenge, codeChallengeMethod = _tokenParams.codeChallengeMethod;
            codeChallenge = codeChallenge || sdk.options.codeChallenge;
            if (codeChallenge) {
              _context2.next = 8;
              break;
            }
            assertPKCESupport(sdk);
            codeVerifier = codeVerifier || PKCE.generateVerifier();
            _context2.next = 7;
            return PKCE.computeChallenge(codeVerifier);
          case 7:
            codeChallenge = _context2.sent;
          case 8:
            _context2.next = 10;
            return validateCodeChallengeMethod(sdk, codeChallengeMethod);
          case 10:
            codeChallengeMethod = _context2.sent;
            tokenParams = (0, import_assign.default)((0, import_assign.default)({}, tokenParams), {
              responseType: "code",
              codeVerifier,
              codeChallenge,
              codeChallengeMethod
            });
            return _context2.abrupt("return", tokenParams);
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _preparePKCE.apply(this, arguments);
}
function prepareTokenParams(_x5) {
  return _prepareTokenParams.apply(this, arguments);
}
function _prepareTokenParams() {
  _prepareTokenParams = _asyncToGenerator(import_regenerator.default.mark(function _callee3(sdk) {
    var tokenParams, defaults, _args3 = arguments;
    return import_regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tokenParams = _args3.length > 1 && _args3[1] !== void 0 ? _args3[1] : {};
            defaults = getDefaultTokenParams(sdk);
            tokenParams = (0, import_assign.default)((0, import_assign.default)({}, defaults), tokenParams);
            if (!(tokenParams.pkce === false)) {
              _context3.next = 5;
              break;
            }
            return _context3.abrupt("return", tokenParams);
          case 5:
            return _context3.abrupt("return", preparePKCE(sdk, tokenParams));
          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _prepareTokenParams.apply(this, arguments);
}
function isSameRefreshToken(a3, b3) {
  return a3.refreshToken === b3.refreshToken;
}
function isRefreshTokenError(err) {
  if (!isAuthApiError(err)) {
    return false;
  }
  if (!err.xhr || !err.xhr.responseJSON) {
    return false;
  }
  var responseJSON = err.xhr.responseJSON;
  if (responseJSON.error === "invalid_grant") {
    return true;
  }
  return false;
}
function urlParamsToObject(hashOrSearch) {
  var plus2space = /\+/g;
  var paramSplit = /([^&=]+)=?([^&]*)/g;
  var fragment = hashOrSearch || "";
  if (fragment.charAt(0) === "#" && fragment.charAt(1) === "/") {
    fragment = fragment.substring(2);
  }
  if (fragment.charAt(0) === "#" || fragment.charAt(0) === "?") {
    fragment = fragment.substring(1);
  }
  var obj = {};
  var param;
  while (true) {
    param = paramSplit.exec(fragment);
    if (!param) {
      break;
    }
    var key = param[1];
    var value = param[2];
    if (key === "id_token" || key === "access_token" || key === "code") {
      obj[key] = value;
    } else {
      obj[key] = decodeURIComponent(value.replace(plus2space, " "));
    }
  }
  return obj;
}
function validateClaims(sdk, claims, validationParams) {
  var aud = validationParams.clientId;
  var iss = validationParams.issuer;
  var nonce = validationParams.nonce;
  if (!claims || !iss || !aud) {
    throw new AuthSdkError("The jwt, iss, and aud arguments are all required");
  }
  if (nonce && claims.nonce !== nonce) {
    throw new AuthSdkError("OAuth flow response nonce doesn't match request nonce");
  }
  var now = Math.floor(Date.now() / 1e3);
  if (claims.iss !== iss) {
    throw new AuthSdkError("The issuer [" + claims.iss + "] does not match [" + iss + "]");
  }
  if (claims.aud !== aud) {
    throw new AuthSdkError("The audience [" + claims.aud + "] does not match [" + aud + "]");
  }
  if (claims.iat > claims.exp) {
    throw new AuthSdkError("The JWT expired before it was issued");
  }
  if (!sdk.options.ignoreLifetime) {
    if (now - sdk.options.maxClockSkew > claims.exp) {
      throw new AuthSdkError("The JWT expired and is no longer valid");
    }
    if (claims.iat > now + sdk.options.maxClockSkew) {
      throw new AuthSdkError("The JWT was issued in the future");
    }
  }
}
function isObjectWithProperties(obj) {
  if (!obj || _typeof(obj) !== "object" || (0, import_values.default)(obj).length === 0) {
    return false;
  }
  return true;
}
function isOAuthTransactionMeta(obj) {
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  return !!obj.redirectUri || !!obj.responseType;
}
function isPKCETransactionMeta(obj) {
  if (!isOAuthTransactionMeta(obj)) {
    return false;
  }
  return !!obj.codeVerifier;
}
function isIdxTransactionMeta(obj) {
  if (!isPKCETransactionMeta(obj)) {
    return false;
  }
  return !!obj.interactionHandle;
}
function isCustomAuthTransactionMeta(obj) {
  var _context2;
  if (!isObjectWithProperties(obj)) {
    return false;
  }
  var isAllStringValues = (0, import_find.default)(_context2 = (0, import_values.default)(obj)).call(_context2, function(value) {
    return typeof value !== "string";
  }) === void 0;
  return isAllStringValues;
}
function isTransactionMeta(obj) {
  if (isOAuthTransactionMeta(obj) || isCustomAuthTransactionMeta(obj)) {
    return true;
  }
  return false;
}
var IdxStatus;
(function(IdxStatus2) {
  IdxStatus2["SUCCESS"] = "SUCCESS";
  IdxStatus2["PENDING"] = "PENDING";
  IdxStatus2["FAILURE"] = "FAILURE";
  IdxStatus2["TERMINAL"] = "TERMINAL";
  IdxStatus2["CANCELED"] = "CANCELED";
})(IdxStatus || (IdxStatus = {}));
var AuthenticatorKey;
(function(AuthenticatorKey2) {
  AuthenticatorKey2["OKTA_PASSWORD"] = "okta_password";
  AuthenticatorKey2["OKTA_EMAIL"] = "okta_email";
  AuthenticatorKey2["PHONE_NUMBER"] = "phone_number";
  AuthenticatorKey2["GOOGLE_AUTHENTICATOR"] = "google_otp";
  AuthenticatorKey2["SECURITY_QUESTION"] = "security_question";
  AuthenticatorKey2["OKTA_VERIFY"] = "okta_verify";
  AuthenticatorKey2["WEBAUTHN"] = "webauthn";
})(AuthenticatorKey || (AuthenticatorKey = {}));
var IdxFeature;
(function(IdxFeature2) {
  IdxFeature2["PASSWORD_RECOVERY"] = "recover-password";
  IdxFeature2["REGISTRATION"] = "enroll-profile";
  IdxFeature2["SOCIAL_IDP"] = "redirect-idp";
  IdxFeature2["ACCOUNT_UNLOCK"] = "unlock-account";
})(IdxFeature || (IdxFeature = {}));
function isAuthenticator(obj) {
  return obj && (obj.key || obj.id);
}
function isToken(obj) {
  if (obj && (obj.accessToken || obj.idToken || obj.refreshToken) && Array.isArray(obj.scopes)) {
    return true;
  }
  return false;
}
function isAccessToken(obj) {
  return obj && obj.accessToken;
}
function isIDToken(obj) {
  return obj && obj.idToken;
}
function isRefreshToken(obj) {
  return obj && obj.refreshToken;
}
function validateToken(token, type) {
  if (!isIDToken(token) && !isAccessToken(token) && !isRefreshToken(token)) {
    throw new AuthSdkError("Token must be an Object with scopes, expiresAt, and one of: an idToken, accessToken, or refreshToken property");
  }
  if (type === "accessToken" && !isAccessToken(token)) {
    throw new AuthSdkError("invalid accessToken");
  }
  if (type === "idToken" && !isIDToken(token)) {
    throw new AuthSdkError("invalid idToken");
  }
  if (type === "refreshToken" && !isRefreshToken(token)) {
    throw new AuthSdkError("invalid refreshToken");
  }
}
function decodeToken(token) {
  var jwt = token.split(".");
  var decodedToken;
  try {
    decodedToken = {
      header: JSON.parse(base64UrlToString(jwt[0])),
      payload: JSON.parse(base64UrlToString(jwt[1])),
      signature: jwt[2]
    };
  } catch (e) {
    throw new AuthSdkError("Malformed token");
  }
  return decodedToken;
}
function revokeToken(_x, _x2) {
  return _revokeToken.apply(this, arguments);
}
function _revokeToken() {
  _revokeToken = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, token) {
    var _context2, _context22;
    var accessToken, refreshToken, clientId, clientSecret, revokeUrl, args, creds;
    return import_regenerator.default.wrap(function _callee$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            accessToken = "";
            refreshToken = "";
            if (token) {
              accessToken = token.accessToken;
              refreshToken = token.refreshToken;
            }
            if (!(!accessToken && !refreshToken)) {
              _context3.next = 5;
              break;
            }
            throw new AuthSdkError("A valid access or refresh token object is required");
          case 5:
            clientId = sdk.options.clientId;
            clientSecret = sdk.options.clientSecret;
            if (clientId) {
              _context3.next = 9;
              break;
            }
            throw new AuthSdkError("A clientId must be specified in the OktaAuth constructor to revoke a token");
          case 9:
            revokeUrl = getOAuthUrls(sdk).revokeUrl;
            args = (0, import_slice2.default)(_context2 = toQueryString({
              token_type_hint: refreshToken ? "refresh_token" : "access_token",
              token: refreshToken || accessToken
            })).call(_context2, 1);
            creds = clientSecret ? b((0, import_concat.default)(_context22 = "".concat(clientId, ":")).call(_context22, clientSecret)) : b(clientId);
            return _context3.abrupt("return", post(sdk, revokeUrl, args, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + creds
              }
            }));
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee);
  }));
  return _revokeToken.apply(this, arguments);
}
function exchangeCodeForTokens(sdk, tokenParams, urls) {
  urls = urls || getOAuthUrls(sdk, tokenParams);
  tokenParams = (0, import_assign.default)({}, getDefaultTokenParams(sdk), clone(tokenParams));
  var _tokenParams = tokenParams, authorizationCode = _tokenParams.authorizationCode, interactionCode = _tokenParams.interactionCode, codeVerifier = _tokenParams.codeVerifier, clientId = _tokenParams.clientId, redirectUri = _tokenParams.redirectUri, scopes = _tokenParams.scopes, ignoreSignature = _tokenParams.ignoreSignature, state = _tokenParams.state;
  var getTokenOptions = {
    clientId,
    redirectUri,
    authorizationCode,
    interactionCode,
    codeVerifier
  };
  return postToTokenEndpoint(sdk, getTokenOptions, urls).then(function(response) {
    var responseType = ["token"];
    if ((0, import_index_of2.default)(scopes).call(scopes, "openid") !== -1) {
      responseType.push("id_token");
    }
    var handleResponseOptions = {
      clientId,
      redirectUri,
      scopes,
      responseType,
      ignoreSignature
    };
    return handleOAuthResponse(sdk, handleResponseOptions, response, urls).then(function(response2) {
      response2.code = authorizationCode;
      response2.state = state;
      return response2;
    });
  }).finally(function() {
    sdk.transactionManager.clear();
  });
}
function verifyToken(_x, _x2, _x3) {
  return _verifyToken.apply(this, arguments);
}
function _verifyToken() {
  _verifyToken = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, token, validationParams) {
    var jwt, configuredIssuer, _yield$getWellKnown, issuer, validationOptions, key, valid, hash;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!token || !token.idToken)) {
              _context2.next = 2;
              break;
            }
            throw new AuthSdkError("Only idTokens may be verified");
          case 2:
            jwt = decodeToken(token.idToken);
            configuredIssuer = (validationParams === null || validationParams === void 0 ? void 0 : validationParams.issuer) || sdk.options.issuer;
            _context2.next = 6;
            return getWellKnown(sdk, configuredIssuer);
          case 6:
            _yield$getWellKnown = _context2.sent;
            issuer = _yield$getWellKnown.issuer;
            validationOptions = (0, import_assign.default)({
              clientId: sdk.options.clientId,
              ignoreSignature: sdk.options.ignoreSignature
            }, validationParams, {
              issuer
            });
            validateClaims(sdk, jwt.payload, validationOptions);
            if (!(validationOptions.ignoreSignature == true || !sdk.features.isTokenVerifySupported())) {
              _context2.next = 12;
              break;
            }
            return _context2.abrupt("return", token);
          case 12:
            _context2.next = 14;
            return getKey(sdk, token.issuer, jwt.header.kid);
          case 14:
            key = _context2.sent;
            _context2.next = 17;
            return verifyToken$1(token.idToken, key);
          case 17:
            valid = _context2.sent;
            if (valid) {
              _context2.next = 20;
              break;
            }
            throw new AuthSdkError("The token signature is not valid");
          case 20:
            if (!(validationParams && validationParams.accessToken && token.claims.at_hash)) {
              _context2.next = 26;
              break;
            }
            _context2.next = 23;
            return getOidcHash(validationParams.accessToken);
          case 23:
            hash = _context2.sent;
            if (!(hash !== token.claims.at_hash)) {
              _context2.next = 26;
              break;
            }
            throw new AuthSdkError("Token hash verification failed");
          case 26:
            return _context2.abrupt("return", token);
          case 27:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _verifyToken.apply(this, arguments);
}
function validateResponse(res, oauthParams) {
  if (res["error"] && res["error_description"]) {
    throw new OAuthError(res["error"], res["error_description"]);
  }
  if (res.state !== oauthParams.state) {
    throw new AuthSdkError("OAuth flow response state doesn't match request state");
  }
}
function handleOAuthResponse(_x, _x2, _x3, _x4) {
  return _handleOAuthResponse.apply(this, arguments);
}
function _handleOAuthResponse() {
  _handleOAuthResponse = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, tokenParams, res, urls) {
    var pkce, responseType, scopes, clientId, tokenDict, expiresIn, tokenType, accessToken, idToken, refreshToken, now, accessJwt, idJwt, idTokenObj, validationParams;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            pkce = sdk.options.pkce !== false;
            if (!(pkce && (res.code || res.interaction_code))) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", exchangeCodeForTokens(sdk, (0, import_assign.default)({}, tokenParams, {
              authorizationCode: res.code,
              interactionCode: res.interaction_code
            }), urls));
          case 3:
            tokenParams = tokenParams || getDefaultTokenParams(sdk);
            urls = urls || getOAuthUrls(sdk, tokenParams);
            responseType = tokenParams.responseType || [];
            if (!Array.isArray(responseType)) {
              responseType = [responseType];
            }
            if (res.scope) {
              scopes = res.scope.split(" ");
            } else {
              scopes = clone(tokenParams.scopes);
            }
            clientId = tokenParams.clientId || sdk.options.clientId;
            validateResponse(res, tokenParams);
            tokenDict = {};
            expiresIn = res.expires_in;
            tokenType = res.token_type;
            accessToken = res.access_token;
            idToken = res.id_token;
            refreshToken = res.refresh_token;
            now = Math.floor(Date.now() / 1e3);
            if (accessToken) {
              accessJwt = sdk.token.decode(accessToken);
              tokenDict.accessToken = {
                accessToken,
                claims: accessJwt.payload,
                expiresAt: Number(expiresIn) + now,
                tokenType,
                scopes,
                authorizeUrl: urls.authorizeUrl,
                userinfoUrl: urls.userinfoUrl
              };
            }
            if (refreshToken) {
              tokenDict.refreshToken = {
                refreshToken,
                expiresAt: Number(expiresIn) + now,
                scopes,
                tokenUrl: urls.tokenUrl,
                authorizeUrl: urls.authorizeUrl,
                issuer: urls.issuer
              };
            }
            if (!idToken) {
              _context2.next = 27;
              break;
            }
            idJwt = sdk.token.decode(idToken);
            idTokenObj = {
              idToken,
              claims: idJwt.payload,
              expiresAt: idJwt.payload.exp - idJwt.payload.iat + now,
              scopes,
              authorizeUrl: urls.authorizeUrl,
              issuer: urls.issuer,
              clientId
            };
            validationParams = {
              clientId,
              issuer: urls.issuer,
              nonce: tokenParams.nonce,
              accessToken
            };
            if (tokenParams.ignoreSignature !== void 0) {
              validationParams.ignoreSignature = tokenParams.ignoreSignature;
            }
            _context2.next = 26;
            return verifyToken(sdk, idTokenObj, validationParams);
          case 26:
            tokenDict.idToken = idTokenObj;
          case 27:
            if (!((0, import_index_of2.default)(responseType).call(responseType, "token") !== -1 && !tokenDict.accessToken)) {
              _context2.next = 29;
              break;
            }
            throw new AuthSdkError('Unable to parse OAuth flow response: response type "token" was requested but "access_token" was not returned.');
          case 29:
            if (!((0, import_index_of2.default)(responseType).call(responseType, "id_token") !== -1 && !tokenDict.idToken)) {
              _context2.next = 31;
              break;
            }
            throw new AuthSdkError('Unable to parse OAuth flow response: response type "id_token" was requested but "id_token" was not returned.');
          case 31:
            return _context2.abrupt("return", {
              tokens: tokenDict,
              state: res.state,
              code: res.code
            });
          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _handleOAuthResponse.apply(this, arguments);
}
function getToken(sdk, options) {
  if (arguments.length > 2) {
    return import_promise2.default.reject(new AuthSdkError('As of version 3.0, "getToken" takes only a single set of options'));
  }
  options = options || {};
  var popupWindow = options.popupWindow;
  options.popupWindow = void 0;
  return prepareTokenParams(sdk, options).then(function(tokenParams) {
    var sessionTokenOverrides = {
      prompt: "none",
      responseMode: "okta_post_message",
      display: null
    };
    var idpOverrides = {
      display: "popup"
    };
    if (options.sessionToken) {
      (0, import_assign.default)(tokenParams, sessionTokenOverrides);
    } else if (options.idp) {
      (0, import_assign.default)(tokenParams, idpOverrides);
    }
    var requestUrl, endpoint, urls;
    urls = getOAuthUrls(sdk, tokenParams);
    endpoint = options.codeVerifier ? urls.tokenUrl : urls.authorizeUrl;
    requestUrl = endpoint + buildAuthorizeParams(tokenParams);
    var flowType;
    if (tokenParams.sessionToken || tokenParams.display === null) {
      flowType = "IFRAME";
    } else if (tokenParams.display === "popup") {
      flowType = "POPUP";
    } else {
      flowType = "IMPLICIT";
    }
    switch (flowType) {
      case "IFRAME":
        var iframePromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        var iframeEl = loadFrame(requestUrl);
        return iframePromise.then(function(res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function() {
          var _a;
          if (document.body.contains(iframeEl)) {
            (_a = iframeEl.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(iframeEl);
          }
        });
      case "POPUP":
        var oauthPromise;
        if (tokenParams.responseMode === "okta_post_message") {
          if (!sdk.features.isPopupPostMessageSupported()) {
            throw new AuthSdkError("This browser doesn't have full postMessage support");
          }
          oauthPromise = addPostMessageListener(sdk, options.timeout, tokenParams.state);
        }
        if (popupWindow) {
          popupWindow.location.assign(requestUrl);
        }
        var popupPromise = new import_promise2.default(function(resolve, reject) {
          var closePoller = setInterval(function() {
            if (!popupWindow || popupWindow.closed) {
              clearInterval(closePoller);
              reject(new AuthSdkError("Unable to parse OAuth flow response"));
            }
          }, 100);
          oauthPromise.then(function(res) {
            clearInterval(closePoller);
            resolve(res);
          }).catch(function(err) {
            clearInterval(closePoller);
            reject(err);
          });
        });
        return popupPromise.then(function(res) {
          return handleOAuthResponse(sdk, tokenParams, res, urls);
        }).finally(function() {
          if (popupWindow && !popupWindow.closed) {
            popupWindow.close();
          }
        });
      default:
        throw new AuthSdkError("The full page redirect flow is not supported");
    }
  });
}
function getWithoutPrompt(sdk, options) {
  if (arguments.length > 2) {
    return import_promise2.default.reject(new AuthSdkError('As of version 3.0, "getWithoutPrompt" takes only a single set of options'));
  }
  options = clone(options) || {};
  (0, import_assign.default)(options, {
    prompt: "none",
    responseMode: "okta_post_message",
    display: null
  });
  return getToken(sdk, options);
}
function renewTokensWithRefresh(_x, _x2, _x3) {
  return _renewTokensWithRefresh.apply(this, arguments);
}
function _renewTokensWithRefresh() {
  _renewTokensWithRefresh = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, tokenParams, refreshTokenObject) {
    var clientId, renewTokenParams, tokenResponse, urls, _yield$handleOAuthRes, tokens, refreshToken;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            clientId = sdk.options.clientId;
            if (clientId) {
              _context2.next = 3;
              break;
            }
            throw new AuthSdkError("A clientId must be specified in the OktaAuth constructor to renew tokens");
          case 3:
            renewTokenParams = (0, import_assign.default)({}, tokenParams, {
              clientId
            });
            _context2.next = 6;
            return postRefreshToken(sdk, renewTokenParams, refreshTokenObject);
          case 6:
            tokenResponse = _context2.sent;
            urls = getOAuthUrls(sdk, tokenParams);
            _context2.next = 10;
            return handleOAuthResponse(sdk, renewTokenParams, tokenResponse, urls);
          case 10:
            _yield$handleOAuthRes = _context2.sent;
            tokens = _yield$handleOAuthRes.tokens;
            refreshToken = tokens.refreshToken;
            if (refreshToken && !isSameRefreshToken(refreshToken, refreshTokenObject)) {
              sdk.tokenManager.updateRefreshToken(refreshToken);
            }
            return _context2.abrupt("return", tokens);
          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _renewTokensWithRefresh.apply(this, arguments);
}
function throwInvalidTokenError() {
  throw new AuthSdkError("Renew must be passed a token with an array of scopes and an accessToken or idToken");
}
function getSingleToken(originalToken, tokens) {
  if (isIDToken(originalToken)) {
    return tokens.idToken;
  }
  if (isAccessToken(originalToken)) {
    return tokens.accessToken;
  }
  throwInvalidTokenError();
}
function renewToken(_x, _x2) {
  return _renewToken.apply(this, arguments);
}
function _renewToken() {
  _renewToken = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, token) {
    var tokens, responseType, scopes, authorizeUrl, userinfoUrl, issuer;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!isIDToken(token) && !isAccessToken(token)) {
              throwInvalidTokenError();
            }
            tokens = sdk.tokenManager.getTokensSync();
            if (!tokens.refreshToken) {
              _context2.next = 7;
              break;
            }
            _context2.next = 5;
            return renewTokensWithRefresh(sdk, {
              scopes: token.scopes
            }, tokens.refreshToken);
          case 5:
            tokens = _context2.sent;
            return _context2.abrupt("return", getSingleToken(token, tokens));
          case 7:
            if (sdk.options.pkce) {
              responseType = "code";
            } else if (isAccessToken(token)) {
              responseType = "token";
            } else {
              responseType = "id_token";
            }
            scopes = token.scopes, authorizeUrl = token.authorizeUrl, userinfoUrl = token.userinfoUrl, issuer = token.issuer;
            return _context2.abrupt("return", getWithoutPrompt(sdk, {
              responseType,
              scopes,
              authorizeUrl,
              userinfoUrl,
              issuer
            }).then(function(res) {
              return getSingleToken(token, res.tokens);
            }));
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _renewToken.apply(this, arguments);
}
function renewTokens(_x, _x2) {
  return _renewTokens.apply(this, arguments);
}
function _renewTokens() {
  _renewTokens = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, options) {
    var tokens, accessToken, idToken, scopes, authorizeUrl, userinfoUrl, issuer, _getDefaultTokenParam, responseType;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            tokens = sdk.tokenManager.getTokensSync();
            if (!tokens.refreshToken) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return", renewTokensWithRefresh(sdk, options || {}, tokens.refreshToken));
          case 3:
            if (!(!tokens.accessToken && !tokens.idToken)) {
              _context2.next = 5;
              break;
            }
            throw new AuthSdkError("renewTokens() was called but there is no existing token");
          case 5:
            accessToken = tokens.accessToken || {};
            idToken = tokens.idToken || {};
            scopes = accessToken.scopes || idToken.scopes;
            if (scopes) {
              _context2.next = 10;
              break;
            }
            throw new AuthSdkError("renewTokens: invalid tokens: could not read scopes");
          case 10:
            authorizeUrl = accessToken.authorizeUrl || idToken.authorizeUrl;
            if (authorizeUrl) {
              _context2.next = 13;
              break;
            }
            throw new AuthSdkError("renewTokens: invalid tokens: could not read authorizeUrl");
          case 13:
            userinfoUrl = accessToken.userinfoUrl || sdk.options.userinfoUrl;
            issuer = idToken.issuer || sdk.options.issuer;
            options = (0, import_assign.default)({
              scopes,
              authorizeUrl,
              userinfoUrl,
              issuer
            }, options);
            if (sdk.options.pkce) {
              options.responseType = "code";
            } else {
              _getDefaultTokenParam = getDefaultTokenParams(sdk), responseType = _getDefaultTokenParam.responseType;
              options.responseType = responseType;
            }
            return _context2.abrupt("return", getWithoutPrompt(sdk, options).then(function(res) {
              return res.tokens;
            }));
          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _renewTokens.apply(this, arguments);
}
function getUserInfo(_x, _x2, _x3) {
  return _getUserInfo.apply(this, arguments);
}
function _getUserInfo() {
  _getUserInfo = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, accessTokenObject, idTokenObject) {
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (accessTokenObject) {
              _context2.next = 4;
              break;
            }
            _context2.next = 3;
            return sdk.tokenManager.getTokens();
          case 3:
            accessTokenObject = _context2.sent.accessToken;
          case 4:
            if (idTokenObject) {
              _context2.next = 8;
              break;
            }
            _context2.next = 7;
            return sdk.tokenManager.getTokens();
          case 7:
            idTokenObject = _context2.sent.idToken;
          case 8:
            if (!(!accessTokenObject || !isAccessToken(accessTokenObject))) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", import_promise2.default.reject(new AuthSdkError("getUserInfo requires an access token object")));
          case 10:
            if (!(!idTokenObject || !isIDToken(idTokenObject))) {
              _context2.next = 12;
              break;
            }
            return _context2.abrupt("return", import_promise2.default.reject(new AuthSdkError("getUserInfo requires an ID token object")));
          case 12:
            return _context2.abrupt("return", httpRequest(sdk, {
              url: accessTokenObject.userinfoUrl,
              method: "GET",
              accessToken: accessTokenObject.accessToken
            }).then(function(userInfo) {
              if (userInfo.sub === idTokenObject.claims.sub) {
                return userInfo;
              }
              return import_promise2.default.reject(new AuthSdkError("getUserInfo request was rejected due to token mismatch"));
            }).catch(function(err) {
              if (err.xhr && (err.xhr.status === 401 || err.xhr.status === 403)) {
                var authenticateHeader;
                if (err.xhr.headers && isFunction(err.xhr.headers.get) && err.xhr.headers.get("WWW-Authenticate")) {
                  authenticateHeader = err.xhr.headers.get("WWW-Authenticate");
                } else if (isFunction(err.xhr.getResponseHeader)) {
                  authenticateHeader = err.xhr.getResponseHeader("WWW-Authenticate");
                }
                if (authenticateHeader) {
                  var errorMatches = authenticateHeader.match(/error="(.*?)"/) || [];
                  var errorDescriptionMatches = authenticateHeader.match(/error_description="(.*?)"/) || [];
                  var error = errorMatches[1];
                  var errorDescription = errorDescriptionMatches[1];
                  if (error && errorDescription) {
                    err = new OAuthError(error, errorDescription);
                  }
                }
              }
              throw err;
            }));
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _getUserInfo.apply(this, arguments);
}
function getWithPopup(sdk, options) {
  if (arguments.length > 2) {
    return import_promise2.default.reject(new AuthSdkError('As of version 3.0, "getWithPopup" takes only a single set of options'));
  }
  var popupWindow = loadPopup("/", options);
  options = clone(options) || {};
  (0, import_assign.default)(options, {
    display: "popup",
    responseMode: "okta_post_message",
    popupWindow
  });
  return getToken(sdk, options);
}
function getWithRedirect(_x, _x2) {
  return _getWithRedirect.apply(this, arguments);
}
function _getWithRedirect() {
  _getWithRedirect = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, options) {
    var tokenParams, meta, requestUrl, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(_args.length > 2)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", import_promise2.default.reject(new AuthSdkError('As of version 3.0, "getWithRedirect" takes only a single set of options')));
          case 2:
            options = clone(options) || {};
            _context2.next = 5;
            return prepareTokenParams(sdk, options);
          case 5:
            tokenParams = _context2.sent;
            meta = createOAuthMeta(sdk, tokenParams);
            requestUrl = meta.urls.authorizeUrl + buildAuthorizeParams(tokenParams);
            sdk.transactionManager.save(meta, {
              oauth: true
            });
            sdk.token.getWithRedirect._setLocation(requestUrl);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _getWithRedirect.apply(this, arguments);
}
function removeHash(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.search);
  } else {
    nativeLoc.hash = "";
  }
}
function removeSearch(sdk) {
  var nativeHistory = sdk.token.parseFromUrl._getHistory();
  var nativeDoc = sdk.token.parseFromUrl._getDocument();
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  if (nativeHistory && nativeHistory.replaceState) {
    nativeHistory.replaceState(null, nativeDoc.title, nativeLoc.pathname + nativeLoc.hash);
  } else {
    nativeLoc.search = "";
  }
}
function getResponseMode(sdk) {
  var defaultResponseMode = sdk.options.pkce ? "query" : "fragment";
  var responseMode = sdk.options.responseMode || defaultResponseMode;
  return responseMode;
}
function parseOAuthResponseFromUrl(sdk, options) {
  options = options || {};
  if (isString(options)) {
    options = {
      url: options
    };
  } else {
    options = options;
  }
  var url = options.url;
  var responseMode = options.responseMode || getResponseMode(sdk);
  var nativeLoc = sdk.token.parseFromUrl._getLocation();
  var paramStr;
  if (responseMode === "query") {
    paramStr = url ? url.substring((0, import_index_of2.default)(url).call(url, "?")) : nativeLoc.search;
  } else {
    paramStr = url ? url.substring((0, import_index_of2.default)(url).call(url, "#")) : nativeLoc.hash;
  }
  if (!paramStr) {
    throw new AuthSdkError("Unable to parse a token from the url");
  }
  return urlParamsToObject(paramStr);
}
function cleanOAuthResponseFromUrl(sdk, options) {
  var responseMode = options.responseMode || getResponseMode(sdk);
  responseMode === "query" ? removeSearch(sdk) : removeHash(sdk);
}
function parseFromUrl(_x, _x2) {
  return _parseFromUrl.apply(this, arguments);
}
function _parseFromUrl() {
  _parseFromUrl = _asyncToGenerator(import_regenerator.default.mark(function _callee(sdk, options) {
    var res, state, oauthParams, urls;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = options || {};
            if (isString(options)) {
              options = {
                url: options
              };
            } else {
              options = options;
            }
            res = parseOAuthResponseFromUrl(sdk, options);
            state = res.state;
            oauthParams = sdk.transactionManager.load({
              oauth: true,
              pkce: sdk.options.pkce,
              state
            });
            if (oauthParams) {
              _context2.next = 7;
              break;
            }
            return _context2.abrupt("return", import_promise2.default.reject(new AuthSdkError("Unable to retrieve OAuth redirect params from storage")));
          case 7:
            urls = oauthParams.urls;
            delete oauthParams.urls;
            if (!options.url) {
              cleanOAuthResponseFromUrl(sdk, options);
            }
            return _context2.abrupt("return", handleOAuthResponse(sdk, oauthParams, res, urls).catch(function(err) {
              if (!isInteractionRequiredError(err)) {
                sdk.transactionManager.clear({
                  state
                });
              }
              throw err;
            }).then(function(res2) {
              sdk.transactionManager.clear({
                state
              });
              return res2;
            }));
          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _parseFromUrl.apply(this, arguments);
}
var getEnrolledCredentials = function getEnrolledCredentials2() {
  var authenticatorEnrollments = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var credentials = [];
  authenticatorEnrollments.forEach(function(enrollement) {
    if (enrollement.key === "webauthn") {
      credentials.push({
        type: "public-key",
        id: base64UrlToBuffer(enrollement.credentialId)
      });
    }
  });
  return credentials;
};
var buildCredentialCreationOptions = function buildCredentialCreationOptions2(activationData, authenticatorEnrollments) {
  return {
    publicKey: {
      rp: activationData.rp,
      user: {
        id: base64UrlToBuffer(activationData.user.id),
        name: activationData.user.name,
        displayName: activationData.user.displayName
      },
      challenge: base64UrlToBuffer(activationData.challenge),
      pubKeyCredParams: activationData.pubKeyCredParams,
      attestation: activationData.attestation,
      authenticatorSelection: activationData.authenticatorSelection,
      excludeCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
var buildCredentialRequestOptions = function buildCredentialRequestOptions2(challengeData, authenticatorEnrollments) {
  return {
    publicKey: {
      challenge: base64UrlToBuffer(challengeData.challenge),
      userVerification: challengeData.userVerification,
      allowCredentials: getEnrolledCredentials(authenticatorEnrollments)
    }
  };
};
var getAttestation = function getAttestation2(credential) {
  var response = credential.response;
  var id = credential.id;
  var clientData = bufferToBase64Url(response.clientDataJSON);
  var attestation = bufferToBase64Url(response.attestationObject);
  return {
    id,
    clientData,
    attestation
  };
};
var getAssertion = function getAssertion2(credential) {
  var response = credential.response;
  var id = credential.id;
  var clientData = bufferToBase64Url(response.clientDataJSON);
  var authenticatorData = bufferToBase64Url(response.authenticatorData);
  var signatureData = bufferToBase64Url(response.signature);
  return {
    id,
    clientData,
    authenticatorData,
    signatureData
  };
};
var webauthn = Object.freeze({
  __proto__: null,
  buildCredentialCreationOptions,
  buildCredentialRequestOptions,
  getAttestation,
  getAssertion
});
var storageUtil = {
  getHttpCache: function getHttpCache() {
    return null;
  },
  getPKCEStorage: function getPKCEStorage() {
    return null;
  },
  browserHasLocalStorage: function browserHasLocalStorage() {
    try {
      var storage = this.getLocalStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  browserHasSessionStorage: function browserHasSessionStorage() {
    try {
      var storage = this.getSessionStorage();
      return this.testStorage(storage);
    } catch (e) {
      return false;
    }
  },
  testStorageType: function testStorageType(storageType) {
    var supported = false;
    switch (storageType) {
      case "sessionStorage":
        supported = this.browserHasSessionStorage();
        break;
      case "localStorage":
        supported = this.browserHasLocalStorage();
        break;
      case "cookie":
      case "memory":
        supported = true;
        break;
      default:
        supported = false;
        break;
    }
    return supported;
  },
  getStorageByType: function getStorageByType(storageType, options) {
    var storageProvider;
    switch (storageType) {
      case "sessionStorage":
        storageProvider = this.getSessionStorage();
        break;
      case "localStorage":
        storageProvider = this.getLocalStorage();
        break;
      case "cookie":
        storageProvider = this.getCookieStorage(options);
        break;
      case "memory":
        storageProvider = this.getInMemoryStorage();
        break;
      default:
        throw new AuthSdkError("Unrecognized storage option: ".concat(storageType));
    }
    return storageProvider;
  },
  findStorageType: function findStorageType(types) {
    var _context2;
    var curType;
    var nextType;
    types = (0, import_slice2.default)(types).call(types);
    curType = types.shift();
    nextType = types.length ? types[0] : null;
    if (!nextType) {
      return curType;
    }
    if (this.testStorageType(curType)) {
      return curType;
    }
    warn((0, import_concat.default)(_context2 = "This browser doesn't support ".concat(curType, ". Switching to ")).call(_context2, nextType, "."));
    return this.findStorageType(types);
  },
  getLocalStorage: function getLocalStorage() {
    return localStorage;
  },
  getSessionStorage: function getSessionStorage() {
    return sessionStorage;
  },
  getCookieStorage: function getCookieStorage(options) {
    var _this = this;
    var secure = options.secure;
    var sameSite = options.sameSite;
    var sessionCookie = options.sessionCookie;
    if (typeof secure === "undefined" || typeof sameSite === "undefined") {
      throw new AuthSdkError('getCookieStorage: "secure" and "sameSite" options must be provided');
    }
    var storage = {
      getItem: this.storage.get,
      setItem: function setItem(key, value) {
        var expiresAt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "2200-01-01T00:00:00.000Z";
        expiresAt = sessionCookie ? null : expiresAt;
        _this.storage.set(key, value, expiresAt, {
          secure,
          sameSite
        });
      },
      removeItem: function removeItem(key) {
        _this.storage.delete(key);
      }
    };
    if (!options.useSeparateCookies) {
      return storage;
    }
    return {
      getItem: function getItem(key) {
        var data = storage.getItem();
        var value = {};
        (0, import_keys.default)(data).forEach(function(k) {
          if ((0, import_index_of2.default)(k).call(k, key) === 0) {
            value[k.replace("".concat(key, "_"), "")] = JSON.parse(data[k]);
          }
        });
        return (0, import_stringify.default)(value);
      },
      setItem: function setItem(key, value) {
        var existingValues = JSON.parse(this.getItem(key));
        value = JSON.parse(value);
        (0, import_keys.default)(value).forEach(function(k) {
          var storageKey = key + "_" + k;
          var valueToStore = (0, import_stringify.default)(value[k]);
          storage.setItem(storageKey, valueToStore);
          delete existingValues[k];
        });
        (0, import_keys.default)(existingValues).forEach(function(k) {
          storage.removeItem(key + "_" + k);
        });
      },
      removeItem: function removeItem(key) {
        var existingValues = JSON.parse(this.getItem(key));
        (0, import_keys.default)(existingValues).forEach(function(k) {
          storage.removeItem(key + "_" + k);
        });
      }
    };
  },
  inMemoryStore: {},
  getInMemoryStorage: function getInMemoryStorage() {
    var _this2 = this;
    return {
      getItem: function getItem(key) {
        return _this2.inMemoryStore[key];
      },
      setItem: function setItem(key, value) {
        _this2.inMemoryStore[key] = value;
      }
    };
  },
  testStorage: function testStorage(storage) {
    var key = "okta-test-storage";
    try {
      storage.setItem(key, key);
      storage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  },
  storage: {
    set: function set(name, value, expiresAt, options) {
      var sameSite = options.sameSite, secure = options.secure;
      if (typeof secure === "undefined" || typeof sameSite === "undefined") {
        throw new AuthSdkError('storage.set: "secure" and "sameSite" options must be provided');
      }
      var cookieOptions = {
        path: options.path || "/",
        secure,
        sameSite
      };
      if (!!Date.parse(expiresAt)) {
        cookieOptions.expires = new Date(expiresAt);
      }
      api.set(name, value, cookieOptions);
      return this.get(name);
    },
    get: function get2(name) {
      if (!arguments.length) {
        return api.get();
      }
      return api.get(name);
    },
    delete: function _delete(name) {
      return api.remove(name, {
        path: "/"
      });
    }
  }
};
var SdkClock = function() {
  function SdkClock2(localOffset) {
    _classCallCheck(this, SdkClock2);
    this.localOffset = (0, import_parse_int.default)(localOffset || 0);
  }
  _createClass(SdkClock2, [{
    key: "now",
    value: function now() {
      var now2 = (Date.now() + this.localOffset) / 1e3;
      return now2;
    }
  }], [{
    key: "create",
    value: function create() {
      var localOffset = 0;
      return new SdkClock2(localOffset);
    }
  }]);
  return SdkClock2;
}();
var DEFAULT_OPTIONS = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true,
  clearPendingRemoveTokens: true,
  storage: void 0,
  expireEarlySeconds: 30,
  storageKey: TOKEN_STORAGE_NAME,
  _storageEventDelay: 0
};
var EVENT_EXPIRED = "expired";
var EVENT_RENEWED = "renewed";
var EVENT_ADDED = "added";
var EVENT_REMOVED = "removed";
var EVENT_ERROR = "error";
function defaultState() {
  return {
    expireTimeouts: {},
    renewPromise: null
  };
}
var TokenManager = function() {
  function TokenManager2(sdk) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, TokenManager2);
    this.sdk = sdk;
    this.emitter = sdk.emitter;
    if (!this.emitter) {
      throw new AuthSdkError("Emitter should be initialized before TokenManager");
    }
    options = (0, import_assign.default)({}, DEFAULT_OPTIONS, removeNils(options));
    if (isIE11OrLess()) {
      options._storageEventDelay = options._storageEventDelay || 1e3;
    }
    if (!isLocalhost()) {
      options.expireEarlySeconds = DEFAULT_OPTIONS.expireEarlySeconds;
    }
    this.options = options;
    var storageOptions = removeNils({
      storageKey: options.storageKey,
      secure: options.secure
    });
    if (_typeof(options.storage) === "object") {
      storageOptions.storageProvider = options.storage;
    } else if (options.storage) {
      storageOptions.storageType = options.storage;
    }
    this.storage = sdk.storageManager.getTokenStorage((0, import_assign.default)((0, import_assign.default)({}, storageOptions), {
      useSeparateCookies: true
    }));
    this.clock = SdkClock.create();
    this.state = defaultState();
    this.on = this.emitter.on.bind(this.emitter);
    this.off = this.emitter.off.bind(this.emitter);
  }
  _createClass(TokenManager2, [{
    key: "start",
    value: function start() {
      if (this.options.clearPendingRemoveTokens) {
        this.clearPendingRemoveTokens();
      }
      this.setExpireEventTimeoutAll();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.clearExpireEventTimeoutAll();
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return clone(this.options);
    }
  }, {
    key: "getExpireTime",
    value: function getExpireTime(token) {
      var expireEarlySeconds = this.options.expireEarlySeconds || 0;
      var expireTime = token.expiresAt - expireEarlySeconds;
      return expireTime;
    }
  }, {
    key: "hasExpired",
    value: function hasExpired(token) {
      var expireTime = this.getExpireTime(token);
      return expireTime <= this.clock.now();
    }
  }, {
    key: "emitExpired",
    value: function emitExpired(key, token) {
      this.emitter.emit(EVENT_EXPIRED, key, token);
    }
  }, {
    key: "emitRenewed",
    value: function emitRenewed(key, freshToken, oldToken) {
      this.emitter.emit(EVENT_RENEWED, key, freshToken, oldToken);
    }
  }, {
    key: "emitAdded",
    value: function emitAdded(key, token) {
      this.emitter.emit(EVENT_ADDED, key, token);
    }
  }, {
    key: "emitRemoved",
    value: function emitRemoved(key, token) {
      this.emitter.emit(EVENT_REMOVED, key, token);
    }
  }, {
    key: "emitError",
    value: function emitError(error) {
      this.emitter.emit(EVENT_ERROR, error);
    }
  }, {
    key: "emitEventsForCrossTabsStorageUpdate",
    value: function emitEventsForCrossTabsStorageUpdate(newValue, oldValue) {
      var _this = this;
      var oldTokens = this.getTokensFromStorageValue(oldValue);
      var newTokens = this.getTokensFromStorageValue(newValue);
      (0, import_keys.default)(newTokens).forEach(function(key) {
        var oldToken = oldTokens[key];
        var newToken = newTokens[key];
        if ((0, import_stringify.default)(oldToken) !== (0, import_stringify.default)(newToken)) {
          _this.emitAdded(key, newToken);
        }
      });
      (0, import_keys.default)(oldTokens).forEach(function(key) {
        var oldToken = oldTokens[key];
        var newToken = newTokens[key];
        if (!newToken) {
          _this.emitRemoved(key, oldToken);
        }
      });
    }
  }, {
    key: "clearExpireEventTimeout",
    value: function clearExpireEventTimeout(key) {
      clearTimeout(this.state.expireTimeouts[key]);
      delete this.state.expireTimeouts[key];
      this.state.renewPromise = null;
    }
  }, {
    key: "clearExpireEventTimeoutAll",
    value: function clearExpireEventTimeoutAll() {
      var expireTimeouts = this.state.expireTimeouts;
      for (var key in expireTimeouts) {
        if (!Object.prototype.hasOwnProperty.call(expireTimeouts, key)) {
          continue;
        }
        this.clearExpireEventTimeout(key);
      }
    }
  }, {
    key: "setExpireEventTimeout",
    value: function setExpireEventTimeout(key, token) {
      var _this2 = this;
      if (isRefreshToken(token)) {
        return;
      }
      var expireTime = this.getExpireTime(token);
      var expireEventWait = Math.max(expireTime - this.clock.now(), 0) * 1e3;
      this.clearExpireEventTimeout(key);
      var expireEventTimeout = setTimeout(function() {
        _this2.emitExpired(key, token);
      }, expireEventWait);
      this.state.expireTimeouts[key] = expireEventTimeout;
    }
  }, {
    key: "setExpireEventTimeoutAll",
    value: function setExpireEventTimeoutAll() {
      var tokenStorage = this.storage.getStorage();
      for (var key in tokenStorage) {
        if (!Object.prototype.hasOwnProperty.call(tokenStorage, key)) {
          continue;
        }
        var token = tokenStorage[key];
        this.setExpireEventTimeout(key, token);
      }
    }
  }, {
    key: "resetExpireEventTimeoutAll",
    value: function resetExpireEventTimeoutAll() {
      this.clearExpireEventTimeoutAll();
      this.setExpireEventTimeoutAll();
    }
  }, {
    key: "add",
    value: function add(key, token) {
      var tokenStorage = this.storage.getStorage();
      validateToken(token);
      tokenStorage[key] = token;
      this.storage.setStorage(tokenStorage);
      this.emitAdded(key, token);
      this.setExpireEventTimeout(key, token);
    }
  }, {
    key: "getSync",
    value: function getSync(key) {
      var tokenStorage = this.storage.getStorage();
      return tokenStorage[key];
    }
  }, {
    key: "get",
    value: function() {
      var _get2 = _asyncToGenerator(import_regenerator.default.mark(function _callee(key) {
        return import_regenerator.default.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.getSync(key));
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));
      function get3(_x) {
        return _get2.apply(this, arguments);
      }
      return get3;
    }()
  }, {
    key: "getTokensSync",
    value: function getTokensSync() {
      var tokens = {};
      var tokenStorage = this.storage.getStorage();
      (0, import_keys.default)(tokenStorage).forEach(function(key) {
        var token = tokenStorage[key];
        if (isAccessToken(token)) {
          tokens.accessToken = token;
        } else if (isIDToken(token)) {
          tokens.idToken = token;
        } else if (isRefreshToken(token)) {
          tokens.refreshToken = token;
        }
      });
      return tokens;
    }
  }, {
    key: "getTokens",
    value: function() {
      var _getTokens2 = _asyncToGenerator(import_regenerator.default.mark(function _callee2() {
        return import_regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.getTokensSync());
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function getTokens2() {
        return _getTokens2.apply(this, arguments);
      }
      return getTokens2;
    }()
  }, {
    key: "getStorageKeyByType",
    value: function getStorageKeyByType(type) {
      var _context3;
      var tokenStorage = this.storage.getStorage();
      var key = (0, import_filter.default)(_context3 = (0, import_keys.default)(tokenStorage)).call(_context3, function(key2) {
        var token = tokenStorage[key2];
        return isAccessToken(token) && type === "accessToken" || isIDToken(token) && type === "idToken" || isRefreshToken(token) && type === "refreshToken";
      })[0];
      return key;
    }
  }, {
    key: "getTokenType",
    value: function getTokenType(token) {
      if (isAccessToken(token)) {
        return "accessToken";
      }
      if (isIDToken(token)) {
        return "idToken";
      }
      if (isRefreshToken(token)) {
        return "refreshToken";
      }
      throw new AuthSdkError("Unknown token type");
    }
  }, {
    key: "setTokens",
    value: function setTokens(tokens, accessTokenCb, idTokenCb, refreshTokenCb) {
      var _this3 = this;
      var handleTokenCallback = function handleTokenCallback2(key, token) {
        var type = _this3.getTokenType(token);
        if (type === "accessToken") {
          accessTokenCb && accessTokenCb(key, token);
        } else if (type === "idToken") {
          idTokenCb && idTokenCb(key, token);
        } else if (type === "refreshToken") {
          refreshTokenCb && refreshTokenCb(key, token);
        }
      };
      var handleAdded = function handleAdded2(key, token) {
        _this3.emitAdded(key, token);
        _this3.setExpireEventTimeout(key, token);
        handleTokenCallback(key, token);
      };
      var handleRenewed = function handleRenewed2(key, token, oldToken) {
        _this3.emitRenewed(key, token, oldToken);
        _this3.clearExpireEventTimeout(key);
        _this3.setExpireEventTimeout(key, token);
        handleTokenCallback(key, token);
      };
      var handleRemoved = function handleRemoved2(key, token) {
        _this3.clearExpireEventTimeout(key);
        _this3.emitRemoved(key, token);
        handleTokenCallback(key, token);
      };
      var types = ["idToken", "accessToken", "refreshToken"];
      var existingTokens = this.getTokensSync();
      types.forEach(function(type) {
        var token = tokens[type];
        if (token) {
          validateToken(token, type);
        }
      });
      var storage = (0, import_reduce.default)(types).call(types, function(storage2, type) {
        var token = tokens[type];
        if (token) {
          var storageKey = _this3.getStorageKeyByType(type) || type;
          storage2[storageKey] = token;
        }
        return storage2;
      }, {});
      this.storage.setStorage(storage);
      types.forEach(function(type) {
        var newToken = tokens[type];
        var existingToken = existingTokens[type];
        var storageKey = _this3.getStorageKeyByType(type) || type;
        if (newToken && existingToken) {
          handleRemoved(storageKey, existingToken);
          handleAdded(storageKey, newToken);
          handleRenewed(storageKey, newToken, existingToken);
        } else if (newToken) {
          handleAdded(storageKey, newToken);
        } else if (existingToken) {
          handleRemoved(storageKey, existingToken);
        }
      });
    }
  }, {
    key: "remove",
    value: function remove(key) {
      this.clearExpireEventTimeout(key);
      var tokenStorage = this.storage.getStorage();
      var removedToken = tokenStorage[key];
      delete tokenStorage[key];
      this.storage.setStorage(tokenStorage);
      this.emitRemoved(key, removedToken);
    }
  }, {
    key: "renewToken",
    value: function() {
      var _renewToken2 = _asyncToGenerator(import_regenerator.default.mark(function _callee3(token) {
        var _a;
        return import_regenerator.default.wrap(function _callee3$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (_a = this.sdk.token) === null || _a === void 0 ? void 0 : _a.renew(token));
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee3, this);
      }));
      function renewToken2(_x2) {
        return _renewToken2.apply(this, arguments);
      }
      return renewToken2;
    }()
  }, {
    key: "validateToken",
    value: function validateToken$1(token) {
      return validateToken(token);
    }
  }, {
    key: "renew",
    value: function renew(key) {
      var _this4 = this;
      if (this.state.renewPromise) {
        return this.state.renewPromise;
      }
      try {
        var token = this.getSync(key);
        if (!token) {
          throw new AuthSdkError("The tokenManager has no token for the key: " + key);
        }
      } catch (e) {
        return import_promise2.default.reject(e);
      }
      this.clearExpireEventTimeout(key);
      this.state.renewPromise = this.sdk.token.renewTokens().then(function(tokens) {
        _this4.setTokens(tokens);
        var tokenType = _this4.getTokenType(token);
        return tokens[tokenType];
      }).catch(function(err) {
        _this4.remove(key);
        err.tokenKey = key;
        _this4.emitError(err);
        throw err;
      }).finally(function() {
        _this4.state.renewPromise = null;
      });
      return this.state.renewPromise;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearExpireEventTimeoutAll();
      this.storage.clearStorage();
    }
  }, {
    key: "clearPendingRemoveTokens",
    value: function clearPendingRemoveTokens() {
      var _this5 = this;
      var tokens = this.getTokensSync();
      (0, import_keys.default)(tokens).forEach(function(key) {
        if (tokens[key].pendingRemove) {
          _this5.remove(key);
        }
      });
    }
  }, {
    key: "getTokensFromStorageValue",
    value: function getTokensFromStorageValue(value) {
      var tokens;
      try {
        tokens = JSON.parse(value) || {};
      } catch (e) {
        tokens = {};
      }
      return tokens;
    }
  }, {
    key: "updateRefreshToken",
    value: function updateRefreshToken(token) {
      var key = this.getStorageKeyByType("refreshToken") || REFRESH_TOKEN_STORAGE_KEY;
      var tokenStorage = this.storage.getStorage();
      validateToken(token);
      tokenStorage[key] = token;
      this.storage.setStorage(tokenStorage);
    }
  }, {
    key: "addPendingRemoveFlags",
    value: function addPendingRemoveFlags() {
      var tokens = this.getTokensSync();
      (0, import_keys.default)(tokens).forEach(function(key) {
        tokens[key].pendingRemove = true;
      });
      this.setTokens(tokens);
    }
  }]);
  return TokenManager2;
}();
var AutoRenewService = function() {
  function AutoRenewService2(tokenManager) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, AutoRenewService2);
    this.started = false;
    this.tokenManager = tokenManager;
    this.options = options;
    this.renewTimeQueue = [];
    this.onTokenExpiredHandler = this.onTokenExpiredHandler.bind(this);
  }
  _createClass(AutoRenewService2, [{
    key: "shouldThrottleRenew",
    value: function shouldThrottleRenew() {
      var res = false;
      this.renewTimeQueue.push(Date.now());
      if (this.renewTimeQueue.length >= 10) {
        var firstTime = this.renewTimeQueue.shift();
        var lastTime = this.renewTimeQueue[this.renewTimeQueue.length - 1];
        res = lastTime - firstTime < 30 * 1e3;
      }
      return res;
    }
  }, {
    key: "requiresLeadership",
    value: function requiresLeadership() {
      return !!this.options.syncStorage && isBrowser();
    }
  }, {
    key: "onTokenExpiredHandler",
    value: function onTokenExpiredHandler(key) {
      if (this.options.autoRenew) {
        if (this.shouldThrottleRenew()) {
          var error = new AuthSdkError("Too many token renew requests");
          this.tokenManager.emitError(error);
        } else {
          this.tokenManager.renew(key).catch(function() {
          });
        }
      } else if (this.options.autoRemove) {
        this.tokenManager.remove(key);
      }
    }
  }, {
    key: "canStart",
    value: function canStart() {
      return !!this.options.autoRenew || !!this.options.autoRemove;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.canStart()) {
        this.stop();
        this.tokenManager.on(EVENT_EXPIRED, this.onTokenExpiredHandler);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        this.tokenManager.off(EVENT_EXPIRED, this.onTokenExpiredHandler);
        this.renewTimeQueue = [];
        this.started = false;
      }
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.started;
    }
  }]);
  return AutoRenewService2;
}();
var SyncStorageService = function() {
  function SyncStorageService2(tokenManager) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, SyncStorageService2);
    this.started = false;
    this.tokenManager = tokenManager;
    this.options = options;
    this.storageListener = this.storageListener.bind(this);
  }
  _createClass(SyncStorageService2, [{
    key: "storageListener",
    value: function storageListener(_ref) {
      var _this = this;
      var key = _ref.key, newValue = _ref.newValue, oldValue = _ref.oldValue;
      var opts = this.tokenManager.getOptions();
      var handleCrossTabsStorageChange = function handleCrossTabsStorageChange2() {
        _this.tokenManager.resetExpireEventTimeoutAll();
        _this.tokenManager.emitEventsForCrossTabsStorageUpdate(newValue, oldValue);
      };
      if (key && (key !== opts.storageKey || newValue === oldValue)) {
        return;
      }
      this.syncTimeout = setTimeout(function() {
        return handleCrossTabsStorageChange();
      }, opts._storageEventDelay);
    }
  }, {
    key: "requiresLeadership",
    value: function requiresLeadership() {
      return false;
    }
  }, {
    key: "isStarted",
    value: function isStarted() {
      return this.started;
    }
  }, {
    key: "canStart",
    value: function canStart() {
      return !!this.options.syncStorage && isBrowser();
    }
  }, {
    key: "start",
    value: function start() {
      if (this.canStart()) {
        this.stop();
        window.addEventListener("storage", this.storageListener);
        this.started = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.started) {
        window.removeEventListener("storage", this.storageListener);
        clearTimeout(this.syncTimeout);
        this.started = false;
      }
    }
  }]);
  return SyncStorageService2;
}();
function _createForOfIteratorHelper$7(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$7(o, minLen) {
  var _context4;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$7(o, minLen);
  var n = (0, import_slice2.default)(_context4 = Object.prototype.toString.call(o)).call(_context4, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var ServiceManager = function() {
  function ServiceManager2(sdk) {
    var _this = this;
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, ServiceManager2);
    this.sdk = sdk;
    var _sdk$tokenManager$get = sdk.tokenManager.getOptions(), autoRenew = _sdk$tokenManager$get.autoRenew, autoRemove = _sdk$tokenManager$get.autoRemove, syncStorage = _sdk$tokenManager$get.syncStorage;
    this.options = (0, import_assign.default)({}, ServiceManager2.defaultOptions, {
      autoRenew,
      autoRemove,
      syncStorage
    }, options);
    this.started = false;
    this.services = new import_map3.default();
    this.onLeaderDuplicate = this.onLeaderDuplicate.bind(this);
    this.onLeader = this.onLeader.bind(this);
    ServiceManager2.knownServices.forEach(function(name) {
      var svc = _this.createService(name);
      if (svc) {
        _this.services.set(name, svc);
      }
    });
  }
  _createClass(ServiceManager2, [{
    key: "onLeader",
    value: function onLeader() {
      if (this.started) {
        this.startServices();
      }
    }
  }, {
    key: "onLeaderDuplicate",
    value: function onLeaderDuplicate() {
    }
  }, {
    key: "isLeader",
    value: function isLeader() {
      var _a;
      return !!((_a = this.elector) === null || _a === void 0 ? void 0 : _a.isLeader);
    }
  }, {
    key: "hasLeader",
    value: function hasLeader() {
      var _a;
      return (_a = this.elector) === null || _a === void 0 ? void 0 : _a.hasLeader;
    }
  }, {
    key: "isLeaderRequired",
    value: function isLeaderRequired() {
      var _context2;
      return _toConsumableArray((0, import_values2.default)(_context2 = this.services).call(_context2)).some(function(srv) {
        return srv.requiresLeadership();
      });
    }
  }, {
    key: "start",
    value: function start() {
      if (this.started) {
        this.stop();
      }
      if (this.isLeaderRequired()) {
        this.startElector();
      }
      this.startServices();
      this.started = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.stopElector();
      this.stopServices();
      this.started = false;
    }
  }, {
    key: "getService",
    value: function getService(name) {
      return this.services.get(name);
    }
  }, {
    key: "startServices",
    value: function startServices() {
      var _context2;
      var _iterator = _createForOfIteratorHelper$7((0, import_values2.default)(_context2 = this.services).call(_context2)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var srv = _step.value;
          var canStart = srv.canStart() && !srv.isStarted() && (srv.requiresLeadership() ? this.isLeader() : true);
          if (canStart) {
            srv.start();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "stopServices",
    value: function stopServices() {
      var _context3;
      var _iterator2 = _createForOfIteratorHelper$7((0, import_values2.default)(_context3 = this.services).call(_context3)), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var srv = _step2.value;
          srv.stop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "startElector",
    value: function startElector() {
      this.stopElector();
      if (ServiceManager2.canUseLeaderElection()) {
        if (!this.channel) {
          var broadcastChannelName = this.options.broadcastChannelName;
          this.channel = new BroadcastChannel(broadcastChannelName);
        }
        if (!this.elector) {
          this.elector = createLeaderElection(this.channel);
          this.elector.onduplicate = this.onLeaderDuplicate;
          this.elector.awaitLeadership().then(this.onLeader);
        }
      }
    }
  }, {
    key: "stopElector",
    value: function stopElector() {
      var _a, _b;
      if (this.elector) {
        (_a = this.elector) === null || _a === void 0 ? void 0 : _a.die();
        this.elector = void 0;
        (_b = this.channel) === null || _b === void 0 ? void 0 : _b.close();
        this.channel = void 0;
      }
    }
  }, {
    key: "createService",
    value: function createService(name) {
      var tokenManager = this.sdk.tokenManager;
      var service;
      switch (name) {
        case "autoRenew":
          service = new AutoRenewService(tokenManager, (0, import_assign.default)({}, this.options));
          break;
        case "syncStorage":
          service = new SyncStorageService(tokenManager, (0, import_assign.default)({}, this.options));
          break;
        default:
          throw new Error("Unknown service ".concat(name));
      }
      return service;
    }
  }], [{
    key: "canUseLeaderElection",
    value: function canUseLeaderElection() {
      return isBrowser();
    }
  }]);
  return ServiceManager2;
}();
ServiceManager.knownServices = ["autoRenew", "syncStorage"];
ServiceManager.defaultOptions = {
  autoRenew: true,
  autoRemove: true,
  syncStorage: true
};
var PromiseQueue = function() {
  function PromiseQueue2() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      quiet: false
    };
    _classCallCheck(this, PromiseQueue2);
    this.queue = [];
    this.running = false;
    this.options = options;
  }
  _createClass(PromiseQueue2, [{
    key: "push",
    value: function push(method, thisObject) {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      return new import_promise2.default(function(resolve, reject) {
        if (_this.queue.length > 0) {
          if (_this.options.quiet !== false) {
            warn("Async method is being called but another async method is already running. The new method will be delayed until the previous method completes.");
          }
        }
        _this.queue.push({
          method,
          thisObject,
          args,
          resolve,
          reject
        });
        _this.run();
      });
    }
  }, {
    key: "run",
    value: function run2() {
      var _this2 = this;
      if (this.running) {
        return;
      }
      if (this.queue.length === 0) {
        return;
      }
      this.running = true;
      var queueItem = this.queue.shift();
      var res = queueItem.method.apply(queueItem.thisObject, queueItem.args);
      if (isPromise(res)) {
        res.then(queueItem.resolve, queueItem.reject).finally(function() {
          _this2.running = false;
          _this2.run();
        });
      } else {
        queueItem.resolve(res);
        this.running = false;
        this.run();
      }
    }
  }]);
  return PromiseQueue2;
}();
function fingerprint(sdk, options) {
  options = options || {};
  if (!isFingerprintSupported()) {
    return import_promise2.default.reject(new AuthSdkError("Fingerprinting is not supported on this device"));
  }
  var timeout;
  var iframe;
  var listener;
  var promise = new import_promise2.default(function(resolve, reject) {
    iframe = document.createElement("iframe");
    iframe.style.display = "none";
    listener = function listener2(e) {
      if (!e || !e.data || e.origin !== sdk.getIssuerOrigin()) {
        return;
      }
      try {
        var msg = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (!msg) {
        return;
      }
      if (msg.type === "FingerprintAvailable") {
        return resolve(msg.fingerprint);
      }
      if (msg.type === "FingerprintServiceReady") {
        e.source.postMessage((0, import_stringify.default)({
          type: "GetFingerprint"
        }), e.origin);
      }
    };
    addListener(window, "message", listener);
    iframe.src = sdk.getIssuerOrigin() + "/auth/services/devicefingerprint";
    document.body.appendChild(iframe);
    timeout = setTimeout(function() {
      reject(new AuthSdkError("Fingerprinting timed out"));
    }, (options === null || options === void 0 ? void 0 : options.timeout) || 15e3);
  });
  return promise.finally(function() {
    clearTimeout(timeout);
    removeListener(window, "message", listener);
    if (document.body.contains(iframe)) {
      iframe.parentElement.removeChild(iframe);
    }
  });
}
var INITIAL_AUTH_STATE = null;
var DEFAULT_PENDING = {
  updateAuthStatePromise: null,
  canceledTimes: 0
};
var EVENT_AUTH_STATE_CHANGE = "authStateChange";
var MAX_PROMISE_CANCEL_TIMES = 10;
var isSameAuthState = function isSameAuthState2(prevState, state) {
  if (!prevState) {
    return false;
  }
  return prevState.isAuthenticated === state.isAuthenticated && (0, import_stringify.default)(prevState.idToken) === (0, import_stringify.default)(state.idToken) && (0, import_stringify.default)(prevState.accessToken) === (0, import_stringify.default)(state.accessToken) && prevState.error === state.error;
};
var AuthStateManager = function() {
  function AuthStateManager2(sdk) {
    var _this = this;
    _classCallCheck(this, AuthStateManager2);
    if (!sdk.emitter) {
      throw new AuthSdkError("Emitter should be initialized before AuthStateManager");
    }
    this._sdk = sdk;
    this._pending = (0, import_assign.default)({}, DEFAULT_PENDING);
    this._authState = INITIAL_AUTH_STATE;
    this._logOptions = {};
    this._prevAuthState = null;
    this._transformQueue = new PromiseQueue({
      quiet: true
    });
    sdk.tokenManager.on(EVENT_ADDED, function(key, token) {
      _this._setLogOptions({
        event: EVENT_ADDED,
        key,
        token
      });
      _this.updateAuthState();
    });
    sdk.tokenManager.on(EVENT_REMOVED, function(key, token) {
      _this._setLogOptions({
        event: EVENT_REMOVED,
        key,
        token
      });
      _this.updateAuthState();
    });
  }
  _createClass(AuthStateManager2, [{
    key: "_setLogOptions",
    value: function _setLogOptions(options) {
      this._logOptions = options;
    }
  }, {
    key: "getAuthState",
    value: function getAuthState() {
      return this._authState;
    }
  }, {
    key: "getPreviousAuthState",
    value: function getPreviousAuthState() {
      return this._prevAuthState;
    }
  }, {
    key: "updateAuthState",
    value: function() {
      var _updateAuthState = _asyncToGenerator(import_regenerator.default.mark(function _callee() {
        var _this2 = this;
        var _this$_sdk$options, transformAuthState, devMode, log, emitAuthStateChange, finalPromise, cancelablePromise;
        return import_regenerator.default.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$_sdk$options = this._sdk.options, transformAuthState = _this$_sdk$options.transformAuthState, devMode = _this$_sdk$options.devMode;
                log = function log2(status) {
                  var _context3;
                  var _this2$_logOptions = _this2._logOptions, event = _this2$_logOptions.event, key = _this2$_logOptions.key, token = _this2$_logOptions.token;
                  getConsole().group((0, import_concat.default)(_context3 = "OKTA-AUTH-JS:updateAuthState: Event:".concat(event, " Status:")).call(_context3, status));
                  getConsole().log(key, token);
                  getConsole().log("Current authState", _this2._authState);
                  getConsole().groupEnd();
                  _this2._logOptions = {};
                };
                emitAuthStateChange = function emitAuthStateChange2(authState) {
                  if (isSameAuthState(_this2._authState, authState)) {
                    devMode && log("unchanged");
                    return;
                  }
                  _this2._prevAuthState = _this2._authState;
                  _this2._authState = authState;
                  _this2._sdk.emitter.emit(EVENT_AUTH_STATE_CHANGE, (0, import_assign.default)({}, authState));
                  devMode && log("emitted");
                };
                finalPromise = function finalPromise2(origPromise) {
                  return _this2._pending.updateAuthStatePromise.then(function() {
                    var curPromise = _this2._pending.updateAuthStatePromise;
                    if (curPromise && curPromise !== origPromise) {
                      return finalPromise2(curPromise);
                    }
                    return _this2.getAuthState();
                  });
                };
                if (!this._pending.updateAuthStatePromise) {
                  _context2.next = 11;
                  break;
                }
                if (!(this._pending.canceledTimes >= MAX_PROMISE_CANCEL_TIMES)) {
                  _context2.next = 10;
                  break;
                }
                devMode && log("terminated");
                return _context2.abrupt("return", finalPromise(this._pending.updateAuthStatePromise));
              case 10:
                this._pending.updateAuthStatePromise.cancel();
              case 11:
                cancelablePromise = new import_p_cancelable.default(function(resolve, _, onCancel) {
                  onCancel.shouldReject = false;
                  onCancel(function() {
                    _this2._pending.updateAuthStatePromise = null;
                    _this2._pending.canceledTimes = _this2._pending.canceledTimes + 1;
                    devMode && log("canceled");
                  });
                  var emitAndResolve = function emitAndResolve2(authState) {
                    if (cancelablePromise.isCanceled) {
                      resolve();
                      return;
                    }
                    emitAuthStateChange(authState);
                    resolve();
                    _this2._pending = (0, import_assign.default)({}, DEFAULT_PENDING);
                  };
                  _this2._sdk.isAuthenticated().then(function() {
                    if (cancelablePromise.isCanceled) {
                      resolve();
                      return;
                    }
                    var _this2$_sdk$tokenMana = _this2._sdk.tokenManager.getTokensSync(), accessToken = _this2$_sdk$tokenMana.accessToken, idToken = _this2$_sdk$tokenMana.idToken, refreshToken = _this2$_sdk$tokenMana.refreshToken;
                    var authState = {
                      accessToken,
                      idToken,
                      refreshToken,
                      isAuthenticated: !!(accessToken && idToken)
                    };
                    var promise = transformAuthState ? _this2._transformQueue.push(transformAuthState, null, _this2._sdk, authState) : import_promise2.default.resolve(authState);
                    promise.then(function(authState2) {
                      return emitAndResolve(authState2);
                    }).catch(function(error) {
                      return emitAndResolve({
                        accessToken,
                        idToken,
                        refreshToken,
                        isAuthenticated: false,
                        error
                      });
                    });
                  });
                });
                this._pending.updateAuthStatePromise = cancelablePromise;
                return _context2.abrupt("return", finalPromise(cancelablePromise));
              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));
      function updateAuthState() {
        return _updateAuthState.apply(this, arguments);
      }
      return updateAuthState;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this._sdk.emitter.on(EVENT_AUTH_STATE_CHANGE, handler);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(handler) {
      this._sdk.emitter.off(EVENT_AUTH_STATE_CHANGE, handler);
    }
  }]);
  return AuthStateManager2;
}();
var SavedObject = function() {
  function SavedObject2(storage, storageName) {
    _classCallCheck(this, SavedObject2);
    if (!storage) {
      throw new AuthSdkError('"storage" is required');
    }
    if (typeof storageName !== "string" || !storageName.length) {
      throw new AuthSdkError('"storageName" is required');
    }
    this.storageName = storageName;
    this.storageProvider = storage;
  }
  _createClass(SavedObject2, [{
    key: "getItem",
    value: function getItem(key) {
      return this.getStorage()[key];
    }
  }, {
    key: "setItem",
    value: function setItem(key, value) {
      return this.updateStorage(key, value);
    }
  }, {
    key: "removeItem",
    value: function removeItem(key) {
      return this.clearStorage(key);
    }
  }, {
    key: "getStorage",
    value: function getStorage2() {
      var storageString = this.storageProvider.getItem(this.storageName);
      storageString = storageString || "{}";
      try {
        return JSON.parse(storageString);
      } catch (e) {
        throw new AuthSdkError("Unable to parse storage string: " + this.storageName);
      }
    }
  }, {
    key: "setStorage",
    value: function setStorage(obj) {
      try {
        var storageString = obj ? (0, import_stringify.default)(obj) : "{}";
        this.storageProvider.setItem(this.storageName, storageString);
      } catch (e) {
        throw new AuthSdkError("Unable to set storage: " + this.storageName);
      }
    }
  }, {
    key: "clearStorage",
    value: function clearStorage(key) {
      if (!key) {
        if (this.storageProvider.removeItem) {
          this.storageProvider.removeItem(this.storageName);
        } else {
          this.setStorage();
        }
        return;
      }
      var obj = this.getStorage();
      delete obj[key];
      this.setStorage(obj);
    }
  }, {
    key: "updateStorage",
    value: function updateStorage(key, value) {
      var obj = this.getStorage();
      obj[key] = value;
      this.setStorage(obj);
    }
  }]);
  return SavedObject2;
}();
function logServerSideMemoryStorageWarning(options) {
  if (!isBrowser() && !options.storageProvider && !options.storageProvider) {
    warn("Memory storage can only support simple single user use case on server side, please provide custom storageProvider or storageKey if advanced scenarios need to be supported.");
  }
}
var StorageManager = function() {
  function StorageManager2(storageManagerOptions, cookieOptions, storageUtil2) {
    _classCallCheck(this, StorageManager2);
    this.storageManagerOptions = storageManagerOptions;
    this.cookieOptions = cookieOptions;
    this.storageUtil = storageUtil2;
  }
  _createClass(StorageManager2, [{
    key: "getOptionsForSection",
    value: function getOptionsForSection(sectionName, overrideOptions) {
      return (0, import_assign.default)({}, this.storageManagerOptions[sectionName], overrideOptions);
    }
  }, {
    key: "getStorage",
    value: function getStorage2(options) {
      options = (0, import_assign.default)({}, this.cookieOptions, options);
      if (options.storageProvider) {
        return options.storageProvider;
      }
      var _options = options, storageType = _options.storageType, storageTypes = _options.storageTypes;
      if (storageType === "sessionStorage") {
        options.sessionCookie = true;
      }
      if (storageType && storageTypes) {
        var idx = (0, import_index_of2.default)(storageTypes).call(storageTypes, storageType);
        if (idx >= 0) {
          storageTypes = (0, import_slice2.default)(storageTypes).call(storageTypes, idx);
          storageType = void 0;
        }
      }
      if (!storageType) {
        storageType = this.storageUtil.findStorageType(storageTypes);
      }
      return this.storageUtil.getStorageByType(storageType, options);
    }
  }, {
    key: "getTransactionStorage",
    value: function getTransactionStorage(options) {
      options = this.getOptionsForSection("transaction", options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getSharedTansactionStorage",
    value: function getSharedTansactionStorage(options) {
      options = this.getOptionsForSection("shared-transaction", options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || SHARED_TRANSACTION_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getOriginalUriStorage",
    value: function getOriginalUriStorage(options) {
      options = this.getOptionsForSection("original-uri", options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || ORIGINAL_URI_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getIdxResponseStorage",
    value: function getIdxResponseStorage(options) {
      var storage;
      if (isBrowser()) {
        try {
          storage = this.storageUtil.getStorageByType("memory", options);
        } catch (e) {
          warn("No response storage found, you may want to provide custom implementation for intermediate idx responses to optimize the network traffic");
        }
      } else {
        var transactionStorage = this.getTransactionStorage(options);
        if (transactionStorage) {
          storage = {
            getItem: function getItem(key) {
              var transaction = transactionStorage.getStorage();
              if (transaction && transaction[key]) {
                return transaction[key];
              }
              return null;
            },
            setItem: function setItem(key, val) {
              var transaction = transactionStorage.getStorage();
              if (!transaction) {
                throw new AuthSdkError("Transaction has been cleared, failed to save idxState");
              }
              transaction[key] = val;
              transactionStorage.setStorage(transaction);
            },
            removeItem: function removeItem(key) {
              var transaction = transactionStorage.getStorage();
              if (!transaction) {
                return;
              }
              delete transaction[key];
              transactionStorage.setStorage(transaction);
            }
          };
        }
      }
      if (!storage) {
        return null;
      }
      return new SavedObject(storage, IDX_RESPONSE_STORAGE_NAME);
    }
  }, {
    key: "getTokenStorage",
    value: function getTokenStorage(options) {
      options = this.getOptionsForSection("token", options);
      logServerSideMemoryStorageWarning(options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || TOKEN_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getHttpCache",
    value: function getHttpCache2(options) {
      options = this.getOptionsForSection("cache", options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || CACHE_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getLegacyPKCEStorage",
    value: function getLegacyPKCEStorage(options) {
      options = this.getOptionsForSection("legacy-pkce", options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || PKCE_STORAGE_NAME;
      return new SavedObject(storage, storageKey);
    }
  }, {
    key: "getLegacyOAuthParamsStorage",
    value: function getLegacyOAuthParamsStorage(options) {
      options = this.getOptionsForSection("legacy-oauth-params", options);
      var storage = this.getStorage(options);
      var storageKey = options.storageKey || REDIRECT_OAUTH_PARAMS_NAME;
      return new SavedObject(storage, storageKey);
    }
  }]);
  return StorageManager2;
}();
function isRawIdxResponse(obj) {
  return obj && obj.version;
}
function isIdxResponse(obj) {
  return obj && isRawIdxResponse(obj.rawIdxState);
}
var MAX_ENTRY_LIFETIME = 30 * 60 * 1e3;
function pruneSharedStorage(storageManager) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  (0, import_keys.default)(entries).forEach(function(state) {
    var entry = entries[state];
    var age = Date.now() - entry.dateCreated;
    if (age > MAX_ENTRY_LIFETIME) {
      delete entries[state];
    }
  });
  sharedStorage.setStorage(entries);
}
function saveTransactionToSharedStorage(storageManager, state, meta) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  entries[state] = {
    dateCreated: Date.now(),
    transaction: meta
  };
  sharedStorage.setStorage(entries);
}
function loadTransactionFromSharedStorage(storageManager, state) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  var entry = entries[state];
  if (entry && entry.transaction && isTransactionMeta(entry.transaction)) {
    return entry.transaction;
  }
  return null;
}
function clearTransactionFromSharedStorage(storageManager, state) {
  var sharedStorage = storageManager.getSharedTansactionStorage();
  var entries = sharedStorage.getStorage();
  delete entries[state];
  sharedStorage.setStorage(entries);
}
var TransactionManager = function() {
  function TransactionManager2(options) {
    _classCallCheck(this, TransactionManager2);
    this.storageManager = options.storageManager;
    this.legacyWidgetSupport = options.legacyWidgetSupport === false ? false : true;
    this.saveNonceCookie = options.saveNonceCookie === false ? false : true;
    this.saveStateCookie = options.saveStateCookie === false ? false : true;
    this.saveParamsCookie = options.saveParamsCookie === false ? false : true;
    this.enableSharedStorage = options.enableSharedStorage === false ? false : true;
    this.saveLastResponse = options.saveLastResponse === false ? false : true;
    this.options = options;
  }
  _createClass(TransactionManager2, [{
    key: "clear",
    value: function clear() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var transactionStorage = this.storageManager.getTransactionStorage();
      var meta = transactionStorage.getStorage();
      transactionStorage.clearStorage();
      this.clearIdxResponse();
      if (this.enableSharedStorage && options.clearSharedStorage !== false) {
        var state = options.state || (meta === null || meta === void 0 ? void 0 : meta.state);
        if (state) {
          clearTransactionFromSharedStorage(this.storageManager, state);
        }
      }
      if (!this.legacyWidgetSupport) {
        return;
      }
      if (options.oauth) {
        this.clearLegacyOAuthParams();
      }
      if (options.pkce) {
        this.clearLegacyPKCE();
      }
    }
  }, {
    key: "save",
    value: function save(meta) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var storage = this.storageManager.getTransactionStorage();
      var obj = storage.getStorage();
      if (isTransactionMeta(obj) && !options.muteWarning) {
        warn("a saved auth transaction exists in storage. This may indicate another auth flow is already in progress.");
      }
      storage.setStorage(meta);
      if (this.enableSharedStorage && meta.state) {
        saveTransactionToSharedStorage(this.storageManager, meta.state, meta);
      }
      if (!options.oauth) {
        return;
      }
      if (this.saveNonceCookie || this.saveStateCookie || this.saveParamsCookie) {
        var cookieStorage = this.storageManager.getStorage({
          storageType: "cookie"
        });
        if (this.saveParamsCookie) {
          var responseType = meta.responseType, state = meta.state, nonce = meta.nonce, scopes = meta.scopes, clientId = meta.clientId, urls = meta.urls, ignoreSignature = meta.ignoreSignature;
          var oauthParams = {
            responseType,
            state,
            nonce,
            scopes,
            clientId,
            urls,
            ignoreSignature
          };
          cookieStorage.setItem(REDIRECT_OAUTH_PARAMS_NAME, (0, import_stringify.default)(oauthParams), null);
        }
        if (this.saveNonceCookie && meta.nonce) {
          cookieStorage.setItem(REDIRECT_NONCE_COOKIE_NAME, meta.nonce, null);
        }
        if (this.saveStateCookie && meta.state) {
          cookieStorage.setItem(REDIRECT_STATE_COOKIE_NAME, meta.state, null);
        }
      }
    }
  }, {
    key: "exists",
    value: function exists() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      try {
        var meta = this.load(options);
        return !!meta;
      } catch (_a) {
        return false;
      }
    }
  }, {
    key: "load",
    value: function load() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var meta;
      if (this.enableSharedStorage && options.state) {
        pruneSharedStorage(this.storageManager);
        meta = loadTransactionFromSharedStorage(this.storageManager, options.state);
        if (isTransactionMeta(meta)) {
          return meta;
        }
      }
      var storage = this.storageManager.getTransactionStorage();
      meta = storage.getStorage();
      if (isTransactionMeta(meta)) {
        return meta;
      }
      if (!this.legacyWidgetSupport) {
        return null;
      }
      if (options.oauth) {
        try {
          var oauthParams = this.loadLegacyOAuthParams();
          (0, import_assign.default)(meta, oauthParams);
        } finally {
          this.clearLegacyOAuthParams();
        }
      }
      if (options.pkce) {
        try {
          var pkceMeta = this.loadLegacyPKCE();
          (0, import_assign.default)(meta, pkceMeta);
        } finally {
          this.clearLegacyPKCE();
        }
      }
      if (isTransactionMeta(meta)) {
        return meta;
      }
      return null;
    }
  }, {
    key: "clearLegacyPKCE",
    value: function clearLegacyPKCE() {
      var storage;
      if (this.storageManager.storageUtil.testStorageType("localStorage")) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: "localStorage"
        });
        storage.clearStorage();
      }
      if (this.storageManager.storageUtil.testStorageType("sessionStorage")) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: "sessionStorage"
        });
        storage.clearStorage();
      }
    }
  }, {
    key: "loadLegacyPKCE",
    value: function loadLegacyPKCE() {
      var storage;
      var obj;
      if (this.storageManager.storageUtil.testStorageType("localStorage")) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: "localStorage"
        });
        obj = storage.getStorage();
        if (obj && obj.codeVerifier) {
          return obj;
        }
      }
      if (this.storageManager.storageUtil.testStorageType("sessionStorage")) {
        storage = this.storageManager.getLegacyPKCEStorage({
          storageType: "sessionStorage"
        });
        obj = storage.getStorage();
        if (obj && obj.codeVerifier) {
          return obj;
        }
      }
      throw new AuthSdkError("Could not load PKCE codeVerifier from storage. This may indicate the auth flow has already completed or multiple auth flows are executing concurrently.", void 0);
    }
  }, {
    key: "clearLegacyOAuthParams",
    value: function clearLegacyOAuthParams() {
      var storage;
      if (this.storageManager.storageUtil.testStorageType("sessionStorage")) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: "sessionStorage"
        });
        storage.clearStorage();
      }
      if (this.storageManager.storageUtil.testStorageType("cookie")) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: "cookie"
        });
        storage.clearStorage();
      }
    }
  }, {
    key: "loadLegacyOAuthParams",
    value: function loadLegacyOAuthParams() {
      var storage;
      var oauthParams;
      if (this.storageManager.storageUtil.testStorageType("sessionStorage")) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: "sessionStorage"
        });
        oauthParams = storage.getStorage();
      }
      if (isOAuthTransactionMeta(oauthParams)) {
        return oauthParams;
      }
      if (this.storageManager.storageUtil.testStorageType("cookie")) {
        storage = this.storageManager.getLegacyOAuthParamsStorage({
          storageType: "cookie"
        });
        oauthParams = storage.getStorage();
      }
      if (isOAuthTransactionMeta(oauthParams)) {
        return oauthParams;
      }
      throw new AuthSdkError("Unable to retrieve OAuth redirect params from storage");
    }
  }, {
    key: "saveIdxResponse",
    value: function saveIdxResponse(_ref) {
      var rawIdxResponse = _ref.rawIdxResponse, requestDidSucceed = _ref.requestDidSucceed;
      if (!this.saveLastResponse) {
        return;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return;
      }
      storage.setStorage({
        rawIdxResponse,
        requestDidSucceed
      });
    }
  }, {
    key: "loadIdxResponse",
    value: function loadIdxResponse() {
      if (!this.saveLastResponse) {
        return null;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      if (!storage) {
        return null;
      }
      var storedValue = storage.getStorage();
      if (!storedValue || !isRawIdxResponse(storedValue.rawIdxResponse)) {
        return null;
      }
      return storedValue;
    }
  }, {
    key: "clearIdxResponse",
    value: function clearIdxResponse() {
      if (!this.saveLastResponse) {
        return;
      }
      var storage = this.storageManager.getIdxResponseStorage();
      storage === null || storage === void 0 ? void 0 : storage.clearStorage();
    }
  }]);
  return TransactionManager2;
}();
function assertValidConfig(args) {
  args = args || {};
  var scopes = args.scopes;
  if (scopes && !Array.isArray(scopes)) {
    throw new AuthSdkError('scopes must be a array of strings. Required usage: new OktaAuth({scopes: ["openid", "email"]})');
  }
  var issuer = args.issuer;
  if (!issuer) {
    throw new AuthSdkError('No issuer passed to constructor. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  var isUrlRegex = new RegExp("^http?s?://.+");
  if (!isUrlRegex.test(issuer)) {
    throw new AuthSdkError('Issuer must be a valid URL. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com/oauth2/{authServerId}"})');
  }
  if ((0, import_index_of2.default)(issuer).call(issuer, "-admin.") !== -1) {
    throw new AuthSdkError('Issuer URL passed to constructor contains "-admin" in subdomain. Required usage: new OktaAuth({issuer: "https://{yourOktaDomain}.com})');
  }
}
function _createForOfIteratorHelper$6(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$6(o, minLen) {
  var _context5;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$6(o, minLen);
  var n = (0, import_slice2.default)(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var appJsonContentTypeRegex = /application\/\w*\+?json/;
function readData(response) {
  var _context2;
  if (response.headers.get("Content-Type") && (0, import_index_of2.default)(_context2 = response.headers.get("Content-Type").toLowerCase()).call(_context2, "application/json") >= 0) {
    return response.json().catch(function(e) {
      return {
        error: e,
        errorSummary: "Could not parse server response"
      };
    });
  } else {
    return response.text();
  }
}
function formatResult(status, data, response) {
  var _context2;
  var isObject2 = _typeof(data) === "object";
  var headers = {};
  var _iterator = _createForOfIteratorHelper$6((0, import_entries2.default)(_context2 = response.headers).call(_context2)), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var pair = _step.value;
      headers[pair[0]] = pair[1];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var result = {
    responseText: isObject2 ? (0, import_stringify.default)(data) : data,
    status,
    headers
  };
  if (isObject2) {
    result.responseType = "json";
    result.responseJSON = data;
  }
  return result;
}
function fetchRequest(method, url, args) {
  var body = args.data;
  var headers = args.headers || {};
  var contentType = headers["Content-Type"] || headers["content-type"] || "";
  if (body && typeof body !== "string") {
    if (appJsonContentTypeRegex.test(contentType)) {
      body = (0, import_stringify.default)(body);
    } else if (contentType === "application/x-www-form-urlencoded") {
      var _context3;
      body = (0, import_map2.default)(_context3 = (0, import_entries.default)(body)).call(_context3, function(_ref) {
        var _context4;
        var _ref2 = _slicedToArray(_ref, 2), param = _ref2[0], value = _ref2[1];
        return (0, import_concat.default)(_context4 = "".concat(param, "=")).call(_context4, encodeURIComponent(value));
      }).join("&");
    }
  }
  var fetch = window.fetch || import_cross_fetch.default;
  var fetchPromise = fetch(url, {
    method,
    headers: args.headers,
    body,
    credentials: args.withCredentials ? "include" : "omit"
  });
  if (!fetchPromise.finally) {
    fetchPromise = import_promise2.default.resolve(fetchPromise);
  }
  return fetchPromise.then(function(response) {
    var error = !response.ok;
    var status = response.status;
    return readData(response).then(function(data) {
      return formatResult(status, data, response);
    }).then(function(result) {
      var _a;
      if (error || ((_a = result.responseJSON) === null || _a === void 0 ? void 0 : _a.error)) {
        throw result;
      }
      return result;
    });
  });
}
function getStorage() {
  var storageUtil$1 = (0, import_assign.default)({}, storageUtil, {
    inMemoryStore: {}
  });
  return storageUtil$1;
}
var STORAGE_MANAGER_OPTIONS = {
  token: {
    storageTypes: ["localStorage", "sessionStorage", "cookie"]
  },
  cache: {
    storageTypes: ["localStorage", "sessionStorage", "cookie"]
  },
  transaction: {
    storageTypes: ["sessionStorage", "localStorage", "cookie"]
  },
  "shared-transaction": {
    storageTypes: ["localStorage"]
  },
  "original-uri": {
    storageTypes: ["localStorage"]
  }
};
var enableSharedStorage = true;
function getCookieSettings() {
  var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var isHTTPS2 = arguments.length > 1 ? arguments[1] : void 0;
  var cookieSettings = args.cookies || {};
  if (typeof cookieSettings.secure === "undefined") {
    cookieSettings.secure = isHTTPS2;
  }
  if (typeof cookieSettings.sameSite === "undefined") {
    cookieSettings.sameSite = cookieSettings.secure ? "none" : "lax";
  }
  if (cookieSettings.secure && !isHTTPS2) {
    warn('The current page is not being served with the HTTPS protocol.\nFor security reasons, we strongly recommend using HTTPS.\nIf you cannot use HTTPS, set "cookies.secure" option to false.');
    cookieSettings.secure = false;
  }
  if (cookieSettings.sameSite === "none" && !cookieSettings.secure) {
    cookieSettings.sameSite = "lax";
  }
  return cookieSettings;
}
function getDefaultOptions() {
  var options = {
    devMode: false,
    httpRequestClient: fetchRequest,
    storageUtil: getStorage(),
    storageManager: STORAGE_MANAGER_OPTIONS,
    transactionManager: {
      enableSharedStorage
    }
  };
  return options;
}
function mergeOptions(options, args) {
  return (0, import_assign.default)({}, options, removeNils(args), {
    storageManager: (0, import_assign.default)({}, options.storageManager, args.storageManager),
    transactionManager: (0, import_assign.default)({}, options.transactionManager, args.transactionManager)
  });
}
function buildOptions() {
  var args = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  assertValidConfig(args);
  args = mergeOptions(getDefaultOptions(), args);
  return removeNils({
    issuer: removeTrailingSlash(args.issuer),
    tokenUrl: removeTrailingSlash(args.tokenUrl),
    authorizeUrl: removeTrailingSlash(args.authorizeUrl),
    userinfoUrl: removeTrailingSlash(args.userinfoUrl),
    revokeUrl: removeTrailingSlash(args.revokeUrl),
    logoutUrl: removeTrailingSlash(args.logoutUrl),
    clientId: args.clientId,
    redirectUri: args.redirectUri,
    state: args.state,
    scopes: args.scopes,
    postLogoutRedirectUri: args.postLogoutRedirectUri,
    responseMode: args.responseMode,
    responseType: args.responseType,
    pkce: args.pkce === false ? false : true,
    useInteractionCodeFlow: args.useInteractionCodeFlow,
    httpRequestClient: args.httpRequestClient,
    transformErrorXHR: args.transformErrorXHR,
    transformAuthState: args.transformAuthState,
    restoreOriginalUri: args.restoreOriginalUri,
    storageUtil: args.storageUtil,
    headers: args.headers,
    devMode: !!args.devMode,
    storageManager: args.storageManager,
    transactionManager: args.transactionManager,
    cookies: getCookieSettings(args, isHTTPS()),
    flow: args.flow,
    codeChallenge: args.codeChallenge,
    codeChallengeMethod: args.codeChallengeMethod,
    recoveryToken: args.recoveryToken,
    activationToken: args.activationToken,
    ignoreSignature: !!args.ignoreSignature,
    clientSecret: args.clientSecret
  });
}
function createTransactionMeta(_x) {
  return _createTransactionMeta.apply(this, arguments);
}
function _createTransactionMeta() {
  _createTransactionMeta = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, tokenParams, pkceMeta, _Object$assign2, _Object$assign2$flow, flow, _Object$assign2$withC, withCredentials, _Object$assign2$activ, activationToken, _Object$assign2$recov, recoveryToken, meta, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            _context2.next = 3;
            return authClient.token.prepareTokenParams(options);
          case 3:
            tokenParams = _context2.sent;
            pkceMeta = createOAuthMeta(authClient, tokenParams);
            _Object$assign2 = (0, import_assign.default)((0, import_assign.default)({}, authClient.options), options), _Object$assign2$flow = _Object$assign2.flow, flow = _Object$assign2$flow === void 0 ? "default" : _Object$assign2$flow, _Object$assign2$withC = _Object$assign2.withCredentials, withCredentials = _Object$assign2$withC === void 0 ? true : _Object$assign2$withC, _Object$assign2$activ = _Object$assign2.activationToken, activationToken = _Object$assign2$activ === void 0 ? void 0 : _Object$assign2$activ, _Object$assign2$recov = _Object$assign2.recoveryToken, recoveryToken = _Object$assign2$recov === void 0 ? void 0 : _Object$assign2$recov;
            meta = (0, import_assign.default)((0, import_assign.default)({}, pkceMeta), {
              flow,
              withCredentials,
              activationToken,
              recoveryToken
            });
            return _context2.abrupt("return", meta);
          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _createTransactionMeta.apply(this, arguments);
}
function hasSavedInteractionHandle(authClient, options) {
  var savedMeta = getSavedTransactionMeta(authClient, options);
  if (savedMeta === null || savedMeta === void 0 ? void 0 : savedMeta.interactionHandle) {
    return true;
  }
  return false;
}
function getSavedTransactionMeta(authClient, options) {
  options = removeNils(options);
  options = (0, import_assign.default)((0, import_assign.default)({}, authClient.options), options);
  var savedMeta;
  try {
    savedMeta = authClient.transactionManager.load(options);
  } catch (e) {
  }
  if (!savedMeta) {
    return;
  }
  if (isTransactionMetaValid(savedMeta, options)) {
    return savedMeta;
  }
  warn("Saved transaction meta does not match the current configuration. This may indicate that two apps are sharing a storage key.");
}
function getTransactionMeta(_x2, _x3) {
  return _getTransactionMeta.apply(this, arguments);
}
function _getTransactionMeta() {
  _getTransactionMeta = _asyncToGenerator(import_regenerator.default.mark(function _callee2(authClient, options) {
    var validExistingMeta;
    return import_regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = removeNils(options);
            options = (0, import_assign.default)((0, import_assign.default)({}, authClient.options), options);
            validExistingMeta = getSavedTransactionMeta(authClient, options);
            if (!validExistingMeta) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", validExistingMeta);
          case 5:
            return _context2.abrupt("return", createTransactionMeta(authClient, options));
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTransactionMeta.apply(this, arguments);
}
function saveTransactionMeta(authClient, meta) {
  authClient.transactionManager.save(meta, {
    muteWarning: true
  });
}
function clearTransactionMeta(authClient) {
  authClient.transactionManager.clear();
}
function isTransactionMetaValid(meta) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var keys = ["issuer", "clientId", "redirectUri", "state", "codeChallenge", "codeChallengeMethod", "activationToken", "recoveryToken"];
  if (isTransactionMetaValidForOptions(meta, options, keys) === false) {
    return false;
  }
  var flow = options.flow;
  if (isTransactionMetaValidForFlow(meta, flow) === false) {
    return false;
  }
  return true;
}
function isTransactionMetaValidForFlow(meta, flow) {
  var shouldValidateFlow = flow && flow !== "default" && flow !== "proceed";
  if (shouldValidateFlow) {
    if (flow !== meta.flow) {
      return false;
    }
  }
  return true;
}
function isTransactionMetaValidForOptions(meta, options, keys) {
  var mismatch = keys.some(function(key) {
    var value = options[key];
    if (value && value !== meta[key]) {
      return true;
    }
  });
  return !mismatch;
}
function getResponse(meta) {
  return {
    meta,
    interactionHandle: meta.interactionHandle,
    state: meta.state
  };
}
function interact(_x) {
  return _interact.apply(this, arguments);
}
function _interact() {
  _interact = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, meta, baseUrl, _meta, clientId, redirectUri, state, scopes, withCredentials, codeChallenge, codeChallengeMethod, activationToken, recoveryToken, clientSecret, url, params, headers, resp, interactionHandle, newMeta, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            options = removeNils(options);
            meta = getSavedTransactionMeta(authClient, options);
            if (!(meta === null || meta === void 0 ? void 0 : meta.interactionHandle)) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", getResponse(meta));
          case 5:
            _context2.next = 7;
            return createTransactionMeta(authClient, (0, import_assign.default)((0, import_assign.default)({}, meta), options));
          case 7:
            meta = _context2.sent;
            baseUrl = getOAuthBaseUrl(authClient);
            _meta = meta, clientId = _meta.clientId, redirectUri = _meta.redirectUri, state = _meta.state, scopes = _meta.scopes, withCredentials = _meta.withCredentials, codeChallenge = _meta.codeChallenge, codeChallengeMethod = _meta.codeChallengeMethod, activationToken = _meta.activationToken, recoveryToken = _meta.recoveryToken;
            clientSecret = options.clientSecret || authClient.options.clientSecret;
            withCredentials = withCredentials !== null && withCredentials !== void 0 ? withCredentials : true;
            url = "".concat(baseUrl, "/v1/interact");
            params = {
              client_id: clientId,
              scope: scopes.join(" "),
              redirect_uri: redirectUri,
              code_challenge: codeChallenge,
              code_challenge_method: codeChallengeMethod,
              state
            };
            if (activationToken) {
              params.activation_token = activationToken;
            }
            if (recoveryToken) {
              params.recovery_token = recoveryToken;
            }
            if (clientSecret) {
              params.client_secret = clientSecret;
            }
            headers = {
              "Content-Type": "application/x-www-form-urlencoded"
            };
            _context2.next = 20;
            return httpRequest(authClient, {
              method: "POST",
              url,
              headers,
              withCredentials,
              args: params
            });
          case 20:
            resp = _context2.sent;
            interactionHandle = resp.interaction_handle;
            newMeta = (0, import_assign.default)((0, import_assign.default)({}, meta), {
              interactionHandle,
              withCredentials,
              state,
              scopes,
              recoveryToken,
              activationToken
            });
            saveTransactionMeta(authClient, newMeta);
            return _context2.abrupt("return", getResponse(newMeta));
          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _interact.apply(this, arguments);
}
function _createForOfIteratorHelper$5(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$5(o, minLen) {
  var _context2;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$5(o, minLen);
  var n = (0, import_slice2.default)(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var isFieldMutable = function isFieldMutable2(field) {
  return field.mutable !== false;
};
var divideSingleActionParamsByMutability = function divideSingleActionParamsByMutability2(action) {
  var _a, _b;
  var defaultParamsForAction = {};
  var neededParamsForAction = [];
  var immutableParamsForAction = {};
  if (!action.value) {
    neededParamsForAction.push(action);
    return {
      defaultParamsForAction,
      neededParamsForAction,
      immutableParamsForAction
    };
  }
  var _iterator = _createForOfIteratorHelper$5(action.value), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var field = _step.value;
      if (isFieldMutable(field)) {
        neededParamsForAction.push(field);
        if ((_a = field.value) !== null && _a !== void 0 ? _a : false) {
          defaultParamsForAction[field.name] = field.value;
        }
      } else {
        immutableParamsForAction[field.name] = (_b = field.value) !== null && _b !== void 0 ? _b : "";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return {
    defaultParamsForAction,
    neededParamsForAction,
    immutableParamsForAction
  };
};
var divideActionParamsByMutability = function divideActionParamsByMutability2(actionList) {
  actionList = Array.isArray(actionList) ? actionList : [actionList];
  var neededParams = [];
  var defaultParams = {};
  var immutableParams = {};
  var _iterator2 = _createForOfIteratorHelper$5(actionList), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var action = _step2.value;
      var _divideSingleActionPa = divideSingleActionParamsByMutability(action), defaultParamsForAction = _divideSingleActionPa.defaultParamsForAction, neededParamsForAction = _divideSingleActionPa.neededParamsForAction, immutableParamsForAction = _divideSingleActionPa.immutableParamsForAction;
      neededParams.push(neededParamsForAction);
      defaultParams[action.name] = defaultParamsForAction;
      immutableParams[action.name] = immutableParamsForAction;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return {
    defaultParams,
    neededParams,
    immutableParams
  };
};
var generateDirectFetch = function generateDirectFetch2(authClient, _ref) {
  var actionDefinition = _ref.actionDefinition, _ref$defaultParamsFor = _ref.defaultParamsForAction, defaultParamsForAction = _ref$defaultParamsFor === void 0 ? {} : _ref$defaultParamsFor, _ref$immutableParamsF = _ref.immutableParamsForAction, immutableParamsForAction = _ref$immutableParamsF === void 0 ? {} : _ref$immutableParamsF, _ref$toPersist = _ref.toPersist, toPersist = _ref$toPersist === void 0 ? {} : _ref$toPersist;
  var target = actionDefinition.href;
  return _asyncToGenerator(import_regenerator.default.mark(function _callee() {
    var params, _a, headers, body, response, _response, payload, wwwAuthHeader, idxResponse, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            params = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {};
            headers = {
              "Content-Type": "application/json",
              "Accept": actionDefinition.accepts || "application/ion+json"
            };
            body = (0, import_stringify.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)({}, defaultParamsForAction), params), immutableParamsForAction));
            _context2.prev = 3;
            _context2.next = 6;
            return httpRequest(authClient, {
              url: target,
              method: actionDefinition.method,
              headers,
              args: body,
              withCredentials: (_a = toPersist === null || toPersist === void 0 ? void 0 : toPersist.withCredentials) !== null && _a !== void 0 ? _a : true
            });
          case 6:
            response = _context2.sent;
            return _context2.abrupt("return", makeIdxState$1(authClient, (0, import_assign.default)({}, response), toPersist, true));
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            if (!(!(_context2.t0 instanceof AuthApiError) || !(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.xhr))) {
              _context2.next = 14;
              break;
            }
            throw _context2.t0;
          case 14:
            _response = _context2.t0.xhr;
            payload = _response.responseJSON || JSON.parse(_response.responseText);
            wwwAuthHeader = _response.headers["WWW-Authenticate"] || _response.headers["www-authenticate"];
            idxResponse = makeIdxState$1(authClient, (0, import_assign.default)({}, payload), toPersist, false);
            if (_response.status === 401 && wwwAuthHeader === 'Oktadevicejwt realm="Okta Device"') {
              idxResponse.stepUp = true;
            }
            throw idxResponse;
          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
};
var generateIdxAction = function generateIdxAction2(authClient, actionDefinition, toPersist) {
  var generator = generateDirectFetch;
  var _divideActionParamsBy = divideActionParamsByMutability(actionDefinition), defaultParams = _divideActionParamsBy.defaultParams, neededParams = _divideActionParamsBy.neededParams, immutableParams = _divideActionParamsBy.immutableParams;
  var action = generator(authClient, {
    actionDefinition,
    defaultParamsForAction: defaultParams[actionDefinition.name],
    immutableParamsForAction: immutableParams[actionDefinition.name],
    toPersist
  });
  action.neededParams = neededParams;
  return action;
};
var generateRemediationFunctions = function generateRemediationFunctions2(authClient, remediationValue) {
  var toPersist = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return (0, import_from_entries.default)((0, import_map2.default)(remediationValue).call(remediationValue, function(remediation) {
    return [remediation.name, generateIdxAction(authClient, remediation, toPersist)];
  }));
};
var _context;
var SKIP_FIELDS = (0, import_from_entries.default)((0, import_map2.default)(_context = [
  "remediation",
  "context"
]).call(_context, function(field) {
  return [field, true];
}));
var parseNonRemediations = function parseNonRemediations2(authClient, idxResponse) {
  var _context2;
  var toPersist = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var actions = {};
  var context = {};
  (0, import_filter.default)(_context2 = (0, import_keys.default)(idxResponse)).call(_context2, function(field) {
    return !SKIP_FIELDS[field];
  }).forEach(function(field) {
    var fieldIsObject = _typeof(idxResponse[field]) === "object" && !!idxResponse[field];
    if (!fieldIsObject) {
      context[field] = idxResponse[field];
      return;
    }
    if (idxResponse[field].rel) {
      actions[idxResponse[field].name] = generateIdxAction(authClient, idxResponse[field], toPersist);
      return;
    }
    var _a = idxResponse[field], fieldValue = _a.value, type = _a.type, info = __rest(_a, ["value", "type"]);
    context[field] = (0, import_assign.default)({
      type
    }, info);
    if (type !== "object") {
      context[field].value = fieldValue;
      return;
    }
    context[field].value = {};
    (0, import_entries.default)(fieldValue).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), subField = _ref2[0], value = _ref2[1];
      if (value.rel) {
        var _context3;
        actions[(0, import_concat.default)(_context3 = "".concat(field, "-")).call(_context3, subField.name || subField)] = generateIdxAction(authClient, value, toPersist);
      } else {
        context[field].value[subField] = value;
      }
    });
  });
  return {
    context,
    actions
  };
};
var expandRelatesTo = function expandRelatesTo2(idxResponse, value) {
  (0, import_keys.default)(value).forEach(function(k) {
    if (k === "relatesTo") {
      var query = Array.isArray(value[k]) ? value[k][0] : value[k];
      if (typeof query === "string") {
        var result = JSONPath({
          path: query,
          json: idxResponse
        })[0];
        if (result) {
          value[k] = result;
          return;
        }
      }
    }
    if (Array.isArray(value[k])) {
      value[k].forEach(function(innerValue) {
        return expandRelatesTo2(idxResponse, innerValue);
      });
    }
  });
};
var convertRemediationAction = function convertRemediationAction2(authClient, remediation, toPersist) {
  var remediationActions = generateRemediationFunctions(authClient, [remediation], toPersist);
  var actionFn = remediationActions[remediation.name];
  return (0, import_assign.default)((0, import_assign.default)({}, remediation), {
    action: actionFn
  });
};
var parseIdxResponse = function parseIdxResponse2(authClient, idxResponse) {
  var toPersist = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _a;
  var remediationData = ((_a = idxResponse.remediation) === null || _a === void 0 ? void 0 : _a.value) || [];
  remediationData.forEach(function(remediation) {
    return expandRelatesTo(idxResponse, remediation);
  });
  var remediations = (0, import_map2.default)(remediationData).call(remediationData, function(remediation) {
    return convertRemediationAction(authClient, remediation, toPersist);
  });
  var _parseNonRemediations = parseNonRemediations(authClient, idxResponse, toPersist), context = _parseNonRemediations.context, actions = _parseNonRemediations.actions;
  return {
    remediations,
    context,
    actions
  };
};
function makeIdxState$1(authClient, idxResponse, toPersist, requestDidSucceed) {
  var _a, _b, _c;
  var rawIdxResponse = idxResponse;
  var _parseIdxResponse = parseIdxResponse(authClient, idxResponse, toPersist), remediations = _parseIdxResponse.remediations, context = _parseIdxResponse.context, actions = _parseIdxResponse.actions;
  var neededToProceed = _toConsumableArray(remediations);
  var proceed2 = function() {
    var _ref = _asyncToGenerator(import_regenerator.default.mark(function _callee(remediationChoice) {
      var paramsFromUser, remediationChoiceObject, _args = arguments;
      return import_regenerator.default.wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              paramsFromUser = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
              remediationChoiceObject = (0, import_find.default)(remediations).call(remediations, function(remediation) {
                return remediation.name === remediationChoice;
              });
              if (remediationChoiceObject) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", import_promise2.default.reject("Unknown remediation choice: [".concat(remediationChoice, "]")));
            case 4:
              return _context2.abrupt("return", remediationChoiceObject.action(paramsFromUser));
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));
    return function proceed3(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var findCode = function findCode2(item) {
    return item.name === "interaction_code";
  };
  var interactionCode = (_c = (_b = (_a = rawIdxResponse.successWithInteractionCode) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : (0, import_find.default)(_b).call(_b, findCode)) === null || _c === void 0 ? void 0 : _c.value;
  return {
    proceed: proceed2,
    neededToProceed,
    actions,
    context,
    rawIdxState: rawIdxResponse,
    interactionCode,
    toPersist,
    requestDidSucceed
  };
}
var v1 = {
  makeIdxState: makeIdxState$1
};
var parsersForVersion = function parsersForVersion2(version) {
  switch (version) {
    case "1.0.0":
      return v1;
    case void 0:
    case null:
      throw new Error("Api version is required");
    default:
      throw new Error("Unknown api version: ".concat(version, ".  Use an exact semver version."));
  }
};
function validateVersionConfig(version) {
  if (!version) {
    throw new Error("version is required");
  }
  var cleanVersion = (version !== null && version !== void 0 ? version : "").replace(/[^0-9a-zA-Z._-]/, "");
  if (cleanVersion !== version || !version) {
    throw new Error("invalid version supplied - version is required and uses semver syntax");
  }
  parsersForVersion(version);
}
function makeIdxState(authClient, rawIdxResponse) {
  var toPersist = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var requestDidSucceed = arguments.length > 3 ? arguments[3] : void 0;
  var _a;
  var version = (_a = rawIdxResponse === null || rawIdxResponse === void 0 ? void 0 : rawIdxResponse.version) !== null && _a !== void 0 ? _a : IDX_API_VERSION;
  validateVersionConfig(version);
  var _parsersForVersion = parsersForVersion(version), makeIdxState2 = _parsersForVersion.makeIdxState;
  return makeIdxState2(authClient, rawIdxResponse, toPersist, requestDidSucceed);
}
function introspect(_x) {
  return _introspect.apply(this, arguments);
}
function _introspect() {
  _introspect = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, _a, rawIdxResponse, requestDidSucceed, savedIdxResponse, version, domain, interactionHandle, stateHandle, _withCredentials, url, body, headers, withCredentials, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            savedIdxResponse = authClient.transactionManager.loadIdxResponse();
            if (savedIdxResponse) {
              rawIdxResponse = savedIdxResponse.rawIdxResponse;
              requestDidSucceed = savedIdxResponse.requestDidSucceed;
            }
            if (rawIdxResponse) {
              _context2.next = 27;
              break;
            }
            version = options.version || IDX_API_VERSION;
            domain = getOAuthDomain(authClient);
            interactionHandle = options.interactionHandle, stateHandle = options.stateHandle;
            _withCredentials = (_a = options.withCredentials) !== null && _a !== void 0 ? _a : true;
            _context2.prev = 8;
            requestDidSucceed = true;
            validateVersionConfig(version);
            url = "".concat(domain, "/idp/idx/introspect");
            body = stateHandle ? {
              stateToken: stateHandle
            } : {
              interactionHandle
            };
            headers = {
              "Content-Type": "application/ion+json; okta-version=".concat(version),
              Accept: "application/ion+json; okta-version=".concat(version)
            };
            _context2.next = 16;
            return httpRequest(authClient, {
              method: "POST",
              url,
              headers,
              withCredentials: _withCredentials,
              args: body
            });
          case 16:
            rawIdxResponse = _context2.sent;
            _context2.next = 27;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](8);
            if (!(isAuthApiError(_context2.t0) && _context2.t0.xhr && isRawIdxResponse(_context2.t0.xhr.responseJSON))) {
              _context2.next = 26;
              break;
            }
            rawIdxResponse = _context2.t0.xhr.responseJSON;
            requestDidSucceed = false;
            _context2.next = 27;
            break;
          case 26:
            throw _context2.t0;
          case 27:
            withCredentials = options.withCredentials;
            return _context2.abrupt("return", makeIdxState(authClient, rawIdxResponse, {
              withCredentials
            }, requestDidSucceed));
          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, null, [[8, 19]]);
  }));
  return _introspect.apply(this, arguments);
}
function getAllValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : (0, import_map2.default)(_a).call(_a, function(r) {
    return r.name;
  });
}
function getRequiredValues(idxRemediation) {
  var _a;
  return (_a = idxRemediation.value) === null || _a === void 0 ? void 0 : (0, import_reduce.default)(_a).call(_a, function(required, cur) {
    if (cur.required) {
      required.push(cur.name);
    }
    return required;
  }, []);
}
function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
function getAuthenticatorFromRemediation(remediation) {
  var _context2;
  return (0, import_find.default)(_context2 = remediation.value).call(_context2, function(_ref) {
    var name = _ref.name;
    return name === "authenticator";
  });
}
function _createForOfIteratorHelper$4(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$4(o, minLen) {
  var _context2;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$4(o, minLen);
  var n = (0, import_slice2.default)(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function formatAuthenticator(incoming) {
  var authenticator;
  if (isAuthenticator(incoming)) {
    authenticator = incoming;
  } else if (typeof incoming === "string") {
    authenticator = {
      key: incoming
    };
  } else {
    throw new Error("Invalid format for authenticator");
  }
  return authenticator;
}
function compareAuthenticators(auth1, auth2) {
  if (!auth1 || !auth2) {
    return false;
  }
  if (auth1.id && auth2.id) {
    return auth1.id === auth2.id;
  }
  if (auth1.key && auth2.key) {
    return auth1.key === auth2.key;
  }
  return false;
}
function findMatchedOption(authenticators, options) {
  var option;
  var _iterator = _createForOfIteratorHelper$4(authenticators), _step;
  try {
    var _loop = function _loop2() {
      var authenticator = _step.value;
      option = (0, import_find.default)(options).call(options, function(_ref) {
        var relatesTo = _ref.relatesTo;
        return relatesTo.key === authenticator.key;
      });
      if (option) {
        return "break";
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_ret === "break")
        break;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return option;
}
function _createForOfIteratorHelper$3(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$3(o, minLen) {
  var _context11;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$3(o, minLen);
  var n = (0, import_slice2.default)(_context11 = Object.prototype.toString.call(o)).call(_context11, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var Remediator = function() {
  function Remediator2(remediation) {
    var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Remediator2);
    this.values = (0, import_assign.default)({}, values);
    this.options = (0, import_assign.default)({}, options);
    this.formatAuthenticators();
    this.remediation = remediation;
  }
  _createClass(Remediator2, [{
    key: "formatAuthenticators",
    value: function formatAuthenticators() {
      var _context2, _context3;
      (0, import_values2.default)(this).authenticators = (0, import_values2.default)(this).authenticators || [];
      (0, import_values2.default)(this).authenticators = (0, import_map2.default)(_context2 = (0, import_values2.default)(this).authenticators).call(_context2, function(authenticator2) {
        return formatAuthenticator(authenticator2);
      });
      if ((0, import_values2.default)(this).authenticator) {
        var authenticator = formatAuthenticator((0, import_values2.default)(this).authenticator);
        var hasAuthenticatorInList = (0, import_values2.default)(this).authenticators.some(function(existing) {
          return compareAuthenticators(authenticator, existing);
        });
        if (!hasAuthenticatorInList) {
          (0, import_values2.default)(this).authenticators.push(authenticator);
        }
      }
      (0, import_values2.default)(this).authenticatorsData = (0, import_reduce.default)(_context3 = (0, import_values2.default)(this).authenticators).call(_context3, function(acc, authenticator2) {
        if (_typeof(authenticator2) === "object" && (0, import_keys.default)(authenticator2).length > 1) {
          acc.push(authenticator2);
        }
        return acc;
      }, (0, import_values2.default)(this).authenticatorsData || []);
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.remediation.name;
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this = this;
      var required = getRequiredValues(this.remediation);
      var needed = (0, import_find.default)(required).call(required, function(key) {
        return !_this.hasData(key);
      });
      if (needed) {
        return false;
      }
      return true;
    }
  }, {
    key: "getData",
    value: function getData(key) {
      var _this2 = this;
      if (!key) {
        var allValues = getAllValues(this.remediation);
        var res = (0, import_reduce.default)(allValues).call(allValues, function(data, key2) {
          data[key2] = _this2.getData(key2);
          return data;
        }, {});
        return res;
      }
      if (typeof this["map".concat(titleCase(key))] === "function") {
        var _context4;
        var val = this["map".concat(titleCase(key))]((0, import_find.default)(_context4 = this.remediation.value).call(_context4, function(_ref) {
          var name = _ref.name;
          return name === key;
        }));
        if (val) {
          return val;
        }
      }
      if ((0, import_map2.default)(this) && (0, import_map2.default)(this)[key]) {
        var entry = (0, import_map2.default)(this)[key];
        for (var i = 0; i < entry.length; i++) {
          var _val = (0, import_values2.default)(this)[entry[i]];
          if (_val) {
            return _val;
          }
        }
      }
      return (0, import_values2.default)(this)[key];
    }
  }, {
    key: "hasData",
    value: function hasData(key) {
      return !!this.getData(key);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2(_context2) {
      var name = this.getName();
      var inputs = this.getInputs();
      var authenticator = this.getAuthenticator();
      var type = authenticator === null || authenticator === void 0 ? void 0 : authenticator.type;
      return (0, import_assign.default)((0, import_assign.default)({
        name,
        inputs
      }, type && {
        type
      }), authenticator && {
        authenticator
      });
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      var _this3 = this;
      var inputs = [];
      var inputsFromRemediation = this.remediation.value || [];
      inputsFromRemediation.forEach(function(inputFromRemediation) {
        var input;
        var name = inputFromRemediation.name, type = inputFromRemediation.type, visible = inputFromRemediation.visible, messages = inputFromRemediation.messages;
        if (visible === false) {
          return;
        }
        if (typeof _this3["getInput".concat(titleCase(name))] === "function") {
          input = _this3["getInput".concat(titleCase(name))](inputFromRemediation);
        } else if (type !== "object") {
          var alias;
          var aliases = ((0, import_map2.default)(_this3) ? (0, import_map2.default)(_this3)[name] : null) || [];
          if (aliases.length === 1) {
            alias = aliases[0];
          } else {
            alias = (0, import_find.default)(aliases).call(aliases, function(name2) {
              var _context5;
              return (0, import_includes.default)(_context5 = (0, import_keys.default)((0, import_values2.default)(_this3))).call(_context5, name2);
            });
          }
          if (alias) {
            input = (0, import_assign.default)((0, import_assign.default)({}, inputFromRemediation), {
              name: alias
            });
          }
        }
        if (!input) {
          input = inputFromRemediation;
        }
        if (Array.isArray(input)) {
          input.forEach(function(i) {
            return inputs.push(i);
          });
        } else {
          if (messages) {
            input.messages = messages;
          }
          inputs.push(input);
        }
      });
      return inputs;
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context6;
      var inputsFromRemediation = this.remediation.value || [];
      var inputsFromRemediator = this.getInputs();
      var inputs = (0, import_concat.default)(_context6 = []).call(_context6, _toConsumableArray(inputsFromRemediation), _toConsumableArray(inputsFromRemediator));
      var _iterator = _createForOfIteratorHelper$3(inputs), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var input = _step.value;
          delete (0, import_values2.default)(this)[input.name];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return (0, import_values2.default)(this);
    }
  }, {
    key: "getAuthenticator",
    value: function getAuthenticator2() {
      var _context7, _context8;
      var _a, _b;
      var relatesTo = (_a = this.remediation.relatesTo) === null || _a === void 0 ? void 0 : _a.value;
      if (!relatesTo) {
        return;
      }
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      if (!authenticatorFromRemediation) {
        return relatesTo;
      }
      var id = (0, import_find.default)(_context7 = authenticatorFromRemediation.form.value).call(_context7, function(_ref2) {
        var name = _ref2.name;
        return name === "id";
      }).value;
      var enrollmentId = (_b = (0, import_find.default)(_context8 = authenticatorFromRemediation.form.value).call(_context8, function(_ref3) {
        var name = _ref3.name;
        return name === "enrollmentId";
      })) === null || _b === void 0 ? void 0 : _b.value;
      return (0, import_assign.default)((0, import_assign.default)({}, relatesTo), {
        id,
        enrollmentId
      });
    }
  }], [{
    key: "getMessages",
    value: function getMessages(remediation) {
      var _context9;
      var _a, _b;
      if (!remediation.value) {
        return;
      }
      return (_b = (_a = remediation.value[0]) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : (0, import_reduce.default)(_context9 = _b.value).call(_context9, function(messages, field) {
        if (field.messages) {
          var _context10;
          messages = (0, import_concat.default)(_context10 = []).call(_context10, _toConsumableArray(messages), _toConsumableArray(field.messages.value));
        }
        return messages;
      }, []);
    }
  }]);
  return Remediator2;
}();
var Authenticator = function Authenticator2(authenticator) {
  _classCallCheck(this, Authenticator2);
  this.meta = authenticator;
};
function _createSuper$s(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$s() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var VerificationCodeAuthenticator = function(_Authenticator) {
  _inherits(VerificationCodeAuthenticator2, _Authenticator);
  var _super = _createSuper$s(VerificationCodeAuthenticator2);
  function VerificationCodeAuthenticator2() {
    _classCallCheck(this, VerificationCodeAuthenticator2);
    return _super.apply(this, arguments);
  }
  _createClass(VerificationCodeAuthenticator2, [{
    key: "canVerify",
    value: function canVerify(values) {
      return !!(values.credentials || values.verificationCode || values.otp);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials, verificationCode = values.verificationCode, otp = values.otp;
      if (!credentials && !verificationCode && !otp) {
        return;
      }
      return credentials || {
        passcode: verificationCode || otp
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs(idxRemediationValue) {
      var _a;
      return (0, import_assign.default)((0, import_assign.default)({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
        name: "verificationCode",
        type: "string",
        required: idxRemediationValue.required
      });
    }
  }]);
  return VerificationCodeAuthenticator2;
}(Authenticator);
function _createSuper$r(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$r() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var OktaVerifyTotp = function(_VerificationCodeAuth) {
  _inherits(OktaVerifyTotp2, _VerificationCodeAuth);
  var _super = _createSuper$r(OktaVerifyTotp2);
  function OktaVerifyTotp2() {
    _classCallCheck(this, OktaVerifyTotp2);
    return _super.apply(this, arguments);
  }
  _createClass(OktaVerifyTotp2, [{
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var verificationCode = values.verificationCode;
      if (!verificationCode) {
        return;
      }
      return {
        totp: verificationCode
      };
    }
  }]);
  return OktaVerifyTotp2;
}(VerificationCodeAuthenticator);
function _createSuper$q(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$q() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var OktaPassword = function(_Authenticator) {
  _inherits(OktaPassword2, _Authenticator);
  var _super = _createSuper$q(OktaPassword2);
  function OktaPassword2() {
    _classCallCheck(this, OktaPassword2);
    return _super.apply(this, arguments);
  }
  _createClass(OktaPassword2, [{
    key: "canVerify",
    value: function canVerify(values) {
      return !!(values.credentials || values.password);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var credentials = values.credentials, password = values.password;
      if (!credentials && !password) {
        return;
      }
      return credentials || {
        passcode: password
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs(idxRemediationValue) {
      var _a;
      return (0, import_assign.default)((0, import_assign.default)({}, (_a = idxRemediationValue.form) === null || _a === void 0 ? void 0 : _a.value[0]), {
        name: "password",
        type: "string",
        required: idxRemediationValue.required
      });
    }
  }]);
  return OktaPassword2;
}(Authenticator);
function _createSuper$p(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$p() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SecurityQuestionEnrollment = function(_Authenticator) {
  _inherits(SecurityQuestionEnrollment2, _Authenticator);
  var _super = _createSuper$p(SecurityQuestionEnrollment2);
  function SecurityQuestionEnrollment2() {
    _classCallCheck(this, SecurityQuestionEnrollment2);
    return _super.apply(this, arguments);
  }
  _createClass(SecurityQuestionEnrollment2, [{
    key: "canVerify",
    value: function canVerify(values) {
      var credentials = values.credentials;
      if (credentials && credentials.questionKey && credentials.answer) {
        return true;
      }
      var questionKey = values.questionKey, question = values.question, answer = values.answer;
      return !!(questionKey && answer) || !!(question && answer);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var questionKey = values.questionKey, question = values.question, answer = values.answer;
      if (!questionKey && !question && !answer) {
        return;
      }
      return {
        questionKey: question ? "custom" : questionKey,
        question,
        answer
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: "questionKey",
        type: "string",
        required: true
      }, {
        name: "question",
        type: "string",
        label: "Create a security question"
      }, {
        name: "answer",
        type: "string",
        label: "Answer",
        required: true
      }];
    }
  }]);
  return SecurityQuestionEnrollment2;
}(Authenticator);
function _createSuper$o(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$o() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SecurityQuestionVerification = function(_Authenticator) {
  _inherits(SecurityQuestionVerification2, _Authenticator);
  var _super = _createSuper$o(SecurityQuestionVerification2);
  function SecurityQuestionVerification2() {
    _classCallCheck(this, SecurityQuestionVerification2);
    return _super.apply(this, arguments);
  }
  _createClass(SecurityQuestionVerification2, [{
    key: "canVerify",
    value: function canVerify(values) {
      return !!values.answer;
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var answer = values.answer;
      if (!answer) {
        return;
      }
      return {
        questionKey: this.meta.contextualData.enrolledQuestion.questionKey,
        answer
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: "answer",
        type: "string",
        label: "Answer",
        required: true
      }];
    }
  }]);
  return SecurityQuestionVerification2;
}(Authenticator);
function _createSuper$n(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$n() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var WebauthnEnrollment = function(_Authenticator) {
  _inherits(WebauthnEnrollment2, _Authenticator);
  var _super = _createSuper$n(WebauthnEnrollment2);
  function WebauthnEnrollment2() {
    _classCallCheck(this, WebauthnEnrollment2);
    return _super.apply(this, arguments);
  }
  _createClass(WebauthnEnrollment2, [{
    key: "canVerify",
    value: function canVerify(values) {
      var clientData = values.clientData, attestation = values.attestation;
      return !!(clientData && attestation);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var clientData = values.clientData, attestation = values.attestation;
      if (!clientData && !attestation) {
        return;
      }
      return {
        clientData,
        attestation
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: "clientData",
        type: "string",
        required: true,
        visible: false,
        label: "Client Data"
      }, {
        name: "attestation",
        type: "string",
        required: true,
        visible: false,
        label: "Attestation"
      }];
    }
  }]);
  return WebauthnEnrollment2;
}(Authenticator);
function _createSuper$m(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$m() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var WebauthnVerification = function(_Authenticator) {
  _inherits(WebauthnVerification2, _Authenticator);
  var _super = _createSuper$m(WebauthnVerification2);
  function WebauthnVerification2() {
    _classCallCheck(this, WebauthnVerification2);
    return _super.apply(this, arguments);
  }
  _createClass(WebauthnVerification2, [{
    key: "canVerify",
    value: function canVerify(values) {
      var clientData = values.clientData, authenticatorData = values.authenticatorData, signatureData = values.signatureData;
      return !!(clientData && authenticatorData && signatureData);
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials(values) {
      var authenticatorData = values.authenticatorData, clientData = values.clientData, signatureData = values.signatureData;
      if (!authenticatorData && !clientData && !signatureData) {
        return;
      }
      return {
        authenticatorData,
        clientData,
        signatureData
      };
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return [{
        name: "authenticatorData",
        type: "string",
        label: "Authenticator Data",
        required: true,
        visible: false
      }, {
        name: "clientData",
        type: "string",
        label: "Client Data",
        required: true,
        visible: false
      }, {
        name: "signatureData",
        type: "string",
        label: "Signature Data",
        required: true,
        visible: false
      }];
    }
  }]);
  return WebauthnVerification2;
}(Authenticator);
function getAuthenticator(remediation) {
  var _a, _b;
  var relatesTo = remediation.relatesTo;
  var value = (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.value) || {};
  switch (value.key) {
    case AuthenticatorKey.OKTA_PASSWORD:
      return new OktaPassword(value);
    case AuthenticatorKey.SECURITY_QUESTION:
      if ((_a = value.contextualData) === null || _a === void 0 ? void 0 : _a.enrolledQuestion) {
        return new SecurityQuestionVerification(value);
      } else {
        return new SecurityQuestionEnrollment(value);
      }
    case AuthenticatorKey.OKTA_VERIFY:
      return new OktaVerifyTotp(value);
    case AuthenticatorKey.WEBAUTHN:
      if ((_b = value.contextualData) === null || _b === void 0 ? void 0 : _b.challengeData) {
        return new WebauthnVerification(value);
      } else {
        return new WebauthnEnrollment(value);
      }
    default:
      return new VerificationCodeAuthenticator(value);
  }
}
function _createSuper$l(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$l() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var VerifyAuthenticator = function(_Remediator) {
  _inherits(VerifyAuthenticator2, _Remediator);
  var _super = _createSuper$l(VerifyAuthenticator2);
  function VerifyAuthenticator2(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, VerifyAuthenticator2);
    _this = _super.call(this, remediation, values);
    _this.authenticator = getAuthenticator(remediation);
    return _this;
  }
  _createClass(VerifyAuthenticator2, [{
    key: "getNextStep",
    value: function getNextStep2(context) {
      var _a;
      var nextStep = _get(_getPrototypeOf(VerifyAuthenticator2.prototype), "getNextStep", this).call(this, context);
      var authenticatorEnrollments = (_a = context === null || context === void 0 ? void 0 : context.authenticatorEnrollments) === null || _a === void 0 ? void 0 : _a.value;
      return (0, import_assign.default)((0, import_assign.default)({}, nextStep), {
        authenticatorEnrollments
      });
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      return this.authenticator.canVerify((0, import_values2.default)(this));
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials() {
      return this.authenticator.mapCredentials((0, import_values2.default)(this));
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      return this.authenticator.getInputs(input);
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context2, _this2 = this;
      this.values = _get(_getPrototypeOf(VerifyAuthenticator2.prototype), "getValuesAfterProceed", this).call(this);
      var trimmedValues = (0, import_filter.default)(_context2 = (0, import_keys.default)((0, import_values2.default)(this))).call(_context2, function(valueKey) {
        return valueKey !== "credentials";
      });
      return (0, import_reduce.default)(trimmedValues).call(trimmedValues, function(values, valueKey) {
        return (0, import_assign.default)((0, import_assign.default)({}, values), _defineProperty({}, valueKey, (0, import_values2.default)(_this2)[valueKey]));
      }, {});
    }
  }]);
  return VerifyAuthenticator2;
}(Remediator);
function _createSuper$k(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$k() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EnrollAuthenticator = function(_VerifyAuthenticator) {
  _inherits(EnrollAuthenticator2, _VerifyAuthenticator);
  var _super = _createSuper$k(EnrollAuthenticator2);
  function EnrollAuthenticator2() {
    _classCallCheck(this, EnrollAuthenticator2);
    return _super.apply(this, arguments);
  }
  return EnrollAuthenticator2;
}(VerifyAuthenticator);
EnrollAuthenticator.remediationName = "enroll-authenticator";
function _createSuper$j(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$j() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EnrollPoll = function(_Remediator) {
  _inherits(EnrollPoll2, _Remediator);
  var _super = _createSuper$j(EnrollPoll2);
  function EnrollPoll2() {
    _classCallCheck(this, EnrollPoll2);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollPoll2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!(0, import_values2.default)(this).startPolling || this.options.step === "enroll-poll";
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2(context) {
      var common = _get(_getPrototypeOf(EnrollPoll2.prototype), "getNextStep", this).call(this, context);
      var authenticator = this.getAuthenticator();
      if (!authenticator && (context === null || context === void 0 ? void 0 : context.currentAuthenticator)) {
        authenticator = context.currentAuthenticator.value;
      }
      return (0, import_assign.default)((0, import_assign.default)({}, common), {
        authenticator,
        poll: {
          required: true,
          refresh: this.remediation.refresh
        }
      });
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context2, _this = this;
      var trimmedValues = (0, import_filter.default)(_context2 = (0, import_keys.default)((0, import_values2.default)(this))).call(_context2, function(valueKey) {
        return valueKey !== "startPolling";
      });
      return (0, import_reduce.default)(trimmedValues).call(trimmedValues, function(values, valueKey) {
        return (0, import_assign.default)((0, import_assign.default)({}, values), _defineProperty({}, valueKey, (0, import_values2.default)(_this)[valueKey]));
      }, {});
    }
  }]);
  return EnrollPoll2;
}(Remediator);
EnrollPoll.remediationName = "enroll-poll";
function _createSuper$i(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$i() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectEnrollmentChannel = function(_Remediator) {
  _inherits(SelectEnrollmentChannel2, _Remediator);
  var _super = _createSuper$i(SelectEnrollmentChannel2);
  function SelectEnrollmentChannel2() {
    _classCallCheck(this, SelectEnrollmentChannel2);
    return _super.apply(this, arguments);
  }
  _createClass(SelectEnrollmentChannel2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return Boolean((0, import_values2.default)(this).channel);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2(context) {
      var common = _get(_getPrototypeOf(SelectEnrollmentChannel2.prototype), "getNextStep", this).call(this);
      var options = this.getChannels();
      var authenticator = context.currentAuthenticator.value;
      return (0, import_assign.default)((0, import_assign.default)((0, import_assign.default)({}, common), options && {
        options
      }), {
        authenticator
      });
    }
  }, {
    key: "getChannels",
    value: function getChannels() {
      var _context2;
      var _a;
      var authenticator = getAuthenticatorFromRemediation(this.remediation);
      var remediationValue = authenticator.value;
      return (_a = (0, import_find.default)(_context2 = remediationValue.form.value).call(_context2, function(_ref) {
        var name = _ref.name;
        return name === "channel";
      })) === null || _a === void 0 ? void 0 : _a.options;
    }
  }, {
    key: "getData",
    value: function getData() {
      var remediationValue = this.remediation.value[0].value;
      return {
        authenticator: {
          id: remediationValue.form.value[0].value,
          channel: (0, import_values2.default)(this).channel
        },
        stateHandle: (0, import_values2.default)(this).stateHandle
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context2, _this = this;
      var trimmedValues = (0, import_filter.default)(_context2 = (0, import_keys.default)((0, import_values2.default)(this))).call(_context2, function(valueKey) {
        return valueKey !== "channel";
      });
      return (0, import_reduce.default)(trimmedValues).call(trimmedValues, function(values, valueKey) {
        return (0, import_assign.default)((0, import_assign.default)({}, values), _defineProperty({}, valueKey, (0, import_values2.default)(_this)[valueKey]));
      }, {});
    }
  }]);
  return SelectEnrollmentChannel2;
}(Remediator);
SelectEnrollmentChannel.remediationName = "select-enrollment-channel";
function _createSuper$h(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$h() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EnrollmentChannelData = function(_Remediator) {
  _inherits(EnrollmentChannelData2, _Remediator);
  var _super = _createSuper$h(EnrollmentChannelData2);
  function EnrollmentChannelData2() {
    _classCallCheck(this, EnrollmentChannelData2);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollmentChannelData2, [{
    key: "getInputEmail",
    value: function getInputEmail() {
      return [{
        name: "email",
        type: "string",
        required: true,
        label: "Email"
      }];
    }
  }, {
    key: "getInputPhoneNumber",
    value: function getInputPhoneNumber() {
      return [{
        name: "phoneNumber",
        type: "string",
        required: true,
        label: "Phone Number"
      }];
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      return Boolean((0, import_values2.default)(this).email || (0, import_values2.default)(this).phoneNumber);
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2(context) {
      var common = _get(_getPrototypeOf(EnrollmentChannelData2.prototype), "getNextStep", this).call(this);
      var authenticator = context.currentAuthenticator.value;
      return (0, import_assign.default)((0, import_assign.default)({}, common), {
        authenticator
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return {
        stateHandle: (0, import_values2.default)(this).stateHandle,
        email: (0, import_values2.default)(this).email,
        phoneNumber: (0, import_values2.default)(this).phoneNumber
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context2, _this = this;
      var trimmedValues = (0, import_filter.default)(_context2 = (0, import_keys.default)((0, import_values2.default)(this))).call(_context2, function(valueKey) {
        var _context22;
        return !(0, import_includes.default)(_context22 = ["email", "phoneNumber"]).call(_context22, valueKey);
      });
      return (0, import_reduce.default)(trimmedValues).call(trimmedValues, function(values, valueKey) {
        return (0, import_assign.default)((0, import_assign.default)({}, values), _defineProperty({}, valueKey, (0, import_values2.default)(_this)[valueKey]));
      }, {});
    }
  }]);
  return EnrollmentChannelData2;
}(Remediator);
EnrollmentChannelData.remediationName = "enrollment-channel-data";
function _createSuper$g(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$g() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ChallengeAuthenticator = function(_VerifyAuthenticator) {
  _inherits(ChallengeAuthenticator2, _VerifyAuthenticator);
  var _super = _createSuper$g(ChallengeAuthenticator2);
  function ChallengeAuthenticator2() {
    _classCallCheck(this, ChallengeAuthenticator2);
    return _super.apply(this, arguments);
  }
  return ChallengeAuthenticator2;
}(VerifyAuthenticator);
ChallengeAuthenticator.remediationName = "challenge-authenticator";
function _createSuper$f(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$f() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ChallengePoll = function(_EnrollPoll) {
  _inherits(ChallengePoll2, _EnrollPoll);
  var _super = _createSuper$f(ChallengePoll2);
  function ChallengePoll2() {
    _classCallCheck(this, ChallengePoll2);
    return _super.apply(this, arguments);
  }
  _createClass(ChallengePoll2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!(0, import_values2.default)(this).startPolling || this.options.step === "challenge-poll";
    }
  }]);
  return ChallengePoll2;
}(EnrollPoll);
ChallengePoll.remediationName = "challenge-poll";
function _createSuper$e(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$e() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ResetAuthenticator = function(_VerifyAuthenticator) {
  _inherits(ResetAuthenticator2, _VerifyAuthenticator);
  var _super = _createSuper$e(ResetAuthenticator2);
  function ResetAuthenticator2() {
    _classCallCheck(this, ResetAuthenticator2);
    return _super.apply(this, arguments);
  }
  return ResetAuthenticator2;
}(VerifyAuthenticator);
ResetAuthenticator.remediationName = "reset-authenticator";
function _createSuper$d(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$d() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EnrollProfile = function(_Remediator) {
  _inherits(EnrollProfile2, _Remediator);
  var _super = _createSuper$d(EnrollProfile2);
  function EnrollProfile2() {
    _classCallCheck(this, EnrollProfile2);
    return _super.apply(this, arguments);
  }
  _createClass(EnrollProfile2, [{
    key: "canRemediate",
    value: function canRemediate() {
      var _context2, _context22;
      var userProfileFromValues = this.getData().userProfile;
      if (!userProfileFromValues) {
        return false;
      }
      var userProfileFromRemediation = (0, import_find.default)(_context2 = this.remediation.value).call(_context2, function(_ref) {
        var name = _ref.name;
        return name === "userProfile";
      });
      return (0, import_reduce.default)(_context22 = userProfileFromRemediation.form.value).call(_context22, function(canRemediate2, curr) {
        if (curr.required) {
          canRemediate2 = canRemediate2 && !!userProfileFromValues[curr.name];
        }
        return canRemediate2;
      }, true);
    }
  }, {
    key: "mapUserProfile",
    value: function mapUserProfile(_ref2) {
      var _this = this;
      var profileAttributes = _ref2.form.value;
      var attributeNames = (0, import_map2.default)(profileAttributes).call(profileAttributes, function(_ref3) {
        var name = _ref3.name;
        return name;
      });
      var data = (0, import_reduce.default)(attributeNames).call(attributeNames, function(attributeValues, attributeName) {
        return (0, import_values2.default)(_this)[attributeName] ? (0, import_assign.default)((0, import_assign.default)({}, attributeValues), _defineProperty({}, attributeName, (0, import_values2.default)(_this)[attributeName])) : attributeValues;
      }, {});
      if ((0, import_keys.default)(data).length === 0) {
        return;
      }
      return data;
    }
  }, {
    key: "getInputUserProfile",
    value: function getInputUserProfile(input) {
      return _toConsumableArray(input.form.value);
    }
  }, {
    key: "getErrorMessages",
    value: function getErrorMessages(errorRemediation) {
      var _context3;
      return (0, import_reduce.default)(_context3 = errorRemediation.value[0].form.value).call(_context3, function(errors, field) {
        if (field.messages) {
          errors.push(field.messages.value[0].message);
        }
        return errors;
      }, []);
    }
  }]);
  return EnrollProfile2;
}(Remediator);
EnrollProfile.remediationName = "enroll-profile";
function _createSuper$c(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$c() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var Identify = function(_Remediator) {
  _inherits(Identify2, _Remediator);
  var _super = _createSuper$c(Identify2);
  function Identify2() {
    var _this;
    _classCallCheck(this, Identify2);
    _this = _super.apply(this, arguments);
    _this.map = {
      "identifier": ["username"]
    };
    return _this;
  }
  _createClass(Identify2, [{
    key: "canRemediate",
    value: function canRemediate() {
      var _this$getData = this.getData(), identifier = _this$getData.identifier;
      return !!identifier;
    }
  }, {
    key: "mapCredentials",
    value: function mapCredentials() {
      var _this$values = (0, import_values2.default)(this), credentials = _this$values.credentials, password = _this$values.password;
      if (!credentials && !password) {
        return;
      }
      return credentials || {
        passcode: password
      };
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      return (0, import_assign.default)((0, import_assign.default)({}, input.form.value[0]), {
        name: "password",
        required: input.required
      });
    }
  }]);
  return Identify2;
}(Remediator);
Identify.remediationName = "identify";
function _createSuper$b(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$b() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var ReEnrollAuthenticator = function(_Remediator) {
  _inherits(ReEnrollAuthenticator2, _Remediator);
  var _super = _createSuper$b(ReEnrollAuthenticator2);
  function ReEnrollAuthenticator2() {
    _classCallCheck(this, ReEnrollAuthenticator2);
    return _super.apply(this, arguments);
  }
  _createClass(ReEnrollAuthenticator2, [{
    key: "mapCredentials",
    value: function mapCredentials() {
      var newPassword = (0, import_values2.default)(this).newPassword;
      if (!newPassword) {
        return;
      }
      return {
        passcode: newPassword
      };
    }
  }, {
    key: "getInputCredentials",
    value: function getInputCredentials(input) {
      var challengeType = this.getAuthenticator().type;
      var name = challengeType === "password" ? "newPassword" : "verificationCode";
      return (0, import_assign.default)((0, import_assign.default)({}, input.form.value[0]), {
        name
      });
    }
  }]);
  return ReEnrollAuthenticator2;
}(Remediator);
ReEnrollAuthenticator.remediationName = "reenroll-authenticator";
function _createSuper$a(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$a() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var RedirectIdp = function(_Remediator) {
  _inherits(RedirectIdp2, _Remediator);
  var _super = _createSuper$a(RedirectIdp2);
  function RedirectIdp2() {
    _classCallCheck(this, RedirectIdp2);
    return _super.apply(this, arguments);
  }
  _createClass(RedirectIdp2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return false;
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2() {
      var _this$remediation = this.remediation, name = _this$remediation.name, type = _this$remediation.type, idp = _this$remediation.idp, href = _this$remediation.href;
      return {
        name,
        type,
        idp,
        href
      };
    }
  }]);
  return RedirectIdp2;
}(Remediator);
RedirectIdp.remediationName = "redirect-idp";
function _createForOfIteratorHelper$2(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$2(o, minLen) {
  var _context4;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = (0, import_slice2.default)(_context4 = Object.prototype.toString.call(o)).call(_context4, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _createSuper$9(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$9() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectAuthenticator = function(_Remediator) {
  _inherits(SelectAuthenticator2, _Remediator);
  var _super = _createSuper$9(SelectAuthenticator2);
  function SelectAuthenticator2() {
    _classCallCheck(this, SelectAuthenticator2);
    return _super.apply(this, arguments);
  }
  _createClass(SelectAuthenticator2, [{
    key: "findMatchedOption",
    value: function findMatchedOption2(authenticators, options) {
      var option;
      var _iterator = _createForOfIteratorHelper$2(authenticators), _step;
      try {
        var _loop = function _loop2() {
          var authenticator = _step.value;
          option = (0, import_find.default)(options).call(options, function(_ref) {
            var relatesTo = _ref.relatesTo;
            return relatesTo.key === authenticator.key;
          });
          if (option) {
            return "break";
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _ret = _loop();
          if (_ret === "break")
            break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return option;
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this$values = (0, import_values2.default)(this), authenticators = _this$values.authenticators, authenticator = _this$values.authenticator;
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      var options = authenticatorFromRemediation.options;
      if (!authenticators || !authenticators.length) {
        return false;
      }
      if (isAuthenticator(authenticator) && authenticator.id) {
        return true;
      }
      var matchedOption = this.findMatchedOption(authenticators, options);
      if (matchedOption) {
        return true;
      }
      return false;
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2() {
      var _context2;
      var common = _get(_getPrototypeOf(SelectAuthenticator2.prototype), "getNextStep", this).call(this);
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      var options = (0, import_map2.default)(_context2 = authenticatorFromRemediation.options).call(_context2, function(option) {
        var label = option.label, relatesTo = option.relatesTo;
        var key = relatesTo.key;
        return {
          label,
          value: key
        };
      });
      return (0, import_assign.default)((0, import_assign.default)({}, common), {
        options
      });
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator(remediationValue) {
      var _context2;
      var _this$values2 = (0, import_values2.default)(this), authenticators = _this$values2.authenticators, authenticator = _this$values2.authenticator;
      if (isAuthenticator(authenticator) && authenticator.id) {
        this.selectedAuthenticator = authenticator;
        return authenticator;
      }
      var options = remediationValue.options;
      var selectedOption = findMatchedOption(authenticators, options);
      this.selectedAuthenticator = selectedOption.relatesTo;
      this.selectedOption = selectedOption;
      return {
        id: selectedOption === null || selectedOption === void 0 ? void 0 : (0, import_find.default)(_context2 = selectedOption.value.form.value).call(_context2, function(_ref2) {
          var name = _ref2.name;
          return name === "id";
        }).value
      };
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      return {
        name: "authenticator",
        key: "string"
      };
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context3, _this = this;
      this.values = _get(_getPrototypeOf(SelectAuthenticator2.prototype), "getValuesAfterProceed", this).call(this);
      var authenticators = (0, import_filter.default)(_context3 = (0, import_values2.default)(this).authenticators).call(_context3, function(authenticator) {
        return compareAuthenticators(authenticator, _this.selectedAuthenticator) !== true;
      });
      return (0, import_assign.default)((0, import_assign.default)({}, (0, import_values2.default)(this)), {
        authenticators
      });
    }
  }]);
  return SelectAuthenticator2;
}(Remediator);
function _createSuper$8(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$8() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectAuthenticatorAuthenticate = function(_SelectAuthenticator) {
  _inherits(SelectAuthenticatorAuthenticate2, _SelectAuthenticator);
  var _super = _createSuper$8(SelectAuthenticatorAuthenticate2);
  function SelectAuthenticatorAuthenticate2(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, SelectAuthenticatorAuthenticate2);
    var _a;
    _this = _super.call(this, remediation, values, options);
    var isRecoveryFlow = _this.options.flow === "recoverPassword";
    var hasPasswordInOptions = (_a = getAuthenticatorFromRemediation(remediation).options) === null || _a === void 0 ? void 0 : _a.some(function(_ref) {
      var relatesTo = _ref.relatesTo;
      return (relatesTo === null || relatesTo === void 0 ? void 0 : relatesTo.key) === AuthenticatorKey.OKTA_PASSWORD;
    });
    if (hasPasswordInOptions && (isRecoveryFlow || (0, import_values2.default)(_this).password)) {
      var _context2;
      (0, import_values2.default)(_this).authenticators = (0, import_concat.default)(_context2 = []).call(_context2, _toConsumableArray((0, import_values2.default)(_this).authenticators || []), [{
        key: AuthenticatorKey.OKTA_PASSWORD
      }]);
    }
    return _this;
  }
  return SelectAuthenticatorAuthenticate2;
}(SelectAuthenticator);
SelectAuthenticatorAuthenticate.remediationName = "select-authenticator-authenticate";
function _createSuper$7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$7() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectAuthenticatorEnroll = function(_SelectAuthenticator) {
  _inherits(SelectAuthenticatorEnroll2, _SelectAuthenticator);
  var _super = _createSuper$7(SelectAuthenticatorEnroll2);
  function SelectAuthenticatorEnroll2() {
    _classCallCheck(this, SelectAuthenticatorEnroll2);
    return _super.apply(this, arguments);
  }
  return SelectAuthenticatorEnroll2;
}(SelectAuthenticator);
SelectAuthenticatorEnroll.remediationName = "select-authenticator-enroll";
function _createSuper$6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$6() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectAuthenticatorUnlockAccount = function(_SelectAuthenticator) {
  _inherits(SelectAuthenticatorUnlockAccount2, _SelectAuthenticator);
  var _super = _createSuper$6(SelectAuthenticatorUnlockAccount2);
  function SelectAuthenticatorUnlockAccount2() {
    var _this;
    _classCallCheck(this, SelectAuthenticatorUnlockAccount2);
    _this = _super.apply(this, arguments);
    _this.map = {
      identifier: ["username"]
    };
    return _this;
  }
  _createClass(SelectAuthenticatorUnlockAccount2, [{
    key: "canRemediate",
    value: function canRemediate() {
      var identifier = this.getData("identifier");
      return !!identifier && _get(_getPrototypeOf(SelectAuthenticatorUnlockAccount2.prototype), "canRemediate", this).call(this);
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator(remediationValue) {
      var _context2;
      var _a, _b, _c;
      var authenticatorMap = _get(_getPrototypeOf(SelectAuthenticatorUnlockAccount2.prototype), "mapAuthenticator", this).call(this, remediationValue);
      var methodTypeOption = (_a = this.selectedOption) === null || _a === void 0 ? void 0 : (0, import_find.default)(_context2 = _a.value.form.value).call(_context2, function(_ref) {
        var name = _ref.name;
        return name === "methodType";
      });
      var methodTypeValue = (0, import_values2.default)(this).methodType || (methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.value) || ((_c = (_b = methodTypeOption === null || methodTypeOption === void 0 ? void 0 : methodTypeOption.options) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.value);
      if (methodTypeValue) {
        return (0, import_assign.default)((0, import_assign.default)({}, authenticatorMap), {
          methodType: methodTypeValue
        });
      }
      return authenticatorMap;
    }
  }, {
    key: "getInputUsername",
    value: function getInputUsername() {
      return {
        name: "username",
        key: "string"
      };
    }
  }]);
  return SelectAuthenticatorUnlockAccount2;
}(SelectAuthenticator);
SelectAuthenticatorUnlockAccount.remediationName = "select-authenticator-unlock-account";
function _createSuper$5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$5() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var SelectEnrollProfile = function(_Remediator) {
  _inherits(SelectEnrollProfile2, _Remediator);
  var _super = _createSuper$5(SelectEnrollProfile2);
  function SelectEnrollProfile2() {
    _classCallCheck(this, SelectEnrollProfile2);
    return _super.apply(this, arguments);
  }
  _createClass(SelectEnrollProfile2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return true;
    }
  }]);
  return SelectEnrollProfile2;
}(Remediator);
SelectEnrollProfile.remediationName = "select-enroll-profile";
function _createSuper$4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$4() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthenticatorData = function(_Remediator) {
  _inherits(AuthenticatorData2, _Remediator);
  var _super = _createSuper$4(AuthenticatorData2);
  function AuthenticatorData2(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck(this, AuthenticatorData2);
    _this = _super.call(this, remediation, values);
    _this.authenticator = _this.getAuthenticator();
    _this.formatAuthenticatorData();
    return _this;
  }
  _createClass(AuthenticatorData2, [{
    key: "formatAuthenticatorData",
    value: function formatAuthenticatorData() {
      var _this2 = this;
      var authenticatorData = this.getAuthenticatorData();
      if (authenticatorData) {
        var _context2;
        (0, import_values2.default)(this).authenticatorsData = (0, import_map2.default)(_context2 = (0, import_values2.default)(this).authenticatorsData).call(_context2, function(data2) {
          if (compareAuthenticators(_this2.authenticator, data2)) {
            return _this2.mapAuthenticatorDataFromValues(data2);
          }
          return data2;
        });
      } else {
        var data = this.mapAuthenticatorDataFromValues();
        if (data) {
          (0, import_values2.default)(this).authenticatorsData.push(data);
        }
      }
    }
  }, {
    key: "getAuthenticatorData",
    value: function getAuthenticatorData() {
      var _context2, _this3 = this;
      return (0, import_find.default)(_context2 = (0, import_values2.default)(this).authenticatorsData).call(_context2, function(data) {
        return compareAuthenticators(_this3.authenticator, data);
      });
    }
  }, {
    key: "canRemediate",
    value: function canRemediate() {
      var _this4 = this;
      return (0, import_values2.default)(this).authenticatorsData.some(function(data) {
        return compareAuthenticators(_this4.authenticator, data);
      });
    }
  }, {
    key: "getNextStep",
    value: function getNextStep2() {
      var common = _get(_getPrototypeOf(AuthenticatorData2.prototype), "getNextStep", this).call(this);
      var options = this.getMethodTypes();
      return (0, import_assign.default)((0, import_assign.default)({}, common), options && {
        options
      });
    }
  }, {
    key: "mapAuthenticatorDataFromValues",
    value: function mapAuthenticatorDataFromValues(authenticatorData) {
      var _this$values = (0, import_values2.default)(this), methodType = _this$values.methodType, authenticator = _this$values.authenticator;
      if (!methodType && isAuthenticator(authenticator)) {
        methodType = authenticator === null || authenticator === void 0 ? void 0 : authenticator.methodType;
      }
      var _this$authenticator = this.authenticator, id = _this$authenticator.id, enrollmentId = _this$authenticator.enrollmentId;
      var data = (0, import_assign.default)((0, import_assign.default)({
        id,
        enrollmentId
      }, authenticatorData && authenticatorData), methodType && {
        methodType
      });
      return data.methodType ? data : null;
    }
  }, {
    key: "getAuthenticatorFromRemediation",
    value: function getAuthenticatorFromRemediation2() {
      var _context3;
      var authenticator = (0, import_find.default)(_context3 = this.remediation.value).call(_context3, function(_ref) {
        var name = _ref.name;
        return name === "authenticator";
      });
      return authenticator;
    }
  }, {
    key: "getMethodTypes",
    value: function getMethodTypes() {
      var _context4;
      var _a;
      var authenticator = this.getAuthenticatorFromRemediation();
      return (_a = (0, import_find.default)(_context4 = authenticator.form.value).call(_context4, function(_ref2) {
        var name = _ref2.name;
        return name === "methodType";
      })) === null || _a === void 0 ? void 0 : _a.options;
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context5, _this5 = this;
      this.values = _get(_getPrototypeOf(AuthenticatorData2.prototype), "getValuesAfterProceed", this).call(this);
      var authenticatorsData = (0, import_filter.default)(_context5 = (0, import_values2.default)(this).authenticatorsData).call(_context5, function(data) {
        return compareAuthenticators(_this5.authenticator, data) !== true;
      });
      return (0, import_assign.default)((0, import_assign.default)({}, (0, import_values2.default)(this)), {
        authenticatorsData
      });
    }
  }]);
  return AuthenticatorData2;
}(Remediator);
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$3() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthenticatorVerificationData = function(_AuthenticatorData) {
  _inherits(AuthenticatorVerificationData2, _AuthenticatorData);
  var _super = _createSuper$3(AuthenticatorVerificationData2);
  function AuthenticatorVerificationData2(remediation) {
    var _this;
    var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, AuthenticatorVerificationData2);
    _this = _super.call(this, remediation, values);
    _this.shouldProceedWithEmailAuthenticator = options.shouldProceedWithEmailAuthenticator !== false && _this.authenticator.methods.length === 1 && _this.authenticator.methods[0].type === "email";
    return _this;
  }
  _createClass(AuthenticatorVerificationData2, [{
    key: "canRemediate",
    value: function canRemediate() {
      if (this.shouldProceedWithEmailAuthenticator !== false) {
        return true;
      }
      return _get(_getPrototypeOf(AuthenticatorVerificationData2.prototype), "canRemediate", this).call(this);
    }
  }, {
    key: "mapAuthenticator",
    value: function mapAuthenticator() {
      var _a;
      if (this.shouldProceedWithEmailAuthenticator !== false) {
        var _context2;
        var authenticatorFromRemediation = this.getAuthenticatorFromRemediation();
        return (_a = authenticatorFromRemediation.form) === null || _a === void 0 ? void 0 : (0, import_reduce.default)(_context2 = _a.value).call(_context2, function(acc, curr) {
          if (curr.value) {
            acc[curr.name] = curr.value;
          } else if (curr.options) {
            acc[curr.name] = curr.options[0].value;
          } else {
            throw new AuthSdkError("Unsupported authenticator data type: ".concat(curr));
          }
          return acc;
        }, {});
      }
      return this.getAuthenticatorData();
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      var _context2;
      var authenticator = this.getAuthenticatorFromRemediation();
      var methodType = (0, import_find.default)(_context2 = authenticator.form.value).call(_context2, function(_ref) {
        var name = _ref.name;
        return name === "methodType";
      });
      if (methodType && methodType.options) {
        return {
          name: "methodType",
          type: "string",
          required: true
        };
      }
      var inputs = _toConsumableArray(authenticator.form.value);
      return inputs;
    }
  }, {
    key: "getValuesAfterProceed",
    value: function getValuesAfterProceed() {
      var _context3, _this2 = this;
      this.values = _get(_getPrototypeOf(AuthenticatorVerificationData2.prototype), "getValuesAfterProceed", this).call(this);
      var trimmedValues = (0, import_filter.default)(_context3 = (0, import_keys.default)((0, import_values2.default)(this))).call(_context3, function(valueKey) {
        return valueKey !== "authenticator";
      });
      return (0, import_reduce.default)(trimmedValues).call(trimmedValues, function(values, valueKey) {
        return (0, import_assign.default)((0, import_assign.default)({}, values), _defineProperty({}, valueKey, (0, import_values2.default)(_this2)[valueKey]));
      }, {});
    }
  }]);
  return AuthenticatorVerificationData2;
}(AuthenticatorData);
AuthenticatorVerificationData.remediationName = "authenticator-verification-data";
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$2() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var AuthenticatorEnrollmentData = function(_AuthenticatorData) {
  _inherits(AuthenticatorEnrollmentData2, _AuthenticatorData);
  var _super = _createSuper$2(AuthenticatorEnrollmentData2);
  function AuthenticatorEnrollmentData2() {
    _classCallCheck(this, AuthenticatorEnrollmentData2);
    return _super.apply(this, arguments);
  }
  _createClass(AuthenticatorEnrollmentData2, [{
    key: "mapAuthenticator",
    value: function mapAuthenticator() {
      var _context2;
      var authenticatorData = this.getAuthenticatorData();
      var authenticatorFromRemediation = getAuthenticatorFromRemediation(this.remediation);
      return {
        id: (0, import_find.default)(_context2 = authenticatorFromRemediation.form.value).call(_context2, function(_ref) {
          var name = _ref.name;
          return name === "id";
        }).value,
        methodType: authenticatorData.methodType,
        phoneNumber: authenticatorData.phoneNumber
      };
    }
  }, {
    key: "getInputAuthenticator",
    value: function getInputAuthenticator() {
      return [{
        name: "methodType",
        type: "string",
        required: true
      }, {
        name: "phoneNumber",
        type: "string",
        required: true,
        label: "Phone Number"
      }];
    }
  }, {
    key: "mapAuthenticatorDataFromValues",
    value: function mapAuthenticatorDataFromValues(data) {
      data = _get(_getPrototypeOf(AuthenticatorEnrollmentData2.prototype), "mapAuthenticatorDataFromValues", this).call(this, data);
      var phoneNumber = (0, import_values2.default)(this).phoneNumber;
      if (!data && !phoneNumber) {
        return;
      }
      return (0, import_assign.default)((0, import_assign.default)({}, data && data), phoneNumber && {
        phoneNumber
      });
    }
  }]);
  return AuthenticatorEnrollmentData2;
}(AuthenticatorData);
AuthenticatorEnrollmentData.remediationName = "authenticator-enrollment-data";
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var Skip = function(_Remediator) {
  _inherits(Skip2, _Remediator);
  var _super = _createSuper$1(Skip2);
  function Skip2() {
    _classCallCheck(this, Skip2);
    return _super.apply(this, arguments);
  }
  _createClass(Skip2, [{
    key: "canRemediate",
    value: function canRemediate() {
      return !!(0, import_values2.default)(this).skip || this.options.step === "skip";
    }
  }]);
  return Skip2;
}(Remediator);
Skip.remediationName = "skip";
var remediators = Object.freeze({
  __proto__: null,
  Remediator,
  EnrollAuthenticator,
  EnrollPoll,
  SelectEnrollmentChannel,
  EnrollmentChannelData,
  ChallengeAuthenticator,
  ChallengePoll,
  ResetAuthenticator,
  EnrollProfile,
  Identify,
  ReEnrollAuthenticator,
  RedirectIdp,
  SelectAuthenticatorAuthenticate,
  SelectAuthenticatorEnroll,
  SelectAuthenticatorUnlockAccount,
  SelectEnrollProfile,
  AuthenticatorVerificationData,
  AuthenticatorEnrollmentData,
  Skip
});
function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray$1(o, minLen) {
  var _context12;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = (0, import_slice2.default)(_context12 = Object.prototype.toString.call(o)).call(_context12, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function isTerminalResponse(idxResponse) {
  var neededToProceed = idxResponse.neededToProceed, interactionCode = idxResponse.interactionCode;
  return !neededToProceed.length && !interactionCode;
}
function canSkipFn(idxResponse) {
  return idxResponse.neededToProceed.some(function(_ref) {
    var name = _ref.name;
    return name === "skip";
  });
}
function canResendFn(idxResponse) {
  return (0, import_keys.default)(idxResponse.actions).some(function(actionName) {
    return (0, import_includes.default)(actionName).call(actionName, "resend");
  });
}
function getMessagesFromIdxRemediationValue(value) {
  if (!value || !Array.isArray(value)) {
    return;
  }
  return (0, import_reduce.default)(value).call(value, function(messages, value2) {
    if (value2.messages) {
      var _context2;
      messages = (0, import_concat.default)(_context2 = []).call(_context2, _toConsumableArray(messages), _toConsumableArray(value2.messages.value));
    }
    if (value2.form) {
      var _context22;
      var messagesFromForm = getMessagesFromIdxRemediationValue(value2.form.value) || [];
      messages = (0, import_concat.default)(_context22 = []).call(_context22, _toConsumableArray(messages), _toConsumableArray(messagesFromForm));
    }
    if (value2.options) {
      var _context4;
      var optionValues = [];
      value2.options.forEach(function(option) {
        var _context3;
        if (!option.value || typeof option.value === "string") {
          return;
        }
        optionValues = (0, import_concat.default)(_context3 = []).call(_context3, _toConsumableArray(optionValues), [option.value]);
      });
      var messagesFromOptions = getMessagesFromIdxRemediationValue(optionValues) || [];
      messages = (0, import_concat.default)(_context4 = []).call(_context4, _toConsumableArray(messages), _toConsumableArray(messagesFromOptions));
    }
    return messages;
  }, []);
}
function getMessagesFromResponse(idxResponse) {
  var _context5;
  var _a;
  var messages = [];
  var rawIdxState = idxResponse.rawIdxState, neededToProceed = idxResponse.neededToProceed;
  var globalMessages = (_a = rawIdxState.messages) === null || _a === void 0 ? void 0 : (0, import_map2.default)(_context5 = _a.value).call(_context5, function(message) {
    return message;
  });
  if (globalMessages) {
    var _context6;
    messages = (0, import_concat.default)(_context6 = []).call(_context6, _toConsumableArray(messages), _toConsumableArray(globalMessages));
  }
  var _iterator = _createForOfIteratorHelper$1(neededToProceed), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var remediation = _step.value;
      var fieldMessages = getMessagesFromIdxRemediationValue(remediation.value);
      if (fieldMessages) {
        var _context8;
        messages = (0, import_concat.default)(_context8 = []).call(_context8, _toConsumableArray(messages), _toConsumableArray(fieldMessages));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var seen = {};
  messages = (0, import_reduce.default)(messages).call(messages, function(filtered, message) {
    var _context7;
    var _a2;
    var key = (_a2 = message.i18n) === null || _a2 === void 0 ? void 0 : _a2.key;
    if (key && seen[key]) {
      return filtered;
    }
    seen[key] = message;
    filtered = (0, import_concat.default)(_context7 = []).call(_context7, _toConsumableArray(filtered), [message]);
    return filtered;
  }, []);
  return messages;
}
function getEnabledFeatures(idxResponse) {
  var res = [];
  var actions = idxResponse.actions, neededToProceed = idxResponse.neededToProceed;
  if (actions["currentAuthenticator-recover"]) {
    res.push(IdxFeature.PASSWORD_RECOVERY);
  }
  if (neededToProceed.some(function(_ref2) {
    var name = _ref2.name;
    return name === "select-enroll-profile";
  })) {
    res.push(IdxFeature.REGISTRATION);
  }
  if (neededToProceed.some(function(_ref3) {
    var name = _ref3.name;
    return name === "redirect-idp";
  })) {
    res.push(IdxFeature.SOCIAL_IDP);
  }
  if (neededToProceed.some(function(_ref4) {
    var name = _ref4.name;
    return name === "unlock-account";
  })) {
    res.push(IdxFeature.ACCOUNT_UNLOCK);
  }
  return res;
}
function getAvailableSteps(idxResponse) {
  var _context9;
  var res = [];
  var remediatorMap = (0, import_reduce.default)(_context9 = (0, import_values.default)(remediators)).call(_context9, function(map, remediatorClass) {
    if (remediatorClass.remediationName) {
      map[remediatorClass.remediationName] = remediatorClass;
    }
    return map;
  }, {});
  var _iterator2 = _createForOfIteratorHelper$1(idxResponse.neededToProceed), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var remediation = _step2.value;
      var T = remediatorMap[remediation.name];
      if (T) {
        var remediator = new T(remediation);
        res.push(remediator.getNextStep(idxResponse.context));
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return res;
}
function filterValuesForRemediation(idxResponse, remediationName, values) {
  var _context10;
  var remediations = idxResponse.neededToProceed || [];
  var remediation = (0, import_find.default)(remediations).call(remediations, function(r) {
    return r.name === remediationName;
  });
  if (!remediation) {
    warn('filterValuesForRemediation: "'.concat(remediationName, '" did not match any remediations'));
    return values;
  }
  var valuesForRemediation = (0, import_reduce.default)(_context10 = remediation.value).call(_context10, function(res, entry) {
    var name = entry.name, value = entry.value;
    if (name === "stateHandle") {
      res[name] = value;
    } else {
      res[name] = values[name];
    }
    return res;
  }, {});
  return valuesForRemediation;
}
function getRemediator(idxRemediations, values, options) {
  var remediators2 = options.remediators;
  var remediator;
  if (options.step) {
    var remediation = (0, import_find.default)(idxRemediations).call(idxRemediations, function(_ref5) {
      var name = _ref5.name;
      return name === options.step;
    });
    if (remediation) {
      var T = remediation ? remediators2[remediation.name] : void 0;
      return T ? new T(remediation, values, options) : void 0;
    } else {
      warn('step "'.concat(options.step, '" did not match any remediations'));
      return;
    }
  }
  var remediatorCandidates = [];
  var _iterator3 = _createForOfIteratorHelper$1(idxRemediations), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var _context11;
      var _remediation = _step3.value;
      var isRemeditionInFlow = (0, import_includes.default)(_context11 = (0, import_keys.default)(remediators2)).call(_context11, _remediation.name);
      if (!isRemeditionInFlow) {
        continue;
      }
      var _T = remediators2[_remediation.name];
      remediator = new _T(_remediation, values, options);
      if (remediator.canRemediate()) {
        return remediator;
      }
      remediatorCandidates.push(remediator);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return remediatorCandidates[0];
}
function getNextStep(remediator, idxResponse) {
  var nextStep = remediator.getNextStep(idxResponse.context);
  var canSkip = canSkipFn(idxResponse);
  var canResend = canResendFn(idxResponse);
  return (0, import_assign.default)((0, import_assign.default)((0, import_assign.default)({}, nextStep), canSkip && {
    canSkip
  }), canResend && {
    canResend
  });
}
function handleIdxError(e, remediator) {
  var idxResponse = isIdxResponse(e) ? e : null;
  if (!idxResponse) {
    throw e;
  }
  idxResponse = (0, import_assign.default)((0, import_assign.default)({}, idxResponse), {
    requestDidSucceed: false
  });
  var terminal = isTerminalResponse(idxResponse);
  var messages = getMessagesFromResponse(idxResponse);
  if (terminal) {
    return {
      idxResponse,
      terminal,
      messages
    };
  } else {
    var nextStep = remediator && getNextStep(remediator, idxResponse);
    return (0, import_assign.default)({
      idxResponse,
      messages
    }, nextStep && {
      nextStep
    });
  }
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof import_symbol4.default !== "undefined" && (0, import_get_iterator_method3.default)(o) || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function F2() {
      };
      return { s: F, n: function n() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function e(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function s() {
    it = it.call(o);
  }, n: function n() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function e(_e2) {
    didErr = true;
    err = _e2;
  }, f: function f() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray2(o, minLen) {
  var _context5;
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = (0, import_slice2.default)(_context5 = Object.prototype.toString.call(o)).call(_context5, 8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return (0, import_from3.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function getActionFromValues(values, idxResponse) {
  var _context2;
  return (0, import_find.default)(_context2 = (0, import_keys.default)(idxResponse.actions)).call(_context2, function(action) {
    return !!values.resend && (0, import_includes.default)(action).call(action, "-resend");
  });
}
function removeActionFromValues(values) {
  return (0, import_assign.default)((0, import_assign.default)({}, values), {
    resend: void 0
  });
}
function removeActionFromOptions(options, actionName) {
  var actions = options.actions || [];
  actions = (0, import_filter.default)(actions).call(actions, function(entry) {
    if (typeof entry === "string") {
      return entry !== actionName;
    }
    return entry.name !== actionName;
  });
  return (0, import_assign.default)((0, import_assign.default)({}, options), {
    actions
  });
}
function remediate(_x, _x2, _x3) {
  return _remediate.apply(this, arguments);
}
function _remediate() {
  _remediate = _asyncToGenerator(import_regenerator.default.mark(function _callee(idxResponse, values, options) {
    var _context2;
    var _idxResponse, neededToProceed, interactionCode, _options, flow, terminal, messages, remediator, actionFromValues, actionFromOptions, actions, _iterator, _step, _loop, _ret, nextStep, name, data;
    return import_regenerator.default.wrap(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _idxResponse = idxResponse, neededToProceed = _idxResponse.neededToProceed, interactionCode = _idxResponse.interactionCode;
            _options = options, flow = _options.flow;
            if (!interactionCode) {
              _context4.next = 4;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse
            });
          case 4:
            terminal = isTerminalResponse(idxResponse);
            messages = getMessagesFromResponse(idxResponse);
            if (!terminal) {
              _context4.next = 8;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse,
              terminal,
              messages
            });
          case 8:
            remediator = getRemediator(neededToProceed, values, options);
            actionFromValues = getActionFromValues(values, idxResponse);
            actionFromOptions = options.actions || [];
            actions = (0, import_concat.default)(_context2 = []).call(_context2, _toConsumableArray(actionFromOptions), _toConsumableArray(actionFromValues && [actionFromValues] || []));
            if (!actions) {
              _context4.next = 32;
              break;
            }
            _iterator = _createForOfIteratorHelper(actions);
            _context4.prev = 14;
            _loop = import_regenerator.default.mark(function _loop2() {
              var action, params, valuesWithoutExecutedAction, optionsWithoutExecutedAction, remediationAction;
              return import_regenerator.default.wrap(function _loop$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      action = _step.value;
                      params = {};
                      if (typeof action !== "string") {
                        params = action.params || {};
                        action = action.name;
                      }
                      valuesWithoutExecutedAction = removeActionFromValues(values);
                      optionsWithoutExecutedAction = removeActionFromOptions(options, action);
                      if (!(typeof idxResponse.actions[action] === "function")) {
                        _context3.next = 19;
                        break;
                      }
                      _context3.prev = 6;
                      _context3.next = 9;
                      return idxResponse.actions[action](params);
                    case 9:
                      idxResponse = _context3.sent;
                      idxResponse = (0, import_assign.default)((0, import_assign.default)({}, idxResponse), {
                        requestDidSucceed: true
                      });
                      _context3.next = 16;
                      break;
                    case 13:
                      _context3.prev = 13;
                      _context3.t0 = _context3["catch"](6);
                      return _context3.abrupt("return", {
                        v: handleIdxError(_context3.t0, remediator)
                      });
                    case 16:
                      if (!(action === "cancel")) {
                        _context3.next = 18;
                        break;
                      }
                      return _context3.abrupt("return", {
                        v: {
                          idxResponse,
                          canceled: true
                        }
                      });
                    case 18:
                      return _context3.abrupt("return", {
                        v: remediate(idxResponse, valuesWithoutExecutedAction, optionsWithoutExecutedAction)
                      });
                    case 19:
                      remediationAction = (0, import_find.default)(neededToProceed).call(neededToProceed, function(_ref) {
                        var name2 = _ref.name;
                        return name2 === action;
                      });
                      if (!remediationAction) {
                        _context3.next = 32;
                        break;
                      }
                      _context3.prev = 21;
                      _context3.next = 24;
                      return idxResponse.proceed(action, params);
                    case 24:
                      idxResponse = _context3.sent;
                      idxResponse = (0, import_assign.default)((0, import_assign.default)({}, idxResponse), {
                        requestDidSucceed: true
                      });
                      _context3.next = 31;
                      break;
                    case 28:
                      _context3.prev = 28;
                      _context3.t1 = _context3["catch"](21);
                      return _context3.abrupt("return", {
                        v: handleIdxError(_context3.t1, remediator)
                      });
                    case 31:
                      return _context3.abrupt("return", {
                        v: remediate(idxResponse, values, optionsWithoutExecutedAction)
                      });
                    case 32:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _loop2, null, [[6, 13], [21, 28]]);
            });
            _iterator.s();
          case 17:
            if ((_step = _iterator.n()).done) {
              _context4.next = 24;
              break;
            }
            return _context4.delegateYield(_loop(), "t0", 19);
          case 19:
            _ret = _context4.t0;
            if (!(_typeof(_ret) === "object")) {
              _context4.next = 22;
              break;
            }
            return _context4.abrupt("return", _ret.v);
          case 22:
            _context4.next = 17;
            break;
          case 24:
            _context4.next = 29;
            break;
          case 26:
            _context4.prev = 26;
            _context4.t1 = _context4["catch"](14);
            _iterator.e(_context4.t1);
          case 29:
            _context4.prev = 29;
            _iterator.f();
            return _context4.finish(29);
          case 32:
            if (remediator) {
              _context4.next = 49;
              break;
            }
            if (!options.step) {
              _context4.next = 46;
              break;
            }
            values = filterValuesForRemediation(idxResponse, options.step, values);
            _context4.prev = 35;
            _context4.next = 38;
            return idxResponse.proceed(options.step, values);
          case 38:
            idxResponse = _context4.sent;
            idxResponse = (0, import_assign.default)((0, import_assign.default)({}, idxResponse), {
              requestDidSucceed: true
            });
            return _context4.abrupt("return", {
              idxResponse
            });
          case 43:
            _context4.prev = 43;
            _context4.t2 = _context4["catch"](35);
            return _context4.abrupt("return", handleIdxError(_context4.t2));
          case 46:
            if (!(flow === "default")) {
              _context4.next = 48;
              break;
            }
            return _context4.abrupt("return", {
              idxResponse
            });
          case 48:
            throw new AuthSdkError("\n      No remediation can match current flow, check policy settings in your org.\n      Remediations: [".concat((0, import_reduce.default)(neededToProceed).call(neededToProceed, function(acc, curr) {
              return acc ? acc + " ," + curr.name : curr.name;
            }, ""), "]\n    "));
          case 49:
            if (remediator.canRemediate()) {
              _context4.next = 52;
              break;
            }
            nextStep = getNextStep(remediator, idxResponse);
            return _context4.abrupt("return", {
              idxResponse,
              nextStep,
              messages: messages.length ? messages : void 0
            });
          case 52:
            name = remediator.getName();
            data = remediator.getData();
            _context4.prev = 54;
            _context4.next = 57;
            return idxResponse.proceed(name, data);
          case 57:
            idxResponse = _context4.sent;
            idxResponse = (0, import_assign.default)((0, import_assign.default)({}, idxResponse), {
              requestDidSucceed: true
            });
            values = remediator.getValuesAfterProceed();
            options = (0, import_assign.default)((0, import_assign.default)({}, options), {
              step: void 0
            });
            return _context4.abrupt("return", remediate(idxResponse, values, options));
          case 64:
            _context4.prev = 64;
            _context4.t3 = _context4["catch"](54);
            return _context4.abrupt("return", handleIdxError(_context4.t3, remediator));
          case 67:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee, null, [[14, 26, 29, 32], [35, 43], [54, 64]]);
  }));
  return _remediate.apply(this, arguments);
}
var AuthenticationFlow = {
  "identify": Identify,
  "select-authenticator-authenticate": SelectAuthenticatorAuthenticate,
  "select-authenticator-enroll": SelectAuthenticatorEnroll,
  "authenticator-enrollment-data": AuthenticatorEnrollmentData,
  "authenticator-verification-data": AuthenticatorVerificationData,
  "enroll-authenticator": EnrollAuthenticator,
  "challenge-authenticator": ChallengeAuthenticator,
  "challenge-poll": ChallengePoll,
  "reenroll-authenticator": ReEnrollAuthenticator,
  "enroll-poll": EnrollPoll,
  "redirect-idp": RedirectIdp,
  "skip": Skip
};
var PasswordRecoveryFlow = {
  "identify": Identify,
  "identify-recovery": Identify,
  "select-authenticator-authenticate": SelectAuthenticatorAuthenticate,
  "select-authenticator-enroll": SelectAuthenticatorEnroll,
  "challenge-authenticator": ChallengeAuthenticator,
  "authenticator-verification-data": AuthenticatorVerificationData,
  "authenticator-enrollment-data": AuthenticatorEnrollmentData,
  "reset-authenticator": ResetAuthenticator,
  "reenroll-authenticator": ReEnrollAuthenticator,
  "enroll-poll": EnrollPoll
};
var RegistrationFlow = {
  "select-enroll-profile": SelectEnrollProfile,
  "enroll-profile": EnrollProfile,
  "authenticator-enrollment-data": AuthenticatorEnrollmentData,
  "select-authenticator-enroll": SelectAuthenticatorEnroll,
  "enroll-poll": EnrollPoll,
  "select-enrollment-channel": SelectEnrollmentChannel,
  "enrollment-channel-data": EnrollmentChannelData,
  "enroll-authenticator": EnrollAuthenticator,
  "skip": Skip
};
var AccountUnlockFlow = {
  "identify": Identify,
  "select-authenticator-unlock-account": SelectAuthenticatorUnlockAccount,
  "select-authenticator-authenticate": SelectAuthenticatorAuthenticate,
  "challenge-authenticator": ChallengeAuthenticator,
  "challenge-poll": ChallengePoll,
  "authenticator-verification-data": AuthenticatorVerificationData
};
function getFlowSpecification(oktaAuth) {
  var flow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  var remediators2, actions, withCredentials = true;
  switch (flow) {
    case "register":
    case "signup":
    case "enrollProfile":
      remediators2 = RegistrationFlow;
      withCredentials = false;
      break;
    case "recoverPassword":
    case "resetPassword":
      remediators2 = PasswordRecoveryFlow;
      actions = ["currentAuthenticator-recover", "currentAuthenticatorEnrollment-recover"];
      withCredentials = false;
      break;
    case "unlockAccount":
      remediators2 = AccountUnlockFlow;
      withCredentials = false;
      actions = ["unlock-account"];
      break;
    case "authenticate":
    case "login":
    case "signin":
      remediators2 = AuthenticationFlow;
      break;
    default:
      remediators2 = AuthenticationFlow;
      break;
  }
  return {
    flow,
    remediators: remediators2,
    actions,
    withCredentials
  };
}
function initializeValues(options) {
  var knownOptions = ["flow", "remediators", "actions", "withCredentials", "step", "shouldProceedWithEmailAuthenticator"];
  var values = (0, import_assign.default)({}, options);
  knownOptions.forEach(function(option) {
    delete values[option];
  });
  return values;
}
function initializeData(authClient, data) {
  var options = data.options;
  var flow = options.flow, withCredentials = options.withCredentials, remediators2 = options.remediators, actions = options.actions;
  var status = IdxStatus.PENDING;
  flow = flow || authClient.idx.getFlow() || "default";
  if (flow) {
    authClient.idx.setFlow(flow);
    var flowSpec = getFlowSpecification(authClient, flow);
    withCredentials = typeof withCredentials !== "undefined" ? withCredentials : flowSpec.withCredentials;
    remediators2 = remediators2 || flowSpec.remediators;
    actions = actions || flowSpec.actions;
  }
  return (0, import_assign.default)((0, import_assign.default)({}, data), {
    options: (0, import_assign.default)((0, import_assign.default)({}, options), {
      flow,
      withCredentials,
      remediators: remediators2,
      actions
    }),
    status
  });
}
function getDataFromIntrospect(_x, _x2) {
  return _getDataFromIntrospect.apply(this, arguments);
}
function _getDataFromIntrospect() {
  _getDataFromIntrospect = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient, data) {
    var options, stateHandle, withCredentials, version, state, scopes, recoveryToken, activationToken, idxResponse, meta, interactionHandle, interactResponse;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = data.options;
            stateHandle = options.stateHandle, withCredentials = options.withCredentials, version = options.version, state = options.state, scopes = options.scopes, recoveryToken = options.recoveryToken, activationToken = options.activationToken;
            meta = getSavedTransactionMeta(authClient, {
              state,
              recoveryToken,
              activationToken
            });
            if (!stateHandle) {
              _context2.next = 9;
              break;
            }
            _context2.next = 6;
            return introspect(authClient, {
              withCredentials,
              version,
              stateHandle
            });
          case 6:
            idxResponse = _context2.sent;
            _context2.next = 20;
            break;
          case 9:
            interactionHandle = meta === null || meta === void 0 ? void 0 : meta.interactionHandle;
            if (interactionHandle) {
              _context2.next = 17;
              break;
            }
            authClient.transactionManager.clear();
            _context2.next = 14;
            return interact(authClient, {
              withCredentials,
              state,
              scopes,
              activationToken,
              recoveryToken
            });
          case 14:
            interactResponse = _context2.sent;
            interactionHandle = interactResponse.interactionHandle;
            meta = interactResponse.meta;
          case 17:
            _context2.next = 19;
            return introspect(authClient, {
              withCredentials,
              version,
              interactionHandle
            });
          case 19:
            idxResponse = _context2.sent;
          case 20:
            return _context2.abrupt("return", (0, import_assign.default)((0, import_assign.default)({}, data), {
              idxResponse,
              meta
            }));
          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _getDataFromIntrospect.apply(this, arguments);
}
function getDataFromRemediate(_x3) {
  return _getDataFromRemediate.apply(this, arguments);
}
function _getDataFromRemediate() {
  _getDataFromRemediate = _asyncToGenerator(import_regenerator.default.mark(function _callee2(data) {
    var idxResponse, options, values, autoRemediate, remediators2, actions, flow, step, shouldProceedWithEmailAuthenticator, shouldRemediate, _yield$remediate, idxResponseFromRemediation, nextStep, canceled;
    return import_regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idxResponse = data.idxResponse, options = data.options, values = (0, import_values2.default)(data);
            autoRemediate = options.autoRemediate, remediators2 = options.remediators, actions = options.actions, flow = options.flow, step = options.step, shouldProceedWithEmailAuthenticator = options.shouldProceedWithEmailAuthenticator;
            shouldRemediate = autoRemediate !== false && (remediators2 || actions || step);
            if (shouldRemediate) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", data);
          case 5:
            values = (0, import_assign.default)((0, import_assign.default)({}, values), {
              stateHandle: idxResponse.rawIdxState.stateHandle
            });
            _context2.next = 8;
            return remediate(idxResponse, values, {
              remediators: remediators2,
              actions,
              flow,
              step,
              shouldProceedWithEmailAuthenticator
            });
          case 8:
            _yield$remediate = _context2.sent;
            idxResponseFromRemediation = _yield$remediate.idxResponse;
            nextStep = _yield$remediate.nextStep;
            canceled = _yield$remediate.canceled;
            idxResponse = idxResponseFromRemediation;
            return _context2.abrupt("return", (0, import_assign.default)((0, import_assign.default)({}, data), {
              idxResponse,
              nextStep,
              canceled
            }));
          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDataFromRemediate.apply(this, arguments);
}
function getTokens(_x4, _x5) {
  return _getTokens.apply(this, arguments);
}
function _getTokens() {
  _getTokens = _asyncToGenerator(import_regenerator.default.mark(function _callee3(authClient, data) {
    var meta, idxResponse, interactionCode, clientId, codeVerifier, ignoreSignature, redirectUri, urls, scopes, tokenResponse;
    return import_regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            meta = data.meta, idxResponse = data.idxResponse;
            interactionCode = idxResponse.interactionCode;
            clientId = meta.clientId, codeVerifier = meta.codeVerifier, ignoreSignature = meta.ignoreSignature, redirectUri = meta.redirectUri, urls = meta.urls, scopes = meta.scopes;
            _context3.next = 5;
            return authClient.token.exchangeCodeForTokens({
              interactionCode,
              clientId,
              codeVerifier,
              ignoreSignature,
              redirectUri,
              scopes
            }, urls);
          case 5:
            tokenResponse = _context3.sent;
            return _context3.abrupt("return", tokenResponse.tokens);
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTokens.apply(this, arguments);
}
function finalizeData(_x6, _x7) {
  return _finalizeData.apply(this, arguments);
}
function _finalizeData() {
  _finalizeData = _asyncToGenerator(import_regenerator.default.mark(function _callee4(authClient, data) {
    var options, idxResponse, canceled, status, exchangeCodeForTokens2, shouldClearTransaction, clearSharedStorage, interactionCode, tokens, enabledFeatures, availableSteps, messages, terminal;
    return import_regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            options = data.options, idxResponse = data.idxResponse, canceled = data.canceled, status = data.status;
            exchangeCodeForTokens2 = options.exchangeCodeForTokens;
            shouldClearTransaction = false;
            clearSharedStorage = true;
            if (idxResponse) {
              enabledFeatures = getEnabledFeatures(idxResponse);
              availableSteps = getAvailableSteps(idxResponse);
              messages = getMessagesFromResponse(idxResponse);
              terminal = isTerminalResponse(idxResponse);
            }
            if (!terminal) {
              _context4.next = 11;
              break;
            }
            status = IdxStatus.TERMINAL;
            shouldClearTransaction = true;
            clearSharedStorage = false;
            _context4.next = 28;
            break;
          case 11:
            if (!canceled) {
              _context4.next = 16;
              break;
            }
            status = IdxStatus.CANCELED;
            shouldClearTransaction = true;
            _context4.next = 28;
            break;
          case 16:
            if (!(idxResponse === null || idxResponse === void 0 ? void 0 : idxResponse.interactionCode)) {
              _context4.next = 28;
              break;
            }
            interactionCode = idxResponse.interactionCode;
            if (!(exchangeCodeForTokens2 === false)) {
              _context4.next = 23;
              break;
            }
            status = IdxStatus.SUCCESS;
            shouldClearTransaction = false;
            _context4.next = 28;
            break;
          case 23:
            _context4.next = 25;
            return getTokens(authClient, data);
          case 25:
            tokens = _context4.sent;
            status = IdxStatus.SUCCESS;
            shouldClearTransaction = true;
          case 28:
            return _context4.abrupt("return", (0, import_assign.default)((0, import_assign.default)({}, data), {
              status,
              interactionCode,
              tokens,
              shouldClearTransaction,
              clearSharedStorage,
              enabledFeatures,
              availableSteps,
              messages,
              terminal
            }));
          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _finalizeData.apply(this, arguments);
}
function handleError(err, data) {
  var error = data.error, status = data.status, shouldClearTransaction = data.shouldClearTransaction;
  if (isIdxResponse(err)) {
    error = err;
    status = IdxStatus.FAILURE;
    shouldClearTransaction = true;
  } else {
    throw err;
  }
  return (0, import_assign.default)((0, import_assign.default)({}, data), {
    error,
    status,
    shouldClearTransaction
  });
}
function run(_x8) {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator(import_regenerator.default.mark(function _callee5(authClient) {
    var options, data, _data, idxResponse, meta, shouldClearTransaction, clearSharedStorage, status, enabledFeatures, availableSteps, tokens, nextStep, messages, error, interactionCode, rawIdxResponse, _requestDidSucceed, _ref, actions, context, neededToProceed, proceed2, rawIdxState, requestDidSucceed, _args5 = arguments;
    return import_regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            options = _args5.length > 1 && _args5[1] !== void 0 ? _args5[1] : {};
            data = {
              options,
              values: initializeValues(options)
            };
            data = initializeData(authClient, data);
            _context5.prev = 3;
            _context5.next = 6;
            return getDataFromIntrospect(authClient, data);
          case 6:
            data = _context5.sent;
            _context5.next = 9;
            return getDataFromRemediate(data);
          case 9:
            data = _context5.sent;
            _context5.next = 15;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](3);
            data = handleError(_context5.t0, data);
          case 15:
            _context5.next = 17;
            return finalizeData(authClient, data);
          case 17:
            data = _context5.sent;
            _data = data, idxResponse = _data.idxResponse, meta = _data.meta, shouldClearTransaction = _data.shouldClearTransaction, clearSharedStorage = _data.clearSharedStorage, status = _data.status, enabledFeatures = _data.enabledFeatures, availableSteps = _data.availableSteps, tokens = _data.tokens, nextStep = _data.nextStep, messages = _data.messages, error = _data.error, interactionCode = _data.interactionCode;
            if (shouldClearTransaction) {
              authClient.transactionManager.clear({
                clearSharedStorage
              });
            } else {
              saveTransactionMeta(authClient, (0, import_assign.default)({}, meta));
              if (idxResponse) {
                rawIdxResponse = idxResponse.rawIdxState, _requestDidSucceed = idxResponse.requestDidSucceed;
                authClient.transactionManager.saveIdxResponse({
                  rawIdxResponse,
                  requestDidSucceed: _requestDidSucceed
                });
              }
            }
            _ref = idxResponse || {}, actions = _ref.actions, context = _ref.context, neededToProceed = _ref.neededToProceed, proceed2 = _ref.proceed, rawIdxState = _ref.rawIdxState, requestDidSucceed = _ref.requestDidSucceed;
            return _context5.abrupt("return", (0, import_assign.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)((0, import_assign.default)({
              status
            }, meta && {
              meta
            }), enabledFeatures && {
              enabledFeatures
            }), availableSteps && {
              availableSteps
            }), tokens && {
              tokens
            }), nextStep && {
              nextStep
            }), messages && messages.length && {
              messages
            }), error && {
              error
            }), {
              interactionCode,
              actions,
              context,
              neededToProceed,
              proceed: proceed2,
              rawIdxState,
              requestDidSucceed
            }));
          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[3, 12]]);
  }));
  return _run.apply(this, arguments);
}
function authenticate(_x) {
  return _authenticate.apply(this, arguments);
}
function _authenticate() {
  _authenticate = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            if (options.password && !options.authenticator) {
              options.authenticator = AuthenticatorKey.OKTA_PASSWORD;
            }
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), {
              flow: "authenticate"
            })));
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _authenticate.apply(this, arguments);
}
function cancel(_x, _x2) {
  return _cancel.apply(this, arguments);
}
function _cancel() {
  _cancel = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient, options) {
    var meta, flowSpec;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meta = authClient.transactionManager.load();
            flowSpec = getFlowSpecification(authClient, meta.flow);
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)((0, import_assign.default)((0, import_assign.default)({}, options), flowSpec), {
              actions: ["cancel"]
            })));
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _cancel.apply(this, arguments);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = (0, import_construct4.default)(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !import_construct4.default)
    return false;
  if (import_construct4.default.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call((0, import_construct4.default)(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
var EmailVerifyCallbackError = function(_CustomError) {
  _inherits(EmailVerifyCallbackError2, _CustomError);
  var _super = _createSuper(EmailVerifyCallbackError2);
  function EmailVerifyCallbackError2(state, otp) {
    var _this;
    _classCallCheck(this, EmailVerifyCallbackError2);
    _this = _super.call(this, "Enter the OTP code in the originating client: ".concat(otp));
    _this.name = "EmailVerifyCallbackError";
    _this.state = state;
    _this.otp = otp;
    return _this;
  }
  return EmailVerifyCallbackError2;
}(CustomError);
function isEmailVerifyCallbackError(error) {
  return error.name === "EmailVerifyCallbackError";
}
function isEmailVerifyCallback(urlPath) {
  return /(otp=)/i.test(urlPath) && /(state=)/i.test(urlPath);
}
function parseEmailVerifyCallback(urlPath) {
  return urlParamsToObject(urlPath);
}
function handleEmailVerifyCallback(_x, _x2) {
  return _handleEmailVerifyCallback.apply(this, arguments);
}
function _handleEmailVerifyCallback() {
  _handleEmailVerifyCallback = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient, search) {
    var _parseEmailVerifyCall, state, otp;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!isEmailVerifyCallback(search)) {
              _context2.next = 9;
              break;
            }
            _parseEmailVerifyCall = parseEmailVerifyCallback(search), state = _parseEmailVerifyCall.state, otp = _parseEmailVerifyCall.otp;
            if (!authClient.idx.canProceed({
              state
            })) {
              _context2.next = 8;
              break;
            }
            _context2.next = 5;
            return authClient.idx.proceed({
              state,
              otp
            });
          case 5:
            return _context2.abrupt("return", _context2.sent);
          case 8:
            throw new EmailVerifyCallbackError(state, otp);
          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _handleEmailVerifyCallback.apply(this, arguments);
}
function canProceed(authClient) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var meta = getSavedTransactionMeta(authClient, options);
  return !!(meta || options.stateHandle);
}
function proceed(_x) {
  return _proceed.apply(this, arguments);
}
function _proceed() {
  _proceed = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, flow, state, meta, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            if (canProceed(authClient, options)) {
              _context2.next = 3;
              break;
            }
            throw new AuthSdkError("Unable to proceed: saved transaction could not be loaded");
          case 3:
            flow = options.flow, state = options.state;
            if (!flow) {
              meta = getSavedTransactionMeta(authClient, {
                state
              });
              flow = meta === null || meta === void 0 ? void 0 : meta.flow;
            }
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), {
              flow
            })));
          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _proceed.apply(this, arguments);
}
function poll(_x) {
  return _poll.apply(this, arguments);
}
function _poll() {
  _poll = _asyncToGenerator(import_regenerator.default.mark(function _callee2(authClient) {
    var options, _a, transaction, meta, availablePollingRemeditaions, _args2 = arguments;
    return import_regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== void 0 ? _args2[1] : {};
            _context2.next = 3;
            return proceed(authClient, {
              startPolling: true
            });
          case 3:
            transaction = _context2.sent;
            meta = getSavedTransactionMeta(authClient);
            availablePollingRemeditaions = (_a = meta === null || meta === void 0 ? void 0 : meta.remediations) === null || _a === void 0 ? void 0 : (0, import_find.default)(_a).call(_a, function(remediation) {
              return (0, import_includes.default)(remediation).call(remediation, "poll");
            });
            if (!(availablePollingRemeditaions === null || availablePollingRemeditaions === void 0 ? void 0 : availablePollingRemeditaions.length)) {
              warn("No polling remediations available at the current IDX flow stage");
            }
            if (!(0, import_is_integer.default)(options.refresh)) {
              _context2.next = 9;
              break;
            }
            return _context2.abrupt("return", new import_promise2.default(function(resolve, reject) {
              setTimeout(_asyncToGenerator(import_regenerator.default.mark(function _callee() {
                var _a2, _b, refresh;
                return import_regenerator.default.wrap(function _callee$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        try {
                          refresh = (_b = (_a2 = transaction.nextStep) === null || _a2 === void 0 ? void 0 : _a2.poll) === null || _b === void 0 ? void 0 : _b.refresh;
                          if (refresh) {
                            resolve(poll(authClient, {
                              refresh
                            }));
                          } else {
                            resolve(transaction);
                          }
                        } catch (err) {
                          reject(err);
                        }
                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee);
              })), options.refresh);
            }));
          case 9:
            return _context2.abrupt("return", transaction);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _poll.apply(this, arguments);
}
function startTransaction(_x) {
  return _startTransaction.apply(this, arguments);
}
function _startTransaction() {
  _startTransaction = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            authClient.transactionManager.clear();
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)({
              exchangeCodeForTokens: false
            }, options)));
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _startTransaction.apply(this, arguments);
}
function register(_x) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, _yield$startTransacti, enabledFeatures, availableSteps, error, _error, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            if (hasSavedInteractionHandle(authClient)) {
              _context2.next = 13;
              break;
            }
            _context2.next = 4;
            return startTransaction(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), {
              flow: "register",
              autoRemediate: false
            }));
          case 4:
            _yield$startTransacti = _context2.sent;
            enabledFeatures = _yield$startTransacti.enabledFeatures;
            availableSteps = _yield$startTransacti.availableSteps;
            if (!(!options.activationToken && enabledFeatures && !(0, import_includes.default)(enabledFeatures).call(enabledFeatures, IdxFeature.REGISTRATION))) {
              _context2.next = 10;
              break;
            }
            error = new AuthSdkError("Registration is not supported based on your current org configuration.");
            throw error;
          case 10:
            if (!(options.activationToken && (availableSteps === null || availableSteps === void 0 ? void 0 : availableSteps.some(function(_ref) {
              var name = _ref.name;
              return name === "identify";
            })))) {
              _context2.next = 13;
              break;
            }
            _error = new AuthSdkError("activationToken is not supported based on your current org configuration.");
            throw _error;
          case 13:
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), {
              flow: "register"
            })));
          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _register.apply(this, arguments);
}
function recoverPassword(_x) {
  return _recoverPassword.apply(this, arguments);
}
function _recoverPassword() {
  _recoverPassword = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, flowSpec, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            flowSpec = getFlowSpecification(authClient, "recoverPassword");
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), flowSpec)));
          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _recoverPassword.apply(this, arguments);
}
function handleInteractionCodeRedirect(_x, _x2) {
  return _handleInteractionCodeRedirect.apply(this, arguments);
}
function _handleInteractionCodeRedirect() {
  _handleInteractionCodeRedirect = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient, url) {
    var meta, codeVerifier, savedState, _URL, searchParams, state, interactionCode, error, _yield$authClient$tok, tokens;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            meta = authClient.transactionManager.load();
            if (meta) {
              _context2.next = 3;
              break;
            }
            throw new AuthSdkError("No transaction data was found in storage");
          case 3:
            codeVerifier = meta.codeVerifier, savedState = meta.state;
            _URL = new import_url.default(url), searchParams = _URL.searchParams;
            state = searchParams.get("state");
            interactionCode = searchParams.get("interaction_code");
            error = searchParams.get("error");
            if (!error) {
              _context2.next = 10;
              break;
            }
            throw new OAuthError(error, searchParams.get("error_description"));
          case 10:
            if (!(state !== savedState)) {
              _context2.next = 12;
              break;
            }
            throw new AuthSdkError("State in redirect uri does not match with transaction state");
          case 12:
            if (interactionCode) {
              _context2.next = 14;
              break;
            }
            throw new AuthSdkError("Unable to parse interaction_code from the url");
          case 14:
            _context2.next = 16;
            return authClient.token.exchangeCodeForTokens({
              interactionCode,
              codeVerifier
            });
          case 16:
            _yield$authClient$tok = _context2.sent;
            tokens = _yield$authClient$tok.tokens;
            authClient.tokenManager.setTokens(tokens);
          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _handleInteractionCodeRedirect.apply(this, arguments);
}
function unlockAccount(_x) {
  return _unlockAccount.apply(this, arguments);
}
function _unlockAccount() {
  _unlockAccount = _asyncToGenerator(import_regenerator.default.mark(function _callee(authClient) {
    var options, _yield$startTransacti, enabledFeatures, _args = arguments;
    return import_regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};
            options.flow = "unlockAccount";
            if (hasSavedInteractionHandle(authClient)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 5;
            return startTransaction(authClient, (0, import_assign.default)((0, import_assign.default)({}, options), {
              autoRemediate: false
            }));
          case 5:
            _yield$startTransacti = _context2.sent;
            enabledFeatures = _yield$startTransacti.enabledFeatures;
            if (!(enabledFeatures && !(0, import_includes.default)(enabledFeatures).call(enabledFeatures, IdxFeature.ACCOUNT_UNLOCK))) {
              _context2.next = 9;
              break;
            }
            throw new AuthSdkError("Self Service Account Unlock is not supported based on your current org configuration.");
          case 9:
            return _context2.abrupt("return", run(authClient, (0, import_assign.default)({}, options)));
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _unlockAccount.apply(this, arguments);
}
var OktaUserAgent = function() {
  function OktaUserAgent2() {
    _classCallCheck(this, OktaUserAgent2);
    this.environments = ["okta-auth-js/".concat("6.4.0")];
  }
  _createClass(OktaUserAgent2, [{
    key: "addEnvironment",
    value: function addEnvironment(env) {
      this.environments.push(env);
    }
  }, {
    key: "getHttpHeader",
    value: function getHttpHeader() {
      this.maybeAddNodeEnvironment();
      return {
        "X-Okta-User-Agent-Extended": this.environments.join(" ")
      };
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return "6.4.0";
    }
  }, {
    key: "maybeAddNodeEnvironment",
    value: function maybeAddNodeEnvironment() {
      if (isBrowser() || !process || !process.versions) {
        return;
      }
      var version = process.versions.node;
      this.environments.push("nodejs/".concat(version));
    }
  }]);
  return OktaUserAgent2;
}();
var OktaAuth = function() {
  function OktaAuth2(args) {
    var _this = this;
    _classCallCheck(this, OktaAuth2);
    this.features = features;
    var options = this.options = buildOptions(args);
    this.storageManager = new StorageManager(options.storageManager, options.cookies, options.storageUtil);
    this.transactionManager = new TransactionManager((0, import_assign.default)({
      storageManager: this.storageManager
    }, options.transactionManager));
    this._oktaUserAgent = new OktaUserAgent();
    this.tx = {
      status: transactionStatus.bind(null, this),
      resume: resumeTransaction.bind(null, this),
      exists: (0, import_assign.default)(transactionExists.bind(null, this), {
        _get: function _get2(name) {
          var storage = options.storageUtil.storage;
          return storage.get(name);
        }
      }),
      introspect: introspectAuthn.bind(null, this)
    };
    this.pkce = {
      DEFAULT_CODE_CHALLENGE_METHOD: PKCE.DEFAULT_CODE_CHALLENGE_METHOD,
      generateVerifier: PKCE.generateVerifier,
      computeChallenge: PKCE.computeChallenge
    };
    (0, import_assign.default)(this.options.storageUtil, {
      getPKCEStorage: this.storageManager.getLegacyPKCEStorage.bind(this.storageManager),
      getHttpCache: this.storageManager.getHttpCache.bind(this.storageManager)
    });
    this._pending = {
      handleLogin: false
    };
    if (isBrowser()) {
      this.options = (0, import_assign.default)(this.options, {
        redirectUri: toAbsoluteUrl(args.redirectUri, window.location.origin)
      });
    }
    if (!args.maxClockSkew && args.maxClockSkew !== 0) {
      this.options.maxClockSkew = DEFAULT_MAX_CLOCK_SKEW;
    } else {
      this.options.maxClockSkew = args.maxClockSkew;
    }
    this.options.ignoreLifetime = !!args.ignoreLifetime;
    this.session = {
      close: closeSession.bind(null, this),
      exists: sessionExists.bind(null, this),
      get: getSession.bind(null, this),
      refresh: refreshSession.bind(null, this),
      setCookieAndRedirect: setCookieAndRedirect.bind(null, this)
    };
    this._tokenQueue = new PromiseQueue();
    var useQueue = function useQueue2(method) {
      return PromiseQueue.prototype.push.bind(_this._tokenQueue, method, null);
    };
    var getWithRedirectFn = useQueue(getWithRedirect.bind(null, this));
    var getWithRedirectApi = (0, import_assign.default)(getWithRedirectFn, {
      _setLocation: function _setLocation(url) {
        window.location = url;
      }
    });
    var parseFromUrlFn = useQueue(parseFromUrl.bind(null, this));
    var parseFromUrlApi = (0, import_assign.default)(parseFromUrlFn, {
      _getHistory: function _getHistory() {
        return window.history;
      },
      _getLocation: function _getLocation() {
        return window.location;
      },
      _getDocument: function _getDocument() {
        return window.document;
      }
    });
    this.token = {
      prepareTokenParams: prepareTokenParams.bind(null, this),
      exchangeCodeForTokens: exchangeCodeForTokens.bind(null, this),
      getWithoutPrompt: getWithoutPrompt.bind(null, this),
      getWithPopup: getWithPopup.bind(null, this),
      getWithRedirect: getWithRedirectApi,
      parseFromUrl: parseFromUrlApi,
      decode: decodeToken,
      revoke: revokeToken.bind(null, this),
      renew: renewToken.bind(null, this),
      renewTokensWithRefresh: renewTokensWithRefresh.bind(null, this),
      renewTokens: renewTokens.bind(null, this),
      getUserInfo: getUserInfo.bind(null, this),
      verify: verifyToken.bind(null, this),
      isLoginRedirect: isLoginRedirect.bind(null, this)
    };
    var syncMethods = [
      "decode",
      "isLoginRedirect",
      "getWithRedirect",
      "parseFromUrl"
    ];
    (0, import_keys.default)(this.token).forEach(function(key) {
      if ((0, import_index_of2.default)(syncMethods).call(syncMethods, key) >= 0) {
        return;
      }
      var method = _this.token[key];
      _this.token[key] = PromiseQueue.prototype.push.bind(_this._tokenQueue, method, null);
    });
    var boundStartTransaction = startTransaction.bind(null, this);
    this.idx = {
      interact: interact.bind(null, this),
      introspect: introspect.bind(null, this),
      authenticate: authenticate.bind(null, this),
      register: register.bind(null, this),
      start: boundStartTransaction,
      startTransaction: boundStartTransaction,
      poll: poll.bind(null, this),
      proceed: proceed.bind(null, this),
      cancel: cancel.bind(null, this),
      recoverPassword: recoverPassword.bind(null, this),
      handleInteractionCodeRedirect: handleInteractionCodeRedirect.bind(null, this),
      isInteractionRequired: isInteractionRequired.bind(null, this),
      isInteractionRequiredError,
      handleEmailVerifyCallback: handleEmailVerifyCallback.bind(null, this),
      isEmailVerifyCallback,
      parseEmailVerifyCallback,
      isEmailVerifyCallbackError,
      getSavedTransactionMeta: getSavedTransactionMeta.bind(null, this),
      createTransactionMeta: createTransactionMeta.bind(null, this),
      getTransactionMeta: getTransactionMeta.bind(null, this),
      saveTransactionMeta: saveTransactionMeta.bind(null, this),
      clearTransactionMeta: clearTransactionMeta.bind(null, this),
      isTransactionMetaValid,
      setFlow: function setFlow(flow) {
        _this.options.flow = flow;
      },
      getFlow: function getFlow() {
        return _this.options.flow;
      },
      canProceed: canProceed.bind(null, this),
      unlockAccount: unlockAccount.bind(null, this)
    };
    this.http = {
      setRequestHeader: setRequestHeader.bind(null, this)
    };
    this.fingerprint = fingerprint.bind(null, this);
    this.emitter = new import_tiny_emitter.default();
    this.tokenManager = new TokenManager(this, args.tokenManager);
    this.authStateManager = new AuthStateManager(this);
    this.serviceManager = new ServiceManager(this, args.services);
  }
  _createClass(OktaAuth2, [{
    key: "start",
    value: function start() {
      this.tokenManager.start();
      if (!this.token.isLoginRedirect()) {
        this.authStateManager.updateAuthState();
      }
      this.serviceManager.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.tokenManager.stop();
      this.serviceManager.stop();
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      this.options.headers = (0, import_assign.default)({}, this.options.headers, headers);
    }
  }, {
    key: "signIn",
    value: function() {
      var _signIn = _asyncToGenerator(import_regenerator.default.mark(function _callee(opts) {
        return import_regenerator.default.wrap(function _callee$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.signInWithCredentials(opts));
              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee, this);
      }));
      function signIn(_x) {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "signInWithCredentials",
    value: function() {
      var _signInWithCredentials = _asyncToGenerator(import_regenerator.default.mark(function _callee2(opts) {
        var _this2 = this;
        var _postToTransaction;
        return import_regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                opts = clone(opts || {});
                _postToTransaction = function _postToTransaction2(options) {
                  delete opts.sendFingerprint;
                  return postToTransaction(_this2, "/api/v1/authn", opts, options);
                };
                if (opts.sendFingerprint) {
                  _context2.next = 4;
                  break;
                }
                return _context2.abrupt("return", _postToTransaction());
              case 4:
                return _context2.abrupt("return", this.fingerprint().then(function(fingerprint2) {
                  return _postToTransaction({
                    headers: {
                      "X-Device-Fingerprint": fingerprint2
                    }
                  });
                }));
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function signInWithCredentials(_x2) {
        return _signInWithCredentials.apply(this, arguments);
      }
      return signInWithCredentials;
    }()
  }, {
    key: "signInWithRedirect",
    value: function() {
      var _signInWithRedirect = _asyncToGenerator(import_regenerator.default.mark(function _callee3() {
        var opts, originalUri, additionalParams, params, _args3 = arguments;
        return import_regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                opts = _args3.length > 0 && _args3[0] !== void 0 ? _args3[0] : {};
                originalUri = opts.originalUri, additionalParams = __rest(opts, ["originalUri"]);
                if (!this._pending.handleLogin) {
                  _context3.next = 4;
                  break;
                }
                return _context3.abrupt("return");
              case 4:
                this._pending.handleLogin = true;
                _context3.prev = 5;
                if (originalUri) {
                  this.setOriginalUri(originalUri);
                }
                params = (0, import_assign.default)({
                  scopes: this.options.scopes || ["openid", "email", "profile"]
                }, additionalParams);
                _context3.next = 10;
                return this.token.getWithRedirect(params);
              case 10:
                _context3.prev = 10;
                this._pending.handleLogin = false;
                return _context3.finish(10);
              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, , 10, 13]]);
      }));
      function signInWithRedirect() {
        return _signInWithRedirect.apply(this, arguments);
      }
      return signInWithRedirect;
    }()
  }, {
    key: "closeSession",
    value: function closeSession2() {
      var _this3 = this;
      return this.session.close().then(_asyncToGenerator(import_regenerator.default.mark(function _callee4() {
        return import_regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this3.tokenManager.clear();
              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))).catch(function(e) {
        if (e.name === "AuthApiError" && e.errorCode === "E0000007") {
          return null;
        }
        throw e;
      });
    }
  }, {
    key: "revokeAccessToken",
    value: function() {
      var _revokeAccessToken = _asyncToGenerator(import_regenerator.default.mark(function _callee5(accessToken) {
        var accessTokenKey;
        return import_regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (accessToken) {
                  _context5.next = 6;
                  break;
                }
                _context5.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                accessToken = _context5.sent.accessToken;
                accessTokenKey = this.tokenManager.getStorageKeyByType("accessToken");
                this.tokenManager.remove(accessTokenKey);
              case 6:
                if (accessToken) {
                  _context5.next = 8;
                  break;
                }
                return _context5.abrupt("return", import_promise2.default.resolve(null));
              case 8:
                return _context5.abrupt("return", this.token.revoke(accessToken));
              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function revokeAccessToken(_x3) {
        return _revokeAccessToken.apply(this, arguments);
      }
      return revokeAccessToken;
    }()
  }, {
    key: "revokeRefreshToken",
    value: function() {
      var _revokeRefreshToken = _asyncToGenerator(import_regenerator.default.mark(function _callee6(refreshToken) {
        var refreshTokenKey;
        return import_regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (refreshToken) {
                  _context6.next = 6;
                  break;
                }
                _context6.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                refreshToken = _context6.sent.refreshToken;
                refreshTokenKey = this.tokenManager.getStorageKeyByType("refreshToken");
                this.tokenManager.remove(refreshTokenKey);
              case 6:
                if (refreshToken) {
                  _context6.next = 8;
                  break;
                }
                return _context6.abrupt("return", import_promise2.default.resolve(null));
              case 8:
                return _context6.abrupt("return", this.token.revoke(refreshToken));
              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function revokeRefreshToken(_x4) {
        return _revokeRefreshToken.apply(this, arguments);
      }
      return revokeRefreshToken;
    }()
  }, {
    key: "getSignOutRedirectUrl",
    value: function getSignOutRedirectUrl() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var idToken = options.idToken, postLogoutRedirectUri = options.postLogoutRedirectUri, state = options.state;
      if (!idToken) {
        idToken = this.tokenManager.getTokensSync().idToken;
      }
      if (!idToken) {
        return "";
      }
      if (!postLogoutRedirectUri) {
        postLogoutRedirectUri = this.options.postLogoutRedirectUri;
      }
      var logoutUrl = getOAuthUrls(this).logoutUrl;
      var idTokenHint = idToken.idToken;
      var logoutUri = logoutUrl + "?id_token_hint=" + encodeURIComponent(idTokenHint);
      if (postLogoutRedirectUri) {
        logoutUri += "&post_logout_redirect_uri=" + encodeURIComponent(postLogoutRedirectUri);
      }
      if (state) {
        logoutUri += "&state=" + encodeURIComponent(state);
      }
      return logoutUri;
    }
  }, {
    key: "signOut",
    value: function() {
      var _signOut = _asyncToGenerator(import_regenerator.default.mark(function _callee7(options) {
        var defaultUri, currentUri, postLogoutRedirectUri, accessToken, refreshToken, revokeAccessToken, revokeRefreshToken, logoutUri;
        return import_regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = (0, import_assign.default)({}, options);
                defaultUri = window.location.origin;
                currentUri = window.location.href;
                postLogoutRedirectUri = options.postLogoutRedirectUri || this.options.postLogoutRedirectUri || defaultUri;
                accessToken = options.accessToken;
                refreshToken = options.refreshToken;
                revokeAccessToken = options.revokeAccessToken !== false;
                revokeRefreshToken = options.revokeRefreshToken !== false;
                if (revokeRefreshToken && typeof refreshToken === "undefined") {
                  refreshToken = this.tokenManager.getTokensSync().refreshToken;
                }
                if (revokeAccessToken && typeof accessToken === "undefined") {
                  accessToken = this.tokenManager.getTokensSync().accessToken;
                }
                if (!options.idToken) {
                  options.idToken = this.tokenManager.getTokensSync().idToken;
                }
                if (!(revokeRefreshToken && refreshToken)) {
                  _context7.next = 14;
                  break;
                }
                _context7.next = 14;
                return this.revokeRefreshToken(refreshToken);
              case 14:
                if (!(revokeAccessToken && accessToken)) {
                  _context7.next = 17;
                  break;
                }
                _context7.next = 17;
                return this.revokeAccessToken(accessToken);
              case 17:
                logoutUri = this.getSignOutRedirectUrl((0, import_assign.default)((0, import_assign.default)({}, options), {
                  postLogoutRedirectUri
                }));
                if (logoutUri) {
                  _context7.next = 22;
                  break;
                }
                return _context7.abrupt("return", this.closeSession().then(function() {
                  if (postLogoutRedirectUri === currentUri) {
                    window.location.reload();
                  } else {
                    window.location.assign(postLogoutRedirectUri);
                  }
                }));
              case 22:
                if (options.clearTokensBeforeRedirect) {
                  this.tokenManager.clear();
                } else {
                  this.tokenManager.addPendingRemoveFlags();
                }
                window.location.assign(logoutUri);
              case 24:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function signOut(_x5) {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "webfinger",
    value: function webfinger(opts) {
      var url = "/.well-known/webfinger" + toQueryString(opts);
      var options = {
        headers: {
          "Accept": "application/jrd+json"
        }
      };
      return get(this, url, options);
    }
  }, {
    key: "isAuthenticated",
    value: function() {
      var _isAuthenticated = _asyncToGenerator(import_regenerator.default.mark(function _callee8() {
        var options, _this$tokenManager$ge, autoRenew, autoRemove, shouldRenew, shouldRemove, _this$tokenManager$ge2, accessToken, _this$tokenManager$ge3, idToken, _args8 = arguments;
        return import_regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 0 && _args8[0] !== void 0 ? _args8[0] : {};
                _this$tokenManager$ge = this.tokenManager.getOptions(), autoRenew = _this$tokenManager$ge.autoRenew, autoRemove = _this$tokenManager$ge.autoRemove;
                shouldRenew = options.onExpiredToken ? options.onExpiredToken === "renew" : autoRenew;
                shouldRemove = options.onExpiredToken ? options.onExpiredToken === "remove" : autoRemove;
                _this$tokenManager$ge2 = this.tokenManager.getTokensSync(), accessToken = _this$tokenManager$ge2.accessToken;
                if (!(accessToken && this.tokenManager.hasExpired(accessToken))) {
                  _context8.next = 19;
                  break;
                }
                accessToken = void 0;
                if (!shouldRenew) {
                  _context8.next = 18;
                  break;
                }
                _context8.prev = 8;
                _context8.next = 11;
                return this.tokenManager.renew("accessToken");
              case 11:
                accessToken = _context8.sent;
                _context8.next = 16;
                break;
              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](8);
              case 16:
                _context8.next = 19;
                break;
              case 18:
                if (shouldRemove) {
                  this.tokenManager.remove("accessToken");
                }
              case 19:
                _this$tokenManager$ge3 = this.tokenManager.getTokensSync(), idToken = _this$tokenManager$ge3.idToken;
                if (!(idToken && this.tokenManager.hasExpired(idToken))) {
                  _context8.next = 34;
                  break;
                }
                idToken = void 0;
                if (!shouldRenew) {
                  _context8.next = 33;
                  break;
                }
                _context8.prev = 23;
                _context8.next = 26;
                return this.tokenManager.renew("idToken");
              case 26:
                idToken = _context8.sent;
                _context8.next = 31;
                break;
              case 29:
                _context8.prev = 29;
                _context8.t1 = _context8["catch"](23);
              case 31:
                _context8.next = 34;
                break;
              case 33:
                if (shouldRemove) {
                  this.tokenManager.remove("idToken");
                }
              case 34:
                return _context8.abrupt("return", !!(accessToken && idToken));
              case 35:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[8, 14], [23, 29]]);
      }));
      function isAuthenticated() {
        return _isAuthenticated.apply(this, arguments);
      }
      return isAuthenticated;
    }()
  }, {
    key: "getUser",
    value: function() {
      var _getUser = _asyncToGenerator(import_regenerator.default.mark(function _callee9() {
        var _this$tokenManager$ge4, idToken, accessToken;
        return import_regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$tokenManager$ge4 = this.tokenManager.getTokensSync(), idToken = _this$tokenManager$ge4.idToken, accessToken = _this$tokenManager$ge4.accessToken;
                return _context9.abrupt("return", this.token.getUserInfo(accessToken, idToken));
              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getUser() {
        return _getUser.apply(this, arguments);
      }
      return getUser;
    }()
  }, {
    key: "getIdToken",
    value: function getIdToken() {
      var _this$tokenManager$ge5 = this.tokenManager.getTokensSync(), idToken = _this$tokenManager$ge5.idToken;
      return idToken ? idToken.idToken : void 0;
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this$tokenManager$ge6 = this.tokenManager.getTokensSync(), accessToken = _this$tokenManager$ge6.accessToken;
      return accessToken ? accessToken.accessToken : void 0;
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      var _this$tokenManager$ge7 = this.tokenManager.getTokensSync(), refreshToken = _this$tokenManager$ge7.refreshToken;
      return refreshToken ? refreshToken.refreshToken : void 0;
    }
  }, {
    key: "storeTokensFromRedirect",
    value: function() {
      var _storeTokensFromRedirect = _asyncToGenerator(import_regenerator.default.mark(function _callee10() {
        var _yield$this$token$par, tokens;
        return import_regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.token.parseFromUrl();
              case 2:
                _yield$this$token$par = _context10.sent;
                tokens = _yield$this$token$par.tokens;
                this.tokenManager.setTokens(tokens);
              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function storeTokensFromRedirect() {
        return _storeTokensFromRedirect.apply(this, arguments);
      }
      return storeTokensFromRedirect;
    }()
  }, {
    key: "setOriginalUri",
    value: function setOriginalUri(originalUri, state) {
      var sessionStorage2 = storageUtil.getSessionStorage();
      sessionStorage2.setItem(REFERRER_PATH_STORAGE_KEY, originalUri);
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.setItem(state, originalUri);
      }
    }
  }, {
    key: "getOriginalUri",
    value: function getOriginalUri(state) {
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        var originalUri = sharedStorage.getItem(state);
        if (originalUri) {
          return originalUri;
        }
      }
      var storage = storageUtil.getSessionStorage();
      return storage ? storage.getItem(REFERRER_PATH_STORAGE_KEY) || void 0 : void 0;
    }
  }, {
    key: "removeOriginalUri",
    value: function removeOriginalUri(state) {
      var storage = storageUtil.getSessionStorage();
      storage.removeItem(REFERRER_PATH_STORAGE_KEY);
      state = state || this.options.state;
      if (state) {
        var sharedStorage = this.storageManager.getOriginalUriStorage();
        sharedStorage.removeItem && sharedStorage.removeItem(state);
      }
    }
  }, {
    key: "isLoginRedirect",
    value: function isLoginRedirect$1() {
      return isLoginRedirect(this);
    }
  }, {
    key: "handleLoginRedirect",
    value: function() {
      var _handleLoginRedirect = _asyncToGenerator(import_regenerator.default.mark(function _callee11(tokens, originalUri) {
        var state, oAuthResponse, restoreOriginalUri;
        return import_regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                state = this.options.state;
                if (!tokens) {
                  _context11.next = 6;
                  break;
                }
                this.tokenManager.setTokens(tokens);
                originalUri = originalUri || this.getOriginalUri(this.options.state);
                _context11.next = 25;
                break;
              case 6:
                if (!this.isLoginRedirect()) {
                  _context11.next = 24;
                  break;
                }
                _context11.prev = 7;
                _context11.next = 10;
                return parseOAuthResponseFromUrl(this, {});
              case 10:
                oAuthResponse = _context11.sent;
                state = oAuthResponse.state;
                originalUri = originalUri || this.getOriginalUri(state);
                _context11.next = 15;
                return this.storeTokensFromRedirect();
              case 15:
                _context11.next = 22;
                break;
              case 17:
                _context11.prev = 17;
                _context11.t0 = _context11["catch"](7);
                _context11.next = 21;
                return this.authStateManager.updateAuthState();
              case 21:
                throw _context11.t0;
              case 22:
                _context11.next = 25;
                break;
              case 24:
                return _context11.abrupt("return");
              case 25:
                _context11.next = 27;
                return this.authStateManager.updateAuthState();
              case 27:
                this.removeOriginalUri(state);
                restoreOriginalUri = this.options.restoreOriginalUri;
                if (!restoreOriginalUri) {
                  _context11.next = 34;
                  break;
                }
                _context11.next = 32;
                return restoreOriginalUri(this, originalUri);
              case 32:
                _context11.next = 35;
                break;
              case 34:
                if (originalUri) {
                  window.location.replace(originalUri);
                }
              case 35:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[7, 17]]);
      }));
      function handleLoginRedirect(_x6, _x7) {
        return _handleLoginRedirect.apply(this, arguments);
      }
      return handleLoginRedirect;
    }()
  }, {
    key: "isPKCE",
    value: function isPKCE() {
      return !!this.options.pkce;
    }
  }, {
    key: "hasResponseType",
    value: function hasResponseType(responseType) {
      var hasResponseType2 = false;
      if (Array.isArray(this.options.responseType) && this.options.responseType.length) {
        var _context12;
        hasResponseType2 = (0, import_index_of2.default)(_context12 = this.options.responseType).call(_context12, responseType) >= 0;
      } else {
        hasResponseType2 = this.options.responseType === responseType;
      }
      return hasResponseType2;
    }
  }, {
    key: "isAuthorizationCodeFlow",
    value: function isAuthorizationCodeFlow() {
      return this.hasResponseType("code");
    }
  }, {
    key: "getIssuerOrigin",
    value: function getIssuerOrigin() {
      return this.options.issuer.split("/oauth2/")[0];
    }
  }, {
    key: "forgotPassword",
    value: function forgotPassword(opts) {
      return postToTransaction(this, "/api/v1/authn/recovery/password", opts);
    }
  }, {
    key: "unlockAccount",
    value: function unlockAccount2(opts) {
      return postToTransaction(this, "/api/v1/authn/recovery/unlock", opts);
    }
  }, {
    key: "verifyRecoveryToken",
    value: function verifyRecoveryToken(opts) {
      return postToTransaction(this, "/api/v1/authn/recovery/token", opts);
    }
  }, {
    key: "invokeApiMethod",
    value: function() {
      var _invokeApiMethod = _asyncToGenerator(import_regenerator.default.mark(function _callee12(options) {
        var accessToken;
        return import_regenerator.default.wrap(function _callee12$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (options.accessToken) {
                  _context13.next = 5;
                  break;
                }
                _context13.next = 3;
                return this.tokenManager.getTokens();
              case 3:
                accessToken = _context13.sent.accessToken;
                options.accessToken = accessToken === null || accessToken === void 0 ? void 0 : accessToken.accessToken;
              case 5:
                return _context13.abrupt("return", httpRequest(this, options));
              case 6:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee12, this);
      }));
      function invokeApiMethod(_x8) {
        return _invokeApiMethod.apply(this, arguments);
      }
      return invokeApiMethod;
    }()
  }]);
  return OktaAuth2;
}();
OktaAuth.features = features;
OktaAuth.crypto = crypto$1;
OktaAuth.webauthn = webauthn;
OktaAuth.features = OktaAuth.prototype.features = features;
(0, import_assign.default)(OktaAuth, {
  constants
});

export {
  AuthApiError,
  AuthPollStopError,
  AuthSdkError,
  OAuthError,
  isAuthApiError,
  getNativeConsole,
  getConsole,
  warn,
  deprecate,
  deprecateWrap,
  isoToUTCString,
  genRandomString,
  delay,
  bind,
  extend,
  removeNils,
  clone,
  omit,
  find,
  getLink,
  isString,
  isObject,
  isNumber,
  isFunction,
  isPromise,
  isAbsoluteUrl,
  toAbsoluteUrl,
  toRelativeUrl,
  toQueryString,
  removeTrailingSlash,
  crypto$1,
  STATE_TOKEN_KEY_NAME,
  DEFAULT_POLLING_DELAY,
  DEFAULT_MAX_CLOCK_SKEW,
  DEFAULT_CACHE_DURATION,
  REDIRECT_OAUTH_PARAMS_NAME,
  REDIRECT_STATE_COOKIE_NAME,
  REDIRECT_NONCE_COOKIE_NAME,
  TOKEN_STORAGE_NAME,
  CACHE_STORAGE_NAME,
  PKCE_STORAGE_NAME,
  TRANSACTION_STORAGE_NAME,
  SHARED_TRANSACTION_STORAGE_NAME,
  ORIGINAL_URI_STORAGE_NAME,
  IDX_RESPONSE_STORAGE_NAME,
  ACCESS_TOKEN_STORAGE_KEY,
  ID_TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
  REFERRER_PATH_STORAGE_KEY,
  MIN_VERIFIER_LENGTH,
  MAX_VERIFIER_LENGTH,
  DEFAULT_CODE_CHALLENGE_METHOD,
  IDX_API_VERSION,
  addStateToken,
  getStateToken,
  getPollFn,
  AuthTransaction,
  transactionStatus,
  resumeTransaction,
  introspectAuthn,
  transactionStep,
  transactionExists,
  postToTransaction,
  PKCE,
  convertTokenParamsToOAuthParams,
  buildAuthorizeParams,
  postToTokenEndpoint,
  postRefreshToken,
  getWellKnown,
  getKey,
  addListener,
  removeListener,
  loadFrame,
  loadPopup,
  addPostMessageListener,
  generateState,
  generateNonce,
  getOAuthBaseUrl,
  getOAuthDomain,
  getOAuthUrls,
  getDefaultTokenParams,
  isInteractionRequiredError,
  isAuthorizationCodeError,
  hasTokensInHash,
  hasAuthorizationCode,
  hasInteractionCode,
  hasErrorInUrl,
  isRedirectUri,
  isCodeFlow,
  getHashOrSearch,
  isLoginRedirect,
  isInteractionRequired,
  createOAuthMeta,
  assertPKCESupport,
  validateCodeChallengeMethod,
  preparePKCE,
  prepareTokenParams,
  isSameRefreshToken,
  isRefreshTokenError,
  urlParamsToObject,
  validateClaims,
  isOAuthTransactionMeta,
  isPKCETransactionMeta,
  isIdxTransactionMeta,
  isCustomAuthTransactionMeta,
  isTransactionMeta,
  IdxStatus,
  AuthenticatorKey,
  IdxFeature,
  isAuthenticator,
  isToken,
  isAccessToken,
  isIDToken,
  isRefreshToken,
  validateToken,
  decodeToken,
  revokeToken,
  exchangeCodeForTokens,
  verifyToken,
  handleOAuthResponse,
  getToken,
  getWithoutPrompt,
  renewTokensWithRefresh,
  renewToken,
  renewTokens,
  getUserInfo,
  getWithPopup,
  getWithRedirect,
  parseFromUrl,
  EVENT_EXPIRED,
  EVENT_RENEWED,
  EVENT_ADDED,
  EVENT_REMOVED,
  EVENT_ERROR,
  TokenManager,
  INITIAL_AUTH_STATE,
  AuthStateManager,
  StorageManager,
  createTransactionMeta,
  hasSavedInteractionHandle,
  getSavedTransactionMeta,
  getTransactionMeta,
  saveTransactionMeta,
  clearTransactionMeta,
  isTransactionMetaValid,
  isTransactionMetaValidForFlow,
  isTransactionMetaValidForOptions,
  interact,
  introspect,
  authenticate,
  cancel,
  isEmailVerifyCallbackError,
  isEmailVerifyCallback,
  parseEmailVerifyCallback,
  handleEmailVerifyCallback,
  canProceed,
  proceed,
  poll,
  startTransaction,
  register,
  recoverPassword,
  handleInteractionCodeRedirect,
  unlockAccount,
  OktaAuth
};
/*! Bundled license information:

@babel/runtime-corejs3/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)

@okta/okta-auth-js/esm/esm.browser.js:
  (*!
   * Copyright (c) 2015-present, Okta, Inc. and/or its affiliates. All rights reserved.
   * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
   *
   * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
   * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * 
   * See the License for the specific language governing permissions and limitations under the License.
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-DFRJFPBS.js.map
