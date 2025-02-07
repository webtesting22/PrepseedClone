<style lang="scss">
.select-file {
	border: dashed 1px #dadce0;
	color: #000;
	background-color: transparent;
	border-radius: 4px;
	background-color: #fff;
	padding: 4px;
	min-height: 50px;
	flex-direction: column;
	display: flex;
	align-items: center;
	text-align: center;
	padding: 8px;
	.browse-button {
		color: #0064ff;
		cursor: pointer;
	}
	.selection-text {
		font-weight: 500;
	}
}
.dummy-logo {
	max-height: 100%;
	max-width: 100%;
	&-container {
		width: 300px;
	}
}
</style>

<script>
import { onMount } from "svelte";

import Dropzone from "svelte-file-dropzone";
import TextInput from "../components/inputs/TextInput.svelte";
import { getLogoUploadPolicy, submit } from "../api/register";
let coachingName,
	coachingNameError,
	email,
	emailError,
	mobileNumber,
	mobileNumberError,
	logoUrl;
let showFileSelector = false;

const portalBaseUrl =
	"https://your-coaching.prepseed.com/?utm_source=whatsapp&utm_medium=share&utm_campaign=share-created-page";

$: myPortalUrl = `${portalBaseUrl}&d-logo=${encodeURIComponent(
	logoUrl || logoPreviewSrc
)}&d-name=${encodeURIComponent(coachingName || "YourCoaching")}`;

$: shareableMessage = `Here is demo portal for my coaching ${
	coachingName || ""
} on Prepseed.\n${myPortalUrl}`;
$: shareToNumber = process.env.NODE_ENV === "development" ? "919913382221" : "";
$: whatsAppShareUrl = ` https://wa.me/${shareToNumber}?text=${encodeURIComponent(
	shareableMessage
)}`;

let fieldNames = {
	logoUrl: "Logo",
	coachingName: "Coaching Name",
	mobileNumber: "Mobile Number",
	email: "Email",
};

let error = null;
let isSubmitted = false,
	isSubmitting = false;

$: areAllFieldsEmpty = !mobileNumber && !email && !coachingName && !logo;

$: isSubmitDisabled = isSubmitting || areAllFieldsEmpty;

let logo = null,
	logoPreviewSrc = "https://static.prepseed.com/brand/your-coaching/logo.png";

function readURL(l) {
	if (l) {
		var reader = new FileReader();
		reader.onload = (e) => {
			logoPreviewSrc = e.target.result;
		};
		reader.readAsDataURL(logo);
	}
}
$: readURL(logo);

function handleFilesSelect(e) {
	const { acceptedFiles } = e.detail;
	if (acceptedFiles[0]) {
		logo = acceptedFiles[0];
		console.log(logo);
	}
}
let isUploadingLogo, logoUploadMessage, logoUploadProgress;
function uploadLogo(file, callback) {
	getLogoUploadPolicy(file.type)
		.error(422, (error) => {
			let code = "";
			callback({ message: "Unknown error occurred. Please try again." });
		})
		.fetchError((error) => {
			callback({
				message:
					"Seems like you are not connected to internet. Please try again.",
			});
		})
		.json(({ data: { url: uploadURL, fields }, filePath }) => {
			const endpoints = [`${uploadURL}/${filePath}`];
			isUploadingLogo = true;
			logoUploadMessage = "starting to upload";
			const formData = new FormData();
			Object.keys(fields).forEach((key) => {
				const value = fields[key];
				formData.append(key, value);
			});
			formData.append("file", file);
			var xhr = new XMLHttpRequest();
			xhr.open("POST", uploadURL, true);
			xhr.upload.onprogress = (e) => {
				if (e.lengthComputable) {
					const percentage =
						Math.floor((100 * 100 * e.loaded) / e.total) / 100;
					logoUploadProgress = percentage;
				}
			};
			xhr.upload.onloadstart = (e) => {
				logoUploadMessage = "Uploading your logo";
			};
			xhr.upload.onloadend = (e) => {
				logoUploadMessage = "Almost complete...";
			};
			xhr.onload = (e) => {
				isUploadingLogo = false;
				logoUploadMessage = "Logo uploaded.";
				logoUrl = endpoints[0];
				callback(null);
			};
			xhr.onerror = (e) => {
				isUploadingLogo = false;
				logoUploadMessage = "Failed to upload";
			};
			xhr.send(formData);
		});
}

