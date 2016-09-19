(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var runtime_1 = __webpack_require__(2);
	var jws = __webpack_require__(315);
	var jw = jws;
	var IndexHTTPService = (function () {
	    function IndexHTTPService() {
	    }
	    IndexHTTPService.prototype.index = function (request, response) {
	    };
	    IndexHTTPService.prototype.robots = function (request, response) {
	    };
	    __decorate([
	        runtime_1.http.GET('www', '/')
	    ], IndexHTTPService.prototype, "index", null);
	    __decorate([
	        runtime_1.http.GET('www', '/robots.txt')
	    ], IndexHTTPService.prototype, "robots", null);
	    return IndexHTTPService;
	}());
	exports.IndexHTTPService = IndexHTTPService;
	//# sourceMappingURL=index.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(3);
	__export(__webpack_require__(310));
	__export(__webpack_require__(311));
	var http_1 = __webpack_require__(312);
	exports.http = http_1.http;
	var storage_1 = __webpack_require__(313);
	exports.storage = storage_1.storage;
	var _handler = __webpack_require__(314);
	exports.handler = _handler;
	//# sourceMappingURL=index.js.map

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(295);
	__webpack_require__(166);
	__webpack_require__(297);
	__webpack_require__(296);
	__webpack_require__(298);
	__webpack_require__(299);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(304);
	__webpack_require__(305);
	__webpack_require__(306);
	__webpack_require__(308);
	__webpack_require__(309);
	module.exports = __webpack_require__(11);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(59);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(213);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(293);
	__webpack_require__(294);
	module.exports = __webpack_require__(11);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(20)
	  , META           = __webpack_require__(24).KEY
	  , $fails         = __webpack_require__(9)
	  , shared         = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(26)
	  , uid            = __webpack_require__(21)
	  , wks            = __webpack_require__(27)
	  , wksExt         = __webpack_require__(28)
	  , wksDefine      = __webpack_require__(29)
	  , keyOf          = __webpack_require__(31)
	  , enumKeys       = __webpack_require__(44)
	  , isArray        = __webpack_require__(47)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(18)
	  , createDesc     = __webpack_require__(19)
	  , _create        = __webpack_require__(48)
	  , gOPNExt        = __webpack_require__(51)
	  , $GOPD          = __webpack_require__(53)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(32)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(46).f  = $propertyIsEnumerable;
	  __webpack_require__(45).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(30)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(9)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(11)
	  , hide      = __webpack_require__(12)
	  , redefine  = __webpack_require__(20)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(9)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(12)
	  , has       = __webpack_require__(7)
	  , SRC       = __webpack_require__(21)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(11).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(21)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(13).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(9)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(27)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(25)('wks')
	  , uid        = __webpack_require__(21)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(27);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(11)
	  , LIBRARY        = __webpack_require__(30)
	  , wksExt         = __webpack_require__(28)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(37);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(25)('keys')
	  , uid    = __webpack_require__(21);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(32)
	  , gOPS    = __webpack_require__(45)
	  , pIE     = __webpack_require__(46);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(50).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(32);

	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , gOPN      = __webpack_require__(52).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(33)
	  , hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(19)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(18)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(48)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperties: __webpack_require__(49)});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(34)
	  , $getOwnPropertyDescriptor = __webpack_require__(53).f;

	__webpack_require__(58)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(9);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(60)
	  , $getPrototypeOf = __webpack_require__(61);

	__webpack_require__(58)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(37);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(60)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(60)
	  , $keys    = __webpack_require__(32);

	__webpack_require__(58)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(58)('getOwnPropertyNames', function(){
	  return __webpack_require__(51).f;
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(32)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(60)
	  , IObject  = __webpack_require__(35)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(9)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {is: __webpack_require__(73)});

/***/ },
/* 73 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(75).set});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(22)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(77)
	  , test    = {};
	test[__webpack_require__(27)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(20)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(27)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(10);

	$export($export.P, 'Function', {bind: __webpack_require__(79)});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(23)
	  , isObject   = __webpack_require__(15)
	  , invoke     = __webpack_require__(80)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13).f
	  , createDesc = __webpack_require__(19)
	  , has        = __webpack_require__(7)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(15)
	  , getPrototypeOf = __webpack_require__(61)
	  , HAS_INSTANCE   = __webpack_require__(27)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(13).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , $parseInt = __webpack_require__(84);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(6).parseInt
	  , $trim     = __webpack_require__(85).trim
	  , ws        = __webpack_require__(86)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , defined = __webpack_require__(37)
	  , fails   = __webpack_require__(9)
	  , spaces  = __webpack_require__(86)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(10)
	  , $parseFloat = __webpack_require__(88);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(6).parseFloat
	  , $trim       = __webpack_require__(85).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(86) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , has               = __webpack_require__(7)
	  , cof               = __webpack_require__(36)
	  , inheritIfRequired = __webpack_require__(90)
	  , toPrimitive       = __webpack_require__(18)
	  , fails             = __webpack_require__(9)
	  , gOPN              = __webpack_require__(52).f
	  , gOPD              = __webpack_require__(53).f
	  , dP                = __webpack_require__(13).f
	  , $trim             = __webpack_require__(85).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(48)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(8) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(20)(global, NUMBER, $Number);
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(15)
	  , setPrototypeOf = __webpack_require__(75).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , toInteger    = __webpack_require__(40)
	  , aNumberValue = __webpack_require__(92)
	  , repeat       = __webpack_require__(93)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(9)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(36);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(37);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , $fails       = __webpack_require__(9)
	  , aNumberValue = __webpack_require__(92)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(10)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {isInteger: __webpack_require__(98)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(15)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(10)
	  , isInteger = __webpack_require__(98)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(10)
	  , $parseFloat = __webpack_require__(88);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , $parseInt = __webpack_require__(84);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(10)
	  , log1p   = __webpack_require__(106)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(10)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(10)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(10)
	  , sign    = __webpack_require__(110);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(10)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(10)
	  , $expm1  = __webpack_require__(114);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 114 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(10)
	  , sign      = __webpack_require__(110)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(10)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(10)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {log1p: __webpack_require__(106)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {sign: __webpack_require__(110)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(114)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(114)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(10)
	  , toIndex        = __webpack_require__(41)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(39);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(85)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(129)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(130)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(37);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(30)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(20)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(131)
	  , $iterCreate    = __webpack_require__(132)
	  , setToStringTag = __webpack_require__(26)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(27)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(48)
	  , descriptor     = __webpack_require__(19)
	  , setToStringTag = __webpack_require__(26)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(27)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(129)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(10)
	  , toLength  = __webpack_require__(39)
	  , context   = __webpack_require__(135)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(136)
	  , defined  = __webpack_require__(37);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(15)
	  , cof      = __webpack_require__(36)
	  , MATCH    = __webpack_require__(27)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(27)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(10)
	  , context  = __webpack_require__(135)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(93)
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(10)
	  , toLength    = __webpack_require__(39)
	  , context     = __webpack_require__(135)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(142)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , fails   = __webpack_require__(9)
	  , defined = __webpack_require__(37)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(142)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(142)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(142)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(142)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(142)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(142)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(142)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(142)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(142)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(142)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(142)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(142)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(10);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(10)
	  , toObject    = __webpack_require__(60)
	  , toPrimitive = __webpack_require__(18);

	$export($export.P + $export.F * __webpack_require__(9)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(10)
	  , fails   = __webpack_require__(9)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(20)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(27)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(12)(proto, TO_PRIMITIVE, __webpack_require__(160));

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(14)
	  , toPrimitive = __webpack_require__(18)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(10);

	$export($export.S, 'Array', {isArray: __webpack_require__(47)});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(22)
	  , $export        = __webpack_require__(10)
	  , toObject       = __webpack_require__(60)
	  , call           = __webpack_require__(163)
	  , isArrayIter    = __webpack_require__(164)
	  , toLength       = __webpack_require__(39)
	  , createProperty = __webpack_require__(165)
	  , getIterFn      = __webpack_require__(166);

	$export($export.S + $export.F * !__webpack_require__(167)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(131)
	  , ITERATOR   = __webpack_require__(27)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13)
	  , createDesc      = __webpack_require__(19);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(77)
	  , ITERATOR  = __webpack_require__(27)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(11).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(27)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(10)
	  , createProperty = __webpack_require__(165);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(10)
	  , toIObject = __webpack_require__(34)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(35) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(9);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(10)
	  , html       = __webpack_require__(50)
	  , cof        = __webpack_require__(36)
	  , toIndex    = __webpack_require__(41)
	  , toLength   = __webpack_require__(39)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(9)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(10)
	  , aFunction = __webpack_require__(23)
	  , toObject  = __webpack_require__(60)
	  , fails     = __webpack_require__(9)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(10)
	  , $forEach = __webpack_require__(174)(0)
	  , STRICT   = __webpack_require__(170)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(22)
	  , IObject  = __webpack_require__(35)
	  , toObject = __webpack_require__(60)
	  , toLength = __webpack_require__(39)
	  , asc      = __webpack_require__(175);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(176);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , isArray  = __webpack_require__(47)
	  , SPECIES  = __webpack_require__(27)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $map    = __webpack_require__(174)(1);

	$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $filter = __webpack_require__(174)(2);

	$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $some   = __webpack_require__(174)(3);

	$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $every  = __webpack_require__(174)(4);

	$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(23)
	  , toObject  = __webpack_require__(60)
	  , IObject   = __webpack_require__(35)
	  , toLength  = __webpack_require__(39);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(10)
	  , $indexOf      = __webpack_require__(38)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(10)
	  , toIObject     = __webpack_require__(34)
	  , toInteger     = __webpack_require__(40)
	  , toLength      = __webpack_require__(39)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(187)});

	__webpack_require__(188)('copyWithin');

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(60)
	  , toIndex  = __webpack_require__(41)
	  , toLength = __webpack_require__(39);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(27)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {fill: __webpack_require__(190)});

	__webpack_require__(188)('fill');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(60)
	  , toIndex  = __webpack_require__(41)
	  , toLength = __webpack_require__(39);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(174)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(174)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)('Array');

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , dP          = __webpack_require__(13)
	  , DESCRIPTORS = __webpack_require__(8)
	  , SPECIES     = __webpack_require__(27)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(188)
	  , step             = __webpack_require__(196)
	  , Iterators        = __webpack_require__(131)
	  , toIObject        = __webpack_require__(34);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(130)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(6)
	  , inheritIfRequired = __webpack_require__(90)
	  , dP                = __webpack_require__(13).f
	  , gOPN              = __webpack_require__(52).f
	  , isRegExp          = __webpack_require__(136)
	  , $flags            = __webpack_require__(198)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(9)(function(){
	  re2[__webpack_require__(27)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(20)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(194)('RegExp');

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(14);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(200);
	var anObject    = __webpack_require__(14)
	  , $flags      = __webpack_require__(198)
	  , DESCRIPTORS = __webpack_require__(8)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(20)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(9)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(8) && /./g.flags != 'g')__webpack_require__(13).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(202)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(12)
	  , redefine = __webpack_require__(20)
	  , fails    = __webpack_require__(9)
	  , defined  = __webpack_require__(37)
	  , wks      = __webpack_require__(27);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(202)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(202)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(202)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(136)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(30)
	  , global             = __webpack_require__(6)
	  , ctx                = __webpack_require__(22)
	  , classof            = __webpack_require__(77)
	  , $export            = __webpack_require__(10)
	  , isObject           = __webpack_require__(15)
	  , aFunction          = __webpack_require__(23)
	  , anInstance         = __webpack_require__(207)
	  , forOf              = __webpack_require__(208)
	  , speciesConstructor = __webpack_require__(209)
	  , task               = __webpack_require__(210).set
	  , microtask          = __webpack_require__(211)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(27)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(212)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(26)($Promise, PROMISE);
	__webpack_require__(194)(PROMISE);
	Wrapper = __webpack_require__(11)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(22)
	  , call        = __webpack_require__(163)
	  , isArrayIter = __webpack_require__(164)
	  , anObject    = __webpack_require__(14)
	  , toLength    = __webpack_require__(39)
	  , getIterFn   = __webpack_require__(166)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(14)
	  , aFunction = __webpack_require__(23)
	  , SPECIES   = __webpack_require__(27)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(22)
	  , invoke             = __webpack_require__(80)
	  , html               = __webpack_require__(50)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(36)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(210).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(36)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(20);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(214);

	// 23.1 Map Objects
	module.exports = __webpack_require__(215)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(13).f
	  , create      = __webpack_require__(48)
	  , redefineAll = __webpack_require__(212)
	  , ctx         = __webpack_require__(22)
	  , anInstance  = __webpack_require__(207)
	  , defined     = __webpack_require__(37)
	  , forOf       = __webpack_require__(208)
	  , $iterDefine = __webpack_require__(130)
	  , step        = __webpack_require__(196)
	  , setSpecies  = __webpack_require__(194)
	  , DESCRIPTORS = __webpack_require__(8)
	  , fastKey     = __webpack_require__(24).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , $export           = __webpack_require__(10)
	  , redefine          = __webpack_require__(20)
	  , redefineAll       = __webpack_require__(212)
	  , meta              = __webpack_require__(24)
	  , forOf             = __webpack_require__(208)
	  , anInstance        = __webpack_require__(207)
	  , isObject          = __webpack_require__(15)
	  , fails             = __webpack_require__(9)
	  , $iterDetect       = __webpack_require__(167)
	  , setToStringTag    = __webpack_require__(26)
	  , inheritIfRequired = __webpack_require__(90);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(214);

	// 23.2 Set Objects
	module.exports = __webpack_require__(215)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(174)(0)
	  , redefine     = __webpack_require__(20)
	  , meta         = __webpack_require__(24)
	  , assign       = __webpack_require__(71)
	  , weak         = __webpack_require__(218)
	  , isObject     = __webpack_require__(15)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(215)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(212)
	  , getWeak           = __webpack_require__(24).getWeak
	  , anObject          = __webpack_require__(14)
	  , isObject          = __webpack_require__(15)
	  , anInstance        = __webpack_require__(207)
	  , forOf             = __webpack_require__(208)
	  , createArrayMethod = __webpack_require__(174)
	  , $has              = __webpack_require__(7)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(218);

	// 23.4 WeakSet Objects
	__webpack_require__(215)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , $typed       = __webpack_require__(221)
	  , buffer       = __webpack_require__(222)
	  , anObject     = __webpack_require__(14)
	  , toIndex      = __webpack_require__(41)
	  , toLength     = __webpack_require__(39)
	  , isObject     = __webpack_require__(15)
	  , ArrayBuffer  = __webpack_require__(6).ArrayBuffer
	  , speciesConstructor = __webpack_require__(209)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(9)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(194)(ARRAY_BUFFER);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , hide   = __webpack_require__(12)
	  , uid    = __webpack_require__(21)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(30)
	  , $typed         = __webpack_require__(221)
	  , hide           = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(212)
	  , fails          = __webpack_require__(9)
	  , anInstance     = __webpack_require__(207)
	  , toInteger      = __webpack_require__(40)
	  , toLength       = __webpack_require__(39)
	  , gOPN           = __webpack_require__(52).f
	  , dP             = __webpack_require__(13).f
	  , arrayFill      = __webpack_require__(190)
	  , setToStringTag = __webpack_require__(26)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	$export($export.G + $export.W + $export.F * !__webpack_require__(221).ABV, {
	  DataView: __webpack_require__(222).DataView
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(8)){
	  var LIBRARY             = __webpack_require__(30)
	    , global              = __webpack_require__(6)
	    , fails               = __webpack_require__(9)
	    , $export             = __webpack_require__(10)
	    , $typed              = __webpack_require__(221)
	    , $buffer             = __webpack_require__(222)
	    , ctx                 = __webpack_require__(22)
	    , anInstance          = __webpack_require__(207)
	    , propertyDesc        = __webpack_require__(19)
	    , hide                = __webpack_require__(12)
	    , redefineAll         = __webpack_require__(212)
	    , toInteger           = __webpack_require__(40)
	    , toLength            = __webpack_require__(39)
	    , toIndex             = __webpack_require__(41)
	    , toPrimitive         = __webpack_require__(18)
	    , has                 = __webpack_require__(7)
	    , same                = __webpack_require__(73)
	    , classof             = __webpack_require__(77)
	    , isObject            = __webpack_require__(15)
	    , toObject            = __webpack_require__(60)
	    , isArrayIter         = __webpack_require__(164)
	    , create              = __webpack_require__(48)
	    , getPrototypeOf      = __webpack_require__(61)
	    , gOPN                = __webpack_require__(52).f
	    , getIterFn           = __webpack_require__(166)
	    , uid                 = __webpack_require__(21)
	    , wks                 = __webpack_require__(27)
	    , createArrayMethod   = __webpack_require__(174)
	    , createArrayIncludes = __webpack_require__(38)
	    , speciesConstructor  = __webpack_require__(209)
	    , ArrayIterators      = __webpack_require__(195)
	    , Iterators           = __webpack_require__(131)
	    , $iterDetect         = __webpack_require__(167)
	    , setSpecies          = __webpack_require__(194)
	    , arrayFill           = __webpack_require__(190)
	    , arrayCopyWithin     = __webpack_require__(187)
	    , $DP                 = __webpack_require__(13)
	    , $GOPD               = __webpack_require__(53)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(10)
	  , aFunction = __webpack_require__(23)
	  , anObject  = __webpack_require__(14)
	  , rApply    = (__webpack_require__(6).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(9)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(10)
	  , create     = __webpack_require__(48)
	  , aFunction  = __webpack_require__(23)
	  , anObject   = __webpack_require__(14)
	  , isObject   = __webpack_require__(15)
	  , fails      = __webpack_require__(9)
	  , bind       = __webpack_require__(79)
	  , rConstruct = (__webpack_require__(6).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(13)
	  , $export     = __webpack_require__(10)
	  , anObject    = __webpack_require__(14)
	  , toPrimitive = __webpack_require__(18);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(10)
	  , gOPD     = __webpack_require__(53).f
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(14);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(132)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(61)
	  , has            = __webpack_require__(7)
	  , $export        = __webpack_require__(10)
	  , isObject       = __webpack_require__(15)
	  , anObject       = __webpack_require__(14);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(53)
	  , $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(10)
	  , getProto = __webpack_require__(61)
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(10)
	  , anObject      = __webpack_require__(14)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(245)});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(52)
	  , gOPS     = __webpack_require__(45)
	  , anObject = __webpack_require__(14)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(10)
	  , anObject           = __webpack_require__(14)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(13)
	  , gOPD           = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(61)
	  , has            = __webpack_require__(7)
	  , $export        = __webpack_require__(10)
	  , createDesc     = __webpack_require__(19)
	  , anObject       = __webpack_require__(14)
	  , isObject       = __webpack_require__(15);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(10)
	  , setProto = __webpack_require__(75);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(10)
	  , $includes = __webpack_require__(38)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(188)('includes');

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(129)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(252);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(39)
	  , repeat   = __webpack_require__(93)
	  , defined  = __webpack_require__(37);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(252);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(85)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(85)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(10)
	  , defined     = __webpack_require__(37)
	  , toLength    = __webpack_require__(39)
	  , isRegExp    = __webpack_require__(136)
	  , getFlags    = __webpack_require__(198)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(132)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)('asyncIterator');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)('observable');

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(10)
	  , ownKeys        = __webpack_require__(245)
	  , toIObject      = __webpack_require__(34)
	  , gOPD           = __webpack_require__(53)
	  , createProperty = __webpack_require__(165);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(10)
	  , $values = __webpack_require__(261)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34)
	  , isEnum    = __webpack_require__(46).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(10)
	  , $entries = __webpack_require__(261)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(10)
	  , toObject        = __webpack_require__(60)
	  , aFunction       = __webpack_require__(23)
	  , $defineProperty = __webpack_require__(13);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(30)|| !__webpack_require__(9)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(6)[K];
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(10)
	  , toObject        = __webpack_require__(60)
	  , aFunction       = __webpack_require__(23)
	  , $defineProperty = __webpack_require__(13);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(10)
	  , toObject                 = __webpack_require__(60)
	  , toPrimitive              = __webpack_require__(18)
	  , getPrototypeOf           = __webpack_require__(61)
	  , getOwnPropertyDescriptor = __webpack_require__(53).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(10)
	  , toObject                 = __webpack_require__(60)
	  , toPrimitive              = __webpack_require__(18)
	  , getPrototypeOf           = __webpack_require__(61)
	  , getOwnPropertyDescriptor = __webpack_require__(53).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(269)('Map')});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(77)
	  , from    = __webpack_require__(270);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(208);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(269)('Set')});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(10);

	$export($export.S, 'System', {global: __webpack_require__(6)});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(10)
	  , cof     = __webpack_require__(36);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(279)
	  , anObject                  = __webpack_require__(14)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(213)
	  , $export = __webpack_require__(10)
	  , shared  = __webpack_require__(25)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(217)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , getPrototypeOf         = __webpack_require__(61)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(216)
	  , from                    = __webpack_require__(270)
	  , metadata                = __webpack_require__(279)
	  , anObject                = __webpack_require__(14)
	  , getPrototypeOf          = __webpack_require__(61)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(279)
	  , anObject                = __webpack_require__(14)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , getPrototypeOf         = __webpack_require__(61)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(279)
	  , anObject                  = __webpack_require__(14)
	  , aFunction                 = __webpack_require__(23)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(10)
	  , microtask = __webpack_require__(211)()
	  , process   = __webpack_require__(6).process
	  , isNode    = __webpack_require__(36)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(10)
	  , global      = __webpack_require__(6)
	  , core        = __webpack_require__(11)
	  , microtask   = __webpack_require__(211)()
	  , OBSERVABLE  = __webpack_require__(27)('observable')
	  , aFunction   = __webpack_require__(23)
	  , anObject    = __webpack_require__(14)
	  , anInstance  = __webpack_require__(207)
	  , redefineAll = __webpack_require__(212)
	  , hide        = __webpack_require__(12)
	  , forOf       = __webpack_require__(208)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(194)('Observable');

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(10)
	  , invoke     = __webpack_require__(80)
	  , partial    = __webpack_require__(291)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(292)
	  , invoke    = __webpack_require__(80)
	  , aFunction = __webpack_require__(23);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , $task   = __webpack_require__(210);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(195)
	  , redefine      = __webpack_require__(20)
	  , global        = __webpack_require__(6)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(131)
	  , wks           = __webpack_require__(27)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(22)
	  , $export        = __webpack_require__(10)
	  , createDesc     = __webpack_require__(19)
	  , assign         = __webpack_require__(71)
	  , create         = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(61)
	  , getKeys        = __webpack_require__(32)
	  , dP             = __webpack_require__(13)
	  , keyOf          = __webpack_require__(31)
	  , aFunction      = __webpack_require__(23)
	  , forOf          = __webpack_require__(208)
	  , isIterable     = __webpack_require__(296)
	  , $iterCreate    = __webpack_require__(132)
	  , step           = __webpack_require__(196)
	  , isObject       = __webpack_require__(15)
	  , toIObject      = __webpack_require__(34)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , has            = __webpack_require__(7);

	// 0 -> Dict.forEach
	// 1 -> Dict.map
	// 2 -> Dict.filter
	// 3 -> Dict.some
	// 4 -> Dict.every
	// 5 -> Dict.find
	// 6 -> Dict.findKey
	// 7 -> Dict.mapPairs
	var createDictMethod = function(TYPE){
	  var IS_MAP   = TYPE == 1
	    , IS_EVERY = TYPE == 4;
	  return function(object, callbackfn, that /* = undefined */){
	    var f      = ctx(callbackfn, that, 3)
	      , O      = toIObject(object)
	      , result = IS_MAP || TYPE == 7 || TYPE == 2
	          ? new (typeof this == 'function' ? this : Dict) : undefined
	      , key, val, res;
	    for(key in O)if(has(O, key)){
	      val = O[key];
	      res = f(val, key, object);
	      if(TYPE){
	        if(IS_MAP)result[key] = res;            // map
	        else if(res)switch(TYPE){
	          case 2: result[key] = val; break;     // filter
	          case 3: return true;                  // some
	          case 5: return val;                   // find
	          case 6: return key;                   // findKey
	          case 7: result[res[0]] = res[1];      // mapPairs
	        } else if(IS_EVERY)return false;        // every
	      }
	    }
	    return TYPE == 3 || IS_EVERY ? IS_EVERY : result;
	  };
	};
	var findKey = createDictMethod(6);

	var createDictIter = function(kind){
	  return function(it){
	    return new DictIterator(it, kind);
	  };
	};
	var DictIterator = function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._a = getKeys(iterated);   // keys
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	};
	$iterCreate(DictIterator, 'Dict', function(){
	  var that = this
	    , O    = that._t
	    , keys = that._a
	    , kind = that._k
	    , key;
	  do {
	    if(that._i >= keys.length){
	      that._t = undefined;
	      return step(1);
	    }
	  } while(!has(O, key = keys[that._i++]));
	  if(kind == 'keys'  )return step(0, key);
	  if(kind == 'values')return step(0, O[key]);
	  return step(0, [key, O[key]]);
	});

	function Dict(iterable){
	  var dict = create(null);
	  if(iterable != undefined){
	    if(isIterable(iterable)){
	      forOf(iterable, true, function(key, value){
	        dict[key] = value;
	      });
	    } else assign(dict, iterable);
	  }
	  return dict;
	}
	Dict.prototype = null;

	function reduce(object, mapfn, init){
	  aFunction(mapfn);
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , i      = 0
	    , memo, key;
	  if(arguments.length < 3){
	    if(!length)throw TypeError('Reduce of empty object with no initial value');
	    memo = O[keys[i++]];
	  } else memo = Object(init);
	  while(length > i)if(has(O, key = keys[i++])){
	    memo = mapfn(memo, O[key], key, object);
	  }
	  return memo;
	}

	function includes(object, el){
	  return (el == el ? keyOf(object, el) : findKey(object, function(it){
	    return it != it;
	  })) !== undefined;
	}

	function get(object, key){
	  if(has(object, key))return object[key];
	}
	function set(object, key, value){
	  if(DESCRIPTORS && key in Object)dP.f(object, key, createDesc(0, value));
	  else object[key] = value;
	  return object;
	}

	function isDict(it){
	  return isObject(it) && getPrototypeOf(it) === Dict.prototype;
	}

	$export($export.G + $export.F, {Dict: Dict});

	$export($export.S, 'Dict', {
	  keys:     createDictIter('keys'),
	  values:   createDictIter('values'),
	  entries:  createDictIter('entries'),
	  forEach:  createDictMethod(0),
	  map:      createDictMethod(1),
	  filter:   createDictMethod(2),
	  some:     createDictMethod(3),
	  every:    createDictMethod(4),
	  find:     createDictMethod(5),
	  findKey:  findKey,
	  mapPairs: createDictMethod(7),
	  reduce:   reduce,
	  keyOf:    keyOf,
	  includes: includes,
	  has:      has,
	  get:      get,
	  set:      set,
	  isDict:   isDict
	});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(77)
	  , ITERATOR  = __webpack_require__(27)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(11).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(14)
	  , get      = __webpack_require__(166);
	module.exports = __webpack_require__(11).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	var global  = __webpack_require__(6)
	  , core    = __webpack_require__(11)
	  , $export = __webpack_require__(10)
	  , partial = __webpack_require__(291);
	// https://esdiscuss.org/topic/promise-returning-delay-function
	$export($export.G + $export.F, {
	  delay: function delay(time){
	    return new (core.Promise || global.Promise)(function(resolve){
	      setTimeout(partial.call(resolve, true), time);
	    });
	  }
	});

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	var path    = __webpack_require__(292)
	  , $export = __webpack_require__(10);

	// Placeholder
	__webpack_require__(11)._ = path._ = path._ || {};

	$export($export.P + $export.F, 'Function', {part: __webpack_require__(291)});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {isObject: __webpack_require__(15)});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {classof: __webpack_require__(77)});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , define  = __webpack_require__(303);

	$export($export.S + $export.F, 'Object', {define: define});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	var dP        = __webpack_require__(13)
	  , gOPD      = __webpack_require__(53)
	  , ownKeys   = __webpack_require__(245)
	  , toIObject = __webpack_require__(34);

	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toIObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)dP.f(target, key = keys[i++], gOPD.f(mixin, key));
	  return target;
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , define  = __webpack_require__(303)
	  , create  = __webpack_require__(48);

	$export($export.S + $export.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(130)(Number, 'Number', function(iterated){
	  this._l = +iterated;
	  this._i = 0;
	}, function(){
	  var i    = this._i++
	    , done = !(i < this._l);
	  return {done: done, value: done ? undefined : i};
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(10)
	  , $re     = __webpack_require__(307)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 307 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10);
	var $re = __webpack_require__(307)(/[&<>"']/g, {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&apos;'
	});

	$export($export.P + $export.F, 'String', {escapeHTML: function escapeHTML(){ return $re(this); }});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10);
	var $re = __webpack_require__(307)(/&(?:amp|lt|gt|quot|apos);/g, {
	  '&amp;':  '&',
	  '&lt;':   '<',
	  '&gt;':   '>',
	  '&quot;': '"',
	  '&apos;': "'"
	});

	$export($export.P + $export.F, 'String', {unescapeHTML:  function unescapeHTML(){ return $re(this); }});

/***/ },
/* 310 */
/***/ function(module, exports) {

	"use strict";
	exports.allServices = {};
	exports.serviceInstances = {};
	function ensureService(serviceClass) {
	    var serviceId = serviceClass.name;
	    var service = exports.allServices[serviceId];
	    if (service === undefined)
	        service = exports.allServices[serviceId] = {
	            serviceClass: serviceClass,
	            memoryLimit: 256,
	            timeLimit: 6,
	        };
	    return service;
	}
	exports.ensureService = ensureService;
	function serviceDecorator(params) {
	    return function (serviceClass) {
	        var service = ensureService(serviceClass);
	        Object.assign(service, params);
	    };
	}
	exports.serviceDecorator = serviceDecorator;
	//# sourceMappingURL=service.js.map

/***/ },
/* 311 */
/***/ function(module, exports) {

	"use strict";
	function typeOf(value) {
	    if (value === undefined)
	        return undefined;
	    if (value === null)
	        return null;
	    return Object.getPrototypeOf(value).constructor;
	}
	exports.typeOf = typeOf;
	//# sourceMappingURL=type.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var service_1 = __webpack_require__(310);
	var http;
	(function (http) {
	    http.allGateways = {};
	    var Gateway = (function () {
	        function Gateway() {
	            this.endpoints = {};
	        }
	        return Gateway;
	    }());
	    http.Gateway = Gateway;
	    var Endpoint = (function () {
	        function Endpoint() {
	        }
	        return Endpoint;
	    }());
	    http.Endpoint = Endpoint;
	    function endpointDecorator(gatewayId, url, method) {
	        return function (servicePrototype, handlerMethod, descriptor) {
	            if (typeof servicePrototype == 'function')
	                throw new Error((servicePrototype.name + "." + handlerMethod + "():") +
	                    "static handlers are not permitted");
	            var serviceClass = servicePrototype.constructor;
	            var gateway = http.allGateways[gatewayId];
	            if (gateway === undefined)
	                gateway = http.allGateways[gatewayId] = new Gateway();
	            var methods = gateway.endpoints[url];
	            if (methods === undefined)
	                methods = gateway.endpoints[url] = {};
	            var endpoint = methods[method];
	            if (endpoint === undefined)
	                endpoint = methods[method] = new Endpoint();
	            endpoint.service = service_1.ensureService(serviceClass);
	            endpoint.method = handlerMethod;
	        };
	    }
	    function GET(gatewayId, url) {
	        return endpointDecorator(gatewayId, url, 'get');
	    }
	    http.GET = GET;
	    function POST(gatewayId, url) {
	        return endpointDecorator(gatewayId, url, 'post');
	    }
	    http.POST = POST;
	    function PUT(gatewayId, url) {
	        return endpointDecorator(gatewayId, url, 'put');
	    }
	    http.PUT = PUT;
	    function DELETE(gatewayId, url) {
	        return endpointDecorator(gatewayId, url, 'delete');
	    }
	    http.DELETE = DELETE;
	    function authorizer() {
	    }
	    http.authorizer = authorizer;
	})(http = exports.http || (exports.http = {}));
	//# sourceMappingURL=http.js.map

/***/ },
/* 313 */
/***/ function(module, exports) {

	"use strict";
	var storage;
	(function (storage) {
	    storage.AccessControl = {
	        AuthenticatedRead: "AuthenticatedRead",
	        AwsExecRead: "AwsExecRead",
	        BucketOwnerRead: "BucketOwnerRead",
	        BucketOwnerFullControl: "BucketOwnerFullControl",
	        LogDeliveryWrite: "LogDeliveryWrite",
	        Private: "Private",
	        PublicRead: "PublicRead",
	        PublicReadWrite: "PublicReadWrite",
	    };
	    storage.allBuckets = {};
	    var Bucket = (function () {
	        function Bucket(name, accessControl, staged) {
	            if (accessControl === void 0) { accessControl = storage.AccessControl.Private; }
	            if (staged === void 0) { staged = true; }
	            this.name = name;
	            this.accessControl = accessControl;
	            this.staged = staged;
	            storage.allBuckets[name] = this;
	        }
	        return Bucket;
	    }());
	    storage.Bucket = Bucket;
	    var deploymentBucket = new Bucket('deployment', storage.AccessControl.Private, false);
	})(storage = exports.storage || (exports.storage = {}));
	//# sourceMappingURL=storage.js.map

/***/ },
/* 314 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__filename) {"use strict";
	exports.fileName = __filename;
	function dispatch(event, context, callback) {
	}
	exports.dispatch = dispatch;
	//# sourceMappingURL=handler.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  decode: __webpack_require__(316),
	  verify: __webpack_require__(368),
	  sign: __webpack_require__(374),
	  JsonWebTokenError: __webpack_require__(369),
	  NotBeforeError: __webpack_require__(370),
	  TokenExpiredError: __webpack_require__(371),
	};


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var jws = __webpack_require__(317);

	module.exports = function (jwt, options) {
	  options = options || {};
	  var decoded = jws.decode(jwt, options);
	  if (!decoded) { return null; }
	  var payload = decoded.payload;

	  //try parse the payload
	  if(typeof payload === 'string') {
	    try {
	      var obj = JSON.parse(payload);
	      if(typeof obj === 'object') {
	        payload = obj;
	      }
	    } catch (e) { }
	  }

	  //return header if `complete` option is enabled.  header includes claims
	  //such as `kid` and `alg` used to select the key within a JWKS needed to
	  //verify the signature
	  if (options.complete === true) {
	    return {
	      header: decoded.header,
	      payload: payload,
	      signature: decoded.signature
	    };
	  }
	  return payload;
	};


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	/*global exports*/
	var SignStream = __webpack_require__(318);
	var VerifyStream = __webpack_require__(367);

	var ALGORITHMS = [
	  'HS256', 'HS384', 'HS512',
	  'RS256', 'RS384', 'RS512',
	  'ES256', 'ES384', 'ES512'
	];

	exports.ALGORITHMS = ALGORITHMS;
	exports.sign = SignStream.sign;
	exports.verify = VerifyStream.verify;
	exports.decode = VerifyStream.decode;
	exports.isValid = VerifyStream.isValid;
	exports.createSign = function createSign(opts) {
	  return new SignStream(opts);
	};
	exports.createVerify = function createVerify(opts) {
	  return new VerifyStream(opts);
	};


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	/*global module*/
	var base64url = __webpack_require__(319);
	var DataStream = __webpack_require__(324);
	var jwa = __webpack_require__(346);
	var Stream = __webpack_require__(326);
	var toString = __webpack_require__(366);
	var util = __webpack_require__(343);

	function jwsSecuredInput(header, payload, encoding) {
	  encoding = encoding || 'utf8';
	  var encodedHeader = base64url(toString(header), 'binary');
	  var encodedPayload = base64url(toString(payload), encoding);
	  return util.format('%s.%s', encodedHeader, encodedPayload);
	}

	function jwsSign(opts) {
	  var header = opts.header;
	  var payload = opts.payload;
	  var secretOrKey = opts.secret || opts.privateKey;
	  var encoding = opts.encoding;
	  var algo = jwa(header.alg);
	  var securedInput = jwsSecuredInput(header, payload, encoding);
	  var signature = algo.sign(securedInput, secretOrKey);
	  return util.format('%s.%s', securedInput, signature);
	}

	function SignStream(opts) {
	  var secret = opts.secret||opts.privateKey||opts.key;
	  var secretStream = new DataStream(secret);
	  this.readable = true;
	  this.header = opts.header;
	  this.encoding = opts.encoding;
	  this.secret = this.privateKey = this.key = secretStream;
	  this.payload = new DataStream(opts.payload);
	  this.secret.once('close', function () {
	    if (!this.payload.writable && this.readable)
	      this.sign();
	  }.bind(this));

	  this.payload.once('close', function () {
	    if (!this.secret.writable && this.readable)
	      this.sign();
	  }.bind(this));
	}
	util.inherits(SignStream, Stream);

	SignStream.prototype.sign = function sign() {
	  try {
	    var signature = jwsSign({
	      header: this.header,
	      payload: this.payload.buffer,
	      secret: this.secret.buffer,
	      encoding: this.encoding
	    });
	    this.emit('done', signature);
	    this.emit('data', signature);
	    this.emit('end');
	    this.readable = false;
	    return signature;
	  } catch (e) {
	    this.readable = false;
	    this.emit('error', e);
	    this.emit('close');
	  }
	};

	SignStream.sign = jwsSign;

	module.exports = SignStream;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {function fromBase64(base64string) {
	  return (
	    base64string
	      .replace(/=/g, '')
	      .replace(/\+/g, '-')
	      .replace(/\//g, '_')
	  );
	}

	function toBase64(base64UrlString) {
	  if (Buffer.isBuffer(base64UrlString))
	    base64UrlString = base64UrlString.toString();

	  var b64str = padString(base64UrlString)
	    .replace(/\-/g, '+')
	    .replace(/_/g, '/');
	  return b64str;
	}

	function padString(string) {
	  var segmentLength = 4;
	  var stringLength = string.length;
	  var diff = string.length % segmentLength;
	  if (!diff)
	    return string;
	  var position = stringLength;
	  var padLength = segmentLength - diff;
	  var paddedStringLength = stringLength + padLength;
	  var buffer = Buffer(paddedStringLength);
	  buffer.write(string);
	  while (padLength--)
	    buffer.write('=', position++);
	  return buffer.toString();
	}

	function decodeBase64Url(base64UrlString, encoding) {
	  return Buffer(toBase64(base64UrlString), 'base64').toString(encoding);
	}

	function base64url(stringOrBuffer, encoding) {
	  return fromBase64(Buffer(stringOrBuffer, encoding).toString('base64'));
	}

	function toBuffer(base64string) {
	  return Buffer(toBase64(base64string), 'base64');
	}

	base64url.toBase64 = toBase64;
	base64url.fromBase64 = fromBase64;
	base64url.decode = decodeBase64Url;
	base64url.encode = base64url;
	base64url.toBuffer = toBuffer;

	module.exports = base64url;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(321)
	var ieee754 = __webpack_require__(322)
	var isArray = __webpack_require__(323)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer, (function() { return this; }())))

