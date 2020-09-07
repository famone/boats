<template>
	<section id="notfound">
		<div class="container">
			<div class="col-lg-12 text-center">
				<h1>404</h1>
				<router-link tag="a" to="/">
					<button class="order2">На главную</button>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	
</script>

<style scoped>
#notfound{
	background-image: url('https://img3.goodfon.ru/wallpaper/nbig/5/51/caribbean-sea-sky-clouds.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	padding:250px 0;
}
h1{
	position: relative;
	font-size: 55px;
}
#notfound:before{
	content: '';
	top: 0;
	left: 0;
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0,0,0,.7);
}
</style>