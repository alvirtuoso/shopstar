<template>
<div class="container-fluid">
   <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
        <a class="navbar-brand" href="/">
          <img src="../assets/cube.gif" width="30" height="30" class="d-inline-block align-top" alt="">
          Amazon45..
        </a>
   </nav>
   <div class="ml-5 mr-5">
        <div class="row mb-4 mt-5 note-header">
            <div class="col-3">
                <h5>Shopping Cart</h5>
            </div>
            <div class="col-7">

                <router-link to="search">
                <icon name="backward" color="#55ACEE" cursor="pointer" scale=".75"></icon>
                    Back to search results
                </router-link>
            </div>
        </div>
            <div class="row">
                <!-- Cart items -->
                <div class="col-8">
                    <div class="row">

                        <div class="col-8">

                        </div>
                        <div class="col-2"><h6>Price</h6></div>
                        <div class="col-2"><h6>Quantity</h6></div>

                    </div>
                    <div class="list-group" v-for="(item, index) in cartItems">
                        <div class="row">
                            <div class="col-2 mx-auto">
                                <img :src= "item.item.urlLargeImage" alt="Image Not Available">
                            </div>
                            <div class="col-6 my-auto">
                                <h6>{{item.item.title}}</h6>
                            </div>
                            <div class="col-2 my-auto"><price :item="item.item" :isCart="true"></price></div>
                            <div class="col-2 my-auto">
                                <input @blur="onUpdateQuantity(item, index)" v-model="item.quantity" style="max-width:45px">
                            </div>
                        </div>

                    </div>
                </div>  <!-- end of Cart items -->

                <!-- Proceed to checkout -->
                <div class="col-4 my-auto bg-gray">
                    <div class="row justify-content-center">
                        <button @click="onCheckout" type="button" class="btn btn-warning">Procceed to amazon checkout</button>
                        <p>(You will be redirected to amazon website)</p>
                    </div>
                    <div class="row justify-content-center">
                        <p><h5>Total: {{total}} </h5></p>
                    </div>

                </div> <!-- end of Proceed to Checkout -->

            </div>
   </div>
</div>
</template>
<script>
import Mixin from '../helpers/mixin.js'
export default{
    name:'cart-items',
    mixins:[Mixin],
    data: function(){
        return{
            cartItems: this.$store.state.cartItems
        }
    },
    computed:{
        total: function(){
            var tot = 0;
            var currency ='';
            for(var i=0; i < this.$store.state.cartItems.length; i++){
                tot = tot + (this.$store.state.cartItems[i].quantity * this.$store.state.cartItems[i].item.displayedPrice)
                if(currency === ''){
                    currency = this.$store.state.cartItems[i].currencySign;
                }
            }
            return tot;
            // return this.formatPrice(tot, currency);
        }
    },
    methods:{
        onUpdateQuantity: function(cartItem, index){
            if(cartItem.quantity > 0)
                this.$store.dispatch('UpdateCartItems', {action:'update', item: cartItem, index: index})
            else
                this.$store.dispatch('UpdateCartItems', {action:'remove', item: cartItem, index: index})
        },
        onCheckout: function(){

        }
    }
}
</script>
<style lang="scss" scoped>
.amazon-blue{
    color: #167ac6;
    font-weight: 700;
}
img {
    max-height: auto;
    max-width: 75px;
}
</style>