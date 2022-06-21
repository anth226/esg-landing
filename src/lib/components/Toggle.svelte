<script lang="ts">
	export let on: boolean;
	export let id: string | undefined;
</script>

<div class="isolate relative h-[34px] w-[68px] rounded-2xl overflow-hidden toggle-shadow">
	<input type="checkbox" class="hidden toggle-state" {id} bind:checked={on} />
	<div class="h-full w-[200%] bg-primary rounded-2xl indicator" />
</div>

<style>
	.toggle-shadow {
		box-shadow: -10px -5px 10px 0px #ffffff, 10px 5px 10px 0px #d1d9e6,
			5px 5px 5px 0px #d1d9e6 inset, -5px -5px 5px 0px #ffffff inset;
	}

	.indicator {
		transform: translate3d(-75%, 0, 0);
		transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
		box-shadow: -10px -5px 10px 0px #ffffff, 10px 5px 15px 0px #d1d9e6;
	}

	.toggle-state:checked ~ .indicator {
		transform: translate3d(25%, 0, 0);
	}
</style>
