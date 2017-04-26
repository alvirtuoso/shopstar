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
                  <input type="text" class="form-control" v-model="keywords" placeholder="Search">
                  <span class="input-group-btn">
                  <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
                </span>
              </div>
          </form>

      </div>

    </nav>

    <div class="row">
      <left></left>
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

export default {
  name: 'app',
  components: {
    Top, Left, Middle, Right, Bottom
  },
  created(){

  },
  props:{
    items:[]
  },
  data: function(){
    return{
      itemList: [],
      // itemList: ['one', 'two', 'three'],
      keywords: ''
    }
  },
  methods: {
   search: function(event){
      var i;
      if (event){
        // this.itemList.push("one");
         event.preventDefault();
         AmazonSvc.http().get(`thermos`).then(resp => {
           for(i=0; i<resp.data.length; i++){
             this.itemList.push(resp.data[i]);
           }
         })
        // AmazonSvc.geItemsRequest('relumins').subscribe(
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
