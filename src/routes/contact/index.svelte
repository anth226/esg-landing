<script lang="ts">
	import { email } from '$lib/stores/user';

	let fname: string;
	let lname: string;
	let phone: number;
</script>

<div class="grid lg:grid-cols-2 h-full">
	<div class="flex flex-col gap-10 p-10 lg:order-2 max-w-lg mx-auto w-full">
		<div class="flex justify-end"><a href="/" class="text-secondary">Back to homepage</a></div>
		<h1 class="text-5xl">Contact us</h1>
		<form on:submit|preventDefault class="grid grid-cols-2 gap-5">
			<label class="grid">
				<span class="text-xs uppercase font-bold"> First Name</span>
				<input
					type="text"
					name="fname"
					required
					class="border-0 outline-0 border-b-2 focus:border-black border-gray-200 transition"
					bind:value={fname}
				/>
			</label>
			<label class="grid">
				<span class="text-xs uppercase font-bold">Last Name</span>
				<input
					type="text"
					name="lname"
					required
					class="border-0 outline-0 border-b-2 focus:border-black border-gray-200 transition"
					bind:value={lname}
				/>
			</label>
			<label class="grid">
				<span class="text-xs uppercase font-bold">Email</span>
				<input
					type="email"
					required
					name="email"
					class="border-0 outline-0 border-b-2 focus:border-black border-gray-200 transition"
					bind:value={$email}
				/>
			</label>
			<label class="grid">
				<span class="text-xs uppercase font-bold">Phone Number</span>
				<input
					type="tel"
					required
					name="phone"
					class="border-0 outline-0 border-b-2 focus:border-black border-gray-200 transition"
					bind:value={phone}
				/>
			</label>
			<button class="mt-10 font-bold text-lg place-self-start">Submit &rarr;</button>
		</form>
		<span class="grow" />
		<div class="flex justify-end text-lg">
			<a href="/privacypolicy" class="text-secondary">Privacy Policy</a>
		</div>
	</div>
	<div class="grid grid-rows-[auto,auto,1fr] bg-secondary p-10">
		<div class="max-w-lg grid gap-10 mx-auto">
			<div class="flex gap-5 items-center">
				<img src="/assets/logo.png" alt="logo" width="50" height="50" />
				<h2 class="text-white text-2xl">ESG Impact</h2>
			</div>
			<div>
				<h2 class="text-6xl text-white">
					We'd <span class="text-[#b7824b]">love</span> to hear from you
				</h2>
			</div>
		</div>
	</div>
</div>
