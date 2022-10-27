#version 150
precision highp float;

uniform float u_time;
out vec4 outputColor;

void main() {
    vec2 res = vec2(1024, 768);

    vec2 coord = 5 * gl_FragCoord.xy / res;

    for (float n = 1.0; n < 4.0; ++n) {
        coord += vec2(sin(u_time) / 2,// * 10,
                      sin(coord.x + coord.y) / 2);
    }

    vec3 color = vec3(0, sin(5 * u_time * sin(coord.x * coord.y)),
                      sin(5 * u_time * sin(coord.x) * sin(coord.y))); // * coord.y));// + (sin(100) + 1));// * u_time)); // + sin(coord.y * u_time));

    outputColor = vec4(color, 1.0);
}
