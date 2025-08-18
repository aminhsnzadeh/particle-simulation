import type {particleModelType} from "../../types/particle.ts";
import {useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import * as THREE from "three";


export default function Particles({ particleSize, spaceSize, count, texturePath, disableRotate, color }: particleModelType) {

    //loading texture from texture folder in public
    const texture = useTexture(texturePath || "./texture/snowflake.png")

    const particleRef = useRef<THREE.Points>(null);

    const particleCount = count
    const pointsArray = new Float32Array(particleCount * 3)

    for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        pointsArray[i3] = (Math.random() - 0.5) * spaceSize
        pointsArray[i3 + 1] = (Math.random() - 0.5) * spaceSize
        pointsArray[i3 + 2] = (Math.random() - 0.5) * spaceSize
    }
    useFrame((state, delta) => {
        if(!disableRotate) {
            console.log(state)
            if(particleRef.current) {
                particleRef.current.rotation.x += delta - 0.02;
                particleRef.current.rotation.y += delta - 0.02;
            }

        }
    })

    return (
        <points ref={particleRef} >
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    args={[pointsArray, 3]}
                    array={pointsArray}
                />
            </bufferGeometry>
            <pointsMaterial
                alphaMap={texture}
                size={particleSize}
                color={color || "white"}
                transparent={true}
                depthTest={false}
            />
        </points>
    )
}