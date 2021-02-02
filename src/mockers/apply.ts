
import { Mocker } from '../mocker';

/**
 * apply the function for random.
 * @param func
 * @returns {Mocker}
 */
export function apply(func: Function) {
  return new Mocker(func);
}
