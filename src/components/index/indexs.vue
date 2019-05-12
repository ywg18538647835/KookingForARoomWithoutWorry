<template>
	<div id="warp">
		<div id="headers">
			<div id="header">
				<div class="header1"></div>
				<div class="header2">
					<img src="../../../build/index/my.jpg" alt="我的" />
					<img src="../../../build/index/xiazai.jpg" />
				</div>
			</div>
		</div>
		<div id="nav1">
			<img src="../../../build/index/banner.png" />
			<form class="sousuokuang">
				<input type="submit" class="int1" value="" />
				<input type="text" class="int2" id="" value="" placeholder="输入小区或商圈名开始找房喽" />
			</form>
		</div>
		<div id="index3">
			<div>
				<div><img src="../../../build/index/index_03.png" /></div>
				<h6>二手房</h6>
			</div>
			<div>
				<div><img src="../../../build/index/index_05.png" /></div>
				<h6>新房</h6>
			</div>
			<div>
				<div><img src="../../../build/index/index_07.png" /></div>
				<h6>租房</h6>
			</div>
			<div>
				<div><img src="../../../build/index/index_09.png" /></div>
				<h6>卖房</h6>
			</div>
		</div>
		<div id="nav1">
			<img src="../../../build/index/banner2.png" />
		</div>
		<div id="fandyuan">
			<div class="fangyuan">
				<h3>热门房源</h3>
				<h6>Hot house</h6>
			</div>
		</div>
		<!---->
		<div id="index5" v-for="item5 in list5">
			<div v-for="i in 3">
				<div class="left">
					<img :src="item5.img" />
				</div>
				<div class="right">
					<div>
						<p v-text="item5.div1"></p>
					</div>
					<div v-for="iten5s in item5.div2"><span v-text="iten5s.span1"></span><span v-text="iten5s.span2"></span></div>
					<div v-for="iten5s1 in item5.div3"><span v-text="iten5s1.span1"></span><span v-text="iten5s1.span2"></span></div>
					<div>
						<div class="sp" v-for="iten5ss in item5.div4"><span v-text="iten5ss.span1"></span><span v-text="iten5ss.span2"></span><span v-text="iten5ss.span3"></span> </div>
					</div>
				</div>
			</div>
		</div>
		<!---->
		<div id="reyou">
			<div class="reyou">
				<router-link to='/ind/remen' tag='h3'>热门关注</router-link>
				<router-link to='/ind/youqing' tag='h3'>友情链接</router-link>
			</div>
			<router-view></router-view>
		</div>
		<div id="footer">
			<div class="font">
				<p>北京找房无忧>首页</p>
			</div>
			<div class="footer-logo">
				<div class="logo-left">
					<div><img src="../../../build/index/apple.png" /></div>
					<div>
						<div>iphone</div>
						<div>客户端</div>
					</div>
				</div>
				<div class="logo-right">
					<div><img src="../../../build/index/android.png" /></div>
					<div>
						<div>Android</div>
						<div>客户端</div>
					</div>
				</div>
			</div>
			<div class="footer-botton">
				<p>北京找房无忧房地产经纪有限公司</p>
				<p>网络经营许可证 京ICP备20160812号-12</p>
				<br />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list5: [{
					img: require('../../../build/index/img1.jpg'),
					div1: '文化部最T中间一层文化部最T中间一层',
					div2: [{
						span1: '2室1厅96㎡南北',
						span2: '1105万'
					}],
					div3: [{
						span1: '红庙百里',
						span2: '14268元/平'
					}],
					div4: [{
						span1: '学区房',
						span2: '独家',
						span3: '满五唯一'
					}],
				}, ],
			}
		}
	}
</script>

