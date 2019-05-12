<template>
	<div id="warp">
		<div id="qus">
			<div class="qus1">
				<div style="color: #FF8A00;">区域</div>
				<div style="background:#C3A9C3;border: 0;">地铁</div>
			</div>
			<div class="qus2">
				<div>附近</div>
				<div>不限</div>
				<div style="color: #FF8A00;">朝阳</div>
				<div>海淀</div>
				<div>昌平</div>
				<div>丰台</div>
				<div>石景山</div>
			</div>
			<div class="qus3">
				<div style="color: #FF8A00;">不限</div>
				<div>安贞</div>
				<div>埃林匹克公园</div>
				<div>百子湾</div>
				<div>北工大</div>
				<div>北魏</div>
				<div>CBD</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
<style>
	#qus{position: absolute; width: 100%;display: flex;background:#C3A9C3;}
	#qus>div>div{width: 100%;height: 10vw;display: flex;align-items: center ;justify-content: center;background-color: white;border: 0.1vw solid #D3DCE6;font-size: 4vw;}
	.qus1{width: 30%;}
	.qus2{width: 30%;height: 100%;}
	.qus3{width: 40%;height: 100%;}
</style>