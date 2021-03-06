// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueRx from 'vue-rx';
import Vuex from 'vuex'
import { sync } from 'vuex-router-sync';
import VuexStore from './services/store'

import App from './App';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/amazon-autocomplete/dist/amazon-autocomplete.min.js'

import {fromPromise} from 'rxjs/observable/fromPromise';
import {from} from 'rxjs/observable/from';

import VueLazyload from 'vue-lazyload';
import VueLocalStorage from 'vue-localstorage';
import Router from 'vue-router';

import Test from './components/Test';
import AddToCart from './components/AddToCart'
import CartItems from './components/CartItems'
import CardList from './components/CardList';
import AveReview from './components/AveReview';
import ItemDetail from './components/ItemDetail';
import Bottom from './components/Bottom'
import Left from './components/Left'
import Right from './components/Right'
import Middle from './components/Middle'
import Price from './components/Price'
import ItemTabs from './components/ItemTabs'
import GridView from './components/GridView'
import Ellipsis from './components/Ellipsis'
import About from './components/About'

import Icon from 'vue-awesome/components/Icon'
import ProgressiveImage from 'progressive-image/dist/vue'
import VueProgressiveImage from 'vue-progressive-image'
import StarRating from 'vue-star-rating'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import 'vue-awesome/icons/facebook-square'
import 'vue-awesome/icons/google-plus-square'
import 'vue-awesome/icons/pinterest-square'
import 'vue-awesome/icons/twitter-square'
import 'vue-awesome/icons/star'
import 'vue-awesome/icons/star-half'
import 'vue-awesome/icons/th-large'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/backward'

var SocialSharing = require('vue-social-sharing');

Vue.config.productionTip = false;

Vue.component('star-rating', StarRating);
Vue.component('pulse-loader', PulseLoader);

Vue.use(VueLocalStorage);
Vue.use(Vuex)
Vue.use(Router);
Vue.use(VueRx);
Vue.use(BootstrapVue);
Vue.use(SocialSharing);
Vue.use(VueProgressiveImage)
Vue.use(ProgressiveImage, {
  removePreview: true
});
Vue.component('test', Test);
Vue.component('app', App);
Vue.component('bottom', Bottom)      // global registration
Vue.component('card-list', CardList ); // register component globally
Vue.component('left', Left);
Vue.component('right', Right);
Vue.component('middle', Middle);
Vue.component('ave-review', AveReview);
Vue.component('icon', Icon);
Vue.component('item-detail', ItemDetail);
Vue.component('price', Price);
Vue.component('item-tabs', ItemTabs);
Vue.component('grid-view', GridView);
Vue.component('ellipsis', Ellipsis);
Vue.component('add-to-cart', AddToCart);
Vue.component('cart-items', CartItems);
Vue.component('about', About);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/no_image_available.jpg',
  loading: './assets/cube.gif',
  attempt: 1
});

export const router = new Router({
  mode: 'history',
  // base: __dirname,
  routes:[
    {path: '/', component: App,
      children:[
        {
          path: 'detail',
          component: ItemDetail,
          props: true
        },
        {
          path: 'search',
          component: Middle
        },
      ]
    },
    {
      path: '/cart', component: CartItems
    },         
    {
      path: '/bottom', component: Bottom
    },
    {
      path: '/about', component: About
    },   
    {
      path: '/test', component: AddToCart
    }
  ]
})
export const store = new Vuex.Store(VuexStore);

// sync(store, router); 

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
