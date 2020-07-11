<template>
	<view :class="listClass" class="f-list-item" :hover-class="hoverClass"
	@click.stop="open">
		<template v-if="type === 'two'">
		<view class="animated faster fadeIn">
		<image :src="item.cover" mode="aspectFill"
		class="w-100 rounded-top-lg"
		style="height: 215rpx;" lazy-load></image>
		</view>
		<view class="flex align-center text-white position-absolute left-0 right-0" style="top: 160rpx;background-image:linear-gradient(to bottom,rgba(0,0,0,0),#000000);">
			<text class="iconfont iconbofangshu font-md mx-1"></text>
			<text class="font-sm">{{item.play_count}}</text>
			<text class="iconfont icondanmushu font-md mx-1"></text>
			<text class="font-sm">{{item.danmu_count}}</text>
			<text class="font-sm mr-1 ml-auto">{{item.duration}}</text>
		</view>
		<view class="px-2 py-1">
			<view class="font line-h animated faster"
			 hover-class="pulse" style="height: 80rpx;"
			 >{{item.title|formatTitle}}</view>
			<view class="flex align-center justify-between pt-2 text-light-muted">
				<text class="font-sm">{{item.cate}}</text>
				<view class="iconfont icongengduoda font animated faster"
				 hover-class="jello"></view>
			</view>
		</view>
		</template>
		<template v-else-if="type === 'three'">
			<view class="animated faster" hover-class="pulse">
			<image :src="item.cover" mode="aspectFill"
			lazy-load style="height: 280rpx;" 
			class="w-100 rounded-lg"></image>
			</view>
			<view class="flex align-center text-white position-absolute left-0 right-0 rounded-bottom-lg" style="top: 220rpx;background-image:linear-gradient(to bottom,rgba(0,0,0,0),#000000);">
				<text class="iconfont iconbofangshu font-md mx-1"></text>
				<text class="font-sm">{{item.play_count}}</text>
			</view>
			<view class="font-md line-h animated faster text-ellipsis" 
			hover-class="pulse">{{item.title}}</view>
		</template>
		<template v-else-if="type === 'one'">
			<view class="animated faster" hover-class="pulse">
			<image :src="item.cover" mode="aspectFill"
			lazy-load style="height: 160rpx;width: 260rpx;" 
			class="rounded-lg mr-3"></image>
			</view>
			<view class="flex flex-column flex-1">
				<view class="font-md line-h animated faster mb-1" 
				hover-class="pulse">{{item.title|formatTitle}}</view>
				<view class="font text-muted line-h mt-auto">
					{{item.time}}
				</view>
				<view class="flex align-center justify-between text-muted line-h">
					<view>
						<text class="iconfont iconbofangshu font-md mr-1"></text>
						<text class="font-sm">{{item.play_count}}</text>
					</view>
					<view>
						<text class="iconfont icondanmushu font-md mr-1"></text>
						<text class="font-sm">{{item.dumu_count}}</text>
					</view>
					<view class="iconfont icongengduoda font animated faster"
					hover-class="jello"></view>
				</view>
				
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: "two"
			},
			item:Object,
			index:Number
		},
		filters: {
			formatTitle(value) {
				let limit = 16
				if(value.length > limit){
					return value.slice(0,limit) + ' ...'
				}
				return value
			}
		},
		computed: {
			listClass() {
				switch (this.type){
					case "two":
					return "f-list-item-2 mb-3 border rounded-lg"
						break;
					case "three":
					return "f-list-item-3 mb-3 pb-1"
						break;
					case "one":
					return 'f-list-item-1 pt-3 pb-3 border-bottom border-light-secondary px-3'
						break;
				} 
			},
			hoverClass(){
				if (this.type === 'one') {
					return 'bg-light'
				}
				return ''
			}
		},
		methods: {
			open(){
				uni.navigateTo({
					url: '/pages/detail-video/detail-video',
				});
			}
		},
	}
</script>

<style>
</style>
