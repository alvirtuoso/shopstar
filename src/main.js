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

import VueLazyload from 'vue-lazyload';
import VueLocalStorage from 'vue-localstorage';
import VueRouter from 'vue-router';

import CardList from './components/CardList';
import AveReview from './components/AveReview';
import ItemDetail from './components/ItemDetail';
import Bottom from './components/Bottom'
import Left from './components/Left'
import Right from './components/Right'
import Middle from './components/Middle'
import Icon from 'vue-awesome/components/Icon'

import '../node_modules/amazon-autocomplete/dist/amazon-autocomplete.min.js'
import { store } from './services/store'
import 'vue-awesome/icons/facebook-square'
import 'vue-awesome/icons/google-plus-square'
import 'vue-awesome/icons/pinterest-square'
import 'vue-awesome/icons/twitter-square'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/star-half'
var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.use(VueLocalStorage);
Vue.use(VueRouter);
Vue.use(VueRx);
Vue.use(BootstrapVue);
Vue.use(SocialSharing);

Vue.component('app', App);
Vue.component('bottom', Bottom)      // global registration
Vue.component('card-list', CardList ); // register component globally
Vue.component('left', Left);
Vue.component('right', Right);
Vue.component('middle', Middle);
Vue.component('ave-review', AveReview);
Vue.component('icon', Icon);
Vue.component('item-detail', ItemDetail);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/no_image_available.jpg',
  loading: './assets/cube.gif',
  attempt: 1
});

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  routes:[
    {path: '/', component: App,
      children:[
        {
          path: 'detail',
          component: ItemDetail
        },
        {
          path: 'search',
          component: Middle
        }
      ]
    },
    
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  localStorage: {
    someNumber: {
      type: Number,
    },
    searchedWords: [],
  },
  mounted(){
    // store.commit('increment')

// console.log('store here:', store.state.count) // -> 1
  },
  components: { App }

}).$mount('#app')
