"use client";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as random from "maath/random";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Points as PointProps } from "three";
import ErrorBoundary from "../ErrorBoundary";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Stars = (props: any) => {
	const ref = useRef<PointProps>(null);
	const { gl } = useThree();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(6000), { radius: 1.2 }),
	);

	useEffect(() => {
		// Set pixel ratio to a reasonable value
		gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		return () => {
			// Cleanup resources when component unmounts
			if (ref.current) {
				ref.current.geometry.dispose();
				if (ref.current.material) {
					ref.current.material.dispose();
				}
			}
		};
	}, [gl]);

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x -= delta / 10;
			ref.current.rotation.y -= delta / 15;
		}
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.003}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<ErrorBoundary>
				<Canvas
					camera={{ position: [0, 0, 1] }}
					dpr={[1, 2]}
					gl={{ 
						antialias: true,
						powerPreference: "high-performance",
						alpha: true
					}}
					performance={{ min: 0.5 }}
				>
					<Suspense fallback={null}>
						<Stars />
					</Suspense>
					<Preload all />
				</Canvas>
			</ErrorBoundary>
		</div>
	);
};

export default StarsCanvas;
