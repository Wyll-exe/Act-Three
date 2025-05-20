import { Canvas } from '@react-three/fiber'
import { OrbitControls, Fisheye } from '@react-three/drei'
import { Experience } from './assets/components/Experience'
import './App.css'

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <Fisheye
        distortion={0.5}
        radius={0.5}
        strength={0.5}
        scale={1.5}
        opacity={0.5}
        color="white"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        size={1}
        depth={0}
        depthTest={true}
        depthWrite={true}
        transparent={true}
        alphaTest={0.5}
        toneMapped={true} >
      <ambientLight intensity={100} />
      <directionalLight position={[20, 20, 20]} intensity={40} />
      <OrbitControls />
      <Experience />
      </Fisheye>
    </Canvas>
  )
}

export default App