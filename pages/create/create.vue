<template>
	<view>
		<!-- 封面 -->
		<view style="height: 350rpx;" class="position-relative bg-light"
		hover-class="bg-hover-light" @click="upload">
			<image v-if="form.cover" :src="form.cover" mode="aspectFill"
			style="height: 350rpx;width: 750rpx;"></image>
			<view 
			class="flex flex-column align-center justify-center position-absolute top-0 left-0 right-0 bottom-0">
				<text v-if="!form.cover" class="text-muted iconfont iconjia"
				style="font-size: 50rpx;"></text>
				<text v-if="!form.cover" 
				class="text-muted">点击添加封面图</text>
				<view v-else
				class="px-2 py-1 rounded-circle text-white"
				style="background-color: rgba(0,0,0,0.3);">
					点击修改封面图
				</view>
			</view>
		</view>
		<!-- 标题 -->
		<form-item title="标题">
			<input type="text" v-model="form.title" placeholder="请填写视频标题" class="w-100 font" placeholder-class="text-light-muted"/>
		</form-item>
		<picker mode="selector" :range="range" @change="change">
			<form-item title="分类" showRight hover>
				<text :class="form.category ? 'text-dark':'text-light-muted'">{{form.category ? form.category : '请选择分类'}}</text>
			</form-item>
		</picker>
		<form-item title="描述">
			<textarea style="width: 550rpx;" placeholder="请填写视频描述..." class="py-3" v-model="form.desc" placeholder-class="text-light-muted"/>
		</form-item>
		<!-- #ifdef MP -->
		<main-big-button>发布</main-big-button>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import formItem from '@/components/common/form-item.vue';
	import mainBigButton from '@/components/common/main-big-button.vue';
	export default {
		components: {
			formItem,
			mainBigButton
		},
		data() {
			return {
				form:{
					cover:"",
					category:"",
					title:"",
					desc:""
				},
				range:['分类一','分类二','分类三']
			}
		},
		methods: {
			upload(){
				uni.chooseImage({
					count:1,
					success: (e) => {
						this.form.cover = e.tempFilePaths[0]
					}
				})
			},
			// 修改分类
			change(e){
				this.form.category = this.range[e.detail.value]
			}
		}
	}
</script>

<style>

</style>
