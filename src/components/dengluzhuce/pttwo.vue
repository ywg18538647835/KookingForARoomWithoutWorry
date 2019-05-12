<template>
	<div id="warp">
		<form method="post">
			<div class="pt01input">
				<input type="number"placeholder="请输入手机号" />
			    <input type="password" name="" placeholder="请输入短信中的验证码"/>
			</div>
			
			<router-link to=''tag='div'><button type="submit">验证并登陆</button></router-link>
			<div class="pt02button">发送验证码</div>
			<div class="pt01footer">
				<router-link to='/zhuces'tag='span'>立即注册</router-link>
				<router-link to='/zhaohuimimas'tag='span'>忘记密码</router-link>
			</div>
		</form>
	</div>
</template>
<script>
</script>
<style>
	.pt02button{position: absolute;top: 1.5vw;right: 4vw;display: flex;align-items: center;justify-content: center;padding: 2vw 2vw; font-size: 3.5vw;border: 0.1vw solid #D3DCE6;}
</style>