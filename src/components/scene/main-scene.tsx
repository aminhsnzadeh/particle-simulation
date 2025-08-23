import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Particles from "../objects/particles.tsx";

export default function MainScene() {

    return (
        <Canvas style={{width:'100%', height:'100vh'}} >
            <Particles
                count={3000}
                particleSize={0.2}
                spaceSize={50}
                speed={0.1}
                // texturePath="./texture/spark.webp"
            />
            {/* handling better on camera for example near and far values */}
            <PerspectiveCamera makeDefault position={[0, 0, 5]} near={0.1} far={2000} />
            <OrbitControls  />
        </Canvas>
    )
}