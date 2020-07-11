<template>
	<view class="position-relative">
		<slot></slot>
		<view class="position-absolute rounded-bottom-lg flex align-center px-2" style="left: 0;right: 0;bottom: 0;height: 70rpx;background-image:linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.8));">
			<text class="text-white font text-ellipsis" 
			style="width: 80%;">
				{{list[current].title}}
			</text> 
			<view class="flex align-center ml-auto flex-shrink justify-end" style="width: 20%;">
				<view :key="index"
				v-for="(item,index) in list"
				class="rounded-circle ml-1" 
				style="width: 16rpx;height: 16rpx;"
				:style="current === index ? 'background-color: rgba(255,255,255,1);' : 'background-color: rgba(255,255,255,0.7);'"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			current: {
				type: Number,
				default: 0
			},
			list: Array,
		},
	}
</script>
