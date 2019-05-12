<template>
	<div id="warp">
		<div id="fxs">
			<div><span>不限</span><input type="checkbox" /> </div>
			<div><span>1室</span><input type="checkbox"/></div>
			<div><span>2室</span><input type="checkbox"/></div>
			<div><span>3室</span><input type="checkbox"/></div>
			<div><span>4室</span><input type="checkbox"/></div>
			<div><span>5室</span><input type="checkbox"/></div>
			<router-link to=''tag='h3'>确定</router-link>
		</div>
	</div>
</template>
<script>
</script>
<style>
	#fxs{position: absolute; width: 100%;display: flex;background:white;display: flex;justify-content: flex-end;flex-wrap: wrap;}
	#fxs>h3{width: 100%;height: 10vw;background-color: #FF8A00;color: white;font-weight: 600; font-size: 5vw;display: flex;align-items: center;justify-content: center;}
	#fxs>div{width: 95%;height: 10vw;display: flex;align-items: center;justify-content: space-between; padding: 0vw 1vw;color: #1D1A1D;font-size: 4vw;border-top: 0.1vw solid #99A9BF;}
	#fxs>div>span{font-size: 4vw;color: #888888;}
	#fxs>div>input{width: 5vw;height: 5vw;margin-right: 4vw;}
	#fxs>div:nth-child(1){border: 0;}
</style>