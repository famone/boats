<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Faq</h1>
				</div>
			</div>
		</section>

		<section id="faq" v-for="faq in faqs">
			<div class="container">
				<div class="col-lg-12">
					<h2>{{faq.title.rendered}}</h2>
					<p class="grey-txt" v-html="faq.content.rendered"></p>
				</div>
			</div>
		</section>

		<appContactus></appContactus>
	</div>
</template>

<script>
import Contactus from '../components/Contactus.vue'
import {mapState} from 'vuex'

export default{
	components: {
		'appContactus': Contactus
	},
	computed: {
		...mapState('goods', ['faqs']),
	}
}
</script>

<style scoped>
#faq{
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