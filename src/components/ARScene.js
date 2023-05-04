import { useEffect, useRef } from 'react'
import { ARjs } from 'ar-js'
import { WebGLRenderer } from 'three'

const ARScene = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        if (canvasRef.current) {
            const renderer = new WebGLRenderer({ canvas: canvasRef.current, antialias: true })
            renderer.setSize(window.innerWidth, window.innerHeight)

            const arjs = new ARjs(renderer, {
                sourceType: 'webcam',
                trackingMethod: 'best',
                debugUIEnabled: false,
            })

            const animate = () => {
                requestAnimationFrame(animate)
                arjs.render()
            }

            animate()
        }
    }, [])

    return <canvas ref={canvasRef} />
}

export default ARScene