import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: require('@/assets/error.svg'),
	loading: require('@/assets/loading.svg'),
	attempt: 1
})

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App)
}).$mount('#app')
