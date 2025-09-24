import {OrbitControls} from "@react-three/drei";

export default function Cube() {

    return (
        <>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="orange" />
            </mesh>

            <OrbitControls />
        </>
    )
}