<template>
    <div class="col-md-4 pad-40">
        <div class="card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item pad-2" v-for="(item, index) in itemList">
              <div class="row curso" @click="onSelectedItem(item)">
                <div class="col-5">
                  <img class="card-img-top" :src= "item.urlMediumImage" :alt="item.title">
                </div>
                <div class="col-7">
                  <h6>{{item.title}}</h6>
                  <label> {{item.price}}</label>
                  <label> {{item.averageStars}}</label>
                </div>                
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script> 
// this.$store.dispatch('SetActivePage', this.currentPage)
// <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
import AmazonSvc from '../services/AmazonSvc';
// import Mixin from '../helpers/mixin.js';
import InfiniteLoading from 'vue-infinite-loading';
  export default {
    name: 'right',
    // mixins: [Mixin],
    mounted(){
        // this.$root.$emit('show::modal','modalItem')
        // console.log('rightvue list', this.$store.state.itemList);
    },
    computed:{
      itemList: function(){
        return this.$store.state.itemList
      }
    },
    methods:{
      onSelectedItem: function(item){
        console.log('Rvue itemselected', item)
         this.$store.dispatch('FetchItem', item.asin)
                      
      },
      // onInfinite: function(){
      //   setTimeout(() => {
      //     const temp = [];
      //     for (let i = this.itemList.length + 1; i <= this.itemList.length + 10; i++) {
      //       temp.push(i);
      //     }
      //     // this.list = this.list.concat(temp);
      //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
      //   }, 1000);        
      // }
    }
  }
</script>
<style scoped>
    .curso{
       cursor:pointer;
    }
    .curso:hover{
      color:#167ac6;
    }
    .pad-2{
      padding:2px;
    }
    .pad-40{
      padding-right:40px;
      padding-left:1px;
    }
</style>