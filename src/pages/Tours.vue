<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Туры</h1>
				</div>
			</div>
		</section>

		<appTours></appTours>
		<appContactus></appContactus>
	</div>
</template>

<script>
import Tours from '../components/Tours.vue'
import Contactus from '../components/Contactus.vue'

export default{
		components: {
			'appTours': Tours,
			'appContactus': Contactus
		}
}
</script>

<style scoped>
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/yacht.jpg);
	padding: 150px 0;
}	
</style>