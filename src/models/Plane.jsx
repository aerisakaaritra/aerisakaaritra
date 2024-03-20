import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

import planeSite from '../assets/3d/plane.glb'

const Plane = ({isRotating, ...props}) => {

  const planeRef = useRef()
  const { scene, animations } = useGLTF(planeSite)  
  const { actions } = useAnimations(animations, planeRef)

  useEffect(() => {
    if(isRotating){
      actions['Take 001'].play()

    }else{
      actions['Take 001'].stop()
    }
  }, [isRotating, actions])
  return (
    <mesh {...props} ref = { planeRef }>
      <primitive object={scene}/>  
    </mesh>
  )
}

export default Plane