<template>
	<div>
	<section id="inner" :style="{'background-image': 'url(' + getTour(itemSlug).acf.fonovoe_izobrazhenie + ')'}">
			<div class="container">
				<div class="col-lg-12">
					<h1>{{getTour(itemSlug).title.rendered}}</h1>
					<div class="price-box">
						<p>{{getTour(itemSlug).acf.stoimost}} руб</p>
						<button class="order2" @click="showTour(getTour(itemSlug).title.rendered)">Заказать</button>
					</div>
					<p class="gold-txt">Маршрут остановок:</p>
					<div class="ostanovki">
						<p v-for="ostanovka in getTour(itemSlug).acf.marshrut_ostanovok">{{ostanovka.tekst}}</p>
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
						    <swiper-slide v-for="tourImg in getTour(itemSlug).acf.gallereya" class="text-center">
						    	<div :style="{'background-image': 'url(' + tourImg + ')'}"
						    	 class="slider-img"></div>
						    </swiper-slide>
	  					</swiper>
						
	  					<div class="navigation">
	  						<div class="prevBtn" slot="button-prev"></div>
							<div class="nextBtn" slot="button-next"></div>
	  					</div>
				</div>
				<div class="col-lg-6">
					<h2>О туре</h2>
					<p class="grey-txt" v-html="getTour(itemSlug).content.rendered"></p>
				</div>
			</div>
		</section>

		<section>
			<div class="container">
				<div class="col-lg-12">
					<h2>Для каких мероприятий подойдет?</h2>
					<div class="row parties">
						<div class="col-lg-3 party" v-for="item in getTour(itemSlug).acf.dlya_kakih_turov_podojdyot">
							<img :src="item.ikonka" alt="">
							<p>{{item.opisanie}}</p>
						</div>
					</div>
				</div>
			</div>
		</section id="insider">

		<!-- <section id="insider">
			<div class="container">
				<div class="col-lg-6">
					<h2>Галерея</h2>
				</div>
				<div class="col-lg-6">
					<h2>О туре</h2>
					</div>
				</div>
			</div>
		</section> -->

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapState} from 'vuex'
import axios from 'axios'

export default{
	data(){
		return{
			itemSlug: '',
			swiperOptions: {
			        slidesPerView: 1,
			      spaceBetween: 0,
			      draggable: true,
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
	created(){
		this.itemSlug = this.$route.params.id
	},
	computed: {
		...mapGetters('goods', ['getTour']),
		swiper(){
	       	return this.$refs.mySwiper.$swiper
	    }
	},
	methods: {
		showTour(name){
			this.$store.dispatch('goods/showTour', name)
		}
	}
}
</script>

<style scoped>
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
.parties{
	margin-top: 50px;
}
.party{
	margin-bottom: 30px;
}
.party img{
	height: 90px;
	margin-bottom: 10px;
}
.party p{
	font-size: 20px;
	font-weight: 500;
	color: #000;
}
#insider{
	padding:70px 0;
}
.gold-txt{
	color: #B7934D;
	font-size: 14px;
	font-weight: 500;
	margin-top: 40px;
}
.ostanovki{
	display: flex;
	justify-content: space-between;
	width: 60%;
	position: relative;
}
.ostanovki:before{
	content: '';
	height: 1px;
	background-color: #fff;
	width: 100%;
	position: absolute;
	bottom:-6px;
	left: 0;
}
.ostanovki p{
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	position: relative;
}
.ostanovki p:before{
	content: '';
	background-color: #fff;
	position: absolute;
	top: 30px;
	left: 50%;
	height: 15px;
	width: 15px;
	border-radius: 50px;
	margin-left: -7px;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
/*	background-image: url(../assets/img/yacht.jpg);*/
	padding: 150px 0;
	position: relative;
}		
#inner:before{
	position: absolute;
	content: '';
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.6);
	top: 0;
	left: 0;

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