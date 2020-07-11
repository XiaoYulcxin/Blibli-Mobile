<template>
	<view class="page">
		<!-- #ifndef APP-PLUS -->
		<video :src="detail.src" controls :poster="detail.poster"
		style="height: 225px;" class="w-100"></video>
		<!-- #endif -->
		<scroll-view scroll-y class="position-relative"
		:style="'height:'+scrollH+'px;'"> 
			<!-- 选项卡 -->
			<view class="flex align-stretch border-bottom border-light-secondary bg-white f-video-tab">
				<view class="flex-1 flex justify-center align-center" 
				v-for="(item,index) in tabBars" :key="index"
				@click="changeTab(index)">
					<text class="py-1" 
					:class="tabIndex === index ? 'border-main text-main':''"
					:style="tabIndex===index ? 'border-bottom: 5rpx solid;':''"
					>{{item.name}}</text>
				</view> 
			</view>
			<!-- 占位 -->
			<view style="height: 80rpx;"></view>
			<view v-if="tabIndex === 0" class="animated faster fadeIn">
				<!-- 简介 -->
				<view class="px-3 border-bottom border-light-secondary">
					<!-- 头像|关注 -->
					<view class="flex align-center py-3">
						<avatar src="/static/demo/userpic/10.jpg" @click="openSpace"></avatar>
						<view class="flex-1">
							<view class="font-md line-h text-main">昵称</view>
							<text class="text-muted font-sm">369粉丝</text>
						</view>
						<main-button>关注</main-button>
					</view>
					<!-- 标题 -->
					<view class="font-md line-h">视频标题</view>
					<!-- 视频信息 -->
					<view class="flex align-center text-muted py-1">
						<text class="iconfont iconbofangshu font-md mr-1"></text>
						<text class="font-sm">36.0万</text>
						<text class="iconfont icondanmushu font-md ml-2 mr-1"></text>
						<text class="font-sm">365</text>
						<text class="font-sm ml-2 mr-1">今日10:00</text>
					</view>
				</view>
				<!-- 选集 -->
				<view class="border-bottom border-light-secondary">
					<view class="flex align-center px-3 py-2">
						<text class="font-md">选集</text>
						<view class="text-light-muted font flex align-center ml-auto" @click="openMenus">
							共13集 <text class="iconfont iconjinru"></text>
						</view>
					</view>
					<scroll-view scroll-x="true" class="scroll-row mb-3">
						<view class="scroll-row-item ml-2 border rounded  p-2" style="width: 300rpx;" v-for="i in 9" :key="i" :class="i === 0 ? 'border-main text-main' : 'border-light-secondary text-muted'">
							<text class="font">第1话</text>
							<view class="text-ellipsis font-md">
								他们为何前来侍奉部，无人得知
							</view>
						</view>
					</scroll-view>
				</view>
				<media-list type="one" v-for="(item,index) in list"
				:key="index" :item="item" :index="index"></media-list>
			</view>
			<view v-else class="animated faster fadeIn px-3 py-2">
				<!-- 评论 -->
				<view class="uni-comment-list">
					<view class="uni-comment-face">
						<avatar src="/static/demo/userpic/10.jpg"></avatar>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text class="font text-main">昵称</text>
						</view>
						<view class="uni-comment-date">
							<view>2天前</view>
							<view class="iconfont icongengduoda px-2 py-1"
							hover-class="bg-light"
							style="margin-top: -20rpx;"></view>
						</view>
						<view class="uni-comment-content">支持国产，支持DCloud!</view>
						<!-- 回复内容 -->
						<view class="bg-light rounded p-2 d-flex flex-wrap a-center mt-1">
							<text class="text-main">官方回复：</text>
							回复内容
						</view>
					</view>
				</view>
				
			</view>
		</scroll-view>
		
		<!-- 选集菜单 -->
		<uni-popup ref="showpopup" type="bottom">
			<view class="bg-white" :style="'height:'+popupHeight+'px;'">
				<view class="flex align-center justify-between"
				style="height: 90rpx;">
					<text class="font-md pl-3">选集</text>
					<view style="height: 90rpx;width: 90rpx;"
					class="flex align-center justify-center"
					hover-class="bg-light"
					@click="closeMenus">
						<text class="iconfont iconguanbi text-light-muted"></text>
					</view>
				</view>
				<scroll-view scroll-y="true" 
				:style="'height: '+menuHeight+'px;'"
				show-scrollbar>
					<view class="flex flex-wrap">
						<view class="p-2"
						style="width: 50%;box-sizing: border-box;"
						v-for="i in 9" :key="i">
							<view class="border rounded p-2" :class="i === 0 ? 'border-main text-main' : 'border-light-secondary text-muted'">
								<text class="font">第1集</text>
								<view class="text-ellipsis font-md">
									他们为何前来侍奉部，无人得知
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import mediaList from '@/components/common/media-list.vue';
	import avatar from '@/components/common/avatar.vue';
	import mainButton from '@/components/common/main-button.vue';
	import uniPopup from '@/components/uni-ui/uni-popup/uni-popup.vue';
	import $data from '@/common/test/data.js';
	
	let TOP = null
	
	export default {
		components: {
			mediaList,
			avatar,
			mainButton,
			uniPopup
		},
		data() {
			return {
				list:$data.getListOne(),
				tabIndex:0,
				tabBars:[{
					name:"简介"
				},{
					name:"评论"
				}],
				scrollH:300,
				detail:{
					src:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4",
					poster:"https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1696374343.jpg"
				}
			}
		},
		onLoad() {
			let res = uni.getSystemInfoSync()
			this.scrollH = res.windowHeight - 225
		},
		computed: {
			popupHeight() {
				return this.scrollH/3*2
			},
			menuHeight(){
				return this.popupHeight - uni.upx2px(90)
			}
		},
		methods: {
			changeTab(index){
				this.tabIndex = index
			},
			openSpace(){
				uni.navigateTo({
					url: '../user-space/user-space',
				});
			},
			// 打开选集菜单
			openMenus(){
				this.$refs.showpopup.open()
			},
			closeMenus(){
				this.$refs.showpopup.close()
			}
		}
	}
</script>

<style>
.page{
	line-height: 1;
	overflow: hidden!important;
}
.f-video-tab{
	position: fixed;
	left: 0;
	right: 0;
	height: 80rpx;
	z-index: 10;
	/* #ifndef APP-PLUS */
	top: 225px;
	/* #endif */
	/* #ifdef H5 */
	top: 268px;
	/* #endif */
	/* #ifdef APP-PLUS */
	top: 0;
	/* #endif */
}
</style>
