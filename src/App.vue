<template>
  <div>
  
      <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="//placehold.it/300x150/449955/FFF" width="30" height="30" class="d-inline-block align-top" alt="">
          Amazon45..
        </a>

        <div class="navbar-collapse collapse" id="navbar5">
           
            <div class="input-group w-50">
                <input id="search-input-off" type="text" class="form-control" @keyup.enter="search" v-model="keywords" placeholder="Search">
                <span class="input-group-btn">
                <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
              </span>
            </div>
           
        </div>
      </nav>
      <div class="row">
        <left :searchedWords="searchList" v-on:re_search='search'></left>
        <middle></middle>
      </div>
 
        <bottom></bottom>
      

  </div>
</template>

<script>
 
import AmazonSvc from './services/AmazonSvc'
import Mixin from './helpers/mixin.js'
import { mapState } from 'vuex'

export default {
  name: 'app',
  mixins: [Mixin],
  computed: mapState([
    'itemList'
  ]),
  mounted(){
    // console.log('store at Appvue:', this.store.state.count) // -> 1
    // let searchInput = new AmazonAutocomplete('#search-input'); 
  },
  props:{
    items:[]
  },
  data: function(){
    return{
      // itemList: [],
      searchList: [], // used to hold search keywords for the "search history" feature
      keywords: '',
      tempList:[]   // Temporarily holds the keywords. Used if keyword already exists.
    }
  },
  methods: {
   search: function(event){
      var i;
      var id = this.guid();

     // Check if the keyword search already exists
      if (this.tempList.indexOf(this.keywords) == -1) {
        //Not In the array! Add it.
        this.searchList.push({keyword: this.keywords, id: id});
        this.tempList.push(this.keywords);
      }
      this.$store.dispatch('UpdateKeyword', this.keywords)
      this.$store.dispatch('FetchData', {keyword: this.keywords, page: '1'});

      this.$localStorage.set('searchedWords', this.searchList);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}





</style>
