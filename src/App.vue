<template>
  <div id="app">
   
<appPopboats></appPopboats>

    <appHeader></appHeader>

          <router-view></router-view>

    <appFooter></appFooter>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import './assets/css/style.css';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Popboats from './components/Popboats.vue'

export default {
  components: {
    'appHeader': Header,
    'appFooter': Footer,
    'appPopboats': Popboats
  },
  created(){
  	this.$store.dispatch('goods/loadBoats')
    this.$store.dispatch('goods/loadTours')
    this.$store.dispatch('goods/loadFaq')
  }
}
</script>

<style>
</style>
