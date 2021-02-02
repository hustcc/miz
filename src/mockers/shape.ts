import { Mocker } from '../mocker';

/**
 * object mocker.
 * @param mockerObject
 * @returns {Mocker}
 */
export function shape(mockerObject: Record<string, Mocker>) {
  if (typeof mockerObject !== 'object')
    throw new Error('The parameter of mocker shape should be object.');

  return new Mocker(function () {
    const r = {};
    for (const key in mockerObject) {
      r[key] = mockerObject[key].mock();
    }
    return r;
  });
}