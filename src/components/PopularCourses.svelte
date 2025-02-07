<script>
	import { onMount } from "svelte";
	import AOS from "aos";
	onMount(() => AOS.init());
	import CoursePopOver from "./CoursePopOver.svelte";
	const columnClass =
		"column is-full-mobile is-half-tablet is-two-third-desktop is-one-two-widescreen is-one-full-hd";

	const topics = {
		institute: [
			{
				name: "Comprehensive test and assessment system",
				dropDown: [
					"Previous Year Papers",
					"New Patteren Selection Improvement",
					"Revision Simulations techniques",
					"Personalised Report Card",
					"Speedometer enabled customizable Practice",
				],
			},
			{
				name: "AI-based machine learning analytics",
				dropDown: [],
			},
			{
				name: "Real-time attendance tracking",
				dropDown: [],
			},
			{
				name: "Fees System",
				dropDown: [],
			},
		],
		school: [
			{
				name: "CBSE",
				dropDown: [],
			},
			{
				name: "Cambridge Board",
				dropDown: [],
			},
			{
				name: "ICSE",
				dropDown: [],
			},
			{
				name: "IB",
				dropDown: [],
			},
		],
		college: [],
		erp: [
			{
				name: "Inventory Management System",
				dropDown: [],
			},
			{
				name: "Quality Management System",
				dropDown: [],
			},
			{
				name: "Task Management",
				dropDown: [],
			},
			{
				name: "Calendar Management",
				dropDown: [],
			},
			{
				name: "Automated Proposal Making",
				dropDown: [],
			},
		],
	};
</script>

<section class="section p-0 pt-2 pb-2">
	<div class="columns is-multiline">
		<!-- <div class="{columnClass}">
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay="{500}"
				data-aos-duration="{1000}"
			>
				<div class="card-content">
					<div class="title is-4 mb-3">Coaching Institutes</div>
					<div class="mb-4">
						Understandable statistics and goals coverage to keep eye
						on student's progress for :
					</div>
					{#each topics.institute as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:250px">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each}
				</div>
			</div>
		</div> -->
		<!-- <div class="{columnClass}">
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay="{500}"
				data-aos-duration="{1000}"
			>
				<div class="card-content">
					<div class="title is-4 mb-3">Schools</div>
					<div class="mb-4">
						Best to track records and efficient to provide study
						materials on the go for:
					</div>
					{#each topics.school as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:250px">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each}
				</div>
			</div>
		</div> -->
		<!-- <div class="{columnClass}">
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay="{500}"
				data-aos-duration="{1000}"
			>
				<div class="card-content">
					<div class="title is-4 mb-3">Colleges</div>
					<div class="mb-4">
						Efficient management of syllabus and facilities of live
						lectures with management tools
					</div>
					{#each topics.college as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:250px">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each}
				</div>
			</div>
		</div> -->

		<div class={columnClass}>
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay={500}
				data-aos-duration={800}
			>
				<div class="card-content">
					<div class="title is-4 mb-3">
						360* Customer Relationship Management (CRM) Systems
					</div>
					<div class="mb-4">
						AI-powered 360° CRM systems enhance customer
						interactions, sales forecasting, and support by
						leveraging data-driven insights. These systems help
						businesses build stronger relationships through
						personalized experiences, predictive analytics, and
						automated customer engagement.
					</div>
					<!--{#each topics.erp as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:250px">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each} -->
				</div>
			</div>
		</div>
		<div class={columnClass}>
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay={500}
				data-aos-duration={800}
			>
				<div class="card-content">
					<div class="title is-4 mb-3">
						Personalized Enterprise Resource Planning (ERP) Systems
					</div>
					<div class="mb-4">
						Prepseed is an AI-powered ERP platform tailored for
						coaching institutes, schools, and colleges. It offers
						advanced features that improve student monitoring
						through <b>real-time attendance tracking</b>
						and enhance safety with
						<b>live institute bus tracking</b>. AI-driven analytics
						provide better decision-making insights, while a
						comprehensive <b>test management system</b>
						streamlines academic performance evaluation.
					</div>
					<!-- {#each topics.institute as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:100%">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each} -->
				</div>
			</div>
		</div>
		<div class={columnClass}>
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay={500}
				data-aos-duration={800}
			>
				<div class="card-content">
					<div class="title is-4 mb-3">
						Learning Management Systems (LMS)
					</div>
					<div class="mb-4">
						Prepseed also serves as an AI-powered Learning
						Management System (LMS) designed to enhance teaching and
						learning experiences in coaching institutes, schools,
						and colleges. It enables real-time tracking of student
						progress, offering AI-based machine learning analytics
						for personalized learning insights. Automated test
						management systems simplify exam administration, while
						interactive engagement tools help improve student
						participation.
					</div>
					<!-- {#each topics.institute as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:100%">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each} -->
				</div>
			</div>
		</div>
		<div class={columnClass}>
			<div
				class="card h-100 spiral-corner pl-3"
				data-aos="fade-up"
				data-aos-delay={500}
				data-aos-duration={800}
			>
				<div class="card-content">
					<div class="title is-4 mb-3">
						Custom-made Software Solutions
					</div>
					<div class="mb-4">
						At Prepseed, we specialize in developing custom software
						solutions tailored to meet unique business requirements.
						Whether you need a specialized application, an
						automation tool, or an enterprise-level platform, we
						design and develop software that aligns perfectly with
						your operational needs. Our approach ensures that every
						project is built to match specific workflows, industry
						standards, and functional demands, providing seamless
						integration and scalability.
					</div>
					<!-- {#each topics.institute as { name, dropDown }, i}
						<div class="dropdown is-hoverable is-up">
							<div class="dropdown-trigger" style="width:100%">
								<div
									class="is-flex"
									style="margin-top: 0.25rem;"
								>
									<span
										style="margin-right:0.5rem;min-width:16px;"
										><img
											height="16"
											width="16"
											src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
											alt=""
										/>
									</span>
									<span
										class="has-text-grey-dark is-family-secondary cursor-pointer"
									>
										{name}
									</span>
								</div>
								{#if dropDown.length !== 0}
									<div class="dropdown-menu" role="menu">
										<div class="dropdown-content">
											<div class="dropdown-item">
												<CoursePopOver
													array="{dropDown}"
												/>
											</div>
										</div>
									</div>
								{/if}
							</div>
						</div>
						<br />
					{/each} -->
				</div>
			</div>
		</div>
	</div>
</section>
