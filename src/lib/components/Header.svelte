<script>
	const links = [
		{ label: 'Software', href: '/software' },
		{ label: 'Solutions', href: '/solutions' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About Us', href: '/about' },
	];
</script>

<nav class="navbar bg-base-200 text-white flex-none">
	<div class="flex flex-1 justify-between items-center max-w-5xl mx-auto">
		<div class="flex items-center gap-3">
			<a href="/" class="text-xl flex items-center gap-2">
				<img src="/assets/logo.png" alt="ESG Impact Logo" class="w-[4ch]" />
				ESG Impact
			</a>

			<ul class="menu menu-horizontal p-0 gap-2">
				{#each links as { label, href }}
					<li><a {href}>{label}</a></li>
				{/each}
			</ul>
		</div>
		<div class="flex gap-3">
			<button class="btn btn-primary btn-outline">Sign Up</button>
			<button class="btn btn-primary">Sign In</button>
		</div>
	</div>
</nav>

<style lang="postcss">
	.menu li:not(:first-child)::before {
		content: '';
		@apply w-[1px] h-4 bg-white relative top-[50%] translate-y-[-50%] translate-x-[-0.25rem];
	}
</style>
