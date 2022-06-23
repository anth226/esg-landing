<script>
	import { page } from '$app/stores';

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Solutions', href: '/solutions' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'About Us', href: '/about' },
	];
</script>

<nav class="navbar bg-secondary-focus text-white flex-none">
	<div class="flex flex-1 justify-between items-center max-w-6xl mx-auto">
		<div class="flex items-center gap-3">
			<a href="/" class="text-2xl flex items-center gap-2">
				<img src="/assets/logo.png" alt="ESG Impact Logo" class="w-[3.5ch]" />
				<span class="">ESG Impact</span>
			</a>

			<ul class="menu menu-separated hidden lg:menu-horizontal gap-2 text-lg ">
				{#each links as { label, href }}
					{@const active = $page.url.pathname === href}
					<li>
						<a {href} class:text-primary={active} class="link-underline link-underline-transparent"
							>{label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex gap-3">
			<a
				href="https://app.esgi.io/auth/registration"
				class="btn btn-sm btn-outline hidden lg:inline-flex text-white hover:bg-white hover:text-secondary hover:outline-white"
				>Sign Up</a
			>
			<a
				href="https://app.esgi.io/auth/login"
				class="btn btn-sm hidden lg:inline-flex btn-primary text-white">Sign In</a
			>
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
				</ul>
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.menu-separated li:not(:first-child)::before {
		content: ' ';
		@apply w-[1px] h-4 bg-white relative top-[50%] translate-y-[-50%] translate-x-[-0.25rem];
	}

	.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 1px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.5s ease-in-out;
	}

	.link-underline-transparent {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#b7824b, #b7824b);
	}

	.link-underline:hover {
		background-size: 100% 1px;
		background-position: 0 100%;
	}
</style>
