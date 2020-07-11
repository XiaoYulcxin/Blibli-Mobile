<template>
	<view class="animated faster icon-cate" 
	hover-class="pulse">
		<image :src="item.icon"
		class="icon-cate-image" 
		style="width: 70rpx;height: 70rpx;"></image>
		<text class="font text-muted mt-1">{{item.name}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			item:Object,
			index:Number
		},
	}
</script>

<style scoped>
	.icon-cate{
		width: 187.5rpx;
		height: 187.5rpx;
		display: inline-flex!important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.icon-cate-image{
		width: 100rpx;height: 100rpx;
	}
</style>
