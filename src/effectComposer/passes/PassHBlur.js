// PassHBlur.js

import { GL } from 'alfrid';
import PassBlur from './PassBlur';
const fsBlur5 = require('../shaders/blur5.frag');
const fsBlur9 = require('../shaders/blur9.frag');
const fsBlur13 = require('../shaders/blur13.frag');

class PassHBlur extends PassBlur {
	constructor(mQuality = 9, mWidth, mHeight, mParams) {
		super(mQuality, [1, 0], mWidth, mHeight, mParams);
	}
}

export default PassHBlur;
