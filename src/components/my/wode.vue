<template>
	<div id="warp">
		<div id="img">
			<div class="img-header">
				<router-link to='/denglus' tag='div'></router-link>
				<router-link to='' tag='div'></router-link>
			</div>
			<div class="img-nav">
				<div class="logo">
					<img src="../../../build/my/logo.png"/>
				</div>
				<div class="img-router">
				    <router-link to='/dengluzhuces' tag='h4'>登陆</router-link>
				</div>
			</div>
		</div>
		<div id="warp-nav">
			<!---->
			<router-link to='/denglus' tag='div'>
				<div class="navs-img">
					<img src="../../../build/my/icon1.png"/>
				</div>
				<div class="navs-right"style="border: 0;">
					<h4>我关注的房源</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			<!---->
			<router-link to='/wodeguanzhus' tag='div'>
				<div class="navs-img">
					<img src="../../../build/my/icon2.png"/>
				</div>
				<div class="navs-right">
					<h4>我关注的小区</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			<!---->
			<router-link to='' tag='div'>
				<div class="navs-img">
					<img src="../../../build/my/icon3.png"/>
				</div>
				<div class="navs-right">
					<h4>我关注的新房</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			<!---->
			<router-link to='' tag='div'>
				<div class="navs-img">
					<img src="../../../build/my/icon4.png"/>
				</div>
				<div class="navs-right">
					<h4>我的看房记录</h4>
					<div class="navs-right-right"></div>
				</div>
			</router-link>
			
		</div>
	</div>
</template>

<script>
</script>

<style>
	#warp-nav>div{width: 100%;height: 13vw;color: black;border:0; display: flex;align-items: center;justify-content: center;}
	.navs-img{width: 6%;margin-left: 4vw;padding: 0 2vw;margin-top: 1.5vw;}
	.navs-right{width:87%;height: 13vw;border-top: 0.1vw solid #D3DCE6;display: flex;align-items: center;justify-content: space-between;}
	.navs-right>h4{margin-left: 1vw;font-weight: 350;}
	.navs-right-right{width: 3%;height: 5vw;margin-right: 4vw; background: url(../../../build/my/right.png)no-repeat;background-size: 100% 100%;}
	#warp-nav{width: 100%;background-color: white;border-bottom: 0.1vw solid  #D3DCE6;}
	#img{position: relative;width: 100%;height: 55vw;display: flex;align-items: center;justify-content: center;flex-wrap: wrap; background: url(../../../build/my/bg1.png)no-repeat;background-size: 100% 100%;}
	.img-header{position: absolute;top: 0;left: 0; width: 100%;height: 13vw;display: flex;align-items: center;justify-content: flex-end;}
	.img-header>div:nth-child(1){width: 8vw;height: 9vw;background: url(../../../build/index/my.jpg)no-repeat;background-size: 100% 100%;margin: 0vw 1.5vw;}
	.img-header>div:nth-child(2){width: 8vw;height: 9.5vw;background: url(../../../build/index/xiazai.jpg)no-repeat;background-size: 100% 100%;margin-right: 4vw;}
	.img-nav{width: 30%;height: 30vw;margin-top: 14vw;display: flex;justify-content: center;flex-wrap: wrap;}
	.logo{width: 50%;height: 50%;}
	img{width: 100%;}
	.img-router{width: 65%;height: 8vw;border: 0.3vw solid white;border-radius: 1vw;display: flex;align-items: center;justify-content: center;}
	.img-router>h4{border: 0;color:whitesmoke;font-weight: 100;font-size: 4vw;}
	#warp{width: 100%;background-color:white;height: 100%;}
</style>