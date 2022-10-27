#version 150

uniform sampler2DRect tex0;
uniform float threshold1;
uniform float threshold2;
uniform float u_time;
uniform vec3 chromaKeyColor1;
uniform vec3 chromaKeyColor2;

in vec2 texCoordVarying;
out vec4 outputColor;

float PHI = 1.61803398874989484820459;  // Φ = Golden Ratio

float gold_noise(float seed){
    return fract(tan(distance(texCoordVarying*PHI, texCoordVarying)*seed*u_time)*texCoordVarying.x);
}

void main()
{
    vec4 texel0 = texture(tex0, texCoordVarying);
    float diff1 = length(chromaKeyColor1 - texel0.rgb);
    float diff2 = length(chromaKeyColor2 - texel0.rgb);

    if(diff1 < threshold1){
        discard;
        // outputColor = vec4(gold_noise(0.0) / 1.5, gold_noise(1.0) / 1.5, gold_noise(2.0) / 1.5, 1.0);
    } else if (diff2 < threshold2){
        discard;
    } else {
        outputColor = texel0;
        // outputColor.r -= gold_noise(3) / 2;
        // outputColor.g -= gold_noise(4) / 2;
        // outputColor.b -= gold_noise(5) / 2;
    }
}
