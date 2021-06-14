<template>
	<section id="contus">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2>Готовы отправиться
					<br>в свое морское путешествие?</h2>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-lg-offset-3">
					<form action="">
						<input type="text" placeholder="Имя" v-model="name" 
						:class="{errorInp : $v.name.$dirty && !$v.name.required}" >
					
						<input type="text" placeholder="Телефон" v-mask="'+7 (###) ###-##-##'" v-model="phone" 
						:class="{errorInp : ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength)}">
						<input type="text" placeholder="E-mail" v-model="email">
					
						<input type="submit" @click.prevent="submitForm()">
						<div class="text-center">
							<p class="error" v-if="errors.message !== '' " :class="{green : errors.status === 'mail_sent'}">{{errors.message}}</p>
						</div>
				</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import {mapState} from 'vuex' 
import axios from 'axios'

export default{
	data(){
		return{
				name: '',
				phone: '',
				email:'',
				errors: '',
				url: 'https://generalboats.ru/wp-json/contact-form-7/v1/contact-forms/24/feedback'
		}
	},
	validations: {
			name: {
				required
			},
			phone: {
				required,
				minLength: minLength(18)
			}
		},
	methods: {
		submitForm(){
			if(this.$v.$invalid) {
					this.$v.$touch();
					return;
			}
			

			let emailBody = {
				your_name: this.name,
				your_phone: this.phone,
 				your_email: this.email
			}


        	var form2 = new FormData();
        	
       		for (var field in emailBody){
				form2.append(field, emailBody[field]);
			};

            axios
            	.post(this.url, form2)
                .then((response) => {
                    console.log(response);
                    this.errors = response.data;
                    
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	},
	}
}	
</script>

<style scoped>
#contus{
	padding: 70px 0;
	background-image: url(../assets/img/cert.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
h2{
	color: #fff;
}
input[type="submit"]{
	width: 100%;
}	
form{
	background-color: rgba(0,0,0,.6);
	padding:50px 55px;
}
.errorInp{
	border-bottom: 2px red solid!important;
}
.error{
	color: red;
	margin-top: 20px;
}
.green{
	color: #07ff07;
	margin-top: 20px;
}
</style>