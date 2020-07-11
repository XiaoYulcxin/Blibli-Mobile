<template>
	<view>
		<!-- 背景图 -->
		<image src="/static/demo/datapic/14.jpg" mode="aspectFill" style="height: 320rpx;" class="w-100"></image>
		<!-- 头像信息 -->
		<view style="height: 350rpx;" class="px-3 border-bottom">
			<!-- 头像|关注 -->
			<view class="flex align-end">
				<view style="min-width: 130rpx;min-height: 130rpx;margin-top: -65rpx;" class="rounded-circle">
					<image src="/static/demo/userpic/12.jpg" 
					style="width: 130rpx;height: 130rpx;"
					class="rounded-circle"></image>
				</view>
				<view class="ml-auto">
					<main-button>关注</main-button>
				</view>
			</view>
			<!-- 性别，昵称，uid -->
			<view class="flex align-center">
				<text class="font-lg text-main font-weight-bold">昵称哦哦</text>
				<text class="ml-2 text-light-muted font">UID:123456</text>
			</view>
			<!-- 标签 -->
			<view class="flex align-center py-1">
				<view class="bg-main text-white rounded px-1 font-sm">年度大会员</view>
			</view>
			<!-- 粉丝关注 -->
			<view class="flex align-center">
				<view class="flex align-center text-dark font-md">
					21<text class="text-muted font-sm ml-2">关注</text>
				</view>
				<view class="flex align-center text-dark font-md ml-3">
					45<text class="text-muted font-sm ml-2">粉丝</text>
				</view>
			</view>
			<!-- 描述 -->
			<view class="text-light-muted font text-ellipsis" style="line-height: 1.5;">
				节点布局交叉状态 API 可用于监听两个或多个组件节点在布局位置上的相交状态。
			</view>
		</view>
		<!-- 选项卡 -->
		<view class="flex align-center" style="height: 80rpx;">
			<view class="flex-1 flex justify-center font-md"
			v-for="(item,index) in tabBars" :key="index"
			@click="taptab(index)">
				<text :class="tabIndex === index ? 'text-main font-weight-bold' : 'text-muted'">{{item.name}}</text>
			</view>
		</view>
		<!-- 滑动列表 -->
		<swiper :current="tabIndex" :duration="300" :style="scrollStyle"
		@change="changeTab">
			<swiper-item v-for="(tab,tabI) in tabBars" :key="tabI">
				<scroll-view scroll-y="true" :style="scrollStyle">
					<view class="f-divider"></view>
					<media-list type="one" v-for="(item,index) in list1"
					:key="index" :item="item" :index="index"></media-list>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import mainButton from '@/components/common/main-button.vue';
	import uniBadge from '@/components/uni-ui/uni-badge/uni-badge.vue';
	import mediaList from '@/components/common/media-list.vue';
	import $data from '@/common/test/data.js';
	export default {
		components: {
			mainButton,
			uniBadge,
			mediaList
		},
		data() {
			return {
				scrollH:0,
				tabIndex:0,
				tabBars:[{
					name:"主页"
				},{
					name:"动态"
				},{
					name:"作品"
				},{
					name:"收藏"
				}],
				list1:$data.getListOne(),
			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync()
			this.scrollH = res.windowHeight - uni.upx2px(80) - 44 - res.statusBarHeight
		},
		onPullDownRefresh() {
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},300)
		},
		computed: {
			scrollStyle() {
				return `height:${this.scrollH}px;`
			}
		},
		methods: {
			taptab(index){
				this.tabIndex = index
			},
			changeTab(e){
				this.tabIndex = e.detail.current
			}
		}
	}
</script>

<style>

</style>
