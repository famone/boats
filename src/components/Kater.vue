<template>
	<section id="kater">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Наши катера</h2>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-10 col-lg-offset-1">
					<div class="filters">
						<button v-for="(filter, index) in filterBtns" :key="index" 
						:class="{acfilter: filter.active === true }"
						@click="toFilter(index)">{{filter.name}}</button>
					</div>
				</div>
			</div>


<!-- катера -->


<div class="row">
	<div class="col-lg-4" v-for="boat in boatsList">
		<div class="boat-box">
			<div class="img-box text-center">
				<img :src="boat.images.large" alt="">
				<router-link tag="div" :to="'/catalog/' + boat.slug">
					<button class="more">Подробнее</button>
				</router-link>
			</div>
			<h3>{{boat.title.rendered}}</h3>
			<div class="tths">
				<div class="tth" v-for="item in boat.acf.characteristic">
					<img :src="item.ikonka" alt="">
					<p class="black-txt">{{item.nazvanie}}</p>
				</div>
			</div>
			<div class="price-box">
				<p>{{boat.acf.stoimost}} ₽/час</p>
				<button class="order2" @click="showPop(boat.title.rendered)">Арендовать</button>
			</div>
		</div>
	</div>
</div>



<!-- катера -->


		</div>

	</section>
</template>

<script>
import {mapState} from 'vuex'

	export default {
		computed: {
			...mapState('goods', ['boatsList']),
		},
		data(){
			return{
				filterBtns: [
					{
						name: 'ВСЕ',
						active: true
					},
					{
						name: 'КАТЕРА',
						active: false
					},
					{
						name: 'ЯХТЫ',
						active: false
					}
				],
				filterdParam: 'ВСЕ'
			}
		},
		methods: {
			toFilter(index){
				this.filterBtns.forEach((item)=>{
					item.active = false;
				})

				this.filterBtns[index].active = true
				this.filterdParam = this.filterBtns[index].name
			},
			showPop(name){ 
				this.$store.dispatch('goods/showPop', name)
			}
		}
	}
</script>

<style scoped>
#kater{
	padding:80px 0;
}
.more{
	font-size: 14px;
	font-weight: 400;
	padding:5px 15px;
	border-radius: 50px;
	border:none;
	background-color: #999;
	color: #fff
}
.filters{
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 40px;
}
.filters button{
	width: 33%;
	padding: 6px 10px;
	font-size: 17px;
	color: #000;
	font-weight: 700;
	border: none;
	border-radius: 0;
	border-bottom: 2px #dadada solid;
	background-color: transparent;
	transition: all .3s ease;
}
.acfilter{
	border-bottom: 2px #000 solid!important;
	color: #B7934D!important;
}
.boat-box{
	padding:20px;
	background: #f7f7f7;
    margin-bottom: 30px;
}
.img-box{
	margin-bottom: 20px;
}
.img-box img{
	height: 200px;
	margin-bottom: 10px;
}
h3{
	font-size: 20px;
	color: #000;
	font-weight: 500;
	margin-bottom: 20px;
}
.black-txt{
	font-size: 16px;
	color: #000;
}
.tths{
	display: flex;
	justify-content: left;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 20px;
}
.tth{
	margin-right: 20px;
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
}
.tth img{
	margin-right: 8px;
	transform:translateY(-5px);
}
.price-box{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.price-box p{
	font-size: 20px;
	color: #000;
	margin: 0;
	font-weight: 600;
}
.price-box .order2{
	padding:14px 26px;
	margin: 0;
}
</style>