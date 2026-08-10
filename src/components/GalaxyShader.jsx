import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import { PARAMS } from "../shaders/params";
import { vertexShader } from "../shaders/vertex";
import { fragmentShader } from "../shaders/fragment";
import { useGLTF } from "@react-three/drei";

export default function GalaxyShader({
  settings,
}) {
  const elapsedTime = useRef(0);

  const { scene } = useGLTF(
    "/Models/ShaderBall.glb"
  );

  const material = useMemo(() => {
    const uniforms = {
      time: {
        value: 0,
      },
    };

    for (const parameter of PARAMS) {
      const {
        key,
        type,
      } = parameter;

      if (key === "paused") continue;

      uniforms[key] = {
        value:
          type === "color"
            ? new THREE.Color(settings[key])
            : settings[key],
      };
    }

    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
  }, []);

  const shaderBall = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });

    return clone;
  }, [scene, material]);

  useEffect(() => {
    return () => {
      material.dispose();
    };
  }, [material]);

  useFrame((state, delta) => {
    if (!settings.paused) {
      elapsedTime.current += delta;
    }

    material.uniforms.time.value =
      elapsedTime.current;

    for (const parameter of PARAMS) {
      const {
        key,
        type,
      } = parameter;

      if (
        key === "paused" ||
        !material.uniforms[key]
      ) {
        continue;
      }

      if (type === "color") {
        material.uniforms[key].value.set(
          settings[key]
        );
      } else {
        material.uniforms[key].value =
          settings[key];
      }
    }
  });

  return (
    <primitive object={shaderBall} />
  );
}