function submitInformation() {
	submit({
		logoUrl,
		coachingName,
		mobileNumber,
		email,
	})
		.error(422, (e) => {
			const path = e.json.details[0].path[0];
			const message = e.json.message;
			const prettyMessage = message.replace(
				`"${path}"`,
				fieldNames[path] || path
			);
			error = {
				message: prettyMessage,
				field: path,
			};
			isSubmitting = false;
		})
		.fetchError(() => {
			error = {
				message:
					"Seems like you are not connected to internet. Please check your internet connection and try again.",
			};
			isSubmitting = false;
		})
		.res(() => {
			isSubmitting = false;
			isSubmitted = true;
		})
		.catch((e) => {
			error = {
				message: "Unknown error occurred. Please submit again.",
			};
			isSubmitting = false;
		});
}
function handleSubmit() {
	isSubmitting = true;
	error = null;
	if (logo) {
		uploadLogo(logo, () => {
			submitInformation();
		});
	} else {
		submitInformation();
	}
}

onMount(() => {
	if (typeof window !== "undefined") {
		showFileSelector = true;
	}
});
</script>

<section class="section">
	<div class="container is-max-widescreen">
		{#if !isSubmitted}
			<h3 class="title is-3">Fill your details</h3>
			<h4 class="subtitle">
				We will show you how your portal will look and contact you to
				discuss your requirments
			</h4>
			<form on:submit|preventDefault="{handleSubmit}">
				<TextInput
					label="Your Email"
					name="email"
					bind:value="{email}"
					error="{emailError}"
				/>
				<TextInput
					label="Your Phone Number"
					name="email"
					bind:value="{mobileNumber}"
					error="{mobileNumberError}"
				/>
				<TextInput
					label="Coaching Name"
					name="coachingName"
					bind:value="{coachingName}"
					error="{coachingNameError}"
				/>
				{#if showFileSelector}
					<Dropzone
						on:drop="{handleFilesSelect}"
						disableDefaultStyles
						accept="image/*"
						multiple="{false}"
						containerStyles=""
					>
						<div class="select-file">
							<div class="dummy-logo-container">
								<img
									src="{logoPreviewSrc}"
									alt="dummy coaching logo"
									class="dummy-logo"
								/>
							</div>
							<div class="selection-text">
								Drop your coaching logo here, or <span
									class="browse-button">browse</span
								>
							</div>
						</div>
					</Dropzone>
				{/if}
				{#if areAllFieldsEmpty}
					<div class="mt-5 has-text-danger">
						Please fill some details to see customized portal for
						your institute
					</div>
				{/if}
				<div class="mt-5">
					<button
						disabled="{isSubmitDisabled}"
						class="button is-primary"
						type="submit">See Customized Portal</button
					>
					<a
						class="button is-link is-light ml-4"
						href="https://your-coaching.prepseed.com/?utm_source=prepseed.com&utm_medium=register&utm_campaign=registration-page&utm_term=skip"
					>
						Skip & View Demo Portal
					</a>
				</div>
			</form>
		{:else}
			<h3 class="title is-3">Your details saved successfully</h3>
			<h4 class="subtitle">
				We will contact you shortly and create your portal.
			</h4>
			<div class="content">
				<p>
					See <a href="{myPortalUrl}" target="_blank"
						>Preview My Portal</a
					> button below to see how your portal will look like.
				</p>
			</div>
			{#if logoUrl}
				<div class="dummy-logo-container mb-4">
					<img
						class="dummy-logo"
						src="{logoUrl}"
						alt="{coachingName}"
					/>
				</div>
			{/if}
			<div class="buttons">
				<a
					class="button is-primary"
					href="{myPortalUrl}"
					target="_blank"
				>
					Preview My Portal
				</a>
				<a
					target="_blank"
					rel="noreferrer noopener"
					href="{whatsAppShareUrl}"
					class="button"
					style="overflow: hidden;background: #fafafa;"
				>
					<img
						src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/whatsapp-grey.png"
						alt="WhatsApp"
						style="height: 46px;margin: -12px;"
					/>Share on WhatsApp</a
				>
				<a href="/contact-us" class="button">Contact Us</a>
			</div>
		{/if}
	</div>
</section>
