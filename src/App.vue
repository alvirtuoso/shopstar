<template>
  <div id="app">
  
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
        <img src="//placehold.it/300x150/449955/FFF" width="30" height="30" class="d-inline-block align-top" alt="">
        Amazon45..
      </a>

      <div class="navbar-collapse collapse justify-content-stretch" id="navbar5">

          <form class="mx-2 my-auto d-inline w-50">
              <div class="input-group">
                  <input id="search-input" type="text" class="form-control" v-model="keywords" placeholder="Search">
                  <span class="input-group-btn">
                  <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
                </span>
              </div>
          </form>

      </div>

    </nav>

    <div class="row">
      <left :searchedWords="searchList"></left>
      <middle :items="itemList"></middle>
      <right></right>
    </div>

    <bottom></bottom>

  </div>
</template>

<script>
import Vue from 'vue'
import Top from './components/Top'
import Left from './components/Left'
import Middle from './components/Middle'
import Right from './components/Right'
import Bottom from './components/Bottom'
import AmazonSvc from './services/AmazonSvc';
import Mixin from './helpers/mixin.js';

export default {
  name: 'app',
  components: {
    Top, Left, Middle, Right, Bottom
  },
  mixins: [Mixin],
  created(){

  },
  props:{
    items:[]
  },
  data: function(){
    return{
      itemList: [],
      searchList: [],
      // itemList: ['one', 'two', 'three'],
      keywords: ''
    }
  },
  methods: {
   search: function(event){
      var i;
      // this.searchList.splice(0, this.searchList.length);
      var id = this.guid();
      this.searchList.push({keyword: this.keywords, id: id});
      if (event){
         event.preventDefault();
         AmazonSvc.http().get(this.keywords).then(resp => {
           console.log('sta', resp.status);
           if(resp.status == 200){

              // clear the list first.
               this.itemList.splice(0, this.itemList.length);
              for(i=0; i<resp.data.length; i++){
                if(!resp.data[i].urlSmallImage){resp.data[i].urlSmallImage = '/static/img/no_image_available.5304255.jpg';}
                if(!resp.data[i].urlMediumImage){resp.data[i].urlMediumImage = '/static/img/no_image_available.5304255.jpg';}
                if(!resp.data[i].urlLargeImage){resp.data[i].urlLargeImage = '/static/img/no_image_available.5304255.jpg';}
                this.itemList.push(resp.data[i]);            
              }
           }
         });
         this.$localStorage.set('searchedWords', this.searchList);

         // // You may use this to get observable
        // AmazonSvc.geItemsRequest(this.keywords).subscribe(
        //   (resp) => {
        //      for(i=0; i<resp.data.length; i++){
        //         this.itemList.push(resp.data[i]);
        //    }
        //   }
        // );
        
      }
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

button {
  cursor: pointer !important;
}



</style>
