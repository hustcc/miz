import { randomFloat } from './random';
import { Mocker } from '../mocker';

/**
 * arrayOf mocker.
 * @param mocker
 * @param min
 * @param max
 * @returns {Mocker}
 */
export function arrayOf(mocker: Mocker, min?: number, max?: number) {
  min = min || 20;
  max = max || min;

  return new Mocker(function () {
    return new Array(randomFloat(min, max)).fill(0).map(() => mocker.mock());
  });
}