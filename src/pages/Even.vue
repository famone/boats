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
				<div class="col-lg-4" v-for="mer in meropri">
					<div class="event" :style="{'background-image': 'url(' + mer.img + ')'}">
						<h4>{{mer.name}}</h4>
						<div class="info">
								<div class="time">
									<p>{{mer.time}}</p>
								</div>
								<div class="price">
									<p>{{mer.price}} руб</p>
								</div>
								<button class="order2">Подробнее</button>
							</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				meropri: [
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					},
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					},
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					},
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					},
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					},
					{
						name: 'День Рождения',
						price: 5000,
						time: '4 часа',
						img: require('../assets/img/bday.jpg')
					}
				]
			}
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
}
.event:hover{
	transform: scale(1.04);
}
.event h4{
	color: #fff;
}
.time{
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
}
.price{
	display: flex;
	justify-content: left;
	align-items: center;
	margin-bottom: 10px;
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
}
.info .order2:hover{
	color: #fff;
	border-color: #fff;
}
</style>