/***/ },
/* 321 */
/***/ function(module, exports) {

	'use strict'

	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }

	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}

	init()

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 322 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 323 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*global module, process*/
	var Buffer = __webpack_require__(320).Buffer;
	var Stream = __webpack_require__(326);
	var util = __webpack_require__(343);

	function DataStream(data) {
	  this.buffer = null;
	  this.writable = true;
	  this.readable = true;

	  // No input
	  if (!data) {
	    this.buffer = new Buffer(0);
	    return this;
	  }

	  // Stream
	  if (typeof data.pipe === 'function') {
	    this.buffer = new Buffer(0);
	    data.pipe(this);
	    return this;
	  }

	  // Buffer or String
	  // or Object (assumedly a passworded key)
	  if (data.length || typeof data === 'object') {
	    this.buffer = data;
	    this.writable = false;
	    process.nextTick(function () {
	      this.emit('end', data);
	      this.readable = false;
	      this.emit('close');
	    }.bind(this));
	    return this;
	  }

	  throw new TypeError('Unexpected data type ('+ typeof data + ')');
	}
	util.inherits(DataStream, Stream);

	DataStream.prototype.write = function write(data) {
	  this.buffer = Buffer.concat([this.buffer, Buffer(data)]);
	  this.emit('data', data);
	};

	DataStream.prototype.end = function end(data) {
	  if (data)
	    this.write(data);
	  this.emit('end', data);
	  this.emit('close');
	  this.writable = false;
	  this.readable = false;
	};

	module.exports = DataStream;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 325 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(327).EventEmitter;
	var inherits = __webpack_require__(328);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(329);
	Stream.Writable = __webpack_require__(339);
	Stream.Duplex = __webpack_require__(340);
	Stream.Transform = __webpack_require__(341);
	Stream.PassThrough = __webpack_require__(342);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 327 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 328 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = __webpack_require__(330);
	exports.Stream = __webpack_require__(326);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(335);
	exports.Duplex = __webpack_require__(334);
	exports.Transform = __webpack_require__(337);
	exports.PassThrough = __webpack_require__(338);
	if (!process.browser && process.env.READABLE_STREAM === 'disable') {
	  module.exports = __webpack_require__(326);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(331);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(320).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(327).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(326);

	/*<replacement>*/
	var util = __webpack_require__(332);
	util.inherits = __webpack_require__(328);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(333);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(334);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(336).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(334);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(336).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 331 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 333 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(332);
	util.inherits = __webpack_require__(328);
	/*</replacement>*/

	var Readable = __webpack_require__(330);
	var Writable = __webpack_require__(335);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(320).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(332);
	util.inherits = __webpack_require__(328);
	/*</replacement>*/

	var Stream = __webpack_require__(326);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(334);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(334);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(320).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(334);

	/*<replacement>*/
	var util = __webpack_require__(332);
	util.inherits = __webpack_require__(328);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(337);

	/*<replacement>*/
	var util = __webpack_require__(332);
	util.inherits = __webpack_require__(328);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(335)


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(334)


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(337)


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(338)


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(344);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(345);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(325)))

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 345 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var bufferEqual = __webpack_require__(347);
	var base64url = __webpack_require__(319);
	var crypto = __webpack_require__(348);
	var formatEcdsa = __webpack_require__(363);
	var util = __webpack_require__(343);

	var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512" and "none".'
	var MSG_INVALID_SECRET = 'secret must be a string or buffer';
	var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
	var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';

	function typeError(template) {
	  var args = [].slice.call(arguments, 1);
	  var errMsg = util.format.bind(util, template).apply(null, args);
	  return new TypeError(errMsg);
	}

	function bufferOrString(obj) {
	  return Buffer.isBuffer(obj) || typeof obj === 'string';
	}

	function normalizeInput(thing) {
	  if (!bufferOrString(thing))
	    thing = JSON.stringify(thing);
	  return thing;
	}

	function createHmacSigner(bits) {
	  return function sign(thing, secret) {
	    if (!bufferOrString(secret))
	      throw typeError(MSG_INVALID_SECRET);
	    thing = normalizeInput(thing);
	    var hmac = crypto.createHmac('sha' + bits, secret);
	    var sig = (hmac.update(thing), hmac.digest('base64'))
	    return base64url.fromBase64(sig);
	  }
	}

	function createHmacVerifier(bits) {
	  return function verify(thing, signature, secret) {
	    var computedSig = createHmacSigner(bits)(thing, secret);
	    return bufferEqual(Buffer(signature), Buffer(computedSig));
	  }
	}

	function createKeySigner(bits) {
	 return function sign(thing, privateKey) {
	    if (!bufferOrString(privateKey) && !(typeof privateKey === 'object'))
	      throw typeError(MSG_INVALID_SIGNER_KEY);
	    thing = normalizeInput(thing);
	    // Even though we are specifying "RSA" here, this works with ECDSA
	    // keys as well.
	    var signer = crypto.createSign('RSA-SHA' + bits);
	    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
	    return base64url.fromBase64(sig);
	  }
	}

	function createKeyVerifier(bits) {
	  return function verify(thing, signature, publicKey) {
	    if (!bufferOrString(publicKey))
	      throw typeError(MSG_INVALID_VERIFIER_KEY);
	    thing = normalizeInput(thing);
	    signature = base64url.toBase64(signature);
	    var verifier = crypto.createVerify('RSA-SHA' + bits);
	    verifier.update(thing);
	    return verifier.verify(publicKey, signature, 'base64');
	  }
	}

	function createECDSASigner(bits) {
	  var inner = createKeySigner(bits);
	  return function sign() {
	    var signature = inner.apply(null, arguments);
	    signature = formatEcdsa.derToJose(signature, 'ES' + bits);
	    return signature;
	  };
	}

	function createECDSAVerifer(bits) {
	  var inner = createKeyVerifier(bits);
	  return function verify(thing, signature, publicKey) {
	    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
	    var result = inner(thing, signature, publicKey);
	    return result;
	  };
	}

	function createNoneSigner() {
	  return function sign() {
	    return '';
	  }
	}

	function createNoneVerifier() {
	  return function verify(thing, signature) {
	    return signature === '';
	  }
	}

	module.exports = function jwa(algorithm) {
	  var signerFactories = {
	    hs: createHmacSigner,
	    rs: createKeySigner,
	    es: createECDSASigner,
	    none: createNoneSigner,
	  }
	  var verifierFactories = {
	    hs: createHmacVerifier,
	    rs: createKeyVerifier,
	    es: createECDSAVerifer,
	    none: createNoneVerifier,
	  }
	  var match = algorithm.match(/^(RS|ES|HS)(256|384|512)$|^(none)$/i);
	  if (!match)
	    throw typeError(MSG_INVALID_ALGORITHM, algorithm);
	  var algo = (match[1] || match[3]).toLowerCase();
	  var bits = match[2];

	  return {
	    sign: signerFactories[algo](bits),
	    verify: verifierFactories[algo](bits),
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint node:true */
	'use strict';
	var Buffer = __webpack_require__(320).Buffer; // browserify
	var SlowBuffer = __webpack_require__(320).SlowBuffer;

	module.exports = bufferEq;

	function bufferEq(a, b) {

	  // shortcutting on type is necessary for correctness
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    return false;
	  }

	  // buffer sizes should be well-known information, so despite this
	  // shortcutting, it doesn't leak any information about the *contents* of the
	  // buffers.
	  if (a.length !== b.length) {
	    return false;
	  }

	  var c = 0;
	  for (var i = 0; i < a.length; i++) {
	    /*jshint bitwise:false */
	    c |= a[i] ^ b[i]; // XOR
	  }
	  return c === 0;
	}

	bufferEq.install = function() {
	  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
	    return bufferEq(this, that);
	  };
	};

	var origBufEqual = Buffer.prototype.equal;
	var origSlowBufEqual = SlowBuffer.prototype.equal;
	bufferEq.restore = function() {
	  Buffer.prototype.equal = origBufEqual;
	  SlowBuffer.prototype.equal = origSlowBufEqual;
	};


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(349)

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = __webpack_require__(351)

	exports.createHmac = __webpack_require__(360)

	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}

	var p = __webpack_require__(361)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync


	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(350)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(320).Buffer))

/***/ },
/* 350 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(352)

	var md5 = toConstructor(__webpack_require__(357))
	var rmd160 = toConstructor(__webpack_require__(359))

	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}

	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}

	var Buffer = __webpack_require__(320).Buffer
	var Hash   = __webpack_require__(353)(Buffer)

	exports.sha1 = __webpack_require__(354)(Buffer, Hash)
	exports.sha256 = __webpack_require__(355)(Buffer, Hash)
	exports.sha512 = __webpack_require__(356)(Buffer, Hash)


/***/ },
/* 353 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {

	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }

	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }

	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }

	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block

	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)

	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }

	      s += ch
	      f += ch

	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s

	    return this
	  }

	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8

	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80

	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)

	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }

	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)

	    var hash = this._update(this._block) || this._hash()

	    return enc ? hash.toString(enc) : hash
	  }

	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }

	  return Hash
	}


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(343).inherits

	module.exports = function (Buffer, Hash) {

	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0

	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

	  var POOL = []

	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()

	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)

	    this._h = null
	    this.init()
	  }

	  inherits(Sha1, Hash)

	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0

	    Hash.prototype.init.call(this)
	    return this
	  }

	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {

	    var a, b, c, d, e, _a, _b, _c, _d, _e

	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e

	    var w = this._w

	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )

	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }

	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }

	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }

	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }

	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }

	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }

	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }

	  return Sha1
	}


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(343).inherits

	module.exports = function (Buffer, Hash) {

	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]

	  var W = new Array(64)

	  function Sha256() {
	    this.init()

	    this._w = W //new Array(64)

	    Hash.call(this, 16*4, 14*4)
	  }

	  inherits(Sha256, Hash)

	  Sha256.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }

	  function R (X, n) {
	    return (X >>> n);
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }

	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }

	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }

	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }

	  Sha256.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }

	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0

	  };

	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)

	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)

	    return H
	  }

	  return Sha256

	}


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(343).inherits

	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]

	  var W = new Array(160)

	  function Sha512() {
	    this.init()
	    this._w = W

	    Hash.call(this, 128, 112)
	  }

	  inherits(Sha512, Hash)

	  Sha512.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  Sha512.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0

	    for (var i = 0; i < 80; i++) {
	      var j = i * 2

	      var Wi, Wil

	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]

	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]

	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

	        W[j] = Wi
	        W[j + 1] = Wil
	      }

	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)

	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]

	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)

	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }

	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0

	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }

	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)

	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }

	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)

	    return H
	  }

	  return Sha512

	}


/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(358);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160



	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};

	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};

	var processBlock = function (H, M, offset) {

	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};

	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}

	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}

	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}

	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}

	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}

	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );

	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(351)

	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)

	module.exports = Hmac

	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg

	  var blocksize = (alg === 'sha512') ? 128 : 64

	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)

	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  this._hash = createHash(alg).update(ipad)
	}

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(362)

	module.exports = function (crypto, exports) {
	  exports = exports || {}

	  var exported = pbkdf2Export(crypto)

	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync

	  return exports
	}


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }

	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')

	    setTimeout(function() {
	      var result

	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }

	      callback(undefined, result)
	    })
	  }

	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')

	    if (iterations < 0)
	      throw new TypeError('Bad iterations')

	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')

	    if (keylen < 0)
	      throw new TypeError('Bad key length')

	    digest = digest || 'sha1'

	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)

	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)

	      var U = crypto.createHmac(digest, password).update(block1).digest()

	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen

	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }

	      U.copy(T, 0, 0, hLen)

	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()

	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }

	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }

	    return DK
	  }

	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var base64Url = __webpack_require__(364).escape;

	var getParamBytesForAlg = __webpack_require__(365);

	var MAX_OCTET = 0x80,
		CLASS_UNIVERSAL = 0,
		PRIMITIVE_BIT = 0x20,
		TAG_SEQ = 0x10,
		TAG_INT = 0x02,
		ENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),
		ENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);

	function signatureAsBuffer(signature) {
		if (Buffer.isBuffer(signature)) {
			return signature;
		} else if ('string' === typeof signature) {
			return new Buffer(signature, 'base64');
		}

		throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
	}

	function derToJose(signature, alg) {
		signature = signatureAsBuffer(signature);
		var paramBytes = getParamBytesForAlg(alg);

		// the DER encoded param should at most be the param size, plus a padding
		// zero, since due to being a signed integer
		var maxEncodedParamLength = paramBytes + 1;

		var inputLength = signature.length;

		var offset = 0;
		if (signature[offset++] !== ENCODED_TAG_SEQ) {
			throw new Error('Could not find expected "seq"');
		}

		var seqLength = signature[offset++];
		if (seqLength === (MAX_OCTET | 1)) {
			seqLength = signature[offset++];
		}

		if (inputLength - offset < seqLength) {
			throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
		}

		if (signature[offset++] !== ENCODED_TAG_INT) {
			throw new Error('Could not find expected "int" for "r"');
		}

		var rLength = signature[offset++];

		if (inputLength - offset - 2 < rLength) {
			throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
		}

		if (maxEncodedParamLength < rLength) {
			throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
		}

		var rOffset = offset;
		offset += rLength;

		if (signature[offset++] !== ENCODED_TAG_INT) {
			throw new Error('Could not find expected "int" for "s"');
		}

		var sLength = signature[offset++];

		if (inputLength - offset !== sLength) {
			throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
		}

		if (maxEncodedParamLength < sLength) {
			throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
		}

		var sOffset = offset;
		offset += sLength;

		if (offset !== inputLength) {
			throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
		}

		var rPadding = paramBytes - rLength,
			sPadding = paramBytes - sLength;

		var dst = new Buffer(rPadding + rLength + sPadding + sLength);

		for (offset = 0; offset < rPadding; ++offset) {
			dst[offset] = 0;
		}
		signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);

		offset = paramBytes;

		for (var o = offset; offset < o + sPadding; ++offset) {
			dst[offset] = 0;
		}
		signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);

		dst = dst.toString('base64');
		dst = base64Url(dst);

		return dst;
	}

	function countPadding(buf, start, stop) {
		var padding = 0;
		for (var n = stop; start + padding < n && buf[start + padding] === 0;) {
			++padding;
		}

		var needsSign = buf[start + padding] >= MAX_OCTET;
		if (needsSign) {
			--padding;
		}

		return padding;
	}

	function joseToDer(signature, alg) {
		signature = signatureAsBuffer(signature);
		var paramBytes = getParamBytesForAlg(alg);

		var signatureBytes = signature.length;
		if (signatureBytes !== paramBytes * 2) {
			throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
		}

		var rPadding = countPadding(signature, 0, paramBytes);
		var sPadding = countPadding(signature, paramBytes, signature.length);
		var rLength = paramBytes - rPadding;
		var sLength = paramBytes - sPadding;

		var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;

		var shortLength = rsBytes < MAX_OCTET;

		var dst = new Buffer((shortLength ? 2 : 3) + rsBytes);

		var offset = 0;
		dst[offset++] = ENCODED_TAG_SEQ;
		if (shortLength) {
			// Bit 8 has value "0"
			// bits 7-1 give the length.
			dst[offset++] = rsBytes;
		} else {
			// Bit 8 of first octet has value "1"
			// bits 7-1 give the number of additional length octets.
			dst[offset++] = MAX_OCTET	| 1;
			// length, base 256
			dst[offset++] = rsBytes & 0xff;
		}
		dst[offset++] = ENCODED_TAG_INT;
		dst[offset++] = rLength;
		if (rPadding < 0) {
			dst[offset++] = 0;
			offset += signature.copy(dst, offset, 0, paramBytes);
		} else {
			offset += signature.copy(dst, offset, rPadding, paramBytes);
		}
		dst[offset++] = ENCODED_TAG_INT;
		dst[offset++] = sLength;
		if (sPadding < 0) {
			dst[offset++] = 0;
			signature.copy(dst, offset, paramBytes);
		} else {
			signature.copy(dst, offset, paramBytes + sPadding);
		}

		return dst;
	}

	module.exports = {
		derToJose: derToJose,
		joseToDer: joseToDer
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var base64url = module.exports;

	base64url.unescape = function unescape (str) {
	  return (str + '==='.slice((str.length + 3) % 4))
	    .replace(/\-/g, '+')
	    .replace(/_/g, '/');
	};

	base64url.escape = function escape (str) {
	  return str.replace(/\+/g, '-')
	    .replace(/\//g, '_')
	    .replace(/=/g, '');
	};

	base64url.encode = function encode (str) {
	  return this.escape(new Buffer(str).toString('base64'));
	};

	base64url.decode = function decode (str) {
	  return new Buffer(this.unescape(str), 'base64').toString();
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';

	function getParamSize(keySize) {
		var result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);
		return result;
	}

	var paramBytesForAlg = {
		ES256: getParamSize(256),
		ES384: getParamSize(384),
		ES512: getParamSize(521)
	};

	function getParamBytesForAlg(alg) {
		var paramBytes = paramBytesForAlg[alg];
		if (paramBytes) {
			return paramBytes;
		}

		throw new Error('Unknown algorithm "' + alg + '"');
	}

	module.exports = getParamBytesForAlg;


/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	/*global module*/
	var Buffer = __webpack_require__(320).Buffer;

	module.exports = function toString(obj) {
	  if (typeof obj === 'string')
	    return obj;
	  if (typeof obj === 'number' || Buffer.isBuffer(obj))
	    return obj.toString();
	  return JSON.stringify(obj);
	};


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/*global module*/
	var base64url = __webpack_require__(319);
	var DataStream = __webpack_require__(324);
	var jwa = __webpack_require__(346);
	var Stream = __webpack_require__(326);
	var toString = __webpack_require__(366);
	var util = __webpack_require__(343);
	var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;

	function isObject(thing) {
	  return Object.prototype.toString.call(thing) === '[object Object]';
	}

	function safeJsonParse(thing) {
	  if (isObject(thing))
	    return thing;
	  try { return JSON.parse(thing); }
	  catch (e) { return undefined; }
	}

	function headerFromJWS(jwsSig) {
	  var encodedHeader = jwsSig.split('.', 1)[0];
	  return safeJsonParse(base64url.decode(encodedHeader, 'binary'));
	}

	function securedInputFromJWS(jwsSig) {
	  return jwsSig.split('.', 2).join('.');
	}

	function signatureFromJWS(jwsSig) {
	  return jwsSig.split('.')[2];
	}

	function payloadFromJWS(jwsSig, encoding) {
	  encoding = encoding || 'utf8';
	  var payload = jwsSig.split('.')[1];
	  return base64url.decode(payload, encoding);
	}

	function isValidJws(string) {
	  return JWS_REGEX.test(string) && !!headerFromJWS(string);
	}

	function jwsVerify(jwsSig, algorithm, secretOrKey) {
	  if (!algorithm) {
	    var err = new Error("Missing algorithm parameter for jws.verify");
	    err.code = "MISSING_ALGORITHM";
	    throw err;
	  }
	  jwsSig = toString(jwsSig);
	  var signature = signatureFromJWS(jwsSig);
	  var securedInput = securedInputFromJWS(jwsSig);
	  var algo = jwa(algorithm);
	  return algo.verify(securedInput, signature, secretOrKey);
	}

	function jwsDecode(jwsSig, opts) {
	  opts = opts || {};
	  jwsSig = toString(jwsSig);

	  if (!isValidJws(jwsSig))
	    return null;

	  var header = headerFromJWS(jwsSig);

	  if (!header)
	    return null;

	  var payload = payloadFromJWS(jwsSig);
	  if (header.typ === 'JWT' || opts.json)
	    payload = JSON.parse(payload, opts.encoding);

	  return {
	    header: header,
	    payload: payload,
	    signature: signatureFromJWS(jwsSig)
	  };
	}

	function VerifyStream(opts) {
	  opts = opts || {};
	  var secretOrKey = opts.secret||opts.publicKey||opts.key;
	  var secretStream = new DataStream(secretOrKey);
	  this.readable = true;
	  this.algorithm = opts.algorithm;
	  this.encoding = opts.encoding;
	  this.secret = this.publicKey = this.key = secretStream;
	  this.signature = new DataStream(opts.signature);
	  this.secret.once('close', function () {
	    if (!this.signature.writable && this.readable)
	      this.verify();
	  }.bind(this));

	  this.signature.once('close', function () {
	    if (!this.secret.writable && this.readable)
	      this.verify();
	  }.bind(this));
	}
	util.inherits(VerifyStream, Stream);
	VerifyStream.prototype.verify = function verify() {
	  try {
	    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
	    var obj = jwsDecode(this.signature.buffer, this.encoding);
	    this.emit('done', valid, obj);
	    this.emit('data', valid);
	    this.emit('end');
	    this.readable = false;
	    return valid;
	  } catch (e) {
	    this.readable = false;
	    this.emit('error', e);
	    this.emit('close');
	  }
	};

	VerifyStream.decode = jwsDecode;
	VerifyStream.isValid = isValidJws;
	VerifyStream.verify = jwsVerify;

	module.exports = VerifyStream;


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var JsonWebTokenError = __webpack_require__(369);
	var NotBeforeError    = __webpack_require__(370);
	var TokenExpiredError = __webpack_require__(371);
	var decode            = __webpack_require__(316);
	var jws               = __webpack_require__(317);
	var ms                = __webpack_require__(372);
	var xtend             = __webpack_require__(373);

	module.exports = function (jwtString, secretOrPublicKey, options, callback) {
	  if ((typeof options === 'function') && !callback) {
	    callback = options;
	    options = {};
	  }

	  if (!options) {
	    options = {};
	  }

	  //clone this object since we are going to mutate it.
	  options = xtend(options);
	  var done;

	  if (callback) {
	    done = function() {
	      var args = Array.prototype.slice.call(arguments, 0);
	      return process.nextTick(function() {
	        callback.apply(null, args);
	      });
	    };
	  } else {
	    done = function(err, data) {
	      if (err) throw err;
	      return data;
	    };
	  }

	  if (!jwtString){
	    return done(new JsonWebTokenError('jwt must be provided'));
	  }

	  var parts = jwtString.split('.');

	  if (parts.length !== 3){
	    return done(new JsonWebTokenError('jwt malformed'));
	  }

	  var hasSignature = parts[2].trim() !== '';

	  if (!hasSignature && secretOrPublicKey){
	    return done(new JsonWebTokenError('jwt signature is required'));
	  }

	  if (hasSignature && !secretOrPublicKey) {
	    return done(new JsonWebTokenError('secret or public key must be provided'));
	  }

	  if (!hasSignature && !options.algorithms) {
	    options.algorithms = ['none'];
	  }

	  if (!options.algorithms) {
	    options.algorithms = ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||
	                         ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY') ?
	                          [ 'RS256','RS384','RS512','ES256','ES384','ES512' ] :
	                         ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY') ?
	                          [ 'RS256','RS384','RS512' ] :
	                          [ 'HS256','HS384','HS512' ];

	  }

	  var decodedToken;
	  try {
	    decodedToken = jws.decode(jwtString);
	  } catch(err) {
	    return done(new JsonWebTokenError('invalid token'));
	  }

	  if (!decodedToken) {
	    return done(new JsonWebTokenError('invalid token'));
	  }

	  var header = decodedToken.header;

	  if (!~options.algorithms.indexOf(header.alg)) {
	    return done(new JsonWebTokenError('invalid algorithm'));
	  }

	  var valid;

	  try {
	    valid = jws.verify(jwtString, header.alg, secretOrPublicKey);
	  } catch (e) {
	    return done(e);
	  }

	  if (!valid)
	    return done(new JsonWebTokenError('invalid signature'));

	  var payload;

	  try {
	    payload = decode(jwtString);
	  } catch(err) {
	    return done(err);
	  }

	  if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
	    if (typeof payload.nbf !== 'number') {
	      return done(new JsonWebTokenError('invalid nbf value'));
	    }
	    if (payload.nbf > Math.floor(Date.now() / 1000) + (options.clockTolerance || 0)) {
	      return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
	    }
	  }

	  if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
	    if (typeof payload.exp !== 'number') {
	      return done(new JsonWebTokenError('invalid exp value'));
	    }
	    if (Math.floor(Date.now() / 1000) >= payload.exp + (options.clockTolerance || 0)) {
	      return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
	    }
	  }

	  if (options.audience) {
	    var audiences = Array.isArray(options.audience)? options.audience : [options.audience];
	    var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];

	    var match = target.some(function(aud) { return audiences.indexOf(aud) != -1; });

	    if (!match)
	      return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
	  }

	  if (options.issuer) {
	    var invalid_issuer =
	        (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||
	        (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);

	    if (invalid_issuer) {
	      return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
	    }
	  }

	  if (options.subject) {
	    if (payload.sub !== options.subject) {
	      return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
	    }
	  }

	  if (options.jwtid) {
	    if (payload.jti !== options.jwtid) {
	      return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
	    }
	  }

	  if (options.maxAge) {
	    var maxAge = ms(options.maxAge);
	    if (typeof payload.iat !== 'number') {
	      return done(new JsonWebTokenError('iat required when maxAge is specified'));
	    }
	    if (Date.now() - (payload.iat * 1000) > maxAge + (options.clockTolerance || 0) * 1000) {
	      return done(new TokenExpiredError('maxAge exceeded', new Date(payload.iat * 1000 + maxAge)));
	    }
	  }

	  return done(null, payload);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 369 */
/***/ function(module, exports) {

	var JsonWebTokenError = function (message, error) {
	  Error.call(this, message);
	  Error.captureStackTrace(this, this.constructor);
	  this.name = 'JsonWebTokenError';
	  this.message = message;
	  if (error) this.inner = error;
	};

	JsonWebTokenError.prototype = Object.create(Error.prototype);
	JsonWebTokenError.prototype.constructor = JsonWebTokenError;

	module.exports = JsonWebTokenError;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var JsonWebTokenError = __webpack_require__(369);

	var NotBeforeError = function (message, date) {
	  JsonWebTokenError.call(this, message);
	  this.name = 'NotBeforeError';
	  this.date = date;
	};

	NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);

	NotBeforeError.prototype.constructor = NotBeforeError;

	module.exports = NotBeforeError;

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var JsonWebTokenError = __webpack_require__(369);

	var TokenExpiredError = function (message, expiredAt) {
	  JsonWebTokenError.call(this, message);
	  this.name = 'TokenExpiredError';
	  this.expiredAt = expiredAt;
	};

	TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);

	TokenExpiredError.prototype.constructor = TokenExpiredError;

	module.exports = TokenExpiredError;

