<template>
	<view class="py-2 px-4">
		<view class="py-2 flex align-center justify-center font-md animated fast" :class="color" :hover-class="hoverColor" hover-class="pulse" style="border-radius: 50rpx;border: 0;" @click="$emit('click')"><slot></slot></view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: 'primary'
			},
		},
		computed: {
			color() {
				switch (this.type){
					case 'primary':
					return 'bg-main text-white'
						break;
					default:
						break;
				}
			},
			hoverColor(){
				switch (this.type){
					case 'primary':
					return 'bg-main-hover'
						break;
					default:
						break;
				}
			}
		},
	}
</script>

<style>
</style>