<style>
	/* border: 0.1rem solid red;#FFE0BB #FF8A00*/
	
	.footer-botton {
		width: 60%;
		color: white;
		text-align: center;
	}
	
	.footer-botton>p {
		display: block;
		padding: 0.3vw 0;
	}
	
	.footer-botton>p:nth-child(1) {
		font-size: 2.3vw;
	}
	
	.footer-botton>p:nth-child(2) {
		font-size: 1.8vw;
	}
	
	.footer-logo {
		width: 50%;
		display: flex;
		justify-content: space-between;
		padding: 0.5vw 0;
	}
	
	.footer-logo>div {
		width: 30%;
		display: flex;
		display: flex;
		align-items: center;
		padding: 1vw 0;
		justify-content: space-around;
	}
	
	.footer-logo>div>div:nth-child(1) {
		width: 35%;
		height: 100%;
	}
	
	.footer-logo>div>div:nth-child(2) {
		color: white;
		align-items: center;
		font-size: 2vw;
	}
	
	.footer-logo>div>div:nth-child(2)>div {
		padding: 0.25vw 0;
	}
	
	#footer {
		width: 100%;
		background-color: black;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.font {
		width: 90%;
		display: flex;
		align-items: center;
		border-bottom: 0.03vw solid white;
	}
	
	.font>p {
		font-size: 2.3vw;
		color: white;
		padding: 1vw 0;
	}
	
	#reyou {
		width: 100%;
		background-color: white;
	}
	
	.reyou>h3 {
		width: 50%;
		float: left;
		text-align: center;
		padding: 1vw 0;
		font-size: 4vw;
		font-weight: 600;
	}
	
	.router-link-active {
		padding: 0vw 0;
		color: #FF8A00;
		border-bottom: 0.3vw solid #FF8A00;
	}
	
	#index5 {
		width: 100%;
		background-color: white;
	}
	
	#index5>div {
		margin-left: 3%;
		width: 95%;
		border-top: 0.1vw solid #FFE0BB;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.8rem 0;
	}
	
	.left {
		height: 100%;
		width: 29%;
		margin-top: 1%;
	}
	
	img {
		width: 100%;
	}
	
	.right {
		width: 65%;
		margin-right: 3%;
	}
	
	.right>div {
		width: 100%;
		padding: 1vw 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	
	.right>div:nth-child(1) {
		font-size: 4vw;
		font-weight: 600;
	}
	
	.right>div:nth-child(1)>p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.right>div:nth-child(2)>span:nth-child(1) {
		color: black;
		font-size: 3vw;
	}
	
	.right>div:nth-child(2)>span:nth-child(2) {
		color: red;
		font-size: 3vw;
		font-weight: 600;
	}
	
	.right>div:nth-child(3)>span {
		color: #888888;
		font-size: 2.8vw;
	}
	
	.sp>span {
		color: #888888;
		font-size: 2.8vw;
		background-color: #E5E9F2;
		margin-right: 0.5vw;
		padding: 0 0.15vw;
	}
	
	#fandyuan {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #FF8A00;
	}
	
	.fangyuan {
		width: 95%;
		padding: 0.8vw 0;
		color: white;
		font-weight: 600;
	}
	
	.fangyuan>h3 {
		font-size: 4vw;
	}
	
	.fangyuan>h6 {
		font-size: 2vw;
	}
	
	#index3 {
		width: 100%;
		display: flex;
		align-items: center;
		background-color: #FF8A00;
	}
	
	#index3>div {
		width: 25%;
		text-align: center;
		padding: 1% 0;
	}
	
	#index3>div>div>img {
		width: 50%;
		height: 50%;
	}
	
	#index3>div>h6 {
		color: white;
		font-size: 3vw;
		font-weight: 600;
	}
	
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}
	
	#warp {
		width: 100%;
		/*background-color: #BEBEBE;*/
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	#headers {
		width: 100%;
		background-color: #FF8A00;
	}
	
	#header {
		width: 95%;
		height: 10vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		padding: 0.8vw 0;
	}
	
	.header1 {
		width: 27vw;
		height: 10vw;
		background: url(../../../build/index/logo.jpg)no-repeat;
		background-size: 100% 100%;
	}
	
	.header2 {
		display: flex;
		justify-content: space-between;
	}
	
	.header2>img {
		width: 8vw;
		height: 9vw;
		margin: 0 0.2vw;
	}
	
	#nav1 {
		position: relative;
		width: 100%;
	}
	
	#nav1>img {
		width: 100%;
	}
	
	.sousuokuang {
		position: absolute;
		bottom: 10%;
		left: 10%;
		width: 80%;
		height: 8vw;
		border: 0.05vw solid #BEBEBE;
		border-radius: 1vw;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;
	}
	
	.int1 {
		width: 6vw;
		height: 6vw;
		background: url(../../../build/index/seach.jpg)no-repeat;
		background-size: 100% 100%;
		outline: none;
	}
	
	.int2 {
		width: 90%;
		height: 7vw;
		color: #888888;
		font-size: 3vw;
		outline: none;
	}
</style>