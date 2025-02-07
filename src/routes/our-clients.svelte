<script>
	import { onMount } from "svelte";
	import AOS from "aos";
	onMount(() => AOS.init());
	import LazyLoadImage from "../components/LazyLoadImage.svelte";
	import clients from "../data/clients";
	import { stores } from "@sapper/app";
	const { page } = stores();
	let type = $page.query.type;
	let coaching = false;
	let school = false;
	let college = false;

	if (type && type !== undefined) {
		switch (type) {
			case "coaching":
				coaching = true;
				break;
			case "school":
				school = true;
				break;
			case "college":
				college = true;
				break;
			default:
				break;
		}
	}

	const filterResults = (clients, coaching, school, college, type) => {
		let result = [];
		if (
			((type && type.trim() === "") || type === undefined) &&
			!coaching &&
			!school &&
			!college
		) {
			result = clients;
		} else if (!coaching && !school && !college) {
			result = clients;
		} else {
			for (let i = 0; i < clients.length; i++) {
				const temp = clients[i];
				if (coaching) {
					if (temp.tags.includes("coaching")) {
						result.push(temp);
					}
				} else if (school) {
					if (temp.tags.includes("school")) {
						result.push(temp);
					}
				} else if (college) {
					if (temp.tags.includes("college")) {
						result.push(temp);
					}
				}
			}
		}
		return result;
	};
	// $: filteredClients = filterResults(clients, coaching, school, college, type);
	let filteredClients = clients;
</script>

<svelte:head>
	<title>Prepseed Clients</title>
</svelte:head>
<section class="section">
	<div class="container is-max-widescreen">
		<h3 class="title">Our Clients</h3>
		<!-- <div class="has-text-centered mb-5">
			<label class="checkbox mr-3">
				<input type="checkbox" bind:checked="{coaching}" /> Coaching
			</label>
			<label class="checkbox mr-3">
				<input type="checkbox" bind:checked="{school}" /> School
			</label>
			<label class="checkbox">
				<input type="checkbox" bind:checked="{college}" /> College
			</label>
		</div> -->

		{#if filteredClients.length == 1}
			<div class="title is-5">Coming Soon...</div>
		{/if}

		<div class="columns is-mobile is-multiline">
			{#each filteredClients as { logo, name, portalUrl, websiteUrl, hide, type }, i}
				{#if !hide}
					<div class="column is-12-mobile is-6-tablet is-4-desktop">
						<a
							href={websiteUrl}
							style="height:100%; text-decoration: none;"
							target="_blank"
							rel="noopener noreferrer"
							data-aos="fade-up"
							data-aos-delay={500}
							data-aos-duration={1000}
						>
							<div
								class="card"
								style="height:100%"
								data-aos="fade-up"
								data-aos-duration={1000}
							>
								<div class="card-header">
									<div
										class="m-5 has-text-centered is-flex is-align-items-center is-justify-content-center"
										style="width:100%;height: 150px"
									>
										<span>
											<LazyLoadImage
												src={logo}
												alt={name}
												style="width:180px; aspect-ratio:3/2; object-fit:contain;"
											/>
										</span>
									</div>
								</div>
								<div class="card-content">
									<div class="title is-4 m-0">
										{name}
									</div>
									<div class="buttons">
										{#if type === "register"}
											<a
												href="/register"
												class="button is-primary mt-3"
											>
												Register Now
											</a>
										{/if}
									</div>
								</div>
							</div>
						</a>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
</style>
