<style lang="scss">
@import "../styles/variables.scss";
.success-stories-headline {
	position: relative;
	&:after {
		position: absolute;
		content: " ";
		bottom: -3px;
		left: 0.5%;
		margin-left: 0;
		width: 52%;
		border-bottom: solid 3px lighten($primary-color, 20%);
	}
}
</style>

<script>
import StudentReview from "../components/StudentReview.svelte";
import { successStories } from "../data/students";
import { onMount } from "svelte";
import AOS from "aos";
onMount(() => AOS.init());
</script>

<svelte:head>
	<title>What our students say about us</title>
</svelte:head>

<section class="section pt-4">
	<div class="container is-max-widescreen">
		<h1 class="title is-family-primary is-3 has-text-centered">
			<span class="success-stories-headline">Success Stories</span>
		</h1>
		<div class="columns is-multiline">
			{#each successStories as story}
				<div
					class="column is-full-mobile is-half-tablet is-one-third-widescreen"
					data-aos="fade-up"
					data-aos-delay="{300}"
					data-aos-duration="{1000}"
				>
					<StudentReview {...story} />
				</div>
			{/each}
		</div>
	</div>
</section>
