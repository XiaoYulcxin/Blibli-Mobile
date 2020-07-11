<template>
	<image :src="src" :style="getStyle" @click="$emit('click')"
	class="rounded-circle mr-3 bg-light"></image>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: ""
			},
			w:{
				type: [String,Number],
				default: 80
			},
			h:{
				type: [String,Number],
				default: 80
			}
		},
		computed: {
			getStyle() {
				return `width: ${this.w}rpx;height: ${this.w}rpx;`
			}
		},
	}
</script>

<style>
</style>