/***/ },
/* 372 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = extend

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function extend() {
	    var target = {}

	    for (var i = 0; i < arguments.length; i++) {
	        var source = arguments[i]

	        for (var key in source) {
	            if (hasOwnProperty.call(source, key)) {
	                target[key] = source[key]
	            }
	        }
	    }

	    return target
	}


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var Joi = __webpack_require__(375);
	var timespan = __webpack_require__(400);
	var xtend = __webpack_require__(373);
	var jws = __webpack_require__(317);
	var once = __webpack_require__(401);

	var sign_options_schema = Joi.object().keys({
	  expiresIn: [Joi.number().integer(), Joi.string()],
	  notBefore: [Joi.number().integer(), Joi.string()],
	  audience: [Joi.string(), Joi.array()],
	  algorithm: Joi.string().valid('RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none'),
	  header: Joi.object(),
	  encoding: Joi.string(),
	  issuer: Joi.string(),
	  subject: Joi.string(),
	  jwtid: Joi.string(),
	  noTimestamp: Joi.boolean()
	});

	var registered_claims_schema = Joi.object().keys({
	  iat: Joi.number(),
	  exp: Joi.number(),
	  nbf: Joi.number()
	}).unknown();


	var options_to_payload = {
	  'audience': 'aud',
	  'issuer': 'iss',
	  'subject': 'sub',
	  'jwtid': 'jti'
	};

	var options_for_objects = [
	  'expiresIn',
	  'notBefore',
	  'noTimestamp',
	  'audience',
	  'issuer',
	  'subject',
	  'jwtid',
	];

	module.exports = function (payload, secretOrPrivateKey, options, callback) {
	  options = options || {};

	  var isObjectPayload = typeof payload === 'object' &&
	                        !Buffer.isBuffer(payload);

	  var header = xtend({
	    alg: options.algorithm || 'HS256',
	    typ: isObjectPayload ? 'JWT' : undefined
	  }, options.header);

	  function failure(err) {
	    if (callback) {
	      return callback(err);
	    }
	    throw err;
	  }


	  if (typeof payload === 'undefined') {
	    return failure(new Error('payload is required'));
	  } else if (isObjectPayload) {
	    var payload_validation_result = registered_claims_schema.validate(payload);

	    if (payload_validation_result.error) {
	      return failure(payload_validation_result.error);
	    }

	    payload = xtend(payload);
	  } else {
	    var invalid_options = options_for_objects.filter(function (opt) {
	      return typeof options[opt] !== 'undefined';
	    });

	    if (invalid_options.length > 0) {
	      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));
	    }
	  }

	  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
	    return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
	  }

	  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
	    return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
	  }

	  var validation_result = sign_options_schema.validate(options);

	  if (validation_result.error) {
	    return failure(validation_result.error);
	  }

	  var timestamp = payload.iat || Math.floor(Date.now() / 1000);

	  if (!options.noTimestamp) {
	    payload.iat = timestamp;
	  } else {
	    delete payload.iat;
	  }

	  if (typeof options.notBefore !== 'undefined') {
	    payload.nbf = timespan(options.notBefore);
	    if (typeof payload.nbf === 'undefined') {
	      return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
	    }
	  }

	  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
	    payload.exp = timespan(options.expiresIn, timestamp);
	    if (typeof payload.exp === 'undefined') {
	      return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
	    }
	  }

	  Object.keys(options_to_payload).forEach(function (key) {
	    var claim = options_to_payload[key];
	    if (typeof options[key] !== 'undefined') {
	      if (typeof payload[claim] !== 'undefined') {
	        return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
	      }
	      payload[claim] = options[key];
	    }
	  });

	  var encoding = options.encoding || 'utf8';

	  if (typeof callback === 'function') {
	    callback = callback && once(callback);

	    jws.createSign({
	      header: header,
	      privateKey: secretOrPrivateKey,
	      payload: payload,
	      encoding: encoding
	    }).once('error', callback)
	      .once('done', function (signature) {
	        callback(null, signature);
	      });
	  } else {
	    return jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Any = __webpack_require__(376);
	var Cast = __webpack_require__(383);
	var Ref = __webpack_require__(380);


	// Declare internals

	var internals = {
	    alternatives: __webpack_require__(395),
	    array: __webpack_require__(398),
	    boolean: __webpack_require__(394),
	    binary: __webpack_require__(399),
	    date: __webpack_require__(384),
	    number: __webpack_require__(393),
	    object: __webpack_require__(396),
	    string: __webpack_require__(387)
	};


	internals.root = function () {

	    var any = new Any();

	    var root = any.clone();
	    root.any = function () {

	        return any;
	    };

	    root.alternatives = root.alt = function () {

	        return arguments.length ? internals.alternatives.try.apply(internals.alternatives, arguments) : internals.alternatives;
	    };

	    root.array = function () {

	        return internals.array;
	    };

	    root.boolean = root.bool = function () {

	        return internals.boolean;
	    };

	    root.binary = function () {

	        return internals.binary;
	    };

	    root.date = function () {

	        return internals.date;
	    };

	    root.func = function () {

	        return internals.object._func();
	    };

	    root.number = function () {

	        return internals.number;
	    };

	    root.object = function () {

	        return arguments.length ? internals.object.keys.apply(internals.object, arguments) : internals.object;
	    };

	    root.string = function () {

	        return internals.string;
	    };

	    root.ref = function () {

	        return Ref.create.apply(null, arguments);
	    };

	    root.isRef = function (ref) {

	        return Ref.isRef(ref);
	    };

	    root.validate = function (value /*, [schema], [options], callback */) {

	        var last = arguments[arguments.length - 1];
	        var callback = typeof last === 'function' ? last : null;

	        var count = arguments.length - (callback ? 1 : 0);
	        if (count === 1) {
	            return any.validate(value, callback);
	        }

	        var options = count === 3 ? arguments[2] : {};
	        var schema = root.compile(arguments[1]);

	        return schema._validateWithOptions(value, options, callback);
	    };

	    root.describe = function () {

	        var schema = arguments.length ? root.compile(arguments[0]) : any;
	        return schema.describe();
	    };

	    root.compile = function (schema) {

	        try {
	            return Cast.schema(schema);
	        }
	        catch (err) {
	            if (err.hasOwnProperty('path')) {
	                err.message += '(' + err.path + ')';
	            }
	            throw err;
	        }
	    };

	    root.assert = function (value, schema, message) {

	        root.attempt(value, schema, message);
	    };

	    root.attempt = function (value, schema, message) {

	        var result = root.validate(value, schema);
	        var error = result.error;
	        if (error) {
	            if (!message) {
	                error.message = error.annotate();
	                throw error;
	            }

	            if (!(message instanceof Error)) {
	                error.message = message + ' ' + error.annotate();
	                throw error;
	            }

	            throw message;
	        }

	        return result.value;
	    };

	    return root;
	};


	module.exports = internals.root();


