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
			<router-link to='/zufangs' tag='h5'><div></div><span>北京租房</span></router-link>
			<router-link to='/zufangxiangqings' tag='h5'><div></div><span>房源信息</span></router-link>
		</div>
		<!---->
		<div id="xqimg">
			<img src="../../../build/zufang/banner.png"/>
		</div>
		<div id="xq01">
			<div>天鹅湾西北3.8米高厅两居，业主换房急售</div>
			<div>
				<div class="xqo1img">
					<img src="../../../build/zufang/xin.png"/>
				</div>
				<span>关注</span>
			</div>
		</div>
		<div id="xq02">
			<div>
				<h4>租金</h4><p>2300元/月</p>
			</div>
			<div>
				<h4>房型</h4><p>2室1厅</p>
			</div>
			<div>
				<h4>面积</h4><p>204平米</p>
			</div>
		</div>
		<!---->
		<div id="xq03">
			<div class="xq03">
				<div><span>楼层：</span><span>高楼层/17层</span></div>
				<div><span>朝向：</span><span>南北</span></div>
			</div>
			<div class="xq03">
				<div><span>装修：</span><span>精装</span></div>
				<div><span>供暖：</span><span>集体供暖</span></div>
			</div>
			<div class="xq03">
				<div><span>年代：</span><span>2007年</span></div>
				<div><span>楼型：</span><span>板楼</span></div>
			</div>
		</div>
		<div id="xq04"style="margin-top:4vw ;">
			<router-link to=''tag='div'>
				<h4>经纪人房评</h4>
				<div></div>
			</router-link>
			<div class="xq04-font">
				地理位置：京都国际处于酒仙桥中心地带，毗邻北京三大商圈，紧邻丽都商圈，隔四环与望京商圈相望，西南紧挨燕莎商圈，地理位置优越。周边配套：颐堤港商业中心，兆维大厦...
			</div>
		</div>
		<div id="xq04"style="margin-top:4vw ;">
			<router-link to=''tag='div'>
				<h4>客户看房记录</h4>
				<div></div>
			</router-link>
			<div class="xq04-font">
				近一个月新增0位看房客户，共50位
			</div>
		</div>
		<div id="xq04"style="margin-top:4vw ;">
			<router-link to=''tag='div'>
				<h4>位置及周边</h4>
				<div></div>
			</router-link>
			<div class="xq04-font">
				<h6>
					<p>地址：[黄村]时代龙和</p>
					<img src="../../../build/zufang/map.png"/>
				</h6>
			</div>
		</div>
		<div id="xq04"style="margin-top:4vw;">
			<router-link to=''tag='div'>
				<h5>小区成交历史(24)</h5>
				<div></div>
			</router-link>
			<div class="xq04-font xq04-fonts">
				<h6><span>3室2厅，146平米，</span><span>5000元</span></h6>
				<h6><span>签约日期：2015-02-26</span></h6>
			</div>
		</div>
		<div class="xqheader"style="margin-top:4vw;"></div>
	    <div id="xqheader"style="margin-top:4vw;">
	    	<div class="xqheader">
	    		<div>
	    			<img src="../../../build/zufang/man.png"/>
	    		</div>
	    		<div>
	    			<h3>张   三</h3>
	    			<p>4001581855转0008</p>
	    		</div>
	    		<div>
	    			<div></div>
	    			<p>致电</p>
	    		</div>
	    		<div>
	    			<div></div>
	    			<p>致电</p>
	    		</div>
	    	</div>
	    </div>
	</div>
