"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useTheme } from "../ThemeProvider"

export function ShaderAnimation({ isPlaying = false }: { isPlaying?: boolean }) {
    const { theme } = useTheme()
    const containerRef = useRef<HTMLDivElement>(null)
    const isPlayingRef = useRef(isPlaying)
    const hasRenderedInitial = useRef(false)

    // Keep the ref updated without re-triggering the useEffect
    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    // We use a ref to store uniforms so we can update it reactively
    const uniformsRef = useRef({
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() },
        isLightMode: { type: "f", value: theme === "light" ? 1.0 : 0.0 }
    })

    // Whenever theme changes, update the uniform variable
    useEffect(() => {
        uniformsRef.current.isLightMode.value = theme === "light" ? 1.0 : 0.0;
        // Force a re-render if it's paused so the theme switch shows immediately
        if (!isPlayingRef.current && sceneRef.current) {
            sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
        }
    }, [theme]);

    const sceneRef = useRef<{
        camera: THREE.Camera
        scene: THREE.Scene
        renderer: THREE.WebGLRenderer
        animationId: number
    } | null>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current

        // Vertex shader
        const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

        // Fragment shader explicitly mapped to themes
        const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float isLightMode;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }
        
        vec3 finalColor = color;

        // If Light Mode: background becomes white, glow becomes dark-cyan lines.
        if (isLightMode > 0.5) {
           finalColor = vec3(1.0) - color * 1.5;
        }

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `

        // Initialize Three.js scene
        const camera = new THREE.Camera()
        camera.position.z = 1

        const scene = new THREE.Scene()
        const geometry = new THREE.PlaneGeometry(2, 2)

        const material = new THREE.ShaderMaterial({
            uniforms: uniformsRef.current,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        })

        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)

        container.appendChild(renderer.domElement)

        // Handle window resize
        const onWindowResize = () => {
            const width = container.clientWidth
            const height = container.clientHeight
            renderer.setSize(width, height)
            uniformsRef.current.resolution.value.x = renderer.domElement.width
            uniformsRef.current.resolution.value.y = renderer.domElement.height
            // Force render on resize if paused so it doesn't stretch
            if (!isPlayingRef.current) {
                renderer.render(scene, camera)
            }
        }

        // Initial resize
        onWindowResize()
        window.addEventListener("resize", onWindowResize, false)

        // Store scene references for cleanup
        sceneRef.current = {
            camera,
            scene,
            renderer,
            animationId: 0,
        }

        // Animation loop
        const animate = () => {
            const animationId = requestAnimationFrame(animate)

            // Play if explicitly playing
            if (isPlayingRef.current) {
                // Slower, elegant animation speed
                uniformsRef.current.time.value += 0.008;
                renderer.render(scene, camera);
                hasRenderedInitial.current = true;
            } else if (!hasRenderedInitial.current) {
                // Render at least once so it's not strictly blank on load
                renderer.render(scene, camera);
                hasRenderedInitial.current = true;
            }

            if (sceneRef.current) {
                sceneRef.current.animationId = animationId
            }
        }

        // Start animation
        animate()

        // Cleanup function
        return () => {
            window.removeEventListener("resize", onWindowResize)

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId)

                if (container && sceneRef.current.renderer.domElement) {
                    container.removeChild(sceneRef.current.renderer.domElement)
                }

                sceneRef.current.renderer.dispose()
                geometry.dispose()
                material.dispose()
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 w-full h-full -z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'}`}
            style={{ overflow: "hidden" }}
        />
    )
}
