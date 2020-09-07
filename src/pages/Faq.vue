<template>
	<div>
		<section id="inner">
			<div class="container">
				<div class="col-lg-12">
					<h1>Faq</h1>
				</div>
			</div>
		</section>

		<section id="faq">
			<div class="container">
				<div class="col-lg-12">
					
					<div class="faqs" v-for="(faq, index) in faqs" @click="openAcc(index)" :class="{faqsAc: faq.acf.active}">
						<div class="acc-head">
							<h2>{{faq.title.rendered}}</h2>
							<div class="plus">✕</div>
						</div>
						<div class="acc-body">
							<p class="grey-txt" v-html="faq.content.rendered"></p>
						</div>
					</div>

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
	},
	methods: {
		openAcc(index){
			if(this.faqs[index].acf.active == false){
  			this.faqs[index].acf.active = true
	  		}else{
	  			this.faqs[index].acf.active = false
	  		}
		}
	}
}
</script>

<style scoped>
#faq{
	padding:60px 0;
}
.faqs{
	margin-bottom: 20px;
}
#inner{
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url(../assets/img/faq.jpg);
	padding: 150px 0;
}
h2{
	color: #fff;
	font-size: 25px;
	margin-bottom: 0;
}	
.acc-head{
	background-color: #B7934D;
	padding:20px 25px;
	position: relative;
	cursor: pointer;
}
.acc-body{
	overflow: hidden;
	max-height: 0px;
	padding:0 0;
	transition: all .3s ease;
}
.plus{
	position: absolute;
	font-size: 30px;
	color: #fff;
	top: calc(50% - 22px);
	right: 20px;
	transform: rotate(-45deg);
	transition: all .3s ease;
	cursor: pointer;
}
.faqsAc .plus{
	transform: rotate(0deg);
}
.faqsAc .acc-body{
	max-height: 3000px;
	padding:20px 0;
}
</style>