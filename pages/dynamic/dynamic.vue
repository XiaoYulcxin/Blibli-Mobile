<template>
	<view class="flex flex-column">
		<image src="/static/demo/bannerTop_new.png" style="width: 100%;height: 160rpx;"></image>
		<view class="flex align-center p-3" hover-class="bg-light" style="height: 140rpx;">
			<image src="/static/demo/userpic/11.jpg" style="width: 180rpx;height: 180rpx;margin-top: -50rpx;" class="rounded-circle flex-shrink"></image>
			<view class="flex flex-column" style="width: 70%;margin-left: 10%;">
				<view class="font-lg" style="width: 100%;display: flex;flex-direction: row;">
					<text class="text-muted" style="width: 33%;text-align: center;font-size: 26rpx;">
						<p class="text-muted">235</p>
						<p class="text-muted">粉丝</p>
					</text>
					<text class="text-muted" style="width: 33%;text-align: center;font-size: 26rpx;">
						<p class="text-muted">6</p>
						<p class="text-muted">关注</p>
					</text>
					<text class="text-muted" style="width: 33%;text-align: center;font-size: 26rpx;">
						<p class="text-muted">279</p>
						<p class="text-muted">获赞</p>
					</text>
				</view>
				
				<view class="font text-muted line-h" style="height: 100rpx;margin-top: 10rpx;">
					<button style="border-radius: 9rpx;background-color: #FB7299;"><text style="color: white;">+关注</text></button>
				</view>
			</view>
		</view>
		
		<view class="flex align-center p-1">
			<view class="flex flex-column pl-3">
				<view class="font-lg">21Libra
					<text class="text-muted ml-3" style="font-size: 23rpx;border: 1px solid #FF6C00;position: relative;top: -7rpx;background-color: #FF6C00;color: white;border-radius: 8rpx;">LV5</text>
				</view>
				<view class="font text-muted line-h" style="margin-top: 11rpx;">
					<image src="/static/demo/dev.png" style="width: 38rpx;height: 38rpx;"></image>
					<text class="text-muted font ml-1" style="position: relative;top: -8rpx;color: #292929;">bilibili机构认证：摸鱼达人</text>
				</view>
				<view class="font text-muted line-h" style="margin-top: 15rpx;">
					爷不做咯  爷又快乐了
				</view>
			</view>
		</view>
		<view style="height: 6rpx;background-color: #F4F4F4;"></view>
		<view class="flex align-center p-1" style="border: 1px solid #E7E7E7;">
			<view class="flex flex-column pl-3">
				<view class="font-lg" style="width: 100%;display: flex;flex-direction: row;">
					<text class="text-muted font" style="color: #FB7299;">
						动态
					</text>
					<text class="text-muted font pl-5">
						视频
					</text>
					<text class="text-muted font pl-5">
						相簿
					</text>
				</view>
			</view>
		</view>
		
		<view style="height: 6rpx;background-color: #F4F4F4;"></view>
		
		<view hover-class="bg-light">
			<view class="flex align-center p-3">
				<image src="/static/demo/userpic/11.jpg" style="width: 90rpx;height: 90rpx;" class="rounded-circle flex-shrink"></image>
				<view class="flex flex-column pl-3">
					<view class="font-lg" style="font-size: 30rpx;">
						21Libra
						<image src="/static/demo/dev.png" style="width: 38rpx;height: 38rpx;"></image>
					</view>
					<view class="text-muted line-h" style="font-size: 23rpx;">
						1小时前
					</view>
				</view>
			</view>
			<view class="font text-muted line-h p-3" style="margin-top: -30rpx;">
				<text style="color: #5090CC;">‍#‍摸鱼组#</text>
				<text class="pl-1">123</text>
				<p>
					<image src="/static/demo/datapic/48.jpg" style="margin-top: 10rpx;"></image>
				</p>
			</view>
			<view class="flex flex-column">
				<view class="font-lg" style="width: 100%;display: flex;flex-direction: row;justify-content: space-around;">
					<view class="text-muted font">
						<image src="/static/demo/zf.png" style="width: 38rpx;height: 38rpx;position: relative;top: 6rpx;"></image>
						<text class="pl-1">转发</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/ly.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">留言</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/dz.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">点赞</text>
					</view>
				</view>
			</view>
		</view>

		<view style="height: 6rpx;background-color: #F4F4F4;"></view>
		
		<view hover-class="bg-light">
			<view class="flex align-center p-3">
				<image src="/static/demo/userpic/11.jpg" style="width: 90rpx;height: 90rpx;" class="rounded-circle flex-shrink"></image>
				<view class="flex flex-column pl-3">
					<view class="font-lg" style="font-size: 30rpx;">
						21Libra
					</view>
					<view class="text-muted line-h" style="font-size: 23rpx;">
						1小时前
					</view>
				</view>
			</view>
			<view class="font text-muted line-h p-3" style="margin-top: -30rpx;">
				<text style="color: #5090CC;">‍#‍摸鱼组#</text>
				<text class="pl-1">123</text>
				<p>
					<image src="/static/demo/datapic/49.jpg" style="margin-top: 10rpx;"></image>
				</p>
			</view>
			<view class="flex flex-column">
				<view class="font-lg" style="width: 100%;display: flex;flex-direction: row;justify-content: space-around;">
					<view class="text-muted font">
						<image src="/static/demo/zf.png" style="width: 38rpx;height: 38rpx;position: relative;top: 6rpx;"></image>
						<text class="pl-1">转发</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/ly.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">留言</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/dz.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">点赞</text>
					</view>
				</view>
			</view>
		</view>
		
		<view style="height: 6rpx;background-color: #F4F4F4;"></view>
		
		<view hover-class="bg-light">
			<view class="flex align-center p-3">
				<image src="/static/demo/userpic/11.jpg" style="width: 90rpx;height: 90rpx;" class="rounded-circle flex-shrink"></image>
				<view class="flex flex-column pl-3">
					<view class="font-lg" style="font-size: 30rpx;">
						21Libra
					</view>
					<view class="text-muted line-h" style="font-size: 23rpx;">
						1小时前
					</view>
				</view>
			</view>
			<view class="font text-muted line-h p-3" style="margin-top: -30rpx;">
				<text style="color: #5090CC;">‍#‍摸鱼组#</text>
				<text class="pl-1">123</text>
				<p>
					<image src="/static/demo/datapic/50.jpg" style="margin-top: 10rpx;"></image>
				</p>
			</view>
			<view class="flex flex-column">
				<view class="font-lg" style="width: 100%;display: flex;flex-direction: row;justify-content: space-around;">
					<view class="text-muted font">
						<image src="/static/demo/zf.png" style="width: 38rpx;height: 38rpx;position: relative;top: 6rpx;"></image>
						<text class="pl-1">转发</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/ly.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">留言</text>
					</view>
					<view class="text-muted font">
						<image src="/static/demo/dz.png" style="width: 38rpx;height: 38rpx;position: relative;top: 8rpx;"></image>
						<text class="pl-1">点赞</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="flex align-center pl-3" style="background-color: #F4F4F4;">
			<view class="flex flex-column" style="text-align: center;color: #C0C0C0;font-size: 13rpx;width: 100%;">
				<view class="text-muted line-h" style="height: 50rpx;margin-top: 25rpx;">
					信息网络传播视听节目许可证：0910417
				</view>
				<view class="text-muted line-h" style="height: 50rpx;">
					网络文化经营许可证 沪网文【2019】3804-274号
				</view>
				<view class="text-muted line-h" style="height: 50rpx;">
					广播电视节目制作经营许可证：（沪）字第01248号
				</view>
				<view class="text-muted line-h" style="height: 50rpx;">
					增值电信业务经营许可证 沪B2-20100043
				</view>
			</view>
		</view>
		
		
		<!-- <view class="py-2 px-4">
			<view class="bg-main text-white py-2 flex align-center justify-center font-md animated fast" hover-class="bg-main-hover pulse" style="border-radius: 50rpx;border: 0;margin-top: 100rpx;">APP内打开</view>
		</view> -->
		
	</view>
</template>

<script>
</script>

<style>
</style>
