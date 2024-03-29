import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Catalog from './pages/Catalog.vue'
import Single from './pages/Single.vue'
import Tours from './pages/Tours.vue'
import Faq from './pages/Faq.vue'
import About from './pages/About.vue'
import Singletour from './pages/Singletour.vue'
import Cert from './pages/Cert.vue'
import Events from './pages/Even.vue'
import Singleevent from './pages/Singleevent.vue'
import NotFound from './pages/NotFound.vue'


export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/contacts',
			component: Contacts
		},
		{
			path: '/turi',
			component: Tours
		},
		{
			path: '/turi/:id',
			component: Singletour
		},
		{
			path: '/faq',
			component: Faq
		},
		{
			path: '/cert',
			component: Cert
		},
		{
			path: '/events',
			component: Events
		},
		{
			path: '/events/:id',
			component: Singleevent
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/catalog',
			component: Catalog
		},
		{
			path: '/catalog/:id',
			component: Single
		},
		{
			path: '/katera/:id',
			component: Single
		},
		{
			path: '*',
			component: NotFound
		}
	],
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
  		 if (savedPosition) {
		    return savedPosition
		  } else {
		    return { x: 0, y: 0 }
		  }
	}
})
