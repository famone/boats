<template>
	<div>
		<appStart></appStart>

		<section id="about">
			<div class="container">
				<div class="col-lg-6">
					<h2>О Generalboats</h2>
					<p class="grey-txt">
						Generalboats профессионально занимается арендой катеров и яхт с личным капитаном в Санкт-Петербурге ещё с 2006 года. Судоходная компания, которая имеет в своём ассортименте личные моторные лодки и подбирает комфортабельные судна до 30 человек под любые мероприятия.
<br><br>
Главное весомое преимущество компании – выгодные цены. Generalboats работает без наценок, переплат и дополнительных сборов, так как предоставляет в прокат собственные катера и сотрудничает напрямую с судовладельцами.
</p>
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
<appTours :hidenTitle="hidenTitle"></appTours>
<appCertificates></appCertificates>


	</div>
</template>

<script>
import Start from '../components/Start.vue'
import Kater from '../components/Kater.vue'
import Tours from '../components/Tours.vue'
import Certificates from '../components/Certificates.vue'

	export default{
		data(){
			return{
				hidenTitle: true
			}
		},
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