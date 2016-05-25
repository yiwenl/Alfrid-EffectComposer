// SceneApp.js
import alfrid, { GL } from 'alfrid';
import alfridEffectComposer, { EffectComposer, Pass } from '../alfridEffectComposer';

const fsGreyscale = require('../effectComposer/shaders/greyscale.frag');
const fsSeparate = require('../effectComposer/shaders/separate.frag');

class SceneApp extends alfrid.Scene {
	constructor() {
		super();
		GL.enableAlphaBlending();
		this.orbitalControl.rx.value = this.orbitalControl.ry.value = 0.3;
		this.time = Math.random() * 0xFF;
	}


	_initTextures() {

		this._fboRender = new alfrid.FrameBuffer(GL.width, GL.height);
	}
	

	_initViews() {
		this._bCopy      = new alfrid.BatchCopy();
		this._bAxis 	 = new alfrid.BatchAxis();
		this._bDotPlane  = new alfrid.BatchDotsPlane();
		this._bBall = new alfrid.BatchBall();

		this._composer = new EffectComposer(GL.width, GL.height);
		this.passGreyscale = new Pass(fsGreyscale);
		this.passSeparate = new Pass(fsSeparate);

		
		this._composer.addPass(this.passGreyscale);
		this._composer.addPass(this.passSeparate);
	}


	render() {
		this.time += 0.01;

		const s = Math.sin(this.time) * 0.5 + 0.5;
		const c = Math.cos(this.time * Math.PI) * 0.5 + 0.5;
		this.passGreyscale.uniform('saturation', 'float', s);
		this.passSeparate.uniform('range', 'float', c * 0.01);

		this.orbitalControl.ry.value += 0.001;
		GL.clear(0, 0, 0, 0);

		this._fboRender.bind();
		GL.clear(0, 0, 0, 0);
		this._bBall.draw();
		this._bBall.draw([1, 0, 0], [0.5, 0.5, 0.5], [1, 0.5, 0]);
		this._bBall.draw([-1, 0, 0], [0.5, 0.5, 0.5], [1, 0.5, 0]);
		this._bBall.draw([0, 1, 0], [0.5, 0.5, 0.5], [1, 0.5, 0]);
		this._bBall.draw([0, -1, 0], [0.5, 0.5, 0.5], [1, 0.5, 0]);
		this._bBall.draw([0, 0, 1], [0.5, 0.5, 0.5], [1, 0.5, 0]);
		this._bBall.draw([0, 0, -1], [0.5, 0.5, 0.5], [1, 0.5, 0]);

		this._fboRender.unbind();

		this._composer.render(this._fboRender.getTexture());
		this._bCopy.draw(this._composer.getTexture());
	}


	resize() {
		GL.setSize(window.innerWidth, window.innerHeight);
		this.camera.setAspectRatio(GL.aspectRatio);
	}
}


export default SceneApp;