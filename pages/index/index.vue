<template>
	<view class="bg-light">
		<!-- 提示框 -->
		<toast ref="toast"></toast>
		
		<!-- #ifdef MP -->
		<view style="height: 44px;" class="fixed-top flex align-center bg-white">
			<view class="flex-1 px-3">
				<view class="bg-light flex align-center rounded-circle px-3 py-1">
					<text class="font text-light-muted">精彩热搜：我的青春恋爱物语果然有问题。完</text>
				</view>
			</view>
			<view class="mr-3">
				分类
			</view>
		</view>
		<view style="height: 44px;"></view>
		<!-- #endif -->
		
		<view class="py-2 px-3">
			<swiper-dot :list="info" :current="current">
				<swiper autoplay :interval="3000" :duration="300" circular
				style="height: 250rpx;" @change="swiperChange">
					<swiper-item v-for="(item, index) in info" :key="index">
						<image :src="item.url" lazy-load
						style="height: 250rpx;" class="w-100 rounded-lg" 
						mode="aspectFill"/>
					</swiper-item>
				</swiper>
			</swiper-dot>
		</view>
		
		<card title="为你推荐" style="width: 100%;">
			<view class="f-list">
				<media-list type="two" v-for="(item,index) in list2" style="margin:15px auto;"
				:key="index" :item="item" :index="index"></media-list>
			</view>
		</card>
		
		<view class="f-divider"></view>
		
		<card title="为你推荐" style="width: 100%;">
			<view class="f-list">
				<media-list type="three" v-for="(item,index) in list3" style="margin:15px auto;"
				:key="index" :item="item" :index="index"></media-list>
			</view>
		</card>
		
		<view class="f-divider"></view>
		
		<card title="为你推荐" style="width: 100%;">
			<media-list type="one" v-for="(item,index) in list1"
			:key="index" :item="item" :index="index"></media-list>
		</card>
		
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import swiperDot from '@/components/common/swiper-dot.vue';
	import $data from '@/common/test/data.js';
	
	export default {
		components: {
			mediaList,
			swiperDot
		},
		data() {
			return {
				info: $data.getSwiper(),
				current: 0,
				
				list1:$data.getListOne(),
				list2:$data.getListTwo(),
				list3:$data.getListThree(),
			}
		},
		onLoad() {
			
		},
		methods: {
			swiperChange(e) {
				this.current = e.detail.current
			}
		}
	}
</script>

<style>
	
</style>
