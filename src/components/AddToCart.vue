<template>
    <button @click="onAdd" class="btn add-to-cart">Add to cart</button>
</template>
<script>
import {router} from '../main.js'
export default{
    name:'add-to-cart',
    props:['item'],
    methods:{
        onAdd: function(){
            var cartItem = {
                item: this.item,
                OfferListingId: this.item.offerListingId, 
                quantity:1
            }
            this.$store.dispatch('UpdateCartItems', {action:'add', item: cartItem})
            router.push('cart')
        }
    }
} 
</script>

