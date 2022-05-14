<template>
    <div class="boat-box">
			<!-- <div class="img-box text-center">
				<router-link tag="div" :to="'/catalog/' + boat.slug">

				<img :src="boat.images.large" alt="">
				</router-link>
			</div>	 -->
            <div class="slider-box" :style="{'background-image': 'url(' + boat.acf.gallereya[activeSlide] + ')'}">
                <button class="arrLeft" @click="changeSlide(-1)"><i class="mdi mdi-chevron-left"></i></button>
                <button class="arright" @click="changeSlide(1)"><i class="mdi mdi-chevron-right"></i></button>
            </div>
			<div class="boat-body">
				<router-link tag="div" :to="'/catalog/' + boat.slug" class="text-center">
					<button class="more">Подробнее</button>
				</router-link>
				<router-link tag="div" :to="'/catalog/' + boat.slug">
					<h3>{{boat.title.rendered}}</h3>
				</router-link>
				<div class="tths">
					<div class="tth" v-for="item in boat.acf.characteristic">
						<img :src="item.ikonka" alt="">
						<p class="black-txt">{{item.nazvanie}}</p>
					</div>
				</div>
				<!-- <pre>{{boat.acf.gallereya}}</pre> -->
				<div class="price-box">
					<p>{{boat.acf.stoimost}} ₽/час</p>
					<button class="order2" @click="showPop(boat.title.rendered)">Арендовать</button>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    props: {
        boat: {
            required: true,
            type: Object
        }
    },
    methods: {
        changeSlide(param){
            if(this.activeSlide == this.boat.acf.gallereya.length - 1 && param == 1){
                this.activeSlide = 0
            }else if(this.activeSlide == 0  && param == -1){
                this.activeSlide = this.boat.acf.gallereya.length - 1                          
            }else{
                this.activeSlide += param
            }
        },
		showPop(title){
			this.$emit('showPop', title)
		}
    },
    data(){
        return{
            activeSlide: 0
        }
    }
}
</script>

<style scoped>
.arrLeft{
    height: 30px;
    width: 30px;
    background-color: #fff;
    color: #333;
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(50% - 15px);
    left: 10px;
    transition: all .3s ease;
}
.arright{
    height: 30px;
    width: 30px;
    background-color: #fff;
    color: #333;
    border-radius: 40px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(50% - 15px);
    right: 10px;
    transition: all .3s ease;
}
.arrLeft:hover,
.arright:hover{
    opacity: .8;
}
.slider-box{
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
}
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
    min-height: 590px;
}
.boat-body{
	padding:20px;
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