import { randomFloat } from './random';
import { Mocker } from '../mocker';

/**
 * random one from an array.
 * @param arr
 * @returns {Mocker}
 */
export function oneOf(arr: any[]) {
  if (!(arr instanceof Array) || arr.length === 0)
    throw new Error('The parameter of mocker oneOf should be an array which is not empty.');

  return new Mocker(function() {
    return arr[randomFloat(0, arr.length - 1)];
  });
}