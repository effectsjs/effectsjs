"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('effects-runtime/lib/prelude-polyfill');

require('@babel/polyfill');

var main = function main() {
  return runProgram(function* () {
    yield withHandler(_defineProperty({}, __defaultEffectHandler__, /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, resume) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return function (handler) {
                return new Promise( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res, rej) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            return _context.abrupt("return", stackResume(handler, 'world').then(res)["catch"](rej));

                          case 4:
                            _context.prev = 4;
                            _context.t0 = _context["catch"](0);
                            rej(_context.t0);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 4]]);
                  }));

                  return function (_x, _x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
              };

            case 2:
              result = _context2.sent;
              _context2.next = 5;
              return resume(result);

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })), /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = console;
              _context3.next = 3;
              return performEffect({});

            case 3:
              _context3.t1 = _context3.sent;
              _context3.next = 6;
              return _context3.t0.log.call(_context3.t0, "hello", _context3.t1);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, null, Promise);
    })());
  }());
};

main();