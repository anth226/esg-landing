<script lang="ts">
	import { onMount } from 'svelte';
	import type { Event } from 'three';
	import { tweened } from 'svelte/motion';
	import { sineInOut } from 'svelte/easing';

	import { onClickOnly } from '$lib/actions/onClickOnly';

	const planeSize = 0.002;
	const planeAltitude = 0.5;
	const globeSize = 12;
	const width = 600;
	const height = 600;

	let mousePos = { x: 0, y: 0 };
	let canvas: HTMLCanvasElement;
	let globeReady = false;

	let isDay = true;
	const dayAnimationTime = tweened(isDay ? 0 : 1, {
		duration: 500,
		easing: sineInOut,
	});
	$: $dayAnimationTime = isDay ? 0 : 1;

	let dayAnimationUpdate = (t: number) => {};
	$: dayAnimationUpdate($dayAnimationTime);

	let toggleDayTime = () => {
		isDay = !isDay;
	};

	onMount(() => {
		async function init() {
			if (!canvas) return;

			const THREE = await import('$lib/globe-three');
			const scene = new THREE.Scene();
			const ringsScene = new THREE.Scene();

			const camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 50);
			camera.position.set(0, 15, 50);

			const ringsCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 60);
			ringsCamera.position.set(0, 0, 50);

			const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas });
			renderer.setSize(width, height, false);
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.physicallyCorrectLights = true;
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;

			const sunLight = new THREE.DirectionalLight(
				new THREE.Color('#FFFFFF').convertSRGBToLinear(),
				3.5,
			);
			sunLight.position.set(10, 20, 10);
			sunLight.castShadow = true;
			sunLight.shadow.mapSize.width = 512;
			sunLight.shadow.mapSize.height = 512;
			sunLight.shadow.camera.near = 0.5;
			sunLight.shadow.camera.far = 100;
			sunLight.shadow.camera.left = -10;
			sunLight.shadow.camera.bottom = -10;
			sunLight.shadow.camera.top = 10;
			sunLight.shadow.camera.right = 10;
			scene.add(sunLight);

			const moonLight = new THREE.DirectionalLight(
				new THREE.Color('#77ccff').convertSRGBToLinear(),
				0,
			);
			moonLight.position.set(-10, 20, 10);
			moonLight.castShadow = true;
			moonLight.shadow.mapSize.width = 512;
			moonLight.shadow.mapSize.height = 512;
			moonLight.shadow.camera.near = 0.5;
			moonLight.shadow.camera.far = 100;
			moonLight.shadow.camera.left = -10;
			moonLight.shadow.camera.bottom = -10;
			moonLight.shadow.camera.top = 10;
			moonLight.shadow.camera.right = 10;
			scene.add(moonLight);

			const controls = new THREE.OrbitControls(camera, renderer.domElement);
			controls.target.set(0, 0, 0);
			controls.enableZoom = false;
			controls.enablePan = false;
			controls.dampingFactor = 0.05;
			controls.enableDamping = true;

			const [
				envmapTexture,
				bump,
				map,
				spec,
				planeTrailMask,
				{
					scene: {
						children: [plane],
					},
				},
			] = await Promise.all([
				new THREE.RGBELoader().setDataType(THREE.FloatType).loadAsync('assets/adam_old_room.hdr'), // thanks to https://polyhaven.com/hdris !

				// thanks to https://free3d.com/user/ali_alkendi !
				new THREE.TextureLoader().loadAsync('assets/earthbump.jpg'),
				new THREE.TextureLoader().loadAsync('assets/earthmap.jpg'),
				new THREE.TextureLoader().loadAsync('assets/earthspec.jpg'),
				new THREE.TextureLoader().loadAsync('assets/mask.png'),

				new THREE.GLTFLoader().loadAsync('assets/plane/scene.glb'),
			]);

			let pmrem = new THREE.PMREMGenerator(renderer);
			let envMap = pmrem.fromEquirectangular(envmapTexture).texture;

			// Important to know!
			// textures.map.encoding = sRGBEncoding;

			let sphere = new THREE.Mesh(
				new THREE.SphereGeometry(globeSize, 70, 70),
				new THREE.MeshPhysicalMaterial({
					map: map,
					roughnessMap: spec,
					bumpMap: bump,
					bumpScale: 0.05,
					envMap,
					envMapIntensity: 0.4,
					sheen: 0.5,
					sheenRoughness: 0.75,
					sheenColor: new THREE.Color('#ff8a00').convertSRGBToLinear(),
					clearcoat: 0.5,
				}),
			);
			sphere.userData.sunEnvIntensity = 0.4;
			sphere.userData.moonEnvIntensity = 0.1;
			sphere.rotation.y += Math.PI * 1.25;
			sphere.receiveShadow = true;
			scene.add(sphere);

			const ring1 = new THREE.Mesh(
				new THREE.RingGeometry(15.7, 14.5, 80, 1, 0),
				new THREE.MeshPhysicalMaterial({
					color: new THREE.Color('#FFCB8E').convertSRGBToLinear().multiplyScalar(200),
					roughness: 0.25,
					envMap,
					envMapIntensity: 1.8,
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.35,
				}),
			);
			ring1.name = 'ring';
			ring1.userData.sunOpacity = 0.35;
			ring1.userData.moonOpacity = 0.03;
			ringsScene.add(ring1);

			const ring2 = new THREE.Mesh(
				new THREE.RingGeometry(16.9, 16.4, 80, 1, 0),
				new THREE.MeshBasicMaterial({
					color: new THREE.Color('#FFCB8E').convertSRGBToLinear(),
					transparent: true,
					opacity: 0.5,
					side: THREE.DoubleSide,
				}),
			);
			ring2.name = 'ring';
			ring2.userData.sunOpacity = 0.35;
			ring2.userData.moonOpacity = 0.1;
			ringsScene.add(ring2);

			const ring3 = new THREE.Mesh(
				new THREE.RingGeometry(18.5, 18.4, 80),
				new THREE.MeshBasicMaterial({
					color: new THREE.Color('#FFCB8E').convertSRGBToLinear().multiplyScalar(50),
					transparent: true,
					opacity: 0.5,
					side: THREE.DoubleSide,
				}),
			);
			ring3.name = 'ring';
			ring3.userData.sunOpacity = 0.35;
			ring3.userData.moonOpacity = 0.03;
			ringsScene.add(ring3);

			// https://sketchfab.com/3d-models/cartoon-plane-f312ec9f87794bdd83630a3bc694d8ea#download
			// "Cartoon Plane" (https://skfb.ly/UOLT) by antonmoek is licensed under Creative Commons Attribution
			// (http://creativecommons.org/licenses/by/4.0/).
			let planesData = [
				makePlane(plane, planeTrailMask, envMap, scene),
				makePlane(plane, planeTrailMask, envMap, scene),
				makePlane(plane, planeTrailMask, envMap, scene),
				makePlane(plane, planeTrailMask, envMap, scene),
				makePlane(plane, planeTrailMask, envMap, scene),
			];

			let daytime = true;
			let animating = false;
			dayAnimationUpdate = (t) => {
				sunLight.intensity = 3.5 * (1 - t);
				moonLight.intensity = 3.5 * t;

				sunLight.position.setY(20 * (1 - t));
				moonLight.position.setY(20 * t);

				sphere.material.sheen = 1 - t;
				scene.children.forEach((child) => {
					child.traverse((object) => {
						if (object instanceof THREE.Mesh && object.material.envMap) {
							object.material.envMapIntensity =
								object.userData.sunEnvIntensity * (1 - t) + object.userData.moonEnvIntensity * t;
						}
					});
				});

				ringsScene.children.forEach((child, i) => {
					child.traverse((object) => {
						if (object instanceof THREE.Mesh) {
							object.material.opacity =
								object.userData.sunOpacity * (1 - t) + object.userData.moonOpacity * t;
						}
					});
				});
			};
			let clock = new THREE.Clock();

			renderer.setAnimationLoop(() => {
				let delta = clock.getDelta();
				sphere.rotation.y += delta * 0.05;

				controls.update();
				renderer.render(scene, camera);

				ring1.rotation.x = ring1.rotation.x * 0.95 + mousePos.y * 0.05 * 1.2;
				ring1.rotation.y = ring1.rotation.y * 0.95 + mousePos.x * 0.05 * 1.2;

				ring2.rotation.x = ring2.rotation.x * 0.95 + mousePos.y * 0.05 * 0.375;
				ring2.rotation.y = ring2.rotation.y * 0.95 + mousePos.x * 0.05 * 0.375;

				ring3.rotation.x = ring3.rotation.x * 0.95 - mousePos.y * 0.05 * 0.275;
				ring3.rotation.y = ring3.rotation.y * 0.95 - mousePos.x * 0.05 * 0.275;

				planesData.forEach((planeData) => {
					let plane = planeData.group;

					plane.position.set(0, 0, 0);
					plane.rotation.set(0, 0, 0);
					plane.updateMatrixWorld();
					/**
					 * idea: first rotate like that:
					 *
					 *          y-axis
					 *  airplane  ^
					 *      \     |     /
					 *       \    |    /
					 *        \   |   /
					 *         \  |  /
					 *     angle ^
					 *
					 * then at the end apply a rotation on a random axis
					 */
					planeData.rot += delta * 0.25;
					plane.rotateOnAxis(planeData.randomAxis, planeData.randomAxisRot); // random axis
					plane.rotateOnAxis(new THREE.Vector3(0, 1, 0), planeData.rot); // y-axis rotation
					plane.rotateOnAxis(new THREE.Vector3(0, 0, 1), planeData.rad); // this decides the radius
					plane.translateY(planeData.yOff);
					plane.rotateOnAxis(new THREE.Vector3(1, 0, 0), +Math.PI * 0.5);
				});

				renderer.autoClear = false;
				renderer.render(ringsScene, ringsCamera);
				renderer.autoClear = true;

				// Note: This snippet is used to generate the fallback image. Uncomment to use.

				// if (typeof window !== 'undefined' && !window.ssCaptured) {
				// 	let a = document.createElement('a');
				// 	a.href = renderer.domElement.toDataURL('image/png');
				// 	a.download = 'globe.png';
				// 	a.click();
				// 	window.ssCaptured = true;
				// }
			});

			function nr() {
				return Math.random() * 2 - 1;
			}

			function makePlane(
				planeMesh: THREE.Object3D<Event>,
				trailTexture: THREE.Texture,
				envMap: THREE.Texture,
				scene: THREE.Scene,
			) {
				let plane = planeMesh.clone();
				plane.scale.set(planeSize, planeSize, planeSize);
				plane.position.set(0, 0, 0);
				plane.rotation.set(0, 0, 0);
				plane.updateMatrixWorld();

				plane.traverse((object) => {
					if (object instanceof THREE.Mesh) {
						object.material.envMap = envMap;
						object.userData.sunEnvIntensity = 1;
						object.userData.moonEnvIntensity = 0.3;
						object.castShadow = true;
						object.receiveShadow = true;
					}
				});

				let trail = new THREE.Mesh(
					new THREE.PlaneGeometry(1, 2),
					new THREE.MeshPhysicalMaterial({
						envMap,
						envMapIntensity: 3,

						roughness: 0.4,
						metalness: 0,
						transmission: 1,

						transparent: true,
						opacity: 1,
						alphaMap: trailTexture,
					}),
				);
				trail.userData.sunEnvIntensity = 3;
				trail.userData.moonEnvIntensity = 0.7;
				trail.rotateX(Math.PI);
				trail.translateY(1.1);

				let group = new THREE.Group();
				group.add(plane);
				group.add(trail);

				scene.add(group);

				return {
					group,
					yOff: globeSize + planeAltitude + Math.random() * 1.0,
					rot: Math.PI * 2, // just to set a random starting point
					rad: Math.random() * Math.PI * 0.45 + Math.PI * 0.05,
					randomAxis: new THREE.Vector3(nr(), nr(), nr()).normalize(),
					randomAxisRot: Math.random() * Math.PI * 2,
				};
			}
		}

		init().then(() => {
			globeReady = true;
		});
	});

	function onMouseMove(e: MouseEvent) {
		let x = e.clientX - innerWidth * 0.5;
		let y = e.clientY - innerHeight * 0.5;

		mousePos.x = x * 0.0003;
		mousePos.y = y * 0.0003;
	}
</script>

<svelte:window on:mousemove={onMouseMove} />

<div
	style="width: {width}px; height: {height}px;"
	class="overflow-hidden max-w-full flex items-center justify-center"
>
	{#if !globeReady}
		<img src="/assets/globe.png" alt="Globe" />
	{/if}
	<canvas
		bind:this={canvas}
		class:hidden={!globeReady}
		class="max-w-full"
		use:onClickOnly={toggleDayTime}
	/>
</div>
