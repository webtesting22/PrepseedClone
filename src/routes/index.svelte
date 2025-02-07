<script>
	import { onMount } from "svelte";
	import AOS from "aos";
	onMount(() => AOS.init());
	const iitKanpur = {
		"@type": "CollegeOrUniversity",
		name: "Indian Institute of Technology Kanpur",
		url: "https://iitk.ac.in",
		sameAs: "https://en.wikipedia.org/wiki/Indian_Institute_of_Technology_Kanpur",
	};
	const jsonLd = {
		"@context": "http://schema.org",
		"@type": "Organization",
		name: "Prepseed",
		description: whatIsPrepseed,
		url: "https://www.prepseed.com",
		logo: "https://static.prepseed.com/brand/prepseed/landscape-300.png",
		image: "https://static.prepseed.com/brand/prepseed/Prepseed_Logo_Landscape.png",
		legalName: "MarksEasy Preparation Private Limited",
		telephone: "+91-9913382221",
		email: "help@prepseed.com",
		foundingDate: "2020",
		contactPoint: [
			{
				"@type": "ContactPoint",
				url: "https://www.prepseed.com/contact-us",
				email: "help@prepseed.com",
				telephone: "+91-9913382221",
				contactType: "customer support",
				availableLanguage: ["English", "Hindi"],
			},
		],
		sameAs: [
			"https://www.facebook.com/prepseed",
			// "https://twitter.com/Prepseed",
			"https://instagram.com/prepseedportal",
			"https://play.google.com/store/apps/developer?id=Prepseed",
		],
	};

	import TextSlider from "../components/TextSlider.svelte";
	import LazyLoadImage from "../components/LazyLoadImage.svelte";
	import PopularCourses from "../components/PopularCourses.svelte";
	import { metaDescription, title, whatIsPrepseed } from "../data/about";
	import { createTrackButtonWithConfig } from "../utils/analytics";
	import AppQrCode from "../components/AppQRCode.svelte";
	import ImageSlider from "../components/ImageSlider.svelte";
	let img1 = "../components/logo_yourstory_new.jpg";

	const device = process.env.DEVICE;
	const isFirstPageImageHidden = device !== "desktop";
	onMount(() => {
		const jsonLdElem = document.createElement("script");
		const type = "application/ld+json";
		jsonLdElem.setAttribute("type", type);
		jsonLdElem.innerHTML = JSON.stringify(jsonLd);
		document.head.append(jsonLdElem);
	});

	const ourStats = [
		[
			{
				size: 7,
				number: "300,000+",
				title: "Questions",
				icon: "https://static.prepleaf.com/homepage/icons/questions.svg",
			},
			{
				size: 5,
				number: "2,50,000+",
				title: "Total users",
				icon: "https://static.prepleaf.com/homepage/icons/all-users.png",
			},
		],
		[
			{
				size: 5,
				icon: "https://static.prepleaf.com/homepage/icons/active-users.png",
				number: "60,000+",
				title: "Active users",
			},
			{
				icon: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/UD1zMSPMtPH0bzDgcWMZ/icons8-play-store.png",
				number: "Prepseed",
				title: "Now Available on iOS and Play Store",
				size: 7,
			},
		],
	];
	const keyPoints = [
		{
			image: "https://static.prepseed.com/graphics/chat-bot.svg",
			title: "AI based recommendations",
			description:
				"Improve your academic knowledge and behavioral indices like stamina, speed , selectivity and many more through AI based smart practice",
		},
		{
			image: "https://static.prepseed.com/graphics/online-test.svg",
			title: "Practice anytime, anywhere",
			description:
				"Customize your practice on the basis of your weak/strong topics and compete through live and mock test with detailed personalized report",
		},
		{
			image: "https://static.prepseed.com/graphics/to-do-list.svg",
			title: "Customisable CRM, ERP & LMS ",
			description:
				"Customise features you want as per your requirement to feel more confortable with our CRM, ERP and LMS solution.",
		},
	];
	let currentIndex = 0;
	const cardWidth = 100 / 3; // Number of cards to display per slide
	const autoplayInterval = 2000;

	function nextSlide() {
		currentIndex = (currentIndex + 1) % lines.length;
		updateSliderPosition();
	}

	function updateSliderPosition() {
		const slider = document.querySelector(".slider");
		const cardCount = getCardCount();
		const offset = -currentIndex * (100 / cardCount); // Calculate the offset based on the number of cards
		slider.style.transform = `translateX(${offset}%)`;
	}
	function getCardCount() {
		const screenWidth = window.innerWidth;
		if (screenWidth >= 768) {
			// Show 3 cards on screens wider than or equal to 768px (tablets and desktops)
			return 3;
		} else {
			// Show 1 card on screens narrower than 768px (mobile)
			return 1;
		}
	}
	const startAutoplay = () => {
		setInterval(nextSlide, autoplayInterval);
	};

	onMount(startAutoplay);
	const lines = [[], [], [], [], [], [], []];
	function prevSlide() {
		currentIndex = currentIndex === 0 ? lines.length - 1 : currentIndex - 1;
		updateSliderPosition();
	}
