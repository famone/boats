<template>
	<div class="pop">
		<div class="pop-box" >
			<div class="cross" @click="disableEvents()">✕</div> 
				<h4 class="text-center">Заказать мероприятие</h4>
				<form action="">
					<div class="col-lg-6">
						<input type="text" placeholder="Имя" v-model="emailBody.your_name">
					</div>
					<div class="col-lg-6">
						<input type="text" v-mask="'+7 (###) ###-##-##'" placeholder="Телефон" v-model="emailBody.your_phone">
					</div>
					<div class="col-lg-4">
						<input type="date" v-model="emailBody.your_date">
					</div>
					<div class="col-lg-4">
						<input type="number" placeholder="Кол-во человек" v-model="emailBody.persons">
					</div>
					<div class="col-lg-4">
						<input type="text" placeholder="" :value="eventName" disabled="disabled">
					</div>
					<div class="col-lg-12">
						<input type="submit" @click.prevent="submitForm()">
						<p class="error text-center" v-if="errors.message !== '' " :class="{green : errors.status === 'mail_sent'}">{{errors.message}}</p>
					</div>
				</form>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'

	export default{
		data(){
			return{
				emailBody: {
					your_name: '',
					your_phone: '',
					your_date:'',
					persons: '',
					your_boat: ''
				},
				errors: '',
				url: 'https://generalboats.ru/wp-json/contact-form-7/v1/contact-forms/68/feedback'
			}
		},
		computed: {
			...mapState('goods', ['eventName']),
		},
		methods: {
			disableEvents(){
				this.$store.dispatch('goods/disableEvents')
			},
			submitForm(){

			this.emailBody.your_boat = this.eventName;

        	var form2 = new FormData();
        	
       		for (var field in this.emailBody){
				form2.append(field, this.emailBody[field]);
			};

            axios
            	.post(this.url, form2)
                .then((response) => {
                    console.log(response);
                    this.errors = response.data;
                    if(response.data.status === 'mail_sent'){
                    	this.emailBody = {
							your_name: '',
							your_phone: '',
							your_date: '',
							persons: '',
							your_boat: ''
						}
                    }
                })
                .catch((error) => {
                    this.errors = error.response.data
                });
        	}
		}
	}
</script>

<style scoped>
.pop{
	position: fixed;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 40;
}
.pop-box{
	width: 60%;
	background-color: #fff;
    border-radius: 5px;
    width: 50%;
    position: relative;
    padding: 20px 35px;
}
.cross{
	font-size: 25px;
    color: #000;
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
}
input{
	width: 100%;
}
input[type="text"]{
	width: 100%!important;
	padding: 12px 15px!important;
    background-color: #fff!important;
    border: #999 1px solid!important;
    border-radius: 5px!important;
    font-size: 16px!important;
    margin-bottom: 25px!important;
    color: #000!important;
}
input[type="date"]{
	width: 100%!important;
	padding: 12px 15px!important;
    background-color: #fff!important;
    border: #999 1px solid!important;
    border-radius: 5px!important;
    font-size: 16px!important;
    margin-bottom: 25px!important;
}
input[type="number"]{
	width: 100%!important;
	padding: 12px 15px!important;
    background-color: #fff!important;
    border: #999 1px solid!important;
    border-radius: 5px!important;
    font-size: 16px!important;
    margin-bottom: 25px!important;
}
input[type="submit"]:hover{
	color: #B7934D;
	border-color: #B7934D;
}
</style>