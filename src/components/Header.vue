<template>
	<header>
		<div class="container">
			<div class="shapka">
				<router-link tag="div" to="/"  class="logo">
					<img src="../assets/img/logo.svg" alt="">
				</router-link>
				<nav class="hidden-xs hidden-sm">
					<ul>
						<li><router-link tag="a" to="/about">О Generalboats</router-link</li>
						<li><router-link tag="a" to="/catalog">Каталог</router-link></li>
						<li><router-link tag="a" to="/tours">Туры</router-link></li>
						<li><router-link tag="a" to="/events">Мероприятия</router-link></li>
						<li><router-link tag="a" to="/faq">FAQ</router-link></li>
						<li><router-link tag="a" to="/cert">Cертификаты</router-link></li>
						<li><router-link tag="a" to="/contacts">Контакты</router-link></li>
					</ul>
				</nav>
				<a href="tel:+79992222121">
					<button class="order hidden-xs hidden-sm">+7 999 222-21-21</button>
				</a>
				<button class="order hidden-lg hidden-md" @click="activeMenu = !activeMenu">МЕНЮ</button>
			</div>
		</div>

		<div class="mobile-menu" :class="{mobileAc : activeMenu}">
			<div class="cross" @click="activeMenu = !activeMenu">✕</div>
			<div>
				<ul @click="activeMenu = !activeMenu">
					<li><a href="">О Generalboats </a></li>
					<li><a href="">Каталог</a></li>
					<li><a href="">Туры</a></li>
					<li><a href="">Мероприятия</a></li>
					<li><a href="">FAQ</a></li>
					<li><a href="">Cертификаты </a></li>
					<li><a href="">Контакты</a></li>
				</ul>
				<br>
				<button class="order">+7 999 222-21-21</button>
			</div>
		</div>
	</header>
</template>





<script>
	export default{
		data(){
			return{
				activeMenu: false
			}
		}
	}
</script>

<style scoped>
header{
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	padding:20px 0;
	z-index: 20;
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
	margin-right: 35px;
}
.shapka li a{
	font-size: 14px;
	color: #fff;
	transition: all .3s ease;
}
.shapka li a:hover{
	color: #B7934D;
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





