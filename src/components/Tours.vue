<template>
	<section id="tours">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center" v-if="hidenTitle">
					<h2>Туры</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-6" v-for="tour in tours">
					<div class="tour-box">
						<router-link tag="a" :to="'/tours/' + tour.slug">
							<div class="tour-img" :style="{'background-image': 'url(' + tour.images.large + ')'}">
								<div class="over-txt">
									<p class="white-txt" v-html="tour.content.rendered"></p>
									<button class="more">Подробнее</button>
								</div>
							</div>
						</router-link>
								<h4>{{tour.title.rendered}}</h4>
							<div class="grey-txt">
								<p v-for="marsh in tour.acf.marshrut_ostanovok">{{marsh.tekst}} </p>
							</div>

							<div class="info">
								<div class="time">
									<img src="../assets/img/time.svg" alt="">
									<p>{{tour.acf.vremya}}</p>
								</div>
								<div class="price">
									<router-link tag="div" :to="'/tours/' + tour.slug">
										<button class="more">Подробнее</button>
									</router-link>
								</div>
								<button class="order2" @click="showTour(tour.title.rendered)">Заказать тур</button>
							</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import {mapState} from 'vuex'

	export default {
		props: ['hidenTitle'],
		computed: {
			...mapState('goods', ['tours']),
		},
		methods: {
			showTour(name){
				this.$store.dispatch('goods/showTour', name)
			}
		}
	}
</script>

<style scoped>
.more{
	font-size: 14px;
	font-weight: 400;
	padding:5px 15px;
	border-radius: 50px;
	border:none;
	background-color: #999;
	color: #fff
}
#tours{
	padding:60px 0;
}
.tour-box{
	margin-bottom: 30px;
}
.tour-img{
	height: 340px;
	width: 100%;
	background-position: center;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	background-size: cover;
	margin-bottom: 20px;
	transition: all .3s ease;
	position: relative;
	overflow: hidden;
}
.tour-img:before{
	position: absolute;
	top: 0;
	left: 0;
	content: '';
	background-color: rgba(0,0,0,.5);
	height: 100%;
	width: 100%;
	opacity: 0;
	transition: all .3s ease;
}
.tour-img:hover::before{
	opacity: 1
}
.over-txt{
	position: relative;
	top: 100%;
	left: 0;
	width: 100%;
	height: 100%;
	padding:25px;
	transition: all .3s ease;
}
.tour-img:hover .over-txt{
	top: 0;
}
.time{
	display: flex;
	justify-content: left;
	align-items: center;
}
.time img{
	margin-right: 10px;
}
.price{
	display: flex;
	justify-content: left;
	align-items: center;
}
.price img{
	margin-right: 10px;
}
.grey-txt{
	font-size: 14px;
	line-height: 20px;
	margin-bottom: 20px;
	overflow: hidden;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.grey-txt p{
	position: relative;
	margin-right: 20px;
	margin-bottom: 0;
}
.grey-txt p:before{
	content: '•';
	font-size:20px;
	color: #B7934D;
	top: -1px;
	right: -12px;
	position: absolute;
}
.grey-txt p:last-child:before{
	display: none;
}
.info{
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.info p{
	font-size: 20px;
	color: #000;
	margin: 0;
	font-weight: 600;
}
.info .order2{
	padding: 14px 35px;
	margin: 0;
}
</style>