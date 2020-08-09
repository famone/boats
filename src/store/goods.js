
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		boatsList: [],
		tours: [],
		faqs: []
  	},
  mutations: {
  	SET_BOATS(state, playload){
  		state.boatsList = playload
  	},
  	SET_TOURS(state, playload){
  		state.tours = playload
  	},
  	SET_FAQ(state, playload){
  		state.faqs = playload
  	}
  },
	actions: {
		loadBoats({commit}){
	  		axios
	  			.get('https://gb.webink.site/wp-json/wp/v2/katera/')
	  			.then(response =>{
	  				commit('SET_BOATS', response.data)
	  				
	  			})
	  			.catch(error => console.log(error))
	  	},
	  	loadTours({commit}){
	  		axios
	  			 .get('https://gb.webink.site/wp-json/wp/v2/turi/')
	  			 .then(response =>{
	  			 	commit('SET_TOURS', response.data)
	  			 	console.log(response.data)
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	loadFaq({commit}){
	  		axios
	  			 .get('https://gb.webink.site/wp-json/wp/v2/faq/')
	  			 .then(response =>{
	  			 	commit('SET_FAQ', response.data)
	  			 })
	  			 .catch(error => console.log(error))
	  	}
	},
	getters: {
  		getBoats: (state) => (slug) => {
  			return state.boatsList.find(goodItem => goodItem.slug == slug)
  		},
  		getTour: (state) => (slug) => {
  			return state.tours.find(tourItem => tourItem.slug == slug)
  		}
	}
}

export default goods


