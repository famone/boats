<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Контакты</h1>
				</div>
			</div>
		</section>

		<section id="contacts">
			<div class="container">
				<div class="row">
					<div class="col-lg-4">
						<div class="cont-box text-center">
							<h4>Телефон</h4>
							<a href="tel:+79119404444">+7 (911) 940 44 44<br><br></a>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="cont-box text-center">
							<h4>E-mail</h4>
							<a href="mailto:hello@generalboats.ru">hello@generalboats.ru <br><br></a>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="cont-box text-center">
							<h4>Адрес</h4>
							<a href="#">Санкт-Петербург, Петровская коса, 9Б</a>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="cont-box text-center">
							<h4>Instagram</h4>
							<a href="https://www.instagram.com/generalboats/" target="blank_">
								<img src="../assets/img/inst.svg" class="inst">generalboats</a>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="cont-box text-center">
							<h4>Реквизиты для оплаты</h4>
							<a href="#">123123123123</a>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						 <div id="map"></div> 
					</div>
				</div>

			</div>
		</section>

<appContUs></appContUs>
		

	</div>
</template>

<script scoped>
import Contactus from '../components/Contactus.vue'
	export default {
		components: {
			'appContUs': Contactus
		},
		methods: {
			yaMapInit2() { 
				var myMap2 = new ymaps.Map("map", {
		            center: [59.963521, 30.245647],
		            zoom: 14,
		            controls: []

		        });

		        myMap2.geoObjects.add(new ymaps.Placemark([59.963521, 30.245647], {
		            hintContent: 'Собственный значок метки'
		        }, {
		            iconLayout: 'default#image',
		            iconImageHref: 'https://image.flaticon.com/icons/svg/787/787433.svg',
		            iconImageSize: [50, 50],
		        
		        }))
			}
		},
		created() { 
			const script = document.createElement('script')

			script.onload = () => {
			ymaps.ready(() => this.yaMapInit2());

			};

			script.id = 'ymaps'
			script.src = "https://api-maps.yandex.ru/2.1/?apikey=8c4059db-3b8d-4535-a15e-569ee80fc827&lang=ru_RU"
			document.head.append(script);
		}
};
</script>

<style scoped>
.inst{
	margin-right: 5px;
}
#map{
	width: 100%;
	height: 450px;
}
#contacts{
	padding:80px 0;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/cont.jpg);
	padding: 150px 0;
}
.cont-box{
	background-color: #B7934D;
	padding:30px;
	margin-bottom: 30px;
}	
.cont-box h4{
	color: #fff;
}
.cont-box a{
	font-size: 20px;
	color: #fff;
}
</style>