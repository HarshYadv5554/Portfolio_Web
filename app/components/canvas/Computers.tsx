"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ErrorBoundary from "../ErrorBoundary";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
	const computer = useGLTF("/desktop_pc/scene.gltf");
	const { gl } = useThree();

	useEffect(() => {
		// Set pixel ratio to a reasonable value
		gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

		return () => {
			// Cleanup GLTF resources when component unmounts
			if (computer) {
				computer.scene.traverse((child: any) => {
					if (child.isMesh) {
						child.geometry.dispose();
						if (child.material.dispose) {
							child.material.dispose();
						}
					}
				});
			}
		};
	}, [computer, gl]);

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.2, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 500px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<ErrorBoundary>
			<div className="w-full h-screen">
				<Canvas
					shadows
					dpr={[1, 2]}
					camera={{ position: [20, 3, 5], fov: 25 }}
					gl={{ 
						preserveDrawingBuffer: true,
						powerPreference: "high-performance",
						antialias: true,
					}}
					performance={{ min: 0.5 }}
				>
					<Suspense fallback={<CanvasLoader />}>
						<OrbitControls
							enableZoom={false}
							maxPolarAngle={Math.PI / 2}
							minPolarAngle={Math.PI / 2}
						/>
						<Computers isMobile={isMobile} />
					</Suspense>
					<Preload all />
				</Canvas>
			</div>
		</ErrorBoundary>
	);
};

export default ComputersCanvas;
