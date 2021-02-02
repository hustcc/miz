/**
 * Created by hustcc
 */

import VT from 'variable-type';
import { M, randomBool, randomFloat, randomString } from '../src';

const RANDOM_CNT = 100; // random test count.

describe('miz', function() {
  it(' - usage bool', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.bool.check(M.bool().mock())).toBe(true);
    }
  });

  it(' - usage number', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.and([
        VT.number,
        VT.apply(function (e) { return e >= 100 && e <= 999; })
      ]).check(M.number(100, 999).mock())).toBe(true);
      expect(VT.and([
        VT.number,
        VT.apply(function (e) { return e >= 100 && e <= 999; })
      ]).check(M.number(100, 999, 2).mock())).toBe(true);

      expect(M.number(100).mock()).toBe(100);

      expect(VT.apply(function (e) {
        return e >= 1 && e <= 100;
      }).check(M.number(1, 100).mock())).toBe(true);

      expect(VT.apply(function (e) {
        return e >= 1 && e <= 100;
      }).check(M.number(100, 1).mock())).toBe(true);
    }
  });

  it(' - usage string', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.and([
        VT.string,
        VT.apply(function (e) { return e.length === 10; })
      ]).check(M.string(10).mock())).toBe(true);

      expect(VT.and([
        VT.string,
        VT.apply(function (e) { return e.length === 8; })
      ]).check(M.string().mock())).toBe(true);
    }
  });

  it(' - usage arrayOf', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.arrayOf(
        VT.and([
          VT.number,
          VT.in([10, 11])
        ])
      ).check(M.arrayOf(M.number(10, 11), 6, 12).mock())).toBe(true);

      expect(VT.arrayOf(
        VT.and([
          VT.number,
          VT.in([10, 11])
        ])
      ).check(M.arrayOf(M.number(10, 11), 12, 6).mock())).toBe(true);
    }
    expect(M.arrayOf(M.constant('hustcc'), 1, 1).mock()).toEqual(['hustcc']);

    expect(M.arrayOf(M.constant('hustcc'), 2).mock()).toEqual(['hustcc', 'hustcc']);
    expect(VT.and([
      VT.arrayOf(VT.oneOf(['hustcc'])),
      VT.apply(function (e) { return e.length === 20; })
    ]).check(M.arrayOf(M.constant('hustcc')).mock())).toBe(true);
  });

  it(' - usage shape', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.shape({
        name: VT.string,
        id: VT.number,
        sex: VT.bool,
        city: VT.oneOf(['hz']),
        age: VT.oneOf([24])
      }).check(M.shape({
        name: M.string(10),
        id: M.number(10000, 1000000),
        sex: M.bool(),
        city: M.constant('hz'),
        age: M.constant(24),
      }).mock())).toBe(true);
    }
    
    expect(function () {
      // @ts-ignore
      return M.shape('');
    }).toThrow('The parameter of mocker shape should be object.');
  });

  it(' - usage constant', function () {
    expect(M.constant('hustcc').mock()).toBe('hustcc');
  });

  it(' - usage oneOf', function () {
    // @ts-ignore
    expect(function () { return M.oneOf('hustcc'); })
      .toThrow('The parameter of mocker oneOf should be an array which is not empty.');
    expect(function () { return M.oneOf([]); })
      .toThrow('The parameter of mocker oneOf should be an array which is not empty.');
    expect(VT.oneOf(['hustcc', 'imcxl']).check(
      M.oneOf(['hustcc', 'imcxl']).mock(),
    )).toBe(true);
  });

  it(' - usage apply', function () {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(M.apply(function () {
        return 'hustcc';
      }).mock()).toBe('hustcc');
    }
  });


  // below test is for js
  it(' - random bool', function() {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.bool.check(randomBool())).toBe(true);
    }
  });

  it(' - random string', function() {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.and([
        VT.string,
        VT.apply(function (e) { return e.length === 10; }),
      ]).check(randomString(10))).toBe(true);
      expect(VT.and([
        VT.string,
        VT.apply(function (e) { return e.length === 0; }),
      ]).check(randomString(-1))).toBe(true);
    }
  });

  it(' - random number', function() {
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.and([
        VT.number,
        VT.apply(function (e) { return ('' + e).length <= 4; }), // 小数位
        VT.apply(function (e) { return e >= 1 && e <= 9; }) // 包含 1 和 10
      ]).check(randomFloat(1, 9, 2))).toBe(true);
    }
    for (var i = 0; i < RANDOM_CNT; i += 1) {
      expect(VT.and([
        VT.number,
        VT.apply(function (e) { return e >= 1 && e <= 10; }) // 包含 1 和 10
      ]).check(randomFloat(1, 10))).toBe(true);
    }
  });
});