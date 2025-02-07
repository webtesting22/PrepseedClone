<script>
import TextInput from "../components/inputs/TextInput.svelte";
import { goto } from "@sapper/app";
import { stores } from "@sapper/app";
import { resetPassword } from "../api/users";
let error,
	isNetworkError,
	password = "",
	passwordError,
	rePassword = "",
	rePasswordError,
	isUpdating,
	isUpdated;
function clearErrors() {
	error = null;
	passwordError = null;
	rePasswordError = null;
	isNetworkError = false;
}

$: {
	password;
	rePassword;
	clearErrors();
}

function handleSubmit() {
	if (password.length < 6) {
		passwordError = "Password should be at least 6 characters";
		return;
	}
	if (password !== rePassword) {
		rePasswordError = "Passwords do not match";
		return;
	}
	isUpdating = true;
	resetPassword(password, token)
		.error(422, (e) => {
			if (e.json.error.code === "auth/token-expired") {
				error = "This link is either invalid or the token has expired.";
			} else {
				error = "Unknown error occurred. Please try again.";
			}
		})
		.error(500, (e) => {
			error = "Internal Server Error. Please try again.";
		})
		.fetchError((e) => {
			error = "Network error occurred. Please try again.";
			isNetworkError = true;
		})
		.json(() => {
			isUpdated = true;
			setTimeout(() => {
				if (typeof redirectUrl !== "string" || !redirectUrl) {
					goto("/");
				} else if (redirectUrl.indexOf("://") === -1) {
					goto(redirectUrl);
				} else {
					window.location = redirectUrl;
				}
			}, 5000);
		})
		.finally(() => {
			isUpdating = false;
		});
}
const { page } = stores();
let token = $page.query.token;
let redirectUrl = $page.query.r || `//${$page.host}`;
</script>

<section class="section">
	<div class="container is-max-desktop" style="max-width:600px">
		<div class="is-flex is-justify-content-center mb-4">
			<a href="/">
				<img
					src="https://static.prepseed.com/brand/prepseed/landscape.svg"
					height="48"
					width="163"
					alt=""
					style="height:48px"
				/>
			</a>
		</div>
		{#if isUpdated}
			<h3 class="is-size-5 has-text-success has-text-centered">
				Password updated successfully
			</h3>
		{:else}
			<form class="box" on:submit|preventDefault="{handleSubmit}">
				<h3 class="title is-4">Reset your password</h3>
				<TextInput
					name="password"
					label="New Password"
					bind:value="{password}"
					type="password"
					error="{passwordError}"
				/>
				<TextInput
					name="re-password"
					label="Confirm Password"
					bind:value="{rePassword}"
					type="password"
					error="{rePasswordError}"
				/>
				{#if error}
					<div class="has-text-danger mb-2">{error}</div>
				{/if}
				<button
					disabled="{(error && !isNetworkError) ||
						passwordError ||
						rePasswordError ||
						isUpdating}"
					class="button is-primary"
					type="submit">Update Password</button
				>
			</form>
		{/if}
	</div>
</section>
