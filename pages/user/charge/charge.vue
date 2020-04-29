<template>
	<view class="charge bg-white">
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">
				账户充值
			</block>
		</cu-custom>
		<view class="padding bg-white">
			<view class="grid col-2 margin-bottom text-center text-gray">
				<view v-for="(item,index) in chargeList" :key="index" class="padding-sm">
					<view class="padding-sm radius shadow chargeContent" @tap="checkAction(item.value)" :class="checkValue === item.value?'light bg-orange lines-red':'lines-gray'">
						<!-- <view class="cu-tag bg-blue"> -->
							<image src="../../../static/images/hot.svg" mode=""></image>
						<!-- </view> -->
						<view class="text-lg text-black">{{item.label}}</view>
						<text>{{item.remark}}</text>
						<br>
						<text>{{item.remarktwo}}</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="padding-bottom-xs bg-gray"></view>
		
		<view class="padding bg-white flex flex-direction solid-bottom">
			<button class="cu-btn round bg-orange lg disabled" :class="checkValue?'':'light'">立即充值</button>
		</view>
		<view class="padding bg-white">
			<view class="margin">充值说明</view>
			<view class="margin">1、人民币/金币的汇率为：1元=100书币</view>
			<view class="margin">2、金币属于虚拟商品，一经购买概不退换。</view>
			<view class="margin">3、若充值遇到任何问题，可以联系我们的客服。</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chargeList: [
					{
						value: 10,
						label: '10元',
						remark: '1000+500书币',
						remarktwo: '多送5元'
					},
					{
						value: 20,
						label: '20元',
						remark: '2000+1200书币',
						remarktwo: '送12元'
					},
					{
						value: 30,
						label: '30元',
						remark: '3000+2100书币',
						remarktwo: '多送21元'
					},
					{
						value: 50,
						label: '50元',
						remark: '5000+4000书币',
						remarktwo: '多送40元'
					},
					{
						value: 80,
						label: '80元',
						remark: '8000+7200书币',
						remarktwo: '多送72元'
					},
					{
						value: 100,
						label: '100元',
						remark: '10000+1000书币',
						remarktwo: '多送100元'
					},
					{
						value: 365,
						label: '365元',
						remark: 'VIP包年',
						remarktwo: 'VIP包年'
					}
				],
				checkValue: null
			};
		},
		methods:{
			checkAction(value) {
				this.checkValue = value
			}
		}
	}
</script>

<style lang="less">
.charge {
	height: 100vh;
	.chargeContent {
		position: relative;
		transition: all .3s linear;
		image {
			position: absolute;
			top: 0;
			right: 0;
			width: 100rpx;
			height: 90rpx;
		}
	}
}
</style>
