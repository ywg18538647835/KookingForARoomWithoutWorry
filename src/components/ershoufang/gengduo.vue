<template>
	<div id="warp">
		<!---->
		<div id="gds">
			<div class="gds">
				<div>
				    <h4>区域</h4>
				    <ul class="gdsfont">
					    <li>南</li>
					    <li>南北</li>
					    <li>东</li>
					    <li>西</li>
					    <li>北</li>
				    </ul>
			    </div>
			</div>
			<!---->
			<div class="gds">
				<div>
				    <h4>面积(平米)</h4>
				    <ul class="gdsfont">
					    <li>500以下</li>
					    <li>50-70</li>
					    <li>70-90</li>
					    <li>90-110</li>
					    <li>110-130</li>
					    <li>130-150</li>
					    <li>150-200</li>
					    <li>200以上</li>
				    </ul>
			    </div>
			</div>
			<!---->
			<div class="gds">
				<div>
				    <h4>标签</h4>
				    <ul class="gdsfont">
					    <li>学区房</li>
					    <li>地铁房</li>
					    <li>不限购</li>
					    <li>满两年</li>
					    <li>满五唯一</li>
					    <li>降价</li>
					    <li>新上</li>
					    <li>独家</li>
					    <li>有钥匙</li>
				    </ul>
			    </div>
			</div>
			<!---->
			<div class="gds">
				<div>
				    <h4>楼龄</h4>
				    <ul class="gdsfont">
					    <li>5年以内</li>
					    <li>10年以内</li>
					    <li>10-20年</li>
					    <li>20年以上</li>
				    </ul>
			    </div>
			</div>
			<!---->
			<div class="gds">
				<div>
				    <h4>楼层</h4>
				    <ul class="gdsfont">
					    <li>低楼层</li>
					    <li>中楼层</li>
					    <li>高楼层</li>
				    </ul>
			    </div>
			</div>
			<!---->
			<div class="qk">清空条件</div>
			<div class="qk1">确定</div>
		</div>
		<!---->
	</div>
</template>
<script>
</script>
<style>
	.qk{width: 100%;height: 10vw;display: flex;align-items: center;justify-content: center;font-size: 5vw;color: #888888;}
	.qk1{width: 100%;height: 10vw;display: flex;align-items: center;justify-content: center;font-size: 5vw;color: white;background-color: #FF8A00;}
	#gds{position: absolute; width: 100%;display: flex;background:white;display: flex;justify-content:center;flex-wrap: wrap;}
	#gds>div{width: 100%;border-bottom: 0.1vw solid #99A9BF;}
	.gds>div{width: 90%;margin: auto;padding: 2vw 0;}
	.gds>div>h4{font-size: 4vw;color: black;font-weight: 500;padding: 1vw 1vw;}
	.gdsfont{width: 100%;}
	.gdsfont>li{width: 20%;list-style: none;display: inline-block;padding: 1vw 0;text-align: center;border: 0.1vw solid #99A9BF;margin:1.5vw 1.6vw;font-size: 3vw;color: #888888;}
</style>