</script>

<svelte:head>
	<title>{title} | Prepseed</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:type" content="website" />
	<meta
		property="og:image"
		content="https://static.prepseed.com/brand/prepseed/Prepseed%20Logo_Brandmark-500.png"
	/>
	<meta name="og:url" content="https://www.prepseed.com" />
	<link rel="canonical" href="https://www.prepseed.com" />
</svelte:head>

<section class="section py-5">
	<div class="container is-max-widescreen">
		<div class="columns is-vcentered is-desktop">
			<div class="column">
				<TextSlider />

				<h5
					class="block title is-size-5 is-size-6-mobile mb-3"
					style="color:hsl(0, 0%, 38%)"
				>
					Plant a seed towards your future
				</h5>
			</div>
			{#if !isFirstPageImageHidden}
				<div class="column is-hidden-touch">
					<div class="has-text-right has-text-left-touch pl-6">
						<div class="has-text-left">
							<div class="image-list">
								<div class="image-list-container">
									<div class="image-list-animator">
										<div class="image-list-item">
											<div
												class="image-list-item-container"
											>
												<ImageSlider />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<section class="section py-0">
	<div class="container is-max-widescreen">
		<div class="mb-5">
			<div class="mb-3">
				<h1 class="title">What we provide?</h1>
			</div>
			<PopularCourses />
		</div>
	</div>
</section>
<!-- <section class="section pt-0">
	<div class="container is-max-widescreen">
		<div class="columns is-multiline">
			{#each keyPoints as keyPoint}
				<div
					class="column is-4-desktop is-6-tablet"
					data-aos="fade-right"
					data-aos-delay="{500}"
					data-aos-duration="{1000}"
				>
					<div
						class="card-image pb-0"
						style="max-width: 350px;margin:auto;"
					>
						<figure class="image is-4by3">
							<img src="{keyPoint.image}" alt="" />
						</figure>
					</div>
					<div class="px-2 py-2">
						<div class="title is-4 mb-2">{keyPoint.title}</div>
						<div>{keyPoint.description}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section> -->
<section class="section">
	<div class="container is-max-widescreen">
		<div class="pb-6">
			<div class="columns is-vcentered">
				<!-- <div class="column">
					<div class="">
						<div
							style="max-width: 390px;"
							class="has-text-left is-inline-block"
						>
							<h1
								class="title is-2 mb-3"
								data-aos="fade-right"
								data-aos-delay="{200}"
								data-aos-duration="{1000}"
							>
								Test your knowledge with engaging questions
							</h1>
						</div>
					</div>
				</div> -->

				<div class="column">
					<div
						class="tile is-ancestor is-vertical"
						data-aos="zoom-in"
						data-aos-duration={400}
					>
						{#each ourStats as group, groupIndex}
							<div class="tile">
								{#each group as item, itemIndex}
									<div
										class="tile is-parent {item.size
											? `is-${item.size}`
											: ''}"
									>
										<div
											class="tile is-child box is-relative"
										>
											<div
												class="title is-4"
												data-aos="zoom-out"
												data-aos-duration={1200}
											>
												{item.number}
											</div>
											<div
												class="is-size-6"
												data-aos="fade-left"
												data-aos-duration={1200}
											>
												{item.title}
											</div>
											{#if groupIndex === 1 && itemIndex === 1}
												<figure
													class="image-wrapper image is-64x64"
													id="Imageset"
												>
												<!-- <a href="https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"> -->
													<img
														src={item.icon}
														alt="Enterprise Icon"
														class="small-icon"
													/>
												<!-- </a>
												<a href="https://apps.apple.com/in/app/prepseed/id6446019913"> -->
													<img
														src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/1DIs8KuonqD5A8zQVqiA/icons8-app-store-480.png"
														alt="Second Icon"
														class="small-icon"
													/>
												<!-- </a> -->
												</figure>
											{:else}
												<figure
													class="image is-64x64"
													style="position: absolute;bottom: 0;right: 0;"
												>
													<LazyLoadImage
														role="presentation"
														height="64"
														width="64"
														src={item.icon}
													/>
												</figure>
											{/if}
										</div>
									</div>
								{/each}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section">
	<div class="slider-container">
		<div class="mb-6">
			<h4 class="title is-2 has-text-centered">
				Discover What's Happening
			</h4>
			<p class="has-text-centered px-3">
				Explore our dynamic news hub for the latest updates, and
				insights about our company. Stay informed and connected with our
				industry-leading developments.
			</p>
		</div>
		<div class="slider">
			{#each lines as line, lineIndex}
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://yourstory.com/2023/01/ahmedabad-based-ai-enabled-ed-tech-start-up-prepse"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://images.yourstory.com/assets/logos/logo_yourstory_new.svg"
									alt="Your Story Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://theprint.in/ani-press-releases/ahmedabad-based-ai-enabled-ed-tech-start-up-prepseed-com-secures-funding/1325265/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://static.theprint.in/wp-content/uploads/2022/01/logo_800x149_transp-11.png?compress=true&quality=80&w=300&dpr=1"
									alt="The Print Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://indianstartupnews.com/news/edtech-startup-prepseed-raises-rs-2cr-from-a-chiripal-group-of-companies/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://img-cdn.thepublive.com/fit-in/360x160/filters:format(webp)/indianstartupnews/media/agency_attachments/s1FnhAYONODoxNkoC8xA.png"
									alt="Indian Startup News Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://timesofindia.indiatimes.com/business/india-business/ai-enabled-ed-tech-startup-raises-rs-2-crore/articleshow/97184949.cms"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://static.toiimg.com/photo/92222747.cms"
									alt="The Times of India Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://www.financialexpress.com/jobs-career/education-ed-tech-start-up-prepseed-funding-2955413/"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://www.financialexpress.com/wp-content/themes/ie-network-theme/assets/src/img/logo/financialexpress.svg"
									alt="The Financial Express Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://www.business-standard.com/content/press-releases-ani/ahmedabad-based-ai-enabled-ed-tech-start-up-prepseed-com-secures-funding-123012000552_1.html"
								target="_blank"
								rel="noreferrer"
							>
								<img
									src="https://bsmedia.business-standard.com/include/_mod/site/html5/images/business-standard-logo.png"
									alt="The Business Standerd Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="card card-override">
					<div class="p">
						<div class="card-image">
							<!-- Replace 'image_url' with the actual image URL -->
							<a
								href="https://ahmedabadmirror.com/ahmedabad-based-ai-enabled-ed-tech-start-up-prepseedcom-secures-funding/81850266.html"
							>
								<img
									src="https://static-prepseed.s3.ap-south-1.amazonaws.com/extra/am-logo.png"
									alt="Ahmedabad Mirror Article | Prepseed"
								/>
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
<section class="section px-2 py-0 is-hidden-desktop">
	<div class="container is-max-widescreen">
		<div
			style="max-height:250px;overflow:hidden;"
			class="is-flex is-justify-content-center"
		>
			<LazyLoadImage
				style="max-width: 200px"
				src={[
					{
						type: "image/png",
						url: "//static.prepseed.com/graphics/app-screenshots/start-practice_oneplus-oneplus8pro-portrait-sd.png",
					},
				]}
			/>
		</div>
		<div class="card">
			<div class="card-content p-4">
				<div class="">
					<h3 class="title has-text-centered is-4 mb-2">
						Get the Prepseed Demo app
					</h3>
					<h4
						class="is-size-6 has-text-centered has-text-grey-darker"
					>
						Practice questions anytime, anywhere with Prepseed app
					</h4>
					<div
						class="is-flex is-flex-direction-column is-justify-content-center
            is-align-items-center is-flex-wrap-wrap"
					>
						<a
							href="https://play.google.com/store/apps/details?id=com.prepseed.dashboard.preparation"
							target="_blank"
						>
							<LazyLoadImage
								alt="Get it on Google Play"
								height="72"
								width="186"
								style="height: 72px;width:186px;min-height:72px;"
								src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
							/>
						</a>
						<span class="my-4" style="">
							<AppQrCode size={162} />
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <section class="section is-hidden-touch">
	<div class="container is-max-widescreen">
		<div class="py-6">
			<div
				class="card"
				data-aos="zoom-in"
				data-aos-delay="{0}"
				data-aos-duration="{500}"
			>
				<div class="card-content">
					<div class="columns mb-2">
						<div
							class="column is-5-desktop is-12-touch is-flex
              is-flex-direction-column is-justify-content-center"
						>
							<div class="px-6 py-2">
								<h3
									class="title is-2"
									data-aos="fade-right"
									data-aos-delay="{500}"
									data-aos-duration="{1000}"
								>
									Get the Prepseed
									<br />
									Demo app
								</h3>
								<h4
									class="is-size-5 has-text-grey-darker"
									data-aos="fade-right"
									data-aos-delay="{800}"
									data-aos-duration="{1000}"
								>
									Practice questions anytime, anywhere with
									Prepseed app
								</h4>
								<div
									class="is-flex is-align-items-center is-flex-wrap-wrap"
								>
									<a
										href="https://play.google.com/store/apps/details?id=com.prepseed&hl=en-IN"
										target="_blank"
										data-aos="zoom-out"
										data-aos-delay="{1200}"
										data-aos-duration="{1000}"
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
										data-aos-delay="{1200}"
										data-aos-duration="{1000}"
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
						<div
							class="column is-7-desktop is-hidden-touch"
							style="overflow:hidden;min-height: inherit"
						>
							<div style="position: relative;">
								<div
									style="max-height:400px;overflow:hidden;position:
                  absolute;right:0px;top: 179px;z-index:1;"
									data-aos="zoom-out"
									data-aos-delay="{1800}"
									data-aos-duration="{1000}"
								>
									<LazyLoadImage
										style="max-width: 300px"
										src="{[
											{
												type: 'image/png',
												url: '//static.prepseed.com/graphics/app-screenshots/start-practice_oneplus-oneplus8pro-portrait-sd.png',
											},
										]}"
									/>
								</div>
								<div
									style="max-height:500px;overflow:hidden;position:
                  absolute;right: 200px;top:32px"
									data-aos="zoom-out"
									data-aos-delay="{1800}"
									data-aos-duration="{1000}"
								>
									<LazyLoadImage
										style="max-width: 340px"
										src="{[
											{
												type: 'image/png',
												url: '//static.prepseed.com/graphics/app-screenshots/practice-session_google-pixel4-justblack-portrait-sd.png',
											},
										]}"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->
<div class="py-6"></div>

<style lang="scss">
	.image-list {
		padding-top: 100%;
		position: relative;
		&-container {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			overflow: hidden;
		}
		&-animator {
			position: relative;
			animation: 6000ms ease-in-out 3000ms infinite normal none running;
			// animation-name: slide;
		}
		&-item {
			position: relative;
			padding-top: 100%;

			&-container {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				align-items: stretch;
			}
		}
	}
	/* Add this CSS below your existing styles */
	.slider-container {
		overflow: hidden;
		width: 100%;
		max-width: 1200px; /* Adjust as needed */
		margin: 0 auto;
	}

	.slider {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.card {
		flex: 0 0 33.33%; /* Each card takes up 33.33% width (3 cards) */
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.card-override {
		box-shadow: none !important;
	}

	.card .p {
		padding: 10px 20px;
		height: 100%;
		margin: 10px;

		border-radius: 5px;
	}
	@media screen and (max-width: 767px) {
		/* Adjust card layout for screens narrower than 768px (mobile) */
		.card {
			flex: 0 0 100%; /* Show 1 card per row on mobile screens */
			margin-right: 0; /* Remove margin on mobile */
		}
	}

	.card:last-child {
		margin-right: 0; /* Remove margin from the last card */
	}

	.card-image {
		overflow: hidden;
		max-height: 600px;
		text-align: center;
	}

	.card-image img {
		aspect-ratio: 3/2;
		height: 100%;
		width: 50%;
		object-fit: contain;
		background-size: cover;
	}

	.card_content {
		text-align: center;
		height: auto;
		padding: 20px 10px;
	}
	.card_content h1 {
		text-align: center;
		font-size: 1rem;
		font-weight: bold;
		text-transform: Uppercase;
	}
	.card_content a {
		position: absolute;
		bottom: 7%;
		left: 38%;
		background-color: black; /* Customize button color */
		color: #fff; /* Customize button text color */
		border: none;
		padding: 7px 10px;
		border-radius: 2px;
		cursor: pointer;
		width: 100px;
	}
	.card_content .Date {
		font-weight: 600;
		text-align: left;
		font-size: 14px;
		opacity: 0.6;
		margin: 20px 20px;
	}
	/* Add any additional styles you need */
	/* Add this CSS below your existing styles */
	.slider-control {
		background-color: black; /* Customize button color */
		color: #fff; /* Customize button text color */
		border: none;
		border-radius: 2px;
		padding: 10px 15px;
		cursor: pointer;
		width: 60px;
		margin-top: 10px; /* Adjust button spacing */
	}
	.slider-control:hover {
		background-color: #09152c; /* Customize button color */
		color: #fff; /* Customize button text color */
		border: none;
		border-radius: 2px;
		padding: 10px 15px;
		cursor: pointer;
		width: 60px;
		margin-top: 10px; /* Adjust button spacing */
	}

	.slider-control.prev {
		margin-right: 10px; /* Adjust spacing between buttons */
	}
	.carousal_buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}

	#Imageset{
		position: absolute;
		right: 65px;
		bottom: 0px;
		display: flex;
	}

	@media (max-width:900px){
		#Imageset{
		position: static;
		right: 65px;
		bottom: 0px;
		display: flex;
		justify-content: end;
		width: 100%;
	}
	#Imageset img{
		width: unset;
		height: unset;
	}
	}
</style>
