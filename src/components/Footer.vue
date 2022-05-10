<template>
	<footer>
		<div class="container">
			<div class="col-lg-3">
				<div class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</div>
			</div>
			<div class="col-lg-3">
				<p class="white-txt"><a href="tel:+79883632220">+7 988 363-22-20</a></p>
				<p class="white-txt"><a href="mailto:hello@generalboats.ru">hello@generalboats.ru</a></p>
				<br>
				<div class="social-links" style="margin-bottom: 20px;">
					<!-- <a href="https://www.instagram.com/generalboats/" target="blank_"><i class="fa-solid fa-user"></i></a> -->
					<a href="https://wa.me/79883632220" target="blank_"><i class="fa-brands fa-whatsapp"></i></a>
					<a href="viber://add?number=79883632220" target="blank_"><i class="fa-brands fa-viber"></i></a>
					<a href="tg://resolve?domain=@admiral_master" target="blank_"><i class="fa-brands fa-telegram"></i></a>
				</div>
			</div>
			<div class="col-lg-3">
				<ul>
					<li><router-link tag="a" to="/about">Generalboats</router-link</li>
					<li><router-link tag="a" to="/catalog">Каталог</router-link></li>
					<li><router-link tag="a" to="/turi">Туры</router-link></li>
					<li><router-link tag="a" to="/events">Мероприятия</router-link></li>
					<li><router-link tag="a" to="/faq">FAQ</router-link></li>
					<li><router-link tag="a" to="/cert">Cертификаты</router-link></li>
					<li><router-link tag="a" to="/contacts">Контакты</router-link></li>
				</ul>
			</div>
			<div class="col-lg-3">
				<p class="white-txt">Санкт-Петербург, <br>Петровская коса, 9Б</p>
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
.social-links{
	display: flex;
	justify-content: flex-start;
}
.social-links i{
	margin-right: 15px;
	font-size: 20px;
}
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