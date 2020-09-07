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

			<section id="faq">
			<div class="container">
				<div class="col-lg-12">
					<h2>Это далеко не весь список мероприятий, которые стоит провести на борту водного судна компании «Generalboats». Поводы для аренды катера или яхты могут быть разными:</h2>
					<p class="grey-txt">
						<ul>
							<li>Устройте романтическое свидание на воде;</li>
							<li>Отпразднуйте годовщину свадьбы;</li>
							<li>Проведите детский праздник;</li>
							<li>Организуйте впечатляющую фотосессию;</li>
							<li>Отправьтесь на ночную прогулку под разводными мостами;</li>
							<li>Проведите деловое мероприятия.</li>
						</ul>
					</p>
				</div>
			</div>
		</section>
		<div class="spacer"></div>
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
.spacer{
	padding:30px 0;
}
.grey-txt ul{
	margin: 0;
	padding:0;
}
.grey-txt ul li{
	list-style: none;
}
.grey-txt ul li::before {
  content: "\2022";
  color: #B7934D;
  font-weight: bold;
  display: inline-block; 
  width: 10px;
  margin-right: 10px;

}
</style>