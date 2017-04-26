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
              <label>34 reviews</label>
          </div>
      </div>
    </div>
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
  props:['items'],
  data () {
    return {
      itemList: this.items,
      msg: [],
      ob: {}
    }
  },
  mounted: function(){
      console.log('middle itemLIst data:', this.itemList);

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
  content: '...';
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

</style>

