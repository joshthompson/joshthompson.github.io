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

		private accelerometer: any

		public created() {
			window.addEventListener('mousemove', this.setOffset)
			window.addEventListener('deviceorientation', this.setOffsetPhone)
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
				this.offset.x = minmax(this.offset.x + this.orientation.alpha - event.alpha, this.movement.x)
				this.offset.y = minmax(this.offset.y + this.orientation.beta - event.beta, this.movement.y)
			}
			this.orientation = event
		}

		public get foregroundStyle() {
			return {
				transform: `scale(1.15) translate(${this.offset.x}px, ${this.offset.y - 10}px)`
			}
		}

		public get backgroundStyle() {
			return {
				left: `${-this.offset.x / 2}px`,
				top: `${-this.offset.y / 2}px`
			}
		}

		public get containerStyle() {
			return {
				width: `${this.size}px`,
				height: `${this.size}px`
			}
		}

		public async start() {
			if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
				(DeviceOrientationEvent as any).requestPermission().catch(() => { /* Failure is okay */ })
			}
		}
	}
</script>

<template>
	<div class="image-3d" :style="containerStyle" @click="start">
		<img class="foreground" :style="foregroundStyle" src="@/assets/me-fg@2x.png" srcset="@/assets/me-fg.png 300w, @/assets/me-fg.png 600w" />
		<img class="background" :style="backgroundStyle" src="@/assets/me-bg.jpg" />
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
</style>
