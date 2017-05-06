<template>
<label>{{computedStars}}</label>
</template>
<script>
import axios from 'axios'
import AmazonSvc from '../services/AmazonSvc'
import {REVIEWS} from '../services/Constants'
    export default{
        name: 'ave-review',
        props: ['urlReview'],
        mounted(){
            // console.log('aveReview Urldata', this.urlData)
            // var mainObject = {},
            //     promises = [];
            // this.$store.state.itemList.forEach(function(item){
            //         // promises.push(axios.get(item.urlReview))
            //     return promises.push(axios.get(REVIEWS + encodeURIComponent(item.urlReview)))
            // });


            // axios.all(promises).then(function(results) {
            //     results.forEach(function(response) {
            //         // console.log('responsedata', response.value)
            //         mainObject[response.identifier] = response.value;
            //     })
            // });
            // axios.all(promises).then(function(arr){
            //     console.log('arr', arr)
            // })
    
        },
        data: function() {
            return {
                urlData: this.urlReview, //this.$store.state.itemList[this.urlReviewIndex],
                aveStars: ''  // this will contain the content of the passsword input automatically
            }
        },
        computed:{
            computedStars: function(){
                // return this.urlReviewIndex
                // console.log('urlRevew', this.urlReview)
                AmazonSvc.getItemAveReviews(this.urlReview)
                    .then(resp => { 
                        // this.$store.state.itemList[this.urlReviewIndex].starLabel = resp.data
                            this.aveStars = resp.data
                        })
             return this.aveStars
                // return   this.$store.state.itemList[this.urlReviewIndex].starLabel
            }
        }
    }
</script>