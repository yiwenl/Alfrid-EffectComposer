// PassHBlur.js

import { GL } from 'alfrid';
import Pass from '../Pass';
const fsBlur5 = require('../shaders/blur5.frag');
const fsBlur9 = require('../shaders/blur9.frag');
const fsBlur13 = require('../shaders/blur13.frag');

class PassHBlur extends Pass {
	constructor(mQuality = 9) {
		let fs;
		switch(mQuality) {
		case 5:
		default:
			fs = fsBlur5;
			break;
		case 9 : 
			fs = fsBlur9;
			break;
		case 13 : 
			fs = fsBlur13;
			break;

		}
		super(fs);
		this.uniform('uDirection', 'vec2', [1, 0]);
		this.uniform('uResolution', 'vec2', [GL.width, GL.height]);
	}
}

export default PassHBlur;
