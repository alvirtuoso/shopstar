<template>

<div class="col-md-7">
  
  <card-list></card-list>
</div>

</template>

<script>
// import axios from 'axios'


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
  data () {
    return {
      msg: [],
      ob: {}
    }
  },
  created: function(){
    //http://webservices.amazon.com/onca/xml?AWSAccessKeyId=AKIAJHBDJY4JNUZAPLPQ&AssociateTag=alvirtuoso-20&Keywords=iphone%20plus&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-04-18T20%3A43%3A10.000Z&Signature=MV%2FHudgDDzTa%2BSsAbQO6Ce44QYW6mbouUg%2FKZh9YPvs%3D
    var url = 'api/onca/xml?AWSAccessKeyId=AKIAJHBDJY4JNUZAPLPQ&AssociateTag=alvirtuoso-20&Keywords=iphone%20plus&Operation=ItemSearch&ResponseGroup=Images%2CItemAttributes%2COffers&SearchIndex=All&Service=AWSECommerceService&Timestamp=2017-04-18T21%3A19%3A10.000Z&Signature=osCOAPmuYk8augu6ydLLTi1JJUuwNLHfOSF7TpeoJFw%3D';
    // var url = 'api/users/2'; //'https://jsonplaceholder.typicode.com'

    // this.$http.get(url).then((resp) => {console.log('middelvue created')});
            
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
