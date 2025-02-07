<script>
	import LazyLoadImage from "./LazyLoadImage.svelte";
	import {
		createTrackButtonWithConfig,
		trackEvent,
	} from "../utils/analytics";
	import QrCode from "./AppQRCode.svelte";
	import clients from "../data/clients";

	// const filteredClients = clients.filter((c) => c.type !== "register" && !c.hide);
	const filteredClients = clients.slice(0, 8);

	const halfClients = Math.ceil(filteredClients.length / 2);
	// const halfClients=Math.ceil(filteredClients.length/1);
	const clientColumns = [
		filteredClients.slice(0, halfClients),
		filteredClients.slice(halfClients),
	];

	const facebookIcon = "//static.prepleaf.com/homepage/icons/facebook.svg";
	const instagramIcon = "//static.prepleaf.com/homepage/icons/instagram.svg";
	const linkedInIcon = "//static.prepleaf.com/homepage/icons/linkedin.svg";
	const twitterIcon = "//static.prepleaf.com/homepage/icons/twitter.svg";
	const youTubeIcon = "//static.prepleaf.com/homepage/icons/youtube.svg";

	const trackButton = createTrackButtonWithConfig({
		category: "footer-link",
		action: "click-footer-link",
	});

	const socialMediaLinks = [
		{
			i: facebookIcon,
			n: "Facebook",
			u: "//facebook.com/prepseed",
		},
		{
			i: linkedInIcon,
			n: "LinkedIn",
			u: "//linkedin.com/company/prepseed",
			h: false,
		},
		{
			h: false,
			i: youTubeIcon,
			n: "YouTube",
			u: "//www.youtube.com/channel/UClDNIqiEgobCNdKTu-NWo3Q",
		},
		{
			h: true,
			i: twitterIcon,
			n: "Twitter",
			u: "//twitter.com/prepseed",
		},
		{
			i: instagramIcon,
			n: "Instagram",
			u: "//instagram.com/prepseedportal",
		},
	];

	function onIntersection(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				trackEvent("view", {
					non_intersection: true,
					event_label: "Scrolled Into View",
					event_category: "footer",
				});
			}
		});
	}

	function intersectionObserver(node) {
		let options = {
			rootMargin: "0px",
			threshold: 1.0,
		};

		let observer = new IntersectionObserver(onIntersection, options);
		observer.observe(node);

		return {
			destroy: () => observer.disconnect(),
		};
	}
	const contactNumber = "+91-99133-82221";
	const contactEmail = "vivek@prepseed.com";
</script>

