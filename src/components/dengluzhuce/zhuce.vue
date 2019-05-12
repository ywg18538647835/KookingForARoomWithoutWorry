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
			<router-link to='/zhuces' tag='h5'><div></div><span>注册</span></router-link>
		</div>
		
		<form method="post">
			<div class="pt01input ptthere">
				<input type="number"placeholder="请输入手机号" />
			    <input type="password" name="" placeholder="请输入短信中的验证码"/>
			    <input type="password" name=""placeholder="请输入新密码" />
			</div>
			<div class="pt02button">发送验证码</div>
			<router-link to=''tag='div'><button type="submit">立即注册</button></router-link>
		</form>
	</div>
</template>

<script>
</script>

<style>
	.ptthere{width: 100%;height: 36vw;border-bottom: 0.05vw solid  #D3DCE6;display: flex;flex-wrap: wrap;justify-content: flex-end;}
</style>