</template>
<script>
</script>
<style>
	#xqheader{width: 100%;height:15vw;background:white;}
	.xqheader{position: fixed;bottom: 0;width: 100%;height:15vw;border-top: 0.1vw solid #D3DCE6;background:white;}
	.xqheader{width: 95%;margin: auto;display: flex;align-items: center;justify-content: space-around;}
	.xqheader>div:nth-child(1){width: 12vw;height: 12vw;margin-left: 0vw;}
	.xqheader>div:nth-child(2)>h3{font-size: 4vw;font-weight: 400;color: black;}
	.xqheader>div:nth-child(2)>p{font-size: 3vw;font-weight: 400;color: #888888;}
	.xqheader>div:nth-child(3)>div{width: 8vw;height: 8vw;background: url(../../../build/zufang/icon1.png);background-size: 100% 100%;}
	.xqheader>div:nth-child(3)>p{color: #5DCB96;font-size: 3vw;font-weight: 400;text-align: center;}
	.xqheader>div:nth-child(4)>div{width: 8vw;height: 8vw;background: url(../../../build/zufang/icon2.png);background-size: 100% 100%;}
	.xqheader>div:nth-child(4)>p{color: #5BAEDE;font-size: 3vw;font-weight: 400;text-align: center;}
	*{margin: 0;padding: 0;}
	#warp{width: 100%;background: white;}
	#xq04{width: 94%;border: 0.1vw solid #D3DCE6;margin: auto;margin: auto;background: white;}
	#xq04>div{width: 91%;margin: auto; display: flex;align-items: center;justify-content: space-between;border-bottom: 0.1vw solid #D3DCE6;}
	#xq04>div>h4{color: #FF8A00;font-size: 4vw;padding: 2vw 0vw; }
	#xq04>div>h5{color:black;font-size: 4vw;padding: 2vw 0vw; font-weight: 500;}
	#xq04>div>div{width: 3vw;height: 5vw;background: url(../../../build/zufang/right.png)no-repeat;background-size: 100% 100%;}
	.xq04-font{font-size: 4vw;color: #888888;padding: 4vw 4vw;}
	.xq04-font>h6{width: 95%;}
	.xq04-fonts{width: 95%; display: flex;flex-wrap: wrap;}
	.xq04-fonts>h6{width: 90%;margin: 1.5vw 0;font-size: 3vw;font-weight: 450;}
	.xq04-fonts>h6>span:nth-child(2){color: red;font-size: 3.8vw;font-weight: 550;}
	.xq04-font>h6>p{font-size: 4.2vw;color: #888888;padding: 1vw 0vw;font-weight: 500;}
	#xq03{width: 100%;background: white;border-bottom: 0.1vw solid #D3DCE6;display: flex;justify-content: flex-end;flex-wrap: wrap;align-items: center;}
	#xq03>.xq03:nth-child(1){border: 0;}
	.xq03{width: 95%;border-top: 0.1vw solid #D3DCE6; display: flex;align-items: center;justify-content: space-between;}
	.xq03>div{width: 50%;padding: 5vw 0;}
	.xq03>div>span:nth-child(1){font-size: 4vw;color: black;text-align: left;}
	.xq03>div>span:nth-child(2){font-size: 4vw;color: #888888;text-align: left;}
	#xq02{width: 100%;height: 15vw;border-bottom: 0.1vw solid #D3DCE6;background: white;display: flex;align-items: center;justify-content: space-between;}
	#xq02>div{width: 33%;display: flex;align-items: center;justify-content: center;flex-wrap: wrap;border-left: 0.1vw solid #D3DCE6;}
	#xq02>div:nth-child(1){border: 0;}
	#xq02>div>h4{font-size: 4vw;font-weight: 500;}
	#xq02>div>p{width: 100%;text-align: center;font-size: 4vw;color: #FF8A00;font-weight: 520;}
	#xqimg{width: 100%;}
	#xq01{width: 100%;background: white;border-bottom: 0.1vw solid #D3DCE6;display: flex;align-items: center;justify-content: space-between;background-color: #D3DCE6;}
	#xq01>div:nth-child(1){width: 80%;height: 5vw;display: flex;align-items: center;justify-content: center;font-size: 4vw;padding: 4vw 11.5vw;border-right: 0.1vw solid  #888888;}
	#xq01>div:nth-child(2){width: 20%;height:100%;display: flex;align-items: center;flex-wrap: wrap;justify-content: center;}
	.xqo1img{width: 25%;}
	#xq01>div>span{width:100%;height: 50%;text-align: center;font-size: 3vw;color: #888888;}
</style>