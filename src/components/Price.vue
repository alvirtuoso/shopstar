<template>
    <div>
        <span v-if="item.price > item.displayedPrice && item.displayedPrice != 0" class="price-display">{{displayedPrice}}</span>
        <span v-else class="price-display"> {{price}}</span>
        <span v-if="item.price > item.displayedPrice && item.displayedPrice != 0" class="strike-price">
            {{price}}
        </span>
    </div>
</template>
<script>
// item.displayedPrice is the discounted price displayed for an item. The item.Price is the original price as shown by amazon api xml data
import Mixin from '../helpers/mixin'
export default{
        name: 'price',
        mixins: [Mixin],
        props: ['item'],
        computed:{
            price: function(){
                return this.formatPrice(this.item.price, this.item.currencySign)
            },
            displayedPrice(){
                return this.formatPrice(this.item.displayedPrice, this.item.currencySign)
            }
        }
    }
        //     <span v-if="item.price > item.displayedPrice && item.displayedPrice != 0" class="price-display">{{item.currencySign}}{{item.displayedPrice}}</span>
        // <span v-else class="price-display"> {{item.currencySign}}{{item.price}}</span>
        // <span v-if="item.price > item.displayedPrice && item.displayedPrice != 0" class="strike-price">
        //     {{item.currencySign}}{{item.price}}
        // </span>
</script>
<style scoped>
.strike-price{
  text-decoration: line-through; 
  color:#000; font-weight: normal
}
.price-display{
    color:#900;
    font-weight:bold;
    font-size:17px;
}
</style>