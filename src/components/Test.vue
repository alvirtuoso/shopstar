<template id="test">
<div>
      <div id="search">
           <star-rating :rating="3.8" :star-size="25" :read-only="true" :increment="0.01"></star-rating>
        <input type="text" id="search-input"/> 
      </div>

<div class="container-fluid">
  <div class="row">
    <left></left>  
    <div class="col-xs-12 col-md-8 bootstrap snippets">
        <div  v-for="(item, index) in itemList" class="product-content product-wrap clearfix">
            <div class="row">
                <div class="col-md-5 col-sm-12 col-xs-12">
                <div @click="onViewItemDetail(item)" class="product-image curso"> 
                    <img :src= "item.urlLargeImage" alt="No Image Available" class="img-responsive"> 
                    <span class="tag2 hot">
                      {{item.price}}
                    </span>
                </div>
                </div>
                <div class="col-md-7 col-sm-12 col-xs-12">
                <div class="product-deatil">
                    <ul class="curso">
                      <li @click="onViewItemDetail(item)">
                       <h6 class="name"> {{item.title}} </h6>
                      </li>
               
                    </ul>
                </div>
                <div class="product-info smart-form">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-6"> 
                    <a href="javascript:void(0);" class="btn orange-color">Add to cart</a>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="rating">
                                <social-sharing :url="item.urlItemLink" inline-template>
                                <div>
                                    <network network="facebook">
                                        <icon name="facebook-square" color="#3B5998" cursor="pointer" scale="2"></icon>
                                    </network>
                                    <network network="googleplus">
                                    <icon name="google-plus-square" color="#DD4B39" cursor="pointer" scale="2"></icon>
                                    </network>
                                    <network network="pinterest">
                                    <icon name="pinterest-square" color="#CC2127" cursor="pointer" scale="2"></icon>
                                    </network>
                                    <network network="twitter">
                                    <icon name="twitter-square" color="#55ACEE" cursor="pointer" scale="2"></icon>
                                    </network>
                                </div>
                                </social-sharing>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>


    </div>
  </div> 

  <div v-if="itemList.length > 1" class="row justify-content-center">
      <b-pagination size="md" v-on:input="pageChanged" :total-rows="50" v-model="currentPage" :per-page="10">
      </b-pagination>
  </div>

</div>


</div>
</template>
<script>

export default{
    name: 'test',
    template: '#test',
    created(){
        
    },
    data: function(){
        return{
            adata: 'Hello Tester'
        }
    }
}

</script>

<style scoped>

img{
  height: 20%;
}
.orange-color{
  background-color:#FFCA28;
  color:#000;
}
.onhover:hover{
    border-width: 6px;
    border-color: #ffcc66;
    border-style: solid;
    cursor:pointer;
}
.curso{
  cursor:pointer;
  list-style-type:none;
}
.curso:hover{
    text-decoration:underline;
    color:#ff9f1a;
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



.search {
  display: block;
  position: relative;
  padding: 40px;
  background: #fff;
  margin: 50px;
},

/* Words container */
.ac__inner{
    background: red;
}

/* Individual word element */
.ac__word{
    margin: 0;
    padding: 5px;
},

/* Word prefix style. It’s the span containing the search keyword within the word. */
.ac__prefix{
    font-weight: bold;
},

/* Style applied to each words while navigating through the list or on hover */
.ac__word--selected, .ac__word:hover{
    background-color: #e3e3e3;
}
</style>