<template>
	<footer>
		<div class="container">
			<div class="col-lg-3">
				<div class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</div>
				<p class="white-txt">ИНН: 12312312312</p>
				<p class="white-txt">ОГРН: 12312312312</p> <br>
			</div>
			<div class="col-lg-3">
				<p class="white-txt"><a href="">+7 999 212-12-12</a></p>
				<p class="white-txt"><a href="">hello@yahtmail.ru</a></p>
				<p class="white-txt"><a href=""><img src="../assets/img/inst.svg" class="inst">generalboats</a></p>
				<br>
			</div>
			<div class="col-lg-3">
				<ul>
					<li><a href="">О Generalboats </a></li>
					<li><a href="">Каталог</a></li>
					<li><a href="">Туры</a></li>
					<li><a href="">Мероприятия</a></li>
					<li><a href="">FAQ</a></li>
					<li><a href="">Cертификаты </a></li>
					<li><a href="">Контакты</a></li>
				</ul>
			</div>
			<div class="col-lg-3">
				<p class="white-txt">Санкт-Петербург, Набережная 
				<br>канала Грибоедова 15-Б</p>
				<br><br>
				<div class="webink">
						<a href="https://webink.site/">coding masters - webink.site</a>
					</div>
			</div>
		</div>
	</footer>
</template>

<script>

</script>

<style scoped>
footer{
	background-color: #2F2E2E;
	padding: 50px 0;
}
.logo img{
	height: 60px;
	margin-bottom: 20px;
}
.white-txt{
	font-size: 16px;
	color: #fff;
	margin-bottom: 8px;
}
.inst{
	margin-right: 6px;
}
footer a {
	color: #fff;
	transition: all .3s ease;
}
footer a:hover{
	color: #B7934D;
}
ul{
	margin: 0;
	padding:0;
}
ul li{
	font-size: 16px;
	list-style: none;
}
.webink{
	font-weight: 400;
	color: #fff;
	font-size: 15px;
	transition: all .3s ease;
	margin-top: 40px;
}
.webink a{
	color: #fff;
}
.webink:hover{
	animation: 1s myshake alternate;
}
@keyframes myshake{
	0% {
	    transform: skewX(-15deg);
	}
	5% {
	    transform: skewX(15deg);
	}
	10% {
	    transform: skewX(-15deg);
	}
	15% {
	    transform: skewX(15deg);
	}
	20% {
	    transform: skewX(0deg);
	}
	100% {
	    transform: skewX(0deg);
	}
}
</style>