// alfrid.js

import EffectComposer from './effectComposer/EffectComposer';
import Pass from './effectComposer/Pass';
import PassMacro from './effectComposer/PassMacro';

//	PASSES
import PassFXAA from './effectComposer/passes/PassFXAA';
import PassGreyscale from './effectComposer/passes/PassGreyscale';
import PassHBlur from './effectComposer/passes/PassHBlur';
import PassVBlur from './effectComposer/passes/PassVBlur';
import PassBlur from './effectComposer/passes/PassBlur';


/*
class AlfridEffectComposer {
	constructor() {
		this.EffectComposer = EffectComposer;
		this.Pass = Pass;
	}
}

const effectComposer = new AlfridEffectComposer();

export default effectComposer;

*/

export default {
	EffectComposer,
	Pass,
	PassMacro,
	PassFXAA,
	PassGreyscale,
	PassVBlur,
	PassHBlur,
	PassBlur
};