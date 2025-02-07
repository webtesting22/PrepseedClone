<style lang="scss">
.error {
	color: #f44336;
	font-size: 14px;
	margin-left: 4px;
	margin-bottom: 12px;
}
.other-action-container {
	margin-bottom: 16px;
	display: flex;
	justify-content: flex-end;
}
.other-action {
	font-size: 0.9em;
	color: rgb(26, 115, 232);
	border: none;
	background-color: transparent;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
}
</style>

<script>
import TextInput from "./inputs/TextInput.svelte";
import userStore, { fetchUserInfo, signIn, signUp } from "../store/user";
import {
	createTrackButtonWithConfig,
	createTrackEventWithConfig,
	trackEvent,
} from "../utils/analytics";
import { goto, stores } from "@sapper/app";
import { onMount } from "svelte";
const apiBaseUrl = process.env.API_BASE_URL;

export let action = "SIGN_IN";

let email = "",
	password = "",
	error = null,
	showSignUpInsteadButton = false,
	showSignInInsteadButton = false,
	isSubmitting,
	passwordError,
	emailError;

const { page } = stores();

const returnQuery = $page.query.return;
const returnUrl = returnQuery ? encodeURIComponent(returnQuery) : "/";

userStore.subscribe((user) => {
	if (user) {
		goto(decodeURIComponent(returnUrl));
	}
});

const handleError = (e) => {
	if (e.showSignUpInstead) {
		showSignUpInsteadButton = true;
	} else if (e.showSignInInstead) {
		showSignInInsteadButton = true;
	}
	if (e.field === "password") {
		passwordError = e.message;
	} else if (e.field === "email") {
		emailError = e.message;
	} else {
		error = e.message;
	}
};

function cleanUpBeforeSubmit() {
	showSignInInsteadButton = false;
	showSignUpInsteadButton = false;
	error = null;
	passwordError = null;
	emailError = null;
}

function handleSignUp() {
	cleanUpBeforeSubmit();
	return signUp(email, password)
		.then(() => {
			trackEvent("sign_up", { method: "Email" });
		})
		.catch(handleError);
}

function handleSignIn() {
	cleanUpBeforeSubmit();
	return signIn(email, password)
		.then(() => {
			trackEvent("sign_in", { method: "Email" });
		})
		.catch(handleError);
}

const handleSignUpWithGoogle = () => {
	const signInWithGoogleUrl = `${apiBaseUrl}/users/auth/login?return=${window.location.href}&noQueryParams=1`;
	window.location = signInWithGoogleUrl;
};
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
function handleSubmit() {
	if (!email || !email.trim()) {
		handleError({
			message: "Please enter your email address",
			field: "email",
		});
	} else if (!emailRegex.test(email)) {
		handleError({
			message: "Please enter valid email address",
			field: "email",
		});
	} else if (!password || !password.trim()) {
		handleError({
			message: "Please enter your password",
			field: "password",
		});
	} else {
		isSubmitting = true;
		if (action === "SIGN_IN") {
			handleSignIn().finally(() => {
				isSubmitting = false;
			});
		} else {
			handleSignUp().finally(() => {
				isSubmitting = false;
			});
		}
	}
}

$: {
	email;
	cleanUpBeforeSubmit();
}
$: {
	password;
	cleanUpBeforeSubmit();
}

const category = "registration";
const trackSubmit = createTrackEventWithConfig({
	category,
	action: "submit",
	label: "enter",
});
function handleSwitchToSignIn() {
	action = "SIGN_IN";
}
function handleSwitchToSignUp() {
	action = "SIGN_UP";
}

function handleSwitchToSignInAndSubmit() {
	handleSwitchToSignIn();
	handleSignIn();
}
function handleSwitchToSignUpAndSubmit() {
	handleSwitchToSignUp();
	handleSignUp();
}
const trackSignInGoogle = createTrackEventWithConfig({
	category,
	action: "submit",
});

const trackClick = createTrackButtonWithConfig({ category });

onMount(() => {
	fetchUserInfo();
});
</script>

<svelte:head>
	<title>
		{action === "SIGN_IN" ? "Sign In" : "Create account"}
		| Prepseed
	</title>
</svelte:head>
<h1 class="title is-4 has-text-centered mb-6">
	{#if action === "SIGN_IN"}Sign In to Prepseed{:else}Create your account{/if}
</h1>
<form
	on:submit="{trackSubmit}"
	on:submit|preventDefault="{handleSubmit}"
	autoComplete="on"
	class="main-form"
>
	<TextInput
		label="Email"
		name="email"
		bind:value="{email}"
		error="{emailError}"
	/>
	<TextInput
		label="Password"
		type="password"
		name="password"
		bind:value="{password}"
		error="{passwordError}"
	/>
	{#if error}
		<div class="error">{error}</div>
	{/if}
	{#if showSignUpInsteadButton}
		<div class="other-action-container">
			<button
				type="button"
				class="other-action"
				on:click="{trackClick}"
				on:click="{handleSwitchToSignUpAndSubmit}"
			>
				Create account instead?
			</button>
		</div>
	{/if}
	{#if showSignInInsteadButton}
		<div class="other-action-container">
			<button
				type="button"
				class="other-action"
				on:click="{trackClick}"
				on:click="{handleSwitchToSignInAndSubmit}"
			>
				Sign In instead?
			</button>
		</div>
	{/if}
	{#if action === "SIGN_IN"}
		<button
			disabled="{isSubmitting}"
			class="button is-primary is-fullwidth"
			type="submit"
		>
			{isSubmitting ? "Signing In..." : "Sign In"}
		</button>
	{/if}
	{#if action === "SIGN_UP"}
		<button
			disabled="{isSubmitting}"
			class="button is-primary is-fullwidth"
			type="submit"
		>
			{isSubmitting ? "Signing Up..." : "Sign Up"}
		</button>
	{/if}
</form>

<hr />
<div class="buttons">
	<button
		type="button"
		class="button is-outlined is-fullwidth is-hidden"
		on:click="{trackSignInGoogle}"
		on:click="{handleSignUpWithGoogle}"
	>
		<img
			alt="Google Logo"
			src="https://static.prepleaf.com/homepage/icons/google.svg"
			style="width:24px"
		/>
		<span class="ml-2">Continue with Google</span>
	</button>
	{#if action === "SIGN_IN"}
		<a
			on:click="{handleSwitchToSignUp}"
			href="/create-account?return={returnUrl}"
			class="button is-outlined is-fullwidth"
		>
			<span class="ml-2">Create new account</span>
		</a>
	{:else}
		<a
			on:click="{handleSwitchToSignIn}"
			href="/sign-in?return={returnUrl}"
			class="button is-outlined is-fullwidth"
		>
			<span class="ml-2">Sign In</span>
		</a>
	{/if}
</div>
