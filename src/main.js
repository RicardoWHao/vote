import Vue from 'vue'
/*import Vue from 'vue-resource'
import Vue from 'vue-router'
import Vue from 'vuex'*/
import 'lib-flexible'

import App from './App'
import router from './router'

/*Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
