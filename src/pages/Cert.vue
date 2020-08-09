<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Подарочные сертификаты</h1>
				</div>
			</div>
		</section>
		
		<section id="insider">
			<div class="container">
				<div class="col-lg-12">
					<h2>Преимущества подарочных сертификатов</h2>
					<div class="grey-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa alias necessitatibus fugit laborum excepturi pariatur quae, amet asperiores nostrum, veritatis autem explicabo quas omnis nesciunt nihil voluptate tempore! Iusto magnam hic id non illo, doloribus distinctio et eos esse, quibusdam laboriosam aperiam quis, inventore earum</div>
				</div>
			</div>
		</section>
		<section id="insider">
			<div class="container">
				<div class="col-lg-12">
					<h2>Как приобрести подарочный сертификат</h2>
					<div class="grey-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis culpa alias necessitatibus fugit laborum excepturi pariatur quae, amet asperiores nostrum, veritatis autem explicabo quas omnis nesciunt nihil voluptate tempore! Iusto magnam hic id non illo, doloribus distinctio et eos esse, quibusdam laboriosam aperiam quis, inventore earum, mollitia aspernatur odit cupiditate!</div>
				</div>
			</div>
		</section>

		<appCertificates></appCertificates>
	</div>
</template>

<script>
import Certificates from '../components/Certificates.vue'

export default{
	components: {
		'appCertificates': Certificates
	}
}
</script>

<style>
#insider{
	padding:60px 0;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/faq.jpg);
	padding: 150px 0;
}
</style>