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

			<ul class="menu menu-separated hidden lg:menu-horizontal p-0 gap-2">
				{#each links as { label, href }}
					<li><a {href}>{label}</a></li>
				{/each}
			</ul>
		</div>
		<div class="flex gap-3">
			<button class="btn hidden lg:inline-flex btn-primary btn-outline">Sign Up</button>
			<button class="btn hidden lg:inline-flex btn-primary">Sign In</button>
			<div class="dropdown dropdown-end">
				<button tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</button>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
				>
					{#each links as { label, href }}
						<li><a {href}>{label}</a></li>
					{/each}
					<li class="mt-2">
						<button class="btn btn-primary btn-outline">Sign Up</button>
					</li>
					<li class="mt-2"><button class="btn btn-primary">Sign In</button></li>
				</ul>
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.menu-separated li:not(:first-child)::before {
		content: '';
		@apply w-[1px] h-4 bg-white relative top-[50%] translate-y-[-50%] translate-x-[-0.25rem];
	}
</style>
