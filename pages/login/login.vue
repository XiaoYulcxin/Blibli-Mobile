<template>
	<view>
		<!-- #ifndef MP -->
		<uni-status-bar></uni-status-bar>
		<view class="flex align-center px-3" style="height: 44px;">
			<view class="iconfont iconfanhui font-lg animated fast" hover-class="pulse text-main" @click="back"></view>
		</view>
		<!-- #endif -->
		<view class="flex align-center justify-center" style="padding-top: 100rpx;padding-bottom: 80rpx;">
			<text class="font-weight-bold" style="font-size: 45rpx;">欢迎回来</text>
		</view>
		<view class="px-4">
			<view class="flex align-center mb-5">
				<input type="text" class="uni-input rounded bg-input" placeholder="手机号 / 用户名 / 邮箱" placeholder-class="text-placeholder"/>
			</view>
			<view class="flex align-center mb-5">
				<input type="text" class="uni-input rounded bg-input" placeholder="请输入密码" placeholder-class="text-placeholder"/>
			</view>
		</view>
		<view class="py-2 px-4">
			<view class="bg-main text-white py-2 flex align-center justify-center font-md animated fast" hover-class="bg-main-hover pulse" style="border-radius: 50rpx;border: 0;">登 录</view>
		</view>
		
		<view class="flex align-center justify-center pt-5">
			<view style="height: 1rpx;background-color: #dddddd;width: 100rpx;"></view>
			<view class="mx-2 text-muted">社交账号登录</view>
			<view style="height: 1rpx;background-color: #dddddd;width: 100rpx;"></view>
		</view>
		
		<view class="flex align-center px-5 py-4">
			<view class="flex-1 flex align-center justify-center">
				<view class="iconfont iconweixin font-lg text-muted bg-light flex align-center justify-center rounded-circle" style="width: 100rpx;height: 100rpx;"></view>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<view class="iconfont iconQQ font-lg text-muted bg-light flex align-center justify-center rounded-circle" style="width: 100rpx;height: 100rpx;"></view>
			</view>
			<view class="flex-1 flex align-center justify-center">
				<view class="iconfont iconxinlangweibo font-lg text-muted bg-light flex align-center justify-center rounded-circle" style="width: 100rpx;height: 100rpx;"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
	export default {
		components: {
			uniStatusBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
