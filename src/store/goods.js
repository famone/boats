
import axios from 'axios'

const goods = {
	namespaced: true,
	state: {
		boatsList: [],
		tours: [],
		faqs: [],
		eventsList: [],
		popUpRent: false,
		popUpTour: false,
		popUpEvents: false,
		yachtName: '',
		tourName: '',
		eventName: ''
  	},
  mutations: {
  	SET_BOATS(state, playload){
  		state.boatsList = playload
  	},
  	SET_TOURS(state, playload){
  		state.tours = playload
  	},
  	SET_EVENTS(state, playload){
  		state.eventsList = playload
  	},
  	SET_FAQ(state, playload){
  		state.faqs = playload
  	},
  	SET_RENT(state, playload){
  		state.yachtName = playload
  		state.popUpRent = true
  	},
  	SET_TOUR(state, playload){
  		state.popUpTour = true
  		state.tourName = playload
  	},
  	SET_EVENTSPOP(state, playload){
  		state.popUpEvents = true
  		state.eventName = playload
  	},
  	DISABLE_RENT(state){
  		state.popUpRent = false
  		state.yachtName = ''
  	},
  	DISABLE_TOUR(state){
  		state.popUpTour = false
  		state.tourName = ''
  	},
  	DISABLE_EVENTS(state){
  		state.popUpEvents = false
  		state.eventName = ''
  	}
  },
	actions: {
		loadBoats({commit}){
	  		axios
	  			.get('https://generalboats.ru//wp-json/wp/v2/katera?per_page=30')
	  			.then(response =>{
	  				commit('SET_BOATS', response.data)
	  				console.log(response.data)
	  				
	  			})
	  			.catch(error => console.log(error))
	  	},
	  	loadTours({commit}){
	  		axios
	  			 .get('https://generalboats.ru//wp-json/wp/v2/turi/')
	  			 .then(response =>{
	  			 	commit('SET_TOURS', response.data)
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	loadFaq({commit}){
	  		axios
	  			 .get('https://generalboats.ru//wp-json/wp/v2/faq/')
	  			 .then(response =>{
	  			 	commit('SET_FAQ', response.data)
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	loadEvents({commit}){
	  		axios
	  			 .get('https://generalboats.ru//wp-json/wp/v2/meroptiyatiya/')
	  			 .then(response =>{
	  			 	commit('SET_EVENTS', response.data)
	  			 })
	  			 .catch(error => console.log(error))
	  	},
	  	showPop({commit}, playload){
	  		commit('SET_RENT', playload)
	  	},
	  	showTour({commit}, playload){
	  		commit('SET_TOUR', playload)
	  	},
	  	showEvents({commit}, playload){
	  		commit('SET_EVENTSPOP', playload)
	  	},
	  	disablePop({commit}){
	  		commit('DISABLE_RENT')
	  	},
	  	disableTour({commit}){
	  		commit('DISABLE_TOUR')
	  	},
	  	disableEvents({commit}){
	  		commit('DISABLE_EVENTS')
	  	}
	},
	getters: {
  		getBoats: (state) => (slug) => {
  			return state.boatsList.find(goodItem => goodItem.slug == slug)
  		},
  		getTour: (state) => (slug) => {
  			return state.tours.find(tourItem => tourItem.slug == slug)
  		},
  		getEvents: (state) => (slug) => {
  			return state.eventsList.find(eventItem => eventItem.slug == slug)
  		}
	}
}

export default goods


