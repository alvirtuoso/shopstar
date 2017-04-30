<template>

<div class="col-md-7">
  <div class="row">
    <div class="col-sm-3" v-for="item in itemList">
      <div class="card">
          <img class="card-img-top" :src= "item.urlMediumImage" :alt="item.title">
          <div class="card-block padding-5">
              <b-popover :placement="'bottom'" :triggers="['hover']">
                <p class="title-collapse">
                    <a href="#">{{item.title}}</a>
                </p>
                  <span slot="content">{{item.title}} </span>
            </b-popover>
              <label>9 reviews</label>
          </div>
      </div>
    </div>
 </div>
   <div class="row justify-content-center">{{currentPage}}
     <b-pagination size="md"v-on:input="pageChanged" :total-rows="50" v-model="currentPage" :per-page="10">
     </b-pagination>
   </div>
</div>

</template>

<script>

import {fromPromise} from 'rxjs/observable/fromPromise';
import {from} from 'rxjs/observable/from';

  const msgObservable = from(
    ['Hi HEllo there msgObservable']
  );

export default {
  name: 'middle',
  subscriptions: {
      m$: msgObservable
    },
  // props:['items'],
  data () {
    return {
      // itemList: this.items,
      msg: [],
      ob: {},
      currentPage: 1
    }
  },
  mounted: function(){
      console.log('middle itemLIst data:', this.itemList);
  },
  computed:{
    itemList: function(){
      return this.$store.state.itemList
    }
  },
  methods: {
      pageChanged: function() {
        console.log('keyword state', this.$store.state.keyword)
        this.$store.dispatch('FetchData', {keyword: this.$store.state.keyword, page: this.currentPage});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.padding-5 {
   padding: 5px !important;
}
img{
  height: 160px;
}

.title-collapse {
  font-weight: 500;
  height: 40px;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  margin-bottom: 1em;
}
.title-collapse:after {
  // content: '...';
  position: absolute;
  bottom: 0;
  right: 5px;
  padding: 0 1.2em;
  background: inherit;
}
.title-collapse span:after {
  content: '\0000a0';
  position: absolute;
  z-index: 1;

}

.pageit {
    display: inline-block !important;
    list-style: none;
}

.pageit a {
    color: black !important;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
}

.pageit a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}

.pageit a:hover:not(.active) {background-color: #ddd;}
.page-itemit{
  color:red;
}
</style>

