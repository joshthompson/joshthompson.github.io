<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'
	import ProjectBlock from '@/components/ProjectBlock.vue'
	import projects from '@/services/projects'
	import { Project } from '@/types'

	@Component({
		components: { ProjectBlock }
	})
	export default class Home extends Vue {
		public projects: Project[] = projects
	}
</script>

<template>
	<div class="home">

		<div class="photo">
			<img src="@/assets/me.png" class="me" />
			<img src="@/assets/arrow.svg" class="arrow" />
		</div>

		<h1>Hej! That's <em>Josh Thompson</em> (me)</h1>
		<div class="intro">
			<div>I'm a Stockholm based, frontend web developer.</div>
			<div>Unless you wanna skip to my <a href="#cv" class="link">CV</a>, lets get straight to some of my work!</div>
		</div>

		<hr />

		<div class="projects">
			<ProjectBlock
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>

		<h2 id="cv">Interesting in hiring me?</h2>

		<p>Yes, I would be too. Here is my CV which includes my contact details. I look forward to hearing from you.</p>

		<a href="/cv.pdf" class="link" target="_blank">Download CV</a>

		<p>Oh, and find me on these sites too...</p>

		<div class="social">
			<a href="https://www.linkedin.com/in/josh-thompson/" target="_blank"><img src="@/assets/linkedin.png" /></a>
			<a href="https://www.instagram.com/joshbenthompson/" target="_blank"><img src="@/assets/instagram.png" /></a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '@/style/theme.scss';
	@import '@/style/responsive.scss';

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

	@keyframes floating {
		0%   { transform: rotate(360deg) translateX(10px) rotate(-360deg); }
		100% { transform: rotate(0deg)   translateX(10px) rotate(0deg);    }
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

	.home {
		margin: 3rem;

		@include small {
			margin: 2rem 1rem;
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

	.projects {
		margin-top: 3rem;
	}
</style>
