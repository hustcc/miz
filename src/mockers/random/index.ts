const CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_$';

/**
 * 四舍五入一个数字，可以指定小数位
 * @param number
 * @param fixed
 * @returns {number}
 */
function round(number: number, fixed: number): number {
  const t = Math.pow(10, fixed);
  return Math.round(number * t) / t;
}

/**
 * random a number.
 * @param min
 * @param max
 * @param fixed
 * @returns {*}
 */
export function randomFloat(min: number, max: number, fixed: number = 0): number {
  if (min > max) {
    // swap them with xor
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }

  return round(Math.random() * (max - min) + min, fixed);
}

/**
 * random boolean.
 * @returns {boolean}
 */
export function randomBool(): boolean {
  return !!randomFloat(0, 1);
}

/**
 * random a char.
 * @returns {*}
 */
export function randomChar(): string {
  return CHARS[randomFloat(0, CHARS.length - 1)];
}

/**
 * random a string.
 * @param len
 * @returns {string}
 */
export function randomString(len: number): string {
  if (len < 0) len = 0;
  return new Array(len).fill(0).map(() => randomChar()).join('');
}
