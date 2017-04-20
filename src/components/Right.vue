<template>
    <div class="col-md-3">
             <img src="//placehold.it/300x150/449955/FFF">
            <h4 class="caption">Image Caption <span class="pull-right"><i class="icon-twitter"></i></span></h4>

            <hr>

            <img src="//placehold.it/300x150/2255EE/EEE">
            <h4 class="caption">Image Caption</h4>

            <hr>
    </div>
</template>

<script>
var parseString = require('xml2js').parseString;
import AmazonSvc from '../services/AmazonSvc';
import Mixin from '../helpers/mixin.js';

  export default {
    name: 'right',
    mixins: [Mixin],
    created(){

      this.foo(); // mixin method
      this.fetchItems();
    },
    methods:{
      fetchItems(){
         AmazonSvc.getXmlRequest().subscribe(resp => {
            parseString(resp.data, function(err, result){
              console.log(result.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].Title[0]);
              var amtText = result.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0];
              console.log(amtText)
            })
         })
        //console.log("hello")
      }
    }
  }
</script>