/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Load modules

	var Hoek = __webpack_require__(377);
	var Ref = __webpack_require__(380);
	var Errors = __webpack_require__(381);
	var Alternatives = null;                // Delay-loaded to prevent circular dependencies
	var Cast = null;


	// Declare internals

	var internals = {};


	internals.defaults = {
	    abortEarly: true,
	    convert: true,
	    allowUnknown: false,
	    skipFunctions: false,
	    stripUnknown: false,
	    language: {},
	    presence: 'optional',
	    raw: false,
	    strip: false,
	    noDefaults: false

	    // context: null
	};


	internals.checkOptions = function (options) {

	    var optionType = {
	        abortEarly: 'boolean',
	        convert: 'boolean',
	        allowUnknown: 'boolean',
	        skipFunctions: 'boolean',
	        stripUnknown: 'boolean',
	        language: 'object',
	        presence: ['string', 'required', 'optional', 'forbidden', 'ignore'],
	        raw: 'boolean',
	        context: 'object',
	        strip: 'boolean',
	        noDefaults: 'boolean'
	    };

	    var keys = Object.keys(options);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var opt = optionType[key];
	        var type = opt;
	        var values = null;

	        if (Array.isArray(opt)) {
	            type = opt[0];
	            values = opt.slice(1);
	        }

	        Hoek.assert(type, 'unknown key ' + key);
	        Hoek.assert(typeof options[key] === type, key + ' should be of type ' + type);
	        if (values) {
	            Hoek.assert(values.indexOf(options[key]) >= 0, key + ' should be one of ' + values.join(', '));
	        }
	    }
	};


	module.exports = internals.Any = function () {

	    Cast = Cast || __webpack_require__(383);

	    this.isJoi = true;
	    this._type = 'any';
	    this._settings = null;
	    this._valids = new internals.Set();
	    this._invalids = new internals.Set();
	    this._tests = [];
	    this._refs = [];
	    this._flags = { /*
	        presence: 'optional',                   // optional, required, forbidden, ignore
	        allowOnly: false,
	        allowUnknown: undefined,
	        default: undefined,
	        forbidden: false,
	        encoding: undefined,
	        insensitive: false,
	        trim: false,
	        case: undefined,                        // upper, lower
	        empty: undefined,
	        func: false
	    */ };

	    this._description = null;
	    this._unit = null;
	    this._notes = [];
	    this._tags = [];
	    this._examples = [];
	    this._meta = [];

	    this._inner = {};                           // Hash of arrays of immutable objects
	};


	internals.Any.prototype.isImmutable = true;     // Prevents Hoek from deep cloning schema objects


	internals.Any.prototype.clone = function () {

	    var obj = Object.create(Object.getPrototypeOf(this));

	    obj.isJoi = true;
	    obj._type = this._type;
	    obj._settings = internals.concatSettings(this._settings);
	    obj._valids = Hoek.clone(this._valids);
	    obj._invalids = Hoek.clone(this._invalids);
	    obj._tests = this._tests.slice();
	    obj._refs = this._refs.slice();
	    obj._flags = Hoek.clone(this._flags);

	    obj._description = this._description;
	    obj._unit = this._unit;
	    obj._notes = this._notes.slice();
	    obj._tags = this._tags.slice();
	    obj._examples = this._examples.slice();
	    obj._meta = this._meta.slice();

	    obj._inner = {};
	    var inners = Object.keys(this._inner);
	    for (var i = 0, il = inners.length; i < il; ++i) {
	        var key = inners[i];
	        obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
	    }

	    return obj;
	};


	internals.Any.prototype.concat = function (schema) {

	    Hoek.assert(schema && schema.isJoi, 'Invalid schema object');
	    Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

	    var obj = this.clone();

	    if (this._type === 'any' && schema._type !== 'any') {

	        // Reset values as if we were "this"
	        var tmpObj = schema.clone();
	        var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit',
	            '_notes', '_tags', '_examples', '_meta', '_inner'];

	        for (var j = 0, jl = keysToRestore.length; j < jl; ++j) {
	            tmpObj[keysToRestore[j]] = obj[keysToRestore[j]];
	        }

	        obj = tmpObj;
	    }

	    obj._settings = obj._settings ? internals.concatSettings(obj._settings, schema._settings) : schema._settings;
	    obj._valids.merge(schema._valids, schema._invalids);
	    obj._invalids.merge(schema._invalids, schema._valids);
	    obj._tests = obj._tests.concat(schema._tests);
	    obj._refs = obj._refs.concat(schema._refs);
	    Hoek.merge(obj._flags, schema._flags);

	    obj._description = schema._description || obj._description;
	    obj._unit = schema._unit || obj._unit;
	    obj._notes = obj._notes.concat(schema._notes);
	    obj._tags = obj._tags.concat(schema._tags);
	    obj._examples = obj._examples.concat(schema._examples);
	    obj._meta = obj._meta.concat(schema._meta);

	    var inners = Object.keys(schema._inner);
	    var isObject = obj._type === 'object';
	    for (var i = 0, il = inners.length; i < il; ++i) {
	        var key = inners[i];
	        var source = schema._inner[key];
	        if (source) {
	            var target = obj._inner[key];
	            if (target) {
	                if (isObject && key === 'children') {
	                    var keys = {};

	                    for (var k = 0, kl = target.length; k < kl; ++k) {
	                        keys[target[k].key] = k;
	                    }

	                    for (k = 0, kl = source.length; k < kl; ++k) {
	                        var sourceKey = source[k].key;
	                        if (keys[sourceKey] >= 0) {
	                            target[keys[sourceKey]] = {
	                                key: sourceKey,
	                                schema: target[keys[sourceKey]].schema.concat(source[k].schema)
	                            };
	                        }
	                        else {
	                            target.push(source[k]);
	                        }
	                    }
	                }
	                else {
	                    obj._inner[key] = obj._inner[key].concat(source);
	                }
	            }
	            else {
	                obj._inner[key] = source.slice();
	            }
	        }
	    }

	    return obj;
	};


	internals.Any.prototype._test = function (name, arg, func) {

	    Hoek.assert(!this._flags.allowOnly, 'Cannot define rules when valid values specified');

	    var obj = this.clone();
	    obj._tests.push({ func: func, name: name, arg: arg });
	    return obj;
	};


	internals.Any.prototype.options = function (options) {

	    Hoek.assert(!options.context, 'Cannot override context');
	    internals.checkOptions(options);

	    var obj = this.clone();
	    obj._settings = internals.concatSettings(obj._settings, options);
	    return obj;
	};


	internals.Any.prototype.strict = function (isStrict) {

	    var obj = this.clone();
	    obj._settings = obj._settings || {};
	    obj._settings.convert = isStrict === undefined ? false : !isStrict;
	    return obj;
	};


	internals.Any.prototype.raw = function (isRaw) {

	    var obj = this.clone();
	    obj._settings = obj._settings || {};
	    obj._settings.raw = isRaw === undefined ? true : isRaw;
	    return obj;
	};


	internals.Any.prototype._allow = function () {

	    var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	    for (var i = 0, il = values.length; i < il; ++i) {
	        var value = values[i];

	        Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	        this._invalids.remove(value);
	        this._valids.add(value, this._refs);
	    }
	};


	internals.Any.prototype.allow = function () {

	    var obj = this.clone();
	    obj._allow.apply(obj, arguments);
	    return obj;
	};


	internals.Any.prototype.valid = internals.Any.prototype.only = internals.Any.prototype.equal = function () {

	    Hoek.assert(!this._tests.length, 'Cannot set valid values when rules specified');

	    var obj = this.allow.apply(this, arguments);
	    obj._flags.allowOnly = true;
	    return obj;
	};


	internals.Any.prototype.invalid = internals.Any.prototype.disallow = internals.Any.prototype.not = function (value) {

	    var obj = this.clone();
	    var values = Hoek.flatten(Array.prototype.slice.call(arguments));
	    for (var i = 0, il = values.length; i < il; ++i) {
	        value = values[i];

	        Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
	        obj._valids.remove(value);
	        obj._invalids.add(value, this._refs);
	    }

	    return obj;
	};


	internals.Any.prototype.required = internals.Any.prototype.exist = function () {

	    var obj = this.clone();
	    obj._flags.presence = 'required';
	    return obj;
	};


	internals.Any.prototype.optional = function () {

	    var obj = this.clone();
	    obj._flags.presence = 'optional';
	    return obj;
	};


	internals.Any.prototype.forbidden = function () {

	    var obj = this.clone();
	    obj._flags.presence = 'forbidden';
	    return obj;
	};


	internals.Any.prototype.strip = function () {

	    var obj = this.clone();
	    obj._flags.strip = true;
	    return obj;
	};


	internals.Any.prototype.applyFunctionToChildren = function (children, fn, args, root) {

	    children = [].concat(children);

	    if (children.length !== 1 || children[0] !== '') {
	        root = root ? (root + '.') : '';

	        var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {

	            return root + child;
	        });

	        throw new Error('unknown key(s) ' + extraChildren.join(', '));
	    }

	    return this[fn].apply(this, args);
	};


	internals.Any.prototype.default = function (value, description) {

	    if (typeof value === 'function' &&
	        !Ref.isRef(value)) {

	        if (!value.description &&
	            description) {

	            value.description = description;
	        }

	        if (!this._flags.func) {
	            Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
	        }
	    }

	    var obj = this.clone();
	    obj._flags.default = value;
	    Ref.push(obj._refs, value);
	    return obj;
	};


	internals.Any.prototype.empty = function (schema) {

	    var obj;
	    if (schema === undefined) {
	        obj = this.clone();
	        obj._flags.empty = undefined;
	    }
	    else {
	        schema = Cast.schema(schema);

	        obj = this.clone();
	        obj._flags.empty = schema;
	    }

	    return obj;
	};


	internals.Any.prototype.when = function (ref, options) {

	    Hoek.assert(options && typeof options === 'object', 'Invalid options');
	    Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

	    var then = options.then ? this.concat(Cast.schema(options.then)) : this;
	    var otherwise = options.otherwise ? this.concat(Cast.schema(options.otherwise)) : this;

	    Alternatives = Alternatives || __webpack_require__(395);
	    var obj = Alternatives.when(ref, { is: options.is, then: then, otherwise: otherwise });
	    obj._flags.presence = 'ignore';
	    return obj;
	};


	internals.Any.prototype.description = function (desc) {

	    Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

	    var obj = this.clone();
	    obj._description = desc;
	    return obj;
	};


	internals.Any.prototype.notes = function (notes) {

	    Hoek.assert(notes && (typeof notes === 'string' || Array.isArray(notes)), 'Notes must be a non-empty string or array');

	    var obj = this.clone();
	    obj._notes = obj._notes.concat(notes);
	    return obj;
	};


	internals.Any.prototype.tags = function (tags) {

	    Hoek.assert(tags && (typeof tags === 'string' || Array.isArray(tags)), 'Tags must be a non-empty string or array');

	    var obj = this.clone();
	    obj._tags = obj._tags.concat(tags);
	    return obj;
	};

	internals.Any.prototype.meta = function (meta) {

	    Hoek.assert(meta !== undefined, 'Meta cannot be undefined');

	    var obj = this.clone();
	    obj._meta = obj._meta.concat(meta);
	    return obj;
	};


	internals.Any.prototype.example = function (value) {

	    Hoek.assert(arguments.length, 'Missing example');
	    var result = this._validate(value, null, internals.defaults);
	    Hoek.assert(!result.errors, 'Bad example:', result.errors && Errors.process(result.errors, value));

	    var obj = this.clone();
	    obj._examples = obj._examples.concat(value);
	    return obj;
	};


	internals.Any.prototype.unit = function (name) {

	    Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

	    var obj = this.clone();
	    obj._unit = name;
	    return obj;
	};


	internals._try = function (fn, arg) {

	    var err;
	    var result;

	    try {
	        result = fn.call(null, arg);
	    } catch (e) {
	        err = e;
	    }

	    return {
	        value: result,
	        error: err
	    };
	};


	internals.Any.prototype._validate = function (value, state, options, reference) {

	    var self = this;
	    var originalValue = value;

	    // Setup state and settings

	    state = state || { key: '', path: '', parent: null, reference: reference };

	    if (this._settings) {
	        options = internals.concatSettings(options, this._settings);
	    }

	    var errors = [];
	    var finish = function () {

	        var finalValue;

	        if (!self._flags.strip) {
	            if (value !== undefined) {
	                finalValue = options.raw ? originalValue : value;
	            }
	            else if (options.noDefaults) {
	                finalValue = originalValue;
	            }
	            else if (Ref.isRef(self._flags.default)) {
	                finalValue = self._flags.default(state.parent, options);
	            }
	            else if (typeof self._flags.default === 'function' &&
	                    !(self._flags.func && !self._flags.default.description)) {

	                var arg;

	                if (state.parent !== null &&
	                    self._flags.default.length > 0) {

	                    arg = Hoek.clone(state.parent);
	                }

	                var defaultValue = internals._try(self._flags.default, arg);
	                finalValue = defaultValue.value;
	                if (defaultValue.error) {
	                    errors.push(Errors.create('any.default', defaultValue.error, state, options));
	                }
	            }
	            else {
	                finalValue = Hoek.clone(self._flags.default);
	            }
	        }

	        return {
	            value: finalValue,
	            errors: errors.length ? errors : null
	        };
	    };

	    // Check presence requirements

	    var presence = this._flags.presence || options.presence;
	    if (presence === 'optional') {
	        if (value === undefined) {
	            var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
	            if (isDeepDefault && this._type === 'object') {
	                value = {};
	            }
	            else {
	                return finish();
	            }
	        }
	    }
	    else if (presence === 'required' &&
	            value === undefined) {

	        errors.push(Errors.create('any.required', null, state, options));
	        return finish();
	    }
	    else if (presence === 'forbidden') {
	        if (value === undefined) {
	            return finish();
	        }

	        errors.push(Errors.create('any.unknown', null, state, options));
	        return finish();
	    }

	    if (this._flags.empty && !this._flags.empty._validate(value, null, internals.defaults).errors) {
	        value = undefined;
	        return finish();
	    }

	    // Check allowed and denied values using the original value

	    if (this._valids.has(value, state, options, this._flags.insensitive)) {
	        return finish();
	    }

	    if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	        errors.push(Errors.create(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
	        if (options.abortEarly ||
	            value === undefined) {          // No reason to keep validating missing value

	            return finish();
	        }
	    }

	    // Convert value and validate type

	    if (this._base) {
	        var base = this._base.call(this, value, state, options);
	        if (base.errors) {
	            value = base.value;
	            errors = errors.concat(base.errors);
	            return finish();                            // Base error always aborts early
	        }

	        if (base.value !== value) {
	            value = base.value;

	            // Check allowed and denied values using the converted value

	            if (this._valids.has(value, state, options, this._flags.insensitive)) {
	                return finish();
	            }

	            if (this._invalids.has(value, state, options, this._flags.insensitive)) {
	                errors.push(Errors.create('any.invalid', null, state, options));
	                if (options.abortEarly) {
	                    return finish();
	                }
	            }
	        }
	    }

	    // Required values did not match

	    if (this._flags.allowOnly) {
	        errors.push(Errors.create('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
	        if (options.abortEarly) {
	            return finish();
	        }
	    }

	    // Helper.validate tests

	    for (var i = 0, il = this._tests.length; i < il; ++i) {
	        var test = this._tests[i];
	        var err = test.func.call(this, value, state, options);
	        if (err) {
	            errors.push(err);
	            if (options.abortEarly) {
	                return finish();
	            }
	        }
	    }

	    return finish();
	};


	internals.Any.prototype._validateWithOptions = function (value, options, callback) {

	    if (options) {
	        internals.checkOptions(options);
	    }

	    var settings = internals.concatSettings(internals.defaults, options);
	    var result = this._validate(value, null, settings);
	    var errors = Errors.process(result.errors, value);

	    if (callback) {
	        return callback(errors, result.value);
	    }

	    return { error: errors, value: result.value };
	};


	internals.Any.prototype.validate = function (value, callback) {

	    var result = this._validate(value, null, internals.defaults);
	    var errors = Errors.process(result.errors, value);

	    if (callback) {
	        return callback(errors, result.value);
	    }

	    return { error: errors, value: result.value };
	};


	internals.Any.prototype.describe = function () {

	    var description = {
	        type: this._type
	    };

	    var flags = Object.keys(this._flags);
	    if (flags.length) {
	        if (this._flags.empty) {
	            description.flags = {};
	            for (var f = 0, fl = flags.length; f < fl; ++f) {
	                var flag = flags[f];
	                description.flags[flag] = flag === 'empty' ? this._flags[flag].describe() : this._flags[flag];
	            }
	        }
	        else {
	            description.flags = this._flags;
	        }
	    }

	    if (this._description) {
	        description.description = this._description;
	    }

	    if (this._notes.length) {
	        description.notes = this._notes;
	    }

	    if (this._tags.length) {
	        description.tags = this._tags;
	    }

	    if (this._meta.length) {
	        description.meta = this._meta;
	    }

	    if (this._examples.length) {
	        description.examples = this._examples;
	    }

	    if (this._unit) {
	        description.unit = this._unit;
	    }

	    var valids = this._valids.values();
	    if (valids.length) {
	        description.valids = valids;
	    }

	    var invalids = this._invalids.values();
	    if (invalids.length) {
	        description.invalids = invalids;
	    }

	    description.rules = [];

	    for (var i = 0, il = this._tests.length; i < il; ++i) {
	        var validator = this._tests[i];
	        var item = { name: validator.name };
	        if (validator.arg !== void 0) {
	            item.arg = validator.arg;
	        }
	        description.rules.push(item);
	    }

	    if (!description.rules.length) {
	        delete description.rules;
	    }

	    var label = Hoek.reach(this._settings, 'language.label');
	    if (label) {
	        description.label = label;
	    }

	    return description;
	};

	internals.Any.prototype.label = function (name) {

	    Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

	    var obj = this.clone();
	    var options = { language: { label: name } };

	    // If language.label is set, it should override this label
	    obj._settings = internals.concatSettings(options, obj._settings);
	    return obj;
	};


	// Set

	internals.Set = function () {

	    this._set = [];
	};


	internals.Set.prototype.add = function (value, refs) {

	    Hoek.assert(value === null || value === undefined || value instanceof Date || Buffer.isBuffer(value) || Ref.isRef(value) || (typeof value !== 'function' && typeof value !== 'object'), 'Value cannot be an object or function');

	    if (typeof value !== 'function' &&
	        this.has(value, null, null, false)) {

	        return;
	    }

	    Ref.push(refs, value);
	    this._set.push(value);
	};


	internals.Set.prototype.merge = function (add, remove) {

	    for (var i = 0, il = add._set.length; i < il; ++i) {
	        this.add(add._set[i]);
	    }

	    for (i = 0, il = remove._set.length; i < il; ++i) {
	        this.remove(remove._set[i]);
	    }
	};


	internals.Set.prototype.remove = function (value) {

	    this._set = this._set.filter(function (item) {

	        return value !== item;
	    });
	};


	internals.Set.prototype.has = function (value, state, options, insensitive) {

	    for (var i = 0, il = this._set.length; i < il; ++i) {
	        var items = this._set[i];

	        if (Ref.isRef(items)) {
	            items = items(state.reference || state.parent, options);
	        }

	        if (!Array.isArray(items)) {
	            items = [items];
	        }

	        for (var j = 0, jl = items.length; j < jl; ++j) {
	            var item = items[j];
	            if (typeof value !== typeof item) {
	                continue;
	            }

	            if (value === item ||
	                (value instanceof Date && item instanceof Date && value.getTime() === item.getTime()) ||
	                (insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase()) ||
	                (Buffer.isBuffer(value) && Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary'))) {

	                return true;
	            }
	        }
	    }

	    return false;
	};


	internals.Set.prototype.values = function (options) {

	    if (options && options.stripUndefined) {
	        var values = [];

	        for (var i = 0, il = this._set.length; i < il; ++i) {
	            var item = this._set[i];
	            if (item !== undefined) {
	                values.push(item);
	            }
	        }

	        return values;
	    }

	    return this._set.slice();
	};


	internals.concatSettings = function (target, source) {

	    // Used to avoid cloning context

	    if (!target &&
	        !source) {

	        return null;
	    }

	    var key, obj = {};

	    if (target) {
	        var tKeys = Object.keys(target);
	        for (var i = 0, il = tKeys.length; i < il; ++i) {
	            key = tKeys[i];
	            obj[key] = target[key];
	        }
	    }

	    if (source) {
	        var sKeys = Object.keys(source);
	        for (var j = 0, jl = sKeys.length; j < jl; ++j) {
	            key = sKeys[j];
	            if (key !== 'language' ||
	                !obj.hasOwnProperty(key)) {

	                obj[key] = source[key];
	            }
	            else {
	                obj[key] = Hoek.applyToDefaults(obj[key], source[key]);
	            }
	        }
	    }

	    return obj;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, process) {// Load modules

	var Crypto = __webpack_require__(348);
	var Path = __webpack_require__(378);
	var Util = __webpack_require__(343);
	var Escape = __webpack_require__(379);


	// Declare internals

	var internals = {};


	// Clone object or array

	exports.clone = function (obj, seen) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    seen = seen || { orig: [], copy: [] };

	    var lookup = seen.orig.indexOf(obj);
	    if (lookup !== -1) {
	        return seen.copy[lookup];
	    }

	    var newObj;
	    var cloneDeep = false;

	    if (!Array.isArray(obj)) {
	        if (Buffer.isBuffer(obj)) {
	            newObj = new Buffer(obj);
	        }
	        else if (obj instanceof Date) {
	            newObj = new Date(obj.getTime());
	        }
	        else if (obj instanceof RegExp) {
	            newObj = new RegExp(obj);
	        }
	        else {
	            var proto = Object.getPrototypeOf(obj);
	            if (proto &&
	                proto.isImmutable) {

	                newObj = obj;
	            }
	            else {
	                newObj = Object.create(proto);
	                cloneDeep = true;
	            }
	        }
	    }
	    else {
	        newObj = [];
	        cloneDeep = true;
	    }

	    seen.orig.push(obj);
	    seen.copy.push(newObj);

	    if (cloneDeep) {
	        var keys = Object.getOwnPropertyNames(obj);
	        for (var i = 0, il = keys.length; i < il; ++i) {
	            var key = keys[i];
	            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	            if (descriptor &&
	                (descriptor.get ||
	                 descriptor.set)) {

	                Object.defineProperty(newObj, key, descriptor);
	            }
	            else {
	                newObj[key] = exports.clone(obj[key], seen);
	            }
	        }
	    }

	    return newObj;
	};


	// Merge all the properties of source into target, source wins in conflict, and by default null and undefined from source are applied
	/*eslint-disable */
	exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {
	/*eslint-enable */
	    exports.assert(target && typeof target === 'object', 'Invalid target value: must be an object');
	    exports.assert(source === null || source === undefined || typeof source === 'object', 'Invalid source value: must be null, undefined, or an object');

	    if (!source) {
	        return target;
	    }

	    if (Array.isArray(source)) {
	        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
	        if (isMergeArrays === false) {                                                  // isMergeArrays defaults to true
	            target.length = 0;                                                          // Must not change target assignment
	        }

	        for (var i = 0, il = source.length; i < il; ++i) {
	            target.push(exports.clone(source[i]));
	        }

	        return target;
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];
	        if (value &&
	            typeof value === 'object') {

	            if (!target[key] ||
	                typeof target[key] !== 'object' ||
	                (Array.isArray(target[key]) ^ Array.isArray(value)) ||
	                value instanceof Date ||
	                Buffer.isBuffer(value) ||
	                value instanceof RegExp) {

	                target[key] = exports.clone(value);
	            }
	            else {
	                exports.merge(target[key], value, isNullOverride, isMergeArrays);
	            }
	        }
	        else {
	            if (value !== null &&
	                value !== undefined) {                              // Explicit to preserve empty strings

	                target[key] = value;
	            }
	            else if (isNullOverride !== false) {                    // Defaults to true
	                target[key] = value;
	            }
	        }
	    }

	    return target;
	};


	// Apply options to a copy of the defaults

	exports.applyToDefaults = function (defaults, options, isNullOverride) {

	    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');

	    if (!options) {                                                 // If no options, return null
	        return null;
	    }

	    var copy = exports.clone(defaults);

	    if (options === true) {                                         // If options is set to true, use defaults
	        return copy;
	    }

	    return exports.merge(copy, options, isNullOverride === true, false);
	};


	// Clone an object except for the listed keys which are shallow copied

	exports.cloneWithShallow = function (source, keys) {

	    if (!source ||
	        typeof source !== 'object') {

	        return source;
	    }

	    var storage = internals.store(source, keys);    // Move shallow copy items to storage
	    var copy = exports.clone(source);               // Deep copy the rest
	    internals.restore(copy, source, storage);       // Shallow copy the stored items and restore
	    return copy;
	};


	internals.store = function (source, keys) {

	    var storage = {};
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var value = exports.reach(source, key);
	        if (value !== undefined) {
	            storage[key] = value;
	            internals.reachSet(source, key, undefined);
	        }
	    }

	    return storage;
	};


	internals.restore = function (copy, source, storage) {

	    var keys = Object.keys(storage);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        internals.reachSet(copy, key, storage[key]);
	        internals.reachSet(source, key, storage[key]);
	    }
	};


	internals.reachSet = function (obj, key, value) {

	    var path = key.split('.');
	    var ref = obj;
	    for (var i = 0, il = path.length; i < il; ++i) {
	        var segment = path[i];
	        if (i + 1 === il) {
	            ref[segment] = value;
	        }

	        ref = ref[segment];
	    }
	};


	// Apply options to defaults except for the listed keys which are shallow copied from option without merging

	exports.applyToDefaultsWithShallow = function (defaults, options, keys) {

	    exports.assert(defaults && typeof defaults === 'object', 'Invalid defaults value: must be an object');
	    exports.assert(!options || options === true || typeof options === 'object', 'Invalid options value: must be true, falsy or an object');
	    exports.assert(keys && Array.isArray(keys), 'Invalid keys');

	    if (!options) {                                                 // If no options, return null
	        return null;
	    }

	    var copy = exports.cloneWithShallow(defaults, keys);

	    if (options === true) {                                         // If options is set to true, use defaults
	        return copy;
	    }

	    var storage = internals.store(options, keys);   // Move shallow copy items to storage
	    exports.merge(copy, options, false, false);     // Deep copy the rest
	    internals.restore(copy, options, storage);      // Shallow copy the stored items and restore
	    return copy;
	};


	// Deep object or array comparison

	exports.deepEqual = function (obj, ref, options, seen) {

	    options = options || { prototype: true };

	    var type = typeof obj;

	    if (type !== typeof ref) {
	        return false;
	    }

	    if (type !== 'object' ||
	        obj === null ||
	        ref === null) {

	        if (obj === ref) {                                                      // Copied from Deep-eql, copyright(c) 2013 Jake Luer, jake@alogicalparadox.com, MIT Licensed, https://github.com/chaijs/deep-eql
	            return obj !== 0 || 1 / obj === 1 / ref;        // -0 / +0
	        }

	        return obj !== obj && ref !== ref;                  // NaN
	    }

	    seen = seen || [];
	    if (seen.indexOf(obj) !== -1) {
	        return true;                            // If previous comparison failed, it would have stopped execution
	    }

	    seen.push(obj);

	    if (Array.isArray(obj)) {
	        if (!Array.isArray(ref)) {
	            return false;
	        }

	        if (!options.part && obj.length !== ref.length) {
	            return false;
	        }

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (options.part) {
	                var found = false;
	                for (var r = 0, rl = ref.length; r < rl; ++r) {
	                    if (exports.deepEqual(obj[i], ref[r], options, seen)) {
	                        found = true;
	                        break;
	                    }
	                }

	                return found;
	            }

	            if (!exports.deepEqual(obj[i], ref[i], options, seen)) {
	                return false;
	            }
	        }

	        return true;
	    }

	    if (Buffer.isBuffer(obj)) {
	        if (!Buffer.isBuffer(ref)) {
	            return false;
	        }

	        if (obj.length !== ref.length) {
	            return false;
	        }

	        for (var j = 0, jl = obj.length; j < jl; ++j) {
	            if (obj[j] !== ref[j]) {
	                return false;
	            }
	        }

	        return true;
	    }

	    if (obj instanceof Date) {
	        return (ref instanceof Date && obj.getTime() === ref.getTime());
	    }

	    if (obj instanceof RegExp) {
	        return (ref instanceof RegExp && obj.toString() === ref.toString());
	    }

	    if (options.prototype) {
	        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
	            return false;
	        }
	    }

	    var keys = Object.getOwnPropertyNames(obj);

	    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
	        return false;
	    }

	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
	        if (descriptor.get) {
	            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
	                return false;
	            }
	        }
	        else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
	            return false;
	        }
	    }

	    return true;
	};


	// Remove duplicate items from array

	exports.unique = function (array, key) {

	    var index = {};
	    var result = [];

	    for (var i = 0, il = array.length; i < il; ++i) {
	        var id = (key ? array[i][key] : array[i]);
	        if (index[id] !== true) {

	            result.push(array[i]);
	            index[id] = true;
	        }
	    }

	    return result;
	};


	// Convert array into object

	exports.mapToObject = function (array, key) {

	    if (!array) {
	        return null;
	    }

	    var obj = {};
	    for (var i = 0, il = array.length; i < il; ++i) {
	        if (key) {
	            if (array[i][key]) {
	                obj[array[i][key]] = true;
	            }
	        }
	        else {
	            obj[array[i]] = true;
	        }
	    }

	    return obj;
	};


	// Find the common unique items in two arrays

	exports.intersect = function (array1, array2, justFirst) {

	    if (!array1 || !array2) {
	        return [];
	    }

	    var common = [];
	    var hash = (Array.isArray(array1) ? exports.mapToObject(array1) : array1);
	    var found = {};
	    for (var i = 0, il = array2.length; i < il; ++i) {
	        if (hash[array2[i]] && !found[array2[i]]) {
	            if (justFirst) {
	                return array2[i];
	            }

	            common.push(array2[i]);
	            found[array2[i]] = true;
	        }
	    }

	    return (justFirst ? null : common);
	};


	// Test if the reference contains the values

	exports.contain = function (ref, values, options) {

	    /*
	        string -> string(s)
	        array -> item(s)
	        object -> key(s)
	        object -> object (key:value)
	    */

	    var valuePairs = null;
	    if (typeof ref === 'object' &&
	        typeof values === 'object' &&
	        !Array.isArray(ref) &&
	        !Array.isArray(values)) {

	        valuePairs = values;
	        values = Object.keys(values);
	    }
	    else {
	        values = [].concat(values);
	    }

	    options = options || {};            // deep, once, only, part

	    exports.assert(arguments.length >= 2, 'Insufficient arguments');
	    exports.assert(typeof ref === 'string' || typeof ref === 'object', 'Reference must be string or an object');
	    exports.assert(values.length, 'Values array cannot be empty');

	    var compare, compareFlags;
	    if (options.deep) {
	        compare = exports.deepEqual;

	        var hasOnly = options.hasOwnProperty('only'), hasPart = options.hasOwnProperty('part');

	        compareFlags = {
	            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
	            part: hasOnly ? !options.only : hasPart ? options.part : true
	        };
	    }
	    else {
	        compare = function (a, b) {

	            return a === b;
	        };
	    }

	    var misses = false;
	    var matches = new Array(values.length);
	    for (var i = 0, il = matches.length; i < il; ++i) {
	        matches[i] = 0;
	    }

	    if (typeof ref === 'string') {
	        var pattern = '(';
	        for (i = 0, il = values.length; i < il; ++i) {
	            var value = values[i];
	            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
	            pattern += (i ? '|' : '') + exports.escapeRegex(value);
	        }

	        var regex = new RegExp(pattern + ')', 'g');
	        var leftovers = ref.replace(regex, function ($0, $1) {

	            var index = values.indexOf($1);
	            ++matches[index];
	            return '';          // Remove from string
	        });

	        misses = !!leftovers;
	    }
	    else if (Array.isArray(ref)) {
	        for (i = 0, il = ref.length; i < il; ++i) {
	            for (var j = 0, jl = values.length, matched = false; j < jl && matched === false; ++j) {
	                matched = compare(values[j], ref[i], compareFlags) && j;
	            }

	            if (matched !== false) {
	                ++matches[matched];
	            }
	            else {
	                misses = true;
	            }
	        }
	    }
	    else {
	        var keys = Object.keys(ref);
	        for (i = 0, il = keys.length; i < il; ++i) {
	            var key = keys[i];
	            var pos = values.indexOf(key);
	            if (pos !== -1) {
	                if (valuePairs &&
	                    !compare(valuePairs[key], ref[key], compareFlags)) {

	                    return false;
	                }

	                ++matches[pos];
	            }
	            else {
	                misses = true;
	            }
	        }
	    }

	    var result = false;
	    for (i = 0, il = matches.length; i < il; ++i) {
	        result = result || !!matches[i];
	        if ((options.once && matches[i] > 1) ||
	            (!options.part && !matches[i])) {

	            return false;
	        }
	    }

	    if (options.only &&
	        misses) {

	        return false;
	    }

	    return result;
	};


	// Flatten array

	exports.flatten = function (array, target) {

	    var result = target || [];

	    for (var i = 0, il = array.length; i < il; ++i) {
	        if (Array.isArray(array[i])) {
	            exports.flatten(array[i], result);
	        }
	        else {
	            result.push(array[i]);
	        }
	    }

	    return result;
	};


	// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

	exports.reach = function (obj, chain, options) {

	    if (chain === false ||
	        chain === null ||
	        typeof chain === 'undefined') {

	        return obj;
	    }

	    options = options || {};
	    if (typeof options === 'string') {
	        options = { separator: options };
	    }

	    var path = chain.split(options.separator || '.');
	    var ref = obj;
	    for (var i = 0, il = path.length; i < il; ++i) {
	        var key = path[i];
	        if (key[0] === '-' && Array.isArray(ref)) {
	            key = key.slice(1, key.length);
	            key = ref.length - key;
	        }

	        if (!ref ||
	            !ref.hasOwnProperty(key) ||
	            (typeof ref !== 'object' && options.functions === false)) {         // Only object and function can have properties

	            exports.assert(!options.strict || i + 1 === il, 'Missing segment', key, 'in reach path ', chain);
	            exports.assert(typeof ref === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
	            ref = options.default;
	            break;
	        }

	        ref = ref[key];
	    }

	    return ref;
	};


	exports.reachTemplate = function (obj, template, options) {

	    return template.replace(/{([^}]+)}/g, function ($0, chain) {

	        var value = exports.reach(obj, chain, options);
	        return (value === undefined || value === null ? '' : value);
	    });
	};


	exports.formatStack = function (stack) {

	    var trace = [];
	    for (var i = 0, il = stack.length; i < il; ++i) {
	        var item = stack[i];
	        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
	    }

	    return trace;
	};


	exports.formatTrace = function (trace) {

	    var display = [];

	    for (var i = 0, il = trace.length; i < il; ++i) {
	        var row = trace[i];
	        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
	    }

	    return display;
	};


	exports.callStack = function (slice) {

	    // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

	    var v8 = Error.prepareStackTrace;
	    Error.prepareStackTrace = function (err, stack) {

	        return stack;
	    };

	    var capture = {};
	    Error.captureStackTrace(capture, arguments.callee);     /*eslint no-caller:0 */
	    var stack = capture.stack;

	    Error.prepareStackTrace = v8;

	    var trace = exports.formatStack(stack);

	    if (slice) {
	        return trace.slice(slice);
	    }

	    return trace;
	};


	exports.displayStack = function (slice) {

	    var trace = exports.callStack(slice === undefined ? 1 : slice + 1);

	    return exports.formatTrace(trace);
	};


	exports.abortThrow = false;


	exports.abort = function (message, hideStack) {

	    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
	        throw new Error(message || 'Unknown error');
	    }

	    var stack = '';
	    if (!hideStack) {
	        stack = exports.displayStack(1).join('\n\t');
	    }
	    console.log('ABORT: ' + message + '\n\t' + stack);
	    process.exit(1);
	};


	exports.assert = function (condition /*, msg1, msg2, msg3 */) {

	    if (condition) {
	        return;
	    }

	    if (arguments.length === 2 && arguments[1] instanceof Error) {
	        throw arguments[1];
	    }

	    var msgs = [];
	    for (var i = 1, il = arguments.length; i < il; ++i) {
	        if (arguments[i] !== '') {
	            msgs.push(arguments[i]);            // Avoids Array.slice arguments leak, allowing for V8 optimizations
	        }
	    }

	    msgs = msgs.map(function (msg) {

	        return typeof msg === 'string' ? msg : msg instanceof Error ? msg.message : exports.stringify(msg);
	    });
	    throw new Error(msgs.join(' ') || 'Unknown error');
	};


	exports.Timer = function () {

	    this.ts = 0;
	    this.reset();
	};


	exports.Timer.prototype.reset = function () {

	    this.ts = Date.now();
	};


	exports.Timer.prototype.elapsed = function () {

	    return Date.now() - this.ts;
	};


	exports.Bench = function () {

	    this.ts = 0;
	    this.reset();
	};


	exports.Bench.prototype.reset = function () {

	    this.ts = exports.Bench.now();
	};


	exports.Bench.prototype.elapsed = function () {

	    return exports.Bench.now() - this.ts;
	};


	exports.Bench.now = function () {

	    var ts = process.hrtime();
	    return (ts[0] * 1e3) + (ts[1] / 1e6);
	};


	// Escape string for Regex construction

	exports.escapeRegex = function (string) {

	    // Escape ^$.*+-?=!:|\/()[]{},
	    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
	};


	// Base64url (RFC 4648) encode

	exports.base64urlEncode = function (value, encoding) {

	    var buf = (Buffer.isBuffer(value) ? value : new Buffer(value, encoding || 'binary'));
	    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
	};


	// Base64url (RFC 4648) decode

	exports.base64urlDecode = function (value, encoding) {

	    if (value &&
	        !/^[\w\-]*$/.test(value)) {

	        return new Error('Invalid character');
	    }

	    try {
	        var buf = new Buffer(value, 'base64');
	        return (encoding === 'buffer' ? buf : buf.toString(encoding || 'binary'));
	    }
	    catch (err) {
	        return err;
	    }
	};


	// Escape attribute value for use in HTTP header

	exports.escapeHeaderAttribute = function (attribute) {

	    // Allowed value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9, \, "

	    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');

	    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"');                             // Escape quotes and slash
	};


	exports.escapeHtml = function (string) {

	    return Escape.escapeHtml(string);
	};


	exports.escapeJavaScript = function (string) {

	    return Escape.escapeJavaScript(string);
	};


	exports.nextTick = function (callback) {

	    return function () {

	        var args = arguments;
	        process.nextTick(function () {

	            callback.apply(null, args);
	        });
	    };
	};


	exports.once = function (method) {

	    if (method._hoekOnce) {
	        return method;
	    }

	    var once = false;
	    var wrapped = function () {

	        if (!once) {
	            once = true;
	            method.apply(null, arguments);
	        }
	    };

	    wrapped._hoekOnce = true;

	    return wrapped;
	};


	exports.isAbsolutePath = function (path, platform) {

	    if (!path) {
	        return false;
	    }

	    if (Path.isAbsolute) {                      // node >= 0.11
	        return Path.isAbsolute(path);
	    }

	    platform = platform || process.platform;

	    // Unix

	    if (platform !== 'win32') {
	        return path[0] === '/';
	    }

	    // Windows

	    return !!/^(?:[a-zA-Z]:[\\\/])|(?:[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/])/.test(path);        // C:\ or \\something\something
	};


	exports.isInteger = function (value) {

	    return (typeof value === 'number' &&
	            parseFloat(value) === parseInt(value, 10) &&
	            !isNaN(value));
	};


	exports.ignore = function () { };


	exports.inherits = Util.inherits;


	exports.format = Util.format;


	exports.transform = function (source, transform, options) {

	    exports.assert(source === null || source === undefined || typeof source === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');

	    if (Array.isArray(source)) {
	        var results = [];
	        for (var i = 0, il = source.length; i < il; ++i) {
	            results.push(exports.transform(source[i], transform, options));
	        }
	        return results;
	    }

	    var result = {};
	    var keys = Object.keys(transform);

	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var path = key.split('.');
	        var sourcePath = transform[key];

	        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');

	        var segment;
	        var res = result;

	        while (path.length > 1) {
	            segment = path.shift();
	            if (!res[segment]) {
	                res[segment] = {};
	            }
	            res = res[segment];
	        }
	        segment = path.shift();
	        res[segment] = exports.reach(source, sourcePath, options);
	    }

	    return result;
	};


	exports.uniqueFilename = function (path, extension) {

	    if (extension) {
	        extension = extension[0] !== '.' ? '.' + extension : extension;
	    }
	    else {
	        extension = '';
	    }

	    path = Path.resolve(path);
	    var name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
	    return Path.join(path, name);
	};


	exports.stringify = function () {

	    try {
	        return JSON.stringify.apply(null, arguments);
	    }
	    catch (err) {
	        return '[Cannot display object: ' + err.message + ']';
	    }
	};


	exports.shallow = function (source) {

	    var target = {};
	    var keys = Object.keys(source);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        target[key] = source[key];
	    }

	    return target;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer, __webpack_require__(325)))

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Declare internals

	var internals = {};


	exports.escapeJavaScript = function (input) {

	    if (!input) {
	        return '';
	    }

	    var escaped = '';

	    for (var i = 0, il = input.length; i < il; ++i) {

	        var charCode = input.charCodeAt(i);

	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        }
	        else {
	            escaped += internals.escapeJavaScriptChar(charCode);
	        }
	    }

	    return escaped;
	};


	exports.escapeHtml = function (input) {

	    if (!input) {
	        return '';
	    }

	    var escaped = '';

	    for (var i = 0, il = input.length; i < il; ++i) {

	        var charCode = input.charCodeAt(i);

	        if (internals.isSafe(charCode)) {
	            escaped += input[i];
	        }
	        else {
	            escaped += internals.escapeHtmlChar(charCode);
	        }
	    }

	    return escaped;
	};


	internals.escapeJavaScriptChar = function (charCode) {

	    if (charCode >= 256) {
	        return '\\u' + internals.padLeft('' + charCode, 4);
	    }

	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '\\x' + internals.padLeft(hexValue, 2);
	};


	internals.escapeHtmlChar = function (charCode) {

	    var namedEscape = internals.namedHtml[charCode];
	    if (typeof namedEscape !== 'undefined') {
	        return namedEscape;
	    }

	    if (charCode >= 256) {
	        return '&#' + charCode + ';';
	    }

	    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
	    return '&#x' + internals.padLeft(hexValue, 2) + ';';
	};


	internals.padLeft = function (str, len) {

	    while (str.length < len) {
	        str = '0' + str;
	    }

	    return str;
	};


	internals.isSafe = function (charCode) {

	    return (typeof internals.safeCharCodes[charCode] !== 'undefined');
	};


	internals.namedHtml = {
	    '38': '&amp;',
	    '60': '&lt;',
	    '62': '&gt;',
	    '34': '&quot;',
	    '160': '&nbsp;',
	    '162': '&cent;',
	    '163': '&pound;',
	    '164': '&curren;',
	    '169': '&copy;',
	    '174': '&reg;'
	};


	internals.safeCharCodes = (function () {

	    var safe = {};

	    for (var i = 32; i < 123; ++i) {

	        if ((i >= 97) ||                    // a-z
	            (i >= 65 && i <= 90) ||         // A-Z
	            (i >= 48 && i <= 57) ||         // 0-9
	            i === 32 ||                     // space
	            i === 46 ||                     // .
	            i === 44 ||                     // ,
	            i === 45 ||                     // -
	            i === 58 ||                     // :
	            i === 95) {                     // _

	            safe[i] = null;
	        }
	    }

	    return safe;
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	exports.create = function (key, options) {

	    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);

	    var settings = Hoek.clone(options);         // options can be reused and modified

	    var ref = function (value, validationOptions) {

	        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
	    };

	    ref.isContext = (key[0] === ((settings && settings.contextPrefix) || '$'));
	    ref.key = (ref.isContext ? key.slice(1) : key);
	    ref.path = ref.key.split((settings && settings.separator) || '.');
	    ref.depth = ref.path.length;
	    ref.root = ref.path[0];
	    ref.isJoi = true;

	    ref.toString = function () {

	        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
	    };

	    return ref;
	};


	exports.isRef = function (ref) {

	    return typeof ref === 'function' && ref.isJoi;
	};


	exports.push = function (array, ref) {

	    if (exports.isRef(ref) &&
	        !ref.isContext) {

	        array.push(ref.root);
	    }
	};


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);
	var Language = __webpack_require__(382);


	// Declare internals

	var internals = {};

	internals.stringify = function (value, wrapArrays) {

	    var type = typeof value;

	    if (value === null) {
	        return 'null';
	    }

	    if (type === 'string') {
	        return value;
	    }

	    if (value instanceof internals.Err || type === 'function') {
	        return value.toString();
	    }

	    if (type === 'object') {
	        if (Array.isArray(value)) {
	            var partial = '';

	            for (var i = 0, il = value.length; i < il; ++i) {
	                partial += (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
	            }

	            return wrapArrays ? '[' + partial + ']' : partial;
	        }

	        return value.toString();
	    }

	    return JSON.stringify(value);
	};

	internals.Err = function (type, context, state, options) {

	    this.type = type;
	    this.context = context || {};
	    this.context.key = state.key;
	    this.path = state.path;
	    this.options = options;
	};


	internals.Err.prototype.toString = function () {

	    var self = this;

	    var localized = this.options.language;

	    if (localized.label) {
	        this.context.key = localized.label;
	    }
	    else if (this.context.key === '' || this.context.key === null) {
	        this.context.key = localized.root || Language.errors.root;
	    }

	    var format = Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);
	    var hasKey = /\{\{\!?key\}\}/.test(format);
	    var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

	    if (skipKey) {
	        format = format.slice(2);
	    }

	    if (!hasKey && !skipKey) {
	        format = (Hoek.reach(localized, 'key') || Hoek.reach(Language.errors, 'key')) + format;
	    }

	    var wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
	    if (typeof wrapArrays !== 'boolean') {
	        wrapArrays = Language.errors.messages.wrapArrays;
	    }

	    var message = format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {

	        var value = Hoek.reach(self.context, name);
	        var normalized = internals.stringify(value, wrapArrays);
	        return (isSecure ? Hoek.escapeHtml(normalized) : normalized);
	    });

	    return message;
	};


	exports.create = function (type, context, state, options) {

	    return new internals.Err(type, context, state, options);
	};


	exports.process = function (errors, object) {

	    if (!errors || !errors.length) {
	        return null;
	    }

	    // Construct error

	    var message = '';
	    var details = [];

	    var processErrors = function (localErrors, parent) {

	        for (var i = 0, il = localErrors.length; i < il; ++i) {
	            var item = localErrors[i];

	            var detail = {
	                message: item.toString(),
	                path: internals.getPath(item),
	                type: item.type,
	                context: item.context
	            };

	            if (!parent) {
	                message += (message ? '. ' : '') + detail.message;
	            }

	            // Do not push intermediate errors, we're only interested in leafs
	            if (item.context.reason && item.context.reason.length) {
	                processErrors(item.context.reason, item.path);
	            }
	            else {
	                details.push(detail);
	            }
	        }
	    };

	    processErrors(errors);

	    var error = new Error(message);
	    error.name = 'ValidationError';
	    error.details = details;
	    error._object = object;
	    error.annotate = internals.annotate;
	    return error;
	};


	internals.getPath = function (item) {

	    var recursePath = function (it) {

	        var reachedItem = Hoek.reach(it, 'context.reason.0');
	        if (reachedItem && reachedItem.context) {
	            return recursePath(reachedItem);
	        }

	        return it.path;
	    };

	    return recursePath(item) || item.context.key;
	};


	// Inspired by json-stringify-safe
	internals.safeStringify = function (obj, spaces) {

	    return JSON.stringify(obj, internals.serializer(), spaces);
	};

	internals.serializer = function () {

	    var cycleReplacer = function (key, value) {

	        if (stack[0] === value) {
	            return '[Circular ~]';
	        }

	        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
	    };

	    var keys = [], stack = [];

	    return function (key, value) {

	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            if (~thisPos) {
	                stack.length = thisPos + 1;
	                keys.length = thisPos + 1;
	                keys[thisPos] = key;
	            }
	            else {
	                stack.push(this);
	                keys.push(key);
	            }

	            if (~stack.indexOf(value)) {
	                value = cycleReplacer.call(this, key, value);
	            }
	        }
	        else {
	            stack.push(value);
	        }

	        if (Array.isArray(value) && value.placeholders) {
	            var placeholders = value.placeholders;
	            var arrWithPlaceholders = [];
	            for (var i = 0, il = value.length; i < il; ++i) {
	                if (placeholders[i]) {
	                    arrWithPlaceholders.push(placeholders[i]);
	                }
	                arrWithPlaceholders.push(value[i]);
	            }

	            value = arrWithPlaceholders;
	        }

	        return value;
	    };
	};


	internals.annotate = function () {

	    var obj = Hoek.clone(this._object || {});

	    var lookup = {};
	    var el = this.details.length;
	    for (var e = el - 1; e >= 0; --e) {        // Reverse order to process deepest child first
	        var pos = el - e;
	        var error = this.details[e];
	        var path = error.path.split('.');
	        var ref = obj;
	        for (var i = 0, il = path.length; i < il && ref; ++i) {
	            var seg = path[i];
	            if (i + 1 < il) {
	                ref = ref[seg];
	            }
	            else {
	                var value = ref[seg];
	                if (Array.isArray(ref)) {
	                    var arrayLabel = '_$idx$_' + (e + 1) + '_$end$_';
	                    if (!ref.placeholders) {
	                        ref.placeholders = {};
	                    }

	                    if (ref.placeholders[seg]) {
	                        ref.placeholders[seg] = ref.placeholders[seg].replace('_$end$_', ', ' + (e + 1) + '_$end$_');
	                    }
	                    else {
	                        ref.placeholders[seg] = arrayLabel;
	                    }
	                } else {
	                    if (value !== undefined) {
	                        delete ref[seg];
	                        var objectLabel = seg + '_$key$_' + pos + '_$end$_';
	                        ref[objectLabel] = value;
	                        lookup[error.path] = objectLabel;
	                    }
	                    else if (lookup[error.path]) {
	                        var replacement = lookup[error.path];
	                        var appended = replacement.replace('_$end$_', ', ' + pos + '_$end$_');
	                        ref[appended] = ref[replacement];
	                        lookup[error.path] = appended;
	                        delete ref[replacement];
	                    }
	                    else {
	                        ref['_$miss$_' + seg + '|' + pos + '_$end$_'] = '__missing__';
	                    }
	                }
	            }
	        }
	    }

	    var message = internals.safeStringify(obj, 2)
	        .replace(/_\$key\$_([, \d]+)_\$end\$_\"/g, function ($0, $1) {

	            return '" \u001b[31m[' + $1 + ']\u001b[0m';
	        }).replace(/\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g, function ($0, $1, $2) {

	            return '\u001b[41m"' + $1 + '"\u001b[0m\u001b[31m [' + $2 + ']: -- missing --\u001b[0m';
	        }).replace(/\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g, function ($0, $1, $2) {

	            return '\n' + $2 + ' \u001b[31m[' + $1 + ']\u001b[0m';
	        });

	    message += '\n\u001b[31m';

	    for (e = 0; e < el; ++e) {
	        message += '\n[' + (e + 1) + '] ' + this.details[e].message;
	    }

	    message += '\u001b[0m';

	    return message;
	};


