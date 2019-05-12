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
			<router-link to='/dengluzhuces' tag='h5'><div></div><span>登录</span></router-link>
		</div>
		<div id="ptnav">
			<div class="ptheader">
				<router-link to='/dengluzhuces/ptones' tag='h4'>普通登录</router-link>
				<router-link to='/dengluzhuces/pttwos' tag='h4'>验证码登录</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
</script>
<style>
	.dlheader-rights>div:nth-child(1){width: 8vw;height: 9vw;background: url(../../../build/index/my.jpg)no-repeat;background-size: 100% 100%;margin: 0vw 1.5vw;}
	.dlheader-rights>div:nth-child(2){width: 8vw;height: 9.5vw;background: url(../../../build/index/xiazai.jpg)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	
	#dlheader{width: 100%;background-color: #FF8A00;}
	.dlheader{width: 95%;height: 10vw;padding: 2vw 0;margin: auto;display: flex;align-items: center;justify-content: space-between;}
	.dlheader>div{display: flex;align-items: center;justify-content: space-between;}
	.dlheader-logo{width: 20vw;height: 7.5vw;background: url(../../../build/my/denglus_03.png)no-repeat;background-size: 100% 100%;}
	.dlheader-id{color: white;font-size: 4vw;margin-left:2vw;display: flex;}
	.dlheader-id>span:nth-child(2){width: 6vw;height: 5vw;margin-top: 1vw; background: url(../../../build/my/denglubj_03.png)no-repeat;background-size: 100% 100%;}
	#dlnav{width: 100%;background-color: white;display: flex;align-items: center;border-bottom: 0.05vw solid  #D3DCE6;}
	#dlnav>h5{border: 0;color: black;font-weight: 250;font-size: 4vw;display: flex;align-items: center;padding: 0 1.5vw;}
	#dlnav>h5>div{width: 3vw;height: 9vw;background: url(../../../build/my/right.png)no-repeat;background-size: 100% 100%;margin-right: 1.5vw;}
	/**{border: 0.1vw solid #009966;}*/
	#ptnav{width: 100%;}
	.ptheader{width: 100%;display: flex;align-items: center;background-color: white;}
	.ptheader>h4{width: 50%;height: 10vw;color: black;font-size: 5vw;font-weight: 500;display: flex;align-items: center;justify-content: center;}
	.ptheader>.router-link-active{border-bottom: 0.5vw solid #FF8A00;}
</style>