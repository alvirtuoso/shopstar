<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-3">
            <!-- Left pane -->
            <div class="row justify-content-center">
                <h6></h6>
            </div>
            <!-- Render Left pane Items -->
            <div class="row justify-content-center">
                <router-link to="search">Back to search results</router-link>
            </div>
        </div><!-- end of left pane -->

           <!-- Cart items -->
        <div class="col-6">
            <div class="row">

                    <div class="col-8">
                        <h5 class="card-title">Shopping Cart</h5>
                    </div>
                    <div class="col-2">Price</div>
                    <div class="col-2">quantity</div>
        
            </div>
            <div class="card card-block">
            <div class="row" v-for="item in cartItems">
                    <div class="col-8">
                        <h6 class="amazon-blue">{{item.title}}</h6>
                    </div>
                    <div class="col-2">{{item.price}}</div>
                    <div class="col-2">
                        {{item.quantity}}
                    </div>
                </div>

            </div>
        </div>  <!-- end of Cart items -->

        <!-- Proceed to checkout -->
        <div class="col-3 my-auto">
            <div class="row">
              <div class="mx-auto">
                <button type="button" class="btn btn-warning">Procceed to amazon checkout</button>
                <p>(You will be redirected to amazon website)</p>
               </div>
            </div>
        </div> <!-- end of Proceed to Checkout -->

    </div>
</div>    
</template>
<script>

export default{
    name:'cart-items',
    // data: function(){
    //     return{
    //         cartItems: this.$store.state.cartItems
    //     }
    // },
    computed:{
        cartItems: function(){
            console.log('cartiems', this.$store.state.cartItems)
            return this.$store.state.cartItems
        }
    },
    methods:{
        onUpdateQuantity: function(cartItem, quantity){
            cartItem.quantity = quantity
                        // var cartItem = {offerListingId: this.item.offerListingId, quantity: 1}
            this.$store.dispatch('UpdateCartItems', {action:'update', item: cartItem})

        }
    }
}
</script>
<style lang="scss" scoped>
.amazon-blue{
    color: #167ac6;
    font-weight: 700;
}    
</style>