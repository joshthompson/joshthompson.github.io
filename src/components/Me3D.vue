<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import { Project } from '@/types'

	interface Vector {
		x: number
		y: number
	}

	function minmax(value, max = 8) {
		return Math.min(max, Math.max(-max, value))
	}

	@Component
	export default class Me3D extends Vue {

		private offset: Vector = { x: 0, y: 0 }
		private movement: number = 5
		public size: number = 300
		private phone: boolean = false
		private orientation: DeviceOrientationEvent = null

		private accelerometer: any

		public created() {
			window.addEventListener('mousemove', this.setOffset)
			window.addEventListener('deviceorientation', this.setOffsetPhone)
		}

		private get position() {
			const container = this.$refs.container as HTMLElement
			return {
				x: container.getBoundingClientRect().left + this.size / 2,
				y: container.getBoundingClientRect().top + this.size / 2
			}
		}

		private setOffset(event: MouseEvent) {
			if (!this.phone) {
				const diff: Vector = {
					x: event.pageX - this.position.x,
					y: event.pageY - this.position.y
				}
				this.offset = {
					x: minmax(diff.x / (this.size / 2) * this.movement),
					y: minmax(diff.y / (this.size / 2) * this.movement)
				}
			}
		}

		private setOffsetPhone(event: DeviceOrientationEvent) {
			this.phone = true
			if (this.orientation) {
				this.offset.x = minmax(this.offset.x + this.orientation.alpha - event.alpha)
				this.offset.y = minmax(this.offset.y + this.orientation.beta - event.beta)
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
				left: `${-this.offset.x}px`,
				top: `${-this.offset.y}px`
			}
		}

		public get containerStyle() {
			return {
				width: `${this.size}px`,
				height: `${this.size}px`
			}
		}
	}
</script>

<template>
	<div ref="container" class="image-3d" :style="containerStyle">
		<!-- <pre>{{ debug }}</pre> -->
		<img class="foreground" :style="foregroundStyle" src="@/assets/me-fg.png" />
		<img class="background" :style="backgroundStyle" src="@/assets/me-bg.png" />
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
