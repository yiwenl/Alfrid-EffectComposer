// EffectComposer.js

import alfrid, { GL, FrameBuffer } from 'alfrid';

class EffectComposer {

	constructor(mWidth, mHeight, mParmas = {}) {
		this._width = mWidth;
		this._height = mHeight;

		this._fboCurrent = new FrameBuffer(this._width, this._height, mParmas);
		this._fboTarget = new FrameBuffer(this._width, this._height, mParmas);
		this._mesh = alfrid.Geom.bigTriangle();
		this._passes = [];
	}


	addPass(pass) {
		this._passes.push(pass);
	}


	render(mSourceTexture) {

		for(let i = 0; i < this._passes.length; i++) {
			this._fboTarget.bind();
			GL.clear(0, 0, 0, 0);
			const source = i === 0 ? mSourceTexture : this._fboCurrent.getTexture();
			const pass = this._passes[i];
			pass.render(source);
			GL.draw(this._mesh);
			this._fboTarget.unbind();

			this._swap();
		}

	}

	_swap() {
		const tmp = this._fboCurrent;
		this._fboCurrent = this._fboTarget;
		this._fboTarget = tmp;

		this._current = this._fboCurrent;
		this._target = this._fboTarget;
	}


	getTexture() {
		return this._fboCurrent.getTexture();
	}
}

export default EffectComposer;