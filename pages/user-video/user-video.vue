<template>
	<view style="overflow-x: hidden;">
		<view v-for="(item,index) in list1" :key="index">
			<media-list type="one" :item="item" :index="index"></media-list>
			<view class="flex" style="height: 100rpx;">
				<view class="flex-1 flex align-center justify-center border-light-secondary" hover-class="bg-light" v-for="(m,mi) in options" :key="mi"
				@click="optionClick(m,index)">
					{{m.text}}
				</view>
			</view>
			<view class="f-divider"></view>
		</view>
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import $data from '@/common/test/data.js';
	export default {
		components: {
			mediaList
		},
		data() {
			return {
				options: [{
					text: '修改',
				},{
					text: '视频',
				}, {
					text: '删除',
				}],
				list1:$data.getListOne(),
			}
		},
		methods: {
			optionClick(e, index) {
				switch (e.text){
					case '视频':
					uni.navigateTo({
						url: '../user-video-list/user-video-list'
					});
						break;
				}
			}
		}
	}
</script>

<style>

</style>
