<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>О компании</h1>
				</div>
			</div>
		</section>

		<section id="about">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<h2>О Generalboats</h2>
						<p class="grey-txt">
						Generalboats профессионально занимается арендой катеров и яхт с личным капитаном в Санкт-Петербурге ещё с 2006 года. Судоходная компания, которая имеет в своём ассортименте личные моторные лодки и подбирает комфортабельные судна до 30 человек под любые мероприятия.
						<br><br>
						Главное весомое преимущество компании – выгодные цены. Generalboats работает без наценок, переплат и дополнительных сборов, так как предоставляет в прокат собственные катера и сотрудничает напрямую с судовладельцами. 
						<br><br>
						Удобное расположение причала по адресу Петровская коса 9 недалеко от метро «Крестовский остров» позволит начать водную прогулку по акватории Невы с эффектных пейзажей Финского залива и современной архитектуры: «Лахта-центр», «Газпром Арена», «Западный скоростной диаметр».</p>
					</div>
					<div class="col-lg-6">
						<div class="row">
							<div class="col-lg-6" v-for="item in advIcons">
								<div class="icon">
									<img :src="item.img" alt="">
									<h3>{{item.title}}</h3>
									<p class="black-txt">{{item.descr}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<h2 style="margin-top: 40px;">Перечень услуг, которые мы предлагаем:</h2>
					</div>
					<div class="col-lg-3" v-for="item in servIcons">
						<div class="icon">
							<img :src="item.img" alt="">
							<h3>{{item.title}}</h3>
							<p class="black-txt">{{item.descr}}</p>
							<router-link tag="div" :to="item.slug" v-if="item.slug !== '' ">
								<button class="more">Подробнее</button>
							</router-link>
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
				advIcons: [
					{
						img: require('../assets/img/ic6.svg'),
						title: 'Оперативно',
						descr: 'Экономьте не только средства, но и время! Быстрое бронирование судна без длительных переговоров и лишних формальностей.'
					},
					{
						img: require('../assets/img/ic7.svg'),
						title: 'Выгодно',
						descr: 'Платите за сервис, а не посредникам. Личные судна и прямые партнёры  - залог доступной цены на аренду лодки в компании Generalboats.'
					},
					{
						img: require('../assets/img/ic5.svg'),
						title: 'Безопасно',
						descr: 'Предоставляем в аренду только судна, оснащенные всей необходимой спасательной атрибутикой.'
					},
					{
						img: require('../assets/img/ic8.svg'),
						title: 'По-Питерски',
						descr: 'Питер – это нестандартно. Наши опытные капитаны знают все маршруты по рекам и каналам Северной столицы и водным просторам в окрестностях Санкт-Петербурга и помогут подобрать вам креативный и впечатляющий маршрут по любым пожеланиям.'
					}
				],
				servIcons: [
					{
						img: require('../assets/img/ic1.svg'),
						slug: '/catalog',
						title: 'Аренда судна ',
						descr: 'Подборка лучших катеров и яхт в Санкт-Петербурге. '
					},
					{
						img: require('../assets/img/ic2.svg'),
						slug: '/events',
						title: 'Мероприятие под ключ',
						descr: 'День Рождения летом – это прекрасная возможность провести праздник на уютном катере или комфортабельной яхте. Компания Generalboats поможет не только в выборе подходящего судна, но и в организации торжественного события.'
					},
					{
						img: require('../assets/img/ic3.svg'),
						slug: '/cert',
						title: 'Подарочные сертификаты ',
						descr: 'Ищите креативный подарок молодожёнам или не знаете, что подарить коллеге от лица всего коллектива? Для таких случаев у нас действуют подарочные сертификаты.'
					},
					{
						img: require('../assets/img/ic4.svg'),
						slug: '',
						title: 'Дополнительные услуги',
						descr: 'Организация экскурсий, Кейтеринг, Фотограф, Видеограф, Оформление судна под мероприятия. '
					}
				]	
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
.icon{
	margin-bottom: 15px;
	margin-top: 15px;
}
.icon img{
	height: 70px;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/main.png);
	padding: 150px 0;
}	
h3{
	font-size: 20px;
}
</style>