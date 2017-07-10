// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import goodsList from './components/goodsList'

import cartPage from './pages/cart'
import myPage from './pages/my'
import sortPage from './pages/sort'
import 'bootstrap/dist/css/bootstrap.css'

/*Vue.config.productionTip = false*/
Vue.use(VueRouter)
Vue.use(VueResource)

var  router=new VueRouter({
  mode:'history',
  routes:[
    {
     path:'/',
      component:goodsList
    }

  ]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
