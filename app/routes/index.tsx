import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Index() {
  const gltf = useLoader(
    GLTFLoader,
    'cute-monster-swim-ring-for-my-wbsite-test2.glb'
  )
  return (
    <div id='canvas-container'>
      <Canvas style={{ width: '800px', aspectRatio: '16/9', cursor: 'grab' }}>
        <Suspense fallback={null}>
          <primitive object={gltf.scene} scale={0.8} />
          <OrbitControls />
          <Environment preset='sunset' background />
        </Suspense>
      </Canvas>
    </div>
  )
}
