<style lang="scss">
.big-text {
	font-size: 3rem;
	&-container {
		position: absolute;
		top: -25px;
		right: -25px;
		height: 100px;
		width: 100px;
		border-radius: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		border: solid 3px #ffd700b5;
	}
	&-prefix {
		margin-bottom: -0.5rem;
	}
	&-suffix {
		margin-top: -0.5rem;
		margin-bottom: 1rem;
		font-size: 0.9rem;
	}
}
#AjustCards{
overflow:auto;
height:50vh;
}



</style>

<script>
import LazyLoadImage from "./LazyLoadImage.svelte";
export let testimonial;
export let avatar;
export let avatarSize = 256;
export let name;
export let location = "";
export let video = undefined;
export let maxTextLine = 100;
export let bigText;
export let bigTextPrefix;
export let bigTextSuffix;
export let testimonialIsHTML = false;
export let imageBorderColor = "#bbbdde";
</script>

<div class="card is-relative" style="overflow:visible;height:100%;">
	<div class="card-content">
		<div class="">
			<div style="max-width: 300px;margin:auto;text-align:center;">
				<div style="display: flex;justify-content:center">
					<figure
						class="{`is-relative image is-${avatarSize}x${avatarSize}`}"
					>
						<LazyLoadImage
						
							class="is-rounded"
							style="border: solid 5px {imageBorderColor};padding: 3px;background-color:#ffeeff; width:200px;"
							alt="{`Profile picture of ${name}`}"
							src="{avatar}"
						/>
						{#if bigText}
							<div class="big-text-container has-text-centered " >
								<div >
									<div class="big-text-prefix" style="font-size: 13px;">
										{bigTextPrefix}
									</div>
									<div class="big-text title is-1 mb-0" style="font-size: 33px;padding:5px 0px">
										{bigText}
									</div>
									<div class="big-text-suffix has-text-grey" style="font-size: 13px;">
										{bigTextSuffix}
									</div>
								</div>
							</div>
						{/if}
					</figure>
				</div>
			</div>
			<div id="AjustCards">
			<div
				class="is-justify-content-center is-align-items-center is-flex is-flex-direction-column mt-2 has-text-centered"
			>
				<div
					class="title is-4"
					class:mb-2="{!location}"
					class:mb-0="{!!location}"
				>
					{name}
				</div>
				{#if location}<div class="mb-1">{location}</div>{/if}
			</div>

			<div class="content mb-2 mt-0">
				{#if testimonial}
					<p
						class="trim is-family-secondary has-text-left"
						style="-webkit-line-clamp: {maxTextLine}"
					>
						{#if testimonialIsHTML}
							{@html testimonial}
						{:else}
							{testimonial}
						{/if}
					</p>
				{/if}
				{#if video}
					<button class="button is-primary is-outlined is-small">
						Watch Introduction
					</button>
				{/if}
			</div>
			</div>
		</div>
		<slot />
	</div>
</div>
