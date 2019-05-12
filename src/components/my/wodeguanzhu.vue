<template>
	<div id="warp">
		<!---->
		<div id="dlheader">
			<div class="dlheader">
				<div class="dlheader-left">
					<div class="dlheader-logo"></div>
					<div class="dlheader-id">
						<span>北京</span><span></span>
					</div>
				</div>
				<div class="dlheader-rights">
					<router-link to='/denglus' tag='div'></router-link>
				    <router-link to='' tag='div'></router-link>
				</div>
			</div>
		</div>
		<!---->
		<div id="dlnav">
			<router-link to='/ind' tag='h5'>首页</router-link>
			<router-link to='/wodes' tag='h5'><div></div><span>我的</span></router-link>
			<router-link to='/wodeguanzhus' tag='h5'><div></div><span>我关注的小区</span></router-link>
		</div>
		<!---->
		<div id="gznav">
			<!---->
			<div class="gznav">
				<div class="gznav-img">
					<img src="../../../build/my/img1.png"/>
				</div>
				<div class="gznav-font">
					<h3>辉煌国际</h3>
					<p>昌平区 - 回龙观</p>
					<div>
						<span>2007年建成</span>
						<span>37050元/平</span>
					</div>
					<p>板塔结合</p>
				</div>
			</div>
			<!---->
			<div class="gznav">
				<div class="gznav-img">
					<img src="../../../build/my/img2.png"/>
				</div>
				<div class="gznav-font">
					<h3>万寿园</h3>
					<p>昌平区 - 回龙观</p>
					<div>
						<span>2007年建成</span>
						<span>56447元/平</span>
					</div>
					<p>板塔结合</p>
				</div>
			</div>
			<!---->
			<div class="gznav">
				<div class="gznav-img">
					<img src="../../../build/my/img3.png"/>
				</div>
				<div class="gznav-font">
					<h3>红莲南里5号</h3>
					<p>昌平区 - 回龙观</p>
					<div>
						<span>2007年建成</span>
						<span>89776元/平</span>
					</div>
					<p>板塔结合</p>
				</div>
			</div>
			<!---->
			<div class="gznav">
				<div class="gznav-img">
					<img src="../../../build/my/img4.png"/>
				</div>
				<div class="gznav-font">
					<h3>万寿西街16号</h3>
					<p>昌平区 - 回龙观</p>
					<div>
						<span>2007年建成</span>
						<span>90778元/平</span>
					</div>
					<p>板塔结合</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style>
	.dlheader-rights>div:nth-child(1){width: 8vw;height: 9.5vw;background: url(../../../build/index/my.jpg)no-repeat;background-size: 100% 100%;margin: 0vw 1.5vw;}
	.dlheader-rights>div:nth-child(2){width: 8vw;height: 9.5vw;background: url(../../../build/index/xiazai.jpg)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	#dlheader{width: 100%;background-color: #FF8A00;}
	.dlheader{width: 95%;height: 10vw;padding: 2vw 0;margin: auto;display: flex;align-items: center;justify-content: space-between;}
	.dlheader>div{display: flex;align-items: center;justify-content: space-between;}
	.dlheader-logo{width: 20vw;height: 7.5vw;background: url(../../../build/my/denglus_03.png)no-repeat;background-size: 100% 100%;}
	.dlheader-id{color: white;font-size: 4vw;margin-left:2vw;display: flex;}
	.dlheader-id>span:nth-child(2){width: 6vw;height: 5vw;margin-top: 1vw; background: url(../../../build/my/denglubj_03.png)no-repeat;background-size: 100% 100%;}
	#dlnav{width: 100%;background-color: white;display: flex;align-items: center;}
	#dlnav>h5{border: 0;color: black;font-weight: 250;font-size: 4vw;display: flex;align-items: center;padding: 0 1.5vw;}
	#dlnav>h5>div{width: 3vw;height: 9vw;background: url(../../../build/my/right.png)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	
	/**{border: 0.1vw dashed red;}*/
	#gznav{width: 100%;background-color: white;display: flex;flex-wrap: wrap;justify-content: center;}
	#gznav>div:nth-child(1){border: 0;}
	.gznav{width: 95%;display: flex;align-items: center;justify-content: space-between;padding: 3vw 0;border-top: 0.1vw solid #FF8A00;}
	.gznav-img{width: 37%;}
	.gznav-font{width:60%;}
	.gznav-font>*{padding: 1vw 0;}
	.gznav-font>h3{font-size: 5vw;font-weight: 270;}
	.gznav-font>p,.gznav-font>div>span:nth-child(1){color: #BEBEBE;font-size: 2vw;}
	.gznav-font>div{width: 100%;display: flex;align-items: center;justify-content: space-between;}
	.gznav-font>div>span:nth-child(2){font-size: 4vw;color: #FF8A00;font-weight: 800;margin-right: 2vw;}
</style>