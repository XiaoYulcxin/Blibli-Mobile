<template>
	<view>
		<navigator url="../login/login" hover-class="none">
		<view class="flex align-center p-3" hover-class="bg-light">
			<image src="/static/demo/userpic/11.jpg" style="width: 120rpx;height: 120rpx;" class="rounded-circle flex-shrink"></image>
			<view class="flex flex-column pl-3">
				<view class="font-lg">21Libra <text class="text-muted font ml-3">男 广东</text></view>
				<view class="font text-muted line-h">
					爷不做咯  爷又快乐了
				</view>
			</view>
		</view>
		</navigator>
		<view class="f-divider"></view>
		<uni-list-item title="我的作品" showExtraIcon showRight :showArrow="false" @click="navigateTo('user-video')">
			<text slot="icon" class="iconfont iconshipin"></text>
			<text slot="right" class="font text-muted">26个</text>
		</uni-list-item>
		<uni-list-item title="收藏" showExtraIcon 
		@click="navigateTo('user-fava')">
			<text slot="icon" class="iconfont iconshoucang1"></text>
		</uni-list-item>
		<uni-list-item title="关注" showExtraIcon
		@click="navigateTo('user-follow')">
			<text slot="icon" class="iconfont iconguanzhu"></text>
			<text slot="right" class="font text-muted">365</text>
		</uni-list-item>
		<uni-list-item title="历史记录" showExtraIcon
		@click="navigateTo('user-record')">
			<text slot="icon" class="iconfont iconlishi"></text>
		</uni-list-item>
		<view class="f-divider"></view>
		<main-big-button @click="add">立即投稿</main-big-button>
		
		<uni-popup ref="showpopup" type="bottom">
			<view class="bg-white">
				<view style="height: 200rpx;" 
				class="flex align-stretch">
					<view class="flex-1 flex flex-column align-center justify-center" hover-class="bg-light" @click="openCreate">
						<text class="iconfont icondingdanwenjian rounded-circle bg-primary text-white flex align-center justify-center"
						style="width: 80rpx;height: 80rpx;"
						></text>
						<text class="font text-secondary">单集</text>
					</view>
					<view class="flex-1 flex flex-column align-center justify-center" hover-class="bg-light" @click="openCreate">
						<text class="iconfont icon918caidan_wenjian rounded-circle bg-main text-white flex align-center justify-center"
						style="width: 80rpx;height: 80rpx;"
						></text>
						<text class="font text-secondary">连载</text>
					</view>
				</view>
				<view class="f-divider"></view>
				<view style="height: 100rpx;" @click="hide"
				class="flex align-center justify-center font-md"
				hover-class="bg-light">取消</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import mainBigButton from '@/components/common/main-big-button.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	export default {
		components: {
			uniListItem,
			mainBigButton,
			uniPopup
		},
		data() {
			return {
				
			}
		},
		methods: {
			navigateTo(path){
				uni.navigateTo({
					url: `/pages/${path}/${path}`,
				});
			},
			// 立即投稿
			add(){
				this.$refs.showpopup.open()
			},
			// 隐藏投稿选项
			hide(){
				this.$refs.showpopup.close()
			},
			// 打开发布页
			openCreate(){
				uni.navigateTo({
					url: '../create/create',
					success: res => {
						this.hide()
					},
				});
			}
		}
	}
</script>

<style>

</style>
