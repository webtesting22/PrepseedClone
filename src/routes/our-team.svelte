<script>
import LazyLoadImage from "../components/LazyLoadImage.svelte";

const ceo = {
	name: "Vivek Kankaria",
	designation: "CEO | Co-founder",
	avatar: [
		{
			type: "image/webp",
			url: "https://accomation.s3.ap-south-1.amazonaws.com/366819962_6474395622607799_2222733637447650145_n.jpg",
		},
		{
			type: "image/jpg",
			url: "https://static.prepseed.com/team/vivek-kankaria-1.jpg",
		},
	],
	descrption: "",
	linkedIn: "https://www.linkedin.com/in/vivek-kankaria",
	qaulification: [
		// "B.S. Computer Science, Indiana University, Bloomington",
		// "B.A. Statistical Economics, Indiana University, Bloomington",
		// "Business Foundation Certificate, Kelly School of Business",
	],
	extra: ["Co-founder at OutLead Solutions"],
};

const members = [
	{
		name: "Vinay Kankaria",
		designation: "Investor & Director",
		avatar: "https://static.prepseed.com/team/vinay-kankaria.jpg",
		linkedIn: "https://www.linkedin.com/in/vinay-kankaria-a4a8a05/",
	},
	{
		name: "Vansh Chiripal",
		designation: "Investor & Director",
		linkedIn: "https://in.linkedin.com/in/vansh-chiripal/",
		avatar: [
			{
				type: "image/jpg",
				url: "https://accomation.s3.ap-south-1.amazonaws.com/1662403444074.jpg",
			},
		],
	},
	/* {
      name: "Amit Saharan",
      designation: "Founding Shareholder",
      linkedIn: "//linkedin.com/in/asaharan",
      avatar: [
        {
          type: "image/webp",
          url: "https://static.prepseed.com/team/amit-saharan.webp",
        },
        {
          type: "image/jpeg",
          url: "https://static.prepseed.com/team/amit-saharan.jpg",
        },
      ],
    },
    {
      name: "Aman Singhal",
      designation: "Founding Shareholder",
      linkedIn: "https://www.linkedin.com/in/singhal07/",
      avatar: [
        {
          type: "image/webp",
          url: "https://static.prepleaf.com/homepage/team/aman.webp",
        },
        {
          type: "image/png",
          url: "https://static.prepleaf.com/homepage/team/aman.png",
        },
      ],
    }, */
];
</script>

<svelte:head>
	<title>Meet our team</title>
</svelte:head>

<section class="section">
	<div class="container is-max-widescreen">
		<div class="title has-text-centered mb-6">Meet Our Team</div>

		<div class="columns is-multiline is-mobile p-0 mb-6">
			<div
				class="column is-full-mobile is-full-tablet
        is-offset-one-quarter-desktop is-half-desktop has-text-centered v-center
        bg-navy p-5 rounded-3"
				data-aos="fade-up"
				data-aos-delay="{200}"
				data-aos-duration="{1000}"
			>
				<div class="w-100 has-text-white">
					<div class="container has-text-centered ceo-photo">
						<figure
							class="image is-1by1 has-background-primary-light"
							style="overflow:hidden;border-radius:50%"
						>
							<LazyLoadImage src="{ceo.avatar}" />
						</figure>
					</div>
					<div class="title has-text-white is-3 mb-1 mt-2">
						{ceo.name}
					</div>
					<div class="title is-5 mb-2 has-text-white">
						{ceo.designation}
					</div>
					<div class="mb-2">
						{#each ceo.qaulification as q, i}
							<div class="mb-1 has-text-weight-semibold">
								- {q}
							</div>
						{/each}
					</div>
					<div class="mb-3">
						{#each ceo.extra as e, i}
							<div class="mb-1 has-text-weight-semibold">
								- {e}
							</div>
						{/each}
					</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer"
							href="{ceo.linkedIn}"
							class="is-flex is-align-items-center is-justify-content-center"
						>
							<img
								src="//static.prepseed.com/icons/linkedin-white.png"
								alt="linkedin"
								style="width:24px"
							/>
							<span
								class="ml-1 has-text-weight-semibold has-text-white"
							>
								LinkedIn
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="columns is-multiline is-mobile is-justify-content-center">
			{#each members as { name, designation, avatar, linkedIn }, index}
				<div
					class="column is-half-mobile is-half-tablet is-one-quarter-desktop
          has-text-centered"
					data-aos="fade-up"
					data-aos-delay="{300}"
					data-aos-duration="{1000}"
				>
					<figure
						class="image is-1by1 has-background-primary-light"
						style="overflow:hidden;border-radius:50%"
					>
						<LazyLoadImage src="{avatar}" />
					</figure>
					<div class="title is-5 mb-0 mt-2">{name}</div>
					<div class="mb-2">{designation || ""}</div>
					<div>
						<a
							target="_blank"
							rel="noreferrer"
							href="{linkedIn}"
							class="is-flex is-align-items-center is-justify-content-center"
						>
							<img
								src="//static.prepseed.com/icons/linkedin-blue.png"
								alt="linkedin"
								style="width:24px"
							/>
							<span class="ml-1">LinkedIn</span>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
