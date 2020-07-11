<template>
	<view>
		<!-- #ifdef MP -->
		<view style="height: 44px;" class="fixed-top flex align-center bg-white">
			<view class="flex-1 px-3">
				<view class="bg-light flex align-center rounded-circle px-3 py-1">
					<text class="font text-light-muted">精彩热搜：我的青春恋爱物语果然有问题。完</text>
				</view>
			</view>
		</view>
		<view style="height: 44px;"></view>
		<!-- #endif -->
		<card title="热门分类" :show-refresh="false" style="width: 100%;">
			<scroll-view scroll-x class="scroll-row">
				<icon-cate v-for="(item,index) in hotCates"
				:key="index" :item="item" :index="index"></icon-cate>
			</scroll-view>
		</card>
		<view class="f-divider"></view>
		<card title="全部分类" :show-refresh="false" style="width: 100%;">
			<view class="flex flex-wrap">
				<icon-cate v-for="(item,index) in cates"
				:key="index" :item="item" :index="index"></icon-cate>
			</view>
		</card>
	</view>
</template>

<script>
	import iconCate from '@/components/common/icon-cate.vue';
	import $data from '@/common/test/data.js';
	
	export default {
		components: {
			iconCate
		},
		data() {
			return {
				hotCates:[],
				cates:[],
			}
		},
		onLoad() {
			for (var i = 0; i < 10; i++) {
				this.hotCates = [...this.hotCates,...$data.getIconCate(1)]
			}
			for (var i = 0; i < 20; i++) {
				this.cates = [...this.hotCates,...$data.getIconCate(1)]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
