import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Particles from "../objects/particles.tsx";

export default function MainScene() {

    return (
        <Canvas style={{width:'100%', height:'100vh'}} >
            <Particles/>
            <OrbitControls />
        </Canvas>
    )
}