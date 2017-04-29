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
                    <input id="search-input-off" type="text" class="form-control" v-model="keywords" placeholder="Search">
                    <span class="input-group-btn">
                    <button class="btn btn-outline-warning" v-on:click="search" type="button">GO</button>
                  </span>
                </div>
           
        </div>
      </nav>
      <div class="row">
        <left :searchedWords="searchList" v-on:re_search='search'></left>
        <middle :items="itemList"></middle>
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
    'count'
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
      itemList: [],
      searchList: [],
      // itemList: ['one', 'two', 'three'],
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
         AmazonSvc.http().get(this.keywords).then(resp => {
           console.log('sta', resp.data);
           if(resp.status == 200 && resp.data != 'server error'){

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
        
      // }
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
},

button {
  cursor: pointer !important;
}




</style>
