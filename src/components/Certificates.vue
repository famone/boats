<template>
	<section id="certificates">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Подарочные сертификаты</h2>
				</div>	
			</div>

			<div class="row">
				<div class="col-lg-6 text-center" v-for="cert in certs">
					<div class="cert-box">
						<img src="../assets/img/krug.svg" style="margin-bottom: 35px;">
						<h4>{{cert.name}}</h4>
						<h3>{{cert.details}}</h3>
						<button class="order">Заказать</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				certs: [
					{
						name: 'Прогулка на катере',
						details: 'от 8000 ₽/ч'
					},
					{
						name: 'Прогулка на яхте',
						details: 'От 20000 ₽/ч'
					}
				]
			}
		}
	}
</script>

<style scoped>
#certificates{
	padding: 70px 0;
	background-image: url(../assets/img/cert.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
h2{
	color: #fff;
	margin-bottom:15px;
}
.white-txt{
	font-size: 14px;
	color: #fff;
	margin-bottom: 30px;
}
.cert-box{
	padding:40px 25px;
	background-color: #2F2E2E;
}
h4{
	color: #fff;
	font-size: 25px;
	margin-bottom: 35px;
}
h3{
	color: #fff;
	margin-bottom: 35px;
}
</style>