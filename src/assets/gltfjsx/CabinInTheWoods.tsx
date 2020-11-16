/* eslint-disable react/jsx-props-no-spreading */
/*
auto-generated by: https://github.com/pmndrs/gltfjsx
author: MChahin (https://sketchfab.com/beastochahin)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cabin-in-the-woods-8394771dd9fe44a58a64bf09581ea248
title: Cabin in the woods
*/
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';

import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type GLTFResult = GLTF & {
  nodes: {
    Cabin_0: THREE.Mesh;
    Cabin_1: THREE.Mesh;
    Cabin_2: THREE.Mesh;
    Cabin_3: THREE.Mesh;
    cabin_2nd_floor_0: THREE.Mesh;
    cabin_2nd_floor_1: THREE.Mesh;
    cabin_2nd_floor_2: THREE.Mesh;
    cabin_2nd_floor_3: THREE.Mesh;
    water_tank__0: THREE.Mesh;
    water_tank__1: THREE.Mesh;
    trees005_0: THREE.Mesh;
    trees005_1: THREE.Mesh;
    trees005_2: THREE.Mesh;
    trees005_3: THREE.Mesh;
    trees005_4: THREE.Mesh;
    trees004_0: THREE.Mesh;
    trees004_1: THREE.Mesh;
    trees004_2: THREE.Mesh;
    stones_0: THREE.Mesh;
    trees003_0: THREE.Mesh;
    trees003_1: THREE.Mesh;
    trees003_2: THREE.Mesh;
    trees003_3: THREE.Mesh;
    trees002_0: THREE.Mesh;
    trees002_1: THREE.Mesh;
    trees001_0: THREE.Mesh;
    trees001_1: THREE.Mesh;
    trees001_2: THREE.Mesh;
    trees001_3: THREE.Mesh;
    trees001_4: THREE.Mesh;
    stone004_0: THREE.Mesh;
    stone003_0: THREE.Mesh;
    trees_0: THREE.Mesh;
    trees_1: THREE.Mesh;
    trees_2: THREE.Mesh;
    stone002_0: THREE.Mesh;
    stone001_0: THREE.Mesh;
    stone_0: THREE.Mesh;
    water_0: THREE.Mesh;
    cloud_0: THREE.Mesh;
    Cloud_big_0: THREE.Mesh;
    cloud001_0: THREE.Mesh;
    cloud002_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.010']: THREE.MeshStandardMaterial;
    Root: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements['group']): JSX.Element {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('gltf/cabin_in_the_woods/scene.gltf') as GLTFResult;
  return (
    <group ref={group} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[4.08, 1.01, 5.9]} rotation={[-0.27, 0.6, 1.93]} scale={[1, 1, 1]} />
        <group scale={[2.78, 2.78, 0.21]}>
          <mesh
            castShadow
            receiveShadow
            material={materials.Material}
            geometry={nodes.Cabin_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.004']}
            geometry={nodes.Cabin_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.005']}
            geometry={nodes.Cabin_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.009']}
            geometry={nodes.Cabin_3.geometry}
          />
        </group>
        <group position={[0.3, 0.01, 2.35]} rotation={[0, 0, -Math.PI]} scale={[0.12, 0.18, 0.12]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.005']}
            geometry={nodes.cabin_2nd_floor_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.009']}
            geometry={nodes.cabin_2nd_floor_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.008']}
            geometry={nodes.cabin_2nd_floor_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.004']}
            geometry={nodes.cabin_2nd_floor_3.geometry}
          />
        </group>
        <group position={[-1.43, 1.76, 3.02]} scale={[0.5, 0.5, 0.5]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.001']}
            geometry={nodes.water_tank__0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.water_tank__1.geometry}
          />
        </group>
        <group position={[-2.17, -2.5, 0.9]} rotation={[0.05, 0, 0]} scale={[0.18, 0.18, 0.22]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees005_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees005_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.011']}
            geometry={nodes.trees005_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.013']}
            geometry={nodes.trees005_3.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.012']}
            geometry={nodes.trees005_4.geometry}
          />
        </group>
        <group
          position={[-2.63, 2.08, 0.87]}
          rotation={[-0.16, -0.05, 0.04]}
          scale={[0.18, 0.18, 0.22]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.012']}
            geometry={nodes.trees004_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees004_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees004_2.geometry}
          />
        </group>
        <group position={[4.01, 0.56, 5.53]} rotation={[-0.3, 0.68, 1.87]} scale={[1, 1, 1]} />
        <group position={[4.33, 1.04, 5.67]} rotation={[-0.21, 0.65, 1.8]} scale={[1, 1, 1]} />
        <group position={[0.77, -0.12, 0.19]} rotation={[0, 0, -0.8]} scale={[0.12, 0.07, 0.03]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.006']}
            geometry={nodes.stones_0.geometry}
          />
        </group>
        <group
          position={[-2.51, 0.63, 0.68]}
          rotation={[-0.18, 0.05, -0.54]}
          scale={[0.14, 0.14, 0.17]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.013']}
            geometry={nodes.trees003_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees003_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees003_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.012']}
            geometry={nodes.trees003_3.geometry}
          />
        </group>
        <group
          position={[-2.08, 0.63, 0.48]}
          rotation={[-0.01, 0.02, -0.23]}
          scale={[0.09, 0.09, 0.11]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees002_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees002_1.geometry}
          />
        </group>
        <group
          position={[2.39, 1.13, 0.68]}
          rotation={[-0.19, -0.03, -0.11]}
          scale={[0.14, 0.14, 0.17]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.012']}
            geometry={nodes.trees001_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees001_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.013']}
            geometry={nodes.trees001_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees001_3.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.011']}
            geometry={nodes.trees001_4.geometry}
          />
        </group>
        <group position={[-1.66, -2.42, 0.45]} scale={[0.22, 0.22, 0.22]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.007']}
            geometry={nodes.stone004_0.geometry}
          />
        </group>
        <group position={[-1.41, -1.87, 0.33]} rotation={[0, 0, -0.49]} scale={[0.16, 0.16, 0.12]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.007']}
            geometry={nodes.stone003_0.geometry}
          />
        </group>
        <group
          position={[2.69, -2.09, 0.77]}
          rotation={[0.02, -0.06, -0.03]}
          scale={[0.13, 0.13, 0.16]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.002']}
            geometry={nodes.trees_0.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.003']}
            geometry={nodes.trees_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.011']}
            geometry={nodes.trees_2.geometry}
          />
        </group>
        <group
          position={[1.52, -1.87, 0.33]}
          rotation={[-0.02, 0, -0.5]}
          scale={[0.16, 0.16, 0.12]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.007']}
            geometry={nodes.stone002_0.geometry}
          />
        </group>
        <group position={[1.97, -1.87, 0.31]} rotation={[0, 0, -1.65]} scale={[0.11, 0.09, 0.08]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.007']}
            geometry={nodes.stone001_0.geometry}
          />
        </group>
        <group position={[1.71, 1.25, 0.45]} rotation={[0, 0.01, 0]} scale={[0.17, 0.17, 0.17]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.007']}
            geometry={nodes.stone_0.geometry}
          />
        </group>
        <group position={[-0.29, -1.81, -0.14]} scale={[1.43, 0.87, 0.25]}>
          <mesh
            castShadow
            receiveShadow
            material={materials['Material.010']}
            geometry={nodes.water_0.geometry}
          />
        </group>
        <group position={[0.3, -1.78, 7.31]} scale={[0.14, 0.14, 0.14]}>
          <mesh
            castShadow
            receiveShadow
            material={materials.Root}
            geometry={nodes.cloud_0.geometry}
          />
        </group>
        <group
          position={[-0.08, -3.7, 6.9]}
          rotation={[0, -0.24, Math.PI]}
          scale={[0.15, 0.15, 0.15]}
        >
          <mesh
            castShadow
            receiveShadow
            material={materials.Root}
            geometry={nodes.Cloud_big_0.geometry}
          />
        </group>
        <group position={[3.09, 0.79, 5.66]} scale={[0.14, 0.14, 0.14]}>
          <mesh
            castShadow
            receiveShadow
            material={materials.Root}
            geometry={nodes.cloud001_0.geometry}
          />
        </group>
        <group position={[1.99, 0.05, 6.9]} scale={[0.13, 0.13, 0.13]}>
          <mesh
            castShadow
            receiveShadow
            material={materials.Root}
            geometry={nodes.cloud002_0.geometry}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('gltf/cabin_in_the_woods/scene.gltf');