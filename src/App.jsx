import React from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import GeoText3d from './GeoText3d'
import Header from './Header'
import QuizComponent from './quiz'
import './App.css';
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <div className="w-full h-screen px-4">
      <QuizComponent />
      {/*<Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <GeoText3d />
        <OrbitControls />
      </Canvas>*/}
    </div>
  )
}

export default App