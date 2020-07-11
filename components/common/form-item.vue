<template>
	<view style="min-height: 100rpx;" class="flex align-start border-bottom border-light-secondary" :hover-class="hover ? 'bg-light' : ''" @click="$emit('click')">
		<view style="height: 100rpx;" class="flex align-center justify-center px-3 flex-shrink font-md">{{title}}</view>
		<view class="flex align-center flex-1 pr-3" 
		style="min-height: 100rpx;">
			<slot></slot>
		</view>
		<view v-if="showRight" style="height: 100rpx;" class="flex align-center justify-center px-3 flex-shrink">
			<text class="iconfont iconjinru text-muted"></text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: ""
			},
			showRight:{
				type:Boolean,
				default:false
			},
			hover:{
				type:Boolean,
				default:false
			}
		},
	}
</script>

<style>
</style>
