<template>
	<div id="warp">
		<div id="dlheader">
			<div class="dlheader">
				<div class="dlheader-left">
					<div class="dlheader-logo"></div>
					<div class="dlheader-id">
						<span>北京</span><span></span>
					</div>
				</div>
				<div class="dlheader-right">
					<router-link to='/denglus' tag='div'></router-link>
				    <router-link to='' tag='div'></router-link>
				</div>
			</div>
		</div>
		<div id="dlnav">
			<router-link to='/ind' tag='h5'>首页</router-link>
			<router-link to='/denglus' tag='h5'><div></div><span>我的</span></router-link>
		</div>
		<div id="dlimg">
			<div class="dllogo">
				<img src="../../../build/my/urse2.png"/>
			</div>
			<div>欢迎你，18686868686</div>
		</div>
		<div id="warp-nav">
			<!---->
			<router-link to='/denglus' tag='h5'>
				<div class="h5-right"style="border: 0;">
					<h4>我关注的房源</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			<!---->
			<router-link to='/wodeguanzhus' tag='h5'>
				<div class="h5-right">
					<h4>我关注的小区</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			<!---->
			<router-link to='' tag='h5'>
				<div class="h5-right">
					<h4>我的看房记录</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
		</div>
		<div id="dlhz">
			<router-link to='/wodes'tag='button'>退出登录</router-link>
		</div>
	</div>
</template>
<script>
</script>
<style>
	.dlheader-right>div:nth-child(1){width: 8vw;height: 9.5vw;background: url(../../../build/index/my.jpg)no-repeat;background-size: 100% 100%;margin: 0vw 1.5vw;}
	.dlheader-right>div:nth-child(2){width: 8vw;height: 9.5vw;background: url(../../../build/index/xiazai.jpg)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	#dlheader{width: 100%;background-color: #FF8A00;}
	.dlheader{width: 95%;height: 10vw;padding: 2vw 0;margin: auto;display: flex;align-items: center;justify-content: space-between;}
	.dlheader>div{display: flex;align-items: center;justify-content: space-between;}
	.dlheader-logo{width: 20vw;height: 7.5vw;background: url(../../../build/my/denglus_03.png)no-repeat;background-size: 100% 100%;}
	.dlheader-id{color: white;font-size: 4vw;margin-left:2vw;display: flex;}
	.dlheader-id>span:nth-child(2){width: 6vw;height: 5vw;margin-top: 1vw; background: url(../../../build/my/denglubj_03.png)no-repeat;background-size: 100% 100%;}
	#dlnav{width: 100%;background-color: white;display: flex;align-items: center;}
	#dlnav>h5{border: 0;color: black;font-weight: 250;font-size: 4vw;display: flex;align-items: center;padding: 0 1.5vw;}
	#dlnav>h5>div{width: 3vw;height: 9vw;background: url(../../../build/my/right.png)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	#dlimg{width: 100%;height: 40vw; background: url(../../../build/my/bg2.png)no-repeat;background-size: 100% 100%;display: flex;justify-content: center;flex-wrap: wrap;align-items: center;}
	.dllogo{width: 15vw;height: 15vw;}
	#dlimg>div:nth-child(2){width: 100%;text-align: center;color: white;font-size: 5vw;font-weight: 250;}
	#warp-nav{width: 100%;background-color: white;border-bottom: 0.1vw solid  #D3DCE6;}
	#warp-nav>h5{border: 0;color: black;margin-left: 2%;}
	.h5-right{width:100%;height: 13vw;border-top: 0.1vw solid #D3DCE6;display: flex;align-items: center;justify-content: space-between;}
	.h5-right>h4{font-size: 5vw;font-weight:500;}
	#dlhz{width: 100%;background-color: white;}
	#dlhz>button{width: 94%;padding: 3vw 0;text-align: center;border: 0.1vw solid #BEBEBE;margin-top: 5vw;margin-left: 3%;background-color: white;}
</style>