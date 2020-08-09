<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Каталог</h1>
				</div>
			</div>
		</section>

		<appKater></appKater>
	</div>
</template>

<script>
import Kater from '../components/Kater.vue'

export default{
		components: {
			'appKater': Kater
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