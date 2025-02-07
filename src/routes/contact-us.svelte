<script>
	const contactNumber = "+91-99133-82221";
	const contactEmail = "vivek@prepseed.com";
</script>

<svelte:head>
	<title>Contact Us | Prepseed</title>
</svelte:head>

<section class="section">
	<div class="container is-max-widescreen">
		<div class="columns">
			<div class="column">
				<div style="height:100%;" class="is-flex is-align-items-center">
					<div>
						<h3 class="title is-1">Reach Us</h3>
						<div class="buttons">
							<a
								class="button is-primary"
								href="tel:+91{contactNumber}"
							>
								<svg
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									viewBox="0 0 24 24"
									width="20"
									style="margin-right: 6px;"
									><path d="M0 0h24v24H0V0z" fill="none"
									></path><path
										d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"
									></path></svg
								>
								Call Us</a
							>
							<a class="button" href="mailto:{contactEmail}">
								<svg
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
									height="20"
									viewBox="0 0 24 24"
									width="20"
									style="margin-right: 6px;"
									><path d="M0 0h24v24H0V0z" fill="none"
									></path><path
										d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
									></path></svg
								>
								Email Us</a
							>
						</div>
						<div class="is-size-5">
							<div class="is-flex">
								<span
									style="min-width:0px;text-align:right;margin-right:.3rem;"
									>Call Us:</span
								>
								{contactNumber}
							</div>
							<div class="is-flex">
								<span
									style="min-width:0px;text-align:right;margin-right:.3rem;"
									>Email Us:</span
								>
								{contactEmail}
							</div>
						</div>
						<div class="mt-4">
							<div>
								<a href="https://maps.app.goo.gl/1CAwWsGAMHY79s1x5" target="_blank">
								<address class="is-size-5" style="color: hsl(0, 0%, 29%);">
									<!-- Visit or write to us at:<br />
									901, Sears Tower,<br />
									Near Panchavati Cross Road,<br />
									Gulbai Tekra,<br />
									Ahmedabad, Gujarat<br />
									380009 -->
									Prepseed A-408 Ratnaakar<br /> Nine Square Opposite<br />
									ITC Narmada, Keshavbaug,<br /> Ahmedabad, Gujarat-
									380015
								</address>
							</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="divider is-vertical">Or</div>
			<div class="column is-6-dekstop">
				<h4 class="title">Submit Your Query</h4>
				<form>
					<div class="field">
						<label for="email" class="label">Your Email</label>
						<div class="control">
							<input
								class="input"
								id="email"
								type="text"
								name="email"
							/>
						</div>
					</div>
					<div class="field">
						<label for="name" class="label">Your Name</label>
						<div class="control">
							<input
								class="input"
								id="name"
								type="text"
								name="name"
							/>
						</div>
					</div>
					<div class="field">
						<label for="mobileNumber" class="label"
							>Your Phone Number</label
						>
						<div class="control">
							<input
								class="input"
								id="mobileNumber"
								type="text"
								name="mobileNumber"
							/>
						</div>
					</div>
					<div class="field">
						<label for="mobileNumber" class="label"
							>Your Query</label
						>
						<div class="control">
							<textarea
								class="input"
								id="mobileNumber"
								type="text"
								name="mobileNumber"
							></textarea>
						</div>
					</div>
					<div class="field">
						<label class="label" for="type">You are a</label>
						<div class="control">
							<div class="select">
								<select>
									<option>Student</option>
									<option>Coaching</option>
									<option>School</option>
									<option>College</option>
									<option>Organization</option>
								</select>
							</div>
						</div>
					</div>
					<div>
						<button class="button is-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import "../../node_modules/bulma/sass/utilities/_all.sass";
	@import "../styles/variables.scss";
	@import "../../node_modules/bulma/sass/form/_all.sass";
	@import "../../node_modules/@creativebulma/bulma-divider/src/sass/index.sass";
</style>
