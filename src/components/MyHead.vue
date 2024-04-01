<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const face = {
	src: require('@/assets/face/face.png'),
	width: 1222,
	height: 1651
}

const leftEye = {
	src: require('@/assets/face/eye.png'),
	width: 400,
	height: 278
}

const rightEye = {
	src: require('@/assets/face/eye.png'),
	width: 400,
	height: 278
}

@Component
export default class MyHead extends Vue {
	private currentMouseMoveTimeout = -1

	public mounted() {
		const leftEyeElement: HTMLDivElement = document.querySelector('.left-eye')
		const rightEyeElement: HTMLDivElement = document.querySelector('.right-eye')

		const idleMoveTime = 2000
		const idle = () => {
			// Idle
			const randomAngle = Math.random() * 2 * Math.PI - Math.PI
			const randomDistance = Math.random() * 100;
			[leftEyeElement, rightEyeElement].forEach((element) => {
			element.style.setProperty('--eye-angle', randomAngle.toString())
			element.style.setProperty('--eye-distance', randomDistance.toString())
			})
			this.currentMouseMoveTimeout = window.setTimeout(idle, idleMoveTime)
		}

		const resetEyes = () => {
			[leftEyeElement, rightEyeElement].forEach((element) => {
			element.style.setProperty('--eye-angle', '')
			element.style.setProperty('--eye-distance', '')
			})
			this.currentMouseMoveTimeout = window.setTimeout(idle, idleMoveTime)
		}

		resetEyes()

		window.addEventListener('mousemove', (event) => {
			[leftEyeElement, rightEyeElement].forEach((element) => {
				if (element) {
				const rect = element.getBoundingClientRect()
				const x = rect.x + rect.width / 2
				const y = rect.y + rect.height / 2
				const angle = Math.atan2(y - event.clientY, x - event.clientX)
				const distance = Math.sqrt((x - event.clientX) ** 2 + (y - event.clientY) ** 2)

				element.style.setProperty('--eye-angle', `${angle}`)
				element.style.setProperty('--eye-distance', `${distance}`)
				}
			})
			clearTimeout(this.currentMouseMoveTimeout)

			this.currentMouseMoveTimeout = window.setTimeout(resetEyes, 2500)
		})
	}

	get headStyles() {
		return {
			'--face-width': face.width,
			'--face-height': face.height
		}
	}

	get leftEyeStyles() {
		return {
			backgroundImage: `url(${leftEye.src})`,
			'--eye-width': leftEye.width,
			'--eye-height': leftEye.height
		}
	}

	get rightEyeStyles() {
		return {
			backgroundImage: `url(${rightEye.src})`,
			'--eye-width': rightEye.width,
			'--eye-height': rightEye.height
		}
	}

	get faceStyles() {
		return {
			backgroundImage: `url(${face.src})`
		}
	}
}
</script>

<template>
	<div>
		<div
			class="head"
			:style="headStyles"
		>
			<main class="head-inner">
				<div
					class="face"
					:style="faceStyles"
					role="img"
					alt="Photo of me"
				/>
				<div
					class="left-eye"
					:style="leftEyeStyles"
					aria-hidden="true"
				/>
				<div
					class="right-eye"
					:style="rightEyeStyles"
					aria-hidden="true"
				/>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.head {
		max-width: 100%;
		max-height: calc(100svh - 300px);
		aspect-ratio: calc(var(--face-width) / var(--face-height));
		margin: 0 auto;

		.head-inner {
			margin: 0 auto;

			height: 100%;
			max-height: calc(100svh - 300px);
			aspect-ratio: calc(var(--face-width) / var(--face-height));

			position: relative;

			.face {
				width: 100%;
				height: 100%;
				background-size: contain;
				background-repeat: no-repeat;
				background-position: center;
				z-index: 2;
				position: relative;
				animation: blink 10s linear repeat;
			}

			.left-eye,
			.right-eye {
				position: absolute;
				z-index: 1;
				width: calc(70% * (var(--eye-width) / var(--face-width)));
				height: calc(70% * (var(--eye-height) / var(--face-height)));
				background-size: cover;
				transition: transform 0.3s linear;

				--eye-distance-limit: 30;
				--eye-move-amount: min(1, calc(var(--eye-distance) / var(--eye-distance-limit)));
				--eye-move-x: calc(13% * cos(var(--eye-angle) + var(--pi)) * var(--eye-move-amount));
				--eye-move-y: calc(13% * sin(var(--eye-angle) + var(--pi)) * var(--eye-move-amount));
				transform: translate(var(--eye-move-x), var(--eye-move-y));
			}

			.left-eye {
				top: 45.2%;
				left: 24.7%;
				scale: 0.5;
			}

			.right-eye {
				top: 44.6%;
				left: 58.4%;
				scale: 0.5;
			}
		}
	}
</style>
