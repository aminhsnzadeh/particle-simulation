import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import Particles from "../objects/particles.tsx";
import useParticleDebugger from "../debugs/objects/particle.tsx";
import useMainSceneDebugger from "../debugs/scene/main.tsx";

export default function MainScene() {

    const { count, particleSize, spaceSize, speed, disableAnimation, color } = useParticleDebugger()
    const { background } = useMainSceneDebugger()

    return (
        <Canvas style={{width:'100%', height:'100vh', backgroundColor: background}} gl={{ antialias: false, powerPreference: "high-performance" }} >
            <Particles
                count={count}
                particleSize={particleSize}
                spaceSize={spaceSize}
                speed={speed}
                disableRotate={disableAnimation}
                color={color}
            />
            {/* handling better on camera for example near and far values */}
            <PerspectiveCamera makeDefault position={[0, 0, 5]} near={0.1} far={2000} />
            <OrbitControls  />
        </Canvas>
    )
}