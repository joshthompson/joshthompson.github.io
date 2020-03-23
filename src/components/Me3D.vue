<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { Project } from '@/types'

	interface Vector {
		x: number
		y: number
	}

	function minmax(value, max = 10) {
		return Math.min(max, Math.max(-max, value))
	}

	@Component
	export default class Me3D extends Vue {

		private offset: Vector = { x: 0, y: 0 }
		private movement: Vector = { x: 10, y: 8 }
		public size: number = 300
		private phone: boolean = false
		private orientation: DeviceOrientationEvent = null
		private canUseMotion: boolean = false
		private motionApproved: boolean = false

		private accelerometer: any

		public created() {
			this.canUseMotion = typeof (DeviceOrientationEvent as any).requestPermission === 'function'
			window.addEventListener('mousemove', this.setOffset)
			window.addEventListener('deviceorientation', this.setOffsetPhone)
			window.addEventListener('resize', this.resize)
			this.resize()
		}

		private resize() {
			this.size = Math.min(300, window.innerWidth - 2 * 20)
		}

		private setOffset(event: MouseEvent) {
			if (!this.phone) {
				const multiplier: Vector = {
					x: minmax((event.pageX / window.innerWidth) * 2 - 1, 1),
					y: minmax((event.pageY / window.innerHeight) * 2 - 1, 1)
				} // A number between -1 and 1 - min maxed as cursor can go beyond and still register
				this.offset = {
					x: multiplier.x * this.movement.x,
					y: multiplier.y * this.movement.y
				}
			}
		}

		private setOffsetPhone(event: DeviceOrientationEvent) {
			this.phone = true
			if (this.orientation) {
				// Get change
				let a = this.orientation.alpha - event.alpha
				let b = this.orientation.beta - event.beta
				// Correct for when angle resets
				a = a > 300 ? (a - 360) : (a < -300 ? 360 + a : a)
				b = b > 300 ? (b - 360) : (b < -300 ? 360 + b : b)
				// Convert to offset
				this.offset.x = minmax(this.offset.x - 0.25 * a, this.movement.x)
				this.offset.y = minmax(this.offset.y - 0.25 * b, this.movement.y)
			}
			this.orientation = event
		}

		public get foregroundStyle() {
			return {
				transform: `scale(1.15) translate(${this.offset.x / 5}px, ${this.offset.y / 5 - 10}px)`
			}
		}

		public get backgroundStyle() {
			return {
				left: `${-this.offset.x * 2}px`,
				top: `${-this.offset.y * 2}px`
			}
		}

		public get containerStyle() {
			return {
				width: `${this.size}px`,
				height: `${this.size}px`
			}
		}

		public async start() {
			if (this.canUseMotion && !this.motionApproved) {
				try {
					const permissionState = await (DeviceOrientationEvent as any).requestPermission()
					if (permissionState === 'granted') {
						this.motionApproved = true
					}
				} catch (err) {
					this.motionApproved = false
				}
			}
		}
	}
</script>

<template>
	<div>
		<div class="image-3d" :style="containerStyle" @click="start">
			<img class="foreground" :style="foregroundStyle" src="@/assets/me-fg@2x.png" srcset="@/assets/me-fg.png 300w, @/assets/me-fg.png 600w" />
			<img class="background" :style="backgroundStyle" src="@/assets/me-bg.jpg" />
		</div>
		<div v-if="canUseMotion && !motionApproved" class="tip" the face to make it 3D)</div>
	</div>
</template>

<style lang="scss">
	@import '@/style/theme.scss';
	
	.image-3d {
		position: relative;
		overflow: hidden;
		border-radius: 2rem;
		.foreground {
			position: relative;
			z-index: 2;
			width: 100%;
		}
		.background {
			position: absolute;
			width: 120%;
			margin: -10%;
			z-index: 1;
		}
	}

	.tip {
		color: rgba(255, 255, 255, 0.5);
		margin-top: 1rem;
		font-size: 0.75rem;
	}
</style>
