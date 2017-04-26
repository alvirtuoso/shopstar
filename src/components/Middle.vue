<template>

<div class="col-md-7">

  <card-list :items="itemList"></card-list>
<h2>{{this.itemList[0].title}}</h2>
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
