// alfrid.js

import EffectComposer from './effectComposer/EffectComposer';
import Pass from './effectComposer/Pass';

//	PASSES
import PassFXAA from './effectComposer/passes/PassFXAA';
import PassGreyscale from './effectComposer/passes/PassGreyscale';


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
	PassFXAA,
	PassGreyscale
};