import {useControls} from "leva";

export default function useMainSceneDebugger() {

    const controls = useControls("Main Scene Controls", {
        background: {
            // value: "#76828d" //alternative cold background
            value: "#000000"
        }
    })

    return controls
}