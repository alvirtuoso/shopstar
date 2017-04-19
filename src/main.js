// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRx from 'vue-rx';
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {fromPromise} from 'rxjs/observable/fromPromise'
import {from} from 'rxjs/observable/from'
import CardList from './components/CardList'

Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(BootstrapVue);
Vue.component('card-list', CardList ); // register component globally

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
