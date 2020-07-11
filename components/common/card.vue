<template>
	<view class="overflow-hidden" :class="cardClass" style="width: 750rpx;">
		<slot name="header">
			<view class="p-3 font-lg font-weight-bold">
				{{title}}
			</view>
		</slot>
		<slot></slot>
		<view v-if="showRefresh" class="flex align-center justify-center py-1 mb-2 font text-main animated faster" hover-class="pulse text-main-hover">
			<text class="iconfont iconshuaxin mr-1"></text> 换一批
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:String,
			showRefresh:{
				type:Boolean,
				default:true
			},
			cardClass:{
				type:String,
				default:''
			}
		}
	}
</script>

<style>
</style>