/***/ },
/* 382 */
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.errors = {
	    root: 'value',
	    key: '"{{!key}}" ',
	    messages: {
	        wrapArrays: true
	    },
	    any: {
	        unknown: 'is not allowed',
	        invalid: 'contains an invalid value',
	        empty: 'is not allowed to be empty',
	        required: 'is required',
	        allowOnly: 'must be one of {{valids}}',
	        default: 'threw an error when running default method'
	    },
	    alternatives: {
	        base: 'not matching any of the allowed alternatives'
	    },
	    array: {
	        base: 'must be an array',
	        includes: 'at position {{pos}} does not match any of the allowed types',
	        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
	        includesOne: 'at position {{pos}} fails because {{reason}}',
	        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
	        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
	        includesRequiredKnowns: 'does not contain {{knownMisses}}',
	        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
	        excludes: 'at position {{pos}} contains an excluded value',
	        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
	        min: 'must contain at least {{limit}} items',
	        max: 'must contain less than or equal to {{limit}} items',
	        length: 'must contain {{limit}} items',
	        ordered: 'at position {{pos}} fails because {{reason}}',
	        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
	        sparse: 'must not be a sparse array',
	        unique: 'position {{pos}} contains a duplicate value'
	    },
	    boolean: {
	        base: 'must be a boolean'
	    },
	    binary: {
	        base: 'must be a buffer or a string',
	        min: 'must be at least {{limit}} bytes',
	        max: 'must be less than or equal to {{limit}} bytes',
	        length: 'must be {{limit}} bytes'
	    },
	    date: {
	        base: 'must be a number of milliseconds or valid date string',
	        min: 'must be larger than or equal to "{{limit}}"',
	        max: 'must be less than or equal to "{{limit}}"',
	        isoDate: 'must be a valid ISO 8601 date',
	        ref: 'references "{{ref}}" which is not a date'
	    },
	    function: {
	        base: 'must be a Function'
	    },
	    object: {
	        base: 'must be an object',
	        child: 'child "{{!key}}" fails because {{reason}}',
	        min: 'must have at least {{limit}} children',
	        max: 'must have less than or equal to {{limit}} children',
	        length: 'must have {{limit}} children',
	        allowUnknown: 'is not allowed',
	        with: 'missing required peer "{{peer}}"',
	        without: 'conflict with forbidden peer "{{peer}}"',
	        missing: 'must contain at least one of {{peers}}',
	        xor: 'contains a conflict between exclusive peers {{peers}}',
	        or: 'must contain at least one of {{peers}}',
	        and: 'contains {{present}} without its required peers {{missing}}',
	        nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
	        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
	        rename: {
	            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
	            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
	        },
	        type: 'must be an instance of "{{type}}"'
	    },
	    number: {
	        base: 'must be a number',
	        min: 'must be larger than or equal to {{limit}}',
	        max: 'must be less than or equal to {{limit}}',
	        less: 'must be less than {{limit}}',
	        greater: 'must be greater than {{limit}}',
	        float: 'must be a float or double',
	        integer: 'must be an integer',
	        negative: 'must be a negative number',
	        positive: 'must be a positive number',
	        precision: 'must have no more than {{limit}} decimal places',
	        ref: 'references "{{ref}}" which is not a number',
	        multiple: 'must be a multiple of {{multiple}}'
	    },
	    string: {
	        base: 'must be a string',
	        min: 'length must be at least {{limit}} characters long',
	        max: 'length must be less than or equal to {{limit}} characters long',
	        length: 'length must be {{limit}} characters long',
	        alphanum: 'must only contain alpha-numeric characters',
	        token: 'must only contain alpha-numeric and underscore characters',
	        regex: {
	            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
	            name: 'with value "{{!value}}" fails to match the {{name}} pattern'
	        },
	        email: 'must be a valid email',
	        uri: 'must be a valid uri',
	        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
	        isoDate: 'must be a valid ISO 8601 date',
	        guid: 'must be a valid GUID',
	        hex: 'must only contain hexadecimal characters',
	        hostname: 'must be a valid hostname',
	        lowercase: 'must only contain lowercase characters',
	        uppercase: 'must only contain uppercase characters',
	        trim: 'must not have leading or trailing whitespace',
	        creditCard: 'must be a credit card',
	        ref: 'references "{{ref}}" which is not a number',
	        ip: 'must be a valid ip address with a {{cidr}} CIDR',
	        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
	    }
	};


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);
	var Ref = __webpack_require__(380);

	// Type modules are delay-loaded to prevent circular dependencies


	// Declare internals

	var internals = {
	    any: null,
	    date: __webpack_require__(384),
	    string: __webpack_require__(387),
	    number: __webpack_require__(393),
	    boolean: __webpack_require__(394),
	    alt: null,
	    object: null
	};


	exports.schema = function (config) {

	    internals.any = internals.any || new (__webpack_require__(376))();
	    internals.alt = internals.alt || __webpack_require__(395);
	    internals.object = internals.object || __webpack_require__(396);

	    if (config &&
	        typeof config === 'object') {

	        if (config.isJoi) {
	            return config;
	        }

	        if (Array.isArray(config)) {
	            return internals.alt.try(config);
	        }

	        if (config instanceof RegExp) {
	            return internals.string.regex(config);
	        }

	        if (config instanceof Date) {
	            return internals.date.valid(config);
	        }

	        return internals.object.keys(config);
	    }

	    if (typeof config === 'string') {
	        return internals.string.valid(config);
	    }

	    if (typeof config === 'number') {
	        return internals.number.valid(config);
	    }

	    if (typeof config === 'boolean') {
	        return internals.boolean.valid(config);
	    }

	    if (Ref.isRef(config)) {
	        return internals.any.valid(config);
	    }

	    Hoek.assert(config === null, 'Invalid schema content:', config);

	    return internals.any.valid(null);
	};


	exports.ref = function (id) {

	    return Ref.isRef(id) ? id : Ref.create(id);
	};


/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Any = __webpack_require__(376);
	var Errors = __webpack_require__(381);
	var Ref = __webpack_require__(380);
	var Hoek = __webpack_require__(377);
	var Moment = __webpack_require__(385);


	// Declare internals

	var internals = {};

	internals.isoDate = /^(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
	internals.invalidDate = new Date('');
	internals.isIsoDate = (function () {

	    var isoString = internals.isoDate.toString();

	    return function (date) {

	        return date && (date.toString() === isoString);
	    };
	})();

	internals.Date = function () {

	    Any.call(this);
	    this._type = 'date';
	};

	Hoek.inherits(internals.Date, Any);


	internals.Date.prototype._base = function (value, state, options) {

	    var result = {
	        value: (options.convert && internals.toDate(value, this._flags.format)) || value
	    };

	    if (result.value instanceof Date && !isNaN(result.value.getTime())) {
	        result.errors = null;
	    }
	    else {
	        result.errors = Errors.create(internals.isIsoDate(this._flags.format) ? 'date.isoDate' : 'date.base', null, state, options);
	    }

	    return result;
	};


	internals.toDate = function (value, format) {

	    if (value instanceof Date) {
	        return value;
	    }

	    if (typeof value === 'string' ||
	        Hoek.isInteger(value)) {

	        if (typeof value === 'string' &&
	            /^[+-]?\d+$/.test(value)) {

	            value = parseInt(value, 10);
	        }

	        var date;
	        if (format) {
	            if (internals.isIsoDate(format)) {
	                date = format.test(value) ? new Date(value) : internals.invalidDate;
	            }
	            else {
	                date = Moment(value, format, true);
	                date = date.isValid() ? date.toDate() : internals.invalidDate;
	            }
	        }
	        else {
	            date = new Date(value);
	        }

	        if (!isNaN(date.getTime())) {
	            return date;
	        }
	    }

	    return null;
	};


	internals.compare = function (type, compare) {

	    return function (date) {

	        var isNow = date === 'now';
	        var isRef = Ref.isRef(date);

	        if (!isNow && !isRef) {
	            date = internals.toDate(date);
	        }

	        Hoek.assert(date, 'Invalid date format');

	        return this._test(type, date, function (value, state, options) {

	            var compareTo;
	            if (isNow) {
	                compareTo = Date.now();
	            }
	            else if (isRef) {
	                compareTo = internals.toDate(date(state.parent, options));

	                if (!compareTo) {
	                    return Errors.create('date.ref', { ref: date.key }, state, options);
	                }

	                compareTo = compareTo.getTime();
	            }
	            else {
	                compareTo = date.getTime();
	            }

	            if (compare(value.getTime(), compareTo)) {
	                return null;
	            }

	            return Errors.create('date.' + type, { limit: new Date(compareTo) }, state, options);
	        });
	    };
	};


	internals.Date.prototype.min = internals.compare('min', function (value, date) {

	    return value >= date;
	});


	internals.Date.prototype.max = internals.compare('max', function (value, date) {

	    return value <= date;
	});


	internals.Date.prototype.format = function (format) {

	    Hoek.assert(typeof format === 'string' || (Array.isArray(format) && format.every(function (f) {

	        return typeof f === 'string';
	    })), 'Invalid format.');

	    var obj = this.clone();
	    obj._flags.format = format;
	    return obj;
	};

	internals.Date.prototype.iso = function () {

	    var obj = this.clone();
	    obj._flags.format = internals.isoDate;
	    return obj;
	};

	internals.Date.prototype._isIsoDate = function (value) {

	    return internals.isoDate.test(value);
	};

	module.exports = new internals.Date();


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.15.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';

	    var hookCallback;

	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return input != null && Object.prototype.toString.call(input) === '[object Object]';
	    }

	    function isObjectEmpty(obj) {
	        var k;
	        for (k in obj) {
	            // even if its not own property I'd still call it non-empty
	            return false;
	        }
	        return true;
	    }

	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }

	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }

	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;

	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }

	            return false;
	        };
	    }

	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            var isNowValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));

	            if (m._strict) {
	                isNowValid = isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }

	            if (Object.isFrozen == null || !Object.isFrozen(m)) {
	                m._isValid = isNowValid;
	            }
	            else {
	                return isNowValid;
	            }
	        }
	        return m._isValid;
	    }

	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }

	        return m;
	    }

	    function isUndefined(input) {
	        return input === void 0;
	    }

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    var updateInProgress = false;

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }

	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }

	        return value;
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;

	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [];
	                var arg;
	                for (var i = 0; i < arguments.length; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (var key in arguments[0]) {
	                            arg += key + ': ' + arguments[0][key] + ', ';
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;

	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }

	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }

	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }

	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }

	    var keys;

	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }

	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };

	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }

	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };

	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];

	        if (format || !formatUpper) {
	            return format;
	        }

	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });

	        return this._longDateFormat[key];
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate () {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;

	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }

	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };

	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }

	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }

	    var aliases = {};

	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }

	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    var priorities = {};

	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }

	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }

	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }

	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }

	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }

	    // MOMENTS

	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }


	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }

	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	    var formatFunctions = {};

	    var formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


	    var regexes = {};

	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }

	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }

	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    var tokens = {};

	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;

	    var indexOf;

	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PRIORITY

	    addUnitPriority('month', 8);

	    // PARSING

	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        if (!m) {
	            return this._months;
	        }
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        if (!m) {
	            return this._monthsShort;
	        }
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;

	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth (mom, value) {
	        var dayOfMonth;

	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }

	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }

	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }

	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }

	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }

	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }

	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PRIORITIES

	    addUnitPriority('year', 1);

	    // PARSING

	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    // HOOKS

	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', true);

	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }

	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));

	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	        return -fwdlw + fwd - 1;
	    }

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;

	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }

	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }

	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;

	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }

	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }

	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }

	    // FORMATTING

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PRIORITIES

	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);

	    // PARSING

	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });

	    // HELPERS

	    // LOCALES

	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };

	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    // FORMATTING

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);

	    // PARSING

	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }

	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }

	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }

	        return null;
	    }

	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }

	    // LOCALES

	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        if (!m) {
	            return this._weekdays;
	        }
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }

	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	    }

	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	    }

	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];

	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;

	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already

	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }

	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.

	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }

	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }

	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }

	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }


	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;

	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }

	    function kFormat() {
	        return this.hours() || 24;
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);

	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PRIORITY
	    addUnitPriority('hour', 13);

	    // PARSING

	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);

	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });

	    // LOCALES

	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }


	    // MOMENTS

	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);

	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        ordinalParse: defaultOrdinalParse,
	        relativeTime: defaultRelativeTime,

	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,

	        week: defaultLocaleWeek,

	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,

	        meridiemParse: defaultLocaleMeridiemParse
	    };

	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.require) {
	            try {
	                oldLocale = globalLocale._abbr;
	                module.require('./locale/' + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale (name, config) {
	        if (config !== null) {
	            var parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, parentConfig = baseConfig;
	            // MERGE
	            if (locales[name] != null) {
	                parentConfig = locales[name]._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }

	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    function locale_locales__listLocales() {
	        return keys(locales);
	    }

	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;

	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }

	            getParsingFlags(m).overflow = overflow;
	        }

	        return m;
	    }

	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];

	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];

	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;

	        if (match) {
	            getParsingFlags(config).iso = true;

	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);

	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
	        'which is not reliable across all browsers and versions. Non ISO date formats are ' +
	        'discouraged and will be removed in an upcoming major release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }

	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }

	        config._a = [];
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }

	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	        configFromArray(config);
	        checkOverflow(config);
	    }


	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });

	        configFromArray(config);
	    }

	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;

	        config._locale = config._locale || locale_locales__getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }

	        if (!valid__isValid(config)) {
	            config._d = null;
	        }

	        return config;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }

	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;

	        return createFromConfig(c);
	    }

	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };

	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = locale_locales__getLocale();

	        this._bubble();
	    }

	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }

	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }

	    // FORMATTING

	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }

	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);

	            if (tZone === 0) {
	                this.utcOffset(0, true);
	            } else {
	                this.utcOffset(offsetFromString(matchOffset, this._i));
	            }
	        }
	        return this;
	    }

	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }

	        var c = {};

	        copyConfig(c, this);
	        c = prepareConfig(c);

	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }

	        return this._isDSTShifted;
	    }

	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }

	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }

	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }

	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])                         * sign,
	                h  : toInt(match[HOUR])                         * sign,
	                m  : toInt(match[MINUTE])                       * sign,
	                s  : toInt(match[SECOND])                       * sign,
	                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    }

	    create__createDuration.fn = Duration.prototype;

	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }

	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);

	        if (!mom.isValid()) {
	            // No op
	            return;
	        }

	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');

	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }

	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';

	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }

	    function clone () {
	        return new Moment(this);
	    }

	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }

	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }

	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }

	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }

	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }

	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }

	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;

	        if (!this.isValid()) {
	            return NaN;
	        }

	        that = cloneWithOffset(input, this);

	        if (!that.isValid()) {
	            return NaN;
	        }

	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

	        units = normalizeUnits(units);

	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }

	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }

	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }

	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }

	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }

	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData () {
	        return this._locale;
	    }

	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	            case 'date':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	        }

	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }

	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }

	        return this;
	    }

	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }

	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }

	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }

	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }

	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }

	    function toDate () {
	        return new Date(this.valueOf());
	    }

	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }

	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }

	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }

	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }

	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }

	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }

	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }

	    // FORMATTING

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PRIORITY

	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);


	    // PARSING

	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);

	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // MOMENTS

	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }

	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }

	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }

	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }

	    // FORMATTING

	    addFormatToken('Q', 0, 'Qo', 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PRIORITY

	    addUnitPriority('quarter', 7);

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }

	    // FORMATTING

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PRIOROITY
	    addUnitPriority('date', 9);

	    // PARSING

	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    // FORMATTING

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);

	    // PARSING

	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    // MOMENTS

	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }

	    // FORMATTING

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PRIORITY

	    addUnitPriority('minute', 14);

	    // PARSING

	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    // FORMATTING

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PRIORITY

	    addUnitPriority('second', 15);

	    // PARSING

	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    // FORMATTING

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });


	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PRIORITY

	    addUnitPriority('millisecond', 16);

	    // PARSING

	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);

	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }

	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }

	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS

	    var getSetMillisecond = makeGetSet('Milliseconds', false);

	    // FORMATTING

	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var momentPrototype__proto = Moment.prototype;

	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = stringGet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = stringSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;

	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;

	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;

	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;

	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;

	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

	    var momentPrototype = momentPrototype__proto;

	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }

	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }

	    function preParsePostFormat (string) {
	        return string;
	    }

	    var prototype__proto = Locale.prototype;

	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;

	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;

	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;

	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }

	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;

	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        }

	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;

	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }

	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }

	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }

	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }

	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }

	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }

	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	    var mathAbs = Math.abs;

	    function duration_abs__abs () {
	        var data           = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);

	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);

	        return this;
	    }

	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }

	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }

	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;

	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;

	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;

	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;

	        days += absFloor(hours / 24);

	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        data.days   = days;
	        data.months = months;
	        data.years  = years;

	        return this;
	    }

	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }

	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }

	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }

	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');

	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }

	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }

	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');

	    function weeks () {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));

	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set the rounding function for relative time strings
	    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }

	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }

	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var iso_string__abs = Math.abs;

	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;

	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;

	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;


	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }

	    var duration_prototype__proto = Duration.prototype;

	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;

	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;

	    // Side effect imports

	    // FORMATTING

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    // Side effect imports


	    utils_hooks__hooks.version = '2.15.0';

	    setHookCallback(local__createLocal);

	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
	    utils_hooks__hooks.prototype             = momentPrototype;

	    var _moment = utils_hooks__hooks;

	    return _moment;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(386)(module)))

