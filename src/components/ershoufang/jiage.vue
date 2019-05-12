<template>
	<div id="warp">
		<div id="jgs">
			<div>不限</div>
			<div>100万以下</div>
			<div>100万-150万</div>
			<div>150万-200万</div>
			<div>200万-250万</div>
			<div>250万-300万</div>
			<div><span>自定义价格</span><span>最小</span><span>最大</span><span>确定</span></div>
		</div>
	</div>
</template>
<script>
</script>
<style>
	#jgs{position: absolute; width: 100%;display: flex;background:white;display: flex;justify-content: flex-end;flex-wrap: wrap;}
	#jgs>div{width: 95%;height: 10vw;display: flex;align-items: center;padding: 0vw 1vw;color: #1D1A1D;font-size: 4vw;border-top: 0.1vw solid #99A9BF;}
	#jgs>div:nth-child(1){border: 0;}
	#jgs>div:nth-child(7)>span:nth-child(2),#jgs>div:nth-child(7)>span:nth-child(3){color: #888888;font-size: 3vw;}
	#jgs>div:nth-child(7)>span:nth-child(4){color:white;font-size: 3vw;background-color: red;padding: 1vw 2vw;}
	#jgs>div:nth-child(7)>*{margin-right: 4vw;}
</style>