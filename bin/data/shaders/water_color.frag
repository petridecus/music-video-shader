#version 150
precision highp float;

uniform float u_time;
out vec4 outputColor;

void main() {
    vec2 res = vec2(1024, 768);

    vec2 coord = 5 * gl_FragCoord.xy / res;

    for (float n = 1.0; n < 5.0; ++n) {
        coord += vec2(/*sin(u_time) */ sin(coord.y),
                      cos(10.0 * ((u_time / 50.0) + 10) * sin(coord.x)));
    }

    vec3 color = vec3(sin(coord.x  * (u_time / 50.0)), 0, 0);

    outputColor = vec4(color, 1.0);
}
