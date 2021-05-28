import Vue from 'vue'
import App from './App.vue'
import Routes from './router/routes'
import VueRouter from 'vue-router'
import store from './store'
import pageFooter from './components/pageFooter.vue'
import bankDetails2 from './components/bankDetails2.vue'
import bankDetails1 from './components/bankDetails1.vue'
import transactionRole  from './components/transactionRole.vue'
import transactionFilter from './components/transactionFilter.vue'
import sentCurrency from './components/sentCurrency.vue'
import transactionEmpty from './components/transactionEmpty.vue'
// import {CheckIcon  } from 'vue-feather-icons'




Vue.config.productionTip = false
Vue.component('pageFooter', pageFooter);
Vue.component('bankDetails2', bankDetails2)
Vue.component('bankDetails1', bankDetails1)
Vue.component('transactionRole', transactionRole)
Vue.component('transactionFilter', transactionFilter)
Vue.use('sentCurrency', sentCurrency)
Vue.use('transactionEmpty', transactionEmpty)
Vue.use(VueRouter);


const router = new VueRouter({
  mode:"history",
  routes:Routes,
})

const auth = localStorage.getItem('auth')


console.log('from main', auth)

if(auth){
  store.dispatch('loginFromLocalStorage')
}


router.beforeEach((to, from, next)=>{
  console.log('Got here')
   const auth = localStorage.getItem('auth')
  if(to.matched.some(record => record.meta.authenticated)){
    
    console.log('matched', to.matched)
    if(auth){
      next();
    }else{
      next({ 
          path:'/login'
      });
    }
  }else{
    console.log('Got here 2')
    next();
  }
});

new Vue({
  render: h => h(App),
  store,
  router:router,
}).$mount('#app')




