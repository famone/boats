<template>
	<section id="tours">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Туры</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-6" v-for="tour in tours">
					<div class="tour-box">
							<div class="tour-img" :style="{'background-image': 'url(' + tour.images.large + ')'}"></div>
							<router-link tag="a" :to="'/tours/' + tour.slug">
								<h4>{{tour.title.rendered}}</h4>
							</router-link>
							<p class="grey-txt" v-html="tour.content.rendered"></p>
							<div class="info">
								<div class="time">
									<img src="../assets/img/time.svg" alt="">
									<p>{{tour.acf.vremya}}</p>
								</div>
								<div class="price">
									<img src="../assets/img/price.svg" alt="">
									<p>{{tour.acf.stoimost}} руб</p>
								</div>
								<button class="order2">Заказать тур</button>
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
		computed: {
			...mapState('goods', ['tours']),
		}
	}
</script>

<style scoped>
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
    height: 41px;
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