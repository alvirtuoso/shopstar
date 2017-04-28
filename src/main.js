// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRx from 'vue-rx';
import App from './App';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import {fromPromise} from 'rxjs/observable/fromPromise';
import {from} from 'rxjs/observable/from';
import CardList from './components/CardList';
import AveReview from './components/AveReview';
import VueLazyload from 'vue-lazyload';
import VueLocalStorage from 'vue-localstorage';
import VueRouter from 'vue-router';
import Bottom from './components/Bottom'
import Left from './components/Left'
import Test from './components/Test'
import Middle from './components/Middle'
import '../node_modules/amazon-autocomplete/dist/amazon-autocomplete.min.js'
import Paginate from 'vuejs-paginate'

Vue.config.productionTip = false;

Vue.use(VueLocalStorage);
Vue.use(VueRouter);
Vue.use(VueRx);
Vue.use(BootstrapVue);

Vue.component('paginate', Paginate)
Vue.component('app', App);
Vue.component('bottom', Bottom)      // global registration
Vue.component('card-list', CardList ); // register component globally
Vue.component('left', Left);
Vue.component('middle', Middle);

Vue.component('test', Test);
Vue.component('ave-review', AveReview);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/no_image_available.jpg',
  loading: './assets/cube.gif',
  attempt: 1
});

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {path: '/', component: App},
    {path: '/detail', component:  Bottom},
    {path: '/test', component: Test}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  localStorage: {
    someNumber: {
      type: Number,
    },
    searchedWords: [],
  },
  components: { App }

}).$mount('#app')
