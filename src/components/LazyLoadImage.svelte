<script>
import { onMount } from "svelte";

export let src;
export let visibleByDefault = false;
export let alt = "";
export let height = undefined;
export let width = undefined;
export let role = undefined;
export let style = "";
let className = "";
let root;
let isVisible = !!visibleByDefault;
let placeholderSrc = "";
let isNativeLazyLoadingSupported = false;
export { className as class };
export let loading =
	isNativeLazyLoadingSupported && !visibleByDefault ? "lazy" : "auto";
const threshold = 400;
export let useNativeIfAvailable = false;

let intersectionObserver = null;

const checkIntersections = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			isVisible = true;
			intersectionObserver && intersectionObserver.disconnect();
		}
	});
};

onMount(() => {
	if (
		useNativeIfAvailable &&
		typeof window !== "undefined" &&
		"loading" in window.HTMLImageElement.prototype
	) {
		if (!visibleByDefault) {
			isNativeLazyLoadingSupported = true;
			isVisible = true;
			loading = "lazy";
		}
	}

	if (!isVisible) {
		intersectionObserver = new IntersectionObserver(checkIntersections, {
			rootMargin: threshold + "px",
		});
		intersectionObserver.observe(root);
		return () => {
			intersectionObserver.disconnect();
		};
	}
});
</script>

{#if Array.isArray(src)}
	<picture bind:this="{root}">
		{#each src as srcItem}
			<source
				key="{`${srcItem.url}-${isVisible ? 1 : 0}`}"
				srcSet="{isVisible ? srcItem.url : ''}"
				type="{srcItem.type}"
			/>
		{/each}
		<img
			height="{height}"
			width="{width}"
			class="{className}"
			alt="{alt}"
			src="{isVisible ? src[src.length - 1].url : placeholderSrc}"
			loading="{loading}"
			role="{role}"
			style="{style}"
		/>
	</picture>
{:else}
	<img
		height="{height}"
		width="{width}"
		class="{className}"
		bind:this="{root}"
		alt="{alt}"
		loading="{loading}"
		src="{isVisible ? src : placeholderSrc}"
		role="{role}"
		style="{style}"
	/>
{/if}
