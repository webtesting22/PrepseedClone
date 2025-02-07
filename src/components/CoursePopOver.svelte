<script>
export let array;
</script>

<div>
	{#each array as name, i}
		<div class="is-flex" style="margin-top: 0.25rem;">
			<span style="margin-right:0.5rem;min-width:16px;"
				><img
					height="16"
					width="16"
					src="https://static-prepseed.s3.ap-south-1.amazonaws.com/icons/check_circle-24px-blue.svg"
					alt=""
				/>
			</span>
			<span class="has-text-grey-dark is-family-secondary cursor-pointer">
				{name}
			</span>
		</div>
	{/each}
</div>
