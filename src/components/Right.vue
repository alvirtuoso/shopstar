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
  export default {
    name: 'right',
    created(){
      var xml = "<bookstore><book>" +
              "<title>Everyday Italian</title>" +
              "<author><first>Giada</first> <last>De Laurentiis</last></author>" +
              "<year>2005</year>" +
              "</book></bookstore>";
      parseString(xml, function (err, result) {
          console.dir(result.bookstore.book[0].author[0].first[0]);
      });

      this.fetchItems();
    },
    methods:{
      fetchItems(){
         AmazonSvc.getXmlRequest().subscribe(resp => {console.log(resp.data)})
        //console.log("hello")
      }
    }
  }
</script>
