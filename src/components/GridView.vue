<template>
<div class="container-fluid">
    <div class="row">
        <a  v-for="(item, index) in $store.state.itemList" v-if="item.offerListingId.length != 0" class="card-grid">
            <div @click="onViewItemDetail(item)">
                <img :src="item.urlMediumImage"  alt="Image Not Available"/>
                <div class="mt-4"><ellipsis :text="item.title" :length="20"></ellipsis></div>
                <p class="description">
                    <div class="row pl-4">
                        <div class="col-6">
                            <ave-review :item="item" ref="review"></ave-review>
                        </div>
                        <div class="col-6">
                            <span v-if="item.isPrimeEligible" class="font-italic font-weight-bold" style="color:#167ac6">
                                Prime 
                            </span>
                        </div>
                    </div>
                    <price :item="item"></price>
                </p>
            </div>
           <!-- <button class="btn add-to-cart">Add to cart</button> -->
            <a href="javascript:void(0);" class="btn add-to-cart">Add to cart</a>
        </a>                         
    </div>
</div>
</template>

<script>
// import Mixin from '../helpers/mixin.js';
export default {
    name: 'grid-view',
    // mixins:[Mixin]
    // mounted(){

    // },
    methods:{
      onViewItemDetail: function(item){
           this.$store.dispatch('SetLoadingFlag', true)
         this.$store.dispatch('FetchItem', item.asin)
      },
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto);

@mixin shadow($level: 1) {
  @if $level == 1 {box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);} 
  @else if $level == 2 {box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);}
  @else if $level == 3 {box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);}
  @else if $level == 4 {box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);}
  @else if $level == 5 {box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);}
}
.description{
    font-size: 12.5px;
    line-height: 20px;
    padding: 5px 0 5px 0;
    margin-bottom: 2px;

}
.orange-color{
  background-color:#FFCA28;
  color:#000;
}
a {
  // Because why not?
  cursor:pointer;
}
img{
  max-width: 250px;
  height: auto;
}
.card-grid {
  display:block;
  text-align: center;
  max-width: 250px;
  min-height: 200px;
//   background: #f4f4f4;
  margin:.5rem;
  transition:all 250ms;
  @include shadow(1);
  &:hover,&:focus {
    @include shadow(3);
    transform:translateY(-5px);
  }
  &:active {
    @include shadow(2);
    transform:translateY(-2px);
  }
}

.title-card {
    padding: .5em;
  font-weight: 400;
  height: 40px;
  overflow: hidden;
  position: relative;

}
.title-card:after {
//  content: '...'; 
  position: absolute;
  bottom: 0;
  right: 5px;
  padding: 0 1.2em;
  background: inherit;
}
// .title-card span:after {
//   content: '\0000a0';
//   position: absolute;
//   z-index: 1;

// }

</style>