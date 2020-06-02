import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'

import VueI18n from 'vue-i18n';
import messages from './lang';

/* Langulage Change en, de*/
Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
});

/* custom filter or piper transform like | json */
Vue.filter('formatSize', function (size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB'
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  }
  return size.toString() + ' B'
})

Vue.filter('toLocale', function (to) {
  return '/' + i18n.locale + to
})

Vue.filter('pluck', function (objects, key) {
    return objects.map(function(object) { 
        return object[key];
    });
});


Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
