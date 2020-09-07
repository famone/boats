<template>
	<div>

		<section id="inner" :style="{'background-image': 'url(' + getEvents(itemSlug).acf.fonovoe_izobrazhenie + ')'}">
			<div class="container">
				<div class="col-lg-12">
					<h1>{{getEvents(itemSlug).title.rendered}}</h1>
					<div class="price-box">
						<p>{{getEvents(itemSlug).acf.stoimost}} руб</p>
						<p>{{getEvents(itemSlug).acf.vremya}}</p>
						<button class="order2" @click="showEvents(getEvents(itemSlug).title.rendered)">Заказать</button>
					</div>
					<button class="goBack" @click="$router.go(-1)"><img src="../assets/img/arr.svg" alt="">Назад</button>
				</div>
			</div>
		</section>


		<section id="insider">
			<div class="container">
				<div class="col-lg-6">
					<h2>Галерея</h2>
					<swiper ref="mySwiper" :options="swiperOptions" class="slider">
						    <swiper-slide v-for="item in getEvents(itemSlug).acf.gallereya" class="text-center">
						    	<div :style="{'background-image': 'url(' + item + ')'}"
						    	 class="slider-img"></div>
						    </swiper-slide>
	  					</swiper>
						
	  					<div class="navigation">
	  						<div class="prevBtn" slot="button-prev"></div>
							<div class="nextBtn" slot="button-next"></div>
	  					</div>

	  					<router-link tag="a" to="/cert">
						<div class="toAction">
							<h5>Ищите впечатляющий подарок 
							на мероприятие? 
							<br>Тогда прогулка на катере 
							будет отличным решением!</h5>
							<br>
							<p class="white-txt">Подробнее <img src="../assets/img/arr.svg" alt=""></p>
						</div>
					</router-link>


				</div>
				<div class="col-lg-6">
					<h2>О мероприятии</h2>
					<p class="grey-txt" v-html="getEvents(itemSlug).content.rendered"></p>
					<button class="order2" @click="showEvents(getEvents(itemSlug).title.rendered)">Заказать</button>
				</div>
			</div>
		</section>


	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from 'axios'

export default{
	data(){
		return{
			itemSlug: '',
			swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
			      autoplay: {
			        delay: 1500,
			        disableOnInteraction: false,
			      },
			      pagination: {
			        el: '.swiper-pagination',
			        clickable: true
			      },
			      loop: true,
			          navigation: {
			            nextEl: '.navigation .nextBtn',
			            prevEl: '.navigation .prevBtn',
			          }
			      }
		}
	},
	computed: {
		...mapGetters('goods', ['getEvents']),
		swiper(){
	       	return this.$refs.mySwiper.$swiper
	    }
	},
	created(){
		this.itemSlug = this.$route.params.id
	},
	methods: {
		showEvents(name){
			this.$store.dispatch('goods/showEvents', name)
		}
	}
}
</script>

<style scoped>
.white-txt{
	font-size: 16px;
	color: #fff;
}
.white-txt img{
	height: 15px;
	transform: rotate(-90deg);
	transition: all .3s ease;
}
.toAction{
	padding: 15px 25px;
	background-color: #B7934D;
}
.toAction:hover .white-txt img{
	margin-left: 30px;
}
h5{
	color: #fff;
	margin: 0;
	font-size: 20px;
	line-height: 30px;
}
.navigation{
	display: flex;
	margin: 30px 0;
}
.prevBtn{
	height:35px;
	width:35px;
	background-color: #B7934D;
	cursor: pointer;
	margin-right: 15px;
	background-image: url(../assets/img/arr.svg);
	background-size: 16px;
	background-position: center;
	background-repeat: no-repeat;
	transform: rotate(90deg);
	transition: all .3s ease;
}
.prevBtn:hover{
	opacity: .8;
}
.nextBtn{
	height:35px;
	width:35px;
	background-color: #B7934D;
	cursor: pointer;
	background-image: url(../assets/img/arr.svg);
	background-size: 16px;
	background-position: center;
	background-repeat: no-repeat;
	transform: rotate(-90deg);
	transition: all .3s ease;
}
.nextBtn:hover{
	opacity: .8;
}
.slider-img{
	width: 100%;
	height: 333px;
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 150px 0;
	position: relative;
}	
#inner:before{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	background-color: rgba(0,0,0,0.4);

}
.price-box{
	display: flex;
	justify-content: left;
	align-items: center;
}
.price-box p{
	font-size: 25px;
	color: #fff;
	margin: 0;
	font-weight: 600;
	margin-right: 40px;
	flex-wrap: wrap;
}
.price-box .order2{
	padding:14px 26px;
	margin: 0;
}
.price-box .order2:hover{
	color: #fff;
	border-color: #fff;
}
</style>