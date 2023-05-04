import { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


const GlassesModel = ({ modelPath }) => {
    const modelRef = useRef()

    useFrame(() => {
        if (modelRef.current) {
            // Adicione aqui a lógica de atualização da posição e rotação do modelo de acordo com o rosto do usuário
        }
    })

    const gltfLoader = new GLTFLoader()

    const onLoad = (gltf) => {
        const { scene } = gltf
        modelRef.current?.add(scene)
    }

    gltfLoader.load(modelPath, onLoad)

    return (
        <group ref={modelRef} />
    )
}

export default GlassesModel