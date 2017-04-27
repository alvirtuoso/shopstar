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
import AveReview from './components/AveReview'
import VueLazyload from 'vue-lazyload'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false;

Vue.use(VueLocalStorage);
Vue.use(VueRx);
Vue.use(BootstrapVue);
Vue.component('card-list', CardList ); // register component globally
Vue.component('ave-review', AveReview);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/no_image_available.jpg',
  loading: './assets/cube.gif',
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
    localStorage: {

    someNumber: {
      type: Number,
    },
    searchedWords: [],

  },
  components: { App }

})
