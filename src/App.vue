<template>
  <div class="container-fluid">
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="./assets/cube.gif" width="30" height="30" class="d-inline-block align-top" alt="">
          Amazon45..
        </a>

        <div class="navbar-collapse collapse" id="navbar5">
            <div class="input-group w-50">
                <input id="search-input"  type="text" ref="search" class="form-control" v-model="keyword" placeholder="Search">
                <span class="input-group-btn">
                <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
              </span>
            </div>
           
        </div>
      </nav>
      <div class="row">
        <br />
          
          <div v-if="loading" class="loading">
            <pulse-loader color="#757575" size="18px"></pulse-loader>
          </div>

          <b-alert :show="countDown" dismissible variant="warning" @dismiss-count-down="countDownChanged">
             {{this.$store.state.error}}
          </b-alert>          
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
//  @keyup.enter="search"
import Mixin from './helpers/mixin.js'
// import { mapState } from 'vuex'
import {store} from './main.js'
import {router} from './main.js'
export default {
  name: 'app',
  mixins: [Mixin],
  // computed: mapState([
  //   'itemList'
  // ]),
  computed: {
    loading: function(){
      if(this.$store.state.loading){
        this.isLoading = this.$store.state.loading
      }else{
        this.isLoading = false
      }
      return this.isLoading
    },
    countDown: function(){
      if(this.$store.state.error === '')
        return 0
      else {
        return 3 // seconds
      }
    }
  },
  mounted(){
    this.searchInput = new AmazonAutocomplete('#search-input'); 
    this.searchInput.onSelectedWord(word => {this.keyword = word; this.search()});

    // console.log('sear', this.searchInput._input);
  },
  props:{
    items:[]
  },
  data: function(){
    return{
      // itemList: this.$store.state.itemList,
      // searchList: this.$store.state.keywordList, // used to hold search keywords for the "search history" feature
      keyword: '',
      searchInput: null,
      isLoading: false,
      test: true
    }
  },
  methods: {
   search: function(event){
      var keysearch = this.keyword.replace(/[`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, '');
      this.searchInput._input.nextElementSibling.style.display = 'none'
      this.$store.dispatch('SetLoadingFlag', true)
      this.$store.dispatch('FetchData', {keyword: keysearch, page: 1});
       router.push('search') 
    },
    countDownChanged(dismissCountDown) {
      if(dismissCountDown == 1){
          // update error store
          this.$store.dispatch('ClearError')
      }
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* Absolute Center Spinner */
.loading {
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 100px; 
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.note-header{
    padding-left: 1px !important;
    margin-left: 2px !important;
    margin-right: 2px !important;
    font-size: .9rem;
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: #bababa;
}
/* Transparent Overlay */
.loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1); 
}

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  margin-top: -0.5em;

}
/* Words container */
.ac__inner{
    background: #fafafa;
}
.ac__container{
  z-index:1;
}

/* Individual word element */
.ac__word{
    margin: 0;
    padding: 5px;
}

/* Word prefix style. It’s the span containing the
search keyword within the word. */
.ac__prefix{
    font-weight: bold;
}

/* Style applied to each words while navigating through
the list or on hover */
.ac__word--selected, .ac__word:hover{
    background-color: #e3e3e3;
}

.add-to-cart, .like {
  background: #ff9f1a;
  margin-bottom:.5em;
  border: none;
  font-size: 13px !important;
  // text-transform: UPPERCASE;
  // min-height: 50px;
  // max-width: 110px;
  padding: 3px; 
  color: #000 !important;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    cursor: pointer;
    color: #fff !important; }

</style>
