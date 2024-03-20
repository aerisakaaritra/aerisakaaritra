import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

import birdSite from '../assets/3d/bird.glb'
import { useFrame } from '@react-three/fiber'

const Bird = () => {
  const { scene, animations } = useGLTF(birdSite)
  const bridRef = useRef()
  const { actions } = useAnimations(animations, bridRef)

  useEffect(() => {
    actions['Take 001'].play()
  })

  useFrame(({ clock, camera }) => {
    bridRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2  //updating the y axis in sin wave 

    if(bridRef.current.position.x > camera.position.x + 10){
      bridRef.current.rotation.y = Math.PI
    }else if(bridRef.current.position.x < camera.position.x - 10){
      bridRef.current.rotation.y = 0
    }

    if(bridRef.current.rotation.y === 0){
      bridRef.current.position.x += 0.01
      bridRef.current.position.z -= 0.01

    }else{
      bridRef.current.position.x -= 0.01
      bridRef.current.position.z += 0.01
    }
  })
  return (
    <mesh ref={ bridRef } position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird