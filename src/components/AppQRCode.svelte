<style lang="scss">
@import "../../node_modules/bulma/sass/utilities/_all.sass";
@import "../styles/variables.scss";
@import "../../node_modules/bulma/sass/components/modal.sass";
</style>

<script>
import LazyLoadImage from "./LazyLoadImage.svelte";
import { onMount } from "svelte";
import AOS from "aos";
onMount(() => AOS.init());
export let src = "//static.prepseed.com/graphics/mobile-app-qr-code.png";
export let size = 100;

let isQRCodeModalOpen = false;
function openQrCodeModal() {
	isQRCodeModalOpen = true;
}
function closeQrCodeModal() {
	isQRCodeModalOpen = false;
}
</script>

<span
	role="button"
	on:click="{openQrCodeModal}"
	class="is-clickable"
	data-aos="zoom-out"
	data-aos-delay="{1200}"
	data-aos-duration="{1000}"
>
	<LazyLoadImage
		alt="Scan QR code to download mobile app"
		src="{src}"
		height="{size}"
		width="{size}"
		style="height:{size}px;width:{size}px;min-height:{size}px;max-height:{size}px;max-width:{size}px;min-width:{size}px;"
	/>
</span>
<div class="modal" class:is-active="{isQRCodeModalOpen}">
	<div class="modal-background" on:click="{closeQrCodeModal}"></div>
	<div
		class="modal-content has-background-white py-6"
		style="border-radius: 8px"
	>
		<div
			class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
		>
			<div class="is-inline-block" style="max-width: 80%">
				<h3 class="title is-5">
					Scan the QR Code to download <br />the Prepseed app
				</h3>
				<LazyLoadImage
					alt="Scan QR code to download mobile app"
					src="{src}"
					style="max-height: 100%;max-width: 100%"
				/>
			</div>
		</div>
	</div>
	<div class="modal-close" on:click="{closeQrCodeModal}"></div>
</div>
