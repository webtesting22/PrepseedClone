<style lang="scss" global>
@import "../styles/global.scss";
</style>

<script>
import { onMount } from "svelte";
import { stores } from "@sapper/app";
import "aos/dist/aos.css";
import AOS from "aos";
onMount(() => AOS.init());
import Footer from "../components/Footer.svelte";
import Nav from "../components/Nav.svelte";
import { initialize, trackPageView } from "../utils/analytics";
import WhatappBtn from "../components/WhatappBtn.svelte";
export let segment;
$: removeNav = [
	"feedback",
	"checkout",
	"reset",
	"sign-in",
	"create-account",
].includes(segment);
$: removeFooter = ["reset", "feedback"].includes(segment);
onMount(initialize);
const { page } = stores();
function handlePageChange(pageValue) {
	const { path } = pageValue;
	trackPageView(path);
}
page.subscribe(handlePageChange);
</script>

<Nav isRemoved="{removeNav}" isFixed />
<slot />
{#if !removeFooter}
	<Footer />
{/if}

<WhatappBtn/>