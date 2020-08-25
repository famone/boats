<template>
  <div id="app">
   
<appPopboats v-if="popUpRent"></appPopboats>
<appPoptour v-if="popUpTour"></appPoptour>
<appPopevents v-if="popUpEvents"></appPopevents>

    <appHeader></appHeader>

    <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>  
    <appFooter></appFooter>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Popboats from './components/Popboats.vue'
import Poptour from './components/Poptour.vue'
import Popevents from './components/Popevents.vue'

export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer,
    'appPopboats': Popboats,
    'appPoptour': Poptour,
    'appPopevents': Popevents
  },
  computed: {
    ...mapState('goods', ['popUpRent', 'popUpTour', 'popUpEvents']),
  },
  created(){
  	this.$store.dispatch('goods/loadBoats')
    this.$store.dispatch('goods/loadTours')
    this.$store.dispatch('goods/loadFaq')
    this.$store.dispatch('goods/loadEvents')
    this.$store.dispatch('goods/crypto')
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>

