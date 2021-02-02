import { randomBool } from './random';
import { Mocker } from '../mocker';

/**
 * boolean mocker.
 * @returns {Mocker}
 */
export function bool() {
  return new Mocker(randomBool);
}