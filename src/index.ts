/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import { apply, arrayOf, bool, constant, number, oneOf, shape, string } from  './mockers';

export { randomBool, randomChar, randomFloat, randomString } from './mockers/random';
export { Mocker } from './mocker';
export const M = { apply, arrayOf, bool, constant, number, oneOf, shape, string };
