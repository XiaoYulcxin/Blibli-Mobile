<template>
	<view id="box" style="overflow-x: hidden;min-height: 100vh;" class="bg-light">
		<view v-for="(item,index) in list" :key="index" class="bg-white">
			<!-- 视频上传进度条 -->
			<progress v-if="item.isedit && item.percent < 100" :percent="item.percent" activeColor="#fb7299"/>
			<view style="height: 350rpx;" class="position-relative bg-light"
			:hover-class="item.isedit ? 'bg-hover-light' : ''"
			@click="chooseVideo(item)">
				<video v-if="item.url" :poster="item.poster" :src="item.url" controls style="height: 350rpx;width: 750rpx;"></video>
				<view v-if="item.isedit"
				class="flex flex-column align-center justify-center position-absolute top-0 left-0 right-0 bottom-0">
					<text v-if="!item.url" 
					class="text-muted iconfont iconjia"
					style="font-size: 50rpx;"></text>
					<text v-if="!item.url" 
					class="text-muted">点击添加视频</text>
				</view>
			</view>
			<!-- 切换视频 -->
			<view v-if="item.url && item.isedit">
				<view class="f-divider"></view>
				<view 
				style="height: 100rpx;"
				class="flex align-center justify-center animated faster fadeIn"
				hover-class="bg-light"
				@click="chooseVideo(item)">
					切换视频
				</view>
				<view class="f-divider"></view>
			</view>
			<!-- 视频标题 -->
			<form-item title="标题">
				<input v-if="item.isedit" type="text" v-model="item.title" placeholder="请填写视频标题" class="w-100 font" placeholder-class="text-light-muted"/>
				<view v-else>{{item.title}}</view>
			</form-item>
			<!-- 视频描述 -->
			<form-item v-if="item.isedit" title="描述">
				<textarea style="width: 550rpx;" placeholder="请填写视频描述..." class="py-3" v-model="item.desc" placeholder-class="text-light-muted"/>
			</form-item>
			<view class="flex" style="height: 100rpx;">
				<view class="flex-1 flex align-center justify-center border-light-secondary" hover-class="bg-light" v-for="(m,mi) in item.options" 
				:key="mi" @click="optionClick(mi,index)"
				:class="m.class">
					{{m.text}}
				</view>
			</view>
			<view class="f-divider"></view>
		</view>
		
		<!-- 添加新章节 -->
		<view v-if="!isedit"
		style="height: 100rpx;"
		class="flex align-center justify-center bg-main text-white"
		hover-class="bg-main-hover"
		@click="create">
			<text class="iconfont iconjia mr-2 font-md"></text>
			添加新章节
		</view>
		
	</view>
</template>

<script>
	let box = null
	import formItem from '@/components/common/form-item.vue';
	export default {
		components: {
			formItem
		},
		data() {
			return {
				list:[{
					title:"第10集：各自的掌中明灯照亮之物",
					desc:"第10集：各自的掌中明灯照亮之物",
					percent:80,
					url:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4",
					isedit:false,
					poster:"",
					options: [{
						text: '修改',
						class:""
					},{
						text: '删除',
						class:""
					}],
				}],
			}
		},
		computed:{
			// 是否编辑
			isedit(){
				let list = this.list.filter(item=>item.isedit)
				return list.length
			}
		},
		methods: {
			optionClick(e, index) {
				switch (e){
					case 0:
					let item = this.list[index]
					if(item.isedit){ // 点击完成
						if(!item.url){
							return uni.showToast({
								title: '请先上传视频',
								icon:"none"
							});
						}
						if(!item.title.length){
							return uni.showToast({
								title: '标题不能为空',
								icon:"none"
							});
						}
					}
					item.isedit = !item.isedit
					item.options[0].text = item.isedit ? '完成' : '修改'
					item.options[0].class = item.isedit ? 'bg-main text-white' : ''
						break;
					case 1:
					uni.showModal({
						content: '是否要删除该列表',
						success:(res)=>{
							if (res.confirm) {
								this.list.splice(index,1)
							}
						}
					});
						break;
				}
			},
			// 选择视频
			chooseVideo(item){
				if(item.isedit){
					uni.chooseVideo({
						count: 1,
						sourceType: ['camera', 'album'],
						success: (res)=> {
							item.url = res.tempFilePath;
						}
					});
				}
			},
			// 添加新章节
			create(){
				this.list.push({
					title:"",
					desc:"",
					percent:100,
					url:"",
					isedit:true,
					poster:"",
					options: [{
						text: '完成',
						class:"bg-main text-white"
					},{
						text: '删除',
						class:""
					}],
				})
				this.pageToBottom()
			},
			pageToBottom(){
				uni.pageScrollTo({
				    scrollTop: (this.list.length - 1) * uni.upx2px(500) + uni.upx2px(700),
				    duration: 300
				});
			}
		}
	}
</script>

<style>

</style>
