import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 20,
          color: 'f1f1f1',
          fontWeight: 800,
          marginTop:40
        }}
      >
        Loading...
      </p>
    </Html>
  )
}

export default Loader