<template>
	<section id="kater">
		<div class="container">
			

			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Телефон: <br class="hidden-lg hidden-md"> <a href="tel:+79119404444">+7 911 940-44-44</a></h2>
				</div>
				<div class="col-lg-10 col-lg-offset-1">
					<div class="filters">
						<button v-for="(filter, index) in filterBtns" :key="index" 
						:class="{acfilter: filter.active === true }"
						@click="toFilter(index)">{{filter.name}}</button>
					</div>
				</div>
				<div class="col-lg-8 col-lg-offset-2 col-xs-offset-2 col-xs-8">
					<div class="row">
						<div class="col-lg-6">
							<label for="">Вместимость:</label>
							<vue-slider v-model="value" :min="1" :max="15" :marks="marks" />
							<br><br><br>
						</div>
						<div class="col-lg-6">
							<label for="">Стоимость:</label>
							<vue-slider v-model="pricing" :interval="1000" :min="5000" :max="25000" :marks="marks2" />
							<br><br><br>
						</div>
					</div>
				</div>
			</div>

<!-- катера -->

<!-- filterdParam === 'Все' || boat.kater_type.name === filterdParam && -->

<div class="row">
	<div class="col-lg-4" v-for="boat in boatsList" 
	v-if="checkType(boat.kater_type.name) && boat.count_people >= value[0] && boat.count_people <= value[1]
	&& parseInt(boat.acf.stoimost.replace('от ', '')) >= pricing[0] && parseInt(boat.acf.stoimost.replace('от ', '')) <= pricing[1]">
		<!-- <pre>{{parseInt(boat.acf.stoimost.replace('от ', ''))}}</pre> -->
		<KaterCard :boat="boat" @showPop="showPop($event)" />
	</div>
</div>



<!-- катера -->


		</div>

	</section>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import KaterCard from '../components/KaterCard.vue'
import {mapState} from 'vuex'

	export default {
		computed: {
			...mapState('goods', ['boatsList']),
		},
		components: {VueSlider, KaterCard},
		data(){
			return{
				value: [1, 15],
				marks: [1, 5, 10, 15],
				pricing: [5000, 25000],
				marks2: [5000, 10000, 15000, 20000, 25000],
				filterBtns: [
					{
						name: 'Все',
						active: true
					},
					{
						name: 'Катера',
						active: false
					},
					{
						name: 'Яхты',
						active: false
					}
				],
				filterdParam: 'Все'
			}
		},
		methods: {
			checkType(type){
				if(this.filterdParam === 'Все'){
					return true
				}else if(this.filterdParam === type){
					return true
				}else{
					return false
				}
			},
			toFilter(index){
				this.filterBtns.forEach((item)=>{
					item.active = false;
				})

				this.filterBtns[index].active = true
				this.filterdParam = this.filterBtns[index].name
				console.log(this.filterdParam)
			},
			showPop(name){ 
				this.$store.dispatch('goods/showPop', name)
			},
			showprice(price){
				console.log(parseInt(price))
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
	text-transform: uppercase;
}
.acfilter{
	border-bottom: 2px #000 solid!important;
	color: #B7934D!important;
}
.boat-box{
	background: #f7f7f7;
    margin-bottom: 30px;
}
.boat-body{
	padding: 0 20px 20px 20px;
}

.img-box{
	margin-bottom: 20px;
	transition: all .3s ease;
}
.img-box img{
	height: 200px;
	margin-bottom: 10px;
	cursor: pointer;
	position: relative;
}
h3{
	font-size: 20px;
	color: #000;
	font-weight: 500;
	margin-bottom: 20px;
	cursor: pointer;
}
h3:hover{
	text-decoration: underline;
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
	min-height: 168px;
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
	height: 20px;
	width: 20px;
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
	line-height: 25px;
}
.price-box .order2{
	padding:14px 26px;
	margin: 0;
}
</style>