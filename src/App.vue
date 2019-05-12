<!--展示模板-->
<template>
	<div id="app">
		<div id="right">
			<div id="app-right">
				<router-link to="/ind" tag="h5">首页</router-link>
				<router-link to="/wodes" tag="h5">我的</router-link>
				<router-link to="/zufangs" tag="h5">租房</router-link>
				<router-link to="/ershoufangs" tag="h5">二手房</router-link>
				<router-link to="/dengluzhuces" tag="h5">登录注册</router-link>
				<div id="scrollTop" @click="scrollTop"><router-link to=''>返回顶部</router-link></div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<!--导入组件-->
<script>
//	import mys from '@components/my/mys.vue'
	export default {
		data() {
			return {

			}
		},
		methods:{
			scrollTop(){
//				 document.body.scrollTop = 0;
				 document.documentElement.scrollTop = 0;
			}
		}
	}
</script>
<!--样式代码-->
/*
<style>
	/* border: 0.1rem solid red;#FFE0BB #FF8A00*/
	
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	
	#app {
		width: 100%;
		background-color: #BEBEBE;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	#right{
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		z-index: -1;
		/*background-color: #D3DCE6;*/
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		z-index: 1;
	}
	#app-right {
		margin-top: 10vw;
		border-radius: 4vw;
	}
	#app-right>h5 {
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		margin: 2vw 0;
		color:  #FF8A00;
		font-weight: 500;
		font-size: 2.5vw;
		border: 0;
	}
	#app-right>h5:hover {
		color: #009966;
	}
</style>