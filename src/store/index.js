import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var server = {
	user_id: '10000',
	user_name: 'SRABAN',
	currency: 'INR',
	dateFormat: 'YY-MM-DD',
	serverTime:'2020-12-20 10:10:10'
}

export default new Vuex.Store({
	state: {
		loginInfo: server,
		images: []
	},
	mutations: {
		setState (state, keyValue ) {
			for(let key in keyValue) {
				state[key] = keyValue[key]
			}
		}
	},
	actions: {
		//
	}
})