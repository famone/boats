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
						<input type="text" placeholder="Имя">
						<input type="text" placeholder="Телефон">
						<input type="text" placeholder="E-mail">
						<input type="submit">
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	
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
</style>