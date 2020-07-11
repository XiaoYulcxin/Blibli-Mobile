<template>
	<view class="rounded py-2 px-3 bg-main text-white animated fast"
	style="line-height: 1;" hover-class="bg-main-hover pulse" 
	@click="$emit('click')">
		<slot></slot>
	</view>
</template>

<script>
</script>

<style>
</style>
