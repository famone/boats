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
					<h2 style="margin-bottom: 8px;">Подробнее о</h2>
					<h3 style="margin-bottom: 25px;">{{getBoats(itemSlug).title.rendered}}</h3>
					<div class="grey-txt" v-html="getBoats(itemSlug).content.rendered"></div>

					<div class="tths">
						<div class="box" v-for="item in getBoats(itemSlug).acf.characteristic">
							<img :src="item.ikonka" alt="">
							<p class="white-txt">{{item.nazvanie}}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<appContUs></appContUs>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios'
import Contactus from '../components/Contactus.vue'

	export default{
		components: {
			'appContUs': Contactus
		},
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
			swiper(){
	        	return this.$refs.mySwiper.$swiper
	    	},
			...mapGetters('goods', ['getBoats']),
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
#inner:before{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	background-color: rgba(0,0,0,0.4);

}
.tths{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	margin-top: 30px;
}
.tths .box{
	padding:10px 20px;
	background-color: #B7934D;
	width: 45%;
	height: 98px;
	margin-right: 15px;
	margin-bottom: 15px;
}
.box .white-txt{
	font-size: 15px;
	line-height: 18px;
	color: #fff;
}
.box img{
	margin-bottom: 10px;
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