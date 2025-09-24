# ✨ Particle Simulation

A customizable particle system built with [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber) and [drei](https://github.com/pmndrs/drei).  
Designed for quick integration into 3D scenes — supports textures, rotation, color, and [Leva](https://github.com/pmndrs/leva) for live debugging.


<p align="center">
  <img src="https://img.shields.io/badge/React-19.1-61dafb?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-black?logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React--Three--Fiber-v8-000000?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Leva-Controls-8b5cf6?logo=slack&logoColor=white" />
  <img src="https://img.shields.io/badge/Architecture-Clean-brightgreen" />
</p>



---

## 🚀 Live Demo

[See demo here !](https://particle-effect-simulation.vercel.app/)

---

## 🛠️ Installation

```bash
git clone https://github.com/aminhsnzadeh/particle-simulation.git
cd particle-simulation
pnpm install
# or: npm install / yarn
```
After installation just run :
```bash
pnpm dev
# or npm dev
```

You can change particle texture by replaceing texture here :

```
📁 public/
└── texture/
    └── snowflake.png 
```

Or pass textures props to component with your textures that exist in public/texture (for example see spark.webp)

---

## 📦 Tech Stack

- React
- React Three Fiber (R3F)
- Drei
- Threejs
- Leva panel (debugging)
- Vite
- Typescript

---

## 🔧 Props

You can control all of these props shown here at debugging panel :

| Prop            | Type      | Default                   | Description                 |
| --------------- | --------- | ------------------------- | --------------------------- |
| `particleSize`  | `number`  | `0.2`                     | Size of each particle       |
| `spaceSize`     | `number`  | `30`                      | Spatial spread of particles |
| `count`         | `number`  | `3000`                    | Number of particles         |
| `texturePath`   | `string`  | `./texture/snowflake.png` | Path to particle texture    |
| `disableRotate` | `boolean` | `false`                   | Disable auto-rotation       |
| `color`         | `string`  | `"white"`                 | Color tint for particles    |
| `speed`         | `number`  | `0.1`                     | Rotation speed              |


## 🔮 Future ideas

- Making a GPU driven simulation for better and more customizable textures
- Add environment assets (plains, trees, physics simulation on objects, ...)
- More animations
- More realistic rotation

## 🤝 Contribution

Contributions, ideas, and PRs are welcome!

Open an issue or fork the repo to get started.

---

## 🙋‍♂️ Author

<b> Amin - </b> Frontend developer (JS/React)

Contact via GitHub or LinkedIn.

Feel free to reach me and discuss with me about different subjects ;) 💙