<footer use:intersectionObserver class="footer">
	<div class="container is-max-widescreen">
		<div class="social level px-0 py-5">
			<div class="is-size-6 mr-4 is-hidden-touch level-item">
				Follow us on:
			</div>
			<div
				class="level-item is-display-flex"
				style="width: 100%; justify-content: flex-start"
			>
				{#each socialMediaLinks as { i, u, n, h }}
					{#if !h}
						<a
							on:click={trackButton}
							rel="noopener noreferrer"
							target="_blank"
							aria-label={n}
							data-g-label={n}
							class="mr-2 is-inline-flex p-2"
							href={u}
						>
							<LazyLoadImage width="24" height="24" src={i} />
						</a>
					{/if}
				{/each}
			</div>
		</div>
		<div class="columns main is-multiline">
			<div class="column is-6-tablet is-3-desktop">
				<h2 class="title is-5">Company</h2>
				<ul class="links-list">
					<li class="is-hidden">
						<a href="/about-us" on:click={trackButton}>
							About Us
						</a>
					</li>
					<li>
						<a href="/our-team" on:click={trackButton}>
							Our Team
						</a>
					</li>
					<li>
						<a href="/success-stories" on:click={trackButton}>
							Success Stories
						</a>
					</li>
					<!-- <li>
						<a href="/contact-us" on:click={trackButton}>
							Contact Us
						</a>
					</li> -->
				</ul>
			</div>
			<div class="column is-12-tablet is-6-desktop is-hidden-mobile">
				<div class="columns">
					<div
						class="ContactInfomation column is-6-tablet is-6-desktop"
					>
						<h2 class="title is-5">
							<a style="color:inherit; " href="/contact-us"
								>Contact Us</a>
						</h2>
						<div class="is-size-5">
							<!-- <div class="is-flex"> -->
							<div>
								<span
									style="min-width:0px;text-align:right;margin-right:.1rem; font-size: 1rem;"
									>Call Us:</span
								>
								<a href="tel:+91{contactNumber}" style="font-size: 1rem; color:hsl(0, 0%, 29%);"
									>{contactNumber}</a>
							</div>
							<!-- </div> -->
							<!-- <div class="is-flex"> -->
							<div>
								<span
									style="min-width:0px;text-align:right;margin-right:.1rem; font-size: 1rem;"
									>Email Us:</span
								>
								<a href="mailto:{contactEmail}" style="font-size: 1rem; color:hsl(0, 0%, 29%);"
									>{contactEmail}</a>
							</div>
							<!-- </div> -->
						</div>
					</div>
					<!-- {#each clientColumns as clients, index}
						<div class="column is-6-tablet is-6-desktop">
							<h2
								class="title is-5"
								class:is-hidden-mobile="{index !== 0}"
								class:is-invisible="{index !== 0}"
							>
								<a style="color:inherit" href="/our-clients"
									>Our Clients</a
								>
							</h2>
							<ul class="links-list">
								{#each clients.slice(0, 4) as { name, hide, type, portalUrl, websiteUrl }}
									{#if !hide && type !== "register"}
										<li>
											<a
												on:click="{trackButton}"
												href="{websiteUrl || portalUrl}"
												target="_blank"
												rel="noopener noreferrer"
											>
												{name}
											</a>
										</li>
									{/if}
								{/each}
							</ul>
						</div>
					{/each} -->
				</div>

				<!-- <a style="color:inherit" class="button" href="/our-clients">
									View More
								</a> -->
			</div>
			<!-- <div class="column is-hidden-tablet">
				<h2 class="title is-5">
					Our Clients
					<a href="/our-clients">View All</a>
				</h2>
				<ul class="links-list">
					{#each clientColumns as clients}
						{#each clients as { name, hide, type, portalUrl, websiteUrl }}
							{#if !hide && type !== "register"}
								<li>
									<a
										on:click={trackButton}
										href={websiteUrl || portalUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										{name}
									</a>
								</li>
							{/if}
						{/each}
					{/each}
				</ul>
			</div> -->
			<div class="column is-6-tablet is-3-desktop">
				<div
					class="is-flex is-flex-direction-column is-align-items-flex-start is-flex-wrap-wrap"
				>
					<a
						href="https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
						target="_blank"
						data-aos="zoom-out"
						data-aos-duration={500}
					>
						<LazyLoadImage
							alt="Get it on Google Play Store | Prepseed"
							style="width:190px;"
							src="https://static-prepseed.s3.ap-south-1.amazonaws.com/extra/download-play-store.png"
						/>
					</a>
					<a
						href="https://apps.apple.com/in/app/prepseed/id6446019913"
						target="_blank"
						data-aos="zoom-out"
						data-aos-duration={500}
					>
						<LazyLoadImage
							alt="Get it on Apple App Store | Prepseed"
							style="width:190px;"
							src="https://static-prepseed.s3.ap-south-1.amazonaws.com/extra/download-app-store.png"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="foot px-0 py-5">
			<a
				href="/"
				on:click={trackButton}
				title="Prepseed"
				class="brand-container mr-6"
			>
				<img
					alt="Prepseed"
					height="44"
					width="150"
					class="brand"
					src="https://static.prepseed.com/brand/prepseed/prepseed-transparent-landscape.svg"
				/>
			</a>
			<div>
				<a href="/policy" on:click={trackButton} class="mr-4">
					Privacy Policy
				</a>
				<a href="/terms" on:click={trackButton} class="mr-4">
					Terms of Use
				</a>
				<a
					href="/refund-and-cancellation-policy"
					on:click={trackButton}
					class="mr-4"
				>
					Refund & Cancellation Policy
				</a>
				<a href="/faq" on:click={trackButton} class="mr-4">FAQ</a>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	.social {
		border-bottom: solid 1px #dadce0;
		display: flex;
	}

	.links-list {
		list-style: none;
		li {
			margin-bottom: 12px;
		}
		a {
			color: inherit;
			&:hover {
				color: #000;
			}
		}
	}
	.ReadMorebtn {
		background-color: transparent;
		border: 1px solid gray;
		padding: 5px 10px;
		border-radius: 5px;
	}
	.foot {
		border-top: solid 1px #dadce0;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-items: flex-start;
		.brand-container {
			margin-bottom: 0.5rem;
		}
		@media screen and (min-width: 600px) {
			flex-direction: row;
			align-items: center;
			.brand-container {
				margin-bottom: 0;
			}
		}
		a {
			color: inherit;
			&:hover {
				color: #000;
			}
		}
	}
</style>
