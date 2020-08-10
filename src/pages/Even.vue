<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Мероприятия</h1>
				</div>
			</div>
		</section>


		<section id="events">
			<div class="container">
				<div class="col-lg-4" v-for="mer in eventsList">
					<div class="event" :style="{'background-image': 'url(' + mer.acf.fonovoe_izobrazhenie + ')'}">
						<h4>{{mer.title.rendered}}</h4>
						<div class="info">
								<div class="time">
									<p>{{mer.acf.vremya}}</p>
								</div>
								<div class="price">
									<p>{{mer.acf.stoimost}} руб</p>
								</div>
								<router-link tag="a" :to="'/events/' + mer.slug">
									<button class="order2">Подробнее</button>
								</router-link>
							</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import {mapState} from 'vuex'
	export default{
		computed: {
			...mapState('goods', ['eventsList']),
		}
	}	
</script>

<style scoped>
#events{
	padding:70px 0;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	background-image: url(../assets/img/events.jpg);
	padding: 150px 0;
}	
.event{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center top;
	padding:150px 20px 20px 40px;
	margin-bottom: 30px;
	transition: all .3s ease;
	position: relative;
}
.event:before{
	height: 100%;
	width: 100%;
	position: absolute;
	content: '';
	background-color: rgba(0,0,0,.4);
	top: 0;
	left: 0;
	z-index: 0;
}
.event:hover{
	transform: scale(1.04);
}
.event h4{
	color: #fff;
	position: relative;
}
.time{
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
	position: relative;
}
.price{
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
	position: relative;
}
.info p{
	font-size: 22px;
	color: #fff;
	margin: 0;
	font-weight: 600;
}
.info .order2{
	margin-top: 0;
	width: 100%;
	position: relative;
}
.info .order2:hover{
	color: #fff;
	border-color: #fff;
}
</style>