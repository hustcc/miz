import { Mocker } from '../mocker';

/**
 * 常量数值
 * @param v
 * @returns {Mocker}
 */
export function constant(v: any) {
  return new Mocker(() => v);
}
