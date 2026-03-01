"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "../ThemeProvider"

export function ShaderAnimation({ isPlaying = false }: { isPlaying?: boolean }) {
    const { theme } = useTheme()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const isPlayingRef = useRef(isPlaying)
    const hasRenderedInitial = useRef(false)

    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl", { antialias: true, alpha: true }) ||
            canvas.getContext("experimental-webgl", { antialias: true, alpha: true }) as WebGLRenderingContext;

        if (!gl) return;

        const vertexShaderSource = `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;
            uniform vec2 resolution;
            uniform float time;
            uniform float isLightMode;

            void main(void) {
                vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
                float t = time * 0.05;
                float lineWidth = 0.002;

                vec3 color = vec3(0.0);
                for(int j = 0; j < 3; j++){
                    for(int i = 0; i < 5; i++){
                        color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
                    }
                }
                
                vec3 finalColor = color;
                if (isLightMode > 0.5) {
                   finalColor = vec3(1.0) - color * 1.5;
                }

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const compileShader = (type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        };

        const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

        const program = gl.createProgram();
        if (!program || !vertexShader || !fragmentShader) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const vertices = new Float32Array([
            -1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0, -1.0, 1.0, 1.0
        ]);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const timeLocation = gl.getUniformLocation(program, "time");
        const resolutionLocation = gl.getUniformLocation(program, "resolution");
        const isLightModeLocation = gl.getUniformLocation(program, "isLightMode");

        let animationId: number;
        let time = 1.0;

        const onWindowResize = () => {
            if (!canvas.parentElement) return;
            const width = canvas.parentElement.clientWidth;
            const height = canvas.parentElement.clientHeight;

            // Adjust for High-DPI displays safely
            const pixelRatio = window.devicePixelRatio || 1;
            canvas.width = width * pixelRatio;
            canvas.height = height * pixelRatio;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

            if (!isPlayingRef.current) {
                renderFrame();
            }
        };

        const renderFrame = () => {
            gl.uniform1f(timeLocation, time);
            // Re-read theme on tick to prevent stale react state closure without re-compiling the pipeline
            const currentTheme = document.documentElement.classList.contains("dark") ? 0.0 : 1.0;
            gl.uniform1f(isLightModeLocation, currentTheme);

            gl.clearColor(0.0, 0.0, 0.0, 0.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        };

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (isPlayingRef.current) {
                time += 0.008;
                renderFrame();
                hasRenderedInitial.current = true;
            } else if (!hasRenderedInitial.current) {
                renderFrame();
                hasRenderedInitial.current = true;
            }
        };

        window.addEventListener("resize", onWindowResize);
        onWindowResize(); // Force initial dimension set
        animate();

        return () => {
            window.removeEventListener("resize", onWindowResize);
            cancelAnimationFrame(animationId);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteBuffer(buffer);
        };
    }, []); // Empty dependency array. Theme is read dynamically to avoid Pipeline re-compilation.

    return (
        <div className={`absolute inset-0 w-full h-full -z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`} style={{ overflow: "hidden" }}>
            <canvas ref={canvasRef} className="block" />
        </div>
    )
}
