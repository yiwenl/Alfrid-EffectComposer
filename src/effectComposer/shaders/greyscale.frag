// greyscale.frag

#define SHADER_NAME SIMPLE_TEXTURE

precision highp float;
varying vec2 vTextureCoord;
uniform sampler2D texture;
uniform float saturation;

void main(void) {
	vec3 color 		= texture2D(texture, vTextureCoord).rgb;
	float grey 		= (color.r + color.g + color.b) / 3.0;
	vec3 greyColor 	= vec3(grey);
	color 			= mix(greyColor, color, saturation);
    gl_FragColor 	= vec4(color, 1.0);

    // gl_FragColor 	= vec4(1.0, 0.0, 0.0, 1.0);
}