<template>
	<div class="pop">
		<div class="pop-box" >
			<div class="cross" @click="disableTour()">✕</div>
				<h4 class="text-center">Заказать тур</h4>
				<form action="">
					<div class="col-lg-6">
						<input type="text" placeholder="Имя">
					</div>
					<div class="col-lg-6">
						<input type="text" placeholder="Телефон">
					</div>
					<div class="col-lg-6">
						<input type="date">
					</div>
					<div class="col-lg-6">
						<input type="number" placeholder="Кол-во человек">
					</div>
					<div class="col-lg-12">
						<input type="text" placeholder="" :value="tourName">
					</div>
					<div class="col-lg-12">
						<input type="submit">
					</div>
				</form>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'

	export default{
		computed: {
			...mapState('goods', ['tourName']),
		},
		methods: {
			disableTour(){
				this.$store.dispatch('goods/disableTour')
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