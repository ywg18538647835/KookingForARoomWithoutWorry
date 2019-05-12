<template>
	<div id="warp">
		<form method="post">
			<div class="pt01input">
				<input type="number"placeholder="请输入手机号" />
			    <input type="password" name="" placeholder="请输入密码"/>
			</div>
			<router-link to=''tag='div'><button type="submit">立即登录</button></router-link>
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
	/**{border: 0.1vw dashed #009966;}*/
	.pt01input{width: 100%;height: 24vw;border-bottom: 0.05vw solid  #D3DCE6;display: flex;flex-wrap: wrap;justify-content: flex-end;}
	.pt01input>input{outline: none; width: 97%;height: 12vw;display: flex;align-items: center;border-bottom: 0.05vw solid #D3DCE6;background-color: white;color: #F5F5F5;font-size: 4vw;}
	#warp>form{width: 100%;background-color: white;position: relative;}
	#warp>form>div:nth-child(2){border: 0;}
	#warp>form>div>button{width: 94%;height: 12vw; display: flex;align-items: center;justify-content: center;background-color: #FF8A00;margin-top: 5vw;margin-left: 3%;color: white;font-size: 5vw;font-weight: 400;}
	.pt01footer{width: 94%;height: 10vw;display: flex;align-items: center;justify-content: space-between;margin: auto;font-size: 3.5vw;}
	.pt01footer>span:nth-child(1){color: #FF8A00;}
	.pt01footer>span:nth-child(2){color: black;}
	.pt01footer>.router-link-active{border: 0;color: #FF8A00;}
</style>