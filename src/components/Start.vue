<template>
	<section id="main">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h1>Аренда яхт для 
					<br>роскошного отдыха</h1>
				</div>
			</div>

			<div class="row form-row">
				<form action="">
					<div class="col-lg-4">
						<input type="text" placeholder="Имя" v-model="name" 
						:class="{errorInp : $v.name.$dirty && !$v.name.required}" >
					</div>
					<div class="col-lg-4">
						<input type="text" placeholder="Телефон" v-mask="'+7 (###) ###-##-##'" v-model="phone" 
						:class="{errorInp : ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength)}">
					</div>
					<div class="col-lg-4">
						<input type="text" placeholder="E-mail" v-model="email">
					</div>
					<div class="col-lg-12 text-center">
						<input type="submit" @click.prevent="submitForm()">
						<p class="error" v-if="errors.message !== '' " :class="{green : errors.status === 'mail_sent'}">{{errors.message}}</p>
					</div>
				</form>
			</div>
			<div class="godown">
				<div class="col-lg-12 text-center">
						<img src="../assets/img/arr.svg" alt="">
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
				url: '/wp-json/contact-form-7/v1/contact-forms/24/feedback'
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

<style>
#main{
	background-image: url(../assets/img/main.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 200px 0;
}
h1{
	font-size: 55px;
	color: #fff;
	font-weight: 600;
	font-family: Playfair Display;
	margin-top: 0;
	margin-bottom: 40px;
}
.form-row{
	padding: 40px 50px;
	background-image: url(../assets/img/form.png);
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
input[type="text"]{
	padding:7px 3px;
	border: none;
	border-bottom: 2px #fff solid;
	background-color: transparent;
	box-shadow: none;
	font-size: 18px;
	font-weight: 500;
	color: #fff;
	width: 100%;
	margin-bottom: 30px;
}
input[type="text"]::placeholder{
	color: #bbb;
}
input[type="submit"]{
	background-color: #B7934D;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	padding: 14px 26px;
	border-radius: 50px;
	border: 1px #B7934D solid;
	transition: all .3s ease;
}
input[type="submit"]:hover{
	background-color: transparent;
	border:1px #fff solid;
}
.godown{
	transform: translateY(100px);
	animation: float 3s ease-in-out infinite;
}

@keyframes float {
	0% {
		transform: translateY(90px);
	}
	50% {		transform: translateY(110px);
	}
	100% {
		transform: translateY(90px);
	}
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