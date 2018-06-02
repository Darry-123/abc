<template>
	<div class="box">
		  <div class="box2">
				<div><img class="imgser" src="../assets/img/search.png"> </div>
				<div>禾禾小镇</div>
				<div>
				    <div class="smartradiu">
				    	<div class="smartradiu-smart"></div>
				    	<div class="smartradiu-smart"></div>
				    	<div class="smartradiu-smart"></div>
				    </div>
					<ul style="display:none">
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</div>
			</div>
			<div class="body">
				 <div class="swiper-container">   
				   <div class="swiper-wrapper">    
				      <div class="swiper-slide">Slide 1</div>      
				       <div class="swiper-slide">Slide 2</div>     
				         <div class="swiper-slide">Slide 3</div>   
				           </div>     <!-- 如果需要分页器 -->   
				            <div class="swiper-pagination"></div>  
				               <!-- 如果需要导航按钮 -->   
				                <div class="swiper-button-prev"></div>  
				                   <div class="swiper-button-next"></div>  
				                      <!-- 如果需要滚动条 -->   
				                       <div class="swiper-scrollbar"></div> 
				                         </div> 
			</div>
	</div>
</template>
<script>
  import Swiper from 'swiper'; 
  import 'swiper/dist/css/swiper.min.css'; 
	export default{
	mounted(){  
	 /* eslint-disable no-new */ 
	  new Swiper('.swiper-container', {}) 
	} 

	}
</script>
<style scoped>
*{margin: 0;padding: 0;} 
	.box{
		width: 100%;
		display:relative;
	}
	 .box2 {
	 	width: 100%;
	 	height: 85px;
	 	display: flex;
	 	justify-content:space-around;
	 	align-items:center;
	 	background-color: #2bd0a4;
	 	font-size:26px;
	 }
	 .box2 img.imgser{
	 	width:45px;
	 	height: 45px;
	 }
	.smartradiu-smart{
		width: 8px;
		height: 8px;
		background-color: white;
		border-radius: 50%;
		margin: 5px
	}
  .swiper-container {   width: 600px;   height: 300px; } 

</style>