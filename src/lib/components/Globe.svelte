<script lang="ts">
	import { onMount } from 'svelte';
	import {
		DoubleSide,
		PCFSoftShadowMap,
		MeshPhysicalMaterial,
		TextureLoader,
		FloatType,
		PMREMGenerator,
		Scene,
		PerspectiveCamera,
		WebGLRenderer,
		Color,
		ACESFilmicToneMapping,
		sRGBEncoding,
		Mesh,
		SphereGeometry,
		MeshBasicMaterial,
		Vector2,
		DirectionalLight,
		Clock,
		RingGeometry,
		Vector3,
		PlaneGeometry,
		Group,
		Object3D,
		Texture,
		type Event,
	} from 'three';
	import { RGBELoader, OrbitControls, GLTFLoader } from 'three-stdlib';
	import anime from 'animejs';

	import { preloader } from '$lib/stores/preloader';
	import { onClickOnly } from '$lib/actions/onClickOnly';

	const planeSize = 0.002;
	const globeSize = 12;
	const width = 600;
	const height = 600;

	let mousePos = new Vector2(0, 0);
	let canvas: HTMLCanvasElement;

	let toggleDayTime = (e: MouseEvent) => {};

	onMount(() => {
		const scene = new Scene();
		const ringsScene = new Scene();

		const camera = new PerspectiveCamera(45, width / height, 0.5, 1000);
		camera.position.set(0, 15, 50);

		const ringsCamera = new PerspectiveCamera(45, width / height, 0.1, 1000);
		ringsCamera.position.set(0, 0, 50);

		const renderer = new WebGLRenderer({ antialias: true, alpha: true, canvas });
		renderer.setSize(width, height, false);
		renderer.toneMapping = ACESFilmicToneMapping;
		renderer.outputEncoding = sRGBEncoding;
		renderer.physicallyCorrectLights = true;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = PCFSoftShadowMap;

		const sunLight = new DirectionalLight(new Color('#FFFFFF').convertSRGBToLinear(), 3.5);
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

		const moonLight = new DirectionalLight(new Color('#77ccff').convertSRGBToLinear(), 0);
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

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 0, 0);
		controls.enableZoom = false;
		controls.dampingFactor = 0.05;
		controls.enableDamping = true;

		(async function () {
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
				new RGBELoader().setDataType(FloatType).loadAsync('assets/adam_old_room.hdr'), // thanks to https://polyhaven.com/hdris !

				// thanks to https://free3d.com/user/ali_alkendi !
				new TextureLoader().loadAsync('assets/earthbump.jpg'),
				new TextureLoader().loadAsync('assets/earthmap.jpg'),
				new TextureLoader().loadAsync('assets/earthspec.jpg'),
				new TextureLoader().loadAsync('assets/mask.png'),

				new GLTFLoader().loadAsync('assets/plane/scene.glb'),
			]);
			$preloader = false;

			let pmrem = new PMREMGenerator(renderer);
			let envMap = pmrem.fromEquirectangular(envmapTexture).texture;

			// Important to know!
			// textures.map.encoding = sRGBEncoding;

			let sphere = new Mesh(
				new SphereGeometry(globeSize, 70, 70),
				new MeshPhysicalMaterial({
					map: map,
					roughnessMap: spec,
					bumpMap: bump,
					bumpScale: 0.05,
					envMap,
					envMapIntensity: 0.4,
					sheen: 1,
					sheenRoughness: 0.75,
					sheenColor: new Color('#ff8a00').convertSRGBToLinear(),
					clearcoat: 0.5,
				}),
			);
			sphere.userData.sunEnvIntensity = 0.4;
			sphere.userData.moonEnvIntensity = 0.1;
			sphere.rotation.y += Math.PI * 1.25;
			sphere.receiveShadow = true;
			scene.add(sphere);

			const ring1 = new Mesh(
				new RingGeometry(15.7, 14.5, 80, 1, 0),
				new MeshPhysicalMaterial({
					color: new Color('#FFCB8E').convertSRGBToLinear().multiplyScalar(200),
					roughness: 0.25,
					envMap,
					envMapIntensity: 1.8,
					side: DoubleSide,
					transparent: true,
					opacity: 0.35,
				}),
			);
			ring1.name = 'ring';
			ring1.userData.sunOpacity = 0.35;
			ring1.userData.moonOpacity = 0.03;
			ringsScene.add(ring1);

			const ring2 = new Mesh(
				new RingGeometry(16.9, 16.4, 80, 1, 0),
				new MeshBasicMaterial({
					color: new Color('#FFCB8E').convertSRGBToLinear(),
					transparent: true,
					opacity: 0.5,
					side: DoubleSide,
				}),
			);
			ring2.name = 'ring';
			ring2.userData.sunOpacity = 0.35;
			ring2.userData.moonOpacity = 0.1;
			ringsScene.add(ring2);

			const ring3 = new Mesh(
				new RingGeometry(18.5, 18.4, 80),
				new MeshBasicMaterial({
					color: new Color('#FFCB8E').convertSRGBToLinear().multiplyScalar(50),
					transparent: true,
					opacity: 0.5,
					side: DoubleSide,
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
			toggleDayTime = (e) => {
				if (animating) return;

				const anim = daytime ? [0, 1] : [1, 0];
				animating = true;

				let obj = { t: 0 };
				anime({
					targets: obj,
					t: anim,
					complete: () => {
						animating = false;
						daytime = !daytime;
					},
					update: () => {
						sunLight.intensity = 3.5 * (1 - obj.t);
						moonLight.intensity = 3.5 * obj.t;

						sunLight.position.setY(20 * (1 - obj.t));
						moonLight.position.setY(20 * obj.t);

						sphere.material.sheen = 1 - obj.t;
						scene.children.forEach((child) => {
							child.traverse((object) => {
								if (object instanceof Mesh && object.material.envMap) {
									object.material.envMapIntensity =
										object.userData.sunEnvIntensity * (1 - obj.t) +
										object.userData.moonEnvIntensity * obj.t;
								}
							});
						});

						ringsScene.children.forEach((child, i) => {
							child.traverse((object) => {
								if (object instanceof Mesh) {
									object.material.opacity =
										object.userData.sunOpacity * (1 - obj.t) + object.userData.moonOpacity * obj.t;
								}
							});
						});
					},
					easing: 'easeInOutSine',
					duration: 500,
				});
			};
			let clock = new Clock();

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
					plane.rotateOnAxis(new Vector3(0, 1, 0), planeData.rot); // y-axis rotation
					plane.rotateOnAxis(new Vector3(0, 0, 1), planeData.rad); // this decides the radius
					plane.translateY(planeData.yOff);
					plane.rotateOnAxis(new Vector3(1, 0, 0), +Math.PI * 0.5);
				});

				renderer.autoClear = false;
				renderer.render(ringsScene, ringsCamera);
				renderer.autoClear = true;
			});
		})();
	});

	function nr() {
		return Math.random() * 2 - 1;
	}

	function makePlane(
		planeMesh: Object3D<Event>,
		trailTexture: Texture,
		envMap: Texture,
		scene: Scene,
	) {
		let plane = planeMesh.clone();
		plane.scale.set(planeSize, planeSize, planeSize);
		plane.position.set(0, 0, 0);
		plane.rotation.set(0, 0, 0);
		plane.updateMatrixWorld();

		plane.traverse((object) => {
			if (object instanceof Mesh) {
				object.material.envMap = envMap;
				object.userData.sunEnvIntensity = 1;
				object.userData.moonEnvIntensity = 0.3;
				object.castShadow = true;
				object.receiveShadow = true;
			}
		});

		let trail = new Mesh(
			new PlaneGeometry(1, 2),
			new MeshPhysicalMaterial({
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

		let group = new Group();
		group.add(plane);
		group.add(trail);

		scene.add(group);

		return {
			group,
			yOff: 10.5 + Math.random() * 1.0,
			rot: Math.PI * 2, // just to set a random starting point
			rad: Math.random() * Math.PI * 0.45 + Math.PI * 0.05,
			randomAxis: new Vector3(nr(), nr(), nr()).normalize(),
			randomAxisRot: Math.random() * Math.PI * 2,
		};
	}

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
	<canvas bind:this={canvas} class="max-w-full" use:onClickOnly={toggleDayTime} />
</div>
