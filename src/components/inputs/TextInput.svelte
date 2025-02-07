<style>
.input-root {
	margin-bottom: 24px;
}

.input-container {
	display: flex;
	position: relative;
	padding: 2px;
}
.i {
	height: 50px;
	width: 100%;
	border-radius: 4px;
	border: none;
	padding: 8px 16px;
	outline: none;
	z-index: 3;
	background: transparent;
	box-shadow: none;
	font-size: 16px;
}
.lb {
	z-index: 4;
	position: absolute;
	left: 16px;
	top: 50%;
	margin-top: -11px;
	font-size: 16px;
	color: #707070;
	padding-left: 8px;
	padding-right: 8px;
	margin-left: -8px;
	transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;
	border-radius: 4px;
}
.border {
	position: absolute;
	z-index: 0;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;
	border: solid 1px #dadce0;
	border-radius: 4px;
}

.input-container.is-focused .lb {
	top: 0;
	left: 16px;
	margin-top: -9px;
	margin-left: -10px;
	font-size: 12px;
	font-weight: 400;
	background: #fff;
	color: #1a73e8;
}
.input-container.is-focused .border {
	border-width: 2px;
	border-color: #1a73e8;
}
.has-error .input-container .border {
	border-color: #f44336;
}
.has-error .input-container .lb {
	color: #f44336;
}
.error {
	color: #f44336;
	margin-top: 6px;
	font-size: 14px;
	margin-left: 6px;
}
</style>

<script>
let inputRef;
export let error,
	label,
	name = "",
	type = "text",
	value = "";
let isFocused = false;
$: showError = !!error;
$: viewStyleIsFocused = isFocused || !!value;
const focus = () => {
	inputRef.focus();
};
const handleFocus = () => {
	isFocused = true;
};
const handleBlur = () => {
	isFocused = false;
};
const randomNumber = parseInt(Math.random() * 10000000);
const id = `text_${randomNumber}`;
</script>

<div class="input-root" class:has-error="{showError}">
	<label
		on:click="{focus}"
		class="input-container"
		class:is-focused="{viewStyleIsFocused}"
		for="{id}"
	>
		{#if type === 'email'}
			<input
				id="{id}"
				name="{name}"
				class="i"
				on:focus="{handleFocus}"
				on:blur="{handleBlur}"
				bind:this="{inputRef}"
				type="email"
				bind:value
			/>
		{:else if type === 'password'}
			<input
				id="{id}"
				name="{name}"
				class="i"
				on:focus="{handleFocus}"
				on:blur="{handleBlur}"
				bind:this="{inputRef}"
				type="password"
				bind:value
			/>
		{:else if type === 'text'}
			<input
				id="{id}"
				name="{name}"
				class="i"
				on:focus="{handleFocus}"
				on:blur="{handleBlur}"
				bind:this="{inputRef}"
				type="text"
				bind:value
			/>
		{/if}
		<span class="border"></span>
		<span class="lb">{label}</span>
	</label>
	{#if showError}
		<div class="error">{error}</div>
	{/if}
</div>
