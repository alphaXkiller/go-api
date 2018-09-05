'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var R = require('ramda');
var axios = _interopDefault(require('axios'));

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
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var PathNotFoundErr =
/*#__PURE__*/
function (_Error) {
  _inherits(PathNotFoundErr, _Error);

  function PathNotFoundErr() {
    var _getPrototypeOf2;

    var _this;

    var pathName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, PathNotFoundErr);

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PathNotFoundErr)).call.apply(_getPrototypeOf2, [this].concat(params)));
    if (Error.captureStackTrace) Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this)), PathNotFoundErr);
    _this.name = 'PathNotFoundError';
    _this.message = pathName ? "Path not found from the given path name: ".concat(pathName) : "Path name is not provided";
    return _this;
  }

  return PathNotFoundErr;
}(_wrapNativeSuper(Error));

var ParamRequiredErr =
/*#__PURE__*/
function (_Error2) {
  _inherits(ParamRequiredErr, _Error2);

  function ParamRequiredErr(_ref) {
    var _getPrototypeOf3;

    var _this2;

    var requiredPathParam = _ref.requiredPathParam,
        givenPathParams = _ref.givenPathParams;

    _classCallCheck(this, ParamRequiredErr);

    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ParamRequiredErr)).call.apply(_getPrototypeOf3, [this].concat(params)));
    if (Error.captureStackTrace) Error.captureStackTrace(_assertThisInitialized(_assertThisInitialized(_this2)), ParamRequiredErr);
    _this2.name = 'ParamRequiredError';
    _this2.message = "\n      Param [".concat(requiredPathParam, "] is required. And you are passing ").concat(JSON.stringify(givenPathParams), "\n    ");
    return _this2;
  }

  return ParamRequiredErr;
}(_wrapNativeSuper(Error));

PathNotFoundErr.prototype = Error.prototype;
ParamRequiredErr.prototype = Error.prototype;

var PARAM_PATTERN = /:[_0-9a-zA-Z]*/g;

var GoAPI =
/*#__PURE__*/
function () {
  function GoAPI(options) {
    _classCallCheck(this, GoAPI);

    if (!options.pathMap) throw new Error('pathMap option is required');
    if (!options.baseURL) throw new Error('baseURL option is required');
    this.configFn = options.configFn || R.always({});
    this.pathMap = options.pathMap;
    this.request = axios.create({
      baseURL: options.baseURL
    });
  }
  /**
   * Get the raw path from path map with given object key
   *
   * @params {string} pathName - The object key in path map
   */


  _createClass(GoAPI, [{
    key: "_getPath",
    value: function _getPath(pathName) {
      var path = this.pathMap[pathName];
      if (!path) throw new PathNotFoundErr(pathName);
      return path;
    }
    /**
     * @params {string} pathName - The object key in path map
     * @params {Object} params - URL parameters map
     */

  }, {
    key: "_parsePath",
    value: function _parsePath(pathName, params) {
      var path = this._getPath(pathName);

      return GoAPI.transformParams(path, params);
    }
    /**
     * Transform /user/:id to /user/1 with the given params
     *
     * @params {string} path - The raw path.
     * @params {Object} params - URL parameters map.
     */

  }, {
    key: "get",

    /**
     * Equivalent to REST get
     *
     * @param {string} pathName - The object key in path map
     * @param {Object} opts - Only accept 'params' and 'queries'
     */
    value: function () {
      var _get$$1 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(pathName) {
        var opts,
            path,
            config,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                path = this._parsePath(pathName, opts.params);
                _context.next = 4;
                return this.configFn({
                  path: path
                });

              case 4:
                config = _context.sent;
                return _context.abrupt("return", this.request.get(path, R.merge({
                  params: opts.queries
                }, config)));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get(_x) {
        return _get$$1.apply(this, arguments);
      };
    }()
    /**
     * Equivalent to REST post
     *
     * @param {string} pathName - The object key in path map
     * @param {Object} opts - Only accept 'params' and 'body'
     */

  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(pathName) {
        var opts,
            path,
            config,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                opts = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                path = this._parsePath(pathName, opts.params);
                _context2.next = 4;
                return this.configFn({
                  path: path
                });

              case 4:
                config = _context2.sent;
                return _context2.abrupt("return", this.request.post(path, opts.body, config));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function post(_x2) {
        return _post.apply(this, arguments);
      };
    }()
    /**
     * Equivalent to REST put
     *
     * @param {string} pathName - The object key in path map
     * @param {Object} opts - Only accept 'params' and 'body'
     */

  }, {
    key: "put",
    value: function () {
      var _put = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(pathName) {
        var opts,
            path,
            config,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
                path = this._parsePath(pathName, opts.params);
                _context3.next = 4;
                return this.configFn({
                  path: path
                });

              case 4:
                config = _context3.sent;
                return _context3.abrupt("return", this.request.put(path, opts.body, config));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function put(_x3) {
        return _put.apply(this, arguments);
      };
    }()
    /**
     * Equivalent to REST delete
     *
     * @param {string} pathName - The object key in path map
     * @param {Object} opts - Only accept 'params' and 'body'
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(pathName) {
        var opts,
            path,
            config,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                opts = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                path = this._parsePath(pathName, opts.params);
                _context4.next = 4;
                return this.configFn({
                  path: path
                });

              case 4:
                config = _context4.sent;
                return _context4.abrupt("return", this.request.delete(path, R.merge({
                  params: opts.queries
                }, config)));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _delete(_x4) {
        return _delete2.apply(this, arguments);
      };
    }()
  }], [{
    key: "transformParams",
    value: function transformParams(path, params) {
      var throwErrIfMissParam = function throwErrIfMissParam(param) {
        if (!params[param]) throw new ParamRequiredErr({
          param: param,
          params: params
        });
        return param;
      };

      var replaceParam = function replaceParam(accPath, paramWithColon) {
        return R.compose(function (param) {
          return R.replace(paramWithColon, params[param], accPath);
        }, throwErrIfMissParam, // :id -> id
        R.slice(1, Infinity))(paramWithColon);
      };

      var transform = R.compose(R.ifElse(R.isEmpty, R.always(path), R.reduce(replaceParam, path)), R.match(PARAM_PATTERN));
      return transform(path);
    }
  }]);

  return GoAPI;
}();

module.exports = GoAPI;
