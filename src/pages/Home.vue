<template>
	<div>
		<appStart></appStart>

		<section id="about">
			<div class="container">
				<div class="col-lg-6">
					<h2>О Generalboats</h2>
					<p class="grey-txt">
						Можно, чтобы информация о каждом капитане листалась по стрелочкам, как слайды в презенташке.
						Сам слайд: фото, информация о капитане (ФИО, опыт работы, количество лет в работе, личное преимущество), наличие необходимых дипломов, документации. 
						<br><br>
						Можно, чтобы информация о каждом капитане листалась по стрелочкам, как слайды в презенташке.
						Сам слайд: фото, информация о капитане (ФИО, опыт работы, количество лет в работе, личное преимущество), наличие необходимых дипломов, документации.</p>
						<router-link tag="a" to="/about">
							<button class="order2">ПОДРОБНЕЕ</button>
						</router-link>
				</div>
				<div class="col-lg-6">
					<img src="../assets/img/about.png" style="width: 100%;margin-top: 25px;">
				</div>
			</div>
		</section>

<appKater></appKater>
<appTours></appTours>
<appCertificates></appCertificates>


	</div>
</template>

<script>
import Start from '../components/Start.vue'
import Kater from '../components/Kater.vue'
import Tours from '../components/Tours.vue'
import Certificates from '../components/Certificates.vue'

	export default{
		components: {
			'appStart': Start,
			'appKater': Kater,
			'appTours': Tours,
			'appCertificates': Certificates
		}
	}
</script>

<style>
#about{
	padding:80px 0;
}
</style>