/***/ },
/* 386 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Load modules

	var Net = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"net\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Hoek = __webpack_require__(377);
	var Isemail = __webpack_require__(388);
	var Any = __webpack_require__(376);
	var Ref = __webpack_require__(380);
	var JoiDate = __webpack_require__(384);
	var Errors = __webpack_require__(381);
	var Uri = __webpack_require__(390);
	var Ip = __webpack_require__(392);

	// Declare internals

	var internals = {
	    uriRegex: Uri.createUriRegex(),
	    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional')
	};

	internals.String = function () {

	    Any.call(this);
	    this._type = 'string';
	    this._invalids.add('');
	};

	Hoek.inherits(internals.String, Any);

	internals.compare = function (type, compare) {

	    return function (limit, encoding) {

	        var isRef = Ref.isRef(limit);

	        Hoek.assert((Hoek.isInteger(limit) && limit >= 0) || isRef, 'limit must be a positive integer or reference');
	        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

	        return this._test(type, limit, function (value, state, options) {

	            var compareTo;
	            if (isRef) {
	                compareTo = limit(state.parent, options);

	                if (!Hoek.isInteger(compareTo)) {
	                    return Errors.create('string.ref', { ref: limit.key }, state, options);
	                }
	            }
	            else {
	                compareTo = limit;
	            }

	            if (compare(value, compareTo, encoding)) {
	                return null;
	            }

	            return Errors.create('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
	        });
	    };
	};

	internals.String.prototype._base = function (value, state, options) {

	    if (typeof value === 'string' &&
	        options.convert) {

	        if (this._flags.case) {
	            value = (this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase());
	        }

	        if (this._flags.trim) {
	            value = value.trim();
	        }

	        if (this._inner.replacements) {

	            for (var r = 0, rl = this._inner.replacements.length; r < rl; ++r) {
	                var replacement = this._inner.replacements[r];
	                value = value.replace(replacement.pattern, replacement.replacement);
	            }
	        }
	    }

	    return {
	        value: value,
	        errors: (typeof value === 'string') ? null : Errors.create('string.base', { value: value }, state, options)
	    };
	};


	internals.String.prototype.insensitive = function () {

	    var obj = this.clone();
	    obj._flags.insensitive = true;
	    return obj;
	};


	internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length >= limit;
	});


	internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length <= limit;
	});


	internals.String.prototype.creditCard = function () {

	    return this._test('creditCard', undefined, function (value, state, options) {

	        var i = value.length;
	        var sum = 0;
	        var mul = 1;
	        var char;

	        while (i--) {
	            char = value.charAt(i) * mul;
	            sum += char - (char > 9) * 9;
	            mul ^= 3;
	        }

	        var check = (sum % 10 === 0) && (sum > 0);
	        return check ? null : Errors.create('string.creditCard', { value: value }, state, options);
	    });
	};

	internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {

	    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
	    return length === limit;
	});


	internals.String.prototype.regex = function (pattern, name) {

	    Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');

	    pattern = new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined);         // Future version should break this and forbid unsupported regex flags

	    return this._test('regex', pattern, function (value, state, options) {

	        if (pattern.test(value)) {
	            return null;
	        }

	        return Errors.create((name ? 'string.regex.name' : 'string.regex.base'), { name: name, pattern: pattern, value: value }, state, options);
	    });
	};


	internals.String.prototype.alphanum = function () {

	    return this._test('alphanum', undefined, function (value, state, options) {

	        if (/^[a-zA-Z0-9]+$/.test(value)) {
	            return null;
	        }

	        return Errors.create('string.alphanum', { value: value }, state, options);
	    });
	};


	internals.String.prototype.token = function () {

	    return this._test('token', undefined, function (value, state, options) {

	        if (/^\w+$/.test(value)) {
	            return null;
	        }

	        return Errors.create('string.token', { value: value }, state, options);
	    });
	};


	internals.String.prototype.email = function (isEmailOptions) {

	    if (isEmailOptions) {
	        Hoek.assert(typeof isEmailOptions === 'object', 'email options must be an object');
	        Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
	        Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' ||
	            typeof isEmailOptions.tldWhitelist === 'object', 'tldWhitelist must be an array or object');
	        Hoek.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' ||
	            Hoek.isInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0,
	            'minDomainAtoms must be a positive integer');
	        Hoek.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' ||
	            (Hoek.isInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0),
	            'errorLevel must be a non-negative integer or boolean');
	    }

	    return this._test('email', isEmailOptions, function (value, state, options) {

	        try {
	            var result = Isemail(value, isEmailOptions);
	            if (result === true || result === 0) {
	                return null;
	            }
	        }
	        catch (e) {}

	        return Errors.create('string.email', { value: value }, state, options);
	    });
	};


	internals.String.prototype.ip = function (ipOptions) {

	    var regex = internals.ipRegex;
	    ipOptions = ipOptions || {};
	    Hoek.assert(typeof ipOptions === 'object', 'options must be an object');

	    if (ipOptions.cidr) {
	        Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
	        ipOptions.cidr = ipOptions.cidr.toLowerCase();

	        Hoek.assert(ipOptions.cidr in Ip.cidrs, 'cidr must be one of ' + Object.keys(Ip.cidrs).join(', '));

	        // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
	        if (!ipOptions.version && ipOptions.cidr !== 'optional') {
	            regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
	        }
	    }
	    else {

	        // Set our default cidr strategy
	        ipOptions.cidr = 'optional';
	    }

	    if (ipOptions.version) {
	        if (!Array.isArray(ipOptions.version)) {
	            ipOptions.version = [ipOptions.version];
	        }

	        Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

	        var versions = [];
	        for (var i = 0, il = ipOptions.version.length; i < il; ++i) {
	            var version = ipOptions.version[i];
	            Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
	            version = version.toLowerCase();
	            Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
	            versions.push(version);
	        }

	        // Make sure we have a set of versions
	        versions = Hoek.unique(versions);

	        regex = Ip.createIpRegex(versions, ipOptions.cidr);
	    }

	    return this._test('ip', ipOptions, function (value, state, options) {

	        if (regex.test(value)) {
	            return null;
	        }

	        if (versions) {
	            return Errors.create('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
	        }

	        return Errors.create('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
	    });
	};


	internals.String.prototype.uri = function (uriOptions) {

	    var customScheme = '',
	        regex = internals.uriRegex;

	    if (uriOptions) {
	        Hoek.assert(typeof uriOptions === 'object', 'options must be an object');

	        if (uriOptions.scheme) {
	            Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

	            if (!Array.isArray(uriOptions.scheme)) {
	                uriOptions.scheme = [uriOptions.scheme];
	            }

	            Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

	            // Flatten the array into a string to be used to match the schemes.
	            for (var i = 0, il = uriOptions.scheme.length; i < il; ++i) {
	                var scheme = uriOptions.scheme[i];
	                Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

	                // Add OR separators if a value already exists
	                customScheme += customScheme ? '|' : '';

	                // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
	                if (scheme instanceof RegExp) {
	                    customScheme += scheme.source;
	                }
	                else {
	                    Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
	                    customScheme += Hoek.escapeRegex(scheme);
	                }
	            }
	        }
	    }

	    if (customScheme) {
	        regex = Uri.createUriRegex(customScheme);
	    }

	    return this._test('uri', uriOptions, function (value, state, options) {

	        if (regex.test(value)) {
	            return null;
	        }

	        if (customScheme) {
	            return Errors.create('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
	        }

	        return Errors.create('string.uri', { value: value }, state, options);
	    });
	};


	internals.String.prototype.isoDate = function () {

	    return this._test('isoDate', undefined, function (value, state, options) {

	        if (JoiDate._isIsoDate(value)) {
	            return null;
	        }

	        return Errors.create('string.isoDate', { value: value }, state, options);
	    });
	};


	internals.String.prototype.guid = function () {

	    var regex = /^[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}$/i;
	    var regex2 = /^\{[A-F0-9]{8}(?:-?[A-F0-9]{4}){3}-?[A-F0-9]{12}\}$/i;

	    return this._test('guid', undefined, function (value, state, options) {

	        if (regex.test(value) || regex2.test(value)) {
	            return null;
	        }

	        return Errors.create('string.guid', { value: value }, state, options);
	    });
	};


	internals.String.prototype.hex = function () {

	    var regex = /^[a-f0-9]+$/i;

	    return this._test('hex', regex, function (value, state, options) {

	        if (regex.test(value)) {
	            return null;
	        }

	        return Errors.create('string.hex', { value: value }, state, options);
	    });
	};


	internals.String.prototype.hostname = function () {

	    var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

	    return this._test('hostname', undefined, function (value, state, options) {

	        if ((value.length <= 255 && regex.test(value)) ||
	            Net.isIPv6(value)) {

	            return null;
	        }

	        return Errors.create('string.hostname', { value: value }, state, options);
	    });
	};


	internals.String.prototype.lowercase = function () {

	    var obj = this._test('lowercase', undefined, function (value, state, options) {

	        if (options.convert ||
	            value === value.toLocaleLowerCase()) {

	            return null;
	        }

	        return Errors.create('string.lowercase', { value: value }, state, options);
	    });

	    obj._flags.case = 'lower';
	    return obj;
	};


	internals.String.prototype.uppercase = function () {

	    var obj = this._test('uppercase', undefined, function (value, state, options) {

	        if (options.convert ||
	            value === value.toLocaleUpperCase()) {

	            return null;
	        }

	        return Errors.create('string.uppercase', { value: value }, state, options);
	    });

	    obj._flags.case = 'upper';
	    return obj;
	};


	internals.String.prototype.trim = function () {

	    var obj = this._test('trim', undefined, function (value, state, options) {

	        if (options.convert ||
	            value === value.trim()) {

	            return null;
	        }

	        return Errors.create('string.trim', { value: value }, state, options);
	    });

	    obj._flags.trim = true;
	    return obj;
	};


	internals.String.prototype.replace = function (pattern, replacement) {

	    if (typeof pattern === 'string') {
	        pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
	    }

	    Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
	    Hoek.assert(typeof replacement === 'string', 'replacement must be a String');

	    // This can not be considere a test like trim, we can't "reject"
	    // anything from this rule, so just clone the current object
	    var obj = this.clone();

	    if (!obj._inner.replacements) {
	        obj._inner.replacements = [];
	    }

	    obj._inner.replacements.push({
	        pattern: pattern,
	        replacement: replacement
	    });

	    return obj;
	};

	module.exports = new internals.String();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(389);


/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * To validate an email address according to RFCs 5321, 5322 and others
	 *
	 * Copyright © 2008-2011, Dominic Sayers
	 * Test schema documentation Copyright © 2011, Daniel Marschall
	 * Port for Node.js Copyright © 2013-2014, GlobeSherpa
	 *              and Copyright © 2014-2015, Eli Skeggs
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 *   - Redistributions of source code must retain the above copyright notice,
	 *     this list of conditions and the following disclaimer.
	 *   - Redistributions in binary form must reproduce the above copyright notice,
	 *     this list of conditions and the following disclaimer in the documentation
	 *     and/or other materials provided with the distribution.
	 *   - Neither the name of Dominic Sayers nor the names of its contributors may
	 *     be used to endorse or promote products derived from this software without
	 *     specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 *
	 * @author      Dominic Sayers <dominic@sayers.cc>
	 * @author      Eli Skeggs <skeggse@gmail.com>
	 * @copyright   2008-2011 Dominic Sayers
	 * @copyright   2013-2014 GlobeSherpa
	 * @copyright   2014-2015 Eli Skeggs
	 * @license     http://www.opensource.org/licenses/bsd-license.php BSD License
	 * @link        http://www.dominicsayers.com/isemail
	 * @link        https://github.com/hapijs/isemail
	 * @version     1.2.0 Drop Node 0.8, fix style, switch to lab/code
	 */

	var Dns = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dns\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var internals = {
	    defaultThreshold: 16,
	    maxIPv6Groups: 8,
	    categories: {
	        valid: 1,
	        dnsWarn: 7,
	        rfc5321: 15,
	        cfws: 31,
	        deprecated: 63,
	        rfc5322: 127,
	        error: 255
	    },

	    diagnoses: {
	        // Address is valid
	        valid: 0,

	        // Address is valid, but the DNS check failed
	        dnsWarnNoMXRecord: 5,
	        dnsWarnNoRecord: 6,

	        // Address is valid for SMTP but has unusual elements
	        rfc5321TLD: 9,
	        rfc5321TLDNumeric: 10,
	        rfc5321QuotedString: 11,
	        rfc5321AddressLiteral: 12,

	        // Address is valid for message, but must be modified for envelope
	        cfwsComment: 17,
	        cfwsFWS: 18,

	        // Address contains deprecated elements, but may still be valid in some contexts
	        deprecatedLocalPart: 33,
	        deprecatedFWS: 34,
	        deprecatedQTEXT: 35,
	        deprecatedQP: 36,
	        deprecatedComment: 37,
	        deprecatedCTEXT: 38,
	        deprecatedIPv6: 39,
	        deprecatedCFWSNearAt: 49,

	        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid
	        rfc5322Domain: 65,
	        rfc5322TooLong: 66,
	        rfc5322LocalTooLong: 67,
	        rfc5322DomainTooLong: 68,
	        rfc5322LabelTooLong: 69,
	        rfc5322DomainLiteral: 70,
	        rfc5322DomainLiteralOBSDText: 71,
	        rfc5322IPv6GroupCount: 72,
	        rfc5322IPv62x2xColon: 73,
	        rfc5322IPv6BadCharacter: 74,
	        rfc5322IPv6MaxGroups: 75,
	        rfc5322IPv6ColonStart: 76,
	        rfc5322IPv6ColonEnd: 77,

	        // Address is invalid for any purpose
	        errExpectingDTEXT: 129,
	        errNoLocalPart: 130,
	        errNoDomain: 131,
	        errConsecutiveDots: 132,
	        errATEXTAfterCFWS: 133,
	        errATEXTAfterQS: 134,
	        errATEXTAfterDomainLiteral: 135,
	        errExpectingQPair: 136,
	        errExpectingATEXT: 137,
	        errExpectingQTEXT: 138,
	        errExpectingCTEXT: 139,
	        errBackslashEnd: 140,
	        errDotStart: 141,
	        errDotEnd: 142,
	        errDomainHyphenStart: 143,
	        errDomainHyphenEnd: 144,
	        errUnclosedQuotedString: 145,
	        errUnclosedComment: 146,
	        errUnclosedDomainLiteral: 147,
	        errFWSCRLFx2: 148,
	        errFWSCRLFEnd: 149,
	        errCRNoLF: 150,
	        errUnknownTLD: 160,
	        errDomainTooShort: 161
	    },

	    components: {
	        localpart: 0,
	        domain: 1,
	        literal: 2,
	        contextComment: 3,
	        contextFWS: 4,
	        contextQuotedString: 5,
	        contextQuotedPair: 6
	    }
	};

	// $lab:coverage:off$
	internals.defer = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ?
	    process.nextTick.bind(process) :
	    function (callback) {

	        return setTimeout(callback, 0);
	    };
	// $lab:coverage:on$


	// US-ASCII visible characters not valid for atext
	// (http://tools.ietf.org/html/rfc5322#section-3.2.3)
	var SPECIALS = '()<>[]:;@\\,."';

	// A silly little optimized function generator
	var optimizeLookup = function optimizeLookup (string) {

	    var lookup = new Array(0x100);

	    for (var i = 0xff; i >= 0; --i) {
	        lookup[i] = false;
	    }

	    for (var il = string.length; i < il; ++i) {
	        lookup[string.charCodeAt(i)] = true;
	    }

	    var body = 'return function (code) {\n';
	    body += '  return lookup[code];\n';
	    body += '}';
	    return (new Function('lookup', body))(lookup);
	};


	var specialsLookup = optimizeLookup(SPECIALS);

	// This matches valid IPv4 addresses from the end of a string
	var IPv4_REGEX =
	    /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
	var IPv6_REGEX = /^[a-fA-F\d]{0,4}$/;
	var IPv6_REGEX_TEST = IPv6_REGEX.test.bind(IPv6_REGEX);

	var hasOwn = Object.prototype.hasOwnProperty;

	/**
	 * Check that an email address conforms to RFCs 5321, 5322 and others
	 *
	 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
	 * addr-spec as defined by RFC 5322. Depending on the context, either can be
	 * regarded as a valid email address. The RFC 5321 Mailbox specification is
	 * more restrictive (comments, white space and obsolete forms are not allowed).
	 *
	 * @param {string} email The email address to check.
	 * @param {Object} options The (optional) options:
	 *   {boolean} checkDNS If true then will check DNS for MX records. If
	 *     true this call to isEmail _will_ be asynchronous.
	 *   {*} errorLevel Determines the boundary between valid and invalid
	 *     addresses. Status codes above this number will be returned as-is, status
	 *     codes below will be returned as valid. Thus the calling program can
	 *     simply look for diagnoses.valid if it is only interested in whether an
	 *     address is valid or not. The errorLevel will determine how "picky"
	 *     isEmail() is about the address. If omitted or passed as false then
	 *     isEmail() will return true or false rather than an integer error or
	 *     warning. NB Note the difference between errorLevel = false and
	 *     errorLevel = 0.
	 * @param {function(number|boolean)} callback The (optional) callback handler.
	 * @return {*}
	 */
	var isEmail = function isEmail (email, options, callback) {

	    if (typeof options === 'function') {
	        callback = options;
	        options = {};
	    }

	    if (!options) {
	        options = {};
	    }

	    if (typeof callback !== 'function') {
	        if (options.checkDNS) {
	            throw new TypeError('expected callback function for checkDNS option');
	        }

	        callback = null;
	    }

	    var diagnose;
	    var threshold;

	    if (typeof options.errorLevel === 'number') {
	        diagnose = true;
	        threshold = options.errorLevel;
	    }
	    else {
	        diagnose = !!options.errorLevel;
	        threshold = internals.diagnoses.valid;
	    }

	    if (options.tldWhitelist) {
	        if (typeof options.tldWhitelist === 'string') {
	            options.tldWhitelist = [options.tldWhitelist];
	        } else if (typeof options.tldWhitelist !== 'object') {
	            throw new TypeError('expected array or object tldWhitelist');
	        }
	    }

	    if (options.minDomainAtoms && (options.minDomainAtoms !== ((+options.minDomainAtoms) | 0) || options.minDomainAtoms < 0)) {
	        throw new TypeError('expected positive integer minDomainAtoms');
	    }

	    var maxResult = internals.diagnoses.valid;

	    var updateResult = function updateResult (value) {

	        if (value > maxResult) {
	            maxResult = value;
	        }
	    };

	    var context = {
	        now: internals.components.localpart,
	        prev: internals.components.localpart,
	        stack: [internals.components.localpart]
	    };

	    var token;
	    var prevToken = '';
	    var charCode = 0;

	    var parseData = {
	        local: '',
	        domain: ''
	    };
	    var atomData = {
	        locals: [''],
	        domains: ['']
	    };

	    var elementCount = 0;
	    var elementLength = 0;
	    var crlfCount = 0;

	    var hyphenFlag = false;
	    var assertEnd = false;

	    var emailLength = email.length;

	    for (var i = 0, il = emailLength; i < il; ++i) {
	        // Token is used outside the loop, must declare similarly
	        token = email[i];

	        switch (context.now) {
	            // Local-part
	            case internals.components.localpart:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   local-part      =   dot-atom / quoted-string / obs-local-part
	                //
	                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
	                //
	                //   dot-atom-text   =   1*atext *("." 1*atext)
	                //
	                //   quoted-string   =   [CFWS]
	                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
	                //                       [CFWS]
	                //
	                //   obs-local-part  =   word *("." word)
	                //
	                //   word            =   atom / quoted-string
	                //
	                //   atom            =   [CFWS] 1*atext [CFWS]
	                switch (token) {
	                    // Comment
	                    case '(':
	                        if (elementLength === 0) {
	                            // Comments are OK at the beginning of an element
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
	                        }
	                        else {
	                            updateResult(internals.diagnoses.cfwsComment);
	                             // Cannot start a comment in an element, should be end
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // Next dot-atom element
	                    case '.':
	                        if (elementLength === 0) {
	                            // Another dot, already?
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        }
	                        else {
	                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
	                            if (assertEnd) {
	                                updateResult(internals.diagnoses.deprecatedLocalPart);
	                            }

	                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
	                            assertEnd = false;
	                            elementLength = 0;
	                            ++elementCount;
	                            parseData.local += token;
	                            atomData.locals[elementCount] = '';
	                        }

	                        break;

	                    // Quoted string
	                    case '"':
	                        if (elementLength === 0) {
	                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
	                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            ++elementLength;

	                            // Quoted string must be the entire element
	                            assertEnd = true;
	                            context.stack.push(context.now);
	                            context.now = internals.components.contextQuotedString;
	                        }
	                        else {
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }

	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                        // Fallthrough

	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
	                        }
	                        else {
	                            // We can't start FWS in the middle of an element, better be end
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    case '@':
	                        // At this point we should have a valid local-part
	                        // $lab:coverage:off$
	                        if (context.stack.length !== 1) {
	                            throw new Error('unexpected item on context stack');
	                        }
	                        // $lab:coverage:on$

	                        if (parseData.local.length === 0) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errNoLocalPart);
	                        }
	                        else if (elementLength === 0) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errDotEnd);
	                        }
	                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
	                        //    octets
	                        else if (parseData.local.length > 64) {
	                            updateResult(internals.diagnoses.rfc5322LocalTooLong);
	                        }
	                        // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
	                        //    addr-spec
	                        //
	                        // http://tools.ietf.org/html/rfc2119
	                        // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
	                        //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
	                        //    and the case carefully weighed before implementing any behavior described with this label.
	                        else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
	                            updateResult(internals.diagnoses.deprecatedCFWSNearAt);
	                        }

	                        // Clear everything down for the domain parsing
	                        context.now = internals.components.domain;
	                        context.stack[0] = internals.components.domain;
	                        elementCount = 0;
	                        elementLength = 0;
	                        assertEnd = false; // CFWS can only appear at the end of the element
	                        break;

	                    // ATEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
	                        //            "!" / "#" /     ;  characters not including
	                        //            "$" / "%" /     ;  specials.  Used for atoms.
	                        //            "&" / "'" /
	                        //            "*" / "+" /
	                        //            "-" / "/" /
	                        //            "=" / "?" /
	                        //            "^" / "_" /
	                        //            "`" / "{" /
	                        //            "|" / "}" /
	                        //            "~"
	                        if (assertEnd) {
	                            // We have encountered atext where it is no longer valid
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;

	                                case internals.components.contextQuotedString:
	                                    updateResult(internals.diagnoses.errATEXTAfterQS);
	                                    break;

	                                // $lab:coverage:off$
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                                // $lab:coverage:on$
	                            }
	                        }
	                        else {
	                            context.prev = context.now;
	                            charCode = token.charCodeAt(0);

	                            // Especially if charCode == 10
	                            if (charCode < 33 || charCode > 126 || specialsLookup(charCode)) {

	                                // Fatal error
	                                updateResult(internals.diagnoses.errExpectingATEXT);
	                            }

	                            parseData.local += token;
	                            atomData.locals[elementCount] += token;
	                            ++elementLength;
	                        }
	                }

	                break;

	            case internals.components.domain:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   domain          =   dot-atom / domain-literal / obs-domain
	                //
	                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
	                //
	                //   dot-atom-text   =   1*atext *("." 1*atext)
	                //
	                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
	                //
	                //   dtext           =   %d33-90 /          ; Printable US-ASCII
	                //                       %d94-126 /         ;  characters not including
	                //                       obs-dtext          ;  "[", "]", or "\"
	                //
	                //   obs-domain      =   atom *("." atom)
	                //
	                //   atom            =   [CFWS] 1*atext [CFWS]

	                // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                //   Mailbox        = Local-part "@" ( Domain / address-literal )
	                //
	                //   Domain         = sub-domain *("." sub-domain)
	                //
	                //   address-literal  = "[" ( IPv4-address-literal /
	                //                    IPv6-address-literal /
	                //                    General-address-literal ) "]"
	                //                    ; See Section 4.1.3

	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //      Note: A liberal syntax for the domain portion of addr-spec is
	                //      given here.  However, the domain portion contains addressing
	                //      information specified by and used in other protocols (e.g.,
	                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
	                //      incumbent upon implementations to conform to the syntax of
	                //      addresses for the context in which they are used.
	                //
	                // is_email() author's note: it's not clear how to interpret this in
	                // he context of a general email address validator. The conclusion I
	                // have reached is this: "addressing information" must comply with
	                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
	                // invisible" must comply only with RFC 5322.
	                switch (token) {
	                    // Comment
	                    case '(':
	                        if (elementLength === 0) {
	                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
	                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
	                        }
	                        else {
	                            // We can't start a comment mid-element, better be at the end
	                            assertEnd = true;
	                            updateResult(internals.diagnoses.cfwsComment);
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // Next dot-atom element
	                    case '.':
	                        if (elementLength === 0) {
	                            // Another dot, already? Fatal error.
	                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
	                        }
	                        else if (hyphenFlag) {
	                            // Previous subdomain ended in a hyphen. Fatal error.
	                            updateResult(internals.diagnoses.errDomainHyphenEnd);
	                        }
	                        else if (elementLength > 63) {
	                            // Nowhere in RFC 5321 does it say explicitly that the domain part of a Mailbox must be a valid domain according to the
	                            // DNS standards set out in RFC 1035, but this *is* implied in several places. For instance, wherever the idea of host
	                            // routing is discussed the RFC says that the domain must be looked up in the DNS. This would be nonsense unless the
	                            // domain was designed to be a valid DNS domain. Hence we must conclude that the RFC 1035 restriction on label length
	                            // also applies to RFC 5321 domains.
	                            //
	                            // http://tools.ietf.org/html/rfc1035#section-2.3.4
	                            // labels          63 octets or less

	                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
	                        }

	                        // CFWS is OK again now we're at the beginning of an element (although
	                        // it may be obsolete CFWS)
	                        assertEnd = false;
	                        elementLength = 0;
	                        ++elementCount;
	                        atomData.domains[elementCount] = '';
	                        parseData.domain += token;

	                        break;

	                    // Domain literal
	                    case '[':
	                        if (parseData.domain.length === 0) {
	                            // Domain literal must be the only component
	                            assertEnd = true;
	                            ++elementLength;
	                            context.stack.push(context.now);
	                            context.now = internals.components.literal;
	                            parseData.domain += token;
	                            atomData.domains[elementCount] += token;
	                            parseData.literal = '';
	                        }
	                        else {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }

	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                        // Fallthrough

	                    case ' ':
	                    case '\t':
	                        if (elementLength === 0) {
	                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
	                        }
	                        else {
	                            // We can't start FWS in the middle of an element, so this better be the end
	                            updateResult(internals.diagnoses.cfwsFWS);
	                            assertEnd = true;
	                        }

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // This must be ATEXT
	                    default:
	                        // RFC 5322 allows any atext...
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
	                        //            "!" / "#" /     ;  characters not including
	                        //            "$" / "%" /     ;  specials.  Used for atoms.
	                        //            "&" / "'" /
	                        //            "*" / "+" /
	                        //            "-" / "/" /
	                        //            "=" / "?" /
	                        //            "^" / "_" /
	                        //            "`" / "{" /
	                        //            "|" / "}" /
	                        //            "~"

	                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
	                        //   (RFCs 1034 & 1123)
	                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                        //   sub-domain     = Let-dig [Ldh-str]
	                        //
	                        //   Let-dig        = ALPHA / DIGIT
	                        //
	                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
	                        //
	                        if (assertEnd) {
	                            // We have encountered ATEXT where it is no longer valid
	                            switch (context.prev) {
	                                case internals.components.contextComment:
	                                case internals.components.contextFWS:
	                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
	                                    break;

	                                case internals.components.literal:
	                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
	                                    break;

	                                // $lab:coverage:off$
	                                default:
	                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
	                                // $lab:coverage:on$
	                            }
	                        }

	                        charCode = token.charCodeAt(0);
	                        // Assume this token isn't a hyphen unless we discover it is
	                        hyphenFlag = false;

	                        if (charCode < 33 || charCode > 126 || specialsLookup(charCode)) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingATEXT);
	                        }
	                        else if (token === '-') {
	                            if (elementLength === 0) {
	                                // Hyphens cannot be at the beginning of a subdomain, fatal error
	                                updateResult(internals.diagnoses.errDomainHyphenStart);
	                            }

	                            hyphenFlag = true;
	                        }
	                        // Check if it's a neither a number nor a latin letter
	                        else if (charCode < 48 || charCode > 122 || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97)) {
	                            // This is not an RFC 5321 subdomain, but still OK by RFC 5322
	                            updateResult(internals.diagnoses.rfc5322Domain);
	                        }

	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                }

	                break;

	            // Domain literal
	            case internals.components.literal:
	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
	                //
	                //   dtext           =   %d33-90 /          ; Printable US-ASCII
	                //                       %d94-126 /         ;  characters not including
	                //                       obs-dtext          ;  "[", "]", or "\"
	                //
	                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
	                switch (token) {
	                    // End of domain literal
	                    case ']':
	                        if (maxResult < internals.categories.deprecated) {
	                            // Could be a valid RFC 5321 address literal, so let's check

	                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                            //   address-literal  = "[" ( IPv4-address-literal /
	                            //                    IPv6-address-literal /
	                            //                    General-address-literal ) "]"
	                            //                    ; See Section 4.1.3
	                            //
	                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
	                            //   IPv4-address-literal  = Snum 3("."  Snum)
	                            //
	                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
	                            //
	                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
	                            //
	                            //   Standardized-tag  = Ldh-str
	                            //                     ; Standardized-tag MUST be specified in a
	                            //                     ; Standards-Track RFC and registered with IANA
	                            //
	                            //   dcontent      = %d33-90 / ; Printable US-ASCII
	                            //                 %d94-126 ; excl. "[", "\", "]"
	                            //
	                            //   Snum          = 1*3DIGIT
	                            //                 ; representing a decimal integer
	                            //                 ; value in the range 0 through 255
	                            //
	                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
	                            //
	                            //   IPv6-hex      = 1*4HEXDIG
	                            //
	                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
	                            //
	                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
	                            //                 [IPv6-hex *5(":" IPv6-hex)]
	                            //                 ; The "::" represents at least 2 16-bit groups of
	                            //                 ; zeros.  No more than 6 groups in addition to the
	                            //                 ; "::" may be present.
	                            //
	                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
	                            //
	                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
	                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
	                            //                 IPv4-address-literal
	                            //                 ; The "::" represents at least 2 16-bit groups of
	                            //                 ; zeros.  No more than 4 groups in addition to the
	                            //                 ; "::" and IPv4-address-literal may be present.

	                            var index = -1;
	                            var addressLiteral = parseData.literal;
	                            var matchesIP = IPv4_REGEX.exec(addressLiteral);

	                            // Maybe extract IPv4 part from the end of the address-literal
	                            if (matchesIP) {
	                                index = matchesIP.index;
	                                if (index !== 0) {
	                                    // Convert IPv4 part to IPv6 format for futher testing
	                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
	                                }
	                            }

	                            if (index === 0) {
	                                // Nothing there except a valid IPv4 address, so...
	                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                            }
	                            else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
	                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                            }
	                            else {
	                                var match = addressLiteral.slice(5);
	                                var maxGroups = internals.maxIPv6Groups;
	                                var groups = match.split(':');
	                                index = match.indexOf('::');

	                                if (!~index) {
	                                    // Need exactly the right number of groups
	                                    if (groups.length !== maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
	                                    }
	                                }
	                                else if (index !== match.lastIndexOf('::')) {
	                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
	                                }
	                                else {
	                                    if (index === 0 || index === match.length - 2) {
	                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
	                                        ++maxGroups;
	                                    }

	                                    if (groups.length > maxGroups) {
	                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
	                                    }
	                                    else if (groups.length === maxGroups) {
	                                        // Eliding a single "::"
	                                        updateResult(internals.diagnoses.deprecatedIPv6);
	                                    }
	                                }

	                                // IPv6 testing strategy
	                                if (match[0] === ':' && match[1] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
	                                }
	                                else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
	                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
	                                }
	                                else if (groups.every(IPv6_REGEX_TEST)) {
	                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
	                                }
	                                else {
	                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
	                                }
	                            }
	                        }
	                        else {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
	                        }

	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    case '\\':
	                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                        // Fallthrough

	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // DTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
	                        //                     %d94-126 / ;  characters not including
	                        //                     obs-dtext  ;  "[", "]", or "\"
	                        //
	                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
	                        //
	                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
	                        //                     %d11 /     ;  characters that do not
	                        //                     %d12 /     ;  include the carriage
	                        //                     %d14-31 /  ;  return, line feed, and
	                        //                     %d127      ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        // '\r', '\n', ' ', and '\t' have already been parsed above
	                        if (charCode > 127 || charCode === 0 || token === '[') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingDTEXT);
	                            break;
	                        }
	                        else if (charCode < 33 || charCode === 127) {
	                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
	                        }

	                        parseData.literal += token;
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;
	                        ++elementLength;
	                }

	                break;

	            // Quoted string
	            case internals.components.contextQuotedString:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                //   quoted-string = [CFWS]
	                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
	                //                   [CFWS]
	                //
	                //   qcontent      = qtext / quoted-pair
	                switch (token) {
	                    // Quoted pair
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                        // Fallthrough

	                    case '\t':
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
	                        //   a structured header field are semantically interpreted as a single
	                        //   space character.

	                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
	                        //   semantically "invisible" and therefore not part of the
	                        //   quoted-string

	                        parseData.local += ' ';
	                        atomData.locals[elementCount] += ' ';
	                        ++elementLength;

	                        updateResult(internals.diagnoses.cfwsFWS);
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // End of quoted string
	                    case '"':
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        ++elementLength;
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    // QTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
	                        //   qtext          =   %d33 /             ; Printable US-ASCII
	                        //                      %d35-91 /          ;  characters not including
	                        //                      %d93-126 /         ;  "\" or the quote character
	                        //                      obs-qtext
	                        //
	                        //   obs-qtext      =   obs-NO-WS-CTL
	                        //
	                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
	                        //                      %d11 /             ;  characters that do not
	                        //                      %d12 /             ;  include the carriage
	                        //                      %d14-31 /          ;  return, line feed, and
	                        //                      %d127              ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        if (charCode > 127 || charCode === 0 || charCode === 10) {
	                            updateResult(internals.diagnoses.errExpectingQTEXT);
	                        }
	                        else if (charCode < 32 || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedQTEXT);
	                        }

	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;
	                        ++elementLength;
	                }

	                // http://tools.ietf.org/html/rfc5322#section-3.4.1
	                //   If the string can be represented as a dot-atom (that is, it contains
	                //   no characters other than atext characters or "." surrounded by atext
	                //   characters), then the dot-atom form SHOULD be used and the quoted-
	                //   string form SHOULD NOT be used.

	                break;
	            // Quoted pair
	            case internals.components.contextQuotedPair:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.1
	                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
	                //
	                //   VCHAR           =  %d33-126   ; visible (printing) characters
	                //   WSP             =  SP / HTAB  ; white space
	                //
	                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
	                //
	                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
	                //                       %d11 /    ;  characters that do not
	                //                       %d12 /    ;  include the carriage
	                //                       %d14-31 / ;  return, line feed, and
	                //                       %d127     ;  white space characters
	                //
	                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
	                charCode = token.charCodeAt(0);

	                if (charCode > 127) {
	                    // Fatal error
	                    updateResult(internals.diagnoses.errExpectingQPair);
	                }
	                else if ((charCode < 31 && charCode !== 9) || charCode === 127) {
	                    // ' ' and '\t' are allowed
	                    updateResult(internals.diagnoses.deprecatedQP);
	                }

	                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
	                // http://tools.ietf.org/html/rfc5321#section-4.1.2
	                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

	                context.prev = context.now;
	                // End of qpair
	                context.now = context.stack.pop();
	                token = '\\' + token;

	                switch (context.now) {
	                    case internals.components.contextComment:
	                        break;

	                    case internals.components.contextQuotedString:
	                        parseData.local += token;
	                        atomData.locals[elementCount] += token;

	                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
	                        elementLength += 2;
	                        break;

	                    case internals.components.literal:
	                        parseData.domain += token;
	                        atomData.domains[elementCount] += token;

	                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
	                        elementLength += 2;
	                        break;

	                    // $lab:coverage:off$
	                    default:
	                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
	                    // $lab:coverage:on$
	                }
	                break;

	            // Comment
	            case internals.components.contextComment:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
	                //
	                //   ccontent = ctext / quoted-pair / comment
	                switch (token) {
	                    // Nested comment
	                    case '(':
	                        // Nested comments are ok
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextComment;
	                        break;

	                    // End of comment
	                    case ')':
	                        context.prev = context.now;
	                        context.now = context.stack.pop();
	                        break;

	                    // Quoted pair
	                    case '\\':
	                        context.stack.push(context.now);
	                        context.now = internals.components.contextQuotedPair;
	                        break;

	                    // Folding white space
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                            break;
	                        }

	                        // Fallthrough

	                    case ' ':
	                    case '\t':
	                        updateResult(internals.diagnoses.cfwsFWS);

	                        context.stack.push(context.now);
	                        context.now = internals.components.contextFWS;
	                        prevToken = token;
	                        break;

	                    // CTEXT
	                    default:
	                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
	                        //   ctext         = %d33-39 /  ; Printable US-ASCII
	                        //                   %d42-91 /  ;  characters not including
	                        //                   %d93-126 / ;  "(", ")", or "\"
	                        //                   obs-ctext
	                        //
	                        //   obs-ctext     = obs-NO-WS-CTL
	                        //
	                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
	                        //                   %d11 /     ;  characters that do not
	                        //                   %d12 /     ;  include the carriage
	                        //                   %d14-31 /  ;  return, line feed, and
	                        //                   %d127      ;  white space characters
	                        charCode = token.charCodeAt(0);

	                        if (charCode > 127 || charCode === 0 || charCode === 10) {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errExpectingCTEXT);
	                            break;
	                        }
	                        else if (charCode < 32 || charCode === 127) {
	                            updateResult(internals.diagnoses.deprecatedCTEXT);
	                        }
	                }

	                break;

	            // Folding white space
	            case internals.components.contextFWS:
	                // http://tools.ietf.org/html/rfc5322#section-3.2.2
	                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
	                //                                   ; Folding white space

	                // But note the erratum:
	                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
	                //   In the obsolete syntax, any amount of folding white space MAY be
	                //   inserted where the obs-FWS rule is allowed.  This creates the
	                //   possibility of having two consecutive "folds" in a line, and
	                //   therefore the possibility that a line which makes up a folded header
	                //   field could be composed entirely of white space.
	                //
	                //   obs-FWS =   1*([CRLF] WSP)

	                if (prevToken === '\r') {
	                    if (token === '\r') {
	                        // Fatal error
	                        updateResult(internals.diagnoses.errFWSCRLFx2);
	                        break;
	                    }

	                    if (++crlfCount > 1) {
	                        // Multiple folds => obsolete FWS
	                        updateResult(internals.diagnoses.deprecatedFWS);
	                    }
	                    else {
	                        crlfCount = 1;
	                    }
	                }

	                switch (token) {
	                    case '\r':
	                        if (emailLength === ++i || email[i] !== '\n') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errCRNoLF);
	                        }

	                        break;

	                    case ' ':
	                    case '\t':
	                        break;

	                    default:
	                        if (prevToken === '\r') {
	                            // Fatal error
	                            updateResult(internals.diagnoses.errFWSCRLFEnd);
	                        }

	                        crlfCount = 0;

	                        // End of FWS
	                        context.prev = context.now;
	                        context.now = context.stack.pop();

	                        // Look at this token again in the parent context
	                        --i;
	                }

	                prevToken = token;
	                break;

	            // Unexpected context
	            // $lab:coverage:off$
	            default:
	                throw new Error('unknown context: ' + context.now);
	            // $lab:coverage:on$
	        } // Primary state machine

	        if (maxResult > internals.categories.rfc5322) {
	            // Fatal error, no point continuing
	            break;
	        }
	    } // Token loop

	    // Check for errors
	    if (maxResult < internals.categories.rfc5322) {
	        // Fatal errors
	        if (context.now === internals.components.contextQuotedString) {
	            updateResult(internals.diagnoses.errUnclosedQuotedString);
	        }
	        else if (context.now === internals.components.contextQuotedPair) {
	            updateResult(internals.diagnoses.errBackslashEnd);
	        }
	        else if (context.now === internals.components.contextComment) {
	            updateResult(internals.diagnoses.errUnclosedComment);
	        }
	        else if (context.now === internals.components.literal) {
	            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
	        }
	        else if (token === '\r') {
	            updateResult(internals.diagnoses.errFWSCRLFEnd);
	        }
	        else if (parseData.domain.length === 0) {
	            updateResult(internals.diagnoses.errNoDomain);
	        }
	        else if (elementLength === 0) {
	            updateResult(internals.diagnoses.errDotEnd);
	        }
	        else if (hyphenFlag) {
	            updateResult(internals.diagnoses.errDomainHyphenEnd);
	        }

	        // Other errors
	        else if (parseData.domain.length > 255) {
	            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
	            //   The maximum total length of a domain name or number is 255 octets.
	            updateResult(internals.diagnoses.rfc5322DomainTooLong);
	        }
	        else if (parseData.local.length + parseData.domain.length + /* '@' */ 1 > 254) {
	            // http://tools.ietf.org/html/rfc5321#section-4.1.2
	            //   Forward-path   = Path
	            //
	            //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
	            //
	            // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
	            //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
	            //
	            // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
	            // erratum to RFC 3696:
	            //
	            // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
	            //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
	            //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
	            //   to be 254.
	            updateResult(internals.diagnoses.rfc5322TooLong);
	        }
	        else if (elementLength > 63) {
	            // http://tools.ietf.org/html/rfc1035#section-2.3.4
	            // labels   63 octets or less
	            updateResult(internals.diagnoses.rfc5322LabelTooLong);
	        }
	        else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
	            updateResult(internals.diagnoses.errDomainTooShort);
	        }
	        else if (options.tldWhitelist) {
	            var tldAtom = atomData.domains[elementCount];
	            if (Array.isArray(options.tldWhitelist)) {
	                var tldValid = false;
	                for (i = 0, il = options.tldWhitelist.length; i < il; ++i) {
	                    if (tldAtom === options.tldWhitelist[i]) {
	                        tldValid = true;
	                        break;
	                    }
	                }

	                if (!tldValid) {
	                    updateResult(internals.diagnoses.errUnknownTLD);
	                }
	            }
	            else if (!hasOwn.call(options.tldWhitelist, tldAtom)) {
	                updateResult(internals.diagnoses.errUnknownTLD);
	            }
	        }
	    } // Check for errors

	    var dnsPositive = false;
	    var finishImmediately = false;

	    var finish = function finish () {

	        if (!dnsPositive && maxResult < internals.categories.dnsWarn) {
	            // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
	            var code = atomData.domains[elementCount].charCodeAt(0);
	            if (code <= 57) {
	                updateResult(internals.diagnoses.rfc5321TLDNumeric);
	            }
	            else if (elementCount === 0) {
	                updateResult(internals.diagnoses.rfc5321TLD);
	            }
	        }

	        if (maxResult < threshold) {
	            maxResult = internals.diagnoses.valid;
	        }

	        var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

	        if (callback) {
	            if (finishImmediately) {
	                callback(finishResult);
	            } else {
	                internals.defer(callback.bind(null, finishResult));
	            }
	        }

	        return finishResult;
	    }; // Finish

	    if (options.checkDNS && maxResult < internals.categories.dnsWarn) {
	        // http://tools.ietf.org/html/rfc5321#section-2.3.5
	        //   Names that can be resolved to MX RRs or address (i.e., A or AAAA) RRs (as discussed in Section 5) are permitted, as are CNAME RRs whose
	        //   targets can be resolved, in turn, to MX or address RRs.
	        //
	        // http://tools.ietf.org/html/rfc5321#section-5.1
	        //   The lookup first attempts to locate an MX record associated with the name.  If a CNAME record is found, the resulting name is processed
	        //   as if it were the initial name. ... If an empty list of MXs is returned, the address is treated as if it was associated with an implicit
	        //   MX RR, with a preference of 0, pointing to that host.
	        //
	        // isEmail() author's note: We will regard the existence of a CNAME to be sufficient evidence of the domain's existence. For performance
	        // reasons we will not repeat the DNS lookup for the CNAME's target, but we will raise a warning because we didn't immediately find an MX
	        // record.
	        if (elementCount === 0) {
	            // Checking TLD DNS only works if you explicitly check from the root
	            parseData.domain += '.';
	        }

	        var dnsDomain = parseData.domain;
	        Dns.resolveMx(dnsDomain, function resolveDNS (err, mxRecords) {

	            // If we have a fatal error, then we must assume that there are no records
	            if (err && err.code !== Dns.NODATA) {
	                updateResult(internals.diagnoses.dnsWarnNoRecord);
	                return finish();
	            }

	            if (mxRecords && mxRecords.length) {
	                dnsPositive = true;
	                return finish();
	            }

	            var count = 3;
	            var done = false;
	            updateResult(internals.diagnoses.dnsWarnNoMXRecord);

	            var handleRecords = function handleRecords (err, records) {

	                if (done) {
	                    return;
	                }

	                --count;

	                if (records && records.length) {
	                    done = true;
	                    return finish();
	                }

	                if (count === 0) {
	                    // No usable records for the domain can be found
	                    updateResult(internals.diagnoses.dnsWarnNoRecord);
	                    done = true;
	                    finish();
	                }
	            };

	            Dns.resolveCname(dnsDomain, handleRecords);
	            Dns.resolve4(dnsDomain, handleRecords);
	            Dns.resolve6(dnsDomain, handleRecords);
	        });

	        finishImmediately = true;
	    }
	    else {
	        var result = finish();
	        finishImmediately = true;
	        return result;
	    } // CheckDNS
	};


	isEmail.diagnoses = (function exportDiagnoses () {

	    var diag = {};
	    for (var key in internals.diagnoses) {
	        diag[key] = internals.diagnoses[key];
	    }
	    return diag;
	})();

	module.exports = isEmail;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(325)))

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var RFC3986 = __webpack_require__(391);

	var internals = {
	    Uri: {
	        createUriRegex: function (optionalScheme) {

	            var scheme = RFC3986.scheme;

	            // If we were passed a scheme, use it instead of the generic one
	            if (optionalScheme) {

	                // Have to put this in a non-capturing group to handle the OR statements
	                scheme = '(?:' + optionalScheme + ')';
	            }

	            /**
	             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
	             */
	            return new RegExp('^' + scheme + ':' + RFC3986.hierPart + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
	        }
	    }
	};

	module.exports = internals.Uri;


/***/ },
/* 391 */
/***/ function(module, exports) {

	var internals = {
	    rfc3986: {}
	};

	/**
	 * elements separated by forward slash ("/") are alternatives.
	 */
	var or = '|';

	/**
	 * DIGIT = %x30-39 ; 0-9
	 */
	var digit = '0-9';
	var digitOnly = '[' + digit + ']';

	/**
	 * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
	 */
	var alpha = 'a-zA-Z';
	var alphaOnly = '[' + alpha + ']';

	/**
	 * cidr       = DIGIT                ; 0-9
	 *            / %x31-32 DIGIT         ; 10-29
	 *            / "3" %x30-32           ; 30-32
	 */
	internals.rfc3986.cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

	/**
	 * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
	 */
	var hexDigit = digit + 'A-Fa-f',
	    hexDigitOnly = '[' + hexDigit + ']';

	/**
	 * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
	 */
	var unreserved = alpha + digit + '-\\._~';

	/**
	 * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
	 */
	var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

	/**
	 * pct-encoded = "%" HEXDIG HEXDIG
	 */
	var pctEncoded = '%' + hexDigit;

	/**
	 * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
	 */
	var pchar = unreserved + pctEncoded + subDelims + ':@';
	var pcharOnly = '[' + pchar + ']';

	/**
	 * Rule to support zero-padded addresses.
	 */
	var zeroPad = '0?';

	/**
	 * dec-octet   = DIGIT                 ; 0-9
	 *            / %x31-39 DIGIT         ; 10-99
	 *            / "1" 2DIGIT            ; 100-199
	 *            / "2" %x30-34 DIGIT     ; 200-249
	 *            / "25" %x30-35          ; 250-255
	 */
	var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

	/**
	 * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
	 */
	internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

	/**
	 * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
	 * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
	 * IPv6address =                            6( h16 ":" ) ls32
	 *             /                       "::" 5( h16 ":" ) ls32
	 *             / [               h16 ] "::" 4( h16 ":" ) ls32
	 *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
	 *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
	 *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
	 *             / [ *4( h16 ":" ) h16 ] "::"              ls32
	 *             / [ *5( h16 ":" ) h16 ] "::"              h16
	 *             / [ *6( h16 ":" ) h16 ] "::"
	 */
	var h16 = hexDigitOnly + '{1,4}';
	var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
	var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
	var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
	var IPv6FourHex = h16 + '::(?:' + h16 + ':){4}' + ls32;
	var IPv6ThreeHex = '(?:' + h16 + ':){0,1}' + h16 + '::(?:' + h16 + ':){3}' + ls32;
	var IPv6TwoHex = '(?:' + h16 + ':){0,2}' + h16 + '::(?:' + h16 + ':){2}' + ls32;
	var IPv6OneHex = '(?:' + h16 + ':){0,3}' + h16 + '::' + h16 + ':' + ls32;
	var IPv6NoneHex = '(?:' + h16 + ':){0,4}' + h16 + '::' + ls32;
	var IPv6NoneHex2 = '(?:' + h16 + ':){0,5}' + h16 + '::' + h16;
	var IPv6NoneHex3 = '(?:' + h16 + ':){0,6}' + h16 + '::';
	internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

	/**
	 * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
	 */
	internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

	/**
	 * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
	 */
	internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

	/**
	 * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
	 */
	var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

	/**
	 * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
	 */
	var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

	/**
	 * reg-name = *( unreserved / pct-encoded / sub-delims )
	 */
	var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

	/**
	 * host = IP-literal / IPv4address / reg-name
	 */
	var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

	/**
	 * port = *DIGIT
	 */
	var port = digitOnly + '*';

	/**
	 * authority   = [ userinfo "@" ] host [ ":" port ]
	 */
	var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

	/**
	 * segment       = *pchar
	 * segment-nz    = 1*pchar
	 * path          = path-abempty    ; begins with "/" or is empty
	 *               / path-absolute   ; begins with "/" but not "//"
	 *               / path-noscheme   ; begins with a non-colon segment
	 *               / path-rootless   ; begins with a segment
	 *               / path-empty      ; zero characters
	 * path-abempty  = *( "/" segment )
	 * path-absolute = "/" [ segment-nz *( "/" segment ) ]
	 * path-rootless = segment-nz *( "/" segment )
	 */
	var segment = pcharOnly + '*';
	var segmentNz = pcharOnly + '+';
	var pathAbEmpty = '(?:\\/' + segment + ')*';
	var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
	var pathRootless = segmentNz + pathAbEmpty;

	/**
	 * hier-part = "//" authority path
	 */
	internals.rfc3986.hierPart = '(?:\\/\\/' + authority + pathAbEmpty + or + pathAbsolute + or + pathRootless + ')';

	/**
	 * query = *( pchar / "/" / "?" )
	 */
	internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

	/**
	 * fragment = *( pchar / "/" / "?" )
	 */
	internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';

	module.exports = internals.rfc3986;


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var RFC3986 = __webpack_require__(391);

	var internals = {
	    Ip: {
	        cidrs: {
	            required: '\\/(?:' + RFC3986.cidr + ')',
	            optional: '(?:\\/(?:' + RFC3986.cidr + '))?',
	            forbidden: ''
	        },
	        versions: {
	            ipv4: RFC3986.IPv4address,
	            ipv6: RFC3986.IPv6address,
	            ipvfuture: RFC3986.IPvFuture
	        }
	    }
	};

	internals.Ip.createIpRegex = function (versions, cidr) {

	    var regex;
	    for (var i = 0, il = versions.length; i < il; ++i) {
	        var version = versions[i];
	        if (!regex) {
	            regex = '^(?:' + internals.Ip.versions[version];
	        }
	        regex += '|' + internals.Ip.versions[version];
	    }

	    return new RegExp(regex + ')' + internals.Ip.cidrs[cidr] + '$');
	};

	module.exports = internals.Ip;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Any = __webpack_require__(376);
	var Ref = __webpack_require__(380);
	var Errors = __webpack_require__(381);
	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	internals.Number = function () {

	    Any.call(this);
	    this._type = 'number';
	    this._invalids.add(Infinity);
	    this._invalids.add(-Infinity);
	};

	Hoek.inherits(internals.Number, Any);

	internals.compare = function (type, compare) {

	    return function (limit) {

	        var isRef = Ref.isRef(limit);
	        var isNumber = typeof limit === 'number' && !isNaN(limit);

	        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');

	        return this._test(type, limit, function (value, state, options) {

	            var compareTo;
	            if (isRef) {
	                compareTo = limit(state.parent, options);

	                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
	                    return Errors.create('number.ref', { ref: limit.key }, state, options);
	                }
	            }
	            else {
	                compareTo = limit;
	            }

	            if (compare(value, compareTo)) {
	                return null;
	            }

	            return Errors.create('number.' + type, { limit: compareTo, value: value }, state, options);
	        });
	    };
	};


	internals.Number.prototype._base = function (value, state, options) {

	    var result = {
	        errors: null,
	        value: value
	    };

	    if (typeof value === 'string' &&
	        options.convert) {

	        var number = parseFloat(value);
	        result.value = (isNaN(number) || !isFinite(value)) ? NaN : number;
	    }

	    var isNumber = typeof result.value === 'number' && !isNaN(result.value);

	    if (options.convert && 'precision' in this._flags && isNumber) {

	        // This is conceptually equivalent to using toFixed but it should be much faster
	        var precision = Math.pow(10, this._flags.precision);
	        result.value = Math.round(result.value * precision) / precision;
	    }

	    result.errors = isNumber ? null : Errors.create('number.base', null, state, options);
	    return result;
	};


	internals.Number.prototype.min = internals.compare('min', function (value, limit) {

	    return value >= limit;
	});


	internals.Number.prototype.max = internals.compare('max', function (value, limit) {

	    return value <= limit;
	});


	internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {

	    return value > limit;
	});


	internals.Number.prototype.less = internals.compare('less', function (value, limit) {

	    return value < limit;
	});


	internals.Number.prototype.multiple = function (base) {

	    Hoek.assert(Hoek.isInteger(base), 'multiple must be an integer');
	    Hoek.assert(base > 0, 'multiple must be greater than 0');

	    return this._test('multiple', base, function (value, state, options) {

	        if (value % base === 0) {
	            return null;
	        }

	        return Errors.create('number.multiple', { multiple: base, value: value }, state, options);
	    });
	};


	internals.Number.prototype.integer = function () {

	    return this._test('integer', undefined, function (value, state, options) {

	        return Hoek.isInteger(value) ? null : Errors.create('number.integer', { value: value }, state, options);
	    });
	};


	internals.Number.prototype.negative = function () {

	    return this._test('negative', undefined, function (value, state, options) {

	        if (value < 0) {
	            return null;
	        }

	        return Errors.create('number.negative', { value: value }, state, options);
	    });
	};


	internals.Number.prototype.positive = function () {

	    return this._test('positive', undefined, function (value, state, options) {

	        if (value > 0) {
	            return null;
	        }

	        return Errors.create('number.positive', { value: value }, state, options);
	    });
	};


	internals.precisionRx = /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;


	internals.Number.prototype.precision = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit), 'limit must be an integer');
	    Hoek.assert(!('precision' in this._flags), 'precision already set');

	    var obj = this._test('precision', limit, function (value, state, options){

	        var places = value.toString().match(internals.precisionRx);
	        var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
	        if (decimals <= limit) {
	            return null;
	        }

	        return Errors.create('number.precision', { limit: limit, value: value }, state, options);
	    });

	    obj._flags.precision = limit;
	    return obj;
	};


	module.exports = new internals.Number();


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Any = __webpack_require__(376);
	var Errors = __webpack_require__(381);
	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	internals.Boolean = function () {

	    Any.call(this);
	    this._type = 'boolean';
	};

	Hoek.inherits(internals.Boolean, Any);


	internals.Boolean.prototype._base = function (value, state, options) {

	    var result = {
	        value: value
	    };

	    if (typeof value === 'string' &&
	        options.convert) {

	        var lower = value.toLowerCase();
	        result.value = (lower === 'true' || lower === 'yes' || lower === 'on' ? true
	                                                                              : (lower === 'false' || lower === 'no' || lower === 'off' ? false : value));
	    }

	    result.errors = (typeof result.value === 'boolean') ? null : Errors.create('boolean.base', null, state, options);
	    return result;
	};


	module.exports = new internals.Boolean();


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);
	var Any = __webpack_require__(376);
	var Cast = __webpack_require__(383);
	var Ref = __webpack_require__(380);
	var Errors = __webpack_require__(381);


	// Declare internals

	var internals = {};


	internals.Alternatives = function () {

	    Any.call(this);
	    this._type = 'alternatives';
	    this._invalids.remove(null);

	    this._inner.matches = [];
	};

	Hoek.inherits(internals.Alternatives, Any);


	internals.Alternatives.prototype._base = function (value, state, options) {

	    var errors = [];
	    for (var i = 0, il = this._inner.matches.length; i < il; ++i) {
	        var item = this._inner.matches[i];
	        var schema = item.schema;
	        if (!schema) {
	            var failed = item.is._validate(item.ref(state.parent, options), null, options, state.parent).errors;
	            schema = failed ? item.otherwise : item.then;
	            if (!schema) {
	                continue;
	            }
	        }

	        var result = schema._validate(value, state, options);
	        if (!result.errors) {     // Found a valid match
	            return result;
	        }

	        errors = errors.concat(result.errors);
	    }

	    return { errors: errors.length ? errors : Errors.create('alternatives.base', null, state, options) };
	};


	internals.Alternatives.prototype.try = function (/* schemas */) {


	    var schemas = Hoek.flatten(Array.prototype.slice.call(arguments));
	    Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

	    var obj = this.clone();

	    for (var i = 0, il = schemas.length; i < il; ++i) {
	        var cast = Cast.schema(schemas[i]);
	        if (cast._refs.length) {
	            obj._refs = obj._refs.concat(cast._refs);
	        }
	        obj._inner.matches.push({ schema: cast });
	    }

	    return obj;
	};


	internals.Alternatives.prototype.when = function (ref, options) {

	    Hoek.assert(Ref.isRef(ref) || typeof ref === 'string', 'Invalid reference:', ref);
	    Hoek.assert(options, 'Missing options');
	    Hoek.assert(typeof options === 'object', 'Invalid options');
	    Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
	    Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

	    var obj = this.clone();
	    var is = Cast.schema(options.is);

	    if (options.is === null || !options.is.isJoi) {

	        // Only apply required if this wasn't already a schema, we'll suppose people know what they're doing
	        is = is.required();
	    }

	    var item = {
	        ref: Cast.ref(ref),
	        is: is,
	        then: options.then !== undefined ? Cast.schema(options.then) : undefined,
	        otherwise: options.otherwise !== undefined ? Cast.schema(options.otherwise) : undefined
	    };

	    Ref.push(obj._refs, item.ref);
	    obj._refs = obj._refs.concat(item.is._refs);

	    if (item.then && item.then._refs) {
	        obj._refs = obj._refs.concat(item.then._refs);
	    }

	    if (item.otherwise && item.otherwise._refs) {
	        obj._refs = obj._refs.concat(item.otherwise._refs);
	    }

	    obj._inner.matches.push(item);

	    return obj;
	};


	internals.Alternatives.prototype.describe = function () {

	    var description = Any.prototype.describe.call(this);
	    var alternatives = [];
	    for (var i = 0, il = this._inner.matches.length; i < il; ++i) {
	        var item = this._inner.matches[i];
	        if (item.schema) {

	            // try()

	            alternatives.push(item.schema.describe());
	        }
	        else {

	            // when()

	            var when = {
	                ref: item.ref.toString(),
	                is: item.is.describe()
	            };

	            if (item.then) {
	                when.then = item.then.describe();
	            }

	            if (item.otherwise) {
	                when.otherwise = item.otherwise.describe();
	            }

	            alternatives.push(when);
	        }
	    }

	    description.alternatives = alternatives;
	    return description;
	};


	module.exports = new internals.Alternatives();


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);
	var Topo = __webpack_require__(397);
	var Any = __webpack_require__(376);
	var Cast = __webpack_require__(383);
	var Errors = __webpack_require__(381);


	// Declare internals

	var internals = {};


	internals.Object = function () {

	    Any.call(this);
	    this._type = 'object';
	    this._inner.children = null;
	    this._inner.renames = [];
	    this._inner.dependencies = [];
	    this._inner.patterns = [];
	};

	Hoek.inherits(internals.Object, Any);


	internals.Object.prototype._base = function (value, state, options) {

	    var item, key, localState, result;
	    var target = value;
	    var errors = [];
	    var finish = function () {

	        return {
	            value: target,
	            errors: errors.length ? errors : null
	        };
	    };

	    if (typeof value === 'string' &&
	        options.convert) {

	        try {
	            value = JSON.parse(value);
	        }
	        catch (parseErr) { }
	    }

	    var type = this._flags.func ? 'function' : 'object';
	    if (!value ||
	        typeof value !== type ||
	        Array.isArray(value)) {

	        errors.push(Errors.create(type + '.base', null, state, options));
	        return finish();
	    }

	    // Skip if there are no other rules to test

	    if (!this._inner.renames.length &&
	        !this._inner.dependencies.length &&
	        !this._inner.children &&                    // null allows any keys
	        !this._inner.patterns.length) {

	        target = value;
	        return finish();
	    }

	    // Ensure target is a local copy (parsed) or shallow copy

	    if (target === value) {
	        if (type === 'object') {
	            target = Object.create(Object.getPrototypeOf(value));
	        }
	        else {
	            target = function () {

	                return value.apply(this, arguments);
	            };

	            target.prototype = Hoek.clone(value.prototype);
	        }

	        var valueKeys = Object.keys(value);
	        for (var t = 0, tl = valueKeys.length; t < tl; ++t) {
	            target[valueKeys[t]] = value[valueKeys[t]];
	        }
	    }
	    else {
	        target = value;
	    }

	    // Rename keys

	    var renamed = {};
	    for (var r = 0, rl = this._inner.renames.length; r < rl; ++r) {
	        item = this._inner.renames[r];

	        if (item.options.ignoreUndefined && target[item.from] === undefined) {
	            continue;
	        }

	        if (!item.options.multiple &&
	            renamed[item.to]) {

	            errors.push(Errors.create('object.rename.multiple', { from: item.from, to: item.to }, state, options));
	            if (options.abortEarly) {
	                return finish();
	            }
	        }

	        if (Object.prototype.hasOwnProperty.call(target, item.to) &&
	            !item.options.override &&
	            !renamed[item.to]) {

	            errors.push(Errors.create('object.rename.override', { from: item.from, to: item.to }, state, options));
	            if (options.abortEarly) {
	                return finish();
	            }
	        }

	        if (target[item.from] === undefined) {
	            delete target[item.to];
	        }
	        else {
	            target[item.to] = target[item.from];
	        }

	        renamed[item.to] = true;

	        if (!item.options.alias) {
	            delete target[item.from];
	        }
	    }

	    // Validate schema

	    if (!this._inner.children &&            // null allows any keys
	        !this._inner.patterns.length &&
	        !this._inner.dependencies.length) {

	        return finish();
	    }

	    var unprocessed = Hoek.mapToObject(Object.keys(target));

	    if (this._inner.children) {
	        for (var i = 0, il = this._inner.children.length; i < il; ++i) {
	            var child = this._inner.children[i];
	            key = child.key;
	            item = target[key];

	            delete unprocessed[key];

	            localState = { key: key, path: (state.path || '') + (state.path && key ? '.' : '') + key, parent: target, reference: state.reference };
	            result = child.schema._validate(item, localState, options);
	            if (result.errors) {
	                errors.push(Errors.create('object.child', { key: key, reason: result.errors }, localState, options));

	                if (options.abortEarly) {
	                    return finish();
	                }
	            }

	            if (child.schema._flags.strip || (result.value === undefined && result.value !== item)) {
	                delete target[key];
	            }
	            else if (result.value !== undefined) {
	                target[key] = result.value;
	            }
	        }
	    }

	    // Unknown keys

	    var unprocessedKeys = Object.keys(unprocessed);
	    if (unprocessedKeys.length &&
	        this._inner.patterns.length) {

	        for (i = 0, il = unprocessedKeys.length; i < il; ++i) {
	            key = unprocessedKeys[i];

	            for (var p = 0, pl = this._inner.patterns.length; p < pl; ++p) {
	                var pattern = this._inner.patterns[p];

	                if (pattern.regex.test(key)) {
	                    delete unprocessed[key];

	                    item = target[key];
	                    localState = { key: key, path: (state.path ? state.path + '.' : '') + key, parent: target, reference: state.reference };
	                    result = pattern.rule._validate(item, localState, options);
	                    if (result.errors) {
	                        errors.push(Errors.create('object.child', { key: key, reason: result.errors }, localState, options));

	                        if (options.abortEarly) {
	                            return finish();
	                        }
	                    }

	                    if (result.value !== undefined) {
	                        target[key] = result.value;
	                    }
	                }
	            }
	        }

	        unprocessedKeys = Object.keys(unprocessed);
	    }

	    if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
	        if (options.stripUnknown ||
	            options.skipFunctions) {

	            for (var k = 0, kl = unprocessedKeys.length; k < kl; ++k) {
	                key = unprocessedKeys[k];

	                if (options.stripUnknown) {
	                    delete target[key];
	                    delete unprocessed[key];
	                }
	                else if (typeof target[key] === 'function') {
	                    delete unprocessed[key];
	                }
	            }

	            unprocessedKeys = Object.keys(unprocessed);
	        }

	        if (unprocessedKeys.length &&
	            (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

	            for (var e = 0, el = unprocessedKeys.length; e < el; ++e) {
	                errors.push(Errors.create('object.allowUnknown', null, { key: unprocessedKeys[e], path: state.path + (state.path ? '.' : '') + unprocessedKeys[e] }, options));
	            }
	        }
	    }

	    // Validate dependencies

	    for (var d = 0, dl = this._inner.dependencies.length; d < dl; ++d) {
	        var dep = this._inner.dependencies[d];
	        var err = internals[dep.type](dep.key !== null && value[dep.key], dep.peers, target, { key: dep.key, path: (state.path || '') + (dep.key ? '.' + dep.key : '') }, options);
	        if (err) {
	            errors.push(err);
	            if (options.abortEarly) {
	                return finish();
	            }
	        }
	    }

	    return finish();
	};


	internals.Object.prototype._func = function () {

	    var obj = this.clone();
	    obj._flags.func = true;
	    return obj;
	};


	internals.Object.prototype.keys = function (schema) {

	    Hoek.assert(schema === null || schema === undefined || typeof schema === 'object', 'Object schema must be a valid object');
	    Hoek.assert(!schema || !schema.isJoi, 'Object schema cannot be a joi schema');

	    var obj = this.clone();

	    if (!schema) {
	        obj._inner.children = null;
	        return obj;
	    }

	    var children = Object.keys(schema);

	    if (!children.length) {
	        obj._inner.children = [];
	        return obj;
	    }

	    var topo = new Topo();
	    var child;
	    if (obj._inner.children) {
	        for (var i = 0, il = obj._inner.children.length; i < il; ++i) {
	            child = obj._inner.children[i];

	            // Only add the key if we are not going to replace it later
	            if (children.indexOf(child.key) === -1) {
	                topo.add(child, { after: child._refs, group: child.key });
	            }
	        }
	    }

	    for (var c = 0, cl = children.length; c < cl; ++c) {
	        var key = children[c];
	        child = schema[key];
	        try {
	            var cast = Cast.schema(child);
	            topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
	        }
	        catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.path = key + '.' + castErr.path;
	            }
	            else {
	                castErr.path = key;
	            }
	            throw castErr;
	        }
	    }

	    obj._inner.children = topo.nodes;

	    return obj;
	};


	internals.Object.prototype.unknown = function (allow) {

	    var obj = this.clone();
	    obj._flags.allowUnknown = (allow !== false);
	    return obj;
	};


	internals.Object.prototype.length = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('length', limit, function (value, state, options) {

	        if (Object.keys(value).length === limit) {
	            return null;
	        }

	        return Errors.create('object.length', { limit: limit }, state, options);
	    });
	};


	internals.Object.prototype.min = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('min', limit, function (value, state, options) {

	        if (Object.keys(value).length >= limit) {
	            return null;
	        }

	        return Errors.create('object.min', { limit: limit }, state, options);
	    });
	};


	internals.Object.prototype.max = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('max', limit, function (value, state, options) {

	        if (Object.keys(value).length <= limit) {
	            return null;
	        }

	        return Errors.create('object.max', { limit: limit }, state, options);
	    });
	};


	internals.Object.prototype.pattern = function (pattern, schema) {

	    Hoek.assert(pattern instanceof RegExp, 'Invalid regular expression');
	    Hoek.assert(schema !== undefined, 'Invalid rule');

	    pattern = new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined);         // Future version should break this and forbid unsupported regex flags

	    try {
	        schema = Cast.schema(schema);
	    }
	    catch (castErr) {
	        if (castErr.hasOwnProperty('path')) {
	            castErr.message += '(' + castErr.path + ')';
	        }

	        throw castErr;
	    }


	    var obj = this.clone();
	    obj._inner.patterns.push({ regex: pattern, rule: schema });
	    return obj;
	};


	internals.Object.prototype.with = function (key, peers) {

	    return this._dependency('with', key, peers);
	};


	internals.Object.prototype.without = function (key, peers) {

	    return this._dependency('without', key, peers);
	};


	internals.Object.prototype.xor = function () {

	    var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this._dependency('xor', null, peers);
	};


	internals.Object.prototype.or = function () {

	    var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this._dependency('or', null, peers);
	};


	internals.Object.prototype.and = function () {

	    var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this._dependency('and', null, peers);
	};


	internals.Object.prototype.nand = function () {

	    var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this._dependency('nand', null, peers);
	};


	internals.Object.prototype.requiredKeys = function (children) {

	    children = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this.applyFunctionToChildren(children, 'required');
	};


	internals.Object.prototype.optionalKeys = function (children) {

	    children = Hoek.flatten(Array.prototype.slice.call(arguments));
	    return this.applyFunctionToChildren(children, 'optional');
	};


	internals.renameDefaults = {
	    alias: false,                   // Keep old value in place
	    multiple: false,                // Allow renaming multiple keys into the same target
	    override: false                 // Overrides an existing key
	};


	internals.Object.prototype.rename = function (from, to, options) {

	    Hoek.assert(typeof from === 'string', 'Rename missing the from argument');
	    Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
	    Hoek.assert(to !== from, 'Cannot rename key to same name:', from);

	    for (var i = 0, il = this._inner.renames.length; i < il; ++i) {
	        Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
	    }

	    var obj = this.clone();

	    obj._inner.renames.push({
	        from: from,
	        to: to,
	        options: Hoek.applyToDefaults(internals.renameDefaults, options || {})
	    });

	    return obj;
	};


	internals.groupChildren = function (children) {

	    children.sort();

	    var grouped = {};

	    for (var c = 0, lc = children.length; c < lc; c++) {
	        var child = children[c];
	        Hoek.assert(typeof child === 'string', 'children must be strings');
	        var group = child.split('.')[0];
	        var childGroup = grouped[group] = (grouped[group] || []);
	        childGroup.push(child.substring(group.length + 1));
	    }

	    return grouped;
	};


	internals.Object.prototype.applyFunctionToChildren = function (children, fn, args, root) {

	    children = [].concat(children);
	    Hoek.assert(children.length > 0, 'expected at least one children');

	    var groupedChildren = internals.groupChildren(children);
	    var obj;

	    if ('' in groupedChildren) {
	        obj = this[fn].apply(this, args);
	        delete groupedChildren[''];
	    }
	    else {
	        obj = this.clone();
	    }

	    if (obj._inner.children) {
	        root = root ? (root + '.') : '';

	        for (var i = 0, il = obj._inner.children.length; i < il; ++i) {
	            var child = obj._inner.children[i];
	            var group = groupedChildren[child.key];

	            if (group) {
	                obj._inner.children[i] = {
	                    key: child.key,
	                    _refs: child._refs,
	                    schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
	                };

	                delete groupedChildren[child.key];
	            }
	        }
	    }

	    var remaining = Object.keys(groupedChildren);
	    Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

	    return obj;
	};


	internals.Object.prototype._dependency = function (type, key, peers) {

	    peers = [].concat(peers);
	    for (var i = 0, li = peers.length; i < li; i++) {
	        Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
	    }

	    var obj = this.clone();
	    obj._inner.dependencies.push({ type: type, key: key, peers: peers });
	    return obj;
	};


	internals.with = function (value, peers, parent, state, options) {

	    if (value === undefined) {
	        return null;
	    }

	    for (var i = 0, il = peers.length; i < il; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) ||
	            parent[peer] === undefined) {

	            return Errors.create('object.with', { peer: peer }, state, options);
	        }
	    }

	    return null;
	};


	internals.without = function (value, peers, parent, state, options) {

	    if (value === undefined) {
	        return null;
	    }

	    for (var i = 0, il = peers.length; i < il; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) &&
	            parent[peer] !== undefined) {

	            return Errors.create('object.without', { peer: peer }, state, options);
	        }
	    }

	    return null;
	};


	internals.xor = function (value, peers, parent, state, options) {

	    var present = [];
	    for (var i = 0, il = peers.length; i < il; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) &&
	            parent[peer] !== undefined) {

	            present.push(peer);
	        }
	    }

	    if (present.length === 1) {
	        return null;
	    }

	    if (present.length === 0) {
	        return Errors.create('object.missing', { peers: peers }, state, options);
	    }

	    return Errors.create('object.xor', { peers: peers }, state, options);
	};


	internals.or = function (value, peers, parent, state, options) {

	    for (var i = 0, il = peers.length; i < il; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) &&
	            parent[peer] !== undefined) {
	            return null;
	        }
	    }

	    return Errors.create('object.missing', { peers: peers }, state, options);
	};


	internals.and = function (value, peers, parent, state, options) {

	    var missing = [];
	    var present = [];
	    var count = peers.length;
	    for (var i = 0; i < count; ++i) {
	        var peer = peers[i];
	        if (!Object.prototype.hasOwnProperty.call(parent, peer) ||
	            parent[peer] === undefined) {

	            missing.push(peer);
	        }
	        else {
	            present.push(peer);
	        }
	    }

	    var aon = (missing.length === count || present.length === count);
	    return !aon ? Errors.create('object.and', { present: present, missing: missing }, state, options) : null;
	};


	internals.nand = function (value, peers, parent, state, options) {

	    var present = [];
	    for (var i = 0, il = peers.length; i < il; ++i) {
	        var peer = peers[i];
	        if (Object.prototype.hasOwnProperty.call(parent, peer) &&
	            parent[peer] !== undefined) {

	            present.push(peer);
	        }
	    }

	    var values = Hoek.clone(peers);
	    var main = values.splice(0, 1)[0];
	    var allPresent = (present.length === peers.length);
	    return allPresent ? Errors.create('object.nand', { main: main, peers: values }, state, options) : null;
	};


	internals.Object.prototype.describe = function (shallow) {

	    var description = Any.prototype.describe.call(this);

	    if (this._inner.children &&
	        !shallow) {

	        description.children = {};
	        for (var i = 0, il = this._inner.children.length; i < il; ++i) {
	            var child = this._inner.children[i];
	            description.children[child.key] = child.schema.describe();
	        }
	    }

	    if (this._inner.dependencies.length) {
	        description.dependencies = Hoek.clone(this._inner.dependencies);
	    }

	    if (this._inner.patterns.length) {
	        description.patterns = [];

	        for (var p = 0, pl = this._inner.patterns.length; p < pl; ++p) {
	            var pattern = this._inner.patterns[p];
	            description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
	        }
	    }

	    return description;
	};


	internals.Object.prototype.assert = function (ref, schema, message) {

	    ref = Cast.ref(ref);
	    Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
	    message = message || 'pass the assertion test';

	    var cast;
	    try {
	        cast = Cast.schema(schema);
	    }
	    catch (castErr) {
	        if (castErr.hasOwnProperty('path')) {
	            castErr.message += '(' + castErr.path + ')';
	        }

	        throw castErr;
	    }

	    var key = ref.path[ref.path.length - 1];
	    var path = ref.path.join('.');

	    return this._test('assert', { cast: cast, ref: ref }, function (value, state, options) {

	        var result = cast._validate(ref(value), null, options, value);
	        if (!result.errors) {
	            return null;
	        }

	        var localState = Hoek.merge({}, state);
	        localState.key = key;
	        localState.path = path;
	        return Errors.create('object.assert', { ref: localState.path, message: message }, localState, options);
	    });
	};


	internals.Object.prototype.type = function (constructor, name) {

	    Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
	    name = name || constructor.name;

	    return this._test('type', name, function (value, state, options) {

	        if (value instanceof constructor) {
	            return null;
	        }

	        return Errors.create('object.type', { type: name }, state, options);
	    });
	};


	module.exports = new internals.Object();


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	exports = module.exports = internals.Topo = function () {

	    this._items = [];
	    this.nodes = [];
	};


	internals.Topo.prototype.add = function (nodes, options) {

	    var self = this;

	    options = options || {};

	    // Validate rules

	    var before = [].concat(options.before || []);
	    var after = [].concat(options.after || []);
	    var group = options.group || '?';
	    var sort = options.sort || 0;                   // Used for merging only

	    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
	    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
	    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
	    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');

	    ([].concat(nodes)).forEach(function (node, i) {

	        var item = {
	            seq: self._items.length,
	            sort: sort,
	            before: before,
	            after: after,
	            group: group,
	            node: node
	        };

	        self._items.push(item);
	    });

	    // Insert event

	    var error = this._sort();
	    Hoek.assert(!error, 'item', (group !== '?' ? 'added into group ' + group : ''), 'created a dependencies error');

	    return this.nodes;
	};


	internals.Topo.prototype.merge = function (others) {

	    others = [].concat(others);
	    for (var o = 0, ol = others.length; o < ol; ++o) {
	        var other = others[o];
	        if (other) {
	            for (var i = 0, il = other._items.length; i < il; ++i) {
	                var item = Hoek.shallow(other._items[i]);
	                this._items.push(item);
	            }
	        }
	    }

	    // Sort items

	    this._items.sort(internals.mergeSort);
	    for (i = 0, il = this._items.length; i < il; ++i) {
	        this._items[i].seq = i;
	    }

	    var error = this._sort();
	    Hoek.assert(!error, 'merge created a dependencies error');

	    return this.nodes;
	};


	internals.mergeSort = function (a, b) {

	    return a.sort === b.sort ? 0 : (a.sort < b.sort ? -1 : 1);
	};


	internals.Topo.prototype._sort = function () {

	    // Construct graph

	    var groups = {};
	    var graph = {};
	    var graphAfters = {};

	    for (var i = 0, il = this._items.length; i < il; ++i) {
	        var item = this._items[i];
	        var seq = item.seq;                         // Unique across all items
	        var group = item.group;

	        // Determine Groups

	        groups[group] = groups[group] || [];
	        groups[group].push(seq);

	        // Build intermediary graph using 'before'

	        graph[seq] = item.before;

	        // Build second intermediary graph with 'after'

	        var after = item.after;
	        for (var j = 0, jl = after.length; j < jl; ++j) {
	            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
	        }
	    }

	    // Expand intermediary graph

	    var graphNodes = Object.keys(graph);
	    for (i = 0, il = graphNodes.length; i < il; ++i) {
	        var node = graphNodes[i];
	        var expandedGroups = [];

	        var graphNodeItems = Object.keys(graph[node]);
	        for (j = 0, jl = graphNodeItems.length; j < jl; ++j) {
	            group = graph[node][graphNodeItems[j]];
	            groups[group] = groups[group] || [];

	            for (var k = 0, kl = groups[group].length; k < kl; ++k) {

	                expandedGroups.push(groups[group][k]);
	            }
	        }
	        graph[node] = expandedGroups;
	    }

	    // Merge intermediary graph using graphAfters into final graph

	    var afterNodes = Object.keys(graphAfters);
	    for (i = 0, il = afterNodes.length; i < il; ++i) {
	        group = afterNodes[i];

	        if (groups[group]) {
	            for (j = 0, jl = groups[group].length; j < jl; ++j) {
	                node = groups[group][j];
	                graph[node] = graph[node].concat(graphAfters[group]);
	            }
	        }
	    }

	    // Compile ancestors

	    var children;
	    var ancestors = {};
	    graphNodes = Object.keys(graph);
	    for (i = 0, il = graphNodes.length; i < il; ++i) {
	        node = graphNodes[i];
	        children = graph[node];

	        for (j = 0, jl = children.length; j < jl; ++j) {
	            ancestors[children[j]] = (ancestors[children[j]] || []).concat(node);
	        }
	    }

	    // Topo sort

	    var visited = {};
	    var sorted = [];

	    for (i = 0, il = this._items.length; i < il; ++i) {
	        var next = i;

	        if (ancestors[i]) {
	            next = null;
	            for (j = 0, jl = this._items.length; j < jl; ++j) {
	                if (visited[j] === true) {
	                    continue;
	                }

	                if (!ancestors[j]) {
	                    ancestors[j] = [];
	                }

	                var shouldSeeCount = ancestors[j].length;
	                var seenCount = 0;
	                for (var l = 0, ll = shouldSeeCount; l < ll; ++l) {
	                    if (sorted.indexOf(ancestors[j][l]) >= 0) {
	                        ++seenCount;
	                    }
	                }

	                if (seenCount === shouldSeeCount) {
	                    next = j;
	                    break;
	                }
	            }
	        }

	        if (next !== null) {
	            next = next.toString();         // Normalize to string TODO: replace with seq
	            visited[next] = true;
	            sorted.push(next);
	        }
	    }

	    if (sorted.length !== this._items.length) {
	        return new Error('Invalid dependencies');
	    }

	    var seqIndex = {};
	    for (i = 0, il = this._items.length; i < il; ++i) {

	        item = this._items[i];
	        seqIndex[item.seq] = item;
	    }

	    var sortedNodes = [];
	    this._items = sorted.map(function (value) {

	        var sortedItem = seqIndex[value];
	        sortedNodes.push(sortedItem.node);
	        return sortedItem;
	    });

	    this.nodes = sortedNodes;
	};


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Any = __webpack_require__(376);
	var Cast = __webpack_require__(383);
	var Errors = __webpack_require__(381);
	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	internals.fastSplice = function (arr, i) {

	    var il = arr.length;
	    var pos = i;

	    while (pos < il) {
	        arr[pos++] = arr[pos];
	    }

	    --arr.length;
	};


	internals.Array = function () {

	    Any.call(this);
	    this._type = 'array';
	    this._inner.items = [];
	    this._inner.ordereds = [];
	    this._inner.inclusions = [];
	    this._inner.exclusions = [];
	    this._inner.requireds = [];
	    this._flags.sparse = false;
	};

	Hoek.inherits(internals.Array, Any);


	internals.Array.prototype._base = function (value, state, options) {

	    var result = {
	        value: value
	    };

	    if (typeof value === 'string' &&
	        options.convert) {

	        try {
	            var converted = JSON.parse(value);
	            if (Array.isArray(converted)) {
	                result.value = converted;
	            }
	        }
	        catch (e) { }
	    }

	    var isArray = Array.isArray(result.value);
	    var wasArray = isArray;
	    if (options.convert && this._flags.single && !isArray) {
	        result.value = [result.value];
	        isArray = true;
	    }

	    if (!isArray) {
	        result.errors = Errors.create('array.base', null, state, options);
	        return result;
	    }

	    if (this._inner.inclusions.length ||
	        this._inner.exclusions.length ||
	        !this._flags.sparse) {

	        // Clone the array so that we don't modify the original
	        if (wasArray) {
	            result.value = result.value.slice(0);
	        }

	        result.errors = internals.checkItems.call(this, result.value, wasArray, state, options);

	        if (result.errors && wasArray && options.convert && this._flags.single) {

	            // Attempt a 2nd pass by putting the array inside one.
	            var previousErrors = result.errors;

	            result.value = [result.value];
	            result.errors = internals.checkItems.call(this, result.value, wasArray, state, options);

	            if (result.errors) {

	                // Restore previous errors and value since this didn't validate either.
	                result.errors = previousErrors;
	                result.value = result.value[0];
	            }
	        }
	    }

	    return result;
	};


	internals.checkItems = function (items, wasArray, state, options) {

	    var errors = [];
	    var errored;

	    var requireds = this._inner.requireds.slice();
	    var ordereds = this._inner.ordereds.slice();
	    var inclusions = this._inner.inclusions.concat(requireds);

	    for (var v = 0, vl = items.length; v < vl; ++v) {
	        errored = false;
	        var item = items[v];
	        var isValid = false;
	        var localState = { key: v, path: (state.path ? state.path + '.' : '') + v, parent: items, reference: state.reference };
	        var res;

	        // Sparse

	        if (!this._flags.sparse && item === undefined) {
	            errors.push(Errors.create('array.sparse', null, { key: state.key, path: localState.path }, options));

	            if (options.abortEarly) {
	                return errors;
	            }

	            continue;
	        }

	        // Exclusions

	        for (var i = 0, il = this._inner.exclusions.length; i < il; ++i) {
	            res = this._inner.exclusions[i]._validate(item, localState, {});                // Not passing options to use defaults

	            if (!res.errors) {
	                errors.push(Errors.create(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: v, value: item }, { key: state.key, path: localState.path }, options));
	                errored = true;

	                if (options.abortEarly) {
	                    return errors;
	                }

	                break;
	            }
	        }

	        if (errored) {
	            continue;
	        }

	        // Ordered
	        if (this._inner.ordereds.length) {
	            if (ordereds.length > 0) {
	                var ordered = ordereds.shift();
	                res = ordered._validate(item, localState, options);
	                if (!res.errors) {
	                    if (ordered._flags.strip) {
	                        internals.fastSplice(items, v);
	                        --v;
	                        --vl;
	                    }
	                    else {
	                        items[v] = res.value;
	                    }
	                }
	                else {
	                    errors.push(Errors.create('array.ordered', { pos: v, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                    if (options.abortEarly) {
	                        return errors;
	                    }
	                }
	                continue;
	            }
	            else if (!this._inner.items.length) {
	                errors.push(Errors.create('array.orderedLength', { pos: v, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
	                if (options.abortEarly) {
	                    return errors;
	                }
	                continue;
	            }
	        }

	        // Requireds

	        var requiredChecks = [];
	        for (i = 0, il = requireds.length; i < il; ++i) {
	            res = requiredChecks[i] = requireds[i]._validate(item, localState, options);
	            if (!res.errors) {
	                items[v] = res.value;
	                isValid = true;
	                internals.fastSplice(requireds, i);
	                --i;
	                --il;
	                break;
	            }
	        }

	        if (isValid) {
	            continue;
	        }

	        // Inclusions

	        for (i = 0, il = inclusions.length; i < il; ++i) {
	            var inclusion = inclusions[i];

	            // Avoid re-running requireds that already didn't match in the previous loop
	            var previousCheck = requireds.indexOf(inclusion);
	            if (previousCheck !== -1) {
	                res = requiredChecks[previousCheck];
	            }
	            else {
	                res = inclusion._validate(item, localState, options);

	                if (!res.errors) {
	                    if (inclusion._flags.strip) {
	                        internals.fastSplice(items, v);
	                        --v;
	                        --vl;
	                    }
	                    else {
	                        items[v] = res.value;
	                    }
	                    isValid = true;
	                    break;
	                }
	            }

	            // Return the actual error if only one inclusion defined
	            if (il === 1) {
	                if (options.stripUnknown) {
	                    internals.fastSplice(items, v);
	                    --v;
	                    --vl;
	                    isValid = true;
	                    break;
	                }

	                errors.push(Errors.create(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: v, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
	                errored = true;

	                if (options.abortEarly) {
	                    return errors;
	                }

	                break;
	            }
	        }

	        if (errored) {
	            continue;
	        }

	        if (this._inner.inclusions.length && !isValid) {
	            if (options.stripUnknown) {
	                internals.fastSplice(items, v);
	                --v;
	                --vl;
	                continue;
	            }

	            errors.push(Errors.create(wasArray ? 'array.includes' : 'array.includesSingle', { pos: v, value: item }, { key: state.key, path: localState.path }, options));

	            if (options.abortEarly) {
	                return errors;
	            }
	        }
	    }

	    if (requireds.length) {
	        internals.fillMissedErrors(errors, requireds, state, options);
	    }

	    if (ordereds.length) {
	        internals.fillOrderedErrors(errors, ordereds, state, options);
	    }

	    return errors.length ? errors : null;
	};

	internals.fillMissedErrors = function (errors, requireds, state, options) {

	    var knownMisses = [];
	    var unknownMisses = 0;
	    for (var i = 0, il = requireds.length; i < il; ++i) {
	        var label = Hoek.reach(requireds[i], '_settings.language.label');
	        if (label) {
	            knownMisses.push(label);
	        }
	        else {
	            ++unknownMisses;
	        }
	    }

	    if (knownMisses.length) {
	        if (unknownMisses) {
	            errors.push(Errors.create('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.patk }, options));
	        }
	        else {
	            errors.push(Errors.create('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
	        }
	    }
	    else {
	        errors.push(Errors.create('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
	    }
	};

	internals.fillOrderedErrors = function (errors, ordereds, state, options) {

	    var requiredOrdereds = [];

	    for (var i = 0, il = ordereds.length; i < il; ++i) {
	        var presence = Hoek.reach(ordereds[i], '_flags.presence');
	        if (presence === 'required') {
	            requiredOrdereds.push(ordereds[i]);
	        }
	    }

	    if (requiredOrdereds.length) {
	        internals.fillMissedErrors(errors, requiredOrdereds, state, options);
	    }
	};

	internals.Array.prototype.describe = function () {

	    var description = Any.prototype.describe.call(this);

	    if (this._inner.ordereds.length) {
	        description.orderedItems = [];

	        for (var o = 0, ol = this._inner.ordereds.length; o < ol; ++o) {
	            description.orderedItems.push(this._inner.ordereds[o].describe());
	        }
	    }

	    if (this._inner.items.length) {
	        description.items = [];

	        for (var i = 0, il = this._inner.items.length; i < il; ++i) {
	            description.items.push(this._inner.items[i].describe());
	        }
	    }

	    return description;
	};


	internals.Array.prototype.items = function () {

	    var obj = this.clone();

	    Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

	        try {
	            type = Cast.schema(type);
	        }
	        catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.path = index + '.' + castErr.path;
	            }
	            else {
	                castErr.path = index;
	            }
	            castErr.message += '(' + castErr.path + ')';
	            throw castErr;
	        }

	        obj._inner.items.push(type);

	        if (type._flags.presence === 'required') {
	            obj._inner.requireds.push(type);
	        }
	        else if (type._flags.presence === 'forbidden') {
	            obj._inner.exclusions.push(type.optional());
	        }
	        else {
	            obj._inner.inclusions.push(type);
	        }
	    });

	    return obj;
	};


	internals.Array.prototype.ordered = function () {

	    var obj = this.clone();

	    Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

	        try {
	            type = Cast.schema(type);
	        }
	        catch (castErr) {
	            if (castErr.hasOwnProperty('path')) {
	                castErr.path = index + '.' + castErr.path;
	            }
	            else {
	                castErr.path = index;
	            }
	            castErr.message += '(' + castErr.path + ')';
	            throw castErr;
	        }
	        obj._inner.ordereds.push(type);
	    });

	    return obj;
	};


	internals.Array.prototype.min = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('min', limit, function (value, state, options) {

	        if (value.length >= limit) {
	            return null;
	        }

	        return Errors.create('array.min', { limit: limit, value: value }, state, options);
	    });
	};


	internals.Array.prototype.max = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('max', limit, function (value, state, options) {

	        if (value.length <= limit) {
	            return null;
	        }

	        return Errors.create('array.max', { limit: limit, value: value }, state, options);
	    });
	};


	internals.Array.prototype.length = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('length', limit, function (value, state, options) {

	        if (value.length === limit) {
	            return null;
	        }

	        return Errors.create('array.length', { limit: limit, value: value }, state, options);
	    });
	};


	internals.Array.prototype.unique = function () {

	    return this._test('unique', undefined, function (value, state, options) {

	        var found = {
	            string: {},
	            number: {},
	            undefined: {},
	            boolean: {},
	            object: [],
	            function: []
	        };

	        for (var i = 0, il = value.length; i < il; ++i) {
	            var item = value[i];
	            var type = typeof item;
	            var records = found[type];

	            // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
	            // I still want to keep the test for future js versions with new types (eg. Symbol).
	            if (/* $lab:coverage:off$ */ records /* $lab:coverage:on$ */) {
	                if (Array.isArray(records)) {
	                    for (var r = 0, rl = records.length; r < rl; ++r) {
	                        if (Hoek.deepEqual(records[r], item)) {
	                            return Errors.create('array.unique', { pos: i, value: item }, state, options);
	                        }
	                    }

	                    records.push(item);
	                }
	                else {
	                    if (records[item]) {
	                        return Errors.create('array.unique', { pos: i, value: item }, state, options);
	                    }

	                    records[item] = true;
	                }
	            }
	        }
	    });
	};


	internals.Array.prototype.sparse = function (enabled) {

	    var obj = this.clone();
	    obj._flags.sparse = enabled === undefined ? true : !!enabled;
	    return obj;
	};


	internals.Array.prototype.single = function (enabled) {

	    var obj = this.clone();
	    obj._flags.single = enabled === undefined ? true : !!enabled;
	    return obj;
	};


	module.exports = new internals.Array();


/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Load modules

	var Any = __webpack_require__(376);
	var Errors = __webpack_require__(381);
	var Hoek = __webpack_require__(377);


	// Declare internals

	var internals = {};


	internals.Binary = function () {

	    Any.call(this);
	    this._type = 'binary';
	};

	Hoek.inherits(internals.Binary, Any);


	internals.Binary.prototype._base = function (value, state, options) {

	    var result = {
	        value: value
	    };

	    if (typeof value === 'string' &&
	        options.convert) {

	        try {
	            var converted = new Buffer(value, this._flags.encoding);
	            result.value = converted;
	        }
	        catch (e) { }
	    }

	    result.errors = Buffer.isBuffer(result.value) ? null : Errors.create('binary.base', null, state, options);
	    return result;
	};


	internals.Binary.prototype.encoding = function (encoding) {

	    Hoek.assert(Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

	    var obj = this.clone();
	    obj._flags.encoding = encoding;
	    return obj;
	};


	internals.Binary.prototype.min = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('min', limit, function (value, state, options) {

	        if (value.length >= limit) {
	            return null;
	        }

	        return Errors.create('binary.min', { limit: limit, value: value }, state, options);
	    });
	};


	internals.Binary.prototype.max = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('max', limit, function (value, state, options) {

	        if (value.length <= limit) {
	            return null;
	        }

	        return Errors.create('binary.max', { limit: limit, value: value }, state, options);
	    });
	};


	internals.Binary.prototype.length = function (limit) {

	    Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

	    return this._test('length', limit, function (value, state, options) {

	        if (value.length === limit) {
	            return null;
	        }

	        return Errors.create('binary.length', { limit: limit, value: value }, state, options);
	    });
	};


	module.exports = new internals.Binary();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(320).Buffer))

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var ms = __webpack_require__(372);

	module.exports = function (time, iat) {
	  var timestamp = iat || Math.floor(Date.now() / 1000);

	  if (typeof time === 'string') {
	    var milliseconds = ms(time);
	    if (typeof milliseconds === 'undefined') {
	      return;
	    }
	    return Math.floor(timestamp + milliseconds / 1000);
	  } else if (typeof time === 'number') {
	    return timestamp + time;
	  } else {
	    return;
	  }

	};

/***/ },
/* 401 */
/***/ function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Creates a function that invokes `func`, with the `this` binding and arguments
	 * of the created function, while it's called less than `n` times. Subsequent
	 * calls to the created function return the result of the last `func` invocation.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Function
	 * @param {number} n The number of calls at which `func` is no longer invoked.
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * jQuery(element).on('click', _.before(5, addContactToList));
	 * // => Allows adding up to 4 contacts to the list.
	 */
	function before(n, func) {
	  var result;
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  n = toInteger(n);
	  return function() {
	    if (--n > 0) {
	      result = func.apply(this, arguments);
	    }
	    if (n <= 1) {
	      func = undefined;
	    }
	    return result;
	  };
	}

	/**
	 * Creates a function that is restricted to invoking `func` once. Repeat calls
	 * to the function return the value of the first invocation. The `func` is
	 * invoked with the `this` binding and arguments of the created function.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new restricted function.
	 * @example
	 *
	 * var initialize = _.once(createApplication);
	 * initialize();
	 * initialize();
	 * // => `createApplication` is invoked once
	 */
	function once(func) {
	  return before(2, func);
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = once;


/***/ }
/******/ ])));