
export default function Particles() {

    const particleCount = 3000
    const pointsArray = new Float32Array(particleCount * 3)

    for(let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        pointsArray[i3] = (Math.random() - 0.5) * 50
        pointsArray[i3 + 1] = (Math.random() - 0.5) * 50
        pointsArray[i3 + 2] = (Math.random() - 0.5) * 50
    }

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    args={[pointsArray, 3]}
                    array={pointsArray}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="orange" />
        </points>
    )
}