import {useControls} from "leva";

export default function useParticleDebugger() {

    const controls = useControls("Particle Controls", {
        count: {
            value: 5000,
            min: 1000,
            max: 50000,
        },
        particleSize: {
            value: 0.25,
            min: 0.1,
            max: 0.6
        },
        spaceSize: {
            value: 50,
            min: 50,
            max: 200,
        },
        speed: {
            value: 0.1,
            min: 0.01,
            max: 1,
            step: 0.01,
        },
    })

    return controls
}