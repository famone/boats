<template>
	<div>
		<section id="inner" :style="{'background-image': 'url(' + getBoats(itemSlug).acf.fonovoe_izobrazhenie + ')'}">
			<div class="container">
				<div class="col-lg-12">
					<h1>{{getBoats(itemSlug).title.rendered}}</h1>
					<div class="price-box">
						<p>{{getBoats(itemSlug).acf.stoimost}} ₽/час</p>
						<button class="order2" @click="showPop(getBoats(itemSlug).title.rendered)">Арендовать</button>
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
						    <swiper-slide v-for="boatImg in getBoats(itemSlug).acf.gallereya" class="text-center">
						    	<div :style="{'background-image': 'url(' + boatImg + ')'}"
						    	 class="slider-img"></div>
						    </swiper-slide>
	  					</swiper>
						
	  					<div class="navigation">
	  						<div class="prevBtn" slot="button-prev"></div>
							<div class="nextBtn" slot="button-next"></div>
	  					</div>
				</div>
				<div class="col-lg-6">
					<h2>Характеристики</h2>
					<div class="row tths">
						<div class="col-lg-4" v-for="item in getBoats(itemSlug).acf.characteristic">
							<div class="box" >
								<img :src="item.ikonka" alt="">
								<p class="black-txt">{{item.nazvanie}}</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box" >
								<img src="../assets/img/nic1.svg" alt="">
								<p class="black-txt">Аудиосистема</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box" >
								<img src="../assets/img/nic2.svg" alt="">
								<p class="black-txt">Спасательные жилеты</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box" >
								<img src="../assets/img/nic3.svg" alt="">
								<p class="black-txt">Холодильник</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box" >
								<img src="../assets/img/nic5.svg" alt="">
								<p class="black-txt">Столик</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="box" >
								<img src="../assets/img/nic4.svg" alt="">
								<p class="black-txt">Пледы</p>
							</div>
						</div>
						<div class="col-lg-6">
							<p class="grey-txt" style="margin-bottom:0;">СТОИМОСТЬ АРЕНДЫ:</p>
							<h3 style="margin-bottom:30px; margin-top:5px;">{{getBoats(itemSlug).acf.stoimost}} ₽/час</h3>
						</div>
						<div class="col-lg-6">
							<button style="margin-top:0px;" class="order2" @click="showPop(getBoats(itemSlug).title.rendered)">Арендовать</button>
						</div>
					</div>
					
				</div>
				<div class="col-lg-12">
					<hr>
					<h2 style="margin-bottom: 8px;">Подробнее о</h2>
					<h3 style="margin-bottom: 25px;">{{getBoats(itemSlug).title.rendered}}</h3>
					<div class="grey-txt" v-html="getBoats(itemSlug).content.rendered"></div>
				</div>
			</div>
		</section>

		<section>
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2 style="margin-bottom: 0px;">Доступные туры</h2>
					</div>
				</div>
			</div>
		</section>
		<appTours></appTours>
		<appContUs></appContUs>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios'
import Contactus from '../components/Contactus.vue'
import Tours from '../components/Tours.vue'

	export default{
		components: {
			'appContUs': Contactus,
			'appTours': Tours,
		},
		data(){
			return{
				itemSlug: '',
				swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
			      autoplay: {
			        delay: 3000,
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
			swiper(){
	        	return this.$refs.mySwiper.$swiper
	    	},
			...mapGetters('goods', ['getBoats', 'tours']),
			...mapState('goods', ['tours']),
		},
		created(){
			this.itemSlug = this.$route.params.id
		},
		methods: {
			showPop(name){ 
				this.$store.dispatch('goods/showPop', name)
			}
		}
	}
	
</script>

<style scoped>
.directions a{
	font-size: 16px;
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
.tths .box{
	height: 80px;
	margin-bottom:30px;
}
.box .white-txt{
	font-size: 15px;
	line-height: 18px;
	color: #fff;
}
.box img{
	margin-bottom: 10px;
	height: 30px;
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
#insider{
	padding:110px 0 70px 0;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/yacht.jpg);
	padding: 150px 0;
	position: relative;
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
@media (max-width: 512px) {
	.tths .box{	
		width: 100%;
	}
}
</style>