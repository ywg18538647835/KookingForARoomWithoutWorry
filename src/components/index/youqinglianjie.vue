<template>
	<div class="index-view">
		<div class="index-left">
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
		</div>
		<div class="index-right">
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
			<div><router-link to='/zufangs'tag='p'>r北京二手房</router-link></div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.index-view{
		display: flex;align-items: center;justify-content: space-around;
		width: 95%;margin: auto;padding: 1vw 0;
	}
	.index-view>div>div{color: #888888;padding: 0.5vw 0;}
	.index-view>div>div>p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-size: 3vw;}
</style>