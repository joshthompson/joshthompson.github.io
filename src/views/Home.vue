<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import HeroHeader from '@/components/HeroHeader.vue'
	import ProjectBlocks from '@/components/ProjectBlocks.vue'
	import CVBlock from '@/components/CVBlock.vue'

	@Component({
		components: { HeroHeader, ProjectBlocks, CVBlock }
	})
	export default class Home extends Vue {

		public upClass = { visible: false }
		public mounted() {
			document.body.addEventListener('scroll', () => {
				this.upClass.visible = document.body.scrollTop > 100
			})
		}
		public scrollToTop() {
			document.body.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}
</script>

<template>
	<div class="home">

    <HeroHeader />
    <ProjectBlocks />
    <CVBlock />

		<h2>Oh, and find me on these sites too...</h2>

		<div class="social">
			<a href="https://www.linkedin.com/in/josh-thompson/" target="_blank"><img src="@/assets/linkedin.png" /></a>
			<a href="https://www.instagram.com/joshbenthompson/" target="_blank"><img src="@/assets/instagram.png" /></a>
		</div>

		<div class="up" :class="upClass" @click="scrollToTop">
			<img alt="Go to top" src="@/assets/chevron.svg" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/style/theme.scss';
	@import '@/style/responsive.scss';

	.up {
		position: fixed;
		bottom: var(--spacing-medium);
		right: var(--spacing-medium);
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--primary);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition:
			scale var(--duration-fast) ease-in-out,
			opacity var(--duration-slow) ease-in-out;

		&:not(.visible) {
			opacity: 0;
			pointer-events: none;
		}

		img {
			width: 60%;
			translate: 0 -2px;
		}

		&:hover {
			scale: 1.1;
		}
	}

	.photo {
		position: relative;
		width: 300px;
		max-width: 100%;
		margin: 0 auto 2rem;

		.me {
			width: 100%;
			border-radius: 1rem;
		}
		.arrow {
			position: absolute;
			width: 30%;
			top: 75%;
			left: 75%;
			z-index: 3;
			animation: floating 2s linear infinite;
		}
	}

	.intro {
		div {
			&:nth-child(1) {
				margin-top: 0;
			}
			margin-top: 1rem;
		}
	}

	em {
		font-style: normal;
		color: $main-colour;
	}

	h1 {
		margin: 0 0 3rem;

		@include small {
			margin: 0 0 2rem;
			font-size: 1.5rem;
		}
	}

	.social {
		img {
			width: 2rem;
			height: 2rem;
			margin: 0 0.5rem;
			border-radius: 0.5rem;
		}
		a {
			cursor: pointer;
		}
		margin-bottom: 2rem;
	}

	.cv {
		margin-top: 1rem;
		img {
			width: 350px;
			max-width: 100%;
		}
	}
</style>
