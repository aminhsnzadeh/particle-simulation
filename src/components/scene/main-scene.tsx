import {Canvas} from "@react-three/fiber";
import Cube from "../objects/test-cube.tsx";

export default function MainScene() {

    return (
        <Canvas style={{width:'100%', height:'100vh'}}>
            <Cube />
        </Canvas>
    )
}