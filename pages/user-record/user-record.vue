<template>
	<view>
		<uni-swipe-action>
			<uni-swipe-action-item v-for="(item,index) in list1" :options="options" :key="index" @change="swipeChange" @click="swipeClick($event,index)">
				<media-list type="one" :item="item" :index="index"></media-list>
			</uni-swipe-action-item>
		</uni-swipe-action>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import uniSwipeAction from '@/components/uni-ui/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-ui/uni-swipe-action-item/uni-swipe-action-item.vue'
	import $data from '@/common/test/data.js';
	export default {
		components: {
			mediaList,
			uniSwipeAction,
			uniSwipeActionItem
		},
		data() {
			return {
				options: [{
					text: '取消收藏',
					style: {
						backgroundColor: 'rgb(255,58,49)'
					}
				}],
				list1:$data.getListOne(),
			}
		},
		methods: {
			swipeChange(e) {
				console.log('返回：', e);
			},
			swipeClick(e, index) {
				console.log(e,index);
			}
		}
	}
</script>

<style>

</style>
