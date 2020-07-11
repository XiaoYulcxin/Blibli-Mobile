<template>
	<view>
		<view v-if="msg && maskStatus" class="mask animated faster fadeIn"
		@touchmove.stop.prevent="moveHandle" style="background-color: rgba(0,0,0,0.3);"></view>
		<view class="fixed-top flex justify-center align-center py-2 animated faster" :class="toastClass" v-if="msg">
			<view v-if="loading" class="loading"></view>
			<text class="ml-2">{{msg}}</text>
		</view>
	</view>
</template>

<script>
	const toastType = {
		danger:"bg-danger text-white",
		primary:"bg-primary text-white",
		success:"bg-success text-white",
		light:"bg-light text-dark",
		warning:"bg-warning text-dark",
	}
	export default {
		data() {
			return {
				msg: "",
				maskStatus:false,
				timer:null,
				animate:"slideInDown",
				type:"",
				options:{},
				loading:false
			}
		},
		computed: {
			toastClass() {
				return `${this.animate} ${toastType[this.type]}`
			}
		},
		methods: {
			moveHandle(){},
			showLoading(msg,type='light',mask=false){
				this.show({
					msg,type,mask,
					loading:true,
					auto:false
				})
			},
			showToast(msg,type='light',mask=false){
				this.show({
					msg,type,mask
				})
			},
			show(options){
				this.options = options
				this.loading = options.hasOwnProperty('loading') ? options.loading : false
				this.msg = options.msg
				this.type = options.type || 'light'
				if (options.mask) {
					this.maskStatus = true
				}
				this.animate = "slideInDown"
				let auto = options.hasOwnProperty('auto') ? options.auto : true
				if (this.timer) {
					clearTimeout(this.timer)
				}
				if (auto) {
					this.timer = setTimeout(()=>{
						this.hide()
					},3000)
				}
			},
			hide(){
				this.animate = 'slideOutUp'
				if (this.options.mask) {
					this.maskStatus = false
				}
			}
		},
	}
</script>

<style scoped>
	.loading {
		width:40rpx;
		height:40rpx;
		border:5rpx solid #333333;
		border-bottom:#aaa 5rpx solid;
		border-radius:50%;
		animation:load 1.1s infinite linear;
	}
	@keyframes load {
		from {
			transform:rotate(0deg);
		}
		to {
			transform:rotate(360deg);
		}
	}
</style>
