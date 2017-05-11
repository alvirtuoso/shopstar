<template>
<label>{{computedStars}}</label>
</template>
<script>
import AmazonSvc from '../services/AmazonSvc'
import {REVIEWS} from '../services/Constants'
    export default{
        name: 'ave-review',
        props: ['item'],
        mounted(){

        },
        data: function() {
            return {
                urlData: this.item.urlReview,
                aveStars: ''  
            }
        },
        computed:{
            computedStars: function(){
                // return this.urlReviewIndex
                // console.log('urlRevew', this.urlReview)
                AmazonSvc.getItemAveReviews(this.item.urlReview)
                    .then(resp => { 
                        // this.$store.state.itemList[this.urlReviewIndex].starLabel = resp.data
                            this.aveStars = resp.data
                            this.item.starLabel = this.aveStars;
                        })
             return this.aveStars
                // return   this.$store.state.itemList[this.urlReviewIndex].starLabel
            }
        }
    }
</script>