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
                <input id="search-input"  type="text" class="form-control" @keyup.enter="search" v-model="keyword" placeholder="Search">
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
    this.searchInput = new AmazonAutocomplete('#search-input'); 
  },
  props:{
    items:[]
  },
  data: function(){
    return{
      // itemList: [],
      searchList: this.$store.state.keywordList, // used to hold search keywords for the "search history" feature
      keyword: '',
      searchInput: null
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
    },
    onSelectedWord: function(){
      //Log the selected word to the console
      this.searchInput.onSelectedWord(word => console.log(`searching for ${word}...`));
      console.log('searchInput', this.searchInput)
    }
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

/* Words container */
.ac__inner{
    background: #fafafa;
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

</style>
