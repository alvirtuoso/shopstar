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
                  <h6 class="price">{{item.title}}</h6>
                      <price :item="item"></price>
                      <ave-review :item="item" ref="review"></ave-review>
                    <p v-if="item.isPrimeEligible" class="font-italic font-weight-bold prime">Prime Eligible</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script> 
// <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
import AmazonSvc from '../services/AmazonSvc';
// import Mixin from '../helpers/mixin.js';
import InfiniteLoading from 'vue-infinite-loading';
  export default {
    name: 'right',
    // mixins: [Mixin],
    computed:{
      itemList: function(){
        return this.$store.state.itemList
      }
    },
    methods:{
      onSelectedItem: function(item){
        // console.log('elee',typeof this.$store.state.itemList[0].isPrimeEligible);
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
  .price-label{
    color:#900;
    font-weight:bold;
  }
    .padding-5l{
      padding-left: 1em;
    }
    .stars{
      padding-left: 1em;
    }
    .curso{
       cursor:pointer;
    }
    .curso:hover{
      color:#167ac6;
    }
    .prime{
      color: #167ac6;
    }
    .pad-2{
      padding:2px;
    }
    .pad-40{
      padding-right:40px;
      padding-left:1px;
    }
</style>