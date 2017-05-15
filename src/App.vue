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
            <input type="text" placeholder="Search" class="search-query">
            <div class="input-group w-50">
                <input id="search-input-off" type="text" class="form-control" @keyup.enter="search" v-model="keyword" placeholder="Search">
                <span class="input-group-btn">
                <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
              </span>
            </div>
           
        </div>
      </nav>
      <div class="row">
        <br />
       
      </div>
      <div class="row">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>

import Mixin from './helpers/mixin.js'
import { mapState } from 'vuex'

export default {
  name: 'app',
  mixins: [Mixin],
  computed: mapState([
    'itemList'
  ]),
  mounted(){
    // console.log('store searchList at Appvue:', this.searchList[0]) // -> 1
    // let searchInput = new AmazonAutocomplete('#search-input'); 
  },
  props:{
    items:[]
  },
  data: function(){
    return{
      // itemList: [],
      searchList: this.$store.state.keywordList, // used to hold search keywords for the "search history" feature
      keyword: ''
    }
  },
  methods: {
   search: function(event){
      var id = this.guid();

      this.keyword = this.keyword.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
      this.$store.dispatch('FetchData', {keyword: this.keyword, page: 1});
      this.$store.dispatch('UpdateKeyword', this.keyword)
      this.$store.dispatch('SaveKeywordToArchive', {keyword: this.keyword, id: id})
      this.$store.dispatch('SetActivePage', 1);
      this.$localStorage.set('searchedWords', this.searchList);
      this.$router.push({ path: 'search'});
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
