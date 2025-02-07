<style>
.navbar.has-shadow {
	box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
		0 0px 0 1px rgba(10, 10, 10, 0.02);
	box-shadow: 0 1px 6px 0 rgb(32 33 36 / 15%);
}
.navbar.is-fixed-top {
	transition: ease transform 300ms, ease padding 500ms, ease box-shadow 400ms;
}
.hide-above-viewport {
	transform: translateY(-100px);
}
.navbar-burger {
	margin-right: auto;
	margin-left: 0;
}
</style>

<script>
import userStore, { logout, fetchUserInfo } from "../store/user";
import { stores } from "@sapper/app";

const clientsType = ["coaching", "school", "college"];
export let isFixed,
	isRemoved = false;

let user = null,
	profileDropdownRoot,
	isDropdownOpen = false,
	isMenuOpen,
	isPageScrolled = false,
	root;
userStore.subscribe((u) => {
	user = u;
	isDropdownOpen = false;
	if (typeof document !== "undefined") {
		if (!user) {
			document.body.classList.add("has-buttons");
		} else {
			document.body.classList.remove("has-buttons");
		}
	}
});

const { page } = stores();
let loginUrlSuffix = "";
page.subscribe(({ path, host, query }) => {
	const queryString = Object.keys(query)
		.map((key) => `${key}=${query[key]}`)
		.join("&");
	const queryWithQuestionMark = queryString ? `?${queryString}` : "";
	loginUrlSuffix = `?return=${encodeURIComponent(
		`//${host}${path}${queryWithQuestionMark}`
	)}`;
});

function getUserDetail() {
	fetchUserInfo();
}
const handleClickProfileButton = () => {
	isDropdownOpen = !isDropdownOpen;
	isMenuOpen = false;
};

const handleLogout = async () => {
	try {
		await logout();
	} catch (e) {}
};
const detectClickOutside = (e) => {
	if (isDropdownOpen) {
		if (!profileDropdownRoot.contains(e.target)) {
			isDropdownOpen = false;
		}
	}
	if (isMenuOpen) {
		if (root.contains(e.target)) {
			for (
				let target = e.target;
				root.contains(target);
				target = target.parentNode
			) {
				if (["a", "button"].includes(target.tagName.toLowerCase())) {
					isMenuOpen = false;
					break;
				}
			}
		} else {
			isMenuOpen = false;
		}
	}
};
function toggleMenu() {
	isMenuOpen = !isMenuOpen;
	isDropdownOpen = false;
}
function handleWindowScroll() {
	if (isPageScrolled) {
		if (window.scrollY < 5) {
			isPageScrolled = false;
		}
	} else if (window.scrollY > 10) {
		isPageScrolled = true;
	} else {
		isPageScrolled = false;
	}
}

/**
 * Clean up all the class names set to body
 */
function cleanUpBodyClasses() {
	isMenuOpen = false;
	isDropdownOpen = false;
	if (typeof document !== "undefined") {
		document.body.classList.remove(
			"has-navbar-fixed-top",
			"has-navbar-spaced",
			"has-buttons"
		);
		document.documentElement.classList.remove("is-clipped-tablet");
	}
}

/**
 * set up body class names
 * @param isRemoved
 */
function setUpBodyClasses() {
	if (typeof document !== "undefined") {
		document.body.classList.add(
			"has-navbar-fixed-top",
			"has-navbar-spaced"
		);
	}
}

function manageRemovedStateChange(isRemoved) {
	if (isRemoved) {
		cleanUpBodyClasses();
	} else {
		setUpBodyClasses();
	}
}

$: manageRemovedStateChange(isRemoved);

function handleWindowResize() {
	if (isMenuOpen && window.innerWidth >= 1024) {
		isMenuOpen = false;
	}
	if (isDropdownOpen && window.innerWidth < 1024) {
		isDropdownOpen = false;
	}
}

function handleMenuToggle(isOpen) {
	if (typeof document === "undefined") {
		return;
	}
	if (isOpen) {
		document.documentElement.classList.add("is-clipped-tablet");
	} else {
		document.documentElement.classList.remove("is-clipped-tablet");
	}
}

$: handleMenuToggle(isMenuOpen);
</script>

<svelte:window
	on:resize="{handleWindowResize}"
	on:load="{handleWindowScroll}"
	on:scroll="{handleWindowScroll}"
	on:click="{detectClickOutside}"
/>

<nav
	bind:this="{root}"
	use:getUserDetail
	class:is-hidden="{isRemoved}"
	class="navbar is-white"
	class:is-fixed-top="{isFixed}"
	class:is-spaced="{!isPageScrolled}"
	class:has-shadow="{isPageScrolled}"
	class:hide-above-viewport="{false}"
>
	<div class="container is-max-widescreen">
		<div class="navbar-brand">
			<a
				href="/"
				on:click|preventDefault|stopPropagation="{toggleMenu}"
				class="navbar-burger burger"
				class:is-active="{isMenuOpen}"
				aria-label="menu"
				aria-expanded="{isMenuOpen}"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
			<a title="Prepseed" class="navbar-item" href="/">
				<img
					height="48.4"
					width="165"
					src="https://static.prepseed.com/brand/prepseed/prepseed-transparent-landscape.svg"
					alt="Prepseed"
					style="max-height:unset;border-radius: 4px;margin: -10.2px 0"
				/>
			</a>
			{#if user}
				<a
					href="#profile"
					on:click|preventDefault|stopPropagation="{handleClickProfileButton}"
					class="navbar-item is-hidden-desktop"
					style="margin-left:auto"
				>
					<figure class="image" style="width:28px;">
						<img
							style="max-height:none"
							class="is-rounded"
							src="{user.dp}"
							alt="profile"
						/>
					</figure>
				</a>
			{:else}
				<a
					class="navbar-item is-hidden-desktop"
					href="/register"
					style="margin-left:auto">Quick Demo</a
				>
			{/if}
		</div>
		<div class="navbar-menu" class:is-active="{isMenuOpen}">
			<div class="navbar-start">
				<a
					class="navbar-item dropdown is-hoverable cursor-pointer"
					href="/our-clients"
				>
					<div class="dropdown-trigger">
						<span>Our Clients</span>
					</div>
					<!-- <div class="dropdown-menu" role="menu">
						<div class="dropdown-content">
							{#each clientsType as client, i}
								<a
									href="/our-clients?type={client}"
									class="dropdown-item is-capitalized"
								>
									{client}
								</a>
								{#if i !== clientsType.length - 1}
									<hr class="dropdown-divider" />
								{/if}
							{/each}
						</div>
					</div> -->
				</a>
				<a class="navbar-item" href="/success-stories">
					Success Stories
				</a>
				<a class="navbar-item" href="/our-team">Our Team</a>
			</div>
		</div>
	</div>
</nav>
