<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class CVBlock extends Vue {}
</script>

<template>
  <div>
    <h2 id="cv">Interested in hiring me?</h2>

		<p>Yes, I would be too. Here is my CV which includes my contact details. I look forward to hearing from you.</p>

		<a href="/cv.pdf" class="link" target="_blank">Download CV</a>

		<div class="cv">
			<a href="/cv.pdf" class="link" target="_blank">
				<img src="@/assets/cv.png" alt="Preview of CV" />
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.cv {
		margin-top: 1rem;
		img {
			width: 350px;
			max-width: 100%;
		}
	}
</style>
