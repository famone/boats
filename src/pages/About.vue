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
						Можно, чтобы информация о каждом капитане листалась по стрелочкам, как слайды в презенташке.
						Сам слайд: фото, информация о капитане (ФИО, опыт работы, количество лет в работе, личное преимущество), наличие необходимых дипломов, документации. 
						<br><br>
						Можно, чтобы информация о каждом капитане листалась по стрелочкам, как слайды в презенташке.
						Сам слайд: фото, информация о капитане (ФИО, опыт работы, количество лет в работе, личное преимущество), наличие необходимых дипломов, документации.
						<br><br>
						Можно, чтобы информация о каждом капитане листалась по стрелочкам, как слайды в презенташке.</p>
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
						img: require('../assets/img/ic1.svg'),
						title: 'Выбирайте из лучших',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Выбирайте из лучших',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Выбирайте из лучших',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Выбирайте из лучших',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					}
				],
				servIcons: [
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Аренда судна ',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Мероприятие под ключ',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Подарочные сертификаты ',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					},
					{
						img: require('../assets/img/ic1.svg'),
						title: 'Дополнительные услуги',
						descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, necessitatibus.'
					}
				]	
			}
		}
	}
</script>

<style scoped>
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