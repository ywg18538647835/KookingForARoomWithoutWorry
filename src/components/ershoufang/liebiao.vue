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
		<!--<div id="dlnav">
			<router-link to='/ind' tag='h5'>首页</router-link>
			<router-link to='/zufangs' tag='h5'><div></div><span>北京租房</span></router-link>
		</div>-->
		<!---->
		<div id="zfform">
			<form class="zfform" action="" method="post">
			    <input type="text" name="" id="" value="" />
			    <input type="submit" value="" />
		    </form>
		</div>
		<div id="zfnav">
			<router-link to='/ershoufangs/quyus'tag='h4'>区域<div class="zfform-img"></div> </router-link>
			<router-link to='/ershoufangs/jiages'tag='h4'>价格<div class="zfform-img"></div> </router-link>
			<router-link to='/ershoufangs/fangxings'tag='h4'>房型<div class="zfform-img"></div> </router-link>
			<router-link to='/ershoufangs/gengduos'tag='h4'>更多<div class="zfform-img"></div> </router-link>
			<div id="zfviews">
			    <router-view></router-view>
		    </div>
		</div>
		
		<div id="lbnav">
			<!---->
			<router-link to='/xiangqingyes' tag='div'>
				<div class="lbnav-img">
					<img src="../../../build/twofang/img4.png"/>
				</div>
				<div class="lbnav-font">
					<h3 style="font-size: 4vw;color:black;font-weight: 600;">西便门外大街 2室1厅 89平</h3>
					<p style="font-size: 2vw;color:black;font-weight: 500;">南北 高楼层/6层</p>
					<div>
						<span style="font-size: 2vw;color:#888888;font-weight: 500;">签约价格：13244/平</span>
						<span style="font-size: 4vw;color:red;font-weight: 800;margin-right: 2vw;">1105万</span>
					</div>
					<p style="font-size: 2vw;color:#888888;font-weight: 500;">签约日期：2015年11月10日</p>
				</div>
			</router-link>
			<!---->
			<router-link to='/xiangqingyes' tag='div'>
				<div class="lbnav-img">
					<img src="../../../build/twofang/img4.png"/>
				</div>
				<div class="lbnav-font">
					<h3 style="font-size: 4vw;color:black;font-weight: 600;">西便门外大街 2室1厅 89平</h3>
					<p style="font-size: 2vw;color:black;font-weight: 500;">南北 高楼层/6层</p>
					<div>
						<span style="font-size: 2vw;color:#888888;font-weight: 500;">签约价格：13244/平</span>
						<span style="font-size: 4vw;color:red;font-weight: 800;margin-right: 2vw;">1105万</span>
					</div>
					<p style="font-size: 2vw;color:#888888;font-weight: 500;">签约日期：2015年11月10日</p>
				</div>
			</router-link>
			<!---->
			<router-link to='/xiangqingyes' tag='div'>
				<div class="lbnav-img">
					<img src="../../../build/twofang/img4.png"/>
				</div>
				<div class="lbnav-font">
					<h3 style="font-size: 4vw;color:black;font-weight: 600;">西便门外大街 2室1厅 89平</h3>
					<p style="font-size: 2vw;color:black;font-weight: 500;">南北 高楼层/6层</p>
					<div>
						<span style="font-size: 2vw;color:#888888;font-weight: 500;">签约价格：13244/平</span>
						<span style="font-size: 4vw;color:red;font-weight: 800;margin-right: 2vw;">1105万</span>
					</div>
					<p style="font-size: 2vw;color:#888888;font-weight: 500;">签约日期：2015年11月10日</p>
				</div>
			</router-link>
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
				<br/>
			</div>
		</div>
		
		
	</div>
</template>
<script>
</script>
<style>
	#lbnav{width: 100%;background-color: white;display: flex;flex-wrap: wrap;justify-content: flex-end;}
	#lbnav>div:nth-child(1){border: 0;}
	#lbnav>div{width: 95%;color: black; display: flex;align-items: center;justify-content: space-between;padding: 3vw 0;border-top: 0.1vw solid #FF8A00;}
	.lbnav-img{width: 33%;}
	.lbnav-font{width:65%;}
	.lbnav-font>*{padding: 1.8vw 0;}
	.lbnav-font>div{width: 100%;display: flex;align-items: center;justify-content: space-between;}
	#zfviews{position: absolute;width: 100%;margin-top: 5vw;}
	
	
	
	
	
	
</style>