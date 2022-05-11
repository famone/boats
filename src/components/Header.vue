<template>
	<header :class="{fixedHead: fixedHead}">
		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/"  class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</router-link>
				<nav class="hidden-xs hidden-sm">
	<ul>
		<li><router-link tag="a" to="/about" active-class="aLink" exact>Generalboats</router-link>
		<li><router-link tag="a" to="/catalog" active-class="aLink">Каталог</router-link></li>
		<li><router-link tag="a" to="/turi" active-class="aLink">Туры</router-link></li>
		<li><router-link tag="a" to="/events" active-class="aLink">Мероприятия</router-link></li>
		<li><router-link tag="a" to="/faq" active-class="aLink">FAQ</router-link></li>
		<li><router-link tag="a" to="/cert" active-class="aLink">Cертификаты</router-link></li>
		<li><router-link tag="a" to="/contacts" active-class="aLink">Контакты</router-link></li>
	</ul>
				</nav>
				<div class="social-links hidden-xs hidden-sm">
					<a href="https://wa.me/79883632220" target="blank_"><i class="fa-brands fa-whatsapp"></i></a>
					<a href="viber://add?number=79883632220" target="blank_"><i class="fa-brands fa-viber"></i></a>
					<a href="tg://resolve?domain=@admiral_master" target="blank_"><i class="fa-brands fa-telegram"></i></a>
				</div>
				<a href="tel:+79883632220">
					<button class="order hidden-xs hidden-sm">+7 988 363-22-20</button>
				</a>
				<button class="order hidden-lg hidden-md" @click="activeMenu = !activeMenu">МЕНЮ</button>
			</div>
		</div>

		<div class="mobile-menu" :class="{mobileAc : activeMenu}">
			<div class="cross" @click="activeMenu = !activeMenu">✕</div>
			<div>
				<ul @click="activeMenu = !activeMenu">
					<li><router-link tag="a" to="/about">Generalboats</router-link</li>
					<li><router-link tag="a" to="/catalog">Катера</router-link></li>
					<li><router-link tag="a" to="/turi">Туры</router-link></li>
					<li><router-link tag="a" to="/events">Мероприятия</router-link></li>
					<li><router-link tag="a" to="/faq">FAQ</router-link></li>
					<li><router-link tag="a" to="/cert">Cертификаты</router-link></li>
					<li><router-link tag="a" to="/contacts">Контакты</router-link></li>
				</ul>
				<br>
				<a href="tel:+79883632220">
					<button class="order">+7 988 363-22-20</button>
				</a>
				<div class="social-links" style="margin-top: 20px;">
					<a href="https://wa.me/79883632220" target="blank_"><i class="fa-brands fa-whatsapp"></i></a>
					<a href="viber://add?number=79883632220" target="blank_"><i class="fa-brands fa-viber"></i></a>
					<a href="tg://resolve?domain=@admiral_master" target="blank_"><i class="fa-brands fa-telegram"></i></a>
				</div>
			</div>
		</div>
	</header>
</template>





<script>
	export default{
		props: ['fixedHead'],
		data(){
			return{
				activeMenu: false
			}
		}
	}
</script>

<style scoped>
.social-links{
	display: flex;
	justify-content: flex-start;
}
.social-links i{
	margin-right: 15px;
	font-size: 18px;
	color: #fff;
}
header{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	padding:20px 0;
	z-index: 20;
	transition: all .2s ease;
}
.fixedHead{
	background-color: rgba(0,0,0,.6);
	position: fixed;
}
.shapka{
	display: flex;
	justify-content: space-between;
	align-items:center;
}
.shapka ul{
	margin: 0;
	padding: 0;
}
.shapka li{
	list-style: none;
	display: inline-block;
	margin-right: 10px;
}
.shapka li a{
	font-size: 14px;
	color: #fff;
	transition: all .3s ease;
	padding: 5px 10px;
	border-radius: 50px;
}
.shapka li a:hover{
	color: #B7934D;
}
.aLink{
	color: #B7934D!important;
}
.logo img{
	height: 50px;
	cursor: pointer;
}
.mobile-menu{
	position: fixed;
	width: 65%;
	height: 100%;
	background-color: rgba(0,0,0,.9);
	top: 0;
	left: -100%;
	z-index: 20;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	transition: all .3s ease;
	backdrop-filter: saturate(180%) blur(5px);
}
.mobileAc{
	left: 0;
}
.mobile-menu ul{
	padding:0;
	margin: 0;
}
.mobile-menu li{
	list-style: none;
	margin-bottom: 15px;
}
.mobile-menu a{
	color: #fff;
	font-size: 20px;
}
.cross{
	position: absolute;
	top: 5px;
	right: 10px;
	font-size: 20px;
	color: #fff;
	font-weight: 600;
	cursor: pointer;
}
</style>





