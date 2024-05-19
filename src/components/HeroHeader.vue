<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import MyHead from './MyHead.vue'

	@Component({
		components: { MyHead }
	})
	export default class HeroHeader extends Vue {
		public mounted() {
			document.querySelectorAll('header a').forEach((anchor) => {
				anchor.addEventListener('click', function(event) {
					event.preventDefault()
					document.querySelector(this.getAttribute('href')).scrollIntoView({
						behavior: 'smooth'
					})
				})
			})
		}
	}
</script>

<template>
  <div>
		<header>
      <h1>
        <span>Hej! </span>
        <span>That's </span>
        <em>Josh Thompson </em>
        <span>(me)</span>
      </h1>
      <div class="middle">
        <div class="projects"><a href="#projects">Projects</a></div>
        <div class="head"><MyHead /></div>
        <div class="cv"><a href="#cv">CV</a></div>
      </div>
      <div class="tagline">I'm a <em>frontend web developer</em> in Stockholm</div>
    </header>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/style/theme.scss';

	header {
		background-color: $light-colour;
		height: 100svh;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-large);
		padding: var(--spacing-medium);
		justify-content: space-between;

		@media screen and (max-width: 768px) {
			gap: var(--spacing-small);
		}
	
		h1 {
			font-size: var(--font-size-xlarge);
			text-align: center;
			color: $darker-colour;

			@media screen and (max-width: 768px) {
				font-size: var(--font-size-large);
			}
		}

		em {
			font-style: normal;
			color: var(--primary);
		}

		.middle {
			margin: 0 auto;
			width: 100%;
			display: grid;
			grid-template-areas: "projects head cv";
			grid-template-columns: 1fr 1.5fr 1fr;
			gap: var(--spacing-medium);
			align-items: center;

			@media screen and (max-width: 768px) {
				grid-template-areas: "head head" "projects cv";
				grid-template-columns: repeat(2, calc(50% - 0.5 * var(--spacing-medium)));
			}

			> div {
				flex: 1;
				text-align: center;
			}

			.head {
				grid-area: head;
			}

			.projects {
				grid-area: projects;
			}

			.cv {
				grid-area: cv;
			}
			
			.projects,
			.cv {
				// outline: 3px double red;
			}
		}

		.tagline {
			font-size: var(--font-size-large);
			text-align: center;
			color: $darker-colour;

			@media screen and (max-width: 768px) {
				font-size: var(--font-size-medium);
			}
		}
	}

	a {
		display: inline-block;
		appearance: none;
		text-decoration: none;
		background-color: var(--black);
		color: var(--white);
		padding: var(--spacing-medium) var(--spacing-large);
		border: none;
		border-radius: var(--border-radius-medium);
		cursor: pointer;
		
		font-size: var(--font-size-large);
		text-transform: uppercase;
		transition: all var(--duration-fast) ease-in-out;


		@media screen and (max-width: 768px) {
			padding: var(--spacing-xsmall) var(--spacing-small);
			font-size: var(--font-size-medium);
			display: block;
			max-width: 100%;
		}

		@media screen and (max-width: 768px) {
			padding: var(--spacing-xsmall) var(--spacing-xsmall);
			font-size: var(--font-size-small);
		}

		&:hover {
			background: var(--primary);
			animation: button-wobble 0.75s linear infinite, button-scale 2s linear infinite;
		}
	}

	@keyframes button-wobble {
		0%, 50%, 100% { rotate: 0deg; }
		25% { rotate: 1deg; }
		75% { rotate: -1deg; }
	}

	@keyframes button-scale {
		0%, 100% { scale: 1; }
		50% { scale: 1.05; }
	}
</style>
