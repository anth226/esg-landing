<script lang="ts">
	export let value: string | number;
	export let title: string;
</script>

<div class="stat w-max p-0">
	<div class="stat-value font-normal text-primary text-2xl">{value}</div>
	<div class="stat-title font-sans text-sm">{title}</div>
</div>
