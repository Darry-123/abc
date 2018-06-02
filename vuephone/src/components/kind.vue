<template>
 <div class="box">
		  <div class="box2">
				<div><img class="imgser" src="../assets/img/search.png"> </div>
				<div>
				    <router-link to='/kind1'>fenlei</router-link>
			        <router-link to='/kind2'>pinpai</router-link>
		        </div>
		        <div></div>
		  </div>
		 
		  <div>
		  	<router-view></router-view>
		  </div>
	</div>

</template>
<script>
	export default{

	}
</script>
<style scoped>
	.box{
		width: 100%;
		display:relative;
	}
	 .box2 {
	 	height: 85px;
	 	display: flex;
	 	align-items:center;
		justify-content:space-around;
	 	background-color: #2bd0a4;
	 	font-size: 35px;
	 	
	 }
	 a{
	 	color: white;
	 	display: inline-block;
		padding-bottom: 10px;
	 }
	.box2 img.imgser{
	 	width:45px;
	 	height: 45px;
	 }
	 .router-link-exact-active{
	 	width: 110px;
	 	border-bottom: 1px solid white;
	 	margin-right: 20px;
	 	color: white;
	 